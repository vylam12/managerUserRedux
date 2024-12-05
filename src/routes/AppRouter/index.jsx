import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "../AppContainer";
import Login from "../../views/pages/Authentication/Login";
import Register from "../../views/pages/Authentication/Register";

const AppRouter = () => {

    return (
        <>
            <div>
                <BrowserRouter basename="/app">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/*" element={<AppContainer />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default AppRouter;