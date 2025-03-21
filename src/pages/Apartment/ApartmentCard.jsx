import PropTypes from 'prop-types';
import ApartmentCardDetails from './ApartmentCardDetails';


const ApartmentCard = ({ apartment, handleAgreement }) => {

    const { _id, apartment_image, floor_no, block_name, apartment_no, rent } = apartment


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={apartment_image} alt="Shoes" /></figure>
            <div className="card-body">
        
                <div>
                  <ApartmentCardDetails name={"Floor No"} value = {floor_no}></ApartmentCardDetails>
                  <ApartmentCardDetails name={"Block Name"} value = {block_name}></ApartmentCardDetails>
                  <ApartmentCardDetails name={"ApartName No"} value = {apartment_no}></ApartmentCardDetails>
                  <ApartmentCardDetails name={"Rent"} value = {`$${rent}`} ></ApartmentCardDetails>

                </div>

                <div className="card-actions ">
                    <button  onClick={()=> handleAgreement(_id)} className="btn w-full bg-green-500 text-white roboto font-bold hover:bg-green-600"> 
                        Agreement
                         </button>
                </div>
            </div>
        </div>
    );
};



ApartmentCard.propTypes = {
    apartment: PropTypes.object,
    handleAgreement : PropTypes.func
}


export default ApartmentCard;