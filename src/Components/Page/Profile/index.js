import React, {Component} from 'react';
import Container from '../Container';
import {Row,Col, Typography} from 'antd';
import Rocket from '../../../images/rocket.png';
import Skill from '../../Skill';


const { Title, Paragraph } = Typography;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Ade Dwi Putra'
        }
    }
    render() {
        return (
        <React.Fragment>
            <Container>
                <div class="profile">
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} className="left">
                        <Title className="title">About Me</Title>
                        <Paragraph className="desc">
                        In this special moment, I would like to introduce myself. I am Ade Dwi Putra. You can call me Ade. I was born on December 30rd, 1998 in Pangkalpinang, Bangka-Belitung Island. I live at Al-Hayati I street Est Kace, with my parents and two siblings (one older brother and one younger sister). So, I am the second child in my family. The school subjects that I love are Programming and Science. They are so challenging but also fun. I love reading Science Fiction books because they are very imaginative. They are full of innovative and creative ideas. Science Fiction movies such as Interstellar, Avatar, Star Wars are the movies I enjoy watching because they are so awesome. Besides, I love travelling, listening to music and playing games. I usually play games with my siblings and sometimes with my parents. We have so much fun. That’s all about myself. Thank you for your attention
                        </Paragraph> 
                     
                    </Col>
                            
                    <Col xs={24} sm={24} md={24} lg={24} xl={12} className="right">
                        <img src={Rocket} alt="Rocket" />                
                    </Col>
                </div>

               
            </Container>

            <Container>
                <Skill />
            </Container>
        </React.Fragment>
        );
    }
}

export default Profile;
