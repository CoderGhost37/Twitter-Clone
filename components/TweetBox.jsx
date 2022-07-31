import React, { useState } from 'react';
import { CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';

const TweetBox = () => {
  const [input, setInput] = useState('');
  const { data: session } = useSession();

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
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button disabled={!input || !session} className="bg-twitter_blue text-white px-5 py-2 font-bold rounded-full disabled:opacity-40">Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
