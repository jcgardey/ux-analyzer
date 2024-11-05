import { UABreadCrumbItem } from '@/components/common/UABreadcrumb/UABreadCrumb';
import { Evaluation } from '@/types/common';

export const buildEvaluationBreadcrumbItems = (
  evaluation: Evaluation
): UABreadCrumbItem[] => [
  { label: 'Evaluations', path: '/evaluations' },
  { label: evaluation.evaluation_name, path: `/evaluations/${evaluation.id}` },
];
