import { FC } from "react";
import useSWR from "swr";
import { Redirect, useParams } from "react-router-dom";
import Avatar from "components/Common/Avatar";
import { AuthorRes } from "types/author";

const AuthorInfo: FC = () => {
  const { username } = useParams<{ username: string }>();
  const { data: author, error } = useSWR<AuthorRes>(`/profiles/${username}`);
  const loading = !error && !author;
  const content = (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <Avatar url={author?.profile?.image} user />
            <h4>{author?.profile.username}</h4>
            <p>{author?.profile.bio}</p>
            <button className="btn btn-sm btn-outline-secondary action-btn">
              <i className="ion-plus-round" />
              &nbsp; {author?.profile.username}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (loading) return <p>Loading</p>;
  if (error) return <Redirect to="/" />;
  return content;
};

export default AuthorInfo;
