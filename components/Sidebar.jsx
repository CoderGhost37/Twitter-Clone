import React from 'react';
import { BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';

import SidebarRow from './SidebarRow';

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center px-4 md:items-start col-span-2">
      <img
        src="https://links.papareact.com/drq"
        alt="logo"
        className="h-10 w-10 m-3 cursor-pointer"
      />

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title={session ? 'Sign Out' : 'SignIn'} onClick={session ? signOut : signIn} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
};

export default Sidebar;
