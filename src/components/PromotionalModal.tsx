import React, { useState, useEffect } from 'react';
import { X, Shield, Star, Clock, CheckCircle, Users, Lock } from 'lucide-react';
import LeadForm from './LeadForm';

interface PromotionalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromotionalModal: React.FC<PromotionalModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-gray-800">Your Special Offer</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Offer Details */}
            <div>
              <div className="text-center bg-blue-50 rounded-lg p-6 mb-6">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-2">50% OFF Your First Turnover</h1>
                <p className="text-md font-semibold text-gray-700">When you start with a Deep Clean Reset</p>
                <div className="mt-4 bg-red-500 text-white rounded-full px-4 py-2 inline-flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Offer ends in: {formatTime(timeLeft)}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How to Claim Your Deal:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Step 1: Book a Deep Clean (Standard Rate) to reset standards</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Step 2: Automatically get 50% OFF your next Turnover</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Includes 100% Satisfaction Guarantee</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Valid for Airbnb & VRBO properties</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Client Testimonials:</h3>
                <div className="bg-gray-100 p-4 rounded-lg h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                  {/* Testimonial 1 */}
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500" />)}
                    </div>
                    <p className="text-gray-600 italic">"The Deep Clean Reset was worth every penny. My place looked brand new and my guest ratings went up immediately."</p>
                    <p className="text-right font-semibold text-sm mt-2"><strong className="font-bold">Mark T.</strong> - Arlington, VA</p>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500" />)}
                    </div>
                    <p className="text-gray-600 italic">"Finally, a reliable team in DC! They handle the turnover seamlessly, and the photo reports give me total peace of mind."</p>
                    <p className="text-right font-semibold text-sm mt-2"><strong className="font-bold">Emily R.</strong> - Capitol Hill, Washington DC</p>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500" />)}
                    </div>
                    <p className="text-gray-600 italic">"I manage 3 units in Baltimore and Aircleanb is the only partner I trust. Consistent quality every single time."</p>
                    <p className="text-right font-semibold text-sm mt-2"><strong className="font-bold">David K.</strong> - Fells Point, Baltimore</p>
                  </div>
                  {/* Testimonial 4 */}
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-500" />)}
                    </div>
                    <p className="text-gray-600 italic">"Super professional service. They arrived on time in Silver Spring and the cleaning was spotless. Highly recommend!"</p>
                    <p className="text-right font-semibold text-sm mt-2"><strong className="font-bold">Sarah L.</strong> - Silver Spring, MD</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-around items-center text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                    <span>150+ Happy Clients</span>
                  </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-bold text-center mb-4">Claim Your Discount</h2>
              <LeadForm />
              <div className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                <Lock className="h-4 w-4 mr-1" />
                <span>Your information is safe with us.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalModal;