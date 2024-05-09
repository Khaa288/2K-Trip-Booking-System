import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { OperatorMap } from "./OperatorMap";
import { useAddLocationMutation } from "../../apis/locationApi";
import { useGetDriversQuery } from "../../apis/driverApi";
import { useState } from "react";
import { useCoordinatesDriverMutation } from "../../apis/tripApi";

function ConfirmLocateModal() {
    const isLocationLocated = useSelector((state: RootState) => state.operatedTripStore.isLocationLocated);
    const locationName = useSelector((state: RootState) => state.operatedTripStore.locationName);
    const operatedTripId = useSelector((state: RootState) => state.operatedTripStore.operatedTripId);

    const [driver, setDriver] = useState({ Id: 0, Username: ""});

    const [addLocation] = useAddLocationMutation();
    const [coordinateDriver] = useCoordinatesDriverMutation();
    const { data: drivers } = useGetDriversQuery();

    const handleLocateClick = async () => {
        await addLocation(locationName);
    }

    const handleCoordinateClick = async () => {
        console.log(operatedTripId)
        console.log(driver.Id)

        await coordinateDriver({operatedTripId: operatedTripId, driverId: driver.Id});
        setDriver({ Id: 0, Username: ""})
    }

    return (
        <div>
            <div className="modal fade" id="confirmModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {isLocationLocated ? "Coordinate driver?" : "Locate this location?"}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setDriver({ Id: 0, Username: ""})}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {isLocationLocated ?
                                <div>
                                    <div className="row p-2">
                                        <div className="col-6">Choose a driver to coordinate</div>
                                        <div className="dropdown col-6 text-end">
                                            <button
                                                className="btn dropdown-toggle text-secondary"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                style={{ backgroundColor: "white", textAlign: "left" }}
                                            >
                                                { driver.Username == "" ? "Choose" : "Driver " + driver.Username}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {
                                                drivers?.map((value) => {
                                                    return (
                                                        <button
                                                            className="dropdown-item"
                                                            key={value.id}
                                                            id={value.id.toString()}
                                                            value={value.username}
                                                            onClick={() => setDriver({Id: value.id, Username: value.username})}
                                                        >
                                                            Driver: {value.username}
                                                        </button>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                    <OperatorMap />
                                </div>
                                : "This location is not located yet. Do you want to locate it ?"}
                        </div>
                        <div className="modal-footer">
                            {
                                isLocationLocated ? 
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        data-bs-dismiss="modal"
                                        onClick={() => handleCoordinateClick()}
                                    >
                                        Coordinate
                                    </button>

                                    : <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => handleLocateClick()}
                                    >
                                        Locate
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmLocateModal
