import { useState } from 'react';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { Modal } from '../components/Modal/Modal';
import { CreateVersion } from '../components/VersionList/CreateVersion';
import { VersionList } from '../components/VersionList/VersionList';

export const VersionListPage = () => {
  const [showVersionModal, setShowVersionModal] = useState(false);

  return (
    <>
      <PageTitle>Versions</PageTitle>
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

