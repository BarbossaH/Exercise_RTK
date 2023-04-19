import { useState } from 'react';
import { addNewPost } from './postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //to send the user selected to record
  const [userId, setUserID] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onChangedOption = (e) => setUserID(e.target.value);

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        //unwrap()会返回promise，或者抛出错误
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setContent('');
        setTitle('');
        setUserID('');
        navigate('/');
      } catch (error) {
        console.error('Failed to save the post', error);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  //to build the options
  const users = useSelector(selectAllUsers);
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  //必须要等到数据齐全和网络状态允许的情况，比如数据处于可以发送的状态，不是出于发送中和接受中的状态
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="selector">Author:</label>
        <select id="selector" value={userId} onChange={onChangedOption}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPost;
