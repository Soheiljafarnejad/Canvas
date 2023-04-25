import { useEffect, useRef } from "react";

const App = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 50, 50);
      ctx.clearRect(20, 20, 30, 30);

      ctx.fillStyle = "#fff";
      ctx.fillRect(150, 150, 30, 30);

      // way 2 for rect
      ctx.fillStyle = "yellow";
      ctx.rect(200, 200, 15, 15);
      ctx.fill();
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <canvas className="bg-gray-300" width={500} height={500} ref={canvas}></canvas>;
    </div>
  );
};

export default App;
