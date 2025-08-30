import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../utils/api";
import Icons from "./Icons";
import { cacheSuggestions } from "../utils/store/searchSlice";
import { useNavigate } from "react-router-dom";

const Search = ({ isMobileSearch, handleMobileSearch }) => {
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheResult = useSelector((state) => state.search);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getSuggestion = useCallback(
    async (value) => {
      if (value) {
        api
          .get("/.netlify/functions/youtube-suggest?q=" + value)
          .then((response) => {
            const data = response.data;
            setSearchSuggestion(data[1]);
            dispatch(cacheSuggestions({ [searchQuery]: data[1] }));
          })
          .catch((e) => {});
      }
    },
    [setSearchSuggestion, dispatch, searchQuery]
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      // implement cache to avoid api call if search result already present in store
      if (cacheResult[searchQuery]) {
        setSearchSuggestion(cacheResult[searchQuery]);
      } else {
        getSuggestion(searchQuery);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, setSearchSuggestion, getSuggestion, cacheResult]);

  const handleSearchSuggestion = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      {" "}
      <div className="sm:hidden">
        {!isMobileSearch ? (
          <button
            onClick={() => {
              handleMobileSearch(true);
            }}
            aria-label="Search"
          >
            {" "}
            <Icons name="search" aria-label="search icon" />
          </button>
        ) : (
          <button
            onClick={() => {
              handleMobileSearch(false);
            }}
            aria-label="close mobile search"
          >
            {" "}
            <Icons name="arrowLeft" />
          </button>
        )}
      </div>
      <div
        className={`col-span-10 text-center relative  sm:flex w-full ${
          isMobileSearch ? "flex" : "hidden"
        }`}
      >
        <input
          type="text"
          className="border border-gray-300 w-4/5  p-2 px-4 bg-primary text-textPrimary rounded-l-full focus:outline-none outline-offset-0 "
          value={searchQuery}
          aria-label="search input box"
          onChange={handleSearchSuggestion}
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/results?search_query=" + searchQuery);
              setShowSuggestion(false);
            }
          }}
          onFocus={() => {
            setShowSuggestion(true);
          }}
          onBlur={() => {
            setShowSuggestion(false);
          }}
        />
        {searchQuery && (
          <button
            className="absolute left-[75%]  top-[20%]  text-textPrimary text-gray-400 cursor-pointer hover:btn-hover h-[25px] w-[25px] rounded-[50%]"
            onClick={() => setSearchQuery("")}
            aria-label="clear search"
          >
            <Icons name="close" size={24} aria-label="clear icon" />
          </button>
        )}
        <button
          className={`p-2  border  border-gray-200 rounded-r-full bg-secondary hover:btn-hover ${
            isMobileSearch ? "w-[15%]" : "w-[8%]"
          }`}
          onClick={() => {
            if (searchQuery) {
              navigate("/results?search_query=" + searchQuery);
            }
          }}
          aria-label="Search button"
        >
          <Icons
            name="search"
            size={22}
            strokeWidth="2"
            className="my-0 mx-auto"
            aria-label="search icon"
          />
        </button>
        {showSuggestion && searchSuggestion.length > 0 && (
          <div className="border border-gray-100 absolute top-full w-[88%] z-50 bg-primary rounded-xl shadow-2xl left-[0%] ">
            <ul className=" text-left" aria-label="search list" role="listbox">
              {searchSuggestion.map((suggestion, index) => (
                // <Link to={"/results?search_query=" + suggestion}>
                <li
                  role="option"
                  key={suggestion}
                  tabIndex={index}
                  aria-selected={true / false}
                  className="p-2 py-2 cursor-pointer hover:bg-secondary hover:rounded-lg m-1 flex"
                  onMouseDown={() => {
                    setSearchQuery(suggestion);
                    navigate("/results?search_query=" + suggestion);
                  }}
                >
                  <span className="ml-2 p-2">
                    {" "}
                    <Icons
                      name="search"
                      size={22}
                      strokeWidth="2"
                      aria-label="search icon"
                    />
                  </span>
                  <span>{suggestion}</span>
                </li>
                // </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
