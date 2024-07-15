
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,Button, useDisclosure} from "@nextui-org/react";
// import { FaBriefcase, FaMapMarkerAlt, FaStar, FaStarHalf,FaSchool } from 'react-icons/fa';
// const Models = ( {name, rating, designation, address=[], education=[], workExperience=[],testimonials }) => {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
 
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
//     return (
//       <div className="flex items-center">
//         {[...Array(fullStars)].map((_, i) => (
//           <FaStar key={i} className="text-yellow-500" />
//         ))}
//         {halfStar && <FaStarHalf className="text-yellow-500" />}
//         {[...Array(emptyStars)].map((_, i) => (
//           <FaStar key={i} className="text-gray-300" />
//         ))}
//       </div>
//     );
//   };
//   return (
//     <>
//       <Button onPress={onOpen} className=" bg-gray-50 text-primary-600"
//              >view profile</Button>
//       <Modal className="absolute right-0 h-full bg-primary-50 rounded-none translate-x-5 w-full" isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent >
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Profile Details</ModalHeader>
//               <ModalBody>
//                 <div className="flex justify-around items-center">
//                   <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full w-34" alt="Profile" />
//                   <div><h4 className="text-xl font-bold">{name}</h4>
//                   <h4 className="text-xs flex gap-2 items-center text-gray-600"><span><FaBriefcase /></span>{designation}</h4>
//                   <h2 className="text-xs flex items-center gap-2 text-gray-600"><span><FaMapMarkerAlt /></span>{address}</h2>
//                   <div className="flex items-center gap-2">
//                     {renderStars(rating)}
//                   </div></div>
//                 </div>
//                 <hr className="mt-5 border-2 w-full bg-black" />
//                 {/* <div className="mt-2">
//                   <h4 className="text-md font-semibold">Education</h4>
//                   {education.map((edu, index) => (
//                     <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
//                       <span><FaSchool /></span>{edu.instituteName} - {edu.courseName}
//                     </div>
//                   ))}
//                 </div> */}
//                 <div>{education.instituteName}</div>
//                 <div className="mt-2">
//                   <h4 className="text-md font-semibold">Work Experience</h4>
//                   {workExperience.map((work, index) => (
//                     <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
//                       <span><FaBriefcase /></span>{work.companyName} - {work.designation}
//                     </div>
//                   ))}
//                 </div>
                
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default Models


import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaBriefcase, FaMapMarkerAlt, FaStar, FaStarHalf, FaSchool } from 'react-icons/fa';

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
const Models = ({ name, rating, designation, address, education = [], workExperience = [], testimonials }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-gray-50 text-primary-600">
        View Profile
      </Button>
      <Modal className="absolute right-0 h-full bg-primary-50 rounded-none translate-x-7" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Profile Details</ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full w-24" alt="Profile" />
                  <h4 className="text-xl font-bold">{name}</h4>
                  <h4 className="text-xs flex gap-2 items-center text-gray-600"><span><FaBriefcase /></span>{designation}</h4>
                  <h2 className="text-xs flex items-center gap-2 text-gray-600"><span><FaMapMarkerAlt /></span>{address.city}</h2>
                  <div className="flex items-center gap-2">
                    {renderStars(rating)}
                  </div>
                </div>
                <hr className="mt-5 border-2 w-full bg-black" />
                <div className="mt-2">
                  <h4 className="text-md font-semibold">Education</h4>
                  {education.length > 0 ? (
                    education.map((edu, index) => (
                      <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
                        <span><FaSchool /></span>{edu.instituteName} - {edu.courseName}
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
