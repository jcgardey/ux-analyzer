import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../App';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { CreateEvaluation } from '../components/Evaluation/CreateEvaluation';
import { EvaluationList } from '../components/Evaluation/EvaluationList';
import { Modal } from '../components/Modal/Modal';
import { deleteEvaluation, getAllEvaluations } from '../services/evaluation';
import { PlusIcon } from '../components/Icons/PlusIcon';

export const EvaluationListPage = () => {
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);

  const [evaluations, setEvaluations] = useState([]);

  useEffect(() => {
    getAllEvaluations().then((res) => setEvaluations(res.data));
  }, []);

  const onEvaluationCreated = (evaluation) => {
    setEvaluations([...evaluations, evaluation]);
    setShowEvaluationModal(false);
  };

  const onDelete = (id) => {
    deleteEvaluation(id);
    setEvaluations(evaluations.filter((ev) => ev.id !== id));
  };

  return (
    <>
      <PageTitle>Evaluations</PageTitle>
      <div className="flex justify-start my-5">
        <PrimaryButton onClick={() => setShowEvaluationModal(true)}>
          New
          <PlusIcon className="inline ml-1" />
        </PrimaryButton>
      </div>
      <EvaluationList evaluations={evaluations} onDelete={onDelete} />
      {showEvaluationModal && (
        <Modal
          className="w-1/3"
          handleClose={() => setShowEvaluationModal(false)}
          title="New Evaluation"
        >
          <CreateEvaluation onEvaluationCreated={onEvaluationCreated} />
        </Modal>
      )}
    </>
  );
};
