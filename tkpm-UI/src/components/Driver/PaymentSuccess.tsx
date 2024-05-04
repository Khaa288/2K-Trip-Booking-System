import streetMap from '../../assets/street.png';

function PaymentSuccess() {
  return (
    <div className="text-center">
        <div className="p-5">
            <img src={streetMap} alt=""/>
        </div>
        <div>
            <button className="btn btn-light">End Trip</button>
        </div>
    </div>
  )
}

export default PaymentSuccess
