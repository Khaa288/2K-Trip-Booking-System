import { useGetUsersQuery } from "../../apis/adminApi"
import Header from "../../layouts/Header";

function AdminUsers() {
  const { data: users } = useGetUsersQuery();
  return (
    <div>
      <Header />
      <div className="h3 p-5 text-center">Welcome to 2k Admin</div>
      <div className="h3 px-5 text-start">User List</div>
      <div className="containter p-5">
        <table className="table table-hover border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Identity Card</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.identityCard}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row px-5 py-3" >
        <div className="col text-start">
          <a
            className="navbar-item"
            href="/admin/drivers"
            style={{ textDecoration: "inherit" }}
          >
            <button className="btn btn-light px-5" >Cancel</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AdminUsers;