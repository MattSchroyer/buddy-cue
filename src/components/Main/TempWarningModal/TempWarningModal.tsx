import React from 'react';
import { Modal, Button } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setWarning } from '../../../redux/slices/sessionSlice';

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
  const isWarningOpen = useSelector((state: RootState) => state.session.isWarningOpen);
  const dispatch = useDispatch();

  const onWarningClose = () => {
    dispatch(setWarning(false));
  };

  return (
    <Modal open={isWarningOpen}>
      <TempWarningContent>
        <h1>Warning</h1>
        <div>
          <p>Your temp is not rising fast enough.</p>
          <p>Please add more coals to the smoker.</p>
        </div>
        <div style={{ padding: '8px 0 8px 0' }}>
          <Button variant="contained" color="primary" onClick={() => onWarningClose()}>
            OK
          </Button>
        </div>
      </TempWarningContent>
    </Modal>
  );
};

export default TempWarningModal;
