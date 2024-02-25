"use client";
import { useConvexAuth } from "convex/react";
import { useState } from "react";
import { FaUser, FaList, FaComments } from "react-icons/fa";
import Loading from "../Loading";
import MyProfileContent from "./DashboardContent/MyProfileContent";
import AllPostsContent from "./DashboardContent/AllPostsContent";
import AllCommentsContent from "./DashboardContent/AllCommentsContent";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("myprofile");
  const { isLoading } = useConvexAuth();

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };
  if (isLoading) return <Loading />;

  return (
    <div className="h-screen bg-[whitesmoke] flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 p-4 border shadow-md">
        <div
          className={`cursor-pointer p-2 mb-2 flex items-center gap-4
          
         ${selectedTab === "myprofile" && "bg-gray-300"}`}
          onClick={() => handleTabClick("myprofile")}
        >
          <FaUser className="mr-2" />
          <span className="lg:inline-block ">My Profile</span>
        </div>
        <div
          className={`cursor-pointer p-2 mb-2 flex items-center gap-4 ${
            selectedTab === "allPosts" && "bg-gray-300"
          }`}
          onClick={() => handleTabClick("allPosts")}
        >
          <FaList className="mr-2" />
          <span className="lg:inline-block ">All Posts</span>
        </div>
        <div
          className={`cursor-pointer p-2 mb-2  flex items-center gap-4${
            selectedTab === "allComments" && "bg-gray-300"
          }`}
          onClick={() => handleTabClick("allComments")}
        >
          <FaComments className="mr-2" />
          <span className="lg:inline-block ">All Comments</span>
        </div>
      </aside>
      <div className="flex-1 p-4 border shadow-md">
        {selectedTab === "myprofile" && <MyProfileContent />}
        {selectedTab === "allPosts" && <AllPostsContent />}
        {selectedTab === "allComments" && <AllCommentsContent />}
      </div>
    </div>
  );
};

export default Dashboard;
