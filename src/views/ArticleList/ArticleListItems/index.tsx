import useSWR from "swr";
import { ArticlesResListItem } from "types/atricles";
import ArticleListItem from "./ArticleListItem";

const ArticleListItems = () => {
  const { data: articles, error } = useSWR("/articles");
  const loading = !error && !articles;
  const content = articles?.articles.map((article: ArticlesResListItem) => (
    <ArticleListItem item={article} key={article.title} />
  ));
  const currentContent = loading ? <p>Loading</p> : content;
  return (
    <div>
      {currentContent}
      <a>xd</a>
    </div>
  );
};

export default ArticleListItems;
