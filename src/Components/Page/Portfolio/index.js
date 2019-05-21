import React, {Component} from 'react';
import MyCard from "../../MyCard";
import Container from '../Container';
import {Row,Col, Typography} from 'antd';

const { Title, Paragraph } = Typography;


class Portofolio extends Component {

    render() {
        return (
            <Container>
                <center style={{marginTop:50}}><Title>Riwayat Pendidikan</Title></center>
                
            </Container>
        );
    }
}

export default Portofolio;
