
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "../page404/page404";
import { Home } from "../Home/Home";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>

                {/* Home: */}
                <Route path="/Online-Music-Alarm" element={<Home />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/Online-Music-Alarm" />} />

                {/* Page not found routes: */}
                <Route path="/pageNotFound" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
