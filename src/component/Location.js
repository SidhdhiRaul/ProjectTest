import { useState, useEffect,useCallback } from "react";

const Location = () =>{
    
    const [items, setItems] = useState([]);

    const getLocation = useCallback( async() =>{
      const response = await fetch("https://teknorix.jobsoid.com/api/v1/locations");
      const data = await response.json();
      
      setItems(data.map((depart) =>{
        return { label: depart.id, value: depart.title } 
        } ));

    },[]);

    useEffect( () =>{
      getLocation();
    },[getLocation])
    
        return (   
            <select>
            {items.map(({ label, value }) => (
              <option key={label} value={value}>
                {value}
              </option>
            ))}
          </select>
    
        );

}

export default Location;