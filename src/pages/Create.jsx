import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import FloatingInput from '../components/FloatingInput';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FileInputWrapper from '../components/FileInputWrapper';
import DateTimeRange from '../components/DateTimeRange';
import dayjs from 'dayjs';
import shallow from 'zustand/shallow';
import { useEventStore } from '../store';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';

const schema = yup.object().shape({
  eventName: yup.string().trim().required('event name is required'),
  hostName: yup.string().trim().required('Host name is required'),
  location: yup.string().trim().required('Location is required'),
  eventImage: yup.object().required('Photo is required'),
  startTime: yup
    .string()
    .trim()
    .test('before', 'Start time should be before end time', function (val) {
      return this.parent.endTime
        ? dayjs(val).isBefore(dayjs(this.parent.endTime))
        : true;
    })
    .required('Start time is required'),
  endTime: yup
    .string()
    .trim()
    .test('before', 'End time should be After start time', function (val) {
      return this.parent.startTime
        ? dayjs(val).isAfter(dayjs(this.parent.startTime))
        : true;
    })
    .required('End time is required'),
});
const defaultValues = {
  eventName: '',
  hostName: '',
  location: '',
};

function Create() {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const { events, addEvent, updateEvent } = useEventStore(
    (state) => ({
      addEvent: state.addEvent,
      events: state.events,
      updateEvent: state.updateEvent,
    }),
    shallow
  );
  const { handleSubmit, control, trigger, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  useEffect(() => {
    if (search.get('edit')) {
      reset({ ...events[search.get('edit')], eventImage: undefined });
    }
  }, [search]);

  const onSubmit = (formData) => {
    // Actual network call to store in DB
    if (search.get('edit')) {
      const newEvents = [...events];
      newEvents[search.get('edit')] = {
        ...formData,
        id: search.get('edit'),
      };
      updateEvent([...newEvents]);
      toast.success('Event updated successfully');

      navigate(`/event/${search.get('edit')}`);
    } else {
      addEvent({ ...formData, id: events.length });
      toast.success('Event created successfully');
      // Navigate to the page
      navigate(`/event/${events.length}`);
    }
  };

  return (
    <div className='create'>
      <FormProvider control={control}>
        <Form onSubmit={handleSubmit(onSubmit)} className='create_form'>
          <h1>Create Event</h1>
          <FloatingInput
            name='eventName'
            placeholder='Event Name'
            className='mb-3'
          />
          <FloatingInput
            name='hostName'
            placeholder='Host Name'
            className='mb-3'
          />
          <FloatingInput
            name='location'
            placeholder='Location'
            className='mb-3'
          />
          <DateTimeRange
            startDate='startTime'
            endDate='endTime'
            trigger={trigger}
          />
          <FileInputWrapper
            name='eventImage'
            height={200}
            label='Event Image'
          />
          <div className='buttons'>
            <button type='submit' className='action'>
              Next
            </button>
          </div>
        </Form>
      </FormProvider>
    </div>
  );
}

export default Create;
