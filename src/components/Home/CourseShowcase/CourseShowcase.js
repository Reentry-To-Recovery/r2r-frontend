import Course from "./Course";

export default function CourseShowcase({ showModal, setShowModal }) {
  return (
    <div id="courses" className="section flex justify">
      <div className="inner-section courses-showcase grid">
        <Course
          courseName="Recovery"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Workforce Integration"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Health & Wellness"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Personal Finance"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Parenting"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="GED Study Guide"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Legal Information"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Cover Letter & Resume"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Education Study Guide"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Online Education"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Galleries"
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Course
          courseName="Helpful Links & Videos"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}
