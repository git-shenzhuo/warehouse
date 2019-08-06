import React from 'react'
import {Menu} from 'antd'
import {Route} from 'react-router-dom'
import Hong from './Hong'



// 我的行情
class Quotation extends React.Component{
    constructor(){
        super();
        this.state = {
            navs:[{
                title:'港股',
                name:'Hong',
                content:{
                    url1:'https://www.futunn.com/images/download/1.jpg',
                    url2:'https://www.futunn.com/images/download/1.jpg',
                    url3:'https://www.futunn.com/images/download/1.jpg',
                    url4:'https://www.futunn.com/images/download/1.jpg',
                    url5:'https://www.futunn.com/images/download/1.jpg',
                    url6:'https://www.futunn.com/images/download/1.jpg',
                    h_1:'关于高级行情',
                    h_2:'报价速度',
                    h_3:'逐笔成交',
                    h_4:'买卖十档',
                    h_5:'经纪队列',
                    p_1:'毫秒级报价速度，速度提升5-10倍',
                    p_2:'多空双方的每笔交易明细',
                    p_3:'十档深度报价与委托量',
                    p_4:'看清机构控盘行为',
                    p_5:'BMP全称为“港股基本报价服务（Basic MarKet Prices Service）”，是香港交易所提供的基于证劵市场的基本报价服务'
                }
            },{
                title:'美股',
                name:'Stock',
                content:{
                    url1:'https://www.futunn.com/images/download/1.jpg',
                    url2:'https://www.futunn.com/images/download/1.jpg',
                    url3:'https://www.futunn.com/images/download/1.jpg',
                    url4:'https://www.futunn.com/images/download/1.jpg',
                    url5:'https://www.futunn.com/images/download/1.jpg',
                    url6:'',
                    h_1:'关于高级行情',
                    h_2:'报价速度',
                    h_3:'逐笔成交',
                    h_4:'高级买卖档',
                    h_5:'',
                    p_1:'毫秒级报价速度，速度提升5-10倍',
                    p_2:'多空双方的每笔交易明细',
                    p_3:'40档深度报价与委托量',
                    p_4:'',
                    p_5:'美股深度摆盘支持NASDAQ TotalView、NYSE OpenBook、NYSE ArcaBook，是各个交易所的实时挂单报价数据'
                }
            },{
                title:'沪深',
                name:'Shang',
                content:{
                    url1:'https://www.futunn.com/images/download/1.jpg',
                    url2:'https://www.futunn.com/images/download/1.jpg',
                    url3:'https://www.futunn.com/images/download/1.jpg',
                    url4:'https://www.futunn.com/images/download/1.jpg',
                    url5:'https://www.futunn.com/images/download/1.jpg',
                    url6:'https://www.futunn.com/images/download/1.jpg',
                    h_1:'关于高级行情',
                    h_2:'报价速度',
                    h_3:'逐笔成交',
                    h_4:'买卖十档',
                    h_5:'委托明细',
                    p_1:'毫秒级报价速度，速度提升5-10倍',
                    p_2:'多空双方的每笔交易明细',
                    p_3:'十档深度报价与委托量',
                    p_4:'买卖一档的委托明细',
                    p_5:''
                }
            }],
            current:''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        this.setState({
            current:e.key
        })
    }
    componentWillMount(){
        this.props.history.push({
            pathname:this.props.match.url + '/hong',
            search:'?n='+this.state.navs[0].name,
            state:this.state.navs[0].content  
        })
        this.setState({
            current:'Hong'
        })
    }
    render(){
        let {history,match} = this.props
        // console.log(this.props);
        
        return <div style={{textAlign:'center'}}>
        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
            {
                this.state.navs.map(item=>{
                    return  <Menu.Item key={item.name} onClick={()=>{
                        history.push({
                            pathname:match.url + '/hong',
                            search:'?n='+item.name,
                            state:item.content  
                        })
                    }}>{item.title}</Menu.Item>
                })
            }
        </Menu>
        <Route path={match.url + '/hong'} component={Hong}/>
    </div>
    }
}

export default Quotation