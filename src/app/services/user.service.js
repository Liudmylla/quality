import httpService from "./http.service";
// const userEndpoint = "http://localhost:4000/api/v1/user/";
const userEndpoint = "user/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    }
};
export default userService;
