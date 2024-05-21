import { useEffect, useState } from 'react';
import {
  getVersionWidgets,
  updateWidgetsSettings,
} from '../../services/version';
import { Grid, GridHeader, GridItem } from '../Common/Grid';
import { InteractionEffort } from '../InteractionEffort';
import { useOutletContext } from 'react-router-dom';
import { Input } from '../Common/Form';
import { PrimaryButton } from '../Button/Button';
import ReactSlider from 'react-slider';

const WidgetType = ({ type }) => {
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

export const Widgets = () => {
  const [widgets, setWidgets] = useState([]);
  const version = useOutletContext();

  useEffect(() => {
    getVersionWidgets(version.id).then((res) => setWidgets(res.data));
  }, [version.id]);

  const updateWidgetWeight = (widgetId, newWeight) => {
    const widget = widgets.find((widget) => widget.id === widgetId);
    widget.weight = newWeight;
    setWidgets([...widgets]);
  };

  const saveChanges = () => {
    updateWidgetsSettings(version.id, widgets);
  };

  return (
    <>
      <Grid>
        <GridHeader>
          <p className="w-1/3 mx-2">Label</p>
          <p className="w-1/3 mx-2">Type</p>
          <p className="w-1/4 mx-2">Interaction Effort</p>
          <p className="w-1/5 mx-2">Weight</p>
        </GridHeader>
        {widgets.map((widget, i) => (
          <GridItem key={i}>
            <p className="w-1/3 mx-2" onClick={() => console.log(widget)}>
              {widget.label}
            </p>
            <div className="w-1/3 mx-2">
              <WidgetType type={widget.widget_type} />
            </div>
            <div className="w-1/4 mx-2">
              <div className="w-10">
                <InteractionEffort
                  score={widget.user_interaction_effort}
                  className={'text-xl'}
                />
              </div>
            </div>
            <div className="w-1/5 mx-2">
              <ReactSlider
                value={widget.weight}
                min={1}
                max={widgets.length}
                trackClassName="h-5 bg-gray-200"
                thumbClassName="h-5 w-5 rounded-lg bg-red"
                onChange={(newValue, index) =>
                  updateWidgetWeight(widget.id, newValue)
                }
              />
            </div>
          </GridItem>
        ))}
      </Grid>
      <div className="flex justify-end my-4">
        <PrimaryButton onClick={saveChanges}>Save Changes</PrimaryButton>
      </div>
    </>
  );
};
