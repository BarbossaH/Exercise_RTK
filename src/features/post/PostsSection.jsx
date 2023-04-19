import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionsButton';
import { Link } from 'react-router-dom';

const PostsSection = ({ post }) => {
  // console.log(post);
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <Link to={`post/${post.id}`}>View Post</Link>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsSection;
