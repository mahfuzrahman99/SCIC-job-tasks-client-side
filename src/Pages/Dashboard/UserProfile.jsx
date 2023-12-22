import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UserProfile = () => {

    const { user} = useContext(AuthContext)

    return (
        <div className="max-w-3xl mx-auto md:mt-12 shadow-2xl shadow-[#8a8b8c] rounded-xl h-[85vh]">
            <div className="flex justify-center">
                <img className="md:h-[400px] h-[200px] rounded-full mt-7 md:mt-6" src={user.photoURL} alt="" />
            </div>
            <h1 className="text-xl font-bold md:text-5xl md:font-extrabold text-center">{user.displayName}</h1>
        </div>
    );
};

export default UserProfile;