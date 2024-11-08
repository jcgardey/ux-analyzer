import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

export interface UABreadCrumbItem {
  label: string;
  path: string;
}

interface UABreadCrumbProps {
  items: UABreadCrumbItem[];
}

export const UABreadCrumb: React.FC<UABreadCrumbProps> = ({ items }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={item.path}>{item.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {i < items.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
