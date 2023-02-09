import React, { Component, createRef, RefObject, useRef } from 'react';
import styles from '@/styles/Home.module.scss'
import { Button, Carousel, Col, Row, Switch } from 'antd';
import Image from 'next/image';
import { getImgurAlbum } from '../common/APIs';
import { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface IImage {
  id: string,
  title: string | null,
  description: string | null,
  datetime: number,
  type: string,
  animated: boolean,
  width: number,
  height: number,
  size: number,
  views: number,
  bandwidth: number,
  vote: null,
  favorite: boolean,
  nsfw: null,
  section: null,
  account_url: string | null,
  account_id: number,
  is_ad: boolean,
  in_most_viral: boolean,
  has_sound: boolean,
  tags: any,
  ad_type: number,
  ad_url: string,
  edited: string,
  in_gallery: boolean,
  deletehash: string,
  name: string,
  link: string
}

interface IState {
  theme: boolean,
  dataBanner: IImage[],
  dataSlide: IImage[]
}

export class Home extends Component<any, IState> {
  private ref: RefObject<CarouselRef> | null
  constructor(props: any) {
    super(props)
    this.state = {
      theme: true,
      dataBanner: [],
      dataSlide: []
    }
    this.ref = createRef()
  }

  componentDidMount(): void {
    this.getDataBanner()
    this.getDataSlide()
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>, snapshot?: any): void {
    console.log(this.state.dataSlide)
  }

  getDataBanner = () => {
    getImgurAlbum('SkVnbHp').then(res => this.setState({ dataBanner: res.data }))
  }

  getDataSlide = () => {
    getImgurAlbum('YgDFa1A').then(res => this.setState({ dataSlide: res.data }))
  }

  onChange = (checked: boolean) => {
    this.setState({
      theme: checked
    })
  };

  renderImgBanner = () => {
    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
    const { dataBanner } = this.state

    return dataBanner.map((image: IImage) =>
      <Col className="gutter-row" span={4}>
        <div>
          <a href="" className={styles['link-banner']}>
            <h3 className={styles['h3-banner']}> Art All</h3>
            <div className={styles['box-image']}>
              <Image
                fill
                alt='content'
                src={image.link}
              />
            </div>
          </a>
        </div>
      </Col>
    )
  }

  renderSlider = () => {
    const { dataSlide } = this.state
    return dataSlide.map((image: IImage) =>
      <div>
        <div className={styles['item-slide']}>
          <Image
            fill
            alt='image'
            src={image.link}
          />
          <div className={styles['detail-item']}>
            <div className={styles['overlay-item']}>
              <div className={styles['overlayM']}></div>
            </div>
            <div className={styles['content-item']}>
              <div className={styles['content-box']}>
                <div className={styles['bottom']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  render() {
    const { theme } = this.state

    return (
      <>
        <div className={`${(theme == true) ? 'l-light' : 'l-dark'}`}>
          <div className={`${styles['div-box']} ${styles.theme}`}>
            <div className={styles['div-container']}>
              <div className={styles['top-index']}>
                <Switch
                  defaultChecked
                  className={styles['btn-switch']}
                  checkedChildren={<div>Light</div>}
                  unCheckedChildren={<div>Dark</div>}
                  onChange={this.onChange}
                />
              </div>
              <div className={styles['main-index']}>

                <div className={styles['box-banner']}>
                  <div className={styles['title-banner']}>
                    <h3>Banner Topic</h3>
                    <a href="" className={styles['link-seen']}>View All</a>
                  </div>
                  <div className={styles['content-banner']}>
                    <Row gutter={2}>
                      {this.renderImgBanner()}
                    </Row>
                  </div>
                </div>

                <div className={styles['box-slider']}>
                  <div className={styles['title-slide']}>
                    <div>
                      <h3>Slider Topic</h3>
                    </div>
                  </div>
                  <div className={styles['content-slide']}>
                    <Carousel
                      slidesToShow={5}
                      dots={false}
                      draggable
                      ref={this.ref}
                    >
                      {this.renderSlider()}
                    </Carousel>
                    <Button 
                      className={`${styles['btn-slide']} ${styles['btn-prev']}`}
                      onClick={() => {
                        if (this.ref?.current) {this.ref.current.prev()}
                      }}
                    >
                      <LeftOutlined />
                    </Button>
                    <Button
                      className={`${styles['btn-slide']} ${styles['btn-next']}`}
                      onClick={() => {
                        if (this.ref?.current) {this.ref.current.next()}
                      }}
                    >
                      <RightOutlined />
                    </Button>
                  </div>
                </div>
                
                <div className={styles['box-cate']}>
                  <div className={`${styles['title']} ${styles['color-text']}`}>
                    <h3>Top Topics</h3>
                  </div>
                  <div className={styles['content']}>
                    <ul className={styles['ul']}>
                      <li className={'li'}>
                        <a href="">
                          
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles['bottom-index']}></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home