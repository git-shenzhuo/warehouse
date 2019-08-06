import React from 'react';
import './foot.scss'
import { NavLink } from 'react-router-dom'
class FootFtnn extends React.Component {
    constructor() {
        super();
        this.state = {
            title: [
                {
                    wenzi: "行情",
                    to: "/home",
                    icon: "icon-fund"
                }, {
                    wenzi: "开户",
                    to: "##",
                    icon: "icon-plus"
                }, {
                    wenzi: "咨询",
                    to: "/consult",
                    icon: "icon-filesearch"
                }, {
                    wenzi: "牛牛圈",
                    to: "/clrcle",
                    icon: "icon-chrome"
                }, {
                    wenzi: "我的",
                    to: "/my",
                    icon: "icon-user"
                }
            ]
        }
    }
    render() {

        return (
            <div className="foot">
                {
                    this.state.title.map((item, index) => {
                        return (
                            <NavLink to={item.to} key={index} activeStyle={{ color: "#1e87ce" }} className="navlink">
                                <i className={`iconfont ` + item.icon}></i>
                                <span>{item.wenzi}</span>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}

export default FootFtnn;