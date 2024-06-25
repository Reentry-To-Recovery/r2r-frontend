import GridSection from "../../components/About/GridSection";

export default function About() {
  return (
    <div className="webpage flex align">
      <div className="inner-webpage">
        <h1>
          Reentry to Recovery has consulted on education solutions and career
          services since 2001.
        </h1>
        <p>
          We offer a dedicated practice of professionals with expertise in
          career transitions and online learning across multiple content areas.
          Projects include analyzing programs for incarcerated and reentry
          users, such as recidivism programs, business opportunities for
          individuals, career workshops, and educational programs for both
          degree and non-degree-seeking students. Our breadth of experience and
          depth of services as strategic advisers to the career transition
          industry is unmatched, with the knowledge that spans business,
          education, healthcare, construction, commercial/residential services,
          and more. Whether you need Recovery or Workforce content, our reentry
          strategy will guide you toward a more successful career path and
          provide you with support content along the way. We are a hands-on team
          with experience working with inmates helping guide them toward a
          better way of life.
        </p>

        <div className="grid three">
          <GridSection
            title="Solutions"
            content="Our solutions are customized to meet the challenging demands of
            today’s marketplace."
          />
          <GridSection
            title="Unique Approach"
            content="Reentry to Recovery treats everyone as a unique customer, as we
            tailor our reviews, recommendations, content, and action plans
            accordingly."
          />
          <GridSection
            title="Goal Oriented"
            content="With over 35 years in the industry, we strive to provide services
            that will enable you to attain your desired goals."
          />
          <GridSection
            title="Our Mission"
            content="To provide the highest level of consulting services and online
            learning content for those seeking a better way of life."
          />
          <GridSection
            title="Our Philosophy"
            content="We strive to provide services that will enable individuals to attain
            their desired goals. Our goal is to help clients and partners build
            new possibilities."
          />
          <GridSection
            title="Our Promise"
            content="To provide the highest level of customer service by striving to
            create positive experiences for every client, every day."
          />
        </div>
      </div>
    </div>
  );
}
