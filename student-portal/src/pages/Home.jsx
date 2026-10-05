import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <h1>Welcome to the Student Portal</h1>

      <p>
        Use the navigation links to move between pages.
      </p>

      <p>
        Students page: show a simple student list.
      </p>

      <Link to="/students">
        <button>View Students</button>
      </Link>

    </div>
  );
}

export default Home;