import React, { useState, useEffect } from "react";
import axios from "axios";



function NasaApi() {
  const [NasaData, setNasaData] = useState([]);

  const getApod = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=yJGmq5IlTpviPWzetKQrsrYKWt5ExR4XFMVtgDHJ"
      )
      .then((response) => {
        console.log(response);
        console.log("requested");
        setNasaData(response.data);
      });
  };

  useEffect(() => {
    getApod();
  }, []);

  return (
    <>
      <div className="container">
        <div className="col">
          <div className="card" style={{ width: "1000px", height: "1100px" }}>
            <img src={NasaData.hdurl} className="card-img-top" alt="APOD" />
            <div className="card-body">
              <h5 className="card-title">{NasaData.title}</h5>
              <p className="card-text text-muted">
                <small>{NasaData.date}</small>
              </p>
              <p className="card-text">{NasaData.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NasaApi;
