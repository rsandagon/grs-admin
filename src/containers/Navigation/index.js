import React from 'react';

function Navigation(){    
  return (
    <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">

            <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1">
                        <div className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600 hover:border-blue-500">
                            <i className="fas fa-warehouse pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Company</span>
                        </div>
                    </li>
                    <li className="mr-3 flex-1">
                        <div className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                            <i className="fas fa-industry pr-0 md:pr-3 "></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Plant</span>
                        </div>
                    </li>
                    <li className="mr-3 flex-1">
                        <div className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                            <i className="fas fa-tasks pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Activties</span>
                        </div>
                    </li>
                    <li className="mr-3 flex-1">
                        <div className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                            <i className="fa fa-users pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Users</span>
                        </div>
                    </li>
                    <li className="mr-3 flex-1">
                        <div className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-blue-500">
                            <i className="fa fa-cog pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Equipment</span>
                        </div>
                    </li>
                </ul>
            </div>


        </div>
  );
}

export default Navigation;





        