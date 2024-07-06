import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

      <section className="bg-white  flex">
        <div className="container mx-auto text-center w-[50%] flex flex-col items-center justify-center">
          <h1 className="text-5xl w-[90%] font-bold text-gray-800">
            Get innovate Unlock your Potential with Top Companies
          </h1>
          <p className="text-gray-600  p-6">
            Discover opportunities that match your unique skills. Join our community and connect with top employers today.
          </p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded mr-2 hover:bg-blue-500">Get Started</button>
            <button className="bg-transparent border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-100">Know More</button>
          </div>
        </div>
        <div className='w-[50%]'>
            <img src="https://static.vecteezy.com/system/resources/previews/002/136/504/large_2x/hiring-and-recruitment-concept-people-searching-candidate-for-a-new-employee-human-resource-recruitment-process-illustration-vector.jpg" alt="mian" />
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Connected with...</h2>
          <div className="flex justify-around items-center space-x-6 mt-6 ">
            <img  src="https://tse1.mm.bing.net/th?id=OIP.MZU5mDFjU3VNait0JhD00gHaCC&pid=Api&P=0&h=180" alt="TCS" className="h-12" />
            <img  src="https://logosmarcas.net/wp-content/uploads/2022/05/Cognizant-Logo.png" alt="Cognizant" className="w-[200px] h-[100px]" />
            <img src="https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo-1967-1972.png" alt="IBM" className="h-12 " />
            <img src="https://tse4.mm.bing.net/th?id=OIP.sczkYeWBr2wT9XrUQWbVXgHaEo&pid=Api&P=0&h=180" alt="Infosys" className="h-12" />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-7">
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img src="https://i.pinimg.com/originals/8f/d8/eb/8fd8eb59bb027e607c6d14cdff1812eb.png" alt="Illustration" className="w-3/4" />
          </div>
          <div className="lg:w-1/2 p-12">
            <h2 className="text-3xl font-bold text-gray-800 p-6 text-center">Empower your workforce with Talent Portal</h2>
            <p className="text-gray-600 mt-4 px-12 text-center">
              The seamless solution to discover, connect, and recruit top talent effortlessly, enhancing your hiring process and ensuring the best candidates for your company's success.
            </p>
          </div>
          
        </div>
      </section>

      <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Start growing with Community</h2>
        <div className="relative flex justify-center items-center space-x-6">
          <div className="absolute left-0 top-0 flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center">
              <img src="user1.jpg" alt="User 1" className="w-16 h-16 rounded-full mb-2" />
              <p className="bg-white p-2 rounded shadow-md text-gray-600 max-w-xs">this portal gave me a great opportunities</p>
            </div>
            <img src="user2.jpg" alt="User 2" className="w-12 h-12 rounded-full" />
          </div>
          <h2 className="text-3xl font-bold text-blue-600">Start growing with Community</h2>
          <div className="absolute right-0 top-0 flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center">
              <img src="user3.jpg" alt="User 3" className="w-16 h-16 rounded-full mb-2" />
              <p className="bg-white p-2 rounded shadow-md text-gray-600 max-w-xs">I happy to be a part of this portals that help with hiring opportunities</p>
            </div>
            <img src="user4.jpg" alt="User 4" className="w-12 h-12 rounded-full" />
          </div>
        </div>
      </div>
    </section>

      <section className="py-12 bg-white flex items-center justify-center">
        <div className="container mx-auto text-center w-[50%]">
          <h2 className="text-5xl w-[70%] text-center font-bold text-gray-800 p-5">Hire the Skilled students you need</h2>
          <p className="text-gray-600 mt-4">
            We provide the profiles of the skilled students that help to decrease your hiring time.
          </p>
        </div>
        <div className='w-[50%]'>
            <img src="https://cdn.dribbble.com/users/2131993/screenshots/15628381/media/affbd0a5886ea406a8216a4eea77cd15.png" alt="imagess" />
        </div>
      </section>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-400">
          <div className="space-x-6 mb-4">
            <a href="#overview" className="hover:text-white">Overview</a>
            <a href="#policy" className="hover:text-white">Privacy Policy</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="space-x-6 mb-4">
            <a href="#explore" className="hover:text-white">Explore</a>
            <a href="#search" className="hover:text-white">Search</a>
            <a href="#hire" className="hover:text-white">Hire</a>
          </div>
          <div className="space-x-6">
            <a href="#linkedin" className="hover:text-white">LinkedIn</a>
            <a href="#instagram" className="hover:text-white">Instagram</a>
            <a href="#facebook" className="hover:text-white">Facebook</a>
          </div>
          <p className="mt-6">&copy; 2024 TalentPortal, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
