
import React from "react";
import { Link } from "react-router-dom";
import "./Discography.css";

const albums = [
  { id: 1, image: "/img/discography/disco-1.jpg" },
  { id: 2, image: "/img/discography/disco-2.jpg" },
  { id: 3, image: "/img/discography/disco-3.jpg" },
  { id: 4, image: "/img/discography/disco-4.jpg" },
  { id: 5, image: "/img/discography/disco-5.jpg" },
  { id: 6, image: "/img/discography/disco-6.jpg" },
];

function Discography() {
  return (
   
    <div className="discography-page">
    

      {/* Breadcrumb */}
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <span>Discography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="discography spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <h2>Latest Releases</h2>
                <h1>Discography</h1>
              </div>
            </div>
          </div>

          <div className="row">
            {albums.map((album) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                key={album.id}
              >
                <div className="discography__item">
                  <div className="discography__item__pic">
                    <img
                      src={album.image}
                      alt={`Album cover ${album.id}`}
                    />
                  </div>

                  <div className="discography__item__text">
                    <span>$ 52.00</span>
                    <h4>EDM Party Electro House</h4>

                    <a href="#" aria-label="Music platform one">
                      <img
                        src="/img/discography/link-1.jpg"
                        alt="Music platform"
                      />
                    </a>

                    <a href="#" aria-label="Music platform two">
                      <img
                        src="/img/discography/link-2.jpg"
                        alt="Music platform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination__links">
                <a href="#page-1">1</a>
                <a href="#page-2">2</a>
                <a href="#page-3">3</a>
                <a href="#next">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
   
  );
}

export default Discography;
