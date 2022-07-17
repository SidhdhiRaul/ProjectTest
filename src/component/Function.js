import { useState, useEffect,useCallback } from "react";

const Function = () =>{
    
    const [items, setItems] = useState([]);

    const getFunction = useCallback( async() =>{
      const response = await fetch("https://teknorix.jobsoid.com/api/v1/functions");
      const data = await response.json();
      
      setItems(data.map((depart) =>{
        return { label: depart.id, value: depart.title } 
        } ));

    },[]);

    useEffect( () =>{
      getFunction();
    },[getFunction])
    
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

export default Function;