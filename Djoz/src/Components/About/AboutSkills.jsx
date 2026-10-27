import React, { useEffect, useState } from "react";

const skills = [
  { name: "Perform", percentage: 95 },
  { name: "Use Midi", percentage: 85 },
  { name: "Remix and mash up", percentage: 98 },
];

function AboutSkills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-skills-section">
      <div className="about-skills-container">
        <div className="about-skills-content">
          <div className="about-skills-title">
            <span> DJ's skill</span>
            <h2>DJ Alexandra Rud</h2>
          </div>

          <p className="about-skills-description">
            DJ Rainflow knows how to move your mind, body and soul by
            delivering tracks that stand out from the norm.
          </p>

          <div className="about-skills-list">
            {skills.map((skill) => (
              <div className="about-skill-item" key={skill.name}>
                <div className="about-skill-label">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className="about-skill-bar">
                  <div
                    className="about-skill-progress"
                    style={{
                      width: animate ? `${skill.percentage}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-skills-video">
          <a
            href="https://www.youtube.com/watch?v=JGwWNGJdvx8"
            target="_blank"
            rel="noreferrer"
            className="about-video-play"
            aria-label="Play video"
          >
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;
