import Title from "../UI/Title";

// const content = [
//   {
//     index: "01",
//     title: "預約",
//     text: "線上預約指定課程與老師 由老師安排專屬課程",
//   },
// ];

const Process = () => {
  return (
    <section className="">
      <div className="container py-10 py-lg-20">
        <Title title="預期上課流程" className="mb-16 mb-lg-22" />
        <ul className="row list-unstyled mb-0 gap-12 gap-md-0 gy-0 gy-lg-10">
          <li className="col-md-6 col-lg-3">
            <div className="border border-white process-card rounded-12 p-12">
              <h6 className="h1 text-primary">01</h6>
              <h4 className="mb-4">預約</h4>
              <p className="mb-0">
                線上預約指定課程與老師
                <br />
                由老師安排專屬課程
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 ">
            <div className="border border-white process-card rounded-12 p-12">
              <h6 className="h1 text-primary">02</h6>
              <h4 className="mb-4">付款</h4>
              <p className="mb-0">
                支援各種支付方式
                <br />
                提供12期分期付款
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 ">
            <div className="border border-white process-card rounded-12 p-12">
              <h6 className="h1 text-primary">03</h6>
              <h4 className="mb-4">上課</h4>
              <p className="mb-0">
                地點由您指定
                <br />
                密集性一對一教學
              </p>
            </div>
          </li>
          <li className="col-md-6 col-lg-3 ">
            <div className="border border-white process-card rounded-12 p-12">
              <h6 className="h1 text-primary">04</h6>
              <h4 className="mb-4">提供滿意度</h4>
              <p className="mb-0">
                提供課程滿意度及回饋
                <br />
                讓我們持續成長與進步
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Process;
