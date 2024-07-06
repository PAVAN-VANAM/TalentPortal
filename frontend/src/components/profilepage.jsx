import React from 'react'

function Profilepage() {
  const profiles = [
    { name: 'Nikhilesh Kala', role: 'Software Engineer', location: 'Hyderabad', alumni: '1-1 Alumni' },
    { name: 'Sumathi UK', role: 'Frontend Developer', location: 'Pune' },
    { name: 'Bhairava Etti', role: 'Product Manager', location: 'Mumbai' },
    { name: 'Uday Kiran M', role: 'MERN Stack', location: 'Hyderabad' },
    { name: 'Tarun Vuppala', role: 'Software Engineer', location: 'Hyderabad' },
    { name: 'Madhav Madupu', role: 'Frontend Developer', location: 'Pune' },
    { name: 'Ashwathama', role: 'Product Manager', location: 'Mumbai' },
    { name: 'Mayuri P', role: 'MERN Stack', location: 'Hyderabad' },
  ];

  return (
    <div>
      <section className="w-3/4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <input type="text" placeholder="Search by College, City or Name..." className="w-2/3 px-4 py-2 border rounded-full focus:outline-none"/>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Find Profiles</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {profiles.map((profile, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center">
                  <img src="https://via.placeholder.com/80" alt={profile.name} className="w-20 h-20 rounded-full mb-2"/>
                  <h4 className="text-lg font-bold">{profile.name}</h4>
                  <span>{profile.role}</span>
                  <span>{profile.location}</span>
                  <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full">View Profile</button>
                </div>
              ))}
            </div>
          </section>
    </div>
  )
}
export default Profilepage;
