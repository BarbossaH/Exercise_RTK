import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPostById } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionsButton';
const SinglePost = () => {
  const { postId } = useParams();
  // console.log(postID);
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  if (post) {
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
          <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    );
  } else return <div>Cannot find this page</div>;
};
export default SinglePost;
