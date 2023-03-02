import { createBrowserRouter } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
  const router = createBrowserRouter([
    { path: '/', element: isLoggedIn ? <Home /> : <Auth /> },
  ])
  return router
}

export default AppRouter