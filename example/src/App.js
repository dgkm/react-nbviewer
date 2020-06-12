import React from 'react'

import NbViewer from 'react-nbviewer/dist/default.tsx'
import sourceURL from './example.ipynb'

const App = () => {
  const [source, setSource] = React.useState('')
  React.useEffect(() => {
    fetch(sourceURL)
      .then(src => src.text())
      .then(src => setSource(src))
  }, [])
  return <NbViewer source={source} />
}

export default App
