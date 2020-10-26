import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const TimePeriod = (props) => {
  // const [time, setTime] = useState(null);

  const year = new Date().getFullYear();

  const history = useHistory();
  return (
    <div>
      <p className="text-danger mb-0 pl-3">Anytime</p>
      <form>
        <select
          className="custom-select my-2"
          onChange={(e) => {
            console.log(`berhasil change ${e.target.value}`);
            props.setYear(e.target.value);
            history.push(
              `/search-result?title=${props.isQuery}&public_year=${e.target.value}`
            );
          }}
          style={{ width: "150px" }}
        >
          <option value="" disable selected hidden>
            Select Year
          </option>
          <option value={year}>Since {year}</option>
          <option value={year - 1}>Since {year - 1}</option>
          <option value={year - 2}>Since {year - 2}</option>
          <option value={year - 3}>Since {year - 3}</option>
          <option value={year - 4}>Since {year - 4}</option>
        </select>
      </form>
    </div>
  );
};

export default TimePeriod;
