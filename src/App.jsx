import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(data => setData(data.message))
  },[])
  
  return (
    <div className="App">
      <h1>hello this is fetching data tutorial</h1>
      <img width={500} src={data} />
    </div>
  )
}

export default App
