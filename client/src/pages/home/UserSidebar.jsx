import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherUsersThunk,
  logoutUserThunk,
} from "../../store/slice/user/user.thunk";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const UserSidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const { otherUsers, userProfile } = useSelector((state) => state.userReducer);
  const[expand, setExpand] = useState(false);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!searchValue) {
      setUsers(otherUsers);
    } else {
      setUsers(
        otherUsers.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.fullName
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          );
        })
      );
    }
  }, [searchValue, otherUsers]);

  useEffect(() => {
    (async () => {
      await dispatch(getOtherUsersThunk());
    })();
  }, []);

  return (
     <div className={`max-w-${!expand ? '[4em]' : '[20em]'} w-full h-screen flex flex-col border-r border-r-white/10 flex justify-between`} >
       <div className="toogle bg-black mx-3 rounded-lg mt-3 px-2 py-1 flex items-center justify-between">
       { expand && <h1 className="  text-[#7480FF] text-xl font-semibold">
        GUP SHUP
      </h1>} <button className=" border-1" onClick={()=>setExpand(!expand)}> {!expand ? <IoIosArrowForward/>  : <IoIosArrowBack/> } </button>
     
      </div>

      {expand &&<div className="p-3">
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
          <IoSearch />
        </label>
      </div>}

        { expand && <div className="h-full overflow-y-auto px-3 flex flex-col gap-2">
        {users?.map((userDetails) => {
          return <User key={userDetails?._id} userDetails={userDetails} />;
        })}
      </div>}

      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src={userProfile?.avatar} />
            </div>
          </div>
          {expand && <h2>{userProfile?.username}</h2>}
        </div>

        {expand && <button onClick={handleLogout} className="btn btn-primary btn-sm px-4">
          Logout
        </button>}
      </div>
    </div>
  );
};

export default UserSidebar;
