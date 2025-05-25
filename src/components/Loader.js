import { useSelector } from "react-redux";

const Loader = () => {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-[50%] h-8 w-8 border-2  border-gray-200 border-b-transparent"></div>
      </div>
    )
  );
};
export default Loader;
