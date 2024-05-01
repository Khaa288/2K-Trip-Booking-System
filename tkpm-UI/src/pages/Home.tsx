import TripDriverDetail from "../components/Customer/TripDriverDetail"
import TripDetail from "../components/Customer/TripDetail"
import TripLocationSelection from "../components/Customer/TripLocationSelection"
import TripVehicleTypeSelection from "../components/Customer/TripVehicleTypeSelection"
import Header from "../layouts/Header"

function Home() {
  const user : UserInfo = JSON.parse(localStorage.getItem("user")!)

  return (
    <div>
        <Header/>

        {
          user.roleId === 1 ? (<div>Admin</div>) :
          (user.roleId) === 2 ? (
            //<VehicleTypeSelection/>
            //<TripLocationSelection/>
            //<TripDetail/>
            <TripDriverDetail/>
          ) :
          (user.roleId) === 3 ? (<div>Driver</div>) :
          (<div>Operator</div>)
        }
    </div>
  )
}

export default Home
