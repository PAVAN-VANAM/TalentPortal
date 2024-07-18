//import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaBriefcase, FaMapMarkerAlt,FaGraduationCap, FaStar, FaStarHalf, FaSchool,FaTools } from 'react-icons/fa';

// Function to render star rating
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
const Models = ({ name, rating, designation, address, education = [],techStack, workExperience=[], testimonials }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-gray-50 text-primary-600">
          View Profile &gt;
      </Button>

      <Modal className="absolute right-0 w-[900px] h-full bg-white rounded-none translate-x-7 " isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <h1 className="flex gap-1 text-xl font-bold m-4">Profile Details</h1>
              <ModalBody>
                <div className="flex justify-around items-center text-xl mt-6">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full w-36" alt="Profile" />
                  <div>
                  <h4 className="text-2xl font-bold">{name}</h4>
                  <h4 className="text-base flex gap-2 items-center text-gray-600"><span><FaBriefcase /></span>{designation}</h4>
                  <h2 className="text-base flex items-center gap-2 text-gray-600"><span><FaMapMarkerAlt /></span>{address.city}</h2>
                  <div className="flex items-center gap-2">
                    {renderStars(rating)}
                  </div>
                  <button className='border border-cyan-800 text-lg rounded-xl shadow mt-4 p-1 flex flex-row justify-center item-center gap-3'>
                  <img src="https://www.svgrepo.com/show/75820/linkedin.svg" alt="linkedin image" className='pt-1 flex flex-row justify-center item-center w-[24px]' />
                  <div className='pt-1 flex flex-row justify-center items-center'>LinkedIn</div>
                  </button>
                  </div>
                </div>
                <hr className="mt-5 border-1" />
                <div className="mt-2">
                  <h4 className="text-lg font-semibold">Education</h4>
                  {education.length > 0 ? (
                    education.map((edu, index) => (
                      <div key={index} className="text-xl flex gap-2 justify-start h-12 items-center  text-gray-900">
                        <span ><FaSchool /></span>{edu.instituteName}  - <span><FaGraduationCap/></span> {edu.courseName}
                        
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-600">No education details available</p>
                  )}
                </div>
                <div className="mt-2">
                  <h4 className="text-md font-semibold">Work Experience</h4>
                  {workExperience.length > 0 ? (
                    workExperience.map((work, index) => (
                      <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
                        <span><FaBriefcase /></span>{work.companyName} - {work.designation}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-600">No work experience details available</p>
                  )}
                </div>
                <div className="mt-2">
                  <h4 className="text-md font-semibold">Tech Stack</h4>
                  {techStack.length > 0 ? (
                    techStack.map((tech, index) => (
                      <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
                        <span><FaTools /></span>{tech}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-600">No tech stack details available</p>
                  )}
                </div>
               
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Models;
