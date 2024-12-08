import axios from "axios";

const api = axios.create({
    baseURL: "https://magicapi-production.up.railway.app/api/",
});

const AllHistory = async () => {
    const response = await api.get("history/all");
    return response?.data?.data;
}


const addHistory = async (data: any) => {
    const response = await api.post("history", data);
    return response?.data?.data;
}

const toggleActive = async (id: string, active: boolean) => {
    const response = await api.post("history/active", { id, active });
    return response.data
}

const togglePremium = async (id: string, active: boolean) => {
    const response = await api.post("history/premium", { id, isPremium: active });
    return response.data
}


const deleteHistory = async (id: string) => {
    const response = await api.post("history/delete", { id });
    return response.data
}
const editHistory = async (data: any) => {
    const response = await api.post(`history/update`, data);
    return response.data
}


export { AllHistory, addHistory, toggleActive, togglePremium, deleteHistory, editHistory };

export default api;
