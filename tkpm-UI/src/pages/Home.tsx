import CustomerHome from "./CustomerHome"
import DriverHome from "./DriverHome"
import Header from "../layouts/Header"

function Home() {
  const user : UserInfo = JSON.parse(localStorage.getItem("user")!)
  
  return (
    <div>
        <Header/>

        {
          user.roleId === 1 ? (<div>Admin</div>) :
          (user.roleId) === 2 ? (
            <CustomerHome/>
          ) :
          (user.roleId) === 3 ? (
            <DriverHome/>
          ) :
          (<div>Operator</div>)
        }
    </div>
  )
}

export default Home
