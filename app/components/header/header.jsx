import ActionButton from "../action-button/action-button";

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
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-900 px-6 py-2 rounded-xl font-medium shadow-md shadow-gray-500/30 text-lg">
                        Log in
                    </button>
                    <ActionButton text="Add Listing" />
                </div>
            </div>
        </header>
    );
};

export default Header;
