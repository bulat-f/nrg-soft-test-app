export const fetchPosts = async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const data = await response.json();

  return data;
};
