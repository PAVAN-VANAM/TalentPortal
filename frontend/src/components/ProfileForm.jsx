import axios from 'axios';
import React, { useState } from 'react';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    designation: '',
    address: {
      houseNo: '',
      street: '',
      addressLineOne: '',
      addressLineTwo: '',
      pincode: '',
      district: '',
      city: '',
      state: '',
      country: '',
    },
    yearsOfExperience: '',
    education: [{
      instituteName: '',
      courseName: '',
      branch: '',
      yearOfPassing: '',
      grade: '',
    }],
    socialMediaProfiles: [{
      linkedIn: '', 
      Github: '', 
      emailId: '' 
    }],
    user_rating: '',
    testimonials: '',
    techStack: [''],
    reviews: '',
    workExperience: [{
      companyName: '', 
      startDate: '', 
      endDate: '', 
      designation: '', 
      description: '' 
    }],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    let newProfile = { ...profile };

    keys.reduce((acc, key, idx) => {
      if (idx === keys.length - 1) {
        acc[key] = value;
      } else {
        if (!acc[key]) acc[key] = {};
      }
      return acc[key];
    }, newProfile);

    setProfile(newProfile);
  };

  const handleAddEducation = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      education: [
        ...prevProfile.education,
        { instituteName: '', courseName: '', branch: '', yearOfPassing: '', grade: '' },
      ],
    }));
  };

  const handleEducationChange = (index, key, value) => {
    const newEducation = profile.education.map((edu, i) =>
      i === index ? { ...edu, [key]: value } : edu
    );
    setProfile({ ...profile, education: newEducation });
  };

  const handleAddTechStack = () => {
    setProfile({
      ...profile,
      techStack: [...profile.techStack, '']
    });
  };

  const handleTechStackChange = (index, value) => {
    const newTechStack = [...profile.techStack];
    newTechStack[index] = value;
    setProfile({ ...profile, techStack: newTechStack });
  };

  const handleAddWorkExperience = () => {
    setProfile({
      ...profile,
      workExperience: [...profile.workExperience, { companyName: '', startDate: '', endDate: '', designation: '', description: '' }]
    });
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperience = [...profile.workExperience];
    newWorkExperience[index][name] = value;
    setProfile({ ...profile, workExperience: newWorkExperience });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add submit logic here (e.g., sending data to a server)
    const response = await axios.post("http://localhost:3001/api/new-profile",profile);
    console.log(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md" encType='multipart/form-data'>
      <h2 className="text-2xl font-bold mb-6">Profile Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Designation:</label>
        <input
          type="text"
          name="designation"
          value={profile.designation}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Address</legend>

        <div className="mb-4">
          <label className="block text-gray-700">House No:</label>
          <input
            type="text"
            name="address.houseNo"
            value={profile.address.houseNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Street:</label>
          <input
            type="text"
            name="address.street"
            value={profile.address.street}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address Line One:</label>
          <input
            type="text"
            name="address.addressLineOne"
            value={profile.address.addressLineOne}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address Line Two:</label>
          <input
            type="text"
            name="address.addressLineTwo"
            value={profile.address.addressLineTwo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Pincode:</label>
          <input
            type="number"
            name="address.pincode"
            value={profile.address.pincode}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">District:</label>
          <input
            type="text"
            name="address.district"
            value={profile.address.district}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">City:</label>
          <input
            type="text"
            name="address.city"
            value={profile.address.city}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">State:</label>
          <input
            type="text"
            name="address.state"
            value={profile.address.state}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Country:</label>
          <input
            type="text"
            name="address.country"
            value={profile.address.country}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </fieldset>

      <div className="mb-4">
        <label className="block text-gray-700">Years of Experience:</label>
        <input
          type="number"
          name="yearsOfExperience"
          value={profile.yearsOfExperience}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Education</legend>
        {profile.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Institute Name:</label>
            <input
              type="text"
              name={`education.${index}.instituteName`}
              value={edu.instituteName}
              onChange={(e) => handleEducationChange(index, 'instituteName', e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Course Name:</label>
            <input
              type="text"
              name={`education.${index}.courseName`}
              value={edu.courseName}
              onChange={(e) => handleEducationChange(index, 'courseName', e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Branch:</label>
            <input
              type="text"
              name={`education.${index}.branch`}
              value={edu.branch}
              onChange={(e) => handleEducationChange(index, 'branch', e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Year of Passing:</label>
            <input
              type="number"
              name={`education.${index}.yearOfPassing`}
              value={edu.yearOfPassing}
              onChange={(e) => handleEducationChange(index, 'yearOfPassing', e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Grade:</label>
            <input
              type="text"
              name={`education.${index}.grade`}
              value={edu.grade}
              onChange={(e) => handleEducationChange(index, 'grade', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="text-blue-500"
        >
          Add Education
        </button>
      </fieldset>

      <div className="mb-4">
        <label className="block text-gray-700">Social Media Profiles:</label>
        {profile.socialMediaProfiles.map((social, index) => (
          <div key={index}>
            <label className="block text-gray-700">LinkedIn:</label>
            <input
              type="url"
              name={`socialMediaProfiles.${index}.linkedIn`}
              value={social.linkedIn}
              onChange={(e) => handleChange(e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">GitHub:</label>
            <input
              type="url"
              name={`socialMediaProfiles.${index}.Github`}
              value={social.Github}
              onChange={(e) => handleChange(e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Email ID:</label>
            <input
              type="email"
              name={`socialMediaProfiles.${index}.emailId`}
              value={social.emailId}
              onChange={(e) => handleChange(e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">User Rating:</label>
        <input
          type="number"
          name="user_rating"
          value={profile.user_rating}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Testimonials:</label>
        <textarea
          name="testimonials"
          value={profile.testimonials}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Tech Stack</legend>
        {profile.techStack.map((tech, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Tech:</label>
            <input
              type="text"
              name={`techStack.${index}`}
              value={tech}
              onChange={(e) => handleTechStackChange(index, e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddTechStack}
          className="text-blue-500"
        >
          Add Tech Stack
        </button>
      </fieldset>

      <div className="mb-4">
        <label className="block text-gray-700">Reviews:</label>
        <textarea
          name="reviews"
          value={profile.reviews}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Work Experience</legend>
        {profile.workExperience.map((work, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={work.companyName}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={work.startDate}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={work.endDate}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Designation:</label>
            <input
              type="text"
              name="designation"
              value={work.designation}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={work.description}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddWorkExperience}
          className="text-blue-500"
        >
          Add Work Experience
        </button>
      </fieldset>

      <div className="mb-4">
        <label className="block text-gray-700">Image:</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setProfile({ ...profile, image: e.target.files[0] })}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
