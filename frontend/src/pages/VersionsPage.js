import { useState } from 'react';
import { PrimaryButton } from '../components/Button/Button';
import { Modal } from '../components/Modal/Modal';
import { CreateVersion } from '../components/VersionList/CreateVersion';
import { VersionList } from '../components/VersionList/VersionList';

export const VersionsPage = () => {
  const [showVersionModal, setShowVersionModal] = useState(false);

  return (
    <>
      <h1 className="text-4xl text-medium my-6">Versions</h1>
      <div className="flex justify-end my-5">
        <PrimaryButton onClick={() => setShowVersionModal(true)}>
          New Version
        </PrimaryButton>
      </div>
      <VersionList />
      {showVersionModal && (
        <Modal
          handleClose={() => setShowVersionModal(false)}
          title="New Version"
        >
          <CreateVersion />
        </Modal>
      )}
    </>
  );
};

