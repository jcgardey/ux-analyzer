import { useState } from 'react';
import { PrimaryButton } from '../Button/Button';
import { Input } from '../Common/Form';
import { Modal } from '../Modal/Modal';

export const WidgetModal = ({ widget, onAccept, onClose }) => {
  const [widgetLabel, setWidgetLabel] = useState(widget.label ?? '');

  const handleLabelChange = (event) => setWidgetLabel(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAccept({ id: widget.id, label: widgetLabel });
  };

  return (
    <Modal title="Edit Widget" handleClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label>Widget label</label>
          <Input type="text" value={widgetLabel} onChange={handleLabelChange} />
        </div>
        <div className="my-4">
          <label>Widget URL</label>
          <p>{widget.url}</p>
        </div>
        <div className="my-4">
          <label>Widget XPath</label>
          <p>{widget.xpath}</p>
        </div>
        <div className="my-4">
          <PrimaryButton>Edit</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
};
