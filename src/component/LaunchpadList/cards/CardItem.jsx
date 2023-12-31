import React, { useState } from 'react'
import './CardItems.css'
import { Button, Card, Select, Space } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import { AiOutlineLock } from 'react-icons/ai'
import cardProfileone from '../../../Images/cardProfileone.png'
import { Progress } from 'antd';
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom';
import cardProfiletwo from '../../../Images/cardProfiletwo.png'
// import rectangleImage from '../../../Images/Rectangle.png'


const CardItem = () => {
  
    return (
        <>

            <div className='card-main'>
                {/* <div className='rectangle_image'>
                    <img src={rectangleImage} alt="" />
                </div> */}
                <div className='card-title'>
                    <div className='card-image'>
                       <div className='card-image-left'>
                       <img src={cardProfileone} alt="" />
                       </div>
                      <div className='card-image-right'>
                      <img style={{width:"28px"}} src={cardProfiletwo} alt="" />
                      </div>
                    </div>
                    <div className='button_section'>
                        <button className='button_upcoming'><span><AiOutlineLock /></span>Upcoming</button>
                        <div className='safu_audit_kyc_button'>
                            <button className='button_safu'>SAFU</button>
                            <button className='button_audit'>Audit</button>
                            <button className='button_kyc'>KYC</button>
                        </div>
                    </div>
                </div>
                <div className='pepe_ceo'>
                    <h1>PepeCeo</h1>
                    <p>1 BNB = 3,839,999,999,999,998  $PepeCeo</p>
                </div>
                <div className='soft_section'>
                    <p className='soft'>Soft/Hard</p>
                    <p className='_bnb'>25 BNB - 50 BNB</p>
                    <p className='process'>Progress (0.00%)</p>
                </div>
                <Progress percent={0} showInfo={false} status="active" />
                <div className='bnb_scetion'>
                    <p>0 BNB</p>
                    <p>50 BNB</p>
                </div>
                <div className='liquidity_section'>
                    <div className='liquidity_percent'>
                        <p>Liquidity %:</p>
                        <p>Lockup Time:</p>
                    </div>
                    <div className='manual_listing'>
                        <p>51% (Manual listing)</p>
                        <p>Unlocked</p>
                    </div>
                </div>
                <div className='sale_starts_in_section'>
                    <div className='sale_starts'>
                        <p>Sale Starts In:</p>
                        <p>04: 13: 02: 21</p>
                    </div>
                    <div className='view_section'>
                        <div className='bell'><AiOutlineBell /></div>
                        <div className='heart'><AiOutlineHeart /></div>
                        <Link className='view_button' to='/lauchpadlist/item-number'>View</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem