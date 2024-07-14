import React from 'react';
import Models from './model';
import { FaBriefcase, FaMapMarkerAlt, FaStar, FaStarHalf } from 'react-icons/fa';

// Function to render star rating


// eslint-disable-next-line react/prop-types
function ProfileCard({ name, active, usertype, rating, designation, address, education, workExperience,testimonials }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalf className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={i} className="text-gray-300" />
        ))}
      </div>
    );
  };

   const defaulteducation = education || [];
   const defaultworkExperience = workExperience || [];
  return (
    <div className="bg-gray-50 w-[300px] h-auto py-3 flex flex-col justify-center items-center rounded-lg shadow-md border-2 ">
      <div className='flex flex-col items-center cursor-pointer '>
        <img src="https://randomuser.me/api/portraits/women/2.jpg" className="border-3 rounded-full" alt="Profile" />
        <div className='flex w-full items-center flex-col gap-2'>
          <h4 className="text-xl font-bold">{name}</h4>
          <h4 className='text-xs flex gap-2 items-center text-gray-600'><span><FaBriefcase /></span>{designation}</h4>
          <h2 className='text-xs flex items-center gap-2 text-gray-600'><span><FaMapMarkerAlt /></span>{address.city}</h2>
          <div className='flex items-center gap-2'>
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <hr className="mt-5 border-2 w-full bg-black" />
      <div className='w-full flex mt-2 justify-end items-end'>
        {usertype && <button className="mt-3 text-sm text-gray-700 hover:text-blue-600 rounded-full">1-1 Alumini</button>}
        <Models
          name={name}
          rating={rating}
          designation={designation}
          address={address}
          education={defaulteducation}
          workExperience={defaultworkExperience}
          testimonials={testimonials}
        />
      </div>
    </div>
  );
}

export default ProfileCard;
