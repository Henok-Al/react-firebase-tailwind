import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const styles = {
    li: "hover:text-slate-300 ease-in-out transition duration-200 relative inline-block capitalize",
    mobileMenu: `absolute space-y-5 ease-in-out duration-500 transition-all text-2xl font-semibold ${
      show
        ? "translate-x-0 h-screen w-full top-12 bg-black justify-center"
        : "-translate-x-full top-12"
    } `,
  };

  return (
    <header className="header sticky top-0 z-40">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between py-3 font-raleway">
        <h1
          onClick={() => navigate("/")}
          className="logo cursor-pointer pl-4 text-lg sm:text-3xl"
        >
          Write-it
        </h1>
        <div
          onClick={() => setShow(!show)}
          className="mr-3 cursor-pointer space-y-1 transition-all duration-200 ease-in-out md:hidden"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show ? "translate-y-2 rotate-[50deg]" : "translate-y-0 rotate-0"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out ${
              show
                ? "-translate-y-1 -rotate-[50deg]"
                : " translate-y-0 rotate-0"
            } `}
          ></span>
        </div>
        {/* Nav links */}
        <nav
          className={`absolute mr-4 flex items-center space-y-6 py-12 text-center text-lg transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:space-x-5 md:space-y-0 md:bg-transparent md:py-0 md:text-left ${
            show
              ? "top-12 h-screen w-full translate-x-0 flex-col bg-black"
              : "top-12 h-screen w-full -translate-x-full flex-col bg-black"
          } `}
        >
          <li
            className={`${styles.li} ${
              location.pathname === "/" && "highlight"
            } `}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === "/articles" && "highlight"
            } `}
          >
            <Link to="/articles">Articles</Link>
          </li>
          <li
            className={`${styles.li} ${
              location.pathname === "/sign-in" && "highlight"
            } `}
          >
            <Link to="/sign-in">sign-in</Link>
          </li>
          {/* )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
