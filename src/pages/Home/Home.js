import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Statistics from "../../components/Home/StatsBanner/Statistics";
import Header from "../../components/Home/Header/Header";
import Quote from "../../components/Home/Quote";
import CourseShowcase from "../../components/Home/CourseShowcase/CourseShowcase";
import Synopsis from "../../components/Home/Synopsis/Synopsis";
import AdditionalInfo from "../../components/Home/AdditionalInfo/AdditionalInfo";

export default function Home({ showModal, setShowModal }) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header offsetY={offsetY} />

      <Synopsis />

      <Quote
        offsetY={offsetY}
        content={`“CPC has been working with Reentry to Recovery since 2018. Our facilities offer their content to thousands of inmates during their time incarcerated. Now inmates can have access once they are released. CPC believes in recidivism and offers Reentry to Recovery to help inmates look for a better way of life.”`}
        ScrollAnimation={ScrollAnimation}
      />

      <CourseShowcase
        showModal={showModal}
        setShowModal={setShowModal}
        ScrollAnimation={ScrollAnimation}
      />

      <Statistics offsetY={offsetY} />

      <AdditionalInfo ScrollAnimation={ScrollAnimation} />

      <Quote
        offsetY={offsetY}
        content={`"Ctel believes in inmates’ recidivism. We have been offering Reentry to Recovery content since 2019. The content works well for inmates because it covers Reentry, Workforce, Health and Wellness, and relatable job skills content. They offer curated content designed for recidivism. Now our inmates can use this content when they are released."`}
        ScrollAnimation={ScrollAnimation}
      />
    </>
  );
}
