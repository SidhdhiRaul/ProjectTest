import { useState, useEffect,useCallback } from "react";
import './JobOpening.css';

const JobsOpening = () =>{
    
    const [items, setItems] = useState([]);

    const getDepartment = useCallback( async() =>{
      const response = await fetch("https://teknorix.jobsoid.com/api/v1/jobs");
      console.log(response);
      const data = await response.json();
      
      setItems(data.map((job) =>{
        return { label: job.id, value: job.title, department: job.department.title , location : job.location.title , type: job.type} 
        } ));

    },[]);

    useEffect( () =>{
      getDepartment();
    },[getDepartment])
    
        return (   
            <ul>
            {items.map(({ label, value, department, location, type }) => (      
                <li>
                    <div class="jw-brief-content">
                        <b> {value} </b><br/>
                        {department} , {location} ,
                        <lable class="jw-label-bordered">{type}</lable>
                        <button class="jw-btn-primary">Apply</button>
                        <button class="jw-btn-primary">View</button>
                    </div>
                
                 </li>
              
            ))}
            </ul>
        );
      

}

export default JobsOpening;