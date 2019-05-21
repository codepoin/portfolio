import React, { Component } from 'react';
import RightMenu from './RightMenu'
import { Drawer, Button, Icon } from 'antd';



class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                   
                </div>
                <div className="menuCon">
    
                    <div className="rightMenu">
                        <RightMenu menuType={"horizontal"}/>
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn">
                            <Icon type="star" theme="filled" />
                        </span>
                    </Button>
                    <Drawer
                        title="Other Menu"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <RightMenu menuType={"inline"}/>
                    </Drawer>
                </div>
            </nav>
        );
    }
}
export default Navbar;