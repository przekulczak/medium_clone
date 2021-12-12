import { FC } from "react";

interface Props {
  url?: string;
  user?: boolean;
}

const Avatar: FC<Props> = ({ url, user }: Props) => {
  const currentUrl = url === "" || !url ? "avatar-placeholder.png" : url;
  return <img src={currentUrl} className={user ? "user-img" : ""} />;
};

export default Avatar;
