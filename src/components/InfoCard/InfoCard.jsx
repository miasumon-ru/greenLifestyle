import PropTypes from 'prop-types';

const InfoCard = ( {number, infoName}) => {
    return (


            <div className='text-center p-5'>
                <h1 className="text-5xl reddit font-bold"> {number} <sup className="text-yellow-500 text-4xl">+</sup> </h1>
                <p className="roboto mt-2 text-[20px]"> {infoName} </p>

            </div>

     
    );
};

InfoCard.propTypes = {
    number: PropTypes.number,
    infoName : PropTypes.string
}


export default InfoCard;