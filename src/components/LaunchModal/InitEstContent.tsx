import React from "react";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";
import {
  useTimeTempContext,
  HOURS_PER_LB,
} from "../../contexts/TimeTempContext";

const InitEstContentContainer = styled.div`
  position: absolute;
  width: 400px;
  background-color: #ffffff;
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);
  outline: 0;
  padding: 16px;
  border-radius: 4px;
`;

export type InitEntryContentType = {
  onClose: () => void;
};

const InitEstContent: React.FC<InitEntryContentType> = ({ onClose }) => {
  const { weight } = useTimeTempContext();
  const estTime = weight * HOURS_PER_LB;
  return (
    <InitEstContentContainer>
      <div style={{ padding: "8px 0 8px 0" }}>
        <h1>Excellent.</h1>
        <div
          style={{ paddingBottom: "8px" }}
        >{`Your time estimated smoking time is ${estTime} hours.`}</div>
        <div style={{ paddingBottom: "8px" }}>
          Prep your smoker to 225ºF, and let the smoking commence!
        </div>
      </div>
      <div style={{ padding: "8px 0 8px 0" }}>
        <Button variant="contained" color="primary" onClick={() => onClose()}>
          Close
        </Button>
      </div>
    </InitEstContentContainer>
  );
};

export default InitEstContent;
