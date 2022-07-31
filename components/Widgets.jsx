import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => (
  <div className="px-2 mt-2 col-span-2 hidden lg:inline">
    <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <input type="text" placeholder="Search Twitter" className="bg-transparent flex-1 outline-none" />
    </div>

    <div className="scrollbar-hide mt-5">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="CoderGhost37"
        options={{ height: 500 }}
      />
    </div>
  </div>
);

export default Widgets;
