import LocationSelection from "../components/Customer/LocationSelection"
import VehicleTypeSelection from "../components/Customer/VehicleTypeSelection"
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
            <LocationSelection/>
          ) :
          (user.roleId) === 3 ? (<div>Driver</div>) :
          (<div>Operator</div>)
        }
    </div>
  )
}

export default Home
