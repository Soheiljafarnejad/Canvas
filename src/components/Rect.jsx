import { useEffect, useRef } from "react";
import Canvas from "../common/Canvas";

const Rect = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
    ctx.clearRect(20, 20, 30, 30);

    // way 1
    ctx.fillStyle = "#fff";
    ctx.fillRect(150, 150, 30, 30);

    // way 2
    ctx.fillStyle = "yellow";
    ctx.rect(200, 200, 15, 15);
    ctx.fill();
  }, []);
  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <Canvas canvasRef={canvas} ctxRef={ctxRef} />
    </div>
  );
};

export default Rect;
