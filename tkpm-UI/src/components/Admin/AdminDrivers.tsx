import { useAddDriverMutation, useGetDriversQuery, useVerifyDriverMutation } from "../../apis/adminApi";
import Header from "../../layouts/Header";
import { useState } from "react";
import inputHelper from "../../helpers/inputHelper";
import { useGetVehicleTypesQuery } from "../../apis/vehicleTypeApi";


function AdminDrivers() {
    const { data: drivers } = useGetDriversQuery();
    const { data: vehicleTypes } = useGetVehicleTypesQuery();
    const [registerVehicle, setRegisterVehicle] = useState({ id: 0, name: "" });
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

    const handleVehicleTypeChange = (id: any, name: any) => {
        setRegisterVehicle({ id, name });
        setDriverInfo(prevState => ({
            ...prevState,
            vehicleTypeId: id
        }));
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

    const [verifyDriver] = useVerifyDriverMutation();

    const handleVerifyDriver = async (driverId: number) => {
        console.log(driverId)
        await verifyDriver({ driverId, verified: true });
    };

    return (
        <div>
            <Header />
            <div className="h3 p-5 text-center">Welcome to 2k Admin</div>

            <div className="container mt-5 border border-3 p-5 rounded">
                <div className="h3 p-3 text-start">*Create a new driver</div>
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

                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle text-secondary form-control form-control-md"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                style={{ backgroundColor: "white", textAlign: "left" }}
                            >
                                {registerVehicle.name !== "" ? registerVehicle.name : "Vehicle Type"}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    vehicleTypes?.map((value) => {
                                        return (
                                            <button
                                                className="dropdown-item"
                                                key={value.id}
                                                id={value.id.toString()}
                                                value={value.name}
                                                onClick={() => handleVehicleTypeChange(value.id, value.name)}
                                            >
                                                {value.name}
                                            </button>)
                                    })
                                }
                            </div>
                            <button
                                className="btn btn-outline-light btn-lg px-5 mt-5"
                                type="submit"
                                onClick={() => handleAddDriver()}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containter p-5">
                <table className="table table-hover border">
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
                                    {driver.isVerified ? (
                                        <span className="text-success">Verified</span>
                                    ) : (
                                        <button className="btn btn-primary" onClick={() => handleVerifyDriver(driver.id)}>
                                            Verify
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="row px-5 py-3" >
                <div className="col text-start">
                    <a
                        className="navbar-item"
                        href="/admin/home"
                        style={{ textDecoration: "inherit" }}
                    >
                        <button className="btn btn-light px-5" >Cancel</button>
                    </a>
                </div>
                <div className="col text-end">
                    <a
                        className="navbar-item"
                        href="/admin/users"
                        style={{ textDecoration: "inherit" }}
                    >
                        <button className="btn btn-light px-5" >User Manager</button>
                    </a>
                </div>        
            </div>    
        </div>
    );
}
export default AdminDrivers;