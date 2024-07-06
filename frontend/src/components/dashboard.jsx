import React from 'react';

const Dashboard = () => {
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Talent Portal</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Companies</a>
            <a href="#" className="text-gray-600">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search here..." className="px-4 py-2 border rounded-full focus:outline-none"/>
            <div className="flex items-center space-x-2">
              <span>Alex Carry</span>
              <img src="https://via.placeholder.com/40" alt="User" className="w-10 h-10 rounded-full"/>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-md">
          <div>
            <h2 className="text-lg font-bold text-gray-700">Get Connect with <span className="text-blue-600">Top Companies</span></h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">15 LPA</span>
              <span>Highest Package</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">Alumini</span>
              <span>Connect</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">Highly Rated</span>
              <span>among Students</span>
            </div>
          </div>
        </section>
        <section className="flex justify-between items-start">
          <aside className="w-1/4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Filter by</h3>
            <div className="mb-4">
              <h4 className="text-gray-700">Experience</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Fresher</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Experienced</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Rating</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-700">Filter by Skills</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Web Development</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>DSA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Production level</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-gray-700">Filter by Education</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>UnderGraduates</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Post Graduates</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox"/>
                  <span>Currently Working</span>
                </label>
              </div>
            </div>
          </aside>
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
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
