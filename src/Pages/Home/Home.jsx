import React, { Suspense } from 'react';
import Banner from '../../Components/Home_Component/Banner';
import Facility from '../../Components/Home_Component/Facility';
import ServiceCounter from '../../Components/Home_Component/ServiceCounter';
import SpecialOffers from '../../Components/Home_Component/SpecialOffers';
import RecentListings from '../../Components/Home_Component/RecentListings';
import FAQ from '../../Components/Home_Component/FAQ';
import Loader from '../../Components/Loader';

const Home = () => {
    const facilitiesPromise = fetch('facilities.json').then(res => res.json());
    return (
        <div className=''>
           {/* Banner Component */}
           <Banner></Banner>

           {/* Why Choose Us Component */}
           <Suspense fallback={<Loader />}>
                <Facility facilities={facilitiesPromise} />
           </Suspense>

            {/* Special Offers Component */}
            <SpecialOffers></SpecialOffers>

            {/* Recent Listings Component */}
            <RecentListings></RecentListings>

           {/* Counter Component */}
           <ServiceCounter></ServiceCounter>

           {/* FAQ Component */}
           <FAQ></FAQ>

        </div>
    );
};

export default Home;