import Image from "next/image";

import Teacher01 from "../../public/images/teacher01.jpg";

const CourseDescription = () => {
  return (
    <section className="container py-10 py-lg-20">
      <div className="row">
        <div className="offset-lg-1 col-lg-7">
          <div className="px-6px">
            {courseContent.map((course) => (
              <div
                key={course.title}
                className="d-flex px-6 py-8 p-lg-12 bg-gray-300 rounded-24 flex-column flex-lg-row gap-6 gap-lg-12 mb-10 mb-lg-12"
              >
                <div className="flex-shrink-0 text-center">
                  <Image
                    src={course.image}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <h6 className="mt-2 mb-0 text-center">
                    {course.teacherName}
                  </h6>
                </div>
                <div className="">
                  <h4 className="mb-1 ">{course.title}</h4>
                  <p className="text-primary mb-2">{course.category}</p>
                  <p className="mb-0">{course.description}</p>
                </div>
              </div>
            ))}
            <h5 className="mb-4 fw-normal">老師介紹</h5>
            <div className="bg-gray-300 rounded-24 p-6 p-lg-8 mb-10 mb-lg-12">
              <div className="d-flex flex-wrap border-bottom border-white pb-2 pb-lg-4">
                <div className="d-flex gap-2 w-desktop-50 mb-4">
                  <span className="material-icons text-primary flex-shrink-0">
                    school
                  </span>
                  <div className="text-gray flex-shrink-0">學歷</div>
                  <div>國立中央大學 資訊工程 碩士 畢業</div>
                </div>
                <div className="d-flex gap-2 w-desktop-50 mb-4 flex-mobile-order-1">
                  <span className="material-icons text-primary flex-shrink-0">
                    translate
                  </span>
                  <div className="text-gray flex-shrink-0">語言</div>
                  <div>中文/英文</div>
                </div>
                <div className="d-flex gap-2 w-desktop-50 mb-4 ">
                  <span className="material-icons text-primary flex-shrink-0">
                    business_center
                  </span>
                  <div className="text-gray flex-shrink-0">經歷</div>
                  <div>2020.08 - 迄今 上市企業 韌體工程師</div>
                </div>
                <div className="d-flex gap-2 w-desktop-50 mb-4 flex-mobile-order-2">
                  <span className="material-icons text-primary flex-shrink-0">
                    military_tech
                  </span>
                  <div className="text-gray flex-shrink-0">等級</div>
                  <div>入門</div>
                </div>
              </div>
              <div className="pt-4 pt-lg-8">
                <p className="mb-0">
                  目前任職於上市企業
                  韌體工程師，撰寫各種微控制器韌體程式，如作業系統、系統軟體、裝置控制程式、驅動程式、網路應用程式、系統整合程式、數位訊號處理程式等。
                </p>
                <br />
                <p className="mb-0">
                  興趣是幫助他人學習程式語言，我相信，透過清楚的講解與示範，任何人都可以學好編寫程式與電腦科學中的複雜概念
                </p>
              </div>
            </div>

            <h5 className="mb-4 fw-normal">課程簡介</h5>
            <div className="bg-gray-300 rounded-24 p-6 p-lg-8 mb-10 mb-lg-0">
              <h6 className="border-start border-2 border-primary ps-2 mb-4 fw-normal">
                這堂課你將會學到：
              </h6>
              <ul className="list-style-square-primary list-unstyled mb-8">
                <li>網頁設計，基礎知識</li>
                <li>HTML 語法，概念實作能力</li>
                <li>CSS , Javascript 概念與知識</li>
                <li>能做出一個基礎的HTML 網頁</li>
              </ul>
              <h6 className="border-start border-2 border-primary ps-2 mb-4 fw-normal">
                什麼是 HTML，為什麼要打造網頁，就一定要先學它？
              </h6>
              <div className="">
                <p className="mb-0">
                  HTML元素是構建網站的基石。HTML允許嵌入圖像與物件，並且可以用於建立互動式表單，它被用來結構化資訊——例如標題、段落和列表等等，也可用來在一定程度上描述文件的外觀和語意。
                </p>
                <br />
                <p className="mb-0">
                  當你掌握了HTML，就可以開始規劃並建置你想要的網頁內容 !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {" "}
          <div className="px-6px">
            <div className=" bg-gray-300 px-8 py-10 price-section align-self-start border-light border position-relative">
              <div className="position-absolute square bg-white top-0 start-0 translate-middle"></div>
              <div className="position-absolute square bg-white top-0 start-100 translate-middle"></div>
              <div className="position-absolute square bg-white top-100 start-0 translate-middle"></div>
              <div className="position-absolute square bg-white top-100 start-100 translate-middle"></div>
              {priceContent.map((item, i) => (
                <button
                  className={`d-flex justify-content-between align-items-center price-list btn text-light border-0 rounded-0 p-0 w-100 ${
                    priceContent.length === i + 1
                      ? ""
                      : "mb-4 border-bottom border-white pb-4"
                  }`}
                  key={item.price}
                >
                  <div className="text-start">
                    <h4 className="mb-0 font-Azeret fw-normal">{item.price}</h4>
                    <p className="mb-0">{item.time}</p>
                  </div>
                  <div className="rounded-circle background-gradient  register-button d-flex justify-content-center align-items-center border-0">
                    <span className="material-icons">navigate_next</span>
                  </div>
                </button>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CourseDescription;

const courseContent = [
  {
    image: Teacher01,
    teacherName: "Belinda",
    title: "基礎前端 - HTML",
    category: "前端語言",
    description:
      "帶領無基礎的平民老百姓，從最基礎的 HTML 語法出發，使用最淺顯易懂的語言與生活隨處可見的例子，輕鬆進入網頁架設的世界，完成一個基礎的網頁架設。",
  },
];

const priceContent = [
  {
    price: "NT$1600",
    time: "1堂50分鐘",
  },
  {
    price: "NT$1400",
    time: "3堂50分鐘",
  },
  {
    price: "NT$1000",
    time: "10堂50分鐘",
  },
  {
    price: "NT$900",
    time: "20堂50分鐘",
  },
  {
    price: "洽談報價",
    time: "客製化課程/專案製作",
  },
];
