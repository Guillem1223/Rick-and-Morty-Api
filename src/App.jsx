import { useState } from "react";

// import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { CharactersList } from "./containers/CharactersList/CharactersList";
import { CharacterDetail } from "./containers/CharacterDetail/CharacterDetail";
import { Header } from "./components/Header/Header";
import { About } from "./containers/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/character" />} />
          <Route path="/character" element={<CharactersList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
