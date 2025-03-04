import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { HOURS_PER_LB, SMOKER_AMB_TEMP } from '../../../constants';
import { RootState } from '../../../redux/store';
import testId from './testid';
import { getEstTime, getEstTimeMessage, getSmokerPrepMessage } from '../../../utils';

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

export type Props = {
  onClose: () => void;
};

const InitEstContent: React.FC<Props> = ({ onClose }) => {
  const weight = useSelector((state: RootState) => state.session.weight);
  const estTime = getEstTime(weight, HOURS_PER_LB);

  const estTimeMessage = getEstTimeMessage(estTime);
  const smokerPrepMessage = getSmokerPrepMessage(SMOKER_AMB_TEMP);

  return (
    <InitEstContentContainer data-testid={testId('root')}>
      <div style={{ padding: '8px 0 8px 0' }}>
        <h1>Excellent.</h1>
        <div style={{ paddingBottom: '8px' }}>
          {estTimeMessage}
        </div>
        <div style={{ paddingBottom: '8px' }}>
          {smokerPrepMessage}
        </div>
      </div>
      <div style={{ padding: '8px 0 8px 0' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClose()}
          data-testid={testId('button-close')}
        >
          Close
        </Button>
      </div>
    </InitEstContentContainer>
  );
};

export default InitEstContent;
