import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { UXButton } from '../Button/UXButton';
import { useCreateVersion } from '@/hooks/versions/useCreateVersion';
import { Version } from '@/types/common';
import { DialogClose } from '../ui/dialog';

interface EditVersionFormProps {
  onSuccess: (version: Version) => void;
}

export const EditVersionForm: React.FC<EditVersionFormProps> = ({
  onSuccess,
}) => {
  const [versionName, setVersionName] = useState('');
  const [url, setUrl] = useState('');

  const [urls, setUrls] = useState<string[]>([]);

  const params = useParams();
  const evaluationId = params.evaluationId as string;

  const createVersion = useCreateVersion();

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createVersion.mutate(
      { evaluationId, name: versionName, urls },
      {
        onSuccess,
      }
    );
  };

  const addUrl = () => {
    if (url !== '') {
      setUrls([...urls, url]);
      setUrl('');
    }
  };

  const deleteUrl = (url: string) => setUrls(urls.filter((u) => u !== url));

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
        <DialogClose asChild>
          <UXButton loading={createVersion.isPending}>Create</UXButton>
        </DialogClose>
      </div>
    </form>
  );
};
