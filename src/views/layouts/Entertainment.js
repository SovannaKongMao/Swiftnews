import React, { useState, useEffect } from "react";
import axios from "axios";

function Entertain() {
    const [data, setData] = useState([]);

    const getNews = () => {
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?category=entertainments&apiKey=2d747e1d943d4dbeb2965bafc529f1c2"
            )
            .then((response) => {
                console.log(response);
                console.log("requested");
                setData(response.data.articles);
            });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {data.map((value) => {
                    return (
                        <div className="col">
                            <div className="card mb-3" style={{ width: "1050px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={value.urlToImage}
                                            className="img-fluid rounded-start"
                                            alt="NewsImage"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a
                                                href={value.url}
                                                className="card-text"
                                                target="_blank"
                                            >
                                                <small className="text-primary ">Read more</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Entertain;