

import { Link } from 'react-router-dom';
import './ErrorPage.css'


const ErrorPage = () => {
    return (
        <div>


            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2 text-3xl my-4 font-this.state.">
                                        Look like you are lost !!!
                                    </h3>

                                    <p className='text-xl font-medium my-3 '>The page you are looking for not available!</p>

                                    {/* <Li href="" className="link_404">Go to Home</a> */}
                                    <Link className='link_404' to={'/'}> Go To Home </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ErrorPage;