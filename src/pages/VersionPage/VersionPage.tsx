import { Spinner } from '@/components/common/Spinner/Spinner';
import { Tabs } from '@/components/common/Tabs/Tabs';
import { Text } from '@/components/common/Text/Text';
import { useVersion } from '@/hooks/versions/useVersion';
import { Outlet, useParams } from 'react-router-dom';
import { buildTabs } from './tabs';
import { Version } from '@/types/common';
import { buildVersionBreadcrumbItems } from './breadcrumb';
import { UABreadCrumb } from '@/components/common/UABreadcrumb/UABreadCrumb';
import { buttonVariants } from '@/components/ui/button';

export const VersionPage = () => {
  const { versionId } = useParams();

  const { data: version, isPending } = useVersion(
    parseInt(versionId as string)
  );

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div>
      <UABreadCrumb items={buildVersionBreadcrumbItems(version as Version)} />
      <Text variant="h3" className="my-4">
        {version?.version_name}
      </Text>
      <div className="my-4">
        {version?.urls.map((url, i) => (
          <a
            key={i}
            href={url}
            className={buttonVariants({ variant: 'link' })}
            target="_blank"
          >
            {url}
          </a>
        ))}
      </div>
      <Tabs tabs={buildTabs(version as Version)} />
      <div className="w-full">
        <Outlet context={version as Version} />
      </div>
    </div>
  );
};
