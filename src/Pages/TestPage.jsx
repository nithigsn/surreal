import { useState } from "react";

export default function TestPage(){
    const [arr, setArr] = useState([]);  

    const MOVIES = [
        {
            name: "hello",
            age: 12
        },
        {
            name: "he",
            age: 12
        },
        {
            name: "hello Guys",
            age: 12
        }
    ];

    function handleAdd(value){
        setArr(prevArr => [...prevArr, value]);  
    }

    return(
        <div>
            {
                MOVIES.map((value, index) => {
                    return(
                        <div key={index}>
                            <p>{value.name}</p>
                            <p>{value.age}</p>
                            <button onClick={() => handleAdd(value)}>Add</button>  
                        </div>
                    );
                })
            }
            <div>
                <h3>Added Movies:</h3>
                <ul>
                    {arr.map((item, idx) => (
                        <li key={idx}>{item.name} - Age: {item.age}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
