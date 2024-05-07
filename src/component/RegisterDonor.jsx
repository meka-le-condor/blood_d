import React, { useState } from 'react';

function RegisterDonor() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    groupe: '',
    lastDonate: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Envoyer les données à votre contrôleur
    fetch('/createdonor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Traiter la réponse du contrôleur si nécessaire
      console.log(data);
    })
    .catch(error => {
      // Gérer les erreurs éventuelles
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Register For Donor</h2>
            <p className="mx-auto max-w-screen-md text-center text-[#46052D] md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="first-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name*</label>
              <input name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#46052D] transition duration-100 focus:ring" />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name*</label>
              <input name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#46052D] transition duration-100 focus:ring" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Address</label>
              <input name="address" value={formData.address} onChange={handleInputChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#46052D] transition duration-100 focus:ring" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email*</label>
              <input name="email" value={formData.email} onChange={handleInputChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#46052D] transition duration-100 focus:ring" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="groupe" className="mb-2 inline-block text-sm text-black sm:text-base">Group*</label>
              <select name="groupe" value={formData.groupe} onChange={handleInputChange} className="w-full rounded border px-3 py-2 text-black outline-none ring-[#46052D] transition duration-100 focus:ring" id="groupe">
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="A-">A-</option>
                <option value="AB">AB</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="last-donate" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last Donate*</label>
              <input name="lastDonate" value={formData.lastDonate} onChange={handleInputChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#46052D] transition duration-100 focus:ring" />
            </div>
            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg bg-[#46052D] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-[#46052D] transition duration-100 hover:bg-black focus-visible:ring active:bg-indigo-700 md:text-base" type="submit">Send</button>
              <span className="text-sm text-[#46052D]">*Required</span>
            </div>
            <p className="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterDonor;
