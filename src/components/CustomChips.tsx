import Chip from '@mui/material/Chip';

type chipProps = {
  label: string,
  color?: "default" | "primary" | "secondary",
  href?: string,
  icon?: boolean,
}

export default function KeyWordChip(
  {label = "label", color = "secondary"}: chipProps) {
  return (
    <Chip
      label={label}
      size="small"
      color={color}
      />
  )
}