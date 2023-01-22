import Posts from "./Components/Posts/Posts";
import "./Feed.css";

type Props = {};

export default function Feed({}: Props) {
  return (
    <>
      <h2>News Feed</h2>
      <Posts />
    </>
  );
}
