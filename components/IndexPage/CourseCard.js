import Image from "next/image";
import Link from "next/link";

const CourseCard = ({
  image,
  teacherName,
  title,
  category,
  description,
  time,
  price,
  linkCard = false,
}) => {
  if (linkCard)
    return (
      <div className="col-md-6 col-lg-3 mb-0 mb-md-4 mb-lg-0">
        <Link href="/class/basic-html">
          <a className="text-decoration-none mt-0 py-0 text-white text-start h-100 border-0">
            <div className="bg-gray-300 rounded-24 h-100 d-flex flex-column border border-gray-900 course-card">
              <div className="px-6 pt-6 pb-8 flex-grow-1 d-flex flex-column">
                <div className="text-center">
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    className="rounded-circle"
                  />
                  <p className="mt-2 mb-6">{teacherName}</p>
                </div>
                <h5 className="mb-2 flex-grow-1">{title}</h5>
                <div>
                  <div>
                    <p className="mb-2 text-primary">{category}</p>
                    <p className="mb-0 text-truncate text-truncate-3">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-top border-white text-center py-4 d-flex align-items-center justify-content-center gap-2">
                {time} <span className="h2 mb-0">{price}</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );

  return (
    <div className="col-md-6 col-lg-3">
      <div className="bg-gray-300 rounded-24 h-100 d-flex flex-column border border-gray-900 course-card">
        <div className="px-6 pt-6 pb-8 flex-grow-1 d-flex flex-column">
          <div className="text-center">
            <Image
              src={image}
              width={100}
              height={100}
              className="rounded-circle"
            />
            <p className="mt-2 mb-6">{teacherName}</p>
          </div>
          <h5 className="mb-2 flex-grow-1">{title}</h5>
          <div className="">
            <div>
              <p className="mb-2 text-primary">{category}</p>
              <p className="mb-0 text-truncate text-truncate-3">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="border-top border-white text-center py-4 d-flex align-items-center justify-content-center gap-2">
          {time} <span className="h2 mb-0">{price}</span>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
