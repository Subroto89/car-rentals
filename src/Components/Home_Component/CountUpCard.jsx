import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpCard = ({ resource }) => {
    const { img, title, endValue } = resource;
    const [countUpStarted, setCountUpStarted] = useState(false);
    const { inView, ref } = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView && !countUpStarted) {
            setCountUpStarted(true);
        }
    }, [inView, countUpStarted]);

    return (
        <div ref={ref} className="bg-white rounded-lg shadow-lg flex flex-col gap-4 items-center justify-center p-4">
            <figure className="w-20 h-20 overflow-hidden border-3 border-gray-300 rounded-full">
                <img src={img} alt="image" className="w-full h-auto" />
            </figure>
            <h2>{title}</h2>
            <div>
                {countUpStarted && endValue ? <CountUp  key={countUpStarted} start={0} end={endValue} /> : 0}
                <span>+</span>
            </div>
        </div>
    );
};

export default CountUpCard;