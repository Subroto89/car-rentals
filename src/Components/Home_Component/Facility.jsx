import React, { use } from 'react';

const Facility = ({facilities}) => {
    const facilitiesData = use(facilities);

    return (
     <div className='bg-gray-50 pt-12'>
        <h2 className="text-3xl font-bold text-gray-700  text-center">Why Choose Us?</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 ">
            {
                facilitiesData.map((facility, index) => <div key={index} className="w-full p-6 bg-white hover:bg-yellow hover:opacity-50 shadow-md rounded-lg flex flex-col items-center text-center">
                    <img src={facility.icon} alt="" className="w-20 h-20 rounded-full ring-2 ring-gray-700" />
                    <h3 className="text-xl font-bold text-gray-700 mt-4">{facility.title}</h3>
                    <p className="text-gray-600 mt-2">{facility.description}</p>        

                </div>)
            }
        </div>
     </div>
    );
};

export default Facility;