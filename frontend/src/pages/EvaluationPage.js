import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { NavigationContext } from '../App';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { Modal } from '../components/Modal/Modal';
import { CreateVersion } from '../components/VersionList/CreateVersion';
import { VersionList } from '../components/VersionList/VersionList';
import { deleteVersion } from '../services/version';

export const EvaluationPage = () => {
  const [showVersionModal, setShowVersionModal] = useState(false);

  const evaluation = useLoaderData();
  const [versions, setVersions] = useState(evaluation.versions);

  const onVersionCreated = (version) => {
    setVersions([...versions, version]);
    setShowVersionModal(false);
  };

  const onDelete = (versionId) => deleteVersion(versionId);

  const { navigation, setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    setNavigation([
      { name: evaluation.evaluation_name, to: `/evaluation/${evaluation.id}` },
    ]);
  }, []);

  return (
    <>
      <div className="my-6 text-gray-700">
        <Link className="hover:underline" to={'/'}>
          Evaluations
        </Link>{' '}
        / <span className="font-semibold">{evaluation.evaluation_name}</span>
      </div>
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
