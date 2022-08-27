const Hero = () => {
  return (
    <section className="text-center py-lg-20">
      <div className="hero d-flex align-items-center justify-content-center container">
        <div className="px-7 py-8 py-lg-13 px-lg-19 bg-gray-900 text-center border-white border position-relative my-15 my-lg-60">
          <h1 className="fw-bold mb-6">
            <span className="text-gradient">全台最豐富的程式家教</span>
            <br />
            在實踐中化理想為現實
          </h1>
          <h6 className="fw-base">全台最專業師資｜到府程式家教｜客製化課程</h6>
          <div className="position-absolute square bg-white top-0 start-0 translate-middle"></div>
          <div className="position-absolute square bg-white top-0 start-100 translate-middle"></div>
          <div className="position-absolute square bg-white top-100 start-0 translate-middle"></div>
          <div className="position-absolute square bg-white top-100 start-100 translate-middle"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
