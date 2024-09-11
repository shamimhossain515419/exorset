import Login from "@/components/login/login";
import React from "react";
export async function generateMetadata({ params }) {
  return {
    title: "Login || Exorset",
  };
}
const page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default page;
