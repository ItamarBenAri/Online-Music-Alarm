import { useEffect, useState } from "react";
import { calculationsService } from "../../../Services/CalculationsService";
import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    const [bgColor, setBgColor] = useState<string>(calculationsService.getColorByHour());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedColor = calculationsService.getColorByHour();
            setBgColor(updatedColor);
        }, 600000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="Layout" style={{ backgroundColor: bgColor }}>
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <footer>
                <Copyrights />
            </footer>
        </div>
    );
}

export default Layout;