import React from "react";

const DropDown = () =>{

    // const [isLoading , setIsLoading] = useState(false);
    // const [error , setError ] = useState(null);
    
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
      async function getCharacters() {
        const response = await fetch("https://teknorix.jobsoid.com/api/v1/departments");
        const data = await response.json();
        //console.log(data);
        setItems(data.results.map(({ depart }) => ({ label: depart.title, value: depart.title })));
        console.log(items);
      }
      getCharacters();
    }, []);
    
        return (
    
            <select>
            {items.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
    
        );

}



  

  export default DropDown;