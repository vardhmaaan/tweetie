import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid"
import { HashtagIcon } from "@heroicons/react/outline"
import { BellIcon } from "@heroicons/react/outline"
import { InboxIcon } from "@heroicons/react/outline"
import { BookmarkIcon } from "@heroicons/react/outline"
import { ClipboardIcon } from "@heroicons/react/outline"
import { UserIcon } from "@heroicons/react/outline"
import { DotsCircleHorizontalIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/outline"
import { LogoutIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react";
export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/*Twitter logo*/}
      <div className="hoverEffect p-2 hover:bg-blue-100 xl:px-1 ml-9">
        <Image width="50" height="50" src="https://freepngimg.com/thumb/artwork/59446-and-twitter-cartoon-black-white-drawing-bird.png" alt="error"></Image>
      </div>
      {/*Menu*/}
      <div className="mt-4 mb-2.5 ">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
            {/* <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} /> */}
            <SidebarMenuItem text="Profile" Icon={UserIcon} />

            <div>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            
           
            
            
            </div>
            <div className="justify-center">
            <img src={session.user.image} alt="error" className="mt-7 mb-2.5 rounded-full ml-6" />
              <h4 className="font-bold flex justify-center">{session.user.name}</h4>
              <p className="text-gray-500 flex justify-center">@{session.user.username}</p>
            </div>



            <div className="ml-6">

            <button onClick={signOut} className="bg-blue-400 text-white font-bold mt-5 mb-2.5 xl:inline rounded-full h-10 pl-5 pr-5 mr-5 ">Sign Out</button>
            </div>
            
          </>
        )}

      </div>

      {session ? (
        <>
          {/*Button*/}

          {/* <LogoutIcon onClick={signOut} className=" h-5 :ml-3 hidden xl:inline"/> */}

          {/*Mini-Profile*/}
          
        </>

      ) : (
        <button onClick={signIn} className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline 
          ">Sign in</button>
      )}


    </div>
  )
}
