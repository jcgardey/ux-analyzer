import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { Modal } from '../components/Modal/Modal';
import { CreateVersion } from '../components/VersionList/CreateVersion';
import { VersionList } from '../components/VersionList/VersionList';
import { deleteVersion } from '../services/version';

export const VersionListPage = () => {
  const [showVersionModal, setShowVersionModal] = useState(false);

  const evaluation = useLoaderData();
  const [versions, setVersions] = useState(evaluation.versions);

  const onVersionCreated = (version) => {
    setVersions([...versions, version]);
    setShowVersionModal(false);
  };

  const onDelete = (versionId) => deleteVersion(versionId);

  return (
    <>
      <PageTitle>{evaluation.evaluation_name}</PageTitle>
      <div className="flex my-5">
        <PrimaryButton onClick={() => setShowVersionModal(true)}>
          New Version
        </PrimaryButton>
      </div>
      <VersionList versions={versions} onDelete={onDelete} />
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

