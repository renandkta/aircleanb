import React, { useState, useEffect, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';

const LeadForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    propertyType: 'airbnb',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneMaskRef = useRef<any>(null);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 11) newErrors.phone = 'A valid phone number is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    if (!formData.consent) newErrors.consent = 'You must accept the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/xanjdbgn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, subject: 'New 50% Off Lead!' }),
        });

        if (response.ok) {
          navigate('/thank-you');
        } else {
          alert('There was an error. Please try again.');
        }
      } catch (error) {
        alert('There was an error. Please try again.');
      }
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <IMaskInput
          ref={phoneMaskRef}
          mask="+1 (000) 000-0000"
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onAccept={handlePhoneChange}
          className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
        <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Property Type</label>
        <div className="mt-2 flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="propertyType" value="airbnb" checked={formData.propertyType === 'airbnb'} onChange={handleInputChange} className="form-radio" />
            <span className="ml-2">Airbnb</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="propertyType" value="vrbo" checked={formData.propertyType === 'vrbo'} onChange={handleInputChange} className="form-radio" />
            <span className="ml-2">VRBO</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="propertyType" value="other" checked={formData.propertyType === 'other'} onChange={handleInputChange} className="form-radio" />
            <span className="ml-2">Other</span>
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleInputChange} className={`focus:ring-blue-500 h-4 w-4 text-blue-600 ${errors.consent ? 'border-red-500' : 'border-gray-300'} rounded`} />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-gray-700">I accept the terms and conditions</label>
          {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400">
        {isSubmitting ? 'Submitting...' : 'Book Deep Clean & Save'}
      </button>
    </form>
  );
};

export default LeadForm;
