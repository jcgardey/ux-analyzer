import { WidgetType as WT } from '@/types/common';

interface WidgetTypeProps {
  type: WT;
}

export const WidgetType: React.FC<WidgetTypeProps> = ({ type }) => {
  const colors = {
    TextInput: 'rgb(37 99 235)',
    SelectInput: 'rgb(22 163 74)',
    Anchor: 'rgb(220 38 38)',
    Datepicker: 'rgb(234 88 12)',
    DateSelect: 'rgb(202 138 4)',
    RadioSet: 'rgb(13 148 136)',
  };
  return (
    <span
      className={'text-white font-semibold rounded-lg p-2'}
      style={{ backgroundColor: colors[type] }}
    >
      {type}
    </span>
  );
};
