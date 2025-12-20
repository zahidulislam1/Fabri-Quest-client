import logo from "/logo.png";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  //   const [role, isRoleLoading] = useRole();

  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f0f0f1]">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src={logo}
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-[#0b2b43] bg-[#7bdcb5] rounded-full">
            {/* {role} */}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex  flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-gray-600 ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-gray-600 ">{user?.email}</span>
              </p>

              <div className="mt-8 space-x-4">
                <button className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43]  px-6 py-3 rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95">
                  Update Profile
                </button>
                <button className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43]  px-6 py-3 rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
