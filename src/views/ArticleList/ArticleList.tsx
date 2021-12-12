import { Topbar, HomePageWrapper, Banner, PageContainer, FeedToggle, Footer } from "../../components/Layout";

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

              <div className="article-preview">
                <div className="article-meta">
                  <a href="/#/profile/albertpai">
                    <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                  </a>
                  <div className="info">
                    <a href="/#/profile/albertpai" className="author">
                      Albert Pai
                    </a>
                    <span className="date">January 20th</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart" /> 32
                  </button>
                </div>
                <a href="/#/the-song-you-wont-ever-stop-singing" className="preview-link">
                  <h1>The song you won&lsquo;t ever stop singing. No matter how hard you try.</h1>
                  <p>This is the description for the post.</p>
                  <span>Read more...</span>
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </HomePageWrapper>

      <Footer />
    </>
  );
}
