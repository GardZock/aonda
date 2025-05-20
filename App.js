import { useEffect, useState } from "react";
import Loading from "./loading"
import Home from "./src/pages/home"
import "./styles/global.css"

export default function App() {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false)
    // }, 5000)
  }, []) 

  return (
    <>
      {isLoading ? 
      (
        <Loading/>
      ) : (
        <Home/>
      )}
    </>
  );
}