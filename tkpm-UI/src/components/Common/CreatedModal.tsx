import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

function CreatedModal() {
    const isFormFilled = useSelector((state: RootState) => state.operatedTripStore.isFormFilled);

    return (
        <div className="modal fade" id="createdModal" tabIndex={-1} aria-labelledby="createdModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-center">
                            <div>
                            {
                                isFormFilled ? (
                                    <i className="bi bi-check-circle" style={{ fontSize: "100px", color: "#8fc4b7" }}></i>
                                ) : (
                                    <i className="bi bi-x-circle" style={{ fontSize: "100px", color: "#c4998f" }}></i>
                                )
                            }
                            </div>
                            <div className="h3 p-4">
                                { isFormFilled ? "Trip is completed" : "Error"}
                            </div>
                            <div className="">
                                { isFormFilled ? "The driver will phone you when he arrive" : "Cannot book trip, please try again"}
                            </div>
                            <div className="py-4">
                                <button
                                    className="rounded btn btn-light text-light"
                                    style={{ backgroundColor: "#77ccef" }}
                                    data-bs-dismiss="modal"
                                >
                                    { isFormFilled ? "Book another trip" : "Retry"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatedModal
