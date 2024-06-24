import CountUp from "react-countup";

export default function Stat({ number, title }) {
  return (
    <div className="stat flex">
      <CountUp end={number} duration={2} />
      {title}
    </div>
  );
}
