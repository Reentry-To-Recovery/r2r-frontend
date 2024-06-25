export default function Course({ courseName, showModal, setShowModal }) {
  return (
    <div
      className={`course ${showModal === courseName ? "active" : ""}`}
      onClick={() => {
        setShowModal(courseName);
      }}
    >
      <div className="course-picture" />
      {courseName}
    </div>
  );
}
