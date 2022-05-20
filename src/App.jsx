import { useEffect } from "react";
import { Header, Footer, MainSlider, Lots, Categories, Quotes, Info } from "./_containers";
import * as flsFunctions from "./js/files/functions";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import Services from "./_containers/Services";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsFunctions.isWebp();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page">
                <MainSlider />
                <Lots />
                <Categories />
                <Services />
                <Quotes />
                <Info />
            </main>
            <Footer />
        </>
    );
};

export default App;
