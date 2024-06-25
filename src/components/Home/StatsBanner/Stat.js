import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Stat({ number, title }) {
  return (
    <div className="stat flex">
      <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
        {({ isVisible }) => (
          <div style={{ height: 27 }}>
            {isVisible ? <CountUp end={number} duration={2} /> : null}
          </div>
        )}
      </VisibilitySensor>

      {title}
    </div>
  );
}
