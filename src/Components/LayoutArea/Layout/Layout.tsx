import { calculationsService } from "../../../Services/CalculationsService";
import Copyrights from "../Copyrights/Copyrights";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    
    const bgColor = calculationsService.getColorByHour();
    
    return (
        <div className="Layout" style={{backgroundColor: bgColor}}>
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
