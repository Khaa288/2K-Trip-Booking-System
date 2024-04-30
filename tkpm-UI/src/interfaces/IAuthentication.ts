// Api Responses
interface LoginResponse {
    data?: {
        id: number,
        username: string,
        roleId: number
    },
    error?: any
}

interface RegisterCustomerResponse {
    data?: any
    error?: any
}

interface RegisterDriverResponse {
    data?: any
    error?: any
}

// Local Storage object
interface UserInfo {
    id: number,
    username: string,
    roleId: number
}