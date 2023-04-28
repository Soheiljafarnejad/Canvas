import App from "./App";
import Rect from "./Rect";
import SnakeGame from "./SnakeGame";

const routes = [
  { path: "/", element: <App /> },
  { path: "/rect", element: <Rect /> },
  { path: "/snake_game", element: <SnakeGame /> },
];

export default routes;
