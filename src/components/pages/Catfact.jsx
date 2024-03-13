import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaCat } from "react-icons/fa";

const Catfact = () => {
  const [catFact, setCatFact] = useState("");
  const fecthingCatFact = async () => {
    try {
      const res = await Axios.get("https://catfact.ninja/fact");
      setCatFact(res.data.fact);
    } catch (error) {
      console.error("Error Fetching cat fact:", error);
    }
  };
  // kaya gumamit ng use effect para hindi magrun infinite at marun lang siya once
  useEffect(() => {
    fecthingCatFact();
  }, []);

  //   const fecthingCatFact = () => {
  //     // old ways of fetch using Axios
  //     Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //     });
  //   };

  //note: burahin mo yung restrict mode sa main.jsx para hindi mag-rerun ng data

  // Old ways of fecthing
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //     console.log(data);
  // });
  return (
    <>
      {/* main */}
      <div className="main">
        {/* feedback */}
        <div className="feedback">
          {/* head */}
          <div className="head">
            <h1>Cat Fact</h1>
            <span>
              <FaCat />
            </span>
          </div>
          {/* message */}
          <div className="message">
            <p>{catFact}</p>
          </div>
          {/* button */}
          <div className="btn">
            <button onClick={fecthingCatFact}>
              Click to Generate Cat Fact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catfact;
