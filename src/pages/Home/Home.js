import { useState, useEffect, useRef } from "react";
import Modals from "../../components/Modals";
import Nav from "../../components/Nav";
import Statistics from "../../components/Home/StatsBanner/Statistics";
import Header from "../../components/Home/Header/Header";
import Quote from "../../components/Home/Quote";
import CourseShowcase from "../../components/Home/CourseShowcase/CourseShowcase";
import Synopsis from "../../components/Home/Synopsis/Synopsis";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [showModal, setShowModal] = useState("");
  const navRef = useRef();
  const courseRef = useRef();

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Modals showModal={showModal} setShowModal={setShowModal} />

      <Nav
        useState={useState}
        setShowModal={setShowModal}
        navRef={navRef}
        courseRef={courseRef}
      />

      <Header offsetY={offsetY} />

      <Synopsis />

      <Quote
        offsetY={offsetY}
        content={`“CPC has been working with Reentry to Recovery since 2018. Our facilities offer their content to thousands of inmates during their time incarcerated. Now inmates can have access once they are released. CPC believes in recidivism and offers Reentry to Recovery to help inmates look for a better way of life.”`}
      />

      <CourseShowcase
        showModal={showModal}
        setShowModal={setShowModal}
        courseRef={courseRef}
      />

      <Statistics offsetY={offsetY} />

      <Quote
        offsetY={offsetY}
        content={`"Ctel believes in inmates’ recidivism. We have been offering Reentry to Recovery content since 2019. The content works well for inmates because it covers Reentry, Workforce, Health and Wellness, and relatable job skills content. They offer curated content designed for recidivism. Now our inmates can use this content when they are released."`}
      />

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
      <div
        className="link"
        onClick={() => {
          navRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Top
      </div>
    </main>
  );
}
