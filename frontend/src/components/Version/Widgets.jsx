import { useEffect, useState } from 'react';
import { getVersionWidgets } from '../../services/version';
import { Grid, GridHeader, GridItem } from '../Common/Grid';
import { InteractionEffort } from '../InteractionEffort';
import { useOutletContext } from 'react-router-dom';

const WidgetType = ({ type }) => {
  const colors = {
    TextInput: 'bg-blue-600',
    SelectInput: 'bg-green-600',
    Anchor: 'bg-red-600',
    Datepicker: 'bg-orange-600',
    DateSelect: 'bg-yellow-600',
    RadioSet: 'bg-teal-900',
  };

  return (
    <span className={`text-white font-semibold rounded-lg p-2 ${colors[type]}`}>
      {type}
    </span>
  );
};

export const Widgets = () => {
  const [widgets, setWidgets] = useState([]);
  const version = useOutletContext();

  useEffect(() => {
    getVersionWidgets(version.id).then((res) => setWidgets(res.data));
  }, [version.id]);

  return (
    <Grid>
      <GridHeader>
        <p className="w-1/3 mx-2">Label</p>
        <p className="w-1/3 mx-2">Type</p>
        <p className="w-1/3 mx-2">Interaction Effort</p>
      </GridHeader>
      {widgets.map((widget, i) => (
        <GridItem key={i}>
          <p className="w-1/3 mx-2">{widget.widget_label}</p>
          <div className="w-1/3 mx-2">
            <WidgetType type={widget.widget_type} />
          </div>
          <div className="w-1/3 mx-2">
            <div className="w-10">
              <InteractionEffort
                score={widget.user_interaction_effort}
                className={'text-xl'}
              />
            </div>
          </div>
        </GridItem>
      ))}
    </Grid>
  );
};

