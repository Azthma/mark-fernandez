
import {Row, Col, Card} from 'antd'
import './Experience.css'

function Experience() {
    return (
        <>
             <Row 
                justify='center' 
                align={'start'} 
                className='container'
                gutter={100}
            >
                <Col sm={24} md={24} lg={8} xl={8}><p className='title'>EXPERIENCE</p></Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <Card 
                        title={<p className='text'>Steaward</p>} 
                        bordered={false} 
                        style={{ width: 300 }} 
                        className='card'
                    >
                        <p className='text'>
                        2018-2019
                        </p>
                        <p className='text'>
                        Palacio Del Sur
                        </p>
                    </Card>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8} justify='start'>
                    <Card 
                        title={<p className='text'>Mechanic</p>} 
                        bordered={false} 
                        style={{ width: 300 }} 
                        className='card'
                    >
                        <p className='text'>
                        2019-CURRENT
                        </p>
                        <p className='text'>
                        Self Employed
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Experience;
