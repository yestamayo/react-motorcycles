import React from 'react';
import { useState, useEffect } from 'react';
import Motorcycles from './components/motorcycles';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/BMW',
  headers: {
      'X-RapidAPI-Key': '13b0f0d627msh71afbcc2d57667ep143c7ajsnb6fad3acd0cc',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
  }
}

function App() {
    const [motorcycles, setMotorcycles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.request(options)
            .then(function (response) {
                let data = response && response.data;

                setMotorcycles(data);
                setError(null);
            })
            .catch(setError)
            .finally(function () {
              setLoading(false)
            });
    }, []);
    
    if (loading) return <p>Loading...</p>
    
    if (error) return <p>An error occurred</p>

    return (
        <div className="App">
            <Motorcycles motorcycles={motorcycles}/>
        </div>
    );
}

export default App;
