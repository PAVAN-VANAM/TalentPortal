import React from 'react'

function Profilepage() {
  const profiles = [
    { name: 'Nikhilesh Kala', role: 'Software Engineer', location: 'Hyderabad', alumni: '1-1 Alumni',image: 'https://randomuser.me/api/portraits/men/1.jpg'},
    { name: 'Sumathi UK', role: 'Frontend Developer', location: 'Pune',alumni: '1-1 Alumni',image: 'https://randomuser.me/api/portraits/women/1.jpg'},
    { name: 'Bhairava Etti', role: 'Product Manager', location: 'Mumbai',alumni: '1-1 Alumni',image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Uday Kiran M', role: 'MERN Stack', location: 'Hyderabad',alumni: '1-1 Alumni',image: 'https://randomuser.me/api/portraits/men/3.jpg'},
    { name: 'Tarun Vuppala', role: 'Software Engineer', location: 'Hyderabad',alumni: '1-1 Alumni' ,image: 'https://randomuser.me/api/portraits/men/4.jpg'},
    { name: 'Madhav Madupu', role: 'Frontend Developer', location: 'Pune',alumni: '1-1 Alumni',image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Ashwathama', role: 'Product Manager', location: 'Mumbai',image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Mayuri P', role: 'MERN Stack', location: 'Hyderabad',image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Sumathi UK', role: 'Frontend Developer', location: 'Pune' ,image: 'https://randomuser.me/api/portraits/women/4.jpg'},
    { name: 'Bhairava Etti', role: 'Product Manager', location: 'Mumbai' ,image: 'https://randomuser.me/api/portraits/men/7.jpg'},
    { name: 'Uday Kiran M', role: 'MERN Stack', location: 'Hyderabad' ,image: 'https://randomuser.me/api/portraits/men/8.jpg'},
    { name: 'Tarun Vuppala', role: 'Software Engineer', location: 'Hyderabad',image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Madhav Madupu', role: 'Frontend Developer', location: 'Pune' ,image: 'https://randomuser.me/api/portraits/men/10.jpg'},
    { name: 'Ashwathama', role: 'Product Manager', location: 'Mumbai',image: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Mayuri P', role: 'MERN Stack', location: 'Hyderabad' ,image: 'https://randomuser.me/api/portraits/men/4.jpg'},
  ];

  return (
    <div className='w-full '>
      <section className="w-full bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="Search by College, City or Name..." className="w-3/4 px-8 py-2 border rounded-full focus:outline-none" />
          <button className="px-16 py-2 mr-2 bg-blue-600 text-white rounded-full">Find Profiles</button>
        </div>
        <div className="grid grid-cols-4 gap-4 overflow-auto h-[550px]">
          {profiles.map((profile, index) => (
            <div>
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md ">
                <div className='flex flex-col items-center cursor-pointer'>
                  <img src={profile.image} alt={profile.name} className=" w-36 h-36 rounded-full mb-2" />
                  <h4 className="text-xl font-bold">{profile.name}</h4>
                  <span className='text-sm text-gray-700'>{profile.role}</span>
                  <span className='text-sm text-gray-700'>{profile.location}</span>
                </div>
                <hr class="mt-7 bg-gray-200"></hr>
                <div className='flex justify-between'>
                  {profile.alumni?<button className="mt-3 text-sm text-gray-700  hover:text-blue-600 rounded-full">1-1 Alumini</button>:""}
                  <button className="mt-3 text-sm text-gray-700  hover:text-blue-600 rounded-full">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Profilepage;
