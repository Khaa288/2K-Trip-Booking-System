import { useSelector } from "react-redux"
import TripDetail from "../components/Customer/TripDetail"
import TripLocationSelection from "../components/Customer/TripLocationSelection"
import TripVehicleTypeSelection from "../components/Customer/TripVehicleTypeSelection"
import { RootState } from "../store/store"
import Header from "../layouts/Header"

function CustomerHome() {
  const isVehicleTypeSelected = useSelector((state: RootState) => state.customerTripStore.IsVehicleTypeSelected);
  const isTripDetailSelected = useSelector((state: RootState) => state.customerTripStore.IsTripDetailSelected);

  if (isTripDetailSelected) {
    return (<div><Header /><TripDetail/></div>)
  }

  if (isVehicleTypeSelected) {
    return (<div><Header /><TripLocationSelection/></div>)
  }

  return (
    (<div><Header /><TripVehicleTypeSelection/></div>)
  )
}

export default CustomerHome
