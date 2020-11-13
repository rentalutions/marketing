import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  useRef,
  Children,
  cloneElement,
} from "react"
import { Box } from "@rent_avail/layout"
import { wrapEvent, noop } from "@rent_avail/utils"

function assignRef(ref, value) {
  if (ref === null) return
  if (typeof ref === "function") {
    ref(value)
    return
  }
  try {
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign ${value} to ${ref}`)
  }
}

function mergeRefs(...refs) {
  return (value) => refs.forEach((ref) => assignRef(ref, value))
}

const TabsContext = createContext()

function useTabs({ defaultIndex, searchParam, ...htmlProps }) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex || 0)
  const [tabs, setTabs] = useState([])
  const registerTab = useCallback(({ element, ...rest }) => {
    if (!element) return
    setTabs((prevTabs) => {
      const exists = prevTabs.find((tab) => tab.element === element)
      if (exists) return prevTabs
      const index = prevTabs.findIndex((tabEl) => {
        if (!tabEl.element || !element) return false
        return Boolean(
          tabEl.element.compareDocumentPosition(element) &
            Node.DOCUMENT_POSITION_PRECEDING
        )
      })
      const newItem = { element, ...rest }
      if (index === -1) {
        return [...prevTabs, newItem]
      } else {
        return [...prevTabs.slice(0, index), newItem, ...prevTabs.slice(index)]
      }
    })
  }, [])
  const deregisterTab = useCallback(({ element }) => {
    setTabs((prevTabs) => {
      const index = prevTabs.findIndex((tab) => tab.element === element)
      if (index) return [...prevTabs.splice(index, 1)]
    })
  }, [])
  return {
    htmlProps,
    searchParam,
    tabElements: { tabs, registerTab, deregisterTab },
    selectedIndex,
    setSelectedIndex,
  }
}

/**
 *
 * useTabsList should be where key events are calculated.It's used to manage the
 * tab buttons.
 *
 * @param props Props object for TabsList
 */

function useTabsList(props) {
  const { selectedIndex, setSelectedIndex } = useContext(TabsContext)
  return { ...props }
}

function useTab({
  ref: outerRef,
  index: indexProp,
  onClick = noop,
  onFocus = noop,
  param,
  ...props
}) {
  const innerRef = useRef(null)

  const {
    tabElements,
    selectedIndex,
    setSelectedIndex,
    searchParam,
  } = useContext(TabsContext)

  const index =
    indexProp ??
    tabElements.tabs.findIndex((tab) => tab.element === innerRef.current)

  const isSelected = index === selectedIndex

  function handleClick() {
    setSelectedIndex(index)
  }

  function handleFocus() {
    setSelectedIndex(index)
  }

  useLayoutEffect(() => {
    tabElements.registerTab({ element: innerRef.current })
    if (searchParam === param) {
      setSelectedIndex(index)
    }
    return () => {
      if (innerRef.current) {
        tabElements.deregisterTab({ element: innerRef.current })
      }
    }
  }, [innerRef.current])
  return {
    ...props,
    as: "button",
    role: "tab",
    tabIndex: isSelected ? 0 : -1,
    "aria-selected": isSelected,
    ref: mergeRefs(innerRef, outerRef),
    onClick: wrapEvent(handleClick, onClick),
    onFocus: wrapEvent(handleFocus, onFocus),
  }
}

function useTabPanels(props) {
  const { selectedIndex } = useContext(TabsContext)
  const validChildren = Children.toArray(props.children).filter((child) =>
    React.isValidElement(child)
  )
  const children = validChildren.map((child, idx) => {
    return cloneElement(child, {
      isSelected: idx === selectedIndex,
    })
  })
  return {
    ...props,
    children,
  }
}

function useTabPanel(props) {
  const { isSelected, children, isLazy, ...htmlProps } = props
  return {
    role: "tabpanel",
    children: isSelected || !isLazy ? props.children : null,
    hidden: !isSelected,
    ...htmlProps,
  }
}

export function Tabs({ searchParam, animate = false, children, ...props }) {
  const params = new URLSearchParams(window.location.search)
  const { htmlProps, ...ctx } = useTabs({
    ...props,
    searchParam: params.get(searchParam),
  })
  const context = useMemo(() => ctx, [ctx])
  return (
    <TabsContext.Provider value={context}>
      <Box {...htmlProps}>{children}</Box>
    </TabsContext.Provider>
  )
}

export function TabList({ sx = {}, ...props }) {
  return (
    <Box
      {...props}
      role="tablist"
      as="nav"
      sx={{
        display: "flex",
        flexWrap: "no-wrap",
        overflowX: "auto",
        "-webkit-overflow-scrolling": "touch",
        "-ms-overflow-style": "-ms-autohiding-scrollbar",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        ...sx,
      }}
    />
  )
}

export const Tab = forwardRef(function Tab({ sx = {}, ...props }, ref) {
  const tabProps = useTab({ ...props, ref })
  return (
    <Box
      {...tabProps}
      sx={{ apperance: "none", border: 0, flex: "0 0 auto", ...sx }}
    />
  )
})

export function TabPanels(props) {
  const { selectedIndex } = useContext(TabsContext)
  const validChildren = Children.toArray(props.children).filter((child) =>
    React.isValidElement(child)
  )
  const children = validChildren.map((child, idx) => {
    return cloneElement(child, {
      isSelected: idx === selectedIndex,
    })
  })
  return children
}

export const TabPanel = forwardRef(function TabPanel(props, ref) {
  const panelProps = useTabPanel(props)
  return <Box {...panelProps} ref={ref} />
})
