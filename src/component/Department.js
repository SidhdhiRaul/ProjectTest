import { useState, useEffect,useCallback } from "react";

const Department = () =>{
    
    const [items, setItems] = useState([]);

    const getDepartment = useCallback( async() =>{
      const response = await fetch("https://teknorix.jobsoid.com/api/v1/departments");
      const data = await response.json();
      
      setItems(data.map((depart) =>{
        return { label: depart.id, value: depart.title } 
        } ));

    },[]);

    useEffect( () =>{
      getDepartment();
    },[getDepartment])
    
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

export default Department;