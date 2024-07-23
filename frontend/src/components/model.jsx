import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaBriefcase, FaMapMarkerAlt, FaGraduationCap, FaStar, FaStarHalf, FaSchool, FaTools } from 'react-icons/fa';
import { LuShare } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

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
const Models = ({ name, rating, designation, address, education = [], techStack, workExperience = [], testimonials, videoUrl }) => {
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
              <h2 className="text-xl flex items-center font-bold"><span className="mr-2"><LuShare size={24} /></span>Share</h2>
              <ModalBody>
  <div className="flex justify-around items-center text-xl mt-6">
    <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full w-36" alt="Profile" />
    <div>
      <h4 className="text-2xl font-bold">{name}</h4>
      <h4 className="text-base flex gap-2 items-center text-gray-600">{designation}</h4>
      <h4 className="text-base flex gap-2 items-center text-gray-600">Software Engineer at Arcesium</h4>
      <button className='border border-cyan-800 text-lg rounded-xl shadow mt-4 p-1 flex flex-row justify-center item-center gap-3'>
        <img src="https://www.svgrepo.com/show/75820/linkedin.svg" alt="linkedin image" className='pt-1 flex flex-row justify-center item-center w-[24px] border-blue-600' />
        <div className='pt-1 flex flex-row justify-center items-center text-blue-600'>LinkedIn</div>
      </button>
    </div>
  </div>
  <div className="flex mt-4">
    <h3>User rating : </h3>{renderStars(rating)}
  </div>

  <div className="mt-2">
    <h2 className="text-base flex items-center gap-2 text-gray-600"><span><IoLocationOutline /></span>{address.city}</h2>
    {education.length > 0 ? (
      education.map((edu, index) => (
        <div key={index} className="text-base flex gap-2 justify-start h-12 items-center text-gray-600">
          <span><FaSchool /></span>{edu.instituteName} <span><FaGraduationCap /></span> {edu.courseName}
        </div>
      ))
    ) : (
      <p className="text-xs text-gray-600">No education details available</p>
    )}
    {workExperience.length > 0 ? (
      workExperience.map((work, index) => (
        <div key={index} className="text-xs flex gap-2 items-center text-gray-600">
          <span><MdWorkOutline /></span>{work.companyName} - {work.designation}
        </div>
      ))
    ) : (
      <p className="text-base text-gray-600">No work experience details available</p>
    )}
  </div>

  <div className="mt-4">
    <h1 className="font-bold text-xl text-gray-600">Reviews by Manideep Siva on YouTube</h1><br></br>
    <iframe className="rounded-medium" width="400" height="210"  src="https://www.youtube.com/embed/LEk6ieSO3jE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
