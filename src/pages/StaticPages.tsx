import { Typography } from '@mui/material';

function Acknowledgements() {
  return (
    <div>
      The idecRXiv uses react-pdf-viewer for PDF display and has purchased a license at "name goes here".

      The idecRXiv also uses disqus for managing comments.

    </div>
  )
}

function Terms() {
  return (
    <div>
      <Typography variant="h1">Terms and Conditions</Typography>
      <Typography variant="body1">Terms and conditions go here</Typography>
    </div>
  )
}

export { Acknowledgements, Terms };