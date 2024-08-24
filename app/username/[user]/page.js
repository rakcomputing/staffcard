"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState, useEffect } from "react";

const Users = ({ params }) => {
  const { user: id } = params;
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data, error } = await supabase
        .from("tbl_user")
        .select()
        .eq("idnumber", id); // Using the parameter to filter results

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
        justifyContent: "center",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {list.map((user) => (
        <div key={user.idnumber}>
          {" "}
          {/* Add a unique key here */}
          <div className="bg-background min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-card shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/400x250/FF0000/FFFFFF?text=Staff+Member"
                alt="staff-member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-card-foreground mt-4">
                  ឈ្មោះ ៖ {user.frontname} {user.fullname}
                </h2>
                <p className="text-ml text-muted-foreground mt-2">
                  ផ្នែក​ ៖​ {user.department}
                </p>
                <p className="text-ml text-muted-foreground mt-2">
                  តួនារទី ៖ {user.position}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  អត្ថលេខមន្ត្រី ៖​ {user.idnumber}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  លេខទូរស័ព្ទ ៖​ {user.username}
                </p>
                <div className="flex justify-between mt-4">
                  <a
                    href="#"
                    className="text-primary-foreground hover:text-primary/80"
                  >
                    View Profile
                  </a>
                  <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/80">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
