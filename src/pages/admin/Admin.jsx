import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './admin.css';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const Admin = () => {
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
                                    <h5>7:58:01PM</h5>
                                    <p>March 17th, 2023</p>
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
                                    <Link to="/#">
                                        <h4>Create Project</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='gridItem p-4 text-center'>
                                    <PostAddIcon className='panelIcon'/>
                                    <Link to="/#">
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
        </div>
    )
}

export default Admin;
