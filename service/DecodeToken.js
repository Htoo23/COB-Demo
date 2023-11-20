// utils/tokenUtils.js
import jwtDecode from 'jwt-decode';

// Function to decode the token and extract information
export const _DecodeToken = (token) => {
  try {
    console.log("Got token",token);
    return jwtDecode(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};