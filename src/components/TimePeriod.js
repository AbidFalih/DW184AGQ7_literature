import React, { useState } from "react";

const TimePeriod = () => {
  const [time, setTime] = useState(null);

  return (
    <div>
      <p className="text-danger">Anytime</p>
      <form>
        <select
          className="custom-select my-2"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          style={{ width: "150px" }}
        >
          <option value="2020">Since 2020</option>
          <option value="2019">Since 2019</option>
          <option value="2018">Since 2018</option>
          <option value="2017">Since 2017</option>
        </select>
      </form>
    </div>
  );
};

export default TimePeriod;
