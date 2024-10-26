import { Avatar, Button, Navigation, PostCard, Text } from "../../components";
import {
  BellIcon,
  CharetIcon,
  HeartIcon,
  ShareIcon,
  UsersIcon,
} from "../../components/svg";
import { useAppContext } from "../../context/AppContext";
import { formatStats } from "../../utils/formatStats";

import "./style.css";

export function ProfilePage() {
  const s = useAppContext();
  const { profile, posts } = s;
  const userName = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="profile">
          <div className="profile-about">
            <div className="profile-share">
              <ShareIcon className="icon icon-medium" />
            </div>
            <div className="proofile-photo">
              <Avatar src={profile.photo} alt={userName} />
            </div>
            <div>
              <div className="proofile-name">{userName}</div>
              <div className="profile-nickname">
                <Text>{profile.nickName}</Text>
              </div>
            </div>
            <div className="profile-stats">
              <div className="profile-stats-item">
                <div className="count">
                  <Text>
                    <BellIcon className="icon icon-medium" />
                  </Text>
                  &nbsp;
                  <Text className="text" variant="main">
                    {formatStats(profile.stats.subscriptions)}
                  </Text>
                </div>
                <div className="desc">
                  <Text>Subscriptions</Text>
                </div>
              </div>

              <div className="profile-stats-item">
                <div className="count">
                  <Text>
                    <UsersIcon className="icon icon-medium" />
                  </Text>
                  &nbsp;
                  <Text className="text" variant="main">
                    {formatStats(profile.stats.subscribers)}
                  </Text>
                </div>
                <div className="desc">
                  <Text>Subscribers</Text>
                </div>
              </div>

              <div className="profile-stats-item">
                <div className="count">
                  <Text>
                    <HeartIcon className="icon icon-medium" />
                  </Text>
                  &nbsp;
                  <Text className="text" variant="main">
                    {formatStats(profile.stats.likes)}
                  </Text>
                </div>
                <div className="desc">
                  <Text>Likes</Text>
                </div>
              </div>
            </div>
            <div className="profile-buttons">
              <Button className="profile-btn-sub" variant="accent">
                Subscribe
              </Button>
              <Button className="profile-btn-more">
                <CharetIcon className="icon icon-small" />
              </Button>
            </div>
            <div className="profile-description">
              <Text>Where to grow your business as a photographer:</Text>
              <Text>site or socialmedia?</Text>
            </div>
          </div>
          <div className="profile-posts">
            {posts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
      <div className="wrapper-footer">
        <Navigation />
      </div>
    </div>
  );
}
