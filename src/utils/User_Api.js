import LoginApis from "./apiUtils";

export const user_Login = async data => {
    try{
        const result =await LoginApis ('/user/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            data: data,
        });
        return result;
    }catch(error){
        return error.response.data;
    }
}