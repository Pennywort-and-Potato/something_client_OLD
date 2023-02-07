import styles from '@/styles/Home.module.css';
import { useEffect, useRef } from 'react';
import { Button, Carousel, Col, Divider, Row } from 'antd';


const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };



function Home() {

  useEffect(() => {
    console.log('render')
  }, [])

  const ref = useRef()

  return (
    <>
    <div >
      <h2 className={styles.title_banner}>Banner Slider</h2>
     
      <Carousel 
        autoplay
        effect="scrollx"
        arrows
        dots={true}
        pauseOnHover={true}
        pauseOnDotsHover={true}
        dotPosition="bottom"
        draggable
        ref={ref}
      >
        {/* <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div> */}
        <div>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            </Col>
            <Col className="gutter-row" span={12}>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            </Col>
            <Col className="gutter-row" span={12}>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
            </Col>
          </Row> 
        </div>
        
      </Carousel>

      <div>
        <Button onClick={() => {
            ref.current.prev()
        }}>Prev</Button>
        <Button onClick={() => {
            ref.current.goTo(0)
        }}>Reset</Button>
        <Button onClick={() => {
            ref.current.next()
        }}>Next</Button>
      </div> 
    </div>
    <div >
      <h2 className={styles.title_banner}>Grid image</h2>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={6}>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        
      </Row>
    </div>
      
    </>
  )
}

export default Home
