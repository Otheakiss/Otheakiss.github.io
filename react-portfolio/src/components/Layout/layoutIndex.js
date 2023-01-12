import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebarIndex';
import './layoutIndex.scss';


const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;