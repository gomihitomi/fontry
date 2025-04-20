export const latinFonts = [
  { value: "", name: "デフォルト (sans-serif)" },
  { value: "Roboto", name: "Roboto" },
  { value: "Lato", name: "Lato" },
  { value: "Inter", name: "Inter" },
  { value: "Open Sans", name: "Open Sans" },
  { value: "Poppins", name: "Poppins" },
  { value: "Outfit", name: "Outfit" },
  { value: "Montserrat", name: "Montserrat" },
];

export const japaneseFonts = [
  { value: "", name: "デフォルト (sans-serif)" },
  { value: "Noto Sans JP", name: "Noto Sans JP" },
  { value: "Zen Kaku Gothic New", name: "Zen Kaku Gothic New" },
  { value: "M PLUS 1", name: "M PLUS 1" },
  { value: "M PLUS 2", name: "M PLUS 2" },
  { value: "BIZ UDPGothic", name: "BIZ UDPGothic" },
  { value: "IBM Plex Sans JP", name: "IBM Plex Sans JP" },
  { value: "Murecho", name: "Murecho" },
];

export const createFontLink = (fontName: string): string | null => {
  if (!fontName) return null;
  const formattedName = fontName.replace(/ /g, "+");
  return `https://fonts.googleapis.com/css2?family=${formattedName}:wght@400;700&display=swap`;
};
