import React, { useRef, useState } from "react";

const TShirtDesigner = () => {
  const [tshirtImage, setTshirtImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 }); 
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef(null);

  // upload t shirt
  const handleTshirtUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setTshirtImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // upload logo
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // drag start
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // position during drag
  const handleMouseMove = (e) => {
    if (isDragging) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      setLogoPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // end drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // for drag image
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // clean canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // design t shirt
    if (tshirtImage) {
      const img = new Image();
      img.src = tshirtImage;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // design logo
        if (logo) {
          const logoImg = new Image();
          logoImg.src = logo;
          logoImg.onload = () => {
            ctx.drawImage(logoImg, logoPosition.x, logoPosition.y, 100, 100); // লোগো সাইজ (100x100)
          };
        }
      };
    }
  };

  // re size canvas
  React.useEffect(() => {
    drawCanvas();
  }, [tshirtImage, logo, logoPosition]);

// Save the final image
   const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "customized_tshirt.png";
    link.click();
  };

  return (
    <div className="tshirtDesign">
      <h2>Design Your T-Shirt</h2>
      <div>
        <label>Upload your t-shirt:</label>
        <input type="file" accept="image/*" onChange={handleTshirtUpload} />
      </div>
      <div>
        <label>Upload your logo here:</label>
        <input type="file" accept="image/*" onChange={handleLogoUpload} />
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: "1px solid black", marginTop: "20px" , backgroundColor: "darkslategray"}}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <br />
       <button onClick={handleSave} style={{ marginTop: "10px", borderRadius: "20px", backgroundColor: "green" }}>
         Save Final Image
       </button>
    </div>
  );
};

export default TShirtDesigner;


