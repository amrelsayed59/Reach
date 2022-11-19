import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MainProvider } from './context/gloabal'

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.querySelector('#root')
)
