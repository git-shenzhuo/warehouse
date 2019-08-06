import React from 'react'
import {Link} from 'react-router-dom'
import {List,Icon} from 'antd'

// 引入组件
// import Farm from './otherRouter/Farm/index'
// import Quotation from './otherRouter/Quotation'
// import Activity from './otherRouter/Activity'
// import Task from './otherRouter/Task'
// import Invitation from './otherRouter/Invitation'
// import Simulation from './otherRouter/Simulation'
// import Staff from './otherRouter/Staff'



class MyOther extends React.Component{
    constructor(){
        super();
        this.state = {
            navs:[{
                title:'种子农场',
                icon:'bug',
                name:'Farm',
                path:'/farm'
            },{
                title:'我的行情',
                icon:'fund',
                name:'Quotation',
                path:'/quotation'
            },{
                title:'活动中心',
                icon:'gift',
                name:'Activity',
                path:'/activity'
            },{
                title:'任务中心',
                icon:'account-book',
                name:'Task',
                path:'/task'
            },{
                title:'邀请有礼',
                icon:'plus-circle',
                name:'Invitation',
                path:'/invitation'
            },{
                title:'模拟炒股',
                icon:'project',
                name:'Simulation',
                path:'/simulation'
            },{
                title:'企业员工专区',
                icon:'dollar',
                name:'Staff',
                path:'/staff'
            }]
        }
    }
    render(){
        return <div>
        <List style={{backgroundColor:'#fff',fontSize:'20px',fontWeight:'bolder'}}>
            {
                this.state.navs.map(item=>{
                    return <List.Item style={{padding:'12px'}} key={item.name}>
                        <Link to={item.path}>
                        <Icon type={item.icon} theme="twoTone"/>
                        <span style={{marginLeft:'10px',color:'#000'}}>{item.title}</span>
                        </Link>  
                    </List.Item>
                })
            }
        </List>
        {/* <Switch>
            <Route path='/my/farm' component={Farm}></Route>
            <Route path='/my/quotation' component={Quotation}></Route>
            <Route path='/my/activity' component={Activity}></Route>
            <Route path='/my/task' component={Task}></Route>
            <Route path='/my/invitation' component={Invitation}></Route>
            <Route path='/my/simulation' component={Simulation}></Route>
            <Route path='/my/staff' component={Staff}></Route>
        </Switch> */}
    </div>
    }
    
}

export default MyOther