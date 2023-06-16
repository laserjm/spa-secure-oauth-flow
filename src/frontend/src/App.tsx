import { FC, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Callback } from "./Callback";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              accessToken={accessToken}
              idToken={idToken}
              greeting="anonymous"
            />
          }
        />
        <Route
          path="/callback"
          element={
            <Callback setAccessToken={setAccessToken} setIdToken={setIdToken} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
