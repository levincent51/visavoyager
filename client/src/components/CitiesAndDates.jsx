import styled from "styled-components";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const StyledBox = styled.div`
  & .group {
    display: flex;
    align-items: center;
    height: 60px;
  }

  & .details {
    display: inline-flex;
    gap: 12px;
  }

  & .frame {
    display: inline-flex;
    gap: 8px;
  }

  & .text-wrapper {
    color: var(--black);
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: -1px;
    white-space: nowrap;
  }

  & .div-wrapper {
    display: inline-flex;
    gap: 8px;
    padding: 4px 0px 0px;
  }

  & .div {
    color: var(--gray-555);
    font-family: "Inter-Regular", Helvetica;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 20px;
    margin-top: -1px;
    white-space: nowrap;
  }

  & .frame-wrapper {
    display: inline-flex;
    gap: 12px;
    padding: 0px 8px;
  }

  & .frame-2 {
    display: flex;
    gap: 8px;
    margin-left: 75px;
  }

  & .text-wrapper-2 {
    color: var(--black);
    font-family: "Inter-Medium", Helvetica;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    margin-top: -1px;
  }
};
`;

const CitiesAndDates = ({from, to, date}) => {
  return (<StyledBox>
    {/* //TODO functionalise the new york and beijing */}
    <div className="group">
      <div className="details">
        <div className="frame">
          <div className="text-wrapper">{from?.city}</div>
          <div className="div-wrapper">
            <div className="div">{from?.airport}</div>
          </div>
        </div>
      </div>
      <ArrowForwardOutlinedIcon
        style={{ marginTop: "20px", marginLeft: "7px" }}
      />
      <div className="frame-wrapper">
        <div className="frame">
          <div className="text-wrapper">{to?.city}</div>
          <div className="div-wrapper">
            <div className="div">{to?.airport}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="frame-2">
      <div className="text-wrapper-2">{date}</div>
    </div>
  </StyledBox>);
};

export default CitiesAndDates;
