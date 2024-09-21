import axios from 'axios';

import {
  BASE_URL,
  userLogin,
  userRegistration
} from '@/constants/routeConstant';
import { IUserData, IUserLoginData } from './userInterface';

// Creating user to the database 
const handleCreateuserToDB = async (data: IUserData) => {
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

export const UserAPI = {
    handleCreateuserToDB,
    handleUserLogin
}
