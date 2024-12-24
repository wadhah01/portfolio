import React from "react";

const Timeline: React.FC = () => {
  return (
    <div className="bg-navy-600 p-4">
      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {/* Event 1 */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-base font-semibold lg:text-lg">Pre-engineering studies at IPEI Nabeul</h3>
            <p className="mt-2 leading-5">Description of the first event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">2018-2020</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300 rounded-t-full bg-gradient-to-b from-yellow-400 to-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Starting software engineering studies</h3>
            <p className="mt-2 leading-5">D</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">2020</span>
          </div>
        </div>

        {/* Event 3 */}
        <div className="flex md:contents flex-row-reverse">
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">cc</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300 rounded-t-full bg-gradient-to-b from-yellow-400 to-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
        </div>
          {/* Event 4*/}
          <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">Description of the second event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
        </div>
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">Description of the second event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
        </div>
          {/* Event 5*/}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">Description of the second event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
        </div>
           {/* Event 5*/}
           <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">Description of the second event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
        </div>
           {/* Event 5*/}
           <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-yellow-300"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
          </div>
          <div className="relative p-3 my-4 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
            <h3 className="text-base font-semibold lg:text-lg">Internship as full stack developer</h3>
            <p className="mt-2 leading-5">Description of the second event.</p>
            <span className="absolute text-xs text-yellow-200 -top-5 left-2 whitespace-nowrap">July-August 2021 : Tunisie Telecom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
