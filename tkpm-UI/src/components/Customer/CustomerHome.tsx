import { useSelector } from "react-redux"
import TripDetail from "./TripDetail"
import TripDriverDetail from "./TripDriverDetail"
import TripLocationSelection from "./TripLocationSelection"
import TripVehicleTypeSelection from "./TripVehicleTypeSelection"
import { RootState } from "../../store/store"

function CustomerHome() {
  const isVehicleTypeSelected = useSelector((state: RootState) => state.customerTripStore.IsVehicleTypeSelected);
  const isTripDetailSelected = useSelector((state: RootState) => state.customerTripStore.IsTripDetailSelected);
  const isTripDetailConfirmed = useSelector((state: RootState) => state.customerTripStore.IsTripDetailConfirmed);

  if (isTripDetailConfirmed) {
    return <TripDriverDetail/>
  }

  if (isTripDetailSelected) {
    return <TripDetail/>
  }

  if (isVehicleTypeSelected) {
    return <TripLocationSelection/>
  }

  return (
    <TripVehicleTypeSelection/>
  )
}

export default CustomerHome
