import Models from './model';

// eslint-disable-next-line react/prop-types
function ProfileCard({name,email,active,usertype}) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md ">
      <div className='flex flex-col items-center cursor-pointer'>
        <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full"/>
        <h4 className="text-xl font-bold">{name}</h4> 
        <span className='text-sm text-gray-700'>{email}</span>
        <span className='text-sm text-gray-700'>{active}</span>
      </div>
      <hr className="mt-7 bg-gray-200"></hr>
      <div className='flex justify-between'>
        {usertype && <button className="mt-3 text-sm text-gray-700  hover:text-blue-600 rounded-full">1-1 Alumini</button>}
        <button className="mt-3 text-sm text-gray-700  hover:text-blue-600 rounded-full">View Profile</button>
      </div>
      <Models />
    </div>
  );
}

export default ProfileCard;