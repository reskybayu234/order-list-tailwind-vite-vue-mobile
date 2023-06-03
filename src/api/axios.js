import axios from "axios";
import { useAuthStore } from "../store/auth";

axios.interceptors.request.use((request) => {
    
  const useStore = useAuthStore();

  request.headers.Authorization = `Bearer ${useStore.accessToken}`;

  return request;
});
