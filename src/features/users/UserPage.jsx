import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectUserById } from './userSlice';
import { selectAllPosts } from '../post/postSlice';

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, userId));

  const postsUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <div>
      <h2>{user?.name}</h2>
      {postTitles}
    </div>
  );
};
export default UserPage;
