import React from "react";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
export async function generateMetadata({ params }) {
  return {
    title: 'Privacy policy || Exorset',
  }
}
const page = async () => {
  try {
    const res = await fetch(
      `https://www.exorset.com/api/v1/privacyPolicy/get`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return (
      <>
        <PrivacyPolicy PrivacyPolicyData={data?.data} />
      </>
    );
  } catch (error) {
    console.error("Fetch failed:", error);
    return (
      <div>
        <h1>Error loading privacy policy</h1>
        <p>There was a problem fetching the privacy policy. Please try again later.</p>
      </div>
    );
  }
};

export default page;
