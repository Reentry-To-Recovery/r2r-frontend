import Tagline from "./Tagline";

export default function Header({ offsetY }) {
  return (
    <header
      className="banner header grid"
      style={{
        backgroundPosition: `center ${offsetY * 0.2}px`,
      }}
    >
      <div
        className="inside-banner banner-overlay"
        style={{
          transform: `scale(${1 + offsetY / 5000})`,
          marginTop: `${offsetY * -0.1}px`,
        }}
      ></div>

      <div
        className="inside-banner flex align justify"
        style={{
          marginTop: `${offsetY * -0.25}px`,
        }}
      >
        <Tagline />
      </div>
      {/* end .inside-banner */}
    </header>
  );
}
