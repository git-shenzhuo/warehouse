import React from 'react'
import './picture.scss'

import { Row ,Col,Icon,Avatar,List,Card} from 'antd';

function MyPicture(){
    return <div className='picture'>
        <Row>
        <Col span={6} style={{textAlign:'center'}}><Avatar size={81} icon="user" /></Col>
        <Col span={18}>
            <h1>用户名昵称 </h1>
            <p>牛牛号：12345678</p>
            <p>
                <Icon style={{margin:'5px'}} type="radar-chart" />
                <Icon style={{margin:'5px'}} type="heat-map" />
                <Icon style={{margin:'5px'}} type="smile" />
                <Icon style={{margin:'5px'}} type="pay-circle" />
                <Icon style={{margin:'5px'}} type="fire" />
                <Icon style={{margin:'5px'}} type="dashboard" />
                <Icon style={{margin:'5px'}} type="aliwangwang" />
            </p>
        </Col>
        </Row>
        <div className='picture-button'>
            <p><span>0</span><span>提醒</span></p>
            <p><span>0</span><span>收藏</span></p>
            <p><span>0</span><span>卡劵</span></p>
            <p><span>0</span><span>课程</span></p>
            <p><span>0</span><span>待办</span></p>
        </div>
    </div>
}

export default MyPicture