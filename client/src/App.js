import React, { useState, useEffect } from "react"

const linkStyle = {
  color: "#999",
  textDecorationStyle: "dotted",
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetch("/api/data", {
        method: "GET",
        credentials: "same-origin",
      })
      const read = await fetchedData.json()
      setData(read.data)
      console.log(read)
    }
    getData()
  }, [])

  return (
    <main>
      {data.length ? data.map((teamMember, i) => (
          <div key={i}>
            <img src={teamMember.picture} alt={teamMember.fullName} />
          </div>
        )) : null}
    </main>
  )
}

export default App