import React from 'react'

const Motorcycles = ({motorcycles}) => {
    console.log(motorcycles);
    return (
        <div>
            <center><h1>Motorcycles List</h1></center>
            {motorcycles.map((motorcycle) => (
                <div className="card" key={motorcycle.id}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{motorcycle.id}</h6>
                        <h5 className="card-title">{motorcycle.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Motorcycles;