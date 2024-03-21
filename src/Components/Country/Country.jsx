import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisit,handleFlags }) => {
    console.log(country)
    
    const {name,flags,maps,languages,region, cca3} =country

    const [visited, setVisited] =useState(false)
    const handleClick=() =>{
       setVisited(!visited)
    }
    return (
        <div className={`country ${visited? 'bg-color' : 'non-color'  }`}>
            <h3 style={{color:visited? 'purple' :'skyblue'}}>name: {name?.common}</h3>
            <img src={flags.png} alt="country flag" />
            <img src={maps.googleMaps} alt="maps"/>
            <p>languages:{languages?.eng}</p>
            <p>{region}</p>
            <p>code:{ cca3}</p>
            <button onClick={() => handleVisit(country) } >Mark visit</button>
            <button onClick={() => handleFlags(country.flags.png)}>Add flag</button>
            <button className='btn' onClick={handleClick}>{visited ? 'Visited this': 'going'}</button>
            {visited ? 'Your visited' : 'You can visit this plase'}
        </div>
    );
};

export default Country;