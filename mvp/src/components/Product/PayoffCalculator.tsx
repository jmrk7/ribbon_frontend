import React, { useState } from "react";
import styled from "styled-components";
import { Input, Row } from "antd";
import {
  computeBreakeven,
  computeDefaultPrice,
  computeGainsAmount,
  formatProfit,
} from "../../utils/straddle";
import { BigNumber } from "ethers";

const CardTitle = styled(Row)`
  font-weight: bold;
  font-size: 18px;
`;

const StatisticTitle = styled.p`
  padding-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 10px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
`;

const InputNumberStyled = styled(Input)`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 15px;
`;

type Props = {
  ethPrice: number;
  straddlePrice: string;
  callStrikePrice: BigNumber;
  putStrikePrice: BigNumber;
  amount: number;
};

const PayoffCalculator: React.FC<Props> = ({
  ethPrice,
  straddlePrice,
  callStrikePrice,
  putStrikePrice,
  amount,
}) => {
  const [inputText, setInputText] = useState("");
  const [, upperBreakeven] = computeBreakeven(
    straddlePrice,
    callStrikePrice,
    putStrikePrice
  );

  const defaultPrice = computeDefaultPrice(upperBreakeven, 1.0);
  const [dollarProfit, percentProfit, profitPositive] = computeGainsAmount(
    ethPrice,
    parseFloat(inputText),
    callStrikePrice,
    putStrikePrice,
    parseFloat(straddlePrice),
    amount
  );

  return (
    <div>
      <CardTitle>Profitability Calculator</CardTitle>
      <StatisticTitle>Target Price:</StatisticTitle>
      <InputNumberStyled
        prefix="$"
        suffix="per ETH"
        placeholder={defaultPrice.toString()}
        type="number"
        min="0"
        step="1"
        value={inputText}
        onKeyDown={(e) => {
          if (e.key === "-") {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      <StatisticTitle>Estimated Profit:</StatisticTitle>
      <div>{formatProfit(dollarProfit, percentProfit, profitPositive)}</div>
    </div>
  );
};

export default PayoffCalculator;