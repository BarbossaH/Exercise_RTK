import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsError, getPostsStatus } from './postSlice';

import PostsSection from './PostsSection';

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const err = useSelector(getPostsError);

  // console.log(orderedPosts);

  //according the response status to fulfill the content
  let content;
  if (postsStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === 'succeeded') {
    //based on the time to sort the post, slice is a shallow copy not to affect the original array
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsSection post={post} key={post.id} />
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{err}</p>;
  }

  return (
    <section>
      <h1>POSTS</h1>
      {content}
    </section>
  );
};
export default PostList;
