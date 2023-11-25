import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-green-600 text-7xl font-bold'>Currency Converter</h1>
      <h2 className='text-green-600 text-5xl font-bold'>Samiran Bisal</h2>
    </>
  )
}

export default App
