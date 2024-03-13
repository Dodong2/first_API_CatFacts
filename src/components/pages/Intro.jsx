import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";
const Intro = () => {
  return (
    <>
      {/* main */}
      <div className="main">
        {/* title */}
        <div className="title">
          <h1>Welcome to Cat Fact</h1>
          <FaCat />
          <span>
            <p>
              "Discover Cat Fact, the app delivering daily curated trivia and
              insights to enrich your understanding and love for our feline
              friends - thank you for joining our community!"
            </p>
          </span>
        </div>
        {/* react Route Link */}
        <Link to="/Catfact">
          <div className="btn">
            <button>
              Let's Start <FaCat />
            </button>
          </div>
        </Link>
        <br />
        {/* creator HAHA */}
        <div className="creator">
          <h3>By: Castar</h3>
        </div>
      </div>
    </>
  );
};

export default Intro;
