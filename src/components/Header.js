import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { SUGGESION_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/store/searchSlice";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import api from "../utils/api";
import DropDown from "./DropDown";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Language from "./Language";

const Header = () => {
  const dispatch = useDispatch();
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cacheResult = useSelector((state) => state.search);
  const [theme, setTheme] = useState();
  const modalRef = useRef();
  // console.log(cacheResult);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const navigate = useNavigate();
  const getSuggestion = async (value) => {
    api
      .get(SUGGESION_API + value)
      .then((response) => {
        const data = response.data;
        setSearchSuggestion(data[1]);
        dispatch(cacheSuggestions({ [searchQuery]: data[1] }));
      })
      .catch((e) => {});
  };

  const handleSearchSuggestion = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleThemeSetting = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.body.classList.toggle("dark");
  };
  useEffect(() => {
    // handleSearch(searchQuery);
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
  }, [searchQuery]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    let newTheme;
    if (theme) {
      newTheme = theme;
    } else {
      const savedTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      newTheme = savedTheme ? "dark" : "light";
    }
    setTheme(newTheme);
    document.body.classList.toggle("dark");
  }, []);
  const handleModalOpen = () => {
    console.log(modalRef.current);
    modalRef.current?.open();
  };

  return (
    <div className="w-screen fixed bg-primary text-textPrimary z-100 flex">
      <div className="grid grid-flow-col p-5  shadow-lg items-center w-full">
        <div className="flex h-8 col-span-1">
          <Icons
            name="menu"
            className="cursor-pointer"
            onClick={handleToggleMenu}
            size={24}
          />
          <a href="/">
            <img
              className="h-6 mx-2 cursor-pointer"
              alt="logo"
              src="data:image/png;base64,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"
            />
          </a>
        </div>
        <div className="col-span-10 text-center relative hidden sm:block flex w-full">
          <input
            type="text"
            className="border border-gray-300 w-4/5  p-2 px-4 bg-primary text-textPrimary rounded-l-full focus:outline-none outline-offset-0 "
            value={searchQuery}
            onChange={handleSearchSuggestion}
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
            <span
              className="absolute left-[75%] lg:left-[83%] top-[20%]  text-textPrimary text-gray-400 cursor-pointer hover:btn-hover h-[25px] w-[25px] rounded-[50%]"
              onClick={() => setSearchQuery("")}
            >
              <Icons name="close" size={24} />
            </span>
          )}
          <button
            className="p-2  border  border-gray-200 rounded-r-full bg-secondary hover:btn-hover w-[8%]"
            onClick={() => {
              navigate("/results?search_query=" + searchQuery);
            }}
          >
            <Icons
              name="search"
              size={22}
              strokeWidth="2"
              className="my-0 mx-auto"
            />
          </button>
          {showSuggestion && searchSuggestion.length > 0 && (
            <div className="border border-gray-100 absolute w-4/5 z-50 bg-primary rounded-xl shadow-2xl left-[7%] ">
              <ul className=" text-left">
                {searchSuggestion.map((suggestion) => (
                  // <Link to={"/results?search_query=" + suggestion}>
                  <li
                    key={suggestion}
                    className="p-2 py-2 cursor-pointer hover:bg-secondary hover:rounded-lg m-1 flex"
                    onMouseDown={() => {
                      setSearchQuery(suggestion);
                      navigate("/results?search_query=" + suggestion);
                    }}
                  >
                    <span className="ml-2 p-2">
                      {" "}
                      <Icons name="search" size={22} strokeWidth="2" />
                    </span>
                    <span>{suggestion}</span>
                  </li>
                  // </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button className="p-1 ">
          <Icons
            name={theme === "dark" ? "light" : "dark"}
            size={40}
            className="text-textPrimary bg-secondary p-2 rounded-md"
            onClick={handleThemeSetting}
          />
        </button>
        <div className="col-span-1">
          <Language ref={modalRef} />
          <Popover className="relative">
            <PopoverButton>
              <Icons name="userAvatar" size={40} />
            </PopoverButton>
            <PopoverPanel
              anchor="bottom"
              className="flex flex-col bg-secondary text-textPrimary  w-32 rounded-md [--anchor-gap:4px] sm:[--anchor-gap:8px]"
            >
              <button
                onClick={handleModalOpen}
                className="cursor-pointer p-2 hover:bg-primary hover:rounded-md"
              >
                Language
              </button>
              <button
                onClick={() => {}}
                className="cursor-pointer p-2 hover:bg-primary hover:rounded-md"
              >
                Settings
              </button>
            </PopoverPanel>
          </Popover>
          {/* menu */}
        </div>
      </div>
    </div>
  );
};

export default Header;
