import React, { useState, useEffect } from 'react';
import { FaQuestionCircle, FaCar, FaCreditCard, FaUser, FaInfoCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prevState => ({
      ...prevState,
      [sectionId]: !prevState[sectionId]
    }));
  };

  const faqData = [
    {
      id: 'booking',
      category: 'Booking & Reservations',
      icon: <FaCar className="text-blue-500" />,
      questions: [
        {
          q: 'How do I book a car?',
          a: 'You can easily book a car through our website by selecting your desired pick-up and drop-off locations, dates, and vehicle type. Follow the on-screen prompts to complete your reservation.'
        },
        {
          q: 'Can I modify or cancel my reservation?',
          a: 'Yes, you can modify or cancel your reservation by logging into your account or by contacting our customer service team directly. Please note that cancellation policies may apply.'
        },
        {
          q: 'What documents do I need to rent a car?',
          a: 'You will typically need a valid driver\'s license, a credit card in your name, and often a secondary form of identification. International renters may require an International Driving Permit (IDP).'
        }
      ]
    },
    {
      id: 'payment',
      category: 'Payments & Billing',
      icon: <FaCreditCard className="text-green-500" />,
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept major credit cards (Visa, MasterCard, American Express, Discover). Debit cards may be accepted with additional verification or deposit requirements.'
        },
        {
          q: 'When will I be charged?',
          a: 'Typically, a deposit or a portion of the rental fee may be charged at the time of booking, with the full balance due upon pick-up or return of the vehicle.'
        },
        {
          q: 'How do I get a receipt for my rental?',
          a: 'Your rental receipt will be emailed to you upon completion of your rental period. You can also access it through your account dashboard.'
        }
      ]
    },
    {
      id: 'account',
      category: 'Account & Profile',
      icon: <FaUser className="text-purple-500" />,
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on the "Sign Up" or "Register" link on our homepage and follow the instructions to create your personal account.'
        },
        {
          q: 'I forgot my password, what should I do?',
          a: 'On the login page, click "Forgot Password" and enter your registered email address. We will send you instructions to reset your password.'
        }
      ]
    },
    {
      id: 'general',
      category: 'General Questions',
      icon: <FaInfoCircle className="text-yellow-500" />,
      questions: [
        {
          q: 'What if I return the car late?',
          a: 'Late returns may incur additional charges. It\'s best to contact us as soon as possible if you anticipate a delay in returning your vehicle.'
        },
        {
          q: 'Are there mileage limits?',
          a: 'Mileage limits vary by vehicle type and rental agreement. Please check your specific rental terms or contact us for details.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-4">
          Help Center
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Find answers to frequently asked questions and get support for your car rental needs.
        </p>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqData.map((category) => (
            <div key={category.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-t-lg"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xl font-semibold text-gray-800">{category.category}</span>
                </div>
                {openSections[category.id] ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>
              {openSections[category.id] && (
                <div className="px-6 py-4 border-t border-gray-200">
                  {category.questions.map((item, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        <FaQuestionCircle className="inline-block text-indigo-500 mr-2" />
                        {item.q}
                      </h3>
                      <p className="text-gray-700 ml-7">{item.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you couldn't find the answer to your question, our support team is ready to assist you.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
