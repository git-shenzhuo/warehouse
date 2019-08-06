import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './head.scss'
class HeadFtnn extends React.Component {
    constructor() {
        super();
        this.state = {
            fontok: true
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        <Icon type="search" style={{ marginRight: '16px' }} key="0" />,
                        <span className="iconfont icon-message" style={{ fontSize: "22PX" }} key="1"></span>
                    ]}>
                    <span key="0" style={{ marginRight: "16px" }} className={this.state.fontok ? 'fontChange' : ''} >自选</span>
                    <span key="1" className={!this.state.fontok ? 'fontChange' : ''} > 市场</span>
                </NavBar>
            </div>
        )
    }
}

export default HeadFtnn;