import React, { useState, useEffect } from "react";
import axios from "axios";



const PostItems = () => {
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
            <div className="col-xl-8 stretch-card grid-margin">
                <div className="position-relative">
                    <img
                        src={NasaData.hdurl}
                        alt="banner"
                        className="img-fluid"

                    />
                    <div className="banner-content">
                        <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                            Astronomy Photo of the Day
                        </div>
                        <h1 className="mb-0">{NasaData.title}</h1>
                        <p className="mb-2">
                            {NasaData.explanation}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItems;