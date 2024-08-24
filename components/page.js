"use client";

import { supabase } from "@/lib/supabaseClient";
import { Button, Modal, Space, Table, Tag } from "antd";
import { useState, useEffect } from "react";

const Home = ({ id }) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data, error } = await supabase
        .from("tbl_user")
        .select()
        .eq("id", id); // Using the parameter to filter results

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched data:", data);
        setList(data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  useEffect(() => {
    if (id) {
      getList();
    }
  }, [id]); // Fetch data when `id` is available

  return (
    <div
      style={{
        paddingTop: "100px",
        justifyContent: "center",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {list.map((user) => (
        <p key={user.id}>Name: {user.fullname}</p>
      ))}
    </div>
  );
};

export default Home;
