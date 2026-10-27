
import React from "react";

function AboutContent() {
  return (
    <section className="about about--page spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about__pic">
              <img
                src="/public/img/about/about.png"
                alt="About DJ"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about__text">
              <div className="section-title">
                <h2>
                  He heard something that he knew to be music
                </h2>
              </div>

              <p>
                At vero eos et accusamus et iusto odi
                odgnissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui
                officia deserunt mollitia animi quod
                justo pro an.
              </p>

              <img
                src="/public/img/about/signature.png"
                alt="Signature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
