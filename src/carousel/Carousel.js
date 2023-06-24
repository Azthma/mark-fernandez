import { Carousel } from 'antd';
import About from '../about/About';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Skill from '../skill/Skill';
import './Carousel.css'

function CarouselView() {
    return (
        <Carousel className='carousel' dotPosition='top'>
            <div>
            <h3 className='content'><About /></h3>
            </div>
            <div>
            <h3 className='content'><Education /></h3>
            </div>
            <div>
            <h3 className='content'><Experience /></h3>
            </div>
            <div>
            <h3 className='content'><Skill /></h3>
            </div>
        </Carousel>
    );
}

export default CarouselView;