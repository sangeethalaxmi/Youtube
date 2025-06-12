import { useEffect, useState } from "react";
const AutoCompleteSingleSelect = ({
  options = [],
  label,
  onChange,
  placeholder,
  className = "",
  defaultValue = "",
  DEFAULTSELECT = "",
}) => {
  const [query, setQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const getFilteredList = () => {
    setFilteredList(
      options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  useEffect(() => {
    if (!query) {
      setShowSuggestion(false);
    }

    if (query) {
      getFilteredList();
    } else {
      setFilteredList([]);
    }
  }, [query]);
  useEffect(() => {
    if (defaultValue && options.length > 0) {
      const selectedOption =
        options.find((opt) => opt.label === defaultValue) ?? DEFAULTSELECT;
      if (selectedOption) {
        setQuery(selectedOption.label);
        onChange(selectedOption.value);
      }
    }
  }, [defaultValue, options]);

  const handleQueryChange = (e) => {
    setShowSuggestion(true);

    setQuery(e.target.value);
  };
  const handleSelect = (selectedValue, selectedLabel) => {
    setQuery(selectedLabel);
    onChange(selectedValue);
    setShowSuggestion(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="m-2">
        <label>{label}</label>
      </div>
      <input
        value={query}
        onChange={handleQueryChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md bg-primary w-1/2 p-1 "
      ></input>

      {showSuggestion && (
        <div className="absolute w-1/2 left-1/4 rounded-md shadow-md  border border-gray-300">
          <ul>
            {filteredList.length > 0
              ? filteredList.map((list) => {
                  return (
                    <li
                      onClick={() => {
                        handleSelect(list.value, list.label);
                      }}
                      key={list.value}
                      className="cursor-pointer p-2 bg-primary text-textPrimary hover:bg-secondary"
                    >
                      {list.label}
                    </li>
                  );
                })
              : "No list found"}
          </ul>
        </div>
      )}
    </div>
  );
};
export default AutoCompleteSingleSelect;
