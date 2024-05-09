import { useAddDriverMutation, useGetDriversQuery, useGetMonthlyRevenueQuery, useGetRevenueQuery, useGetTripStatusQuery, useGetUsersQuery, useVerifyDriverMutation } from "../apis/adminApi"
import "chart.js/auto";
import { MDBContainer } from "mdbreact";
import { Bar, Pie } from "react-chartjs-2";
import Header from "../layouts/Header";
import { useState } from "react";
import inputHelper from "../helpers/inputHelper";



function AdminHome() {
  //const {data: revenue} = useGetRevenueQuery('05/06/2024');
  const { data: users } = useGetUsersQuery();
  const { data: drivers } = useGetDriversQuery();
  const [driverInfo, setDriverInfo] = useState({
    userName: "",
    fullName: "",
    identityCard: "",
    email: "",
    phoneNumber: "",
    vehicleTypeId: ""
  });

  const [addDriver] = useAddDriverMutation();

  const handleDriverInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const tempData = inputHelper(e, driverInfo);
    setDriverInfo(tempData);
  };

  const handleAddDriver = async () => {
    const result = await addDriver({
      fullName: driverInfo.fullName,
      userName: driverInfo.userName,
      idCard: driverInfo.identityCard,
      email: driverInfo.email,
      phoneNumber: driverInfo.phoneNumber,
      vehicleTypeId: driverInfo.vehicleTypeId
    });
    console.log("Add driver result", result); // Kiểm tra kết quả của mutation
  };

  const { data: tripStatus } = useGetTripStatusQuery();
  const { data: GetmonthlyRevenue } = useGetMonthlyRevenueQuery(2024);
  const data = {
    labels: ["Canceled", "Completed"],
    datasets: [
      {
        data: tripStatus || [0, 0],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
      }
    ]
  };

  const revenueData = {
    labels: Object.keys(GetmonthlyRevenue || {}).map(month => `Month ${month}`),
    datasets: [
      {
        label: "Monthly Revenue",
        data: Object.values(GetmonthlyRevenue || {}),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  const pieOptions = {
    maintainAspectRatio: true,
    aspectRatio: 2
  };

  const [verifyDriver] = useVerifyDriverMutation();

  const handleVerifyDriver = async (driverId: number) => {
    console.log(driverId)
    await verifyDriver({ driverId, verified: true });
  };

  return (
    <div>
      <Header />
      <MDBContainer>
        <div className="container row mt-5">
          <div className="col-6">
            <Bar data={revenueData} />
          </div>
          <div className="col-6">
            <Pie className="w-100" data={data} options={pieOptions} />
          </div>
        </div>
      </MDBContainer>

      <br></br>

      <table className="table">
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

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Fullname</th>
            <th scope="col">Identity Card</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Verify</th>
          </tr>
        </thead>
        <tbody>
          {drivers?.map((driver, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{driver.id}</td>
              <td>{driver.fullName}</td>
              <td>{driver.identityCard}</td>
              <td>{driver.email}</td>
              <td>{driver.phoneNumber}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleVerifyDriver(driver.id)}>
                  Verify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            name="userName"
            value={driverInfo.userName}
            onChange={handleDriverInfo}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Fullname"
              name="fullName"
              value={driverInfo.fullName}
              onChange={handleDriverInfo}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Identity Card"
              name="identityCard"
              value={driverInfo.identityCard}
              onChange={handleDriverInfo}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Email"
              name="email"
              value={driverInfo.email}
              onChange={handleDriverInfo}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Phone Number"
              name="phoneNumber"
              value={driverInfo.phoneNumber}
              onChange={handleDriverInfo}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="VehicalType ID"
              name="vehicleTypeId"
              value={driverInfo.vehicleTypeId}
              onChange={handleDriverInfo}
            />
            <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={() => handleAddDriver()}
                  >
                    Add
                  </button>
          </div>
        </div>
      </div>
    </div>


  );
}
export default AdminHome
