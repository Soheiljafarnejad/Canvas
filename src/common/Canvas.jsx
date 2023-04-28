import { useEffect } from "react";

const Canvas = ({ canvasRef, ctxRef, className = "", width = 500, height = 500 }) => {
  useEffect(() => {
    if (canvasRef.current.getContext) ctxRef.current = canvasRef.current.getContext("2d");
  }, [canvasRef, ctxRef]);

  return <canvas className={`bg-gray-200 ${className}`} width={width} height={height} ref={canvasRef} />;
};

export default Canvas;
