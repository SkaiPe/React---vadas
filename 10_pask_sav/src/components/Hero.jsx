import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="backgroundImg">
      <div className="content">
        <p className="bigger">Title</p>
        <p>Some about text</p>
        <p>in two lines</p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
