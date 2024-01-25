import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return (
    <div>
      <h2>This is custom react function</h2>   
    </div>
    
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">Click to visit Google</a>
)

const ReactElement = React.createElement(
  ('a'),
  {href: 'http://google.com', target: '_blank'}, 'Create a Google'

)

ReactDOM.createRoot(document.getElementById('root'))
.render(

 
    // ReactElement
    // AnotherElement
    <App />

    
)

