import Title from "../UI/Title";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "./ArticleCard";

import Image01 from "../../public/images/article01.jpg";
import Image02 from "../../public/images/article02.jpg";
import Image03 from "../../public/images/article03.jpg";

const Article = () => {
  return (
    <section className="article-section py-10 py-lg-20">
      <Title title="文章分享" className="mb-16" />
      <div className="container">
        <div className="row gap-6 gap-md-0">
          {articleContent.map((article) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              image={article.image}
              text={article.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Article;

const articleContent = [
  {
    title: "2022 前端開發者學習地圖",
    image: Image01,
    text: "轉職為前端的這條職業路上該如何發展？本篇為前端開發者提供學習地圖參考",
  },
  {
    title: "軟體工程師有哪些類別",
    image: Image02,
    text: "軟體工程師領域廣闊，許多人仍然對此相關職務感到陌生，本篇就介紹主流的軟體工程師職務",
  },
  {
    title: "免費 25 小時前端教學資源",
    image: Image03,
    text: "這篇文章規劃了適合「前端工程師」的學習地圖，讓新進的學生了解如何選擇課程",
  },
];
