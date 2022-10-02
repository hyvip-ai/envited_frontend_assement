import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Row className='home_big'>
        <Col lg={6} className='image'>
          <img
            src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T045936Z&X-Amz-Expires=86400&X-Amz-Signature=46258bf0ffb2c39ddbc402a319c8371cb6e2e9e78bf932cc856f85337184a572&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'
            alt='home_image'
          />
        </Col>
        <Col lg={6} className='description'>
          <h1 className='heading'>
            Imagine if
            <br />
            <span className='text_gradient'>Snapchat</span>
            <br />
            had events
          </h1>
          <p className='subHeading'>
            Easily host and share events with your friends across any social
            media.
          </p>
          <button className='action' onClick={() => navigate('/create')}>
            Create my event
          </button>
        </Col>
      </Row>
      <Row className='home_small'>
        <Row>
          <h1 className='heading'>
            Imagine if
            <br />
            <span className='text_gradient'>Snapchat</span>
            <br />
            had events
          </h1>
          <p className='subHeading'>
            Easily host and share events with your friends across any social
            media.
          </p>
        </Row>
        <Row className='image'>
          <img
            src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T045936Z&X-Amz-Expires=86400&X-Amz-Signature=46258bf0ffb2c39ddbc402a319c8371cb6e2e9e78bf932cc856f85337184a572&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'
            alt='home_image'
          />
        </Row>
        <Row>
          <button className='action' onClick={() => navigate('/create')}>
            Create my event
          </button>
        </Row>
      </Row>
    </>
  );
}

export default Home;
