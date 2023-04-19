import { useSelector } from 'react-redux';
import { selectAllUsers } from './userSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));
  return (
    <div>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </div>
  );
};
export default UserList;
