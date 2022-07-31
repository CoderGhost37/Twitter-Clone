import React from 'react';

const SidebarRow = ({ Icon, title, onClick }) => (
  <div onClick={() => onClick?.()} className="flex items-center max-w-fit space-x-2 px-4 py-3 cursor-pointer rounded-full hover:bg-gray-100 transition-all duration-200 group">
    <Icon className="h-7 w-7" />
    <p className="hidden md:inline-flex text-base lg:text-xl group-hover:text-twitter_blue">{title}</p>
  </div>
);

export default SidebarRow;
