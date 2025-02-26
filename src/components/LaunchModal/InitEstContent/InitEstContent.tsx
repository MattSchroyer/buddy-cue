import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { HOURS_PER_LB } from '../../../constants';
import { RootState } from '../../../redux/store';
import testId from './testid';

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
  const estTime = weight * HOURS_PER_LB;

  return (
    <InitEstContentContainer data-testid={testId('root')}>
      <div style={{ padding: '8px 0 8px 0' }}>
        <h1>Excellent.</h1>
        <div style={{ paddingBottom: '8px' }}>{`Your time estimated smoking time is ${estTime} hours.`}</div>
        <div style={{ paddingBottom: '8px' }}>Prep your smoker to 225ºF, and let the smoking commence!</div>
      </div>
      <div style={{ padding: '8px 0 8px 0' }}>
        <Button variant="contained" color="primary" onClick={() => onClose()}>
          Close
        </Button>
      </div>
    </InitEstContentContainer>
  );
};

export default InitEstContent;
