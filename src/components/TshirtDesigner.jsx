import React, { useState } from "react";

const TShirtDesigner = () => {
  const [logo, setLogo] = useState(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (event) => {
    const rect = event.target.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.width / 2,
      y: event.clientY - rect.height / 2,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>T-Shirt Designer</h1>
      <input type="file" onChange={handleImageUpload} />
      <div
        style={{
          width: "300px",
          height: "400px",
          border: "1px solid black",
          margin: "20px auto",
          backgroundImage: `url('/tshirt.png')`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {logo && (
          <img
            src={logo}
            alt="Logo"
            draggable="true"
            onDragEnd={handleDrag}
            style={{
              position: "absolute",
              top: `${position.y}px`,
              left: `${position.x}px`,
              width: "100px",
              height: "auto",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TShirtDesigner;
