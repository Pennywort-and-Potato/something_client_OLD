import styles from '@/styles/Home.module.scss';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Button, Carousel, Col, Divider, Row, Space, Typography } from 'antd';

import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import { AppstoreOutlined, LeftOutlined, RightOutlined, TableOutlined } from '@ant-design/icons';
import { isEqual } from 'lodash';

const { Text } = Typography

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const largeScreen = {
  xl: 4,
  lg: 6,
  md: 8,
  xs: 12
}

const smallScreen = {
  xl: 6,
  lg: 8,
  md: 12,
  xs: 12
}

function Home() {

  const [ numberCol, setNumberCol] = useState(smallScreen);
  const { xl, lg, md, xs } = numberCol
  const ref = useRef() as MutableRefObject <CarouselRef>

  return (
    <>
    <div >
      <div className={styles.box_slide} style={{position: 'relative'}}>
      <Carousel 
        autoplay
        effect="fade"
        dots={false}
        pauseOnHover={true}
        pauseOnDotsHover={true}
        dotPosition="bottom"
        draggable
        ref={ref}
      >
        {/* {contents.map((content: any) => 
          <div className={styles.image_box} key={content.id} >
              <Image
                src={content.src}
                alt={content.all}
                fill
                sizes='100%'
              >
              </Image>
          </div>
        )} */}
        <div className={styles.box_slideImage}>
          <Image
              style={{ objectFit: 'contain'}}
              fill
              alt='content'
              sizes='100%'
              src="https://statics.pancake.vn/web-media/46/a3/d2/d5/f834d8cf4b6e091878bbf90988caeca8500ef3f9c16c3e8fb4eb23fb.png"
          >

          </Image>
        </div>
        <div className={styles.box_slideImage}>
          <Image
              style={{ objectFit: 'contain'}}
              fill
              alt='content'
              sizes='100%'
              src="https://statics.pancake.vn/web-media/be/f5/bd/aa/8579c5533854275010e2de8ef6bc1740e161e7bde85aa08c1ed8a628.png"
            >
          </Image>
        </div>
      </Carousel>
      
        {/* <Button className={`${styles.button_slider} ${styles.button_prev }`} onClick={() => {
              ref.current.prev()
          }}>
          <LeftOutlined />
        </Button>
       
        <Button className={`${styles.button_slider} ${styles.button_next }`} onClick={() => {
              ref.current.next()
          }}>
          <RightOutlined />
        </Button> */}
      </div> 
    </div>
    <div >
      <div className={styles.content_top}>
        <Text type="success" className={styles.title_banner}>Một số hình ảnh</Text>
        <div className={styles.group_button}>
          <Button
            className={`${styles.btn_smallGrid} ${isEqual(numberCol, smallScreen) && styles.active}`}
            style={{ marginRight: ' 10px'}}
            onClick={() => {
              setNumberCol(smallScreen)
            }}
          >
            <AppstoreOutlined />
          </Button>
          <Button
            className={`${styles.btn_largeGrid} ${isEqual(numberCol, largeScreen) && styles.active}`}
            onClick={() => {
                setNumberCol(largeScreen)
            }}
          >
            <TableOutlined />
          </Button>
        </div>
      </div>
      <Row gutter={[12, 12]}>
       
        {contents.map((content: any) => 
          <Col className="gutter-row" key={content.id} xl={xl} lg={lg} md={md} xs={xs}>
            <div className={styles.image_box}>
              <Image style={{ objectFit: 'contain' }}
                  src={content.src}
                  alt={content.all}
                  fill
                  sizes='100%'
                >
              </Image>
              {/* <div className={styles.box_overlay}>
                <div className={styles.title_image}>Ten image</div>
                <div className={styles.action_image}>
                  <div className={styles.rating_img}></div>
                  <div>
                    <div className={styles.seen_image}></div>
                    <div className={styles.date_image}></div>
                  </div>
                </div>
              </div> */}
            </div>
            
          </Col>
        )}
        {/* <Col className="gutter-row" span={8}>
          <div style={style}></div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col> */}
        
      </Row>
      <div className={styles.banner_list}>
        <div className={styles.banner_cate}>
          <div className={styles.banner_cate_title}>
            <div className={styles.banner_titleCate}>
              <h2 className={styles.banner_h2Title}>
                <span className={styles.span_title}>Explore</span>
                <a href='' style={{ fontWeight: 600, textDecoration: 'none' }}>Topics</a>
              </h2>
            </div>
            <a href="" className={styles.banner_linkCate}>
              <span>View All</span>
            </a>
          </div>
          <div className={styles.banner_cate_content}>
          <Row >
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>AI Art</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/5f/15/67/1a/a0b5076e754758109095f0d254cdc8cd1a0546c984d613eddcee9a9e.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>Digital Art</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/46/e7/8b/fd/7ed7a0590bd0f8bc23a69b30c5dc8f4efd41ef7b287debcc5bbeb1cb.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>Fan Art</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/5d/b7/03/5e/2291a34bb0588ac38c39e89e0af0c600165d9d9cc80879e2daf05d99.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>Photography</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/e2/10/7c/ac/c65b0608ee1081ad7cef320f5e614b52df652d0608ec5fd9336aa7ab.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>Fantasy</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/b9/af/85/4f/9eae7207614b3aa4aa718d19178c67cecfacfb186e92f96612c37742.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
            <Col span={4}>
              <a href="" className={styles.link_imgContent}>
                <h3 className={styles.h3_img}>Anime and Manga</h3>
                <div className={styles.box_img}>
                  <Image
                    fill
                    alt='content'
                    sizes='100%'
                    src="https://statics.pancake.vn/web-media/56/78/c4/57/a5cfd385789efd68688149356613c307d5eae2d69de77e665d83c171.jpg"
                  >

                  </Image>
                </div>
              </a>
            </Col>
          </Row>
          </div>
        </div>
        <div className={styles.banner_sub}></div>
      </div>
    </div>
    </>
  )
}

export default Home
