import { useCallback, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { WidgetModal } from './WidgetModal';
import { useVersionWidgets } from '@/hooks/versions/useVersionWidgets';
import { Version, Widget } from '@/types/common';
import { UXButton } from '../Button/UXButton';
import { WidgetType } from './WidgetType';
import { Spinner } from '../Common/Spinner/Spinner';
import { useQueryClient } from '@tanstack/react-query';
import { Slider } from '../ui/slider';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { useUpdateWidgetSettings } from '@/hooks/versions/useUpdateWidgetSettings';
import { Grid, GridHeader, GridItem } from '../Common/Grid/Grid';
import { InteractionEffort } from '../Common/InteractionEffort/InteractionEffort';
import { Switch } from '../ui/switch';
import { Checkbox } from '../ui/checkbox';
import { useMergeWidgets } from '@/hooks/versions/useMergeWidgets';

export const Widgets = () => {
  const version = useOutletContext() as Version;
  const { data: widgets, isPending } = useVersionWidgets(
    version.id as unknown as string
  );
  const queryClient = useQueryClient();

  const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);
  const [weights, setWeights] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean[]>([]);
  const [selectedWidgetIds, setSelectedWidgetIds] = useState<number[]>([]);

  const updateWidgetSettings = useUpdateWidgetSettings();
  const mergeWidgets = useMergeWidgets();

  const closeWidgetModal = () => setSelectedWidget(null);

  useEffect(() => {
    setWeights(widgets?.map((w) => w.weight) ?? []);
    setDisabled(widgets?.map((w) => w.disabled) ?? []);
  }, [widgets]);

  const onEditWidget = useCallback(
    (widget: Widget) => {
      const targetWidget = widgets?.find((w) => w.id === widget.id);
      if (targetWidget) {
        targetWidget.label = widget.label;
        queryClient.setQueryData(['versions', version.id, 'widgets'], widgets);
      }
      closeWidgetModal();
    },
    [widgets, queryClient, version]
  );

  const updateWidgetWeight = (widget: Widget, newWeight: number[]) => {
    const index = widgets?.indexOf(widget);
    if (index !== undefined) {
      weights[index] = newWeight[0];
      setWeights([...weights]);
    }
  };

  const updateWidgetStatus = (index: number) => {
    disabled[index] = !disabled[index];
    setDisabled([...disabled]);
  };

  const handleCheckChange = (checked: boolean | string, id: number) => {
    setSelectedWidgetIds(
      checked
        ? [...selectedWidgetIds, id]
        : selectedWidgetIds.filter((i) => i !== id)
    );
  };

  const saveChanges = () => {
    updateWidgetSettings.mutate({
      versionId: version.id,
      widgets:
        widgets?.map((widget, i) => ({
          ...widget,
          weight: weights[i],
          disabled: disabled[i],
        })) ?? [],
    });
  };

  const handleMergeWidgets = () => {
    mergeWidgets.mutate(
      {
        versionId: version.id,
        widgetIds: selectedWidgetIds,
      },
      {
        onSuccess: () => {
          setSelectedWidgetIds([]);
        },
      }
    );
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      {selectedWidgetIds.length > 1 && (
        <UXButton
          loading={mergeWidgets.isPending}
          disabled={mergeWidgets.isPending}
          className="my-2"
          onClick={handleMergeWidgets}
        >
          Join widgets
        </UXButton>
      )}
      <Grid>
        <GridHeader>
          <p className="w-1/12"></p>
          <p className="w-1/3 mx-2">Label</p>
          <p className="w-1/3 mx-2">Type</p>
          <p className="w-1/4 mx-2">Interaction Effort</p>
          <p className="w-1/4 mx-2">Weight</p>
          <p className="w-1/6"></p>
        </GridHeader>
        {(widgets ?? []).map((widget, i) => (
          <GridItem key={i}>
            <div className="w-1/12 flex justify-center">
              <Checkbox
                onCheckedChange={(e) => handleCheckChange(e, widget.id)}
                checked={selectedWidgetIds.includes(widget.id)}
              />
            </div>
            <div className="w-1/3 mx-2 gap-2 flex items-center">
              <p>{widget.label || '----'}</p>
              <Button variant="ghost" onClick={() => setSelectedWidget(widget)}>
                <Pencil1Icon />
              </Button>
            </div>
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
            <div className="w-1/4 mx-2">
              <Slider
                value={[weights[i]]}
                min={1}
                max={widgets?.length ?? 0}
                onValueChange={(newValue) =>
                  updateWidgetWeight(widget, newValue)
                }
              />
            </div>
            <div className="w-1/6 flex justify-center items-center">
              <Switch
                checked={!disabled[i]}
                onCheckedChange={() => updateWidgetStatus(i)}
              />
            </div>
          </GridItem>
        ))}
      </Grid>
      <div className="flex justify-end my-4">
        <UXButton
          loading={updateWidgetSettings.isPending}
          onClick={saveChanges}
        >
          Save Changes
        </UXButton>
      </div>
      {selectedWidget && (
        <WidgetModal
          widget={selectedWidget}
          onClose={closeWidgetModal}
          onAccept={onEditWidget}
        />
      )}
    </>
  );
};
