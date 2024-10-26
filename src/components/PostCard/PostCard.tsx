import { Post } from "../../classes";
import { formatStats } from "../../utils/formatStats";
import { EyeIcon, PinIcon } from "../svg";
import { Text } from "../Text";
import st from "./PostCard.module.css";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className={st.post}>
      <div className={st.postPhoto}>
        <img src={post.photo} alt={post.name} />
      </div>
      <div className={st.postFront}>
        <button className={st.pin}>
          <PinIcon className="icon icon-small" />
        </button>

        <Text className={st.views} variant="main">
          <EyeIcon className="icon icon-small" />
          &nbsp;
          {formatStats(post.views)}
        </Text>
      </div>
    </div>
  );
}
