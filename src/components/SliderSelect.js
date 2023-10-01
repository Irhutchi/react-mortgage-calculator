import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 300000;

  return (
    <Fragment>
      <SliderComponent
        label="Property Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.propertyValue}
        value={data.propertyValue}
        step={500}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.1,
            loanAmount: value * 0.9,
            propertyValue: value,
          })
        }
        unit="€"
        amount={data.propertyValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.propertyValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={500}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.propertyValue - value,
            downPayment: value,
          })
        }
        unit="€"
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.propertyValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.propertyValue - value,
            loanAmount: value,
          })
        }
        unit="€"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.25}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      />
    </Fragment>
  );
};

export default SliderSelect;
