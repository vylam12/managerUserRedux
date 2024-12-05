import { useContext, useEffect } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from "antd";
import { AdminContext } from "../../library/admin.context";
import { FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDevices } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
const AppSidebar = () => {
    const { Sider } = Layout;
    const [collapsed] = useContext(AdminContext);
    const [selectedKey, setSelectedKey] = useState('1'); // Theo dõi mục được chọn
    const userType = localStorage.getItem("userType");
    const location = useLocation();

    useEffect(() => {
        const currentIem = menuItems.find(item => item.link === location.pathname);
        if (currentIem) {
            setSelectedKey(currentIem);
        }
    }, [location.pathname]);

    // Xử lý thay đổi mục khi người dùng nhấn vào
    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const adminMenu = [
        {
            key: '2',
            icon: <UserOutlined />,
            label:
                <div className="nav-text-sidebar">
                    <Link to="/employee-list" >
                        List Employee
                    </Link>
                </div>

        },
        {
            key: '3',
            icon: <FaUsers />,
            label:
                <div className="nav-text-sidebar">
                    <Link to="/client-list">
                        Clients
                    </Link>
                </div>
        },
    ]
    const commonItems = [
        {
            key: '1',
            icon: <LuLayoutDashboard />,
            label:
                <div className="nav-text-sidebar">
                    <Link to={userType === "admin" ? "/admin-dashboard" : "/user-dashboard"}>
                        Dashboard
                    </Link>
                </div>
        },
        {
            key: '4',
            icon: <MdOutlineDevices />,
            label:
                <div className="nav-text-sidebar">
                    <Link to="/device">
                        Device
                    </Link>
                </div>
        }
    ]
    const menuItems = userType === "admin"
        ? [...commonItems, ...adminMenu]
        : commonItems;


    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{ backgroundColor: "#4D5154" }}
                className={collapsed ? "" : "show"}
            >

                <Menu
                    theme="dark"
                    style={{ backgroundColor: "#4D5154" }}
                    mode="vertical"
                    selectedKeys={[selectedKey]}  // Theo dõi mục được chọn
                    onClick={handleMenuClick}
                    className="mobile-menu-icon"
                // defaultSelectedKeys={['1']}
                >

                    {menuItems.map(({ key, icon, label }) => (
                        <Menu.Item key={key} icon={icon}>
                            {label}
                        </Menu.Item>
                    ))
                    }
                </Menu>

            </Sider>
        </>
    )
}
export default AppSidebar;