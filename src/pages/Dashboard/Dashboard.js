import CourseShowcase from "../../components/Home/CourseShowcase/CourseShowcase";

export default function Dashboard({ showModal, setShowModal }) {
  return (
    <div className="webpage dashboard flex align">
      <div className="inner-webpage">
        <CourseShowcase showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}
