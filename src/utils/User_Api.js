import axios from "axios";

export const user_Login = async data => {
    try{
        const result = axios.post('https://sus-api.mangocoders.com/api/mobile/login',{
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


// export const fetch_UserData = async () => {
//     try {
//         const result = await axios.get('https://sus-api.mangocoders.com/api/mobile/userdata');
//         return result.data;
//     } catch (error) {
//         return error.response.data;
//     }
// }

// // Function to update user data
// export const update_UserData = async (userId, newData) => {
//     try {
//         const result = await axios.put(`https://sus-api.mangocoders.com/api/mobile/userdata/${userId}`, newData, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         return result.data;
//     } catch (error) {
//         return error.response.data;
//     }
// }

// // Function to delete user account
// export const delete_UserAccount = async userId => {
//     try {
//         const result = await axios.delete(`https://sus-api.mangocoders.com/api/mobile/user/${userId}`);
//         return result.data;
//     } catch (error) {
//         return error.response.data;
//     }
// }