import React, { useEffect } from 'react';

const TermsOfUse = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-4">
          Terms of Use
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Last Updated: August 9, 2025
        </p>

        <div className="prose max-w-none">
          <p className="mb-6 leading-relaxed text-gray-700">
            Welcome to CarRentals.com. These Terms of Use ("Terms") govern your use of our website, applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            1. Eligibility
          </h2>
          <p className="mb-4 text-gray-700">
            To use our car rental services, you must be at least 21 years old (or the minimum age required by law in your location for renting a vehicle), possess a valid driver's license, and have a valid credit card in your name. Certain vehicle categories or locations may have additional age restrictions or requirements.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            2. Booking and Reservations
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>All reservations are subject to availability.</li>
            <li>Prices are subject to change without notice until a reservation is confirmed.</li>
            <li>You will receive a confirmation email upon successful booking. Please review it carefully for accuracy.</li>
            <li>Any modifications or cancellations may be subject to fees or policy restrictions. Refer to our cancellation policy for details.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            3. Rental Agreement
          </h2>
          <p className="mb-4 text-gray-700">
            Upon picking up your vehicle, you will be required to sign a physical rental agreement. This agreement will outline specific terms and conditions related to your rental, including insurance options, fuel policy, mileage limits, and fees for damages, late returns, or other violations. The rental agreement will supersede these Terms of Use in case of any conflict regarding the specific rental.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            4. Your Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>You are responsible for the safe operation of the vehicle and for adhering to all traffic laws.</li>
            <li>You must return the vehicle in the same condition as received, reasonable wear and tear excepted.</li>
            <li>You are responsible for any fines, penalties, or towing charges incurred during your rental period.</li>
            <li>Unauthorized use of the vehicle, including driving under the influence, off-road driving, or transporting illegal substances, is strictly prohibited and will result in immediate termination of the rental agreement.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            5. Payment and Fees
          </h2>
          <p className="mb-4 text-gray-700">
            You agree to pay all charges incurred in connection with your rental, including the rental rate, applicable taxes, fees, and any additional charges for optional services or damages. Payment will be processed using the credit card provided during booking or at the time of pick-up.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            6. Intellectual Property
          </h2>
          <p className="mb-4 text-gray-700">
            All content on this Site, including text, graphics, logos, images, and software, is the property of CarRentals.com or its content suppliers and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            7. Disclaimer of Warranties
          </h2>
          <p className="mb-4 text-gray-700">
            Our Services are provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or free from viruses or other harmful components.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-700">
            To the fullest extent permitted by law, CarRentals.com shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the Services; (b) any conduct or content of any third party on the Services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            9. Governing Law
          </h2>
          <p className="mb-4 text-gray-700">
            These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            10. Changes to Terms
          </h2>
          <p className="mb-4 text-gray-700">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            11. Contact Us
          </h2>
          <p className="mb-6 text-gray-700">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Email:</strong> info@carrentals.com
          </p>
          <p className="mb-6 text-gray-700">
            <strong>Address:</strong> 123 Car Street, Suite 456, Rentals City, TX 78701, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
