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

function useTabs({ defaultIndex, ...htmlProps }) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex || 0)
  const [tabs, setTabs] = useState([])
  const registerTab = useCallback(({ element, ...rest }) => {
    if (!element) return
    setTabs((prevTabs) => {
      const exists = prevTabs.find((tab) => tab.element === element)
      if (exists) return prevTabs
      const index = prevTabs.findIndex((tabEl) => {
        console.log(
          "find index: ",
          tabEl.element,
          element,
          exists,
          tabEl.element.compareDocumentPosition(element)
        )
        if (!tabEl.element || !element) return false
        return Boolean(
          tabEl.element.compareDocumentPosition(element) &
            Node.DOCUMENT_POSITION_PRECEDING
        )
      })
      console.log("set tabs: ", exists, index, prevTabs, element)
      const newItem = { element, ...rest }
      if (index === -1) {
        return [...prevTabs, newItem]
      } else {
        return [...prevTabs.slice(0, index), newItem, ...prevTabs.slice(index)]
      }
    })
  }, [])
  const deregisterTab = useCallback(() => {}, [])
  return {
    htmlProps,
    tabElements: { tabs, registerTab, deregisterTab },
    selectedIndex,
    setSelectedIndex,
  }
}

// function useTabsList(props) {
//   const {} = useContext(TabsContext)
// }

function useTab({
  ref: outerRef,
  index: indexProp,
  onClick = noop,
  onFocus = noop,
  ...rest
}) {
  const innerRef = useRef(null)

  const { tabElements, selectedIndex, setSelectedIndex } = useContext(
    TabsContext
  )

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
    return () => {
      if (innerRef.current) {
        tabElements.deregisterTab({ element: innerRef.current })
      }
    }
  }, [innerRef.current])
  return {
    ...rest,
    as: "button",
    isSelected,
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

export function Tabs({ param, animate = false, children, ...props }) {
  const params = new URLSearchParams(window.location.search)
  const { htmlProps, ...ctx } = useTabs({
    ...props,
    defaultIndex: params.get(param),
  })
  const context = useMemo(() => ctx, [ctx])
  return (
    <TabsContext.Provider value={context}>
      <Box {...htmlProps}>{children}</Box>
    </TabsContext.Provider>
  )
}

export function TabList(props) {
  return <Box {...props} />
}

export const Tab = forwardRef(function Tab({ sx = {}, ...props }, ref) {
  const tabProps = useTab({ ...props, ref })
  return <Box {...tabProps} sx={{ apperance: "none", ...sx }} />
})

export const TabPanels = forwardRef(function TabPanels(props, ref) {
  const panelsProps = useTabPanels(props)
  return <Box {...panelsProps} ref={ref} />
})

export const TabPanel = forwardRef(function TabPanel(props, ref) {
  const panelProps = useTabPanel(props)
  return <Box {...panelProps} ref={ref} />
})
