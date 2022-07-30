export const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);

  const tweets = await res.json();

  return tweets;
};

