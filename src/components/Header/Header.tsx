import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Title } from "./Style";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Title variant="h6">Juspay Scratch Project</Title>
        <Button
          href="https://github.com/rohit-ghosh/juspay-scratch-project"
          target="_blank"
          color="inherit"
          startIcon={<GitHubIcon />}
        >
          GitHub Repository
        </Button>
      </Toolbar>
    </AppBar>
  );
}
