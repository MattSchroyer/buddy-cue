import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import LaunchModalContent from "./LaunchModalContent";

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

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <LaunchModalContent onSubmit={() => setIsOpen(false)} />
    </Modal>
  );
};

export default LaunchModal;
