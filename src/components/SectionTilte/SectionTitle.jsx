import PropTypes from 'prop-types';


const SectionTitle = ({ title }) => {
    return (

        <div className=''>
            <div className='max-w-xl mx-auto my-10 '>

                <h2 className='text-5xl font-bold reddit text-center text-green-400 '> {title}  </h2>
                <div className='border-2 max-w-52 mx-auto my-4 border-orange-400 '></div>
            </div>       
        </div>

    );
};


SectionTitle.propTypes = {
    title: PropTypes.string
}

export default SectionTitle;