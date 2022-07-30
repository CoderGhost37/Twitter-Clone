import React from 'react';
import { RefreshIcon } from '@heroicons/react/outline';

import TweetBox from './TweetBox';

const Feed = () => {
  console.log('Feed');
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="font-bold p-5 pb-0 text-xl">Home</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter_blue transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox />
      </div>
    </div>
  );
};

export default Feed;
