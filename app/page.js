import "../styles/globals.css";
import Header from "./components/header/header";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <div className="text-3xl font-bold p-10 flex items-center justify-center">
                    Hello world!
                </div>
            </main>
        </>
    );
}
