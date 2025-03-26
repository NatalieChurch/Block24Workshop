import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {

//console.log(puppyList);
const [puppies, setPuppies] = useState(puppyList);
//console.log(puppies);
const [featPupId, setFeatPupId] = useState(null);
const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  return (
    <div className="App">
      {
        puppies.map((puppy) => {

            console.log(featuredPup)
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })     
      }
      {featPupId &&  <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>}
    </div>
  )
}

export default App
