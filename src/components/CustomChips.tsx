import Chip from "@mui/material/Chip";

type chipProps = {
  id: number;
  label: string;
  color?: "default" | "primary" | "secondary";
  href?: string;
  icon?: boolean;
};

export default function KeyWordChip({
  id,
  label = "label",
  color = "secondary",
}: chipProps) {
  return <Chip key={id} label={label} size="small" color={color} />;
}
