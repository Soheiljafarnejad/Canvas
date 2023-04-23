import { useEffect, useRef } from "react";

const App = () => {
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = document.getElementById("my-canvas").getContext("2d");
    console.log(ctx.current);
  }, []);

  return <canvas id="my-canvas"></canvas>;
};

export default App;
