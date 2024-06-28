import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SpanishContext } from "../../../pages/App/App";

export default function Course({
  courseName,
  showModal,
  setShowModal,
  completedCourses,
  totalCourses,
}) {
  const { pathname } = useLocation();
  const { spanish } = useContext(SpanishContext);
  const percentComplete = (num) => {
    return num?.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {pathname === "/" && (
        <div
          className={`course ${showModal === courseName ? "active" : ""}`}
          onClick={() => {
            setShowModal(courseName);
          }}
        >
          <div className="course-picture" />
          {courseName}
        </div>
      )}

      {pathname === "/dashboard" && (
        <div className="course dashboard">
          <div className="course-picture">
            {completedCourses / totalCourses === 1 && (
              <div className="course-complete-badge" />
            )}
          </div>
          {courseName}

          <div className="course-data-container">
            <div class="course-data-stats flex">
              <div>
                {completedCourses} / {totalCourses}
              </div>
              <div>
                {percentComplete((completedCourses / totalCourses) * 100)}%
                {spanish ? " Completa" : " Complete"}
              </div>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${percentComplete(
                    (completedCourses / totalCourses) * 100
                  )}%`,
                }}
              />
            </div>
            {completedCourses / totalCourses === 1 ? (
              <button>
                {spanish ? "Enviar certificado" : "Send Certificate"}
              </button>
            ) : (
              <button>
                {spanish ? "Continuar aprendiendo" : "Continue Learning"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
