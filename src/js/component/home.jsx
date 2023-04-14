import React, { useState, useEffect } from "react";
import Block from "./block.jsx";
const Home = () => {

  const [timer, setTimer] = useState(0);
  const [isPlay, setIsPlay] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const buttonPlayPause = () => {
    setIsPlay(!isPlay);
  };
  const again = () => {
    setTimer(0);
  };
  useEffect(() => {
    let interval=null;
    if (isPlay) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlay]);
  return (
    <div className="container">
      <div className="d-flex justify-content-center pt-2">
        <button onClick={() => setShowButtons(!showButtons)}>
          {!showButtons ? "Show" : "Hide"}
        </button>
	  </div>
      <div className=" d-flex flex-wrap justify-content-center align-items-center pt-2">
       <i class=" display-1 fa-solid fa-clock pr-2"></i>
       <Block  time={Math.floor(timer / 100000) % 10}/>
       <Block  time={Math.floor(timer / 10000) % 10}/>
       <Block  time={Math.floor(timer / 1000) % 10}/>
       <Block  time={Math.floor(timer / 100) % 10}/>
       <Block  time={Math.floor(timer / 10) % 10}/>
       <Block  time={Math.floor(timer) % 10}/>
      </div>
      {showButtons && (
        <div className="d-flex justify-content-center pt-2 ">
          <button
            className={`btn btn-${isPlay ? "danger" : "success"} mx-2`}
            onClick={buttonPlayPause}
          >
            {isPlay ? "Pause" : "Play"}
          </button>
          <button onClick={again}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Home;
