import { useSelector } from "react-redux"
import DriverDetail from "../components/Driver/DriverDetail"
import DriverPickUp from "../components/Driver/DriverPickUp"
import DriverTrips from "../components/Driver/DriverTrips"
import PaymentSuccess from "../components/Driver/PaymentSuccess"
import TripPayment from "../components/Driver/TripPayment"
import { RootState } from "../store/store"
import Header from "../layouts/Header"

function DriverHome() {
  const isDriverConnected = useSelector((state: RootState) => state.driverTripStore.isDriverConnected);
  const isDriverAcceptTrip = useSelector((state: RootState) => state.driverTripStore.isDriverAcceptTrip);

  if (isDriverAcceptTrip) {
    return (<div><Header /><DriverPickUp/></div>)
  }

  if (isDriverConnected) {
    return (<div><Header /><DriverTrips/></div>)
  }

  return (
    <div>
      <Header />
      <DriverDetail/>
      <TripPayment/>
      <PaymentSuccess/>
    </div>
  )
}

export default DriverHome
