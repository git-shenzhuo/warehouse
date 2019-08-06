import React from 'react';
import { connect } from 'react-redux'//redux的使用
import './index.scss'
class Home extends React.Component {

    render() {
        return (
            <div className="outside">
                <div className="inside">
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => {
    return state;
})(Home);