import {Row, Col} from 'antd'
import {
    FacebookFilled,
    LinkedinFilled,
    InstagramFilled,
} from '@ant-design/icons';
import './About.css'

function About() {
    return (
        <>
             <Row 
                justify='center' 
                align={'start'} 
                className='container'
                gutter={100}
            >
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <p className='title'>ABOUT ME</p>
                    <p className='text'>
                    To obtain a position that wii enable me to use my strong organizational skill, educational background and ability to work well with people.
                    </p>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <Row justify='center' align='middle' gutter={16} style={{marginTop: 24}}>
                        <Col><a href="https://www.facebook.com/mark.zednanref.733" target="_blank" rel="noopener noreferrer"><FacebookFilled className='icon' /></a></Col>
                        <Col><a href="https://www.facebook.com/mark.zednanref.733" target="_blank" rel="noopener noreferrer"><LinkedinFilled className='icon' /></a></Col>
                        <Col><a href="https://www.instagram.com/markzednanref/" target="_blank" rel="noopener noreferrer"><InstagramFilled className='icon' /></a></Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default About;
