import React from 'react';
import {Row,Col} from 'antd';

class Container extends React.Component{

    constructor(props){
        super(props);
       
    }
    render() {

        return (
            <Row guter={8}>
                <Col offset={2} span={20} >
                    {this.props.children} 
                </Col>
            </Row>
        );
    }


}

export default Container;