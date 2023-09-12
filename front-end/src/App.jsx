/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;