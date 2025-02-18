import React, { useState } from 'react';
import { Modal } from '@mui/material';
import InitEntryContent from './InitEntryContent/';
import InitEstContent from './InitEstContent/';

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
    <InitEntryContent onSubmit={() => setShowEst(true)} />
  );

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <div>{Content}</div>
    </Modal>
  );
};

export default LaunchModal;
