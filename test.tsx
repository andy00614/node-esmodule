import React from 'react'
import ReactServer from 'react-dom/server'

const Greet = () => <h1>Hello, world!</h1>
console.log(ReactServer.renderToString(<Greet />))
