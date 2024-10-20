"use client";
import React, { useEffect } from "react";
import Table from "@/components/Table";
import SideBar from "@/components/SideBar";
import dbService from "@/firebase/utils/db";
import useAuth from "@/hooks/CurrentUser";
import useSubscribe from "@/hooks/subscribed";
import axios from "axios";

const Page = () => {
  const db = new dbService();
  const { user, loading } = useAuth();


  console.log(user);

  const fetchFeedbackTasks = async () => {
    try {
      const feedback = await db.fetchFeedbacks(user?.uid);
      console.log(feedback);
      const data = await axios.post(
        "http://localhost:3000/api/generateFeedback",
        { feedback: feedback }
      );
      console.log(data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (user?.uid) {
      fetchFeedbackTasks();
    }
  }, [user?.uid]);

  const { subcribe } = useSubscribe();

  console.log(subcribe);

  return (
    <div className="bg-[#0e0f11] w-full flex min-h-screen overflow-x-clip">
      <SideBar page="Home" />
      <Table />
    </div>
  );
};

export default Page;
