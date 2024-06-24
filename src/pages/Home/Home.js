import { useState, useEffect } from "react";
import Tagline from "../../components/Home/Header/Tagline";
import Nav from "../../components/Nav";
import Statistics from "../../components/Home/StatsBanner/Statistics";
import Header from "../../components/Home/Header/Header";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Nav useState={useState} />
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

      <Statistics offsetY={offsetY} />
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
