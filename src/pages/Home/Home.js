import { useState, useEffect } from "react";
import Stat from "../../components/Home/Stat";
import Tagline from "../../components/Home/Tagline";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <nav className="flex align">
        <div className="logo" />
        <div className="nav-links">
          <button>Home</button>
          <button>About</button>
          <button>Certificate</button>
          <button>Courses</button>
        </div>
      </nav>

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
            marginTop: `${offsetY * 0.2}px`,
          }}
        >
          <Tagline />
        </div>
        {/* end .inside-banner */}
      </header>
      {/* end .banner.header */}

      <br />
      <br />

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
      </div>
      {/* end .banner.stats */}
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
