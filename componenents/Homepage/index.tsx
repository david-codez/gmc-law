import React from 'react'
import text from '../../translation/en.json'
import { Col, Row } from 'reactstrap'
import captain from '../../public/images/captain.jpg'
import Image from 'next/image'

type Props = {}

function Homepage({}: Props) {
  return (
    <div>
      <Row>
        <h1>{text.Home.title}</h1>
      </Row>
      <Row>
        <Col>
          <Image src={captain} alt='the captain' width={300} height={400} />
        </Col>
      </Row>
    </div>
  )
}

export default Homepage
