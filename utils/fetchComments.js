export const fetchComments = async (tweetId) => {
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`);

  const comments = await res.json();

  return comments;
};
