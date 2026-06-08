import React, { useState, useEffect, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

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
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const phoneMaskRef = useRef<HTMLInputElement | null>(null);

  // Formspree useForm hook
  const [state, handleSubmit] = useForm("xanjdbgn");



  // Effect to handle redirection on successful submission
  useEffect(() => {
    if (state.succeeded) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/57506d10-07bc-4603-9bc4-e9627cd018b7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: `log_${Date.now()}_lead_form_conversion`,
          timestamp: Date.now(),
          location: 'src/components/LeadForm.tsx:27',
          message: 'Lead modal form succeeded, firing conversion and navigating to thank-you.',
          data: { source: 'lead_form' },
          runId: 'sprint1',
          hypothesisId: 'H2'
        })
      }).catch(() => {});
      // #endregion agent log

      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-17464291569/lBYMCJ-s3b8bEPHhz4dB'
        });
      }

      navigate('/thank-you');
    }
  }, [state.succeeded, navigate]);

  const validate = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Pass the formData and the extra subject field to Formspree
      handleSubmit({
        ...formData,
        subject: 'New 50% Off Lead!'
      });
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
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
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code <span className="text-red-500">*</span></label>
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
          <label htmlFor="consent" className="font-medium text-gray-700">I accept the terms and conditions <span className="text-red-500">*</span></label>
          {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
        </div>
      </div>
      {/* Show general form errors */}
      {state.errors && (
        <div className="text-red-500 text-sm mt-2 p-2 bg-red-50 border border-red-100 rounded">
          <p className="font-bold">Submission Error:</p>
          {state.errors.getAllFieldErrors().map((error, index) => (
            <p key={`field-${index}`}>{error[0]}: {error[1].map(e => e.message).join(', ')}</p>
          ))}
          {state.errors.getFormErrors().map((error, index) => (
            <p key={`form-${index}`}>{error.message}</p>
          ))}
          {(state.errors.getFormErrors().length === 0 && state.errors.getAllFieldErrors().length === 0) && <p>Please try again.</p>}
        </div>
      )}
      <button type="submit" disabled={state.submitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400">
        {state.submitting ? 'Submitting...' : 'Book Deep Clean & Save'}
      </button>
    </form>
  );
};

export default LeadForm;
