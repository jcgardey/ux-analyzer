import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createVersion } from '../../services/version';
import { PrimaryButton } from '../Button/Button';
import { Input, Label } from '../Common/Form';

export const CreateVersion = ({ onVersionCreated }) => {
  const [versionName, setVersionName] = useState('');
  const [url, setUrl] = useState('');

  const [urls, setUrls] = useState([]);

  const { evaluationId } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    createVersion(evaluationId, versionName, urls).then((res) =>
      onVersionCreated(res.data)
    );
  };

  const addUrl = () => {
    if (url !== '') {
      setUrls([...urls, url]);
      setUrl('');
    }
  };

  const deleteUrl = (url) => setUrls(urls.filter((u) => u !== url));

  return (
    <form onSubmit={onSubmit}>
      <div className="my-8">
        <Label>Name</Label>
        <Input
          value={versionName}
          onChange={(e) => setVersionName(e.target.value)}
        />
      </div>
      <div className="my-8">
        <Label>URLs</Label>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={addUrl}
        />
        {urls.map((url, i) => (
          <div key={i} className="my-4">
            <span className="bg-gray-300 text-gray-900 rounded-2xl p-2">
              {url}
            </span>
            <button
              className="mx-2 text-red-500"
              onClick={() => deleteUrl(url)}
            >
              <i className="fa-solid fa-lg fa-xmark"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="my-8">
        <PrimaryButton type="submit">Create</PrimaryButton>
      </div>
    </form>
  );
};
