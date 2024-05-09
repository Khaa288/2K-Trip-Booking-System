interface AdminUsers {
    fullName: string,
    identityCard: string,
    phoneNumber: string
}

interface AdminDrivers {
    id: number,
    userName: string, 
    fullName: string,
    identityCard: string,
    email: string,
    phoneNumber: string,
    vehicalType: number,
    verify: boolean
}

interface tripStatus {
    canceled : number,
    completed : number
}

interface addDriver {
    data?: any
    error?: any
}