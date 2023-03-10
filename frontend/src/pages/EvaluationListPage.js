import { useContext, useEffect, useState } from 'react';
import { NavigationContext } from '../App';
import { PrimaryButton } from '../components/Button/Button';
import { PageTitle } from '../components/Common/PageTitle';
import { CreateEvaluation } from '../components/Evaluation/CreateEvaluation';
import { EvaluationList } from '../components/Evaluation/EvaluationList';
import { Modal } from '../components/Modal/Modal';
import { deleteEvaluation, getAllEvaluations } from '../services/evaluation';

export const EvaluationListPage = () => {
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);

  const [evaluations, setEvaluations] = useState([]);

  const { navigation, setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    getAllEvaluations().then((res) => setEvaluations(res.data));
  }, []);

  useEffect(() => {
    setNavigation([{ name: 'Evaluations', to: '/' }]);
  }, [setNavigation]);

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
      <div className="flex justify-end my-5">
        <PrimaryButton onClick={() => setShowEvaluationModal(true)}>
          New Evaluation
        </PrimaryButton>
      </div>
      <EvaluationList evaluations={evaluations} onDelete={onDelete} />
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
