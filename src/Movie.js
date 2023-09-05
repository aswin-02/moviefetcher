import { Modal, show, Button } from "react-bootstrap";
import React, { useState } from "react";
import pic from "./pic/load.gif";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Movie = ({
  original_title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const [more, setMore] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const Body = () => {
    return (
      <div className="card-body">
        <button type="button" className="button" onClick={handleShow}>
          View More
        </button>
        <Modal className="model-bg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>{original_title}</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="model-container">
            <img
              className="card-img-top"
              style={{ width: "14rem" }}
              src={API_IMG + poster_path}
            />
            <br></br>
            <br></br>
            <br></br>
            <h4>IMDb: {vote_average}</h4>
            <h5>Release Date: {release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  return (
    <div
      style={{ border: "none" }}
      className="card text-center bg-transparent mb-3"
    >
      <div style={{ border: "none" }} className="card-body adj movie-card">
        {poster_path == null ? (
          <div>
            <img
              style={{ margin: "60px 0px 0px" }}
              id="disp-image"
              className="card-img-top image"
              src={pic}
              alt="loading"
            />

            {/* {console.log(API_IMG)} */}
          </div>
        ) : (
          <div>
            <img
              id="disp-image"
              className="card-img-top image"
              src={API_IMG + poster_path}
              alt="loading"
            />
            <Body />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
