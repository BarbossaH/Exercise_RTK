import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  // console.log(post);
  const dispatch = useDispatch();
  //这个地方我是不会的，重点学习
  const renderButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        style={{ border: 0, backgroundColor: 'white', margin: 2 }}
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postID: post.id, reactionName: name }))
        }
      >
        {emoji} &nbsp;
        {post.reactions[name]}
      </button>
    );
  });
  return renderButtons;
};
export default ReactionButtons;
