import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <div className="logo">
          Task Manager
        </div>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/tasks">
            Tasks
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;