import useAuth from "../../hooks/useAuth";




const UserDashboard = () => {

    const { user } = useAuth()

  

    return (
        <div>


            <div className="w-full flex flex-col lg:flex-row gap-4">

                <div className="shadow-md w-full lg:w-2/5 md:w-full p-5">
                    {/* image */}

                    <img className="w-48 h-48 rounded-full" src={user?.photoURL} alt="" />

                    <div className="mt-6">
                        <p className="roboto text-xl font-semibold" > Name : {user?.displayName} </p>

                        <p className="roboto text-xl font-semibold"> Email : {user?.email} </p>
                    </div>


                </div>

                <div className="shadow-md w-full lg:w-3/5 md:w-full p-5">
                    {/* Info */}
                    <h1 className="text-4xl"> Apartment Info </h1>
                    <div className="border border-orange-400 mt-2 max-w-64 border-dashed"></div>
                    <div className="mt-4">
                        <p className="roboto text-xl font-semibold mb-2"> Agreement Accept Date : None </p>
                        <p className="roboto text-xl font-semibold mb-2"> Floor Number : None </p>
                        <p className="roboto text-xl font-semibold mb-2"> Block Name : None </p>
                        <p className="roboto text-xl font-semibold mb-2"> Room Number : None </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDashboard;