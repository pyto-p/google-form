import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FamilyRelationsForm = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: '', relationship: '', age: '' },
  ]);

  // Function to add a new family member
  const addFamilyMember = () => {
    const newId = familyMembers.length + 1;
    setFamilyMembers([
      ...familyMembers,
      { id: newId, name: '', relationship: '', age: '' },
    ]);
  };
   // Function to delete a family member
   const deleteFamilyMember = (memberId) => {
    const updatedMembers = familyMembers.filter((member) => member.id !== memberId);
    setFamilyMembers(updatedMembers);
  };

  // Handle input changes for family members
  const handleMemberInputChange = (e, memberId) => {
    const { name, value } = e.target;
    const updatedMembers = familyMembers.map((member) =>
      member.id === memberId ? { ...member, [name]: value } : member
    );
    setFamilyMembers(updatedMembers);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-300 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Family Relations</h1>
      <form className="grid grid-cols-1 gap-y-4">
        {familyMembers.map((member) => (
          <div key={member.id}>
            <label htmlFor={`name-${member.id}`} className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              type="text"
              id={`name-${member.id}`}
              name={`name-${member.id}`}
              value={member.name}
              onChange={(e) => handleMemberInputChange(e, member.id)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            />

            <label htmlFor={`relationship-${member.id}`} className="block mt-2 text-sm font-medium leading-6 text-gray-900">
              Relationship
            </label>
            <input
              type="text"
              id={`relationship-${member.id}`}
              name={`relationship-${member.id}`}
              value={member.relationship}
              onChange={(e) => handleMemberInputChange(e, member.id)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            />

            <label htmlFor={`age-${member.id}`} className="block mt-2 text-sm font-medium leading-6 text-gray-900">
              Age
            </label>
            <input
              type="text"
              id={`age-${member.id}`}
              name={`age-${member.id}`}
              value={member.age}
              onChange={(e) => handleMemberInputChange(e, member.id)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
            />
            <button type="button" onClick={() => deleteFamilyMember(member.id)} className="text-red-500 mt-2">
              Delete
            </button>
          </div>

        ))}

        <div className="mt-4">
          <button type="button" onClick={addFamilyMember} className="btn-primary">
            Add Family Member
          </button>
        </div>

        <div className="mt-4">
          <Link to="/confirmation" className="btn-primary">
            Confirm
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FamilyRelationsForm;
