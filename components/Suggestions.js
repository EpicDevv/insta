import React, { useState, useEffect } from "react";

import {profileData} from './profileData'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = profileData
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5 ">
        <h3 className="text-sm font-bold text-grey-400">suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.slice(16, 21).map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3" 
        >
          <img src={profile.avatar} className="w-10 h-10 rounded-full border p-[2px]" alt="" />
          <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">works at {profile.info}</h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      )).reverse()}
    </div>
  );
}

export default Suggestions;
