interface Props {
  imageUrl: string; // The URL of the image
  altText: string; // Alternative text for the image
}

const DynamicImage: React.FC<Props> = ({ imageUrl, altText }) => {
  return (
    <div>
      <h1> more dyanmic this one </h1>
      <img src={imageUrl} alt={altText} className="dynamic-image" />
    </div>
  );
};

export default DynamicImage;
