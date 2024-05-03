
import LoginApis from "./ApiUtils";

export const user_Login = async data => {
    try {
        const result = await LoginApis.post('https://sus-api.mangocoders.com/api/mobile/login', data, {
            headers: {'Content-Type': 'application/json'}
        });
        return result;
    } catch(error) {return error.response.data}
};

export const user_Signup = async data => {
    try {
        const result = await LoginApis.post('https://sus-api.mangocoders.com/api/mobile/signup', data, {
            headers: {'Content-Type': 'application/json'}
        });
        return result;
    } catch(error) {return error.response.data;}
};

