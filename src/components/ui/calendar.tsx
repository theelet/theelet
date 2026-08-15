"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * Brand-themed react-day-picker wrapper. The `--rdp-*` custom properties recolor
 * the picker to the elet palette (teal accent, gold selected range).
 */
export function Calendar({ className, ...props }: CalendarProps) {
  return (
    <div
      className={cn("elet-rdp", className)}
      style={
        {
          "--rdp-accent-color": "var(--teal-deep)",
          "--rdp-accent-background-color": "var(--gold-soft)",
          "--rdp-today-color": "var(--teal)",
          "--rdp-range_middle-background-color": "var(--gold-soft)",
          "--rdp-range_start-color": "var(--cream)",
          "--rdp-range_end-color": "var(--cream)",
          "--rdp-range_start-background": "var(--teal-deep)",
          "--rdp-range_end-background": "var(--teal-deep)",
          "--rdp-selected-border": "0",
          "--rdp-day-width": "2.5rem",
          "--rdp-day-height": "2.5rem",
          "--rdp-day_button-width": "2.25rem",
          "--rdp-day_button-height": "2.25rem",
          "--rdp-day_button-border-radius": "9999px",
          "--rdp-font-family": "var(--font-sans)",
        } as React.CSSProperties
      }
    >
      <DayPicker {...props} />
    </div>
  );
}
