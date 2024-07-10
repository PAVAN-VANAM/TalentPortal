import { useEffect , useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";


function Profilepage() {
  const [profile, setProfile] = useState([]);
  
  useEffect(()=>{
    const fetch = async()=>{
    const res= await axios.get("http://localhost:3001/post");
    console.log(res.data);
    setProfile(res.data);
    }
    fetch();
  },[])
  
  return (
    <div className='w-full'>
      <section className="w-full bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="Search by College, City or Name..." className="w-3/4 px-8 py-2 border rounded-full focus:outline-none" />
          <button className="px-16 py-2 mr-2 bg-blue-600 text-white rounded-full">Find Profiles</button>
        </div>
        <div className="grid grid-cols-4 gap-4 overflow-auto h-[550px]">
          {profile.map((item,index) => (
            <div key={index}>
              <ProfileCard name = {item.name} email = {item.email} active = {item.active} usertype={item.usertype}/>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Profilepage;
