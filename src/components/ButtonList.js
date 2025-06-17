import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Movies",
    "Games",
    "News",
    "Cooking",
    "Live",
    "Cricket",
    "Sports",
    "Fashion",
    "Movies",
    "TED",
    "Shorts",
    "PodeCasts",
    "TV",
    "Serials",
    "Comedies",
    "PlayLists",
    "Musics",
    // "PodeCasts",
    // "Sri Saidam",
  ];
  return (
    <div className="flex flex-wrap text-textPrimary">
      {list.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonList;
