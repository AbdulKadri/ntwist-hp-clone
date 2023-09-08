import "./NewsSection.css";
import Button from "../Button";

interface NewsSectionProps {
  title: string;
  text: string;
  imgSrc: string;
  reverse?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  title,
  text,
  imgSrc,
  reverse,
}) => {
  return (
    <div className={`news-section ${reverse ? "reverse" : ""}`}>
      <div className="news-section-content">
        <h2 className="news-section-title">{title}</h2>
        <p className="news-section-text">{text}</p>
        <Button bgcolor="#ff3a2d" text="Read More" />
      </div>
      <div className="news-section-image">
        <img src={imgSrc} alt={title} />
      </div>
    </div>
  );
};

export default NewsSection;
