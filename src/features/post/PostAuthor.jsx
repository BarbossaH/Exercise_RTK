import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => Number(userId) === user.id);
  // console.log(author);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};
export default PostAuthor;
