import React, { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import toast from 'react-hot-toast';

import TweetBox from './TweetBox';
import Tweet from './Tweet';
import { fetchTweets } from '../utils/fetchTweets';

const Feed = ({ posts }) => {
  const [tweets, setTweets] = useState(posts);

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');

    const refreshedTweets = await fetchTweets();
    setTweets(refreshedTweets);

    toast.success('Feed Updated!', {
      id: refreshToast,
    });
  };

  return (
    <div className="col-span-7 lg:col-span-5 max-h-screen overflow-scroll scrollbar-hide border-x">
      <div className="flex items-center justify-between">
        <h1 className="font-bold p-5 pb-0 text-xl">Home</h1>
        <RefreshIcon onClick={handleRefresh} className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter_blue transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      <div>
        {tweets
          ? (tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />))
          : <p className="text-center font-bold text-2xl">Your feed is empty</p>}
      </div>
    </div>
  );
};

export default Feed;
