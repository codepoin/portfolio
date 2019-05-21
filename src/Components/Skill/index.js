import React from 'react';

import {Row,Col, Typography,Progress} from 'antd';
import Container from '../Page/Container';

const { Title, Paragraph } = Typography;


class Skill extends React.Component {

    constructor(){
        super();
        
        this.state = {
            skill : [
                {percentage: '100',name:'HTML'},
                {percentage: '100',name:'CSS'},
                {percentage: '100',name:'Javascript'},
                {percentage: '100',name:'ReactJS'}
            ]
              
        }
    }
    render() {

        return(
            <React.Fragment>
                <div className="skill">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <center><Title>Skill</Title></center>
                </Col>
                {this.state.skill.map((data) => {
                    return(
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} className="box-center">
                                <center>
                                    <Progress type="circle" percent={data.percentage} />
                                    <br /> <br />
                                    <Title level={3}>{data.name}</Title>
                                </center>
                            </Col>
                        )
                    })}
    
                
                    
                    {this.state.skill.map((data) => {
                        return(
                            <Col xs={24} sm={24} md={6} lg={12} xl={12} >
                                <Title level={3} className="progress-title">{data.name}</Title>
                                <Progress percent={50} size="big" status="active" className="progress-bar" />     
                            </Col>
                        )
                    })}
                
                </div>

            </React.Fragment>
        );
    }
}

export default Skill;