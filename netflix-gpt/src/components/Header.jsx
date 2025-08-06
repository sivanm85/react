import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Sign out successful");
      })
      .catch((error) => {
        // An error happened.
        navigate("/ErrorPage");
      });
  };
  return (
    <div className="absolute w-full flex justify-between items-center p-4">
      {/* Left: Logo */}
      <img
        className="w-32 h-12 mx-4 my-2 bg-black bg-opacity-50 rounded-lg shadow-lg"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* Right: User Section */}
      {user && (
        <div className="flex items-center space-x-4 p-4">
          <img
            className="w-10 h-10"
            src={
              user.photoURL ||
              "https://avatars.githubusercontent.com/u/193720505?v=4&size=64"
            }
            alt="User Avatar"
          />
          <button
            onClick={handleSignOut}
            className="text-black font-semibold px-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-500 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
