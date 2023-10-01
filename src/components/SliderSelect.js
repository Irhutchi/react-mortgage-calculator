import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <Fragment>
      <SliderComponent
        label="Property Value"
        min={1000}
        max={10000}
        defaultValue={20}
        step={100}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={3000}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={500}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={5}
        onChange={(e, value) => console.log(value)}
        unit="€"
        amount={700}
      />
    </Fragment>
  );
};

export default SliderSelect;
