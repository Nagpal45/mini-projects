"use client"
import apiRequest from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try{
            await apiRequest.get('/auth/logout');
            router.push('/login');
        }catch(error){
            console.error(error);
        }
    }

  return (
    <div className="w-full h-[60px] bg-gray-800 flex items-center justify-between">
      <p className="text-white ml-10 text-xl">Cricket Score</p>
      <button className="text-red-500 mr-10" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
