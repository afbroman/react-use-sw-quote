import React from 'react'
import { useMyHook } from '@afbroman/react-use-sw-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App