import { IRoute } from "../../utils/components/app_router/custom_types";
import {
    CreateProject,
    CreateRealEstate,
    DetailRealEstate,
    EditProject,
    EditRealEstate,
    EstateAreas,
    RealEstate,
    DetailProject,
    Projects,
} from "./views";

const get_routes = (): IRoute[] => {
    return [
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/areas/create/",
            component: EstateAreas,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/create/",
            component: CreateRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/edit/:id/",
            component: EditRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/:id/",
            component: DetailRealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/real-estates/",
            component: RealEstate,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/create/",
            component: CreateProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/edit/:id/",
            component: EditProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects/:id/",
            component: DetailProject,
        },
        {
            exact: true,
            is_private: true,
            can_access: true,
            path: "/acquisitions/projects",
            component: Projects,
        },
    ];
};

export default get_routes;
