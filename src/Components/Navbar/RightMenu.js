import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

class RightMenu extends Component {

    constructor(){
        super();
        this.state = {
            menu : [
                {url: '/',name:'Home'},
                {url: '/profile',name:'Profile'},
                {url: '/portofolio',name:'Portofolio'},
                {url: '/contact',name:'Contact'},
            ]
        }
    }

    render() {
        return (
            <Menu mode={this.props.menuType}>
                {this.state.menu.map((data) => {
                    return(
                        <Menu.Item key={data.name}>
                            <Link to={data.url}>{data.name}</Link>
                        </Menu.Item>
                    )
                })}

            </Menu>
        );
    }
}
export default RightMenu;