import React from 'react';
import Form from 'react-bootstrap/Form';
import { useFormContext, Controller } from 'react-hook-form';

function FloatingInput({ name, placeholder, className }) {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          fieldState: { error },
          field: { onChange, ref, value },
        }) => (
          <Form.Group className={className}>
            <Form.Control
              type='text'
              value={value}
              ref={ref}
              placeholder={placeholder}
              className={error ? 'invalid' : ''}
              onChange={(e) => onChange(e.target.value)}
            />
            {error ? (
              <Form.Control.Feedback type='invalid'>
                {error.message}
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
        )}
      />
    </>
  );
}

export default FloatingInput;
