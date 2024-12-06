import EmployeeList from "../../views/pages/Employees/EmployeeList"

import AppHeader from "../../views/layout/Header"
import AppSidebar from "../../views/layout/Sidebar"

import { Route, Routes, Outlet } from "react-router-dom"
import { AdminContextProvider } from "../../library/admin.context"
import { Layout, theme } from "antd";


const { Content } = Layout;
const AppContainer = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const routerObj = [
        {
            id: 1,
            path: "employee-list",
            element: <EmployeeList />
        },

    ]

    const SidebarLayout = () => {
        return (
            <>
                <AdminContextProvider>
                    <Layout >
                        <AppHeader />
                        <Layout >
                            <AppSidebar style={{ height: 'auto' }} />
                            <Content
                                style={{
                                    padding: 24,
                                    minHeight: '100vh',
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                    height: '100vh',
                                }}
                            >
                                <Outlet />
                            </Content>
                        </Layout>
                    </Layout>
                </AdminContextProvider>
            </>
        );
    }
    return (
        <>
            <Routes>
                <Route element={<SidebarLayout />}>
                    {routerObj.map((item) => (
                        <Route key={item.id} path={item.path} element={item.element} />
                    ))}
                </Route>
            </Routes>
        </>
    );
}

export default AppContainer;