import React from "react";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";

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
  return (
    <InitEstContentContainer>
      <div style={{ padding: "8px 0 8px 0" }}>
        <h1>Excellent.</h1>
        <div>Your time estimate is X hours.</div>
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
