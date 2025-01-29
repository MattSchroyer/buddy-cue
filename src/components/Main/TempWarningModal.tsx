import React from "react";
import { Modal, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

const TempWarningContent = styled.div`
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

const TempWarningModal: React.FC = () => {
  const { isWarningOpen, setIsWarningOpen } = useTimeTempContext();

  return (
    <Modal open={isWarningOpen}>
      <TempWarningContent>
        <h1>Warning</h1>
        <div>
          <p>Your temp is not rising fast enough.</p>
          <p>Please add more coals to the smoker.</p>
        </div>
        <div style={{ padding: "8px 0 8px 0" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsWarningOpen(false)}
          >
            OK
          </Button>
        </div>
      </TempWarningContent>
    </Modal>
  );
};

export default TempWarningModal;
