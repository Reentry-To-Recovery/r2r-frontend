import Stat from "./Stat";

export default function Statistics({ offsetY }) {
  return (
    <div
      className="banner statistics grid"
      style={{ backgroundPosition: `${offsetY * 0.2}px center` }}
    >
      <div
        className="inside-banner banner-overlay"
        style={{ backgroundPosition: `${offsetY * -0.1}px` }}
      ></div>

      <div className="inside-banner grid">
        <Stat number="45000" title="Users Reached" />
        <Stat number="8625" title="E-Content Reviewed" />
        <Stat number="200" title="Resources Linked" />
        <Stat number="400" title="Current Locations" />
      </div>
      {/* end .inside-banner */}
    </div>
  );
}
