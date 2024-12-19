import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import "../css/Home.css";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <header id="Home">
      <div className="border-text">
        {user && user.username ? (
          <>
            <h2>Welcome, {user.username}</h2>
          </>
        ) : (
          <>
            <h2>Welcome to NC News</h2>
            <p>Click 'All Articles' to view the news</p>
          </>
        )}
      </div>
    </header>
  );
}

export default Home;
