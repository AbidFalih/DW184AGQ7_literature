import React from "react";

const InfoProfile = ({ icon, valueLabel, value }) => {
  return (
    <div class="center-vertical justify-content-start">
      {icon}
      <p className="m-1 ml-3 font-weight-bold">
        {value}
        <br />
        <small className="text-muted">{valueLabel}</small>
      </p>
    </div>
  );
};

export default InfoProfile;
