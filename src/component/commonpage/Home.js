import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {





  return (
    <>
      <header>
        {/* Intro settings */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  ",
          }}
        />

        {/* Background image */}
        <div
          id="intro-example"
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
              
                <NavLink
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg m-2"
                  to="/user-login"
                  role="button"
                  rel="nofollow"
                >
                  Login as User
                </NavLink>
                <NavLink
                  data-mdb-ripple-init=""
                  className="btn btn-outline-light btn-lg m-2"
                  to="/admin-login"
                  role="button"
                >
                  Login as Admin
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
    </>
  );
};

export default Home;
