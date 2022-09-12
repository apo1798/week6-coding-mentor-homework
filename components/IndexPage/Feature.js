import Title from "../UI/Title";

const Feature = () => {
  return (
    <section className="bg-gray-300 feature-section">
      <div className="container py-10 py-lg-20">
        <ul className="row align-items-center list-unstyled mb-0 gap-6 gy-4 gap-md-0">
          <li className="col-lg-3 mb-md-5 mb-lg-0">
            <div className="d-none d-lg-block">
              <h3 className="text-center text-lg-start mb-4">
                手把手帶你
                <br />
                親自到家教到會
              </h3>
              <div className="feature-title-line"></div>
            </div>
            <Title
              className="d-lg-none mb-4"
              title={"手把手帶你\n親自到家教到會"}
            />
          </li>
          <li className="col-md-6 col-lg-3 text-center mt-0 mb-md-4  mb-lg-0">
            <div className="px-6 py-12 rounded-12 feature-card">
              <span className="material-icons-outlined mb-6">code</span>
              <h6 className="mb-4">超過 100 種專業課程</h6>
              <p className="mb-0">
                學習標準化的電腦形式語言
                <br />
                培養運算思維和邏輯素養
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 text-center mt-0 mb-md-4  mb-lg-0">
            <div className="px-6 py-12 rounded-12 feature-card">
              <span className="material-icons-outlined mb-6">
                <span className="material-icons-outlined">rocket_launch</span>
              </span>
              <h6 className="mb-4">高效學習</h6>
              <p className="mb-0">
                客製化專屬課表
                <br />
                讓學習變簡單
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 text-center mt-0">
            <div className="px-6 py-12 rounded-12 feature-card">
              <span className="material-icons-outlined mb-6">place</span>
              <h6 className="mb-4">指定地點</h6>
              <p className="mb-0">
                專業老師到你指定的地點
                <br />
                一對一高效學習
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 text-center mt-0 d-none d-md-block d-lg-none ">
            <div className="px-6 py-12 rounded-12 feature-card">
              <span className="material-icons-outlined mb-6">luggage</span>
              <h6 className="mb-4">好想出去玩喔</h6>
              <p className="mb-0">
                這只是為了排版好看出現的
                <br />
                Resize就會消失了XD
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Feature;
