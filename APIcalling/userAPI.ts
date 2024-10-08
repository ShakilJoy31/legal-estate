import axios from 'axios';

import {
  BASE_URL,
  userEmailVerification,
  userLogin,
  userRegistration
} from '@/constants/routeConstant';
import { IUserData, IUserLoginData } from './userInterface';

// Creating user to the database 
const handleCreateuserToDB = async (data: IUserData) => {
  console.log(data)
  const axiosInstance = axios.create({
      baseURL: BASE_URL
    });
  try {
    const response = await axiosInstance.post(userRegistration, data);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};


const handleUserLogin = async (data: IUserLoginData) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL
      });
    try {
      const response = await axiosInstance.post(userLogin, data);
      return response.data;
    } catch (error) {
      console.error('Error login user:', error);
    }
}


const handleUserEmailVerification = async (email: string) => {
    const axiosInstance = axios.create({
        baseURL: BASE_URL
      });
    try {
      const response = await axiosInstance.post(userEmailVerification, {email});
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error email verification:', error);
    }
}

export const UserAPI = {
    handleCreateuserToDB,
    handleUserLogin,
    handleUserEmailVerification
}
