import httpService from "./http.service";
const professionEndpoint = "http://localhost:4000/api/v1/profession/";

const professionService = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};
export default professionService;
