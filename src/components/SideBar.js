import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/store/appSlice";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const isOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => {
            dispatch(toggleMenu());
          }}
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
          <li>{t("Shorts")}</li>
          <li>{t("Videos")}</li>
          <li>{t("Live")}</li>
        </ul>
        <div className="border border-textSecondary divide-x-2 my-2"></div>
        <h1 className="font-bold mt-5">{t("Subscriptions")}</h1>
        <ul>
          <li>{t("Music")}</li>
          <li>{t("Sports")}</li>
          <li>{t("gaming")}</li>
          <li>{t("movie")}</li>
        </ul>
        <div className="border  border-textSecondary  divide-x-2 my-2"></div>

        <h1 className="font-bold mt-5">{t("watch_later")}</h1>
        <ul>
          <li>{t("downloads")}</li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
