import {  IoMdSearch } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


import useAuth from "../hooks/useAuth";
import { Dropdown, DropdownItem } from "flowbite-react";
import { Link } from "react-router-dom";


const SearchBar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="flex items-center justify-between">
      <div className="w-1/3">
        <div className="border flex hover:border-slate-400 cursor-pointer transition-all duration-200 h-10 items-center justify-between p-3 rounded-md">
          <div className="flex items-center gap-2">
            <IoMdSearch />
            <p className="text-slate-400">Search on page</p>
          </div>
          <kbd className="kbd kbd-xs">ctrl+K</kbd>
        </div>
      </div>

      <div className="flex gap-3 items-center">

        {/* notification */}
        <Dropdown
          inline={true}
          label={
            <div className='bg-slate-200 p-2 rounded-md'>
              <IoNotificationsSharp className="text-xl" />
            </div>
          }
          dismissOnClick={false}
          arrowIcon={false}

          className=""

        >
            <div className="px-4">
                <div className="p-3 flex items-center justify-between w-[350px]">
                        <h2 className="text-md font-semibold">Notifications</h2>
                        <h2 className='text-xs text-slate-400 flex items-center gap-1 cursor-pointer'><MdCheckBoxOutlineBlank /> Mark all as read</h2>
                </div>
                <hr className="my-2" />

                <div className="flex flex-col gap-2 mb-3">
                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>

                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>

                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>


                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>


                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>

                    <DropdownItem>
                        <div className="flex gap-3">
                            <div>
                                <img src="https://isomorphic-furyroad.vercel.app/avatar.webp" alt="" className="w-10 rounded-full" />
                            </div>
                            <div className="text-start">
                                <h2 className="text-md text-slate-600 font-semibold">Invitation for crafting engaging designs</h2>
                                <p className="text-slate-500">2 years</p>
                            </div>
                        </div>
                    </DropdownItem>
                </div>
 
            </div>
        </Dropdown>

          {/* profile */}
        <Dropdown
          inline={true}
          label={
            <div>
              <img
                referrerPolicy="no-referrer"
                src={`${user?.photoURL}`}
                alt="User"
                className="w-10 rounded-full cursor-pointer"
              />
            </div>
          }
          dismissOnClick={false}
          arrowIcon={false}

          className=""

        >
            <div className="px-4 mb-2">
                <div className="p-3">
                        <h2 className="text-lg font-semibold">{`${user?.displayName}`}</h2>
                        <h2 className='text-xs text-slate-400'>{`${user?.email}`}</h2>
                </div>
                <hr className="my-2" />
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem><Link to='/' onClick={logOut}>Sign out</Link></DropdownItem>
            </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SearchBar;
