import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./Copyrights.css";
import AppComponentsStyle from "../../../Theme/AppComponentsStyle";

function Copyrights(): JSX.Element {
    return (
        <div className="Copyrights">
            <Box sx={AppComponentsStyle.copyrightsBox}>
                <Typography variant="body2" color="text.secondary" align="center">
                    <a href="https://www.linkedin.com/in/itamar-ben-ari-69678b28b/" target="_blank" rel="noopener noreferrer">
                        {"© "}{"All Rights Reserved. Itamar Ben Ari, Israel"} {new Date().getFullYear()}{"."}
                    </a>
                </Typography>
            </Box>
        </div>
    );
}

export default Copyrights;