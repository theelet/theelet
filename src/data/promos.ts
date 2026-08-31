// Promo codes for the booking flow. This module is the single source of truth,
// imported by BOTH the client booking bar (instant UX validation) and the
// server enquiry route (authoritative re-check before an email is sent). No
// database: codes live here as a constant. To add/retire a code, edit the list.

export type Promo = {
  code: string; // canonical, always uppercase
  label: string; // short human description
  discount: string; // what it unlocks
};

export const promoCodes: Promo[] = [
  // { code: "ELET10", label: "welcome offer", discount: "10% off" },

];

// Returns the matched promo, or null when the input is empty/unknown.
// Case-insensitive and whitespace-tolerant.
export function verifyPromo(input: string | null | undefined): Promo | null {
  if (!input) return null;
  const code = input.trim().toUpperCase();
  if (!code) return null;
  return promoCodes.find((p) => p.code === code) ?? null;
}
