import { createPinia } from "pinia";

const pinia = createPinia()

export const useAuthStore = pinia.store('auth',{
 state : () => ({
    accessToken : null,
    refreshToken : null,
    
 })
})