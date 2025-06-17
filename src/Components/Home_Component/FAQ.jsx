import React from "react";
import Lottie from "lottie-react"
import faq from "../../assets/lotties/faq.json"
const FAQ = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-700 py-4">
      <div className="w-11/12 mx-auto">
      
      <div className="flex justify-center items-center"><Lottie animationData={faq} style={{width:'200px'}} ></Lottie></div>
        <div className="join join-vertical bg-white">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              What types of cars do you rent?
            </div>
            <div className="collapse-content text-sm">
              We rent a wide range of vehicles including sedans, SUVs, and
              luxury cars. Our inventory is constantly updated with new
              arrivals.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              How can I schedule a test drive?
            </div>
            <div className="collapse-content text-sm">
              You can schedule a test drive by calling us directly, filling out
              the contact form on our website, or visiting our showroom during
              business hours.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              What is the minimum age to rent a car?
            </div>
            <div className="collapse-content text-sm">
              The minimum age to rent a car is typically 21 years old. Drivers
              aged 21-24 may be subject to a young driver surcharge and may have
              restrictions on vehicle categories.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Do I need to make a reservation in advance?
            </div>
            <div className="collapse-content text-sm">
              While walk-ins are sometimes possible, we highly recommend booking
              in advance, especially during peak seasons or for specific vehicle
              types, to guarantee availability and potentially better rates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
