import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "../Utils/UserSlice";
import { LOGO } from "../Utils/Constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/ErrorPage");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        // ...
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    // This is important to avoid memory leaks
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between items-center p-4">
      {/* Left: Logo */}
      <img className="w-34 h-16 mx-4 my-2" src={LOGO} alt="Netflix Logo" />

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
