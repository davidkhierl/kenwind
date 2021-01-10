import { Button } from '@progress/kendo-react-buttons';
import ComponentCard from '../../components/ComponentCard';
import React from 'react';
import { Upload } from '@progress/kendo-react-upload';
import axios from 'axios';
import { first } from 'lodash';

const UploadPage = () => {
  const [fileBase64, setFileBase64] = React.useState<any>();

  const handleInputFileOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = first(event.currentTarget.files);
    if (file) setFileBase64(await fileToBase64(file));
  };

  const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => resolve(fileReader.result);

      fileReader.onerror = (ev) => reject(ev);
    });

  return (
    <div className='grid flex-grow gap-y-6'>
      <ComponentCard
        title='Basic Usage'
        refLink='https://www.telerik.com/kendo-react-ui/components/upload/'>
        <Upload
          batch={false}
          multiple={true}
          defaultFiles={[]}
          withCredentials={false}
          saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
          removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}
        />
      </ComponentCard>
      <ComponentCard
        title='Custom Base64'
        refLink='https://www.telerik.com/kendo-react-ui/components/upload/'>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log(fileBase64);
            const res = await axios.get('https://localhost:44324/api/TodoItems', {
              headers: {
                'Content-Type': 'text/plain',
              },
            });
            console.log(res.data);
          }}>
          <input type='file' onChange={handleInputFileOnChange} />
          <Button type='submit'>Submit</Button>
        </form>
      </ComponentCard>
    </div>
  );
};

export default UploadPage;
