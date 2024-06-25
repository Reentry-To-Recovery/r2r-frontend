import ScrollAnimation from "react-animate-on-scroll";

export default function Quote({ offsetY, content }) {
  return (
    <div
      className="section quote flex justify"
      style={{
        backgroundPosition: `center ${offsetY * 0.2}px`,
      }}
    >
      <ScrollAnimation
        animateIn="bounceInLeft"
        animateOnce={true}
        duration={0.8}
      >
        <div className="inner-section quote">{content}</div>
      </ScrollAnimation>
    </div>
  );
}
