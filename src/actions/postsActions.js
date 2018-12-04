export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

export const LOAD_MORE_REQUESTED = 'LOAD_MORE_POSTS_REQUESTED';
export const LOAD_MORE_SUCCEEDED = 'LOAD_MORE_POSTS_SUCCEEDED';
export const LOAD_MORE_FAILED = 'LOAD_MORE_POSTS_FAILED';

export const fetchPosts = () => ({
  type: POSTS_REQUESTED
});

export const loadMorePosts = (pageOffset) => ({
  type: LOAD_MORE_REQUESTED,
  pageOffset
});