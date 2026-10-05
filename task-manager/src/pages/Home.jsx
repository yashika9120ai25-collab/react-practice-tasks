import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <h1>Welcome to Task Manager</h1>

      <p>
        Manage your tasks easily using this simple
        React application.
      </p>

      <Link to="/tasks">
        <button>View Tasks</button>
      </Link>

    </div>
  );
}

export default Home;