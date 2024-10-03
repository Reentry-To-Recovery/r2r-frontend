import Course from "../Home/CourseShowcase/Course";

export default function StudentDash() {
  return (
    <>
      <div className="inner-section courses-showcase dashboard grid">
        <Course courseName="Recovery" completedCourses={67} totalCourses={67} />

        <Course
          courseName="Workforce Integration"
          completedCourses={60}
          totalCourses={65}
        />
        <Course
          courseName="Health & Wellness"
          completedCourses={27}
          totalCourses={79}
        />
        <Course
          courseName="Personal Finance"
          completedCourses={56}
          totalCourses={56}
        />
        <Course
          courseName="Parenting"
          completedCourses={58}
          totalCourses={78}
        />
        <Course
          courseName="GED Study Guide"
          completedCourses={20}
          totalCourses={47}
        />
        <Course
          courseName="Legal Information"
          completedCourses={32}
          totalCourses={32}
        />
        <Course
          courseName="Cover Letter & Resume"
          completedCourses={42}
          totalCourses={50}
        />
        <Course
          courseName="Education Study Guide"
          completedCourses={74}
          totalCourses={90}
        />
        <Course
          courseName="Online Education"
          completedCourses={42}
          totalCourses={42}
        />
        <Course
          courseName="Galleries"
          completedCourses={39}
          totalCourses={73}
        />
        <Course
          courseName="Helpful Links & Videos"
          completedCourses={35}
          totalCourses={51}
        />
      </div>
    </>
  );
}
