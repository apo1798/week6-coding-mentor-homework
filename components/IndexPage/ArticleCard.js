import Link from "next/link";
import Image from "next/image";

const ArticleCard = ({ title, image, text }) => {
  return (
    <div className="col-lg-4">
      <div className="card bg-transparent p-8 article-card">
        <div className="rounded-border rounded-border-top-left"></div>
        <div className="rounded-border rounded-border-top-right"></div>
        <div className="rounded-border rounded-border-bottom-left"></div>
        <div className="rounded-border rounded-border-bottom-right"></div>
        <Image src={image} />
        <div className="card-body p-0">
          <h6 className="my-4">{title}</h6>
          <p>{text}</p>
          <Link href="/">
            <a className="text-primary link-secondary text-end d-block text-decoration-none">
              MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
