import { instance, protectInstance } from "./instance";

//define the user service
const userService = {
    //register a user
    register: async(name,email,password)=>{
        //make a post request to the register enpoints
        return await instance.post('/users', 
        {
            name, 
            username: email, 
            password
        });
        
    },
    login: async(email, password)=>{
        //make a post request to the login enpoints
        return await instance.post('/users/login',
        {
            username: email,
            password
        })
    },
    logout: async()=>{
        //make a post request to the logout enpoints
        return await instance.get('/users/logout');
    },
    getUser: async()=>{
        //make a get request to the get user enpoints
        return await protectInstance.get('/users/me');
    },
    forgetPassword: async(email)=>{
        //make a post request to the forget password enpoints
        return await instance.post('/users/forgetPassword',
        {
            username: email
        })
    },
    resetPassword: async(password, resetToken)=>{
        //make a post request to the reset password enpoints
        return await instance.put(`/users/resetPassword/:${resetToken}`,
        {
            password
        })
    }
}
export default userService