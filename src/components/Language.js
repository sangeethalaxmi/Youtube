import AutoCompleteSingleSelect from "./AutoCompleteSingleSelect";
import Modal from "./Modal";
import { DEFAULTLANG, LANGUAGES } from "../utils/constants";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useTranslation } from "react-i18next";

const Language = React.memo(
  forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    console.log(i18n?.language);
    console.log(LANGUAGES.find((lang) => lang.value === i18n?.language)?.label);
    const defaultLang =
      LANGUAGES.find((lang) => lang.value === i18n?.language)?.label ||
      DEFAULTLANG.label;
    const [language, setLanguage] = useState(defaultLang ?? "");

    const handleLanguageChange = () => {
      if (!language) return;
      i18n.changeLanguage(language);
      setIsOpen(false);
    };
    const handleChange = (value) => {
      setLanguage(value);
    };
    const handleCloseModal = () => {
      setIsOpen(false);
    };
    useImperativeHandle(ref, () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        handleCloseModal();
      },
    }));
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header onClose={handleCloseModal}>
            <h2 className="text-center">Language</h2>
          </Modal.Header>
          <Modal.Body>
            <AutoCompleteSingleSelect
              options={LANGUAGES}
              label="Select Language"
              onChange={handleChange}
              className="text-center m-auto"
              placeholder="Enter Language"
              defaultValue={defaultLang}
              DEFAULTSELECT={DEFAULTLANG}
            />
          </Modal.Body>
          <Modal.Footer>
            <div>
              {" "}
              <div className="text-center">
                <button
                  className="bg-[#0b57d0] text-white px-4 py-2 rounded-md hover:bg-[#5f8edaf9] cursor-pointer disabled:bg-gray-300"
                  onClick={handleLanguageChange}
                >
                  Submit
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  })
);

export default Language;
