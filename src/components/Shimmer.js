const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: 21 }, (_, i) => {
        return (
          <div className="p-2 m-2 w-56 shadow-lg max-h-60 h-60 mt-32" key={i}>
            <div className="fade-shimmer h-36 rounded-lg"></div>
            <ul className="mt-4">
              <li className="fade-shimmer h-3 w-[90%]  rounded-lg"></li>
              <li className="mt-2 fade-shimmer h-3 w-[90%]  rounded-lg"> </li>
              <li className="mt-2 fade-shimmer h-3 w-[50%]  rounded-lg"> </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
