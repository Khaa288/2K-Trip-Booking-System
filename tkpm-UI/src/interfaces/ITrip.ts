interface TripResponse {
    id: number,
    startPosition:  string,
    endPosition: string,
    status: number,
    notes: string,
    bookingTime: string
}

interface TripMutationResponse {
    data?: {
        id: number,
        startPosition:  string,
        endPosition: string,
        status: number,
        notes: string,
        bookingTime: string
    },
    error?: any
}

interface TripWithCustomerResponse {
    customerFullName: string,
    customerPhoneNumber: string,
    id: number,
    startPosition:  string,
    endPosition: string,
    status: number,
    notes: string,
    bookingTime: string   
}

interface AcceptTripRequest {
    tripId: number,
    driverId: number
}