const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 py-4">
            <div className="container mx-auto flex items-center justify-between px-40">
                <div className="flex items-center space-x-2">
                    <img
                        src="/favicon.ico"
                        alt="Logo"
                        className="w-10 h-10 mr-2"
                    />
                    <h1 className="text-2xl font-semibold text-gray-800 hover:text-gray-900 ">
                        SAAS App store
                    </h1>
                </div>

                <div className="flex space-x-6">
                    <button className="text-gray-800 px-4 py-2 hover:bg-gray-200 rounded-md hover:border-gray-400 border border-transparent flex items-center">
                        Log in
                    </button>
                    <button className="bg-indigo-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-indigo-700 flex items-center">
                        Add Listings
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
