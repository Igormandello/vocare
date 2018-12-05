import {
  POSTS_SUCCEEDED,
  POSTS_FAILED,
  LOAD_MORE_SUCCEEDED,
  VIEW_POST_SUCCEEDED,
  VIEW_POST_FAILED
} from '../actions/postsActions';

function posts(state = { posts: [], loadedPost: { comments: [] }, loaded: false, error: false, nextPage: 1 }, action) {
  switch (action.type) {
    case POSTS_SUCCEEDED:
      return {
        ...state,
        loaded: true,
        posts: action.posts
      };
    case LOAD_MORE_SUCCEEDED:
      return {
        ...state,
        loaded: true,
        posts: state.posts.concat(action.posts),
        nextPage: state.nextPage + 1
      };
    case VIEW_POST_SUCCEEDED:
      return {
        ...state,
        loaded: true,
        loadedPost: {
          ...action.post,
          comments: action.comments
        }
      };
    case POSTS_FAILED:
    case VIEW_POST_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default posts;