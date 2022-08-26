import Image from "next/image";

const GalleryCard = ({ image, title, icon, text }) => {
  return (
    <div className="col-md-3 position-relative align-items-center d-flex align-items-center gallery-card">
      <Image
        src={image}
        alt={title}
        layout="fill"
        className="position-absolute top-0 end-0 start-0 end-0"
      />
      <div className="px-12">
        <span className="material-icons h2 mb-4">{icon}</span>
        <h4 className="title-line-start mb-12">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default GalleryCard;
