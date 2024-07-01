export default function AdditionalInfo({ ScrollAnimation }) {
  return (
    <div className="section flex justify">
      <div className="inner-section additional-info grid">
        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOnce={true}
          duration={1.2}
          offset={50}
        >
          <div className="left flex">
            <h1>
              Reentry to Recovery offers content for individuals who want a
              chance for change.
            </h1>
            We offer a wide range of high-quality e-content with unlimited
            access to all content for your learning needs.
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="bounceInRight"
          animateOnce={true}
          duration={1}
          offset={50}
        >
          <ul className="right">
            <li>Flexible, self-paced learning that fits your schedule</li>

            <li>Mobile friendly</li>

            <li>Learn at your own pace</li>

            <li>Bite-sized lessons to help you retain information faster</li>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  );
}
