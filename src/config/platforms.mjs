/** Public platform roster. Download cards and marketing copy both read this list. */
export const platforms = [
  { id: "macos", name: "macOS", status: "available" },
  { id: "windows", name: "Windows", status: "coming_soon" },
  { id: "iphone", name: "iPhone", status: "coming_soon" },
  { id: "ipad", name: "iPad", status: "coming_soon" },
  { id: "android", name: "Android", status: "coming_soon" },
];

export function platformListSentence() {
  const names = platforms.map((item) => item.name);
  if (names.length < 2) return names.join("");
  return `${names.slice(0, -1).join(", ")} a ${names[names.length - 1]}`;
}

export function platformDots() {
  return platforms.map((item) => item.name).join(" · ");
}
