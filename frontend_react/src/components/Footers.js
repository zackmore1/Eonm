import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Footers() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>CopyRight &copy; pro shop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footers
