import React, { useState } from 'react';
import { Modal } from '@mui/material';
import InitEntryForm from './InitEntryForm';
import InitEstContent from './InitEstContent/';
import testid from './testid';

export type OnChangeEventType = {
  target: {
    value: string;
  };
};

export type OnTimeInputChangeType = {
  value: string;
  name?: string | undefined;
};

const LaunchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [showEst, setShowEst] = useState<boolean>(false);
  const Content = showEst ? (
    <InitEstContent onClose={() => setIsOpen(false)} />
  ) : (
    <InitEntryForm onSubmit={() => setShowEst(true)} />
  );

  const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (reason && reason == 'backdropClick') return;

    setIsOpen(false);
  };

  return (
    <Modal disableEscapeKeyDown open={isOpen} onClose={handleClose} data-testid={testid('root')}>
      <div>{Content}</div>
    </Modal>
  );
};

export default LaunchModal;
