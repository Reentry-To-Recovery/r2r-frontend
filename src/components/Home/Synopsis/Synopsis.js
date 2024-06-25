import Course from "./Course";

export default function Synopsis() {
  return (
    <div className="section flex justify">
      <div className="inner-section flex align">
        <div className="tree" />
        <h1>
          Reentry to Recovery offers exclusive e-content to CPCs and Ctel
          customers. Our e-content is for the incarcerated, reentry users, and
          anyone who wants a chance for change.
        </h1>
        Reentry to Recovery has consulted on education solutions and career
        services since 2001. Our specialist’s research and curate content for
        individuals that is easy and engaging to follow. We are continuously
        releasing new content. We customize our content to meet the challenging
        demands of individuals searching for a better way of life.
        <div className="course-titles grid">
          <ul>
            <Course courseTitle="Health & Wellness" />
            <Course courseTitle="Workforce Integration" />
            <Course courseTitle="Recovery" />
          </ul>

          <ul>
            <Course courseTitle="Cover Letter & Resume" />
            <Course courseTitle="Personal Finance" />
            <Course courseTitle="Parenting" />
          </ul>

          <ul>
            <Course courseTitle="Legal Information" />
            <Course courseTitle="GED Study Guides" />
            <Course courseTitle="Education" />
          </ul>
        </div>
      </div>
    </div>
  );
}
