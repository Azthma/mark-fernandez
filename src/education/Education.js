
import {Row, Col, Card} from 'antd'
import './Education.css'

function Education() {
    return (
        <>
             <Row 
                justify='center' 
                align={'start'} 
                className='container'
                gutter={100}
            >
                <Col sm={24} md={24} lg={8} xl={8}><p className='title'>EDUCATION</p></Col>
                <Col span={24}></Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <Card 
                        title={<p className='text'>Vocational Course - Automotive Mechanic</p>} 
                        bordered={false} 
                        style={{ width: 300 }} 
                        className='card'
                    >
                        <p className='text'>
                        2015-2017
                        </p>
                        <p className='text'>
                        Western Mindanao State University
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Education;
