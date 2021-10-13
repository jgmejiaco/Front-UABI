import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { CSSProperties } from "react";
import { IItemProject } from "../../../utils/interfaces/components.interfaces";
import { altStatusProject } from "../../../apis/uabi";

const ItemProject = ({ id, name, dependency, creationDate, createdBy }: IItemProject) => {
    let { path, url } = useRouteMatch();
    const history = useHistory();

    const LinkStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
    };

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{dependency}</td>

            <td>{creationDate}</td>
            <td>{createdBy}</td>
            <td>
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                    }}
                >
                    <Link to={`/acquisitions/projects/${id}`} style={LinkStyle}>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </Link>
                    <Link to={`/acquisitions/projects/edit/${id}`} style={LinkStyle}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </Link>
                    <div
                        style={LinkStyle}
                        onClick={async () => {
                            await altStatusProject(parseInt(id));
                        }}
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default ItemProject;
