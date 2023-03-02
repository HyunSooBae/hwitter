import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "components/Router";
import {authService} from "fbase";

function App() {
  // const auth = fbase.auth()
  authService.
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <RouterProvider router={AppRouter} isLoggedIn={isLoggedIn} />
  );
}

export default App;
