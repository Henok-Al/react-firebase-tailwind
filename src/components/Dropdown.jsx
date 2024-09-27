const Dropdown = ({ toggleMenu, category, selectCategory, isOpen }) => {
  return (
    <div className=" mt-8 space-y-5">
      <div className="relative inline-block">
        <button
          type="button"
          className="flex  items-center rounded bg-gray-700 px-4
                  py-2 text-white hover:bg-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {category ? `${category}` : " Select a category"}

          <svg
            className={`ml-2 h-4 w-4 transition-all duration-200 ease-in-out ${
              !isOpen ? "rotate-1800" : "rotate-180"
            } `}
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-3 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li
                onClick={() => selectCategory("entertainment")}
                id="category"
                value="entertainment"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Entertainment</a>
              </li>
              <li
                onClick={() => selectCategory("knowledge")}
                id="category"
                value="knowledge"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Knowledge</a>
              </li>

              <li
                onClick={() => selectCategory("programming")}
                id="category"
                value="programming"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Programming</a>
              </li>

              <li
                onClick={() => selectCategory("productivity")}
                id="category"
                value="productivity"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Productivity</a>
              </li>

              <li
                onClick={() => selectCategory("lifestyle")}
                id="category"
                value="lifestyle"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Lifestyle</a>
              </li>

              <li
                onClick={() => selectCategory("design")}
                id="category"
                value="design"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Design</a>
              </li>

              <li
                onClick={() => selectCategory("travel")}
                id="category"
                value="travel"
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a>Travel</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
