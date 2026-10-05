import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Counter App</div>

        <div className="nav-links">
          <span>Home</span>
          <span>About</span>
        </div>
      </nav>

      {/* Counter Section */}
      <main className="main-content">
        <div className="counter-card">

          <h2 className="count">
            Count: {count}
          </h2>

          <p>Click the buttons to change the count.</p>

          <div className="button-container">
            <button onClick={increaseCount}>
              Increase
            </button>

            <button onClick={decreaseCount}>
              Decrease
            </button>

            <button onClick={resetCount}>
              Reset
            </button>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;