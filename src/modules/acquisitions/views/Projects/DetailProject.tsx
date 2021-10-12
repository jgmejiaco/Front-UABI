import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { getProject, getRealEstates, getRealEstatesByProject } from "../../../../apis/uabi";
import ItemRealEstate from "../../components/ItemRealEstate";
import {
    IProjectAttributes,
    IProjectResponse,
    IProjectsResponse,
    IRealEstatesResponse,
} from "../../../../utils/interfaces/components.interfaces";

interface IProps {
    id: string;
}

const DetailProject = () => {
    const { id } = useParams<IProps>();
    const [project, setProject] = useState<IProjectAttributes>({
        id: "",
        name: "",
        description: "",
        dependency: "",
        audit_trail: {
            created_by: "",
            created_on: "",
            updated_by: null,
            updated_on: null,
            updated_values: null,
        },
        status: -1,
    });

    const [realEstates, setRealEstates] = useState<any[]>([
        {
            id: -1,
            dependency: "",
            destination_type: "",
            accounting_account: "",
            cost_center: "",

            registry_number: "",
            name: "",
            description: "",

            total_area: -1,
            total_percentage: -1,
            estate_type: "",
            tipology: "",

            project_id: -1,

            audit_trail: {
                created_by: "",
                created_on: "",
                updated_by: null,
                updated_on: null,
                updated_values: null,
            },
            status: -1,
        },
    ]);

    const _getRealEstates = async () => {
        let realEstatesResponse: IRealEstatesResponse | string = await getRealEstatesByProject(id);

        if (typeof realEstatesResponse !== "string") {
            let tmpData = realEstatesResponse.data;

            setRealEstates(tmpData);
        }
    };

    const _getProject = async () => {
        let projectResponse: IProjectResponse | string = await getProject(id);

        if (typeof projectResponse !== "string") {
            let tmpData = projectResponse.data;

            setProject(tmpData);
        }
    };

    useEffect(() => {
        _getProject();
        _getRealEstates();
    }, []);

    return (
        <section className="pt-5" id="texto-superior">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div
                            style={{
                                backgroundColor: "white",
                                borderRadius: 15,
                                padding: "10px 20px",
                            }}
                        >
                            <h5>
                                <b>Proyecto:</b> {project.name}
                            </h5>
                            <hr />
                            <div className="container">
                                <form>
                                    <div className="row mb-5">
                                        <div className="col-3">
                                            <fieldset disabled>
                                                <label htmlFor="disabledTextInput" className="form-label">
                                                    Código Proyecto
                                                </label>
                                                <input
                                                    type="text"
                                                    id="disabledTextInput"
                                                    className="form-control"
                                                    placeholder="1ABC3"
                                                    value={project.id}
                                                    disabled
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Nombre Proyecto
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                value={project.name}
                                                disabled
                                            />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Descripción Proyecto
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                value={project.description}
                                                disabled
                                            />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>

                                        <div className="col-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Destinación
                                            </label>
                                            <input
                                                type=""
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                value={project.dependency}
                                                disabled
                                            />
                                            <div id="emailHelp" className="form-text"></div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row">
                                        <h5>Bienes Inmuebles del Proyecto</h5>
                                        <Link
                                            className="justify-content-end"
                                            style={{
                                                display: "flex",
                                                width: 70,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                textDecoration: "none",
                                            }}
                                            to="/acquisitions/real-estates/create"
                                        >
                                            <i
                                                className="fa fa-plus-circle"
                                                aria-hidden="true"
                                                style={{ fontSize: 20 }}
                                            ></i>
                                            <p>Crear</p>
                                        </Link>
                                    </div>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th scope="col" className="align-top center">
                                                    ID
                                                </th>
                                                <th scope="col" className="align-top">
                                                    Matricula
                                                </th>
                                                <th scope="col" className="align-top">
                                                    Nombre
                                                </th>
                                                <th scope="col" className="align-top">
                                                    Fecha Creación
                                                </th>
                                                <th scope="col" className="align-top">
                                                    Creado por
                                                </th>
                                                <th scope="col" className="align-top">
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                        }}
                                                    >
                                                        Acciones
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                width: "100%",
                                                                justifyContent: "space-around",
                                                            }}
                                                        >
                                                            <p> Ver </p>
                                                            <p> Editar </p>
                                                            <p> Eliminar </p>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {realEstates.map((project) => {
                                                let creationDate = new Date(
                                                    parseFloat(project.audit_trail.created_on)
                                                ).toDateString();
                                                return (
                                                    <ItemRealEstate
                                                        id={project.id}
                                                        matricula={project.registry_number}
                                                        name={project.name}
                                                        creationDate={creationDate}
                                                        createdBy={project.audit_trail.created_by}
                                                    />
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailProject;