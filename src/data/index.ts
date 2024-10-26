import { ProfileStats } from "../classes";
import { Post } from "../classes/Post";
import { Profile } from "../classes/Profile";

export const profile = new Profile({
  firstName: "Dmitriy",
  lastName: "Mentor",
  nickName: "@mentor",
  photo: "/profile-photo.jpg",
  stats: new ProfileStats({
    likes: 14_400_000,
    subscribers: 721_800,
    subscriptions: 9_794,
  }),
});

export const posts: Post[] = [
  new Post({
    id: 1,
    photo: "/post-1.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
  new Post({
    id: 2,
    photo: "/post-2.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
  new Post({
    id: 3,
    photo: "/post-3.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
  new Post({
    id: 4,
    photo: "/post-4.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
  new Post({
    id: 5,
    photo: "/post-5.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
  new Post({
    id: 6,
    photo: "/post-6.jpg",
    views: Math.random() * 100_000 + 13_000_000,
  }),
];

// Math.random() * 100_000 + 13_000_000
