export default function NotFound() {
  return (
    <header className="banner not-found grid">
      <div className="inside-banner banner-overlay"></div>

      <div className="inside-banner flex align justify">
        <div className="tagline">
          <h1>Page Not Found</h1>
          <h2>Not sure how you got here, but you're in the wrong place.</h2>

          {/* end .tagline-buttons */}
        </div>
      </div>
      {/* end .inside-banner */}
    </header>
  );
}
