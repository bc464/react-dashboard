import React from "react";
import CardItem from "./CardItem";

import AreaChartComponent from "./AreaChartComponent";
import TableComponent from "./TableComponent";

const LeftColumn = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-between p-2">
        <div className="flex flex-col lg:flex-grow gap-2">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className="flex-auto w-full">
          <AreaChartComponent />
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
