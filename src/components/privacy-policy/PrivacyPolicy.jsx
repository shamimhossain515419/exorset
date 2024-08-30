import React from "react";

const PrivacyPolicy = ({ PrivacyPolicyData }) => {
  return (
    <div className="container py-4">
      <div
        dangerouslySetInnerHTML={{ __html: PrivacyPolicyData?.description }}
      ></div>
    </div>
  );
};

export default PrivacyPolicy;
