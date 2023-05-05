import { useEffect, useRef } from "react";
import Canvas from "../common/Canvas";

const Stroke = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const ctx = ctxRef.current;

    // way 1
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(25, 25, 50, 50);

    // way 2
    ctx.lineWidth = 10;
    ctx.lineJoin = "bevel"; // miter(default) , bevel , round
    ctx.shadowColor = "red";
    ctx.shadowBlur = 20;

    ctx.strokeStyle = "green";
    ctx.rect(150, 150, 100, 100);
    ctx.stroke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <Canvas canvasRef={canvas} ctxRef={ctxRef} className="bg-slate-700" />
    </div>
  );
};

export default Stroke;
