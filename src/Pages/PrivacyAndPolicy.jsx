import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Last Updated: August 9, 2025
        </p>

        <div className="prose max-w-none">
          <p className="mb-6 leading-relaxed text-gray-700">
            Welcome to goandgetcarrentals.com. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website CarRentals.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4 text-gray-700">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Personal Data
          </h3>
          <p className="mb-4 text-gray-700">
            Personally identifiable information, such as your name, shipping address, email address, phone number, age, driver's license details, and demographic information, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Derivative Data
          </h3>
          <p className="mb-4 text-gray-700">
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Financial Data
          </h3>
          <p className="mb-4 text-gray-700">
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you rent a car from us. We store very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-700">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Process your car rental reservations and transactions.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site or services.</li>
            <li>Perform other business activities as needed.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            3. Disclosure of Your Information
          </h2>
          <p className="mb-4 text-gray-700">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            By Law or to Protect Rights
          </h3>
          <p className="mb-4 text-gray-700">
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, or safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Third-Party Service Providers
          </h3>
          <p className="mb-4 text-gray-700">
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="mb-6 text-gray-700">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            5. Your Choices Regarding Your Information
          </h2>
          <p className="mb-6 text-gray-700">
            You may at any time review or change the information in your account or terminate your account by contacting us using the contact information provided below. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="mb-6 text-gray-700">
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            7. Third-Party Websites
          </h2>
          <p className="mb-6 text-gray-700">
            The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            8. Children's Privacy
          </h2>
          <p className="mb-6 text-gray-700">
            We do not knowingly collect personal information from children under the age of 13. If you are under 13, please do not provide any personal information through the Site. If you have reason to believe that a child under the age of 13 has provided personal information to us, please contact us, and we will endeavor to delete that information from our databases.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-6 text-gray-700">
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
            10. Contact Us
          </h2>
          <p className="mb-6 text-gray-700">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-2 text-gray-700">
            <strong>Email:</strong> info@goandgetcar.com
          </p>
          <p className="mb-6 text-gray-700">
            <strong>Address:</strong> 123 Car Street, Suite 456, Rentals City, TX 78701, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
