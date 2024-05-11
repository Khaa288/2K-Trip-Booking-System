import { useGetMonthlyRevenueQuery, useGetTripStatusQuery } from "../apis/adminApi"
import "chart.js/auto";
import { MDBContainer } from "mdbreact";
import { Bar, Pie } from "react-chartjs-2";
import Header from "../layouts/Header";

function AdminHome() {
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

  return (
    <div>
      <Header />
      <div className="h3 p-5 text-center">Welcome to 2k Admin</div>
      <MDBContainer>
        <div className="container row">
          <div className="col-6 border border-3 rounded p-3">
            <div className="h3 text-center">Revenue</div>
            <Bar data={revenueData} />
          </div>
          <div className="col-1"></div>
          <div className="col-5 border border-3 rounded p-3">
            <div className="h3 py-2 text-center">Trips</div>
            <Pie className="w-100" data={data} options={pieOptions} />
          </div>
        </div>
      </MDBContainer>

      <div className="row p-5">
        <div className="col text-end">
          <a
            className="navbar-item"
            href="/admin/drivers"
            style={{ textDecoration: "inherit" }}
          >
            <button className="btn btn-light px-3" >Driver Manager</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default AdminHome