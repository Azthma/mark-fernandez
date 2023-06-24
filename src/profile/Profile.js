import {Row, Avatar} from 'antd'
import {
    MailFilled,
    PhoneFilled,
    EnvironmentFilled,
} from '@ant-design/icons';
import profile from '../assets/img/mark.jpg'
import './Profile.css'

function Profile() {
    return (
        <>
            <Row justify='center' align={'middle'} className='container'>
                <div>
                    <p className='name'>Mark Mandiade</p>
                    <p className='profession'>FRONT-END DEVELOPER</p>
                    <p className="contact-details"><MailFilled /> fernandezmark143@gmail.com</p>
                    <p className="contact-details margin-top-0"><PhoneFilled /> +63 9530449310</p>
                    <p className="contact-details margin-top-0"><EnvironmentFilled /> Caragasan, Zamboanga City, Philippines</p>
                </div>
            </Row>
            <Row justify='center' align={'middle'} className='avatar-container'>
                <Avatar src={profile} size={250} className='avatar' />
            </Row>
        </>
    );
}

export default Profile;
