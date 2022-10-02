import { Controller, useFormContext } from 'react-hook-form';
import FileInput from './FileInput';

const Input = ({ name, height, className, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className={className}>
          <label>{label}</label>
          <FileInput
            onChange={onChange}
            name={name}
            value={value}
            height={height}
          />
          {error?.message ? (
            <p className='pt-1 pl-2 text-base text-thin text-danger'>
              {error.message}
            </p>
          ) : null}
        </div>
      )}
    />
  );
};

export default Input;
