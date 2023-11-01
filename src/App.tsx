import React from "react";
import LoginButton from "./components/LoginButton";
import './styles/App.css'

const App: React.FC = () => {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
     <h1>Welcome to ita profiles</h1>
      <LoginButton onClick={handleClick}/>
    </>
  )
}

export default App
