import { useRef } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();

  const focusName = () => {
    nameRef.current.focus();
  };

  const clearName = () => {
    nameRef.current.value = "";
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Student Profile</div>

        <div className="nav-links">
          <span>Home</span>
          <span>Profile</span>
        </div>
      </nav>

      {/* Profile Content */}
      <main className="main-content">
        <div className="profile-card">

          <div className="input-row">
            <label>Name:</label>
            <input
              type="text"
              ref={nameRef}
            />
          </div>

          <div className="input-row">
            <label>Course:</label>
            <input
              type="text"
            />
          </div>

          <p className="saved-name">
            Saved name: Alex
          </p>

          <p className="instruction">
            Use a button to focus the Name input.
          </p>

          <div className="button-container">
            <button onClick={focusName}>
              Focus Name
            </button>

            <button onClick={clearName}>
              Clear
            </button>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;