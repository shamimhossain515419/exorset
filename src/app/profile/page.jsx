import Profile from "@/components/pages/profile/Profile";
import React from "react";
const page = async () => {
  // const response = await axios.get(
  //   "https://www.exorset.com/api/v1/users/get-single-user",
  //   {
  //     withCredentials: true, // Include credentials in the request
  //   }
  // );
  // const userInfo = response.data;
  // console.log(userInfo)
  return (
    <div>
      <Profile  />
    </div>
  );
};

export default page;
