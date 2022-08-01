import React, { useState, useEffect } from 'react';
import TimeAgo from 'react-timeago';

import { ChatAlt2Icon,
  HeartIcon,
  UploadIcon,
  SwitchHorizontalIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

import { fetchComments } from '../utils/fetchComments';

const Tweet = ({ tweet }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const [commentBoxVisible, setCommentBoxVisible] = useState(false);
  const { data: session } = useSession();

  const refreshComments = async () => {
    const tweetComments = await fetchComments(tweet._id);
    setComments(tweetComments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToast = toast.loading('Posting Comment...');

    const comment = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
    };

    const result = await fetch('/api/addComment', {
      body: JSON.stringify(comment),
      method: 'POST',
    });

    refreshComments();
    toast.success('Comment Posted!', {
      id: commentToast,
    });

    setInput('');
    setCommentBoxVisible(false);
    refreshComments();
  };

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-200 p-5">
      <div className="flex space-x-3">
        <img src={tweet.profileImg} alt="profileImg" className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">@{tweet.username.replace(/\s+/g, '').toLowerCase()} ·</p>

            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-500"
            />
          </div>
          <p className="pt-1">{tweet.text}</p>

          {tweet.img && (
            <img
              src={tweet.img}
              alt="img"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div onClick={() => session && setCommentBoxVisible(!commentBoxVisible)} className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter_blue">
          <ChatAlt2Icon className="h-7 w-7 hover:bg-gray-200 rounded-full p-1" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-green-500">
          <SwitchHorizontalIcon className="h-7 w-7 hover:bg-gray-200 rounded-full p-1" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-pink-500">
          <HeartIcon className="h-7 w-7 hover:bg-gray-200 rounded-full p-1" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400 hover:text-twitter_blue">
          <UploadIcon className="h-7 w-7 hover:bg-gray-200 rounded-full p-1" />
        </div>
      </div>

      {commentBoxVisible && (
        <form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-100 p-2 outline-none flex-1 rounded-lg"
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            disabled={!input || !session}
            className="text-twitter_blue disabled:text-gray-200"
          >Post
          </button>
        </form>
      )}

      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
            {comments.map((comment) => (
              <div key={comment._id} className="relative flex space-x-2">
                <hr className="absolute left-5 top-10 h-8 border-x border-gray-400/30" />
                <img
                  src={comment.profileImg}
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
