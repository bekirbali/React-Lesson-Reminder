import "./LessonCard.css";

const LessonCard = ({ img, name, hour }) => {
  return (
    <>
      <div className="card">
        {/* <img src={img} alt="icon" /> */}
        {img}
        <div className="lesson-info">
          <p className="info">
            Lesson Name: <span>{name}</span>
          </p>
          <p className="info">
            Lesson Hour: <span>{hour}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
