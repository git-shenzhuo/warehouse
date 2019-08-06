import React from 'react';
import 'antd/dist/antd.css'


import MyPicture from './my-picture'
import MyAccount from './my-account'
import MyOther from './my-other'
import MyKefu from './my-kefu'

// 引入组件

class My extends React.Component {
    render() {
        return (
                <div style={{backgroundColor:'#f6f6f6',color:'#000',fontSize:'20px',paddingBottom:'30px'}}>       
                    <MyPicture></MyPicture>
                    <MyAccount></MyAccount>
                    <MyOther></MyOther>
                    <MyKefu></MyKefu>
                </div>
        )
    }
}

export default My;