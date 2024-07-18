/* eslint-disable react/prop-types */
import Models from "./model";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";

// Function to render star rating

// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line react/prop-types
function ProfileCard({
  name,
  active,
  usertype,
  rating,
  designation,
  address,
  education,
  techStack,
  workExperience,
  testimonials,
}) {
  //  const defaulteducation = education || [];
  //  const defaultworkExperience = workExperience || [];
  return (
    <div className="  bg-gray-50 w-[320px] h-auto flex flex-col justify-center items-center rounded-lg shadow-md border-2 ">
      <div className="flex justify-around items-center text-xl mt-4  w-full px-4 ">
        <div className={active==="ALUMNI" ? "border-4 border-purple-900 rounded-full" : "border-4 border-green-500 rounded-full"} >
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            className="rounded-full w-24 border-4  border-white-900"
            alt="Profile"
          />
        </div>
        <div className="flex flex-col items-start ml-4">
          <div className="flex flex-col items-start ima">
            <h4 className="text-xl font-bold">{name}</h4>
            <h4 className="text-xs gap-1 flex text-gray-600">
              <span>
                <FaBriefcase />
              </span>
              {designation}
            </h4>
            <h2 className="text-xs flex text-gray-600">
              <span>
                <FaMapMarkerAlt />
              </span>
              {address.city}
            </h2>
            <div className="flex items-center gap-2">{renderStars(rating)}</div>
          </div>
          <div className="w-full px-4 mt-4 text-xs"></div>
        </div>
      </div>
      <button className=" px-2 text-sm font-bold py-2 bg-gray-200 mt-5 text-gray-600 rounded-xl">
        Connect to Know Salary Hike
      </button>
      <hr className="mt-2 border-2 w-full bg-black" />
      <div className="w-full flex mt-2 justify-end items-end">
        {usertype && (
          <button className="mt-3 text-sm text-gray-700 hover:text-blue-600 rounded-full">
            1-1 Alumini
          </button>
        )}
        <Models
          name={name}
          rating={rating}
          designation={designation}
          address={address}
          education={education}
          workExperience={workExperience}
          testimonials={testimonials}
          techStack={techStack}
        />
      </div>
    </div>
  );
}

export default ProfileCard;
