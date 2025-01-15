import React from "react";

export default function About(props) {
  // Define styles dynamically based on mode
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#343a40" : "white",
    border: props.mode === "dark" ? "1px solid white" : "1px solid black",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <>
      <div className="container my-5" style={myStyle}>
        <h1 className="my-4 text-center">About Us</h1>
        <p className="text-center">
          Welcome to our corner of the digital world! We are passionate about
          creating impactful experiences that not only meet but exceed
          expectations. Scroll through to learn more about what drives us and
          how we aim to make a difference.
        </p>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  Empowering people through innovation and simplicity.
                </strong>
                <p>
                  Our mission is to bridge the gap between technology and
                  accessibility, ensuring that every solution we provide
                  enhances the lives of our users. From small startups to large
                  enterprises, we aim to deliver tools that inspire creativity,
                  streamline processes, and foster growth.
                </p>
                <p>
                  <em>
                    "Innovation is the unrelenting drive to break the status quo
                    and develop anew where few have dared to go before."
                  </em>{" "}
                  – Our guiding principle in every project we undertake.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Our Vision
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Shaping a better digital future for everyone.</strong>
                <p>
                  We dream big and think bigger! Our vision is to create a world
                  where technology not only solves problems but also brings joy
                  and convenience to everyday life.
                </p>
                <p>
                  Imagine a future where digital solutions are intuitive,
                  universally accessible, and environmentally friendly. We
                  strive to make that future a reality by continuously pushing
                  the boundaries of what's possible.
                </p>
                <ul>
                  <li>Driving innovation with sustainability at the core.</li>
                  <li>
                    Collaborating with communities to understand their unique
                    needs.
                  </li>
                  <li>Building products that stand the test of time.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Values
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  Innovation, Integrity, Inclusivity, and Excellence.
                </strong>
                <p>
                  At the heart of everything we do are the values that define
                  us. These values shape our culture, guide our actions, and
                  inspire us to be better every day.
                </p>
                <ol>
                  <li>
                    <strong>Innovation:</strong> We constantly explore new ideas
                    and embrace change to create cutting-edge solutions.
                  </li>
                  <li>
                    <strong>Integrity:</strong> Honesty and transparency are at
                    the forefront of our relationships with clients, partners,
                    and team members.
                  </li>
                  <li>
                    <strong>Inclusivity:</strong> We celebrate diversity and
                    ensure our products and workplace are welcoming for
                    everyone.
                  </li>
                  <li>
                    <strong>Excellence:</strong> We strive for perfection in
                    everything we do, delivering value and exceeding
                    expectations.
                  </li>
                </ol>
                <p>
                  Join us on this journey as we continue to learn, grow, and
                  make a difference together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
