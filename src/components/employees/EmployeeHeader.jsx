
import { IoMdGrid, IoIosAdd } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import AddPopupEmployee from "./AddPopupEmployee";
const EmployeeHeader = () => {
    return (
        <>
            <div class="row row-header-emp">
                <div class="col">
                    <h4>Employee</h4>
                </div>
                <div className="col d-flex justify-content-end">
                    <NavLink
                        exact
                        to="/employee"
                        className={({ isActive }) =>
                            isActive ? "active-link btn-emp-link ml-2 link-spacing" : "btn-emp-link"
                        }
                    >
                        <IoMdGrid />
                    </NavLink>
                    <NavLink
                        exact
                        to="/employee-list"
                        className={({ isActive }) =>
                            isActive ? "active-link btn-emp-link ml-2 link-spacing" : "btn-emp-link ml-2 link-spacing"
                        }
                    >
                        <MdMenu />
                    </NavLink>
                    <AddPopupEmployee />
                </div>

            </div>
        </>
    );
}
export default EmployeeHeader;