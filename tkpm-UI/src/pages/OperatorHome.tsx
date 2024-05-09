import { useGetOperatedTripQuery } from "../apis/tripApi"
import Header from "../layouts/Header"
import * as maptilerClient from '@maptiler/client'
import { GeocodingSearchResult } from "@maptiler/sdk";
import { useLazyValidateLocationQuery } from "../apis/locationApi";
import ConfirmLocateModal from "../components/Operator/ConfirmLocateModal";
import { useDispatch } from "react-redux";
import { setLocationCoordinates, setLocationLocated, setLocationName, setOperatedTrip } from "../store/operatedTripSlices";

function OperatorHome() {
  const { data: operatedTrip } = useGetOperatedTripQuery();
  const dispatch = useDispatch();
  const [validate] = useLazyValidateLocationQuery();

  const handleCoordinateClick = async (locationName: string, operatedTripId: number) => {
    const location : GeocodingSearchResult = await maptilerClient.geocoding.forward(locationName, {
      apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
      limit: 1,
      country: ['vn']
    });
    console.log(location.features[0].place_name)

    const response = await validate(location.features[0].place_name);
    
    //const response = await validate('HCM1');
    dispatch(setLocationLocated(response.data!));
    dispatch(setLocationCoordinates(location.features[0].geometry.coordinates));
    dispatch(setLocationName(location.features[0].place_name));
    dispatch(setOperatedTrip(operatedTripId));
  };

  return (
    <div>
      <Header />
      <ConfirmLocateModal/>
      <div className="containter row  px-5 py-3">
        <div className="col-12">
          <div className="bg-light h-100 p-3 rounded table-responsive">
            <div className="h3 text-center py-3">Operated Trip</div>

            <table className="table table-hover border">
              <thead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">Location</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Booking Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  operatedTrip?.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.customerName}</td>
                        <td>{value.customerLocationName}</td>
                        <td>{value.customerPhoneNumber}</td>
                        <td>{value.notes}</td>
                        <td>{value.bookingTime}</td>
                        <td>
                          <button 
                            className="btn btn-outline-success"
                            value={value.customerLocationName}
                            onClick={() => handleCoordinateClick(value.customerLocationName, value.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#confirmModal"
                          >
                            Coordinate
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatorHome
