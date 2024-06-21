export const capitalizeWords = (text: string): string => {
  if (typeof text !== 'string') return text
  return text.replace(/\b\w/g, (char) => char.toUpperCase())
}
