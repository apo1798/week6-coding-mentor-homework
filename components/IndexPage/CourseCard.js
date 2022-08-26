// {image: Teacher01, teacherName: 'Belinda', title: '',category:'',description:'',time:'',price:''}
import { useRef } from "react";
import Image from "next/image";

const CourseCard = ({
  image,
  teacherName,
  title,
  category,
  description,
  time,
  price,
}) => {
  const cardRef = useRef();

  return (
    <div className="col-md-3">
      <div
        className="bg-gray-300 rounded-24 h-100 d-flex flex-column border border-gray-900 course-card"
        ref={cardRef}
      >
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
              <p className="mb-0">{description}</p>
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
