import { UXButton } from '@/components/Button/UXButton';
import { Spinner } from '@/components/Common/Spinner/Spinner';
import { Text } from '@/components/Common/Text/Text';
import { UABreadCrumb } from '@/components/Common/UABreadcrumb/UABreadCrumb';
import { EditVersionForm } from '@/components/Evaluation/EditVersionForm';
import { VersionList } from '@/components/Evaluation/VersionList';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEvaluation } from '@/hooks/evaluations/useEvaluation';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { buildEvaluationBreadcrumbItems } from './breadcrumb';
import { Evaluation } from '@/types/common';

export const EvaluationPage = () => {
  const { evaluationId } = useParams();

  const { data: evaluation, isPending } = useEvaluation(evaluationId as string);

  const handleSuccess = useCallback(() => {}, []);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      <UABreadCrumb
        items={buildEvaluationBreadcrumbItems(evaluation as Evaluation)}
      />
      <Text className="my-4" variant="h2">
        {evaluation?.evaluation_name}
      </Text>
      <div className="flex my-5">
        <Dialog>
          <DialogTrigger asChild>
            <UXButton>New Version</UXButton>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>New Version</DialogTitle>
            <EditVersionForm onSuccess={handleSuccess} />
          </DialogContent>
        </Dialog>
      </div>
      <VersionList versions={evaluation?.versions ?? []} />
    </>
  );
};
