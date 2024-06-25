import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Statistics from "../../components/Home/StatsBanner/Statistics";
import Header from "../../components/Home/Header/Header";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [showModal, setShowModal] = useState("");

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {showModal === "contact" || showModal === "refund" ? (
        <div className="modal-bg flex align justify">
          <div className="modal-container flex align">
            <div className="modal-text">
              {showModal === "contact"
                ? `If you’ve landed on this page, you’re interested in taking the first step. Whether you need Reentry to Recovery or Workforce content, our reentry strategy will guide you toward a more successful career path and provide you with support content along the way.`
                : showModal === "refund"
                ? "A refund must be requested within three days of the purchase date."
                : ""}
            </div>
            <button onClick={() => setShowModal("")}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}

      <Nav useState={useState} setShowModal={setShowModal} />
      <Header offsetY={offsetY} />

      <div className="section flex justify">
        <div className="inner-section flex align">
          <div className="tree" />
          <h1>
            Reentry to Recovery offers exclusive e-content to CPCs and Ctel
            customers. Our e-content is for the incarcerated, reentry users, and
            anyone who wants a chance for change.
          </h1>
          Reentry to Recovery has consulted on education solutions and career
          services since 2001. Our specialist’s research and curate content for
          individuals that is easy and engaging to follow. We are continuously
          releasing new content. We customize our content to meet the
          challenging demands of individuals searching for a better way of life.
          <div className="course-titles grid">
            <ul>
              <li>
                <div className="course-icon" />
                Health & Wellness
              </li>
              <li>
                <div className="course-icon" />
                Workforce Integration
              </li>
              <li>
                <div className="course-icon" />
                Recovery
              </li>
            </ul>

            <ul>
              <li>
                <div className="course-icon" />
                Cover Letter & Resume
              </li>
              <li>
                <div className="course-icon" />
                Personal Finance
              </li>
              <li>
                <div className="course-icon" />
                Parenting
              </li>
            </ul>

            <ul>
              <li>
                <div className="course-icon" />
                Legal Information
              </li>
              <li>
                <div className="course-icon" />
                GED Study Guides
              </li>
              <li>
                <div className="course-icon" />
                Education
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section quote flex justify">
        <div className="inner-section quote">
          “CPC has been working with Reentry to Recovery since 2018. Our
          facilities offer their content to thousands of inmates during their
          time incarcerated. Now inmates can have access once they are released.
          CPC believes in recidivism and offers Reentry to Recovery to help
          inmates look for a better way of life.”
        </div>
      </div>

      <Statistics offsetY={offsetY} />

      <div className="section quote flex justify">
        <div className="inner-section quote">
          "Ctel believes in inmates’ recidivism. We have been offering Reentry
          to Recovery content since 2019. The content works well for inmates
          because it covers Reentry, Workforce, Health and Wellness, and
          relatable job skills content. They offer curated content designed for
          recidivism. Now our inmates can use this content when they are
          released."
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
