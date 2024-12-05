import { Button, Layout } from "antd";
import { useContext } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { AdminContext } from "../../library/admin.context";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useEffect, useState } from "react";

const { Header } = Layout;
const AppHeader = (props) => {
    const [collapsed, setCollapsed] = useContext(AdminContext);
    //thông tin xác thực
    const Creadencial = localStorage.getItem("credencial");
    console.log("check creadencial", Creadencial);
    const Value = JSON.parse(Creadencial);
    const UserName = Value?.email?.split("@")[0];
    const ProfileName = UserName?.charAt(0).toUpperCase() + UserName?.slice(1);
    const [avatar, setAvatar] = useState();

    useEffect(() => {

        // const loadAvatar = async () => {
        //     if (Value) {
        //         const inforUser = await APIs.employees.InfoEmployeeByEmail2(Value.email, Value.password);
        //         setAvatar(inforUser.avatar);
        //     } else setAvatar(null);

        // }
        // loadAvatar();

    }, []);
    const items = [
        {
            key: '1',
            label: (
                <a style={{ textDecoration: "none" }} href="#">
                    My Profile
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a style={{ textDecoration: "none" }} href="#">
                    Settings
                </a>
            ),

        },
        {
            key: '3',
            label: (
                <a style={{ textDecoration: "none" }} href="login"
                    onClick={() => localStorage.removeItem("credencial")}
                >
                    Logout
                </a>
            ),


        },

    ];
    return (
        <>
            <Header className="header">
                <Button
                    type="text"
                    icon={<RiMenu2Line />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '20px',
                        width: 60,
                        height: 60,
                        color: '#FFF'
                    }}
                />


                <div className="dropdown-header">
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <span className="user-img">
                                    <img
                                        src={avatar || 'https://via.placeholder.com/200'}
                                        alt="Sample"
                                        style={{ height: "30px", width: "30px" }}
                                    />
                                </span>
                                {ProfileName ? `${ProfileName}` : "Admin"}
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>

            </Header>
        </>
    )
}
export default AppHeader;