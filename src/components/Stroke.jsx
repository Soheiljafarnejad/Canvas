import { useEffect, useRef } from "react";
import Canvas from "../common/Canvas";

const Stroke = () => {
  const canvas = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <Canvas canvasRef={canvas} ctxRef={ctxRef} />
    </div>
  );
};

export default Stroke;
