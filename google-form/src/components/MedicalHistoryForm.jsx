import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MedicalHistoryForm = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    drinkAlcohol: false,
    alcoholFrequency: '',
    smoke: false,
    smokingFrequency: '',
    bloodType: '',
    previousConditions: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-300 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Medical History</h1>
      <form className="grid grid-cols-1 gap-y-4">
        <div>
          <label htmlFor="drinkAlcohol" className="block text-sm font-medium leading-6 text-gray-900">
            Do you drink alcohol?
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              id="drinkAlcohol"
              name="drinkAlcohol"
              checked={formData.drinkAlcohol}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">Yes</span>
          </label>
        </div>

        {formData.drinkAlcohol && (
          <div>
            <label htmlFor="alcoholFrequency" className="block text-sm font-medium leading-6 text-gray-900">
              How often do you drink alcohol?
            </label>
            <input
              type="text"
              id="alcoholFrequency"
              name="alcoholFrequency"
              value={formData.alcoholFrequency}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            />
          </div>
        )}

        <div>
          <label htmlFor="smoke" className="block text-sm font-medium leading-6 text-gray-900">
            Do you smoke?
          </label>
          <label className="inline-flex items-center mt-2">
            <input
              type="checkbox"
              id="smoke"
              name="smoke"
              checked={formData.smoke}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2">Yes</span>
          </label>
        </div>

        {formData.smoke && (
          <div>
            <label htmlFor="smokingFrequency" className="block text-sm font-medium leading-6 text-gray-900">
              How often do you smoke?
            </label>
            <input
              type="text"
              id="smokingFrequency"
              name="smokingFrequency"
              value={formData.smokingFrequency}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            />
          </div>
        )}

        <div>
          <label htmlFor="bloodType" className="block text-sm font-medium leading-6 text-gray-900">
            Blood Type
          </label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
          />
        </div>

        <div>
          <label htmlFor="previousConditions" className="block text-sm font-medium leading-6 text-gray-900">
            Other Previous Conditions
          </label>
          <textarea
            id="previousConditions"
            name="previousConditions"
            value={formData.previousConditions}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
          />
        </div>
        <div className="mt-6 pt-6 border-t border-gray-900/10">
          <Link to="/family" className="btn-primary">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MedicalHistoryForm;
