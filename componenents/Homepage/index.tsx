import React from 'react'
import text from '../../translation/en.json'
import { Col, Row } from 'reactstrap'
import captain from '../../public/images/captain.jpg'
import headshot from '../../public/images/gannon-headshot.png'
import Image from 'next/image'
import { Box, Paper } from '@mui/material'

type Props = {}

function Homepage({}: Props) {
  return (
    <div>
      <Row>
        <h1>{text.Home.title}</h1>
      </Row>
      <Row>
        <Col>
          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                width: 300,
                height: 100,
              },
            }}
          >
            <Paper className='tester' elevation={5} />
          </Box>
        </Col>
        <Col>
          <Box
            sx={{
              '& > :not(style)': {},
            }}
          >
            <Image src={headshot} alt='the captain' width={302} height={403} />
          </Box>
        </Col>
      </Row>
    </div>
  )
}

export default Homepage
