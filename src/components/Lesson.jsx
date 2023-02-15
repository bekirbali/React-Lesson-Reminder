import { FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiMaterialui } from "react-icons/si";
import LessonCard from "./LessonCard";
import "./Lesson.css";

const Lesson = () => {
  return (
    <>
      <h1>Lesson Reminder</h1>
      <div className="container">
        <div className="lessons">
          <LessonCard
            img={<FaHtml5 size="42px" color="orange" />}
            name="Html"
            hour="08:30 am"
          />
          <LessonCard
            img={<DiCss3 size="42px" color="blue" />}
            name="Css"
            hour="10:30 am"
          />
          <LessonCard
            img={<SiJavascript size="42px" color="rgb(189, 189, 24)" />}
            name="JavaScript"
            hour="01:00 pm"
          />
          <LessonCard
            img={<FaReact size="42px" color="rgb(2, 189, 189)" />}
            name="React"
            hour="02:30 pm"
          />
          <LessonCard
            img={<FaBootstrap size="42px" color="darkBlue" />}
            name="Bootstrap"
            hour="04:00 pm"
          />
          <LessonCard
            img={<SiMaterialui size="42px" color="blue" />}
            name="Material UI"
            hour="04:30 pm"
          />
        </div>
      </div>
    </>
  );
};

export default Lesson;
