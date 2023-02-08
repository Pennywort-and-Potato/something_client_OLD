import { Col, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import Logo from "public/icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="l-container">
        <div className="l-container-margin">
          <Row>
            <Col span={24} md={8}>
                <div className="header--item u-flex-box-center">
                  <Image
                    className="header__logo"
                    width={50}
                    height={50}
                    src={Logo}
                    alt={"Logo"}
                  ></Image>
                </div>
                <div className='u-text-center footer__item'>
                  Not just P&P, but ...
                </div>
            </Col>
            <Col span={24} md={8}>
              <div className='u-text-center footer__item u-text-bold'>GET IN TOUCH</div>
              <div className='u-text-center footer__item'>About</div>
              <div className='u-text-center footer__item'>Contact</div>
            </Col>
            <Col span={24} md={8}>
              <div className='u-text-center footer__item u-text-bold'>JOIN</div>
              <div className='u-text-center footer__item'>Discord</div>
              <div className='u-text-center footer__item'>Group</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Footer