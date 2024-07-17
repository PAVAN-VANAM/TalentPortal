
// import Dashboardnavbar from './Dashboardnavbar';
// import Profilepage from './profilepage';
// const Dashboard = () => {
  
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Dashboardnavbar/>
//       <main className="container mx-auto px-20 py-8">

//         <section className="flex justify-between items-center mb-5 bg-white p-4  pr-16 rounded-lg shadow-lg ">

//           <div className='flex flex-col p-2 pl-5 gap-1'>
//             <h2 className=" text-2xl font-normal text-gray-700">Get Connect with </h2>
//             <h2 className=" text-blue-600 text-3xl font-bold ">Top Companies</h2>
//           </div>

//            <div className='flex items-center gap-36'>
//             <div className='flex flex-row'>
//               <img src="https://th.bing.com/th/id/OIP.os6u16vK_wxVOkMopaXiVAHaHt?w=182&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="doneimage" className='pt-2 pr-4 w-[60px] h-[50px]'/>
//               <div className='flex flex-col'>
//                 <h2 className=" text-2xl font-bold">15LPA</h2>
//                 <h2 className=' text-lg text-gray-700'>Highest Package</h2>
//               </div>
//             </div>
            
//             <div className='flex flex-row'>
//               <img src="https://th.bing.com/th/id/OIP.a6QMa9u89TQSuOkYDjh9TwHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="doneimage" className='pt-2 pr-4 w-[70px] h-[60px]'/>
//               <div className='flex flex-col'>
//                 <h2 className=" text-2xl font-bold">Alumini</h2>
//                 <h2 className=' text-lg text-gray-700'>Connect</h2>
//               </div>
//             </div>

//             <div className='flex flex-col items-center justify-center'>
//               <h2 className=" text-2xl font-bold">Highly Rated</h2>
//               <img src="https://westsidehaircare.com/wp-content/uploads/2020/09/5stars-495x95.gif" alt="doneimage" className='pt-2 pr-4 w-[150px] h-[30px]'/>
//               <h2 className=' text-lg text-gray-700'> for Students</h2>
//             </div>
//           </div>
         
//         </section>

//         <div className='flex gap-4'>
//         <section className="flex">
//           <aside className="w-full bg-white p-8 rounded-lg shadow-md">
//           <input type="text" id="filterInput" className="border rounded-xl px-2 py-1 mb-5" placeholder="Filter by"/>

//             <div className="mb-4">
//               <h4 className="text-gray-700">Experience</h4>
//               <div className="flex flex-col space-y-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Fresher</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Experienced</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Rating</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-gray-700">Filter by Skills</h4>
//               <div className="flex flex-col space-y-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Web Development</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>DSA</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Production level</span>
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-gray-700">Filter by Education</h4>
//               <div className="flex flex-col space-y-2">
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>UnderGraduates</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Post Graduates</span>
//                 </label>
//                 <label className="flex items-center space-x-2">
//                   <input type="checkbox" className="form-checkbox"/>
//                   <span>Currently Working</span>
//                 </label>
//               </div>
//             </div>
//           </aside>

        
//         </section>
//         <Profilepage />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import { useState } from "react";
import Dashboardnavbar from './Dashboardnavbar';
import ProfilePage from './profilepage';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    experience: [],
    skills: [],
    education: []
  });

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => {
      const categoryFilters = prevFilters[category];
      return {
        ...prevFilters,
        [category]: categoryFilters.includes(value)
          ? categoryFilters.filter(item => item !== value)
          : [...categoryFilters, value]
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboardnavbar />
      <main className="container mx-auto px-20 py-8">
        <section className="flex justify-between items-center mb-5 bg-white p-4 pr-16 rounded-lg shadow-lg ">
          <div className='flex flex-col p-2 pl-5 gap-1'>
            <h2 className=" text-2xl font-normal text-gray-700">Get Connect with </h2>
            <h2 className=" text-blue-600 text-3xl font-bold ">Top Companies</h2>
          </div>
          <div className='flex items-center gap-36'>
            <div className='flex flex-row'>
              <img src="https://th.bing.com/th/id/OIP.os6u16vK_wxVOkMopaXiVAHaHt?w=182&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="doneimage" className='pt-2 pr-4 w-[60px] h-[50px]' />
              <div className='flex flex-col'>
                <h2 className=" text-2xl font-bold">15LPA</h2>
                <h2 className=' text-lg text-gray-700'>Highest Package</h2>
              </div>
            </div>
            <div className='flex flex-row'>
              <img src="https://th.bing.com/th/id/OIP.a6QMa9u89TQSuOkYDjh9TwHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="doneimage" className='pt-2 pr-4 w-[70px] h-[60px]' />
              <div className='flex flex-col'>
                <h2 className=" text-2xl font-bold">Alumini</h2>
                <h2 className=' text-lg text-gray-700'>Connect</h2>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2 className=" text-2xl font-bold">Highly Rated</h2>
              <img src="https://westsidehaircare.com/wp-content/uploads/2020/09/5stars-495x95.gif" alt="doneimage" className='pt-2 pr-4 w-[150px] h-[30px]' />
              <h2 className=' text-lg text-gray-700'> for Students</h2>
            </div>
          </div>
        </section>
        <div className='flex gap-4'>
          <section className="flex">
            <aside className="w-full bg-white p-8 rounded-lg shadow-md">
              <input type="text" id="filterInput" className="border rounded-xl px-2 py-1 mb-5" placeholder="Filter by" />

              <div className="mb-4">
                <h4 className="text-gray-700">Experience</h4>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('ALUMNI', 'Student')} />
                    <span>Connect with ALUMNI</span>
                  </label>
                  
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-gray-700">Experience</h4>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('experience', 'Fresher')} />
                    <span>Fresher</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('experience', 'Experienced')} />
                    <span>Experienced</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('experience', 'Rating')} />
                    <span>Rating</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-gray-700">Filter by Skills</h4>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('skills', 'Web Development')} />
                    <span>Web Development</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('skills', 'DSA')} />
                    <span>DSA</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('skills', 'Production level')} />
                    <span>Production level</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-gray-700">Filter by Education</h4>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('education', 'UnderGraduates')} />
                    <span>UnderGraduates</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('education', 'Post Graduates')} />
                    <span>Post Graduates</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" onChange={() => handleFilterChange('education', 'Currently Working')} />
                    <span>Currently Working</span>
                  </label>
                </div>
              </div>
            </aside>
          </section>
          <ProfilePage filters={filters} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
