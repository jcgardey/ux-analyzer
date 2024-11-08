import { Text } from '@/components/Common/Text/Text';
import { EditEvaluationForm } from '@/components/Evaluations/EditEvaluationForm';
import { EvaluationList } from '@/components/Evaluations/EvaluationList';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEvaluations } from '@/hooks/evaluations/useEvaluations';
import { PlusIcon } from '@radix-ui/react-icons';

export const EvaluationsPage = () => {
  const { data: evaluations } = useEvaluations();

  return (
    <div>
      <Text variant="h1">Evaluations</Text>
      <div className="flex justify-start my-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              New
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Create Evaluation</DialogTitle>
            <EditEvaluationForm onSuccess={() => {}} />
          </DialogContent>
        </Dialog>
      </div>
      <EvaluationList evaluations={evaluations ?? []} />
    </div>
  );
};
