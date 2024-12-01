import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shoes';

export const fetchShoes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching shoes:", error);
        throw error;
    }
};

export const fetchShoeById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching shoe with ID ${id}:`, error);
        throw error;
    }
};
