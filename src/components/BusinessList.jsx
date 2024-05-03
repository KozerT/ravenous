import React from "react";
import Business from "./Business";

const BusinessList = ({ businesses }) => {
  if (!businesses || !businesses.length) {
    return <div></div>;
  }

  return (
    <section className="flex flex-wrap justify-center gap-24">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </section>
  );
};

export default BusinessList;
