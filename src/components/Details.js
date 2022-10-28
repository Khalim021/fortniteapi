import React, { useContext } from 'react'
import { useParams} from "react-router-dom";
import {FortniteContext} from "../contextapi";

const Details = () => {
  const {fortnite} = useContext(FortniteContext);
  const { id } = useParams();
  const fort = fortnite.find(fort => (fort.id).toString() === id)

  return (
    <div className='content'>
      <div>
        {fort && 
          <>
            <div className="card">
            <img src={fort.full_background} className="card-img-top" alt={fort.name} />
            <div className="card-body">
            <h5 className="card-title">{fort.name}</h5>
            <p className="card-text">{fort.description}</p>
            <p className='interests'>Interest: {fort.interest}</p>
            <span className='price-right' style={{fontSize: '1.6rem'}}>${fort.price}</span>
        </div>
      </div>
          </>
        }
        {!fort && 
          <>
            <p>Well, There is no any detail here!</p>
          </>
        }
      </div>
    </div>
  )
}

export default Details

