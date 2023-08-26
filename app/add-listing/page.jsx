// import ActionButton from "../components/action-button/action-button";

export default function AddListing() {
    return (
        <div className="w-full px-60 py-20 overflow-auto">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-center font-bold text-[3rem] text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-500 bg-clip-text">
                    Let's Launch Your Startup Together
                </h1>
                <p className="text-gray-400 font-medium text-xl">
                    List your startup on the App Store to reach customers faster
                    🚀
                </p>
                <div className="mt-8">
                    <ActionButton text="Create Listing" />
                </div>
                <div className="w-[60vw] h-[40rem] shadow border border-gray-200 rounded-xl mt-12"></div>
            </div>
        </div>
    );
}
