import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/store/appSlice";
import { useTranslation } from "react-i18next";
import { FocusTrap } from "focus-trap-react";

const SideBar = () => {
  const isOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <FocusTrap>
      <nav>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => {
              dispatch(toggleMenu());
            }}
            aria-expanded={isOpen ? "true" : "false"}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full md:w-64 w-36  z-50 p-4 transform transition-transform duration-300  bg-primary text-textPrimary shadow-lg mr-2  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="mt-2">
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/">{t("Shorts")}</Link>
            </li>
            <li>
              {" "}
              <Link to="/">{t("Videos")}</Link>
            </li>
            <li>
              <Link to="/">{t("Live")}</Link>
            </li>
          </ul>
          <div className="border border-textSecondary divide-x-2 my-2"></div>
          <h1 className="font-bold mt-5">{t("Subscriptions")}</h1>
          <ul>
            <li>
              <Link to="/">{t("Music")}</Link>
            </li>
            <li>
              <Link to="/">{t("Sports")}</Link>
            </li>
            <li>
              {" "}
              <Link to="/">{t("gaming")}</Link>
            </li>
            <li>
              <Link to="/">{t("movie")}</Link>
            </li>
          </ul>
          <div className="border  border-textSecondary  divide-x-2 my-2"></div>

          <h1 className="font-bold mt-5">{t("watch_later")}</h1>
          <ul>
            <li>{t("downloads")}</li>
          </ul>
        </div>
      </nav>
    </FocusTrap>
  );
};

export default SideBar;
