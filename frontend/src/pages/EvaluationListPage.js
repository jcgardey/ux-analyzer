import { useEffect, useState } from 'react';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { CreateEvaluation } from '../components/Evaluation/CreateEvaluation';
import { EvaluationList } from '../components/Evaluation/EvaluationList';
import { Modal } from '../components/Modal/Modal';
import { getAllEvaluations } from '../services/evaluation';

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

  return (
    <>
      <PageTitle>Evaluations</PageTitle>
      <div className="flex justify-end my-5">
        <PrimaryButton onClick={() => setShowEvaluationModal(true)}>
          New Evaluation
        </PrimaryButton>
      </div>
      <EvaluationList evaluations={evaluations} />
      {showEvaluationModal && (
        <Modal
          handleClose={() => setShowEvaluationModal(false)}
          title="New Evaluation"
        >
          <CreateEvaluation onEvaluationCreated={onEvaluationCreated} />
        </Modal>
      )}
    </>
  );
};

