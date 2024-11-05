import { UABreadCrumbItem } from '@/components/common/UABreadcrumb/UABreadCrumb';
import { Version } from '@/types/common';
import { buildEvaluationBreadcrumbItems } from '../EvaluationPage/breadcrumb';

export const buildVersionBreadcrumbItems = (
  version: Version
): UABreadCrumbItem[] => [
  ...buildEvaluationBreadcrumbItems(version.evaluation),
  {
    label: version.version_name,
    path: `evaluations/${version.evaluation.id}/version/${version.id}`,
  },
];
