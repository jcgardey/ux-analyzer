import { Version } from '@/types/common';

export interface VersionTab {
  name: string;
  show: boolean;
  path: string;
}

export const buildTabs = (version: Version): VersionTab[] => [
  {
    name: 'Stats',
    show: version.user_sessions_count > 0,
    path: 'stats',
  },
  {
    name: 'User Sessions',
    show: version.user_sessions_count > 0,
    path: 'user_sessions',
  },
  {
    name: 'Widgets',
    show: version.user_sessions_count > 0,
    path: 'widgets',
  },
  { name: 'Setup', show: true, path: 'setup' },
];
