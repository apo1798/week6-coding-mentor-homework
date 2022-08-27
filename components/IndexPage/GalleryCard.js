import Image from "next/image";
import Title from "../UI/Title";

const GalleryCard = ({ image, title, icon, text }) => {
  return (
    <div className="col-md-6 col-lg-3 position-relative justify-content-center justify-content-md-start d-flex align-items-center gallery-card">
      <Image
        src={image}
        alt={title}
        layout="fill"
        className="position-absolute top-0 end-0 start-0 end-0"
      />
      <div className="p-4 p-lg-12 d-flex flex-column align-items-center d-md-block">
        <span className="material-icons h2 mb-4">{icon}</span>
        <h4 className="title-line-start mb-12 d-none d-md-block">{title}</h4>
        <Title title={title} className="d-md-none mb-12" />
        <p>{text}</p>
      </div>
    </div>
  );
};
export default GalleryCard;
