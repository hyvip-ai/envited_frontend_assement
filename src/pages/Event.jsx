import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import DetailAddress from '../components/DetailAddress';
import DetailDate from '../components/DetailDate';
import { useEventStore } from '../store/index';
import { toast } from 'react-toastify';
function Event() {
  const { id } = useParams();
  const navigate = useNavigate();
  const events = useEventStore((state) => state.events);

  const handleEdit = () => {
    navigate(`/create?edit=${id}`);
  };

  useEffect(() => {
    toast.info('Click on the event name to edit');
  }, []);

  return (
    <Row className='event'>
      <Col lg={6} className='column left'>
        <div className='inner'>
          <h1 className='event_heading' onClick={handleEdit}>
            {events[id].eventName}
          </h1>
          <p className='event_subHeading'>Hosted by {events[id].hostName}</p>
          <DetailDate
            startDate={events[id].startTime}
            endDate={events[id].endTime}
          />
          <DetailAddress address={events[id].location} />
        </div>
      </Col>
      <Col lg={6} className='event_image column right'>
        <img
          src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T074933Z&X-Amz-Expires=86400&X-Amz-Signature=7638d940b5c485a328875551c27ecb4b5493a6a312bf082ef664dee17186d60d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject'
          alt='home_image'
        />
      </Col>
    </Row>
  );
}

export default Event;
