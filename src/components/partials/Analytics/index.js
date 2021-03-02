import React, { useEffect } from "react"
import fetchJsonp from "fetch-jsonp"

function Analytics() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchJsonp(
        "http://local.avail.co:3000/api/v2/public/analytics"
      )
      if (response.ok) {
        const body = await response.json()
        console.log(body)
      }
    }
    fetchData()
  }, [])

  return <React.Fragment />
}

export default Analytics
