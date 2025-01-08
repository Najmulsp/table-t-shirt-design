import React, { useState, useRef } from 'react';

function TShirtCustomizer() {
  const [logo, setLogo] = useState(null); // লোগো স্টেট
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 }); // লোগোর পজিশন
  const [logoSize, setLogoSize] = useState({ width: 100, height: 100 }); // লোগোর সাইজ
  const canvasRef = useRef(null); // Canvas রেফারেন্স

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result); // লোগো সেট করা
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    setLogoPosition({
      x: e.clientX - canvasRef.current.offsetLeft - logoSize.width / 2,
      y: e.clientY - canvasRef.current.offsetTop - logoSize.height / 2,
    });
  };

  const handleResize = (e) => {
    setLogoSize({
      width: e.target.value,
      height: (e.target.value * 100) / 100, // Aspect ratio maintain
    });
  };

  const drawTShirt = () => {
    const ctx = canvasRef.current.getContext('2d');
    const tshirtImage = new Image();
    tshirtImage.src = 'path_to_tshirt_image.jpg';
    tshirtImage.onload = () => {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(tshirtImage, 0, 0, canvasRef.current.width, canvasRef.current.height);
      if (logo) {
        const logoImage = new Image();
        logoImage.src = logo;
        logoImage.onload = () => {
          ctx.drawImage(logoImage, logoPosition.x, logoPosition.y, logoSize.width, logoSize.height);
        };
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={handleLogoUpload} />
      <input type="range" min="50" max="200" value={logoSize.width} onChange={handleResize} />
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseMove={handleDrag}
        onMouseUp={drawTShirt}
        style={{ border: '1px solid black', marginTop: '10px' }}
      />
    </div>
  );
}

export default TShirtCustomizer;
