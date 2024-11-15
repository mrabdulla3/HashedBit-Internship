import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data").then(
      (response) => {
          if(!response.ok){
              throw new Error('Page Not Found 404');
          }
          return response.json();
      }
    ).then((data)=>{
      const sortedData = data.sort((a, b) => a.NRR - b.NRR);
      setData(sortedData);
      setLoading(false);
    }).catch((e)=>{
        setError(e);
        setLoading(false);
    });
  }, []);

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <>
 <h1>IPL Season 2022 Points</h1>
 <table border="1" cellPadding="10">
  <thead>
    <tr>
      <th>No</th>
      <th>Team</th>
      <th>Matches</th>
      <th>Won</th>
      <th>Lost</th>
      <th>Tied</th>
      <th >NRR</th>
      <th>Points</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>(
      <tr key={item.No}>
        <td>{item.No}</td>
        <td>{item.Team}</td>
        <td>{item.Matches}</td>
        <td>{item.Won}</td>
        <td>{item.Lost}</td>
        <td>{item.Tied}</td>
        <td>{item.NRR}</td>
        <td>{item.Points}</td>

    </tr>
    ))}
  </tbody>
  
 </table>
  </>;
}

export default App;
