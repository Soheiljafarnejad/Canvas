import { useEffect, useRef } from "react";
import Canvas from "../common/Canvas";

const Stroke = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const ctx = ctxRef.current;

    // way 1
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(25, 25, 100, 100);

    // way 2
    ctx.strokeStyle = "green";
    ctx.rect(150, 150, 30, 30);
    ctx.stroke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <Canvas canvasRef={canvas} ctxRef={ctxRef} className="bg-slate-700" />
    </div>
  );
};

export default Stroke;
