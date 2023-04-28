import App from "./App";
import Rect from "./components/Rect";
import SnakeGame from "./components/SnakeGame";
import Stroke from "./components/Stroke";

const routes = [
  { path: "/", element: <App /> },
  { path: "/rect", element: <Rect /> },
  { path: "/snake_game", element: <SnakeGame /> },
  { path: "/stroke", element: <Stroke /> },
];

export default routes;
