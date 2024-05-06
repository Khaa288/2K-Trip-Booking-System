interface BillResponse {
    id: number,
    tripId: number,
    tollCost: number,
    platformCost: number,
    surCharge: number,
    tripCost: number,
    paymentMethod: string,
    total: number 
}