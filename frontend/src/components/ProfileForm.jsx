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
    education: {
      instituteName: '',
      courseName: '',
      branch: '',
      yearOfPassing: '',
      grade: '',
    },
    socialMediaProfiles: [
      { linkedIn: '', Github: '', emailId: '' }
    ],
    user_rating: '',
    testimonials: '',
    techStack: [''],
    reviews: '',
    workExperience: [
      { companyName: '', startDate: '', endDate: '', designation: '', description: '' }
    ],
    imageId: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here (e.g., sending data to a server)
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

        <div className="mb-4">
          <label className="block text-gray-700">Institute Name:</label>
          <input
            type="text"
            name="education.instituteName"
            value={profile.education.instituteName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Course Name:</label>
          <input
            type="text"
            name="education.courseName"
            value={profile.education.courseName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Branch:</label>
          <input
            type="text"
            name="education.branch"
            value={profile.education.branch}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Year of Passing:</label>
          <input
            type="date"
            name="education.yearOfPassing"
            value={profile.education.yearOfPassing}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Grade:</label>
          <input
            type="text"
            name="education.grade"
            value={profile.education.grade}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Social Media Profiles</legend>

        {profile.socialMediaProfiles.map((profile, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">LinkedIn:</label>
            <input
              type="text"
              name={`socialMediaProfiles.${index}.linkedIn`}
              value={profile.linkedIn}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Github:</label>
            <input
              type="text"
              name={`socialMediaProfiles.${index}.Github`}
              value={profile.Github}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Email Id:</label>
            <input
              type="text"
              name={`socialMediaProfiles.${index}.emailId`}
              value={profile.emailId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
      </fieldset>

      <div className="mb-4">
        <label className="block text-gray-700">User Rating:</label>
        <input
          type="number"
          name="user_rating"
          value={profile.user_rating}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Testimonials:</label>
        <input
          type="text"
          name="testimonials"
          value={profile.testimonials}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <fieldset className="mb-4">
        <legend className="text-lg font-semibold text-gray-700">Tech Stack</legend>
        {profile.techStack.map((tech, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              name={`techStack.${index}`}
              value={tech}
              onChange={(e) => handleTechStackChange(index, e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {index === profile.techStack.length - 1 && (
              <button
                type="button"
                onClick={handleAddTechStack}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Add Tech
              </button>
            )}
          </div>
        ))}
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
        {profile.workExperience.map((experience, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={experience.companyName}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Designation:</label>
            <input
              type="text"
              name="designation"
              value={experience.designation}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleWorkExperienceChange(index, e)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {index === profile.workExperience.length - 1 && (
              <button
                type="button"
                onClick={handleAddWorkExperience}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Add Experience
              </button>
            )}
          </div>
        ))}
      </fieldset>

      <div className="mb-4">
  <label className="block text-gray-700">Upload Profile Image:</label>
  <input
    type="file"
    name="image"
    accept="image/jpeg, image/jpg, image/png"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        setProfile({ ...profile, image: file });
      }
    }}
    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
  />
</div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
