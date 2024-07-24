import { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

// eslint-disable-next-line react/prop-types
function ProfilePage({ alumni }) {
  const [profiles, setProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/profiles", {
          params: { type: alumni },
        });
        console.log(res.data);
        setProfiles(res.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };
    fetchProfiles();
  }, [alumni]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = profiles.filter((profile) => {
    const query = searchQuery.toLowerCase();
    const nameMatch = profile.name.toLowerCase().includes(query);
    const designationMatch = profile.designation.toLowerCase().includes(query);
    const addressMatch = profile.address.city.toLowerCase().includes(query);

    return nameMatch || designationMatch || addressMatch;
  });

  return (
    <div className="w-full">
      <section className="w-full bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by College, City or Name..."
            className="w-3/4 px-8 py-2 border rounded-medium focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="px-16 py-2 mr-2 bg-blue-600 text-white rounded-full">
            Find Profiles
          </button>
        </div>
        <div className="flex gap-6 overflow-auto h-[550px] md:flex-wrap">
          {filteredProfiles.map((profile, index) => (
            <div key={index}>
              <ProfileCard
                name={profile.name}
                active={profile.type}
                usertype={profile.usertype}
                rating={profile.user_rating}
                designation={profile.designation}
                address={profile.address}
                testimonials={profile.testimonials}
                education={profile.education}
                techStack={profile.techStack}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
