import React, { useState, useEffect } from 'react';
import TimeAgo from 'react-timeago';

import { ChatAlt2Icon,
  HeartIcon,
  UploadIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline';
import { urlFor } from '../utils/client';
import { fetchComments } from '../utils/fetchComments';

const Tweet = ({ tweet }) => {
  const [comments, setComments] = useState([]);
  const refreshComments = async () => {
    const tweetComments = await fetchComments(tweet._id);
    setComments(tweetComments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-200 p-5">
      <div className="flex space-x-3">
        <img src={urlFor(tweet.profileImg)} alt="profileImg" className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-smtext-gray-500 sm:inline">@{tweet.username.replace(/\s+/g, '').toLowerCase()} ·</p>

            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-500"
            />
          </div>
          <p className="pt-1">{tweet.text}</p>

          {tweet.img && (
            <img
              src={urlFor(tweet.img)}
              alt="img"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>

      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
            {comments.map((comment) => (
              <div key={comment._id} className="relative flex space-x-2">
                <hr className="absolute left-5 top-10 h-8 border-x border-gray-400" />
                <img
                  src={urlFor(comment.profileImg)}
                  alt="profileImg"
                  className="h-7 w-7 mt-2 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <p className="font-bold mr-1">{comment.username}</p>
                    <p className="hidden sm:inline text-gray-500">@{comment.username.replace(/\s+/g, '').toLowerCase()} ·</p>
                    <TimeAgo
                      className="text-sm text-gray-500"
                      date={comment._createdAt}
                    />
                  </div>
                  <p>{comment.comment}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Tweet;
