import logo from '../../assets/images/logo.png'
import './sidebar.css';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const SidebarItem = ({item, activeItem}) => {

    const active = activeItem ? 'active' : ''

    return (
        <div className="sidebar_item">
            <div className={`sidebar_item-inner ${active}`}>
                <i className={item.icon}></i>
                <span>{item.display_name}</span>
            </div>
        </div>
    )
}

const Sidebar = () => {

    const location = useLocation()
    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)

    return(
        <aside className="sidebar">
            <div className="sidebar_logo_container">
                <img src={logo} alt="company logo" className="sidebar_logo" />
            </div>
            <div className="sidebar_menu">
                {sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem item={item} activeItem={activeItem === index}/>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
export default Sidebar;