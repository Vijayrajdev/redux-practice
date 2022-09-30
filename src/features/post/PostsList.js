import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const post = useSelector(selectAllPosts);
  const orderedPosts = post
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostsList;
