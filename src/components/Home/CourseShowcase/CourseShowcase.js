import { useLocation } from "react-router-dom";
import Course from "./Course";

export default function CourseShowcase({ showModal, setShowModal }) {
  const { pathname } = useLocation();

  return (
    <>
      <div id="courses" className="section flex justify">
        <div className="inner-section courses-showcase grid">
          <Course
            courseName="Recovery"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={67}
            totalCourses={67}
          />
          <Course
            courseName="Workforce Integration"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={60}
            totalCourses={65}
          />
          <Course
            courseName="Health & Wellness"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={27}
            totalCourses={79}
          />
          <Course
            courseName="Personal Finance"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={56}
            totalCourses={56}
          />
          <Course
            courseName="Parenting"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={58}
            totalCourses={78}
          />
          <Course
            courseName="GED Study Guide"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={20}
            totalCourses={47}
          />
          <Course
            courseName="Legal Information"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={32}
            totalCourses={32}
          />
          <Course
            courseName="Cover Letter & Resume"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={42}
            totalCourses={50}
          />
          <Course
            courseName="Education Study Guide"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={74}
            totalCourses={90}
          />
          <Course
            courseName="Online Education"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={42}
            totalCourses={42}
          />
          <Course
            courseName="Galleries"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={39}
            totalCourses={73}
          />
          <Course
            courseName="Helpful Links & Videos"
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={35}
            totalCourses={51}
          />
        </div>
      </div>
    </>
  );
}
