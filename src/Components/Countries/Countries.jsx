import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountries ]=useState([])
    const [visitedCountries, setVisitedCountries] =useState([])
    const [visitedFlags,setVisitedFlags] =useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisit =(count) =>{
        const newVisitedCountries=[...visitedCountries,count]
        setVisitedCountries(newVisitedCountries)
        
    }
    const handleFlags =(flag) =>{
        console.log('flag added')
        const newFlags= [...visitedFlags,flag]
        setVisitedFlags(newFlags)
    }
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>visit list.{visitedCountries.length}</h5>
                <ul>
                    {
                       visitedCountries.map(visits => <li key={visits.cca3}>{visits.name.common}</li>) 
                    }
                </ul>

                {
                    visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="countries">
            {
                countries.map((country) => <Country key={country.name.common} handleFlags={handleFlags}  handleVisit ={handleVisit } country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;