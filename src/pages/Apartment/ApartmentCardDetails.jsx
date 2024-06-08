import PropTypes from 'prop-types';

const ApartmentCardDetails = ( {name, value}) => {
    return (
        <div>

            <p className='text-[18px] text-gray-500 font-semibold roboto'> {name} : {value} </p>
            <div className='border border-dashed my-2'></div>

        </div>
    );
};


ApartmentCardDetails.propTypes = {
    name: PropTypes.string,
    value : PropTypes.string
}
export default ApartmentCardDetails;