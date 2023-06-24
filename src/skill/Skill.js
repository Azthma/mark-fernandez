import {Row, Col, Card, Progress} from 'antd'
import './Skill.css'

function Skill() {
    return (
        <>
             <Row 
                justify='center' 
                align={'start'} 
                className='container'
                gutter={100}
            >
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <p className='title'>TECHNICAL SKILL</p>
                    <Card 
                        bordered={false} 
                        style={{ width: 300 }} 
                        className='card'
                    >
                        <Row>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>HTML</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>CSS</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Javascript</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>ReactJs</p></Col>
                                    <Col><p className='text'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Git</p></Col>
                                    <Col><p className='text'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} className='last-row' /></Col>
                        </Row>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <p className='title'>SOFT SKILL</p>
                    <Card 
                        bordered={false} 
                        style={{ width: 300 }} 
                        className='card'
                    >
                        <Row>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Critical Thinking</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Analytical</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Problem Solving</p></Col>
                                    <Col><p className='text'>90%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={90} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Time Management</p></Col>
                                    <Col><p className='text'>80%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={80} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Teamwork</p></Col>
                                    <Col><p className='text'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                            <Col span={24}>
                                <Row justify='space-between'>
                                    <Col><p className='text'>Adaptability</p></Col>
                                    <Col><p className='text'>70%</p></Col>
                                </Row>
                            </Col>
                            <Col span={24}><Progress percent={70} showInfo={false} trailColor={'white'} /></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Skill;
