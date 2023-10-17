const SkeletonDetail = () => {
  return (
    <div className="flex-col">
      <div className="flex flex-row w-[200px] justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-5 ml-3"></div>
        <svg
          className="w-8 h-8 mt-2 ml-2 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-5 ml-3"></div>
        <svg
          className="w-8 h-8 mt-2 ml-2 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mt-5 ml-3"></div>
      </div>
      <div className="flex flex-row md:items-start">
        <div className="aspect-square w-[250px] relative overflow-hidden rounded-t-xl">
          <svg
            className=" text-gray-200 dark:text-gray-600 object-cover h-full w-full transition px-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div className="flex flex-col items-center md:items-start mt-7 ml-5">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
