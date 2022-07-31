import React, { useState, useRef } from 'react';
import { CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';

import { fetchTweets } from '../utils/fetchTweets';

const TweetBox = ({ setTweets }) => {
  const [input, setInput] = useState('');
  const [imageUrlBox, setImageUrlBox] = useState(false);
  const [image, setImage] = useState('');
  const imageInputRef = useRef();
  const { data: session } = useSession();

  const addImageToTweet = (e) => {
    e.preventDefault();

    if (!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = '';
    setImageUrlBox(false);
  };

  const postTweet = async () => {
    const tweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
      img: image,
    };

    const result = await fetch('api/addTweet', {
      body: JSON.stringify(tweetBody),
      method: 'POST',
    });

    const json = result.json();

    const newTweets = await fetchTweets();
    setTweets(newTweets);
    toast.success('Tweet posted!');

    return json;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postTweet();

    setInput('');
    setImage('');
    setImageUrlBox(false);
  };

  return (
    <div className="flex space-x-2 p-4">
      <img src={session?.user?.image || 'https://links.papareact.com/gll'} alt="user" className="h-14 w-14 object-cover rounded-full mt-4" />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 text-xl placeholder:text-xl outline-none rounded-lg p-2 w-full"
            placeholder="What's happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-5 text-twitter_blue">
              <PhotographIcon onClick={() => setImageUrlBox(true)} className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="bg-twitter_blue text-white px-5 py-2 font-bold rounded-full disabled:opacity-40"
            >Tweet
            </button>
          </div>

          {imageUrlBox && (
            <div className="mt-5 flex rounded-lg bg-twitter_blue py-2 px-4">
              <input
                ref={imageInputRef}
                type="text"
                placeholder="Enter Image URL..."
                className="flex-1 bg-transparent p-2 text-white placeholder:text-white outline-none"
              />
              <button
                onClick={addImageToTweet}
                type="submit"
                className="font-bold text-white"
              >Add Image
              </button>
            </div>
          )}

          {image && (
            <img
              src={image}
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              alt="tweetImg"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
