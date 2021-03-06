import React from "react";

const logo1 = "lgm.jpg";

function Navbar({ clickedInNav }) {
  const handleClick = () => {
    clickedInNav(true);
  };

  return (
    <>
      <div className="navbar">
        <img src={logo1} class="logo" alt="logoImage" />
        <h1 class="head">Let's Grow More</h1>

        <button type="button" onClick={handleClick}>
          Get Users{" "}
        </button>
      </div>
    </>
  );
}

export default Navbar;
