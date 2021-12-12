import { FC } from "react";

interface Props {
  url: string;
}

const Avatar: FC<Props> = ({ url }: Props) => {
  const currentUrl = url === "" ? "avatar-placeholder.png" : url;
  return <img src={currentUrl} />;
};

export default Avatar;
