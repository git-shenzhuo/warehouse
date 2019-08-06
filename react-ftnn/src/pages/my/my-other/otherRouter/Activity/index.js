import React from 'react'
import {List,Icon} from 'antd'
import './activity.scss'


// 活动中心
class Activity extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[{
                icon:'gift',
                title:'奖励领取'
            },{
                icon:'container',
                title:'免用攻略'
            },{
                icon:'pound-circle',
                title:'模拟炒股'
            }],
            imgs:[{
                    id:1,
                    imgurl:'https://pubimg.futunn.com/201907240120337421073bb0cdb.jpg'
                },{
                    id:2,
                    imgurl:'https://pubimg.futunn.com/2019072401202597dc6a265cea3.jpg'
                },{
                    id:3,
                    imgurl:'https://pubimg.futunn.com/20190724012034016666dc85582.jpg'
                },{
                    id:4,
                    imgurl:'https://pubimg.futunn.com/20190724012034192fcb05e05d5.jpg'
                },{
                    id:5,
                    imgurl:'https://pubimg.futunn.com/2019072401203480e34b3fde45f.jpg'
                },{
                    id:6,
                    imgurl:'https://pubimg.futunn.com/2019072401203421ce7395a1f48.jpg'
                }]
        }
    }
    render(){
        return <div className='activity'>
            <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={this.state.data}
            renderItem={item => (
            <List.Item>
                <p><Icon type={item.icon} theme="twoTone"></Icon></p>
                <p>{item.title}</p>
            </List.Item>
            )}/>
            {
                this.state.imgs.map(item=><img src={item.imgurl} alt={item.id} />)
            }
            
        </div>
    }  
}

export default Activity