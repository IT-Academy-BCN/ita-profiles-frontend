import React, {useState} from "react";
import LoginButton from "./components/LoginButton";
import RestrictedAccessPopup from "./components/RestrictedAccessPopup";
import './styles/App.css'

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleClick(): void {
    setIsModalOpen(true);
  }

  function handleClose(): void {
    setIsModalOpen(false);
  }

  return (
    <>
     <h1>Welcome to ita profiles</h1>
      <LoginButton onClick={handleClick} />
      {isModalOpen && <RestrictedAccessPopup onClose={handleClose} />}
    </>
  );
};
export default App
