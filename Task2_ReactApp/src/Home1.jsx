import React from "react";

function Home1() {
  const logo = "bubble.png";

  return (
    <>
      <div class="hero">
        <div className="contents">
          <h2>This is an React App which fetches data via calling an API.</h2>
        </div>
        <div className="bubbles">
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
          <img src={logo} alt="bubbleImage" />
        </div>
      </div>
    </>
  );
}

export default Home1;
