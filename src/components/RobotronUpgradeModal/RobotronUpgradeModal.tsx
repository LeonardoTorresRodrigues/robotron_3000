import React from 'react';

interface RobotronUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RobotronUpgradeModal: React.FC<RobotronUpgradeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2>Opções de Upgrade</h2>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default RobotronUpgradeModal;
