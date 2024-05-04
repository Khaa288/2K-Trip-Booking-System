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

interface AcceptTripRequest {
    tripId: number,
    driverId: number
}