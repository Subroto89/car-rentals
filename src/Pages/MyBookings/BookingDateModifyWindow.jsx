import React from 'react';
import { FaRegCalendarDays } from 'react-icons/fa6';

const BookingDateModifyWindow = ({handleIsWindowOpen}) => {
    return ( 
        <div className='w-full h-full fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
           <div className="w-1/3 h-1/3 flex flex-col gap-2 bg-white rounded-md mt-30 text-gray-800 p-6">
            <fieldset className="relative">
                      <label>Start Date:</label>
                      <input
                        type="date"
                        className="border border-gray-600 px-3 py-1 w-full rounded-md"
                        // onChange={(e) => setStartDate(e.target.value)}
                      />
                      <FaRegCalendarDays className="absolute top-8 right-3 pointer-events-none" />
                    </fieldset>
            
                    <fieldset className="relative">
                      <label>End Date:</label>
                      <input
                        type="date"
                        className="border border-gray-600 px-3 py-1 w-full rounded-md"
                        // onChange={(e) => setEndDate(e.target.value)}
                      />
                      <FaRegCalendarDays className="absolute top-8 right-3 pointer-events-none" />
                    </fieldset>
            <button onClick={handleIsWindowOpen} className='btn'>close</button>
            </div> 
        </div>
    );
};

export default BookingDateModifyWindow;