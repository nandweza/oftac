import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import FormModal from '../../components/formModal/FormModal';
import './admin.css';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Admin = () => {
    const [date, setDate] = useState('');
	const [time, setTime] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState('project');

	useEffect(() => {
		const interval = setInterval(() => {
			const currentDate = new Date();
			
			const newDate = currentDate.toDateString();
			const newTime = currentDate.toLocaleTimeString();

			setDate(newDate);
			setTime(newTime);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

    const openModal = (type) => {
        setFormType(type);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='admin'>
            <Topbar />
            <div className='adminContent'>
                <Sidebar />
                <div className='adminPanel'>
                    <div className='topPanel'>
                        <div className='row py-3'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <h2>Dashboard</h2>
                                <p>oftac-ug.org</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='date'>
                                    <h5>{time}</h5>
                                    <p>{date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='middlePanel'>
                        <div className='gridPanel'>
                            <div className='gridItem'>
                                <h6>Donations</h6>
                                <span>
                                    <VolunteerActivismIcon className='panelIcon'/>
                                    <strong className='gridContent'><AttachMoneySharpIcon className='moneyIcon' />50,000</strong>
                                </span>
                            </div>
                            <div className='gridItem'>
                                <h6>Projects</h6>
                                <span>
                                    <AccountTreeSharpIcon className='panelIcon'/>
                                    <strong className='gridContent'>2 Projects</strong>
                                </span>
                            </div>
                            <div className='gridItem'>
                                <h6>Blog Posts</h6>
                                <span>
                                    <ArticleSharpIcon className='panelIcon'/>
                                    <strong className='gridContent'>12 Posts</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bottomPanel py-5 px-4'>
                        <div className='gridPanel'>
                            <div className='card'>
                                <div className='gridItem p-4 text-center'>
                                    <PostAddIcon className='panelIcon'/>
                                    <Link onClick={() => openModal('project')}>
                                        <h4>Create Project</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='gridItem p-4 text-center'>
                                    <PostAddIcon className='panelIcon'/>
                                    <Link onClick={() => openModal('blog')}>
                                        <h4>Create Post</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='gridItem p-4 text-center'>
                                    <SettingsIcon className='panelIcon'/>
                                    <Link to="/#">
                                        <h4>Settings</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FormModal isOpen={isModalOpen} closeModal={closeModal} formType={formType} />
        </div>
    )
}

export default Admin;
