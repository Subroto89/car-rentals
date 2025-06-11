import React, { Suspense } from 'react';
import Banner from '../../Components/Home_Component/Banner';
import Facility from '../../Components/Home_Component/Facility';
import ServiceCounter from '../../Components/Home_Component/ServiceCounter';
import SpecialOffers from '../../Components/Home_Component/SpecialOffers';

const Home = () => {
    const facilitiesPromise = fetch('facilities.json').then(res => res.json());
    return (
        <div className=''>
           {/* Banner Component */}
           <Banner></Banner>

           {/* Why Choose Use Component */}
           <Suspense fallback={<div className="text-center text-gray-500">Loading facilities...</div>}>
                <Facility facilities={facilitiesPromise} />
           </Suspense>

            {/* Special Offers Component */}
            <SpecialOffers></SpecialOffers>



           {/* Counter Component */}
           <ServiceCounter></ServiceCounter>

        </div>
    );
};

export default Home;