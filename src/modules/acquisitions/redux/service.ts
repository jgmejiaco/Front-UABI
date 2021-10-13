import { AxiosResponse } from "axios";
import { http } from "../../../config/axios_instances";
import { IRealEstatesResponse } from "../../../utils/interfaces/components.interfaces";
import { acquisition } from "./../../../config/axios_instances/acquisitions";

// http.get(`${""}real-estates/lists`);
const getRealEstates = async () => {
    try {
        // return await acquisition.get("real-estates/lists");
        let URI = `real-estates/lists`;
        let res: AxiosResponse<IRealEstatesResponse> = await acquisition.get(
            URI
        );
        console.log(res);

        return res.data;
    } catch (error) {
        console.error(error);
        return "Error";
    }
};

const services = { getRealEstates };

export default services;
