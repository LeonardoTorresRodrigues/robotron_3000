import React from 'react';

interface RobotronStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RobotronStatusModal: React.FC<RobotronStatusModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2>Status Robotron 3000</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default RobotronStatusModal;
