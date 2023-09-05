import './listPosts.css'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

const ListPosts = () => {

    return (
        <div className='admin'>
            <Topbar />
            <div className='adminContent'>
                <Sidebar />
                <div className='adminPanel'>
                    <h2>List of Posts</h2>
                    <p>blog posts here</p>
                </div>
            </div>
        </div>
    );
};

export default ListPosts;
