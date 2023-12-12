import React from "react";

const LoginButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Entrar
    </button>
  );
};

export default LoginButton;