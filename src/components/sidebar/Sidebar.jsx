import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LaunchIcon from '@mui/icons-material/Launch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import FormModal from "../formModal/FormModal";

export default function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState('project'); 

    const openModal = (type) => {
        setFormType(type);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                        <li className="sidebarListItem active">
                            <HomeIcon className="sidebarIcon" />
                            Home
                        </li>
                        </Link>
                        <Link to="/#">
                        <li className="sidebarListItem">
                            <VolunteerActivismIcon className="sidebarIcon" />
                            Donations
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Projects</h3>
                    <ul className="sidebarList">
                        <Link to="/projects" className="link">
                        <li className="sidebarListItem">
                            <VisibilityIcon className="sidebarIcon" />
                            View
                        </li>
                        </Link>
                        <Link onClick={() => openModal('project')} className="link">
                        <li className="sidebarListItem">
                            <PostAddIcon className="sidebarIcon" />
                            Create
                        </li>
                        </Link>
                        <Link to="/project">
                        <li className="sidebarListItem">
                            <LaunchIcon className="sidebarIcon" />
                            Go to Page
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Blog Posts</h3>
                    <ul className="sidebarList">
                        <Link to="/posts">
                        <li className="sidebarListItem">
                            <VisibilityIcon className="sidebarIcon" />
                            View
                        </li>
                        </Link>
                        <Link onClick={() => openModal('blog')}>
                        <li className="sidebarListItem">
                            <PostAddIcon className="sidebarIcon" />
                            Create
                        </li>
                        </Link>
                        <Link to="/blog">
                        <li className="sidebarListItem">
                            <LaunchIcon className="sidebarIcon" />
                            Go to Page
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Profile</h3>
                    <ul className="sidebarList">
                        <Link to="/#">
                        <li className="sidebarListItem">
                            <ManageAccountsIcon className="sidebarIcon" />
                            My Profile
                        </li>
                        </Link>
                        <Link to="/#">
                        <li className="sidebarListItem">
                            <PersonAddIcon className="sidebarIcon" />
                            Create User
                        </li>
                        </Link>
                        <Link to="/login">
                        <li className="sidebarListItem">
                            <LogoutIcon className="sidebarIcon" />
                            Logout
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <FormModal isOpen={isModalOpen} closeModal={closeModal} formType={formType} />
        </div>
    );
}
