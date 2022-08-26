const Title = ({ className = "", title }) => {
  return (
    <div className={className}>
      <h3 className="title-line text-center">{title}</h3>
    </div>
  );
};
export default Title;
