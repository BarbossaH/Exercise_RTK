import AddPost from './features/post/AddPost';
import PostList from './features/post/PostList';
import { Routes, Route, Navigate } from 'react-router-dom';
import SinglePost from './features/post/SinglePost';
import Layout from './component/Layout';
import EditPostForm from './features/post/EditPostForm';
import UserList from './features/users/UserList';
import UserPage from './features/users/UserPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<PostList />}></Route>
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
        <Route path="user">
          <Route index element={<UserList />}></Route>
          <Route path=":userId" element={<UserPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
