import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; BakeWithLove | Thank you{' '}
            <Link to="https://www.facebook.com/symmetrycafe/">
              Symmetry Cafe & Studio
            </Link>{' '}
            for these Beautiful Photos
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
