import axios from 'axios';

export const getAllAsks = async () => {
    try {
        const response = await axios.get("http://192.168.0.101:8080/asks/search-all");
        return response.data;
    } catch (error) {
        return {message: error.message}
    }
}