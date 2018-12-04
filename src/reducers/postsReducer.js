import {
  POSTS_SUCCEEDED,
  POSTS_FAILED,
  LOAD_MORE_SUCCEEDED
} from '../actions/postsActions';

function posts(state = { posts: [], loaded: false, error: false, nextPage: 1 }, action) {
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
    case POSTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}

export default posts;