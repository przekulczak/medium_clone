import { FC } from "react";
import { Topbar, Footer } from "components/Layout";
import AuthorInfo from "./AuthorInfo";
import AuthorsArticles from "./AuthorsArticles";

const Profile: FC = () => {
  return (
    <>
      <Topbar />
      <div className="profile-page">
        <AuthorInfo />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                    <AuthorsArticles />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
