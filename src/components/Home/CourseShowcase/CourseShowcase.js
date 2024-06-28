import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SpanishContext } from "../../../pages/App/App";
import Course from "./Course";

export default function CourseShowcase({ showModal, setShowModal }) {
  const { pathname } = useLocation();
  const { spanish } = useContext(SpanishContext);

  return (
    <>
      {pathname === "/" && (
        <div id="courses" className="section flex justify">
          <div className="inner-section courses-showcase grid">
            <Course
              courseName={spanish ? "Recuperación" : "Recovery"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={67}
              totalCourses={67}
            />
            <Course
              courseName={
                spanish
                  ? "Integración de la fuerza laboral"
                  : "Workforce Integration"
              }
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={60}
              totalCourses={65}
            />
            <Course
              courseName={spanish ? "Salud y bienestar" : "Health & Wellness"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={27}
              totalCourses={79}
            />
            <Course
              courseName={spanish ? "Finanzas personales" : "Personal Finance"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={56}
              totalCourses={56}
            />
            <Course
              courseName={spanish ? "Crianza de los hijos" : "Parenting"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={58}
              totalCourses={78}
            />
            <Course
              courseName={
                spanish ? "Guía de estudio de GED" : "GED Study Guide"
              }
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={20}
              totalCourses={47}
            />
            <Course
              courseName={spanish ? "Información legal" : "Legal Information"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={32}
              totalCourses={32}
            />
            <Course
              courseName={
                spanish
                  ? "Carta de presentación y currículum"
                  : "Cover Letter & Resume"
              }
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={42}
              totalCourses={50}
            />
            <Course
              courseName={
                spanish
                  ? "Guía de estudio de educación"
                  : "Education Study Guide"
              }
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={74}
              totalCourses={90}
            />
            <Course
              courseName={spanish ? "Educación en línea" : "Online Education"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={42}
              totalCourses={42}
            />
            <Course
              courseName={spanish ? "Galerías" : "Galleries"}
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={39}
              totalCourses={73}
            />
            <Course
              courseName={
                spanish ? "Enlaces y vídeos útiles" : "Helpful Links & Videos"
              }
              showModal={showModal}
              setShowModal={setShowModal}
              completedCourses={35}
              totalCourses={51}
            />
          </div>
        </div>
      )}
      {pathname === "/dashboard" && (
        <div className="inner-section courses-showcase dashboard grid">
          <Course
            courseName={spanish ? "Recuperación" : "Recovery"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={67}
            totalCourses={67}
          />
          <Course
            courseName={
              spanish
                ? "Integración de la fuerza laboral"
                : "Workforce Integration"
            }
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={60}
            totalCourses={65}
          />
          <Course
            courseName={spanish ? "Salud y bienestar" : "Health & Wellness"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={27}
            totalCourses={79}
          />
          <Course
            courseName={spanish ? "Finanzas personales" : "Personal Finance"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={56}
            totalCourses={56}
          />
          <Course
            courseName={spanish ? "Crianza de los hijos" : "Parenting"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={58}
            totalCourses={78}
          />
          <Course
            courseName={spanish ? "Guía de estudio de GED" : "GED Study Guide"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={20}
            totalCourses={47}
          />
          <Course
            courseName={spanish ? "Información legal" : "Legal Information"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={32}
            totalCourses={32}
          />
          <Course
            courseName={
              spanish
                ? "Carta de presentación y currículum"
                : "Cover Letter & Resume"
            }
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={42}
            totalCourses={50}
          />
          <Course
            courseName={
              spanish ? "Guía de estudio de educación" : "Education Study Guide"
            }
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={74}
            totalCourses={90}
          />
          <Course
            courseName={spanish ? "Educación en línea" : "Online Education"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={42}
            totalCourses={42}
          />
          <Course
            courseName={spanish ? "Galerías" : "Galleries"}
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={39}
            totalCourses={73}
          />
          <Course
            courseName={
              spanish ? "Enlaces y vídeos útiles" : "Helpful Links & Videos"
            }
            showModal={showModal}
            setShowModal={setShowModal}
            completedCourses={35}
            totalCourses={51}
          />
        </div>
      )}
    </>
  );
}
