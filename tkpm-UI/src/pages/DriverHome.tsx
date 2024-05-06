import { useSelector } from "react-redux"
import DriverDetail from "../components/Driver/DriverDetail"
import DriverTrips from "../components/Driver/DriverTrips"
import { RootState } from "../store/store"
import Header from "../layouts/Header"

function DriverHome() {
  const isDriverConnected = useSelector((state: RootState) => state.driverTripStore.isDriverConnected);
  const isConnecting = sessionStorage.getItem("isConnecting");

  if (isConnecting === "true" && isDriverConnected === false) {
    return (<div><Header /><DriverTrips/></div>)
  }

  if (isConnecting === "true" && isDriverConnected === true) {
    return (<div><Header /><DriverTrips/></div>)
  }

  if (isConnecting === "false" && isDriverConnected === false) {
    return (<div><Header /><DriverDetail/></div>)
  }

  return (
    <div>
      <Header />
      <DriverDetail/>
    </div>
  )
}

export default DriverHome
