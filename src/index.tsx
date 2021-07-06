import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import LogRocket from "logrocket"

LogRocket.init("muodip/portfolio-2xotf")
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
