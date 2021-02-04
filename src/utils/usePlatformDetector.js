import { useEffect, useState } from "react"

export const OS = {
  Android: "Android",
  iOS: "iOS",
  Linux: "Linux",
  Mac: "Mac",
  Windows: "Windows",
}

export const BROWSER = {
  Safari: "Safari",
}

function _isIPadOnIOS13({ userAgent }) {
  if (!userAgent || !document) return undefined
  return userAgent.includes("Mac") && "ontouchend" in document
}

function _isIOS({ platform, userAgent }) {
  if (!platform) return undefined
  return (
    ["iPad", "iPhone", "iPod"].some((device) => platform.includes(device)) ||
    _isIPadOnIOS13({ userAgent })
  )
}

function _isMac({ platform, userAgent }) {
  if (!platform) return undefined
  return platform.includes("Mac") && !_isIPadOnIOS13({ userAgent })
}

function _isWindows({ platform }) {
  if (!platform) return undefined
  return platform.includes("Win")
}

function _isAndroid({ platform, userAgent }) {
  if (!platform) return undefined
  if (platform.includes("Android")) return true
  if (platform.includes("Linux") && userAgent.includes("Android")) return true
}

function _isLinux({ platform }) {
  if (!platform) return undefined
  if (_isAndroid({ platform })) return false
  return ["Linux", "FreeBSD", "OpenBSD"].some((device) =>
    platform.includes(device)
  )
}

function _isSafari({ platform, userAgent, vendor }) {
  if (!platform) return undefined

  if (_isIOS({ platform, userAgent })) return true

  if (_isWindows({ platform })) {
    return userAgent ? userAgent.includes("Safari") : undefined
  }

  if (_isMac({ platform })) {
    return vendor ? vendor.includes("Apple") : undefined
  }
}

function usePlatformDetector() {
  const [os, setOs] = useState(undefined)
  const [browser, setBrowser] = useState(undefined)

  useEffect(() => {
    if (navigator) {
      if (_isIOS(navigator)) {
        setOs(OS.iOS)
      } else if (_isMac(navigator)) {
        setOs(OS.Mac)
      } else if (_isWindows(navigator)) {
        setOs(OS.Windows)
      } else if (_isAndroid(navigator)) {
        setOs(OS.Android)
      } else if (_isLinux(navigator)) {
        setOs(OS.Linux)
      }

      if (_isSafari(navigator)) {
        setBrowser(BROWSER.Safari)
      }
    }
  }, [])

  return { os, browser }
}

export default usePlatformDetector
