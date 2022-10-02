import { useEffect, useState, useRef } from 'react';
import { ImImage } from 'react-icons/im';

const initial = { file: {}, preview: '' };

const FileInput = ({ value, onChange, height }) => {
  const [file, setFile] = useState(initial);

  const ref = useRef();
  const handleFile = (e) => {
    const f = e.target.files[0];
    const preview = URL.createObjectURL(f);
    e.target.value = [];
    onChange({ file: f, preview });
  };

  useEffect(() => {
    if (Object.keys(value).length) {
      setFile((prev) => ({
        ...prev,
        file: value.file,
        preview: value.preview,
      }));
    }
  }, [value]);

  return (
    <>
      <div
        className='position-relative border border-primary rounded cursor-pointer w-100 border-box input'
        style={{ height: height || '100%' }}
      >
        {file?.preview ? (
          <img
            src={file.preview}
            className='position-absolute top-0 left-0 block object-contain w-100 h-100 rounded z-0'
            alt='preview_image'
          />
        ) : (
          <div className='position-absolute d-flex flex-column justify-content-center align-items-center z-0 h-full w-full absolute top-0 left-0 block object-cover w-100 h-100 rounded cursor-pointer'>
            <ImImage size={50} />
            <h3 className='pb-3 fw-bold'>Upload</h3>
          </div>
        )}

        <input
          aria-hidden
          type='file'
          onChange={handleFile}
          className='position-absolute top-0 left-0 z-1 block w-100 h-100 opacity-0 rounded cursor-pointer'
          ref={ref}
        />
      </div>
    </>
  );
};

FileInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default FileInput;
