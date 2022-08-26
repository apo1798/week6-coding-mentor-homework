import Title from "../UI/Title";

const programmingLanguage = [
  "JavaScript",
  "HTML/CSS",
  "SQL",
  "Java",
  "SQL",
  "Bash/Shell",
  "Python",
  "Python",
  "PHP",
  "C++",
  "JavaScript",
  "HTML/CSS",
  "SQL",
  "Java",
  "SQL",
  "Bash/Shell",
  "Python",
  "Python",
  "PHP",
  "C++",
];

const Programming = () => {
  return (
    <section className="programming-section bg-gray-300 py-20">
      <Title title="你想要學習的程式，都在這裡" className="mb-16" />
      <div className="d-flex overflow-hidden ps-6 gap-4">
        {programmingLanguage.map((language, i) => (
          <div
            className="py-6 px-8 rounded-8 border border-white flex-shrink-0"
            key={language + i}
          >
            {language}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Programming;
