import { Link, useRouteError } from "react-router";

const RouterError = () => {
  const error = useRouteError();

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-semibold text-red-600">{error?.status}</p>

        <p className="mt-6  text-2xl font-medium text-pretty text-gray-500 sm:text-xl/8">
          {error?.data ?? "Something went wrong.Try again later"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RouterError;
