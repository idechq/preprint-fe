import { Container } from "@mui/material";
import theme from "../styles/theme";
import TermsText from "./termsSantinized";

function Acknowledgements() {
  return (
    <div>
      The idecRXiv uses react-pdf-viewer for PDF display and has purchased a
      license at "name goes here". The idecRXiv also uses disqus for managing
      comments.
    </div>
  );
}

function Terms() {
  // const termsHTML = require('./termsPlain.html');
  // const purifiedTermsHTML = DOMPurify.sanitize(termsHTML);

  return (
    <Container
      sx={{
        paddingY: theme.spacing(2),
        backgroundColor: "white",
      }}
    >
      <TermsText />
    </Container>
  );
}

export { Acknowledgements, Terms };
