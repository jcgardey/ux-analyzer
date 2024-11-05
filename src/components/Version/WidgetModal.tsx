import React, { useState } from 'react';
import { Widget } from '@/types/common';
import { Input } from '../ui/input';
import { UXButton } from '../Button/UXButton';
import { Dialog, DialogContent } from '../ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';

interface WidgetModalProps {
  widget: Widget;
  onAccept: (widget: Widget) => void;
  onClose: () => void;
}

export const WidgetModal: React.FC<WidgetModalProps> = ({
  widget,
  onAccept,
  onClose,
}) => {
  const [widgetLabel, setWidgetLabel] = useState(widget.label ?? '');

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWidgetLabel(event.target.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onAccept({ ...widget, label: widgetLabel });
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Edit Widget</DialogTitle>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Widget label</label>
            <Input
              type="text"
              value={widgetLabel}
              onChange={handleLabelChange}
            />
          </div>
          <div className="my-4">
            <label>Widget URL</label>
            <p>{widget.url}</p>
          </div>
          <div className="my-4">
            <UXButton>Edit</UXButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
