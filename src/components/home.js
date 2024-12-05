import { FormAddNew } from "./formAddNew";
import { Header } from "./header";
import { TableUser } from "./tableUser";

const Home = (props) => {
    return (
        <>
            <Header />
            <FormAddNew />
            <TableUser />

        </>
    )
}

export default Home;