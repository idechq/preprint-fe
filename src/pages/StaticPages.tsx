import { Container, Link, Typography } from "@mui/material";
import theme from "../styles/theme";
import TermsText from "./termsSantinized";
import ScreenHeightDiv from "../components/ScreenHeightDiv";

function Acknowledgements() {
  return (
    <Container
      component={ScreenHeightDiv}
      sx={{
        paddingY: theme.spacing(2),
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" mb={theme.spacing(1)}>
        react-pdf-viewer
      </Typography>
      <Typography paragraph gutterBottom mb={theme.spacing(3)}>
        idecRχiv uses react-pdf-viewer for PDF display and has purchased an{" "}
        <Link
          href="/react-pdf-viewer-license.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Organization License
        </Link>
        .
      </Typography>

      <Typography variant="h6" mb={theme.spacing(1)} mt={theme.spacing(2)}>
        User Interface
      </Typography>
      <Typography gutterBottom>
        Article list view user interface in idecRχiv is built upon that of{" "}
        <Link href="https://biorxiv.org" target="_blank" rel="noreferrer">
          bioRχiv
        </Link>
        , given their superior and intuitive display of abstract alongside
        article information. The design also partially incoporates that Box /
        Card design featured in{" "}
        <Link href="https://osf.io/preprints" target="_blank" rel="noreferrer">
          OSF Preprints
        </Link>
        .
      </Typography>
    </Container>
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
