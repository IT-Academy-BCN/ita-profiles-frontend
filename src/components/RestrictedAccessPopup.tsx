import React from "react";

const RestrictedAccessPopup: React.FC = () => {
  return (
    <div
      style={{
        width: "719px",
        height: "547px",
        top: "174px",
        left: "349px",
        borderRadius: "12px",
        position: "absolute",
        backgroundColor: "white",
      }}
    >
      <img
        src="lock-image.png"
        alt="Lock"
        style={{
          width: "118px",
          height: "118px",
          top: "250px",
          left: "650px",
          position: "absolute",
        }}
      />
      <h2
        style={{
          textAlign: "center",
          marginTop: "400px",
          fontSize: "24px",
        }}
      >
        Acceso restringido
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        Entra o regístrate
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            width: "309px",
            height: "63px",
            borderRadius: "12px",
            backgroundColor: "#B91879",
            color: "white",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Soy candidato
        </button>
        <button
          style={{
            width: "309px",
            height: "63px",
            borderRadius: "12px",
            backgroundColor: "#B91879",
            color: "white",
            fontSize: "18px",
          }}
        >
          Soy reclutador
        </button>
      </div>
    </div>
  );
};

export default RestrictedAccessPopup;