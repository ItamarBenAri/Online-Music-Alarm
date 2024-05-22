import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { MusicVideo } from "@mui/icons-material";

function Header(): JSX.Element {
    return (
        <div style={{marginBottom: "80px"}}>
            <AppBar sx={{backgroundColor: "#414141"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <MusicVideo />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                        >
                            &nbsp; Youtube Music Alarms
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
