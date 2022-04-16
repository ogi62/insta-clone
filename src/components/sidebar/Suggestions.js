import React,{ useState,useEffect } from 'react';
import propTypes, { func } from "prop-types";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getSuggestedProfiles } from "../../services/firebase";


export default function Suggestions ({ userId }) {

  const [ profiles, setProfiles ] = useState(null);


  // go ahead and get the suggested profiles
  useEffect(()=> {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    console.log('userId', userId);
    if(userId) {
      suggestedProfiles();
    }
  },[userId])
  //hint: use the firebase service (call using userId)...
  // getSuggestedProfiles
  // call the async function ... within useEffect ...
  //store it in the state ...
  // go ahead and render (wait on the profiles as in 'skeleton')

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className='rounded flex flex-col'>
      <div className="text-sm flex items-center align-items justify-between mb-2">
      <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
    </div>
  ) : null;
}
 
Suggestions.propTypes = {
  userId: propTypes.string
}
