import imageSrc from "../assets/images.png"; // Update the path accordingly

const Image: React.FC = () => {
  return (
    <div>
      <img src={imageSrc} alt="Sample Image" className="static-image" />
    </div>
  );
};

export default Image;
