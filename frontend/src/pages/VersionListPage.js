import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { Modal } from '../components/Modal/Modal';
import { CreateVersion } from '../components/VersionList/CreateVersion';
import { VersionList } from '../components/VersionList/VersionList';

export const VersionListPage = () => {
  const [showVersionModal, setShowVersionModal] = useState(false);

  const [versions, setVersions] = useState(useLoaderData());

  const onVersionCreated = (version) => {
    setVersions([...versions, version]);
    setShowVersionModal(false);
  };

  return (
    <>
      <PageTitle>Versions</PageTitle>
      <div className="flex justify-end my-5">
        <PrimaryButton onClick={() => setShowVersionModal(true)}>
          New Version
        </PrimaryButton>
      </div>
      <VersionList versions={versions} />
      {showVersionModal && (
        <Modal
          handleClose={() => setShowVersionModal(false)}
          title="New Version"
        >
          <CreateVersion onVersionCreated={onVersionCreated} />
        </Modal>
      )}
    </>
  );
};

