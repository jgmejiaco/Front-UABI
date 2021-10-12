import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Registros from "./pages/Registros";
import SideBar from "../../utils/components/SideBar";
import TopBar from "./../../utils/components/TopBar/index";
import Location from "../../utils/components/Location";
import Home from "./pages/Home";
import { PrivateRoute } from "../../utils/components/PrivateRoute";
import { useEffect, useState } from "react";
import Projects from "./pages/Projects";
import CreateRealEstate from "./pages/RealEstate/components/CreateRealEstate";
import CreateProject from "./pages/Projects/components/CreateProject";
import EstateAreas from "./pages/EstateAreas";
import DetailProject from "./pages/Projects/components/DetailProject";
import EditProject from "./pages/Projects/components/EditProject";
import RealEstate from "./pages/RealEstate";
import DetailRealEstate from "./pages/RealEstate/components/DetailRealEstate";
import EditRealEstate from "./pages/RealEstate/components/EditRealEstate";
import Template from "../../utils/components/template";

function MasterTemplate() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
        console.log(isAuthenticated);
    }, []);

    return (
        <Router>
            <Template>
                <Content isAuthenticated={isAuthenticated} />
            </Template>
            {/*<div className="d-flex">*/}
            {/*    <SideBar />*/}
            {/*    <div className="content w-100">*/}
            {/*        <TopBar />*/}
            {/*        <Content isAuthenticated={isAuthenticated} />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Router>
    );
}

const Content = ({ isAuthenticated }) => {
    return (
        <Switch>
            <PrivateRoute path="/" isAuthenticated={isAuthenticated} exact>
                <Home />
            </PrivateRoute>
            <PrivateRoute path="/location" isAuthenticated={isAuthenticated}>
                <Location />
            </PrivateRoute>
            <PrivateRoute path="/registros" isAuthenticated={isAuthenticated}>
                <Registros />
            </PrivateRoute>
            <PrivateRoute path="/adquisitions/real-estates/areas/create" isAuthenticated={isAuthenticated}>
                <EstateAreas />
            </PrivateRoute>
            <PrivateRoute path="/adquisitions/real-estates/create" isAuthenticated={isAuthenticated}>
                <CreateRealEstate name="Crear" />
            </PrivateRoute>
            <PrivateRoute path="/adquisitions/real-estates/edit/:id" isAuthenticated={isAuthenticated}>
                <EditRealEstate />
            </PrivateRoute>

            <Route path="/adquisitions/real-estates/edit/:id">{/* <EditRealEstate /> */}</Route>
            <Route path="/adquisitions/real-estates/:id" component={DetailRealEstate} />

            <PrivateRoute path="/adquisitions/real-estates" isAuthenticated={isAuthenticated}>
                <RealEstate />
            </PrivateRoute>

            <PrivateRoute path="/adquisitions/projects/create" isAuthenticated={isAuthenticated}>
                <CreateProject name="Crear Proyecto" />
            </PrivateRoute>
            <Route path="/adquisitions/projects/edit/:id">
                <EditProject />
            </Route>
            <Route path="/adquisitions/projects/:id" component={DetailProject} />
            <PrivateRoute path="/adquisitions/projects" isAuthenticated={isAuthenticated}>
                <Projects name="Proyectos" />
            </PrivateRoute>
        </Switch>
    );
};

export default MasterTemplate;
