import React from 'react'
import {Row,Col, Button, Typography} from 'antd';
import Rocket from '../../../images/rocket.png';
import {Link} from 'react-router-dom';
import Container from '../Container';


const { Title, Paragraph } = Typography;


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: 'WELCOME ^v^',
            desc: 'We help companies plan, create and deliver integrated product and brand experiences.'
        }
    }
    render(){
        return(
            <Container>
                <Row type="flex home">
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} className="left">
                        <Title className="title">{this.state.title}</Title>
                        <Paragraph className="desc">{this.state.desc}</Paragraph> 
                        <Button style={{borderRadius:100 }}><Link to='/profile'>About Me</Link></Button>
                    </Col>
                            
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} className="right">
                        <img src={Rocket} alt="Rocket" />                
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;