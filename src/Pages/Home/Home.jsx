import React, { Suspense } from 'react';
import Banner from '../../Components/Home_Component/Banner';
import Facility from '../../Components/Home_Component/Facility';

const Home = () => {
    const facilitiesPromise = fetch('facilities.json').then(res => res.json());
    return (
        <div>
           {/* Banner Component */}
           <Banner></Banner>

           {/* Why Choose Use Component */}
           <Suspense fallback={<div className="text-center text-gray-500">Loading facilities...</div>}>
                <Facility facilities={facilitiesPromise} />
           </Suspense>
        </div>
    );
};

export default Home;