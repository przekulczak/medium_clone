import { Topbar, HomePageWrapper, Banner, PageContainer, FeedToggle, Footer } from "../../components/Layout";
import ArticleListItems from "./ArticleListItems";

export default function ArticleList() {
  return (
    <>
      <Topbar />
      <HomePageWrapper>
        <Banner />
        <PageContainer>
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <ArticleListItems />
            </div>
          </div>
        </PageContainer>
      </HomePageWrapper>
      <Footer />
    </>
  );
}
