import { toast } from "sonner";

export function comingSoon(label?: string) {
  toast(`${label ? label + " · " : ""}coming soon`, {
    description: "we're still putting this together. check back shortly.",
  });
}

export function comingSoonHandler(label?: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    comingSoon(label);
  };
}
