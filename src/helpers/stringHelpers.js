export function firstLetterMayus (text) {
  const firstLetter = text[0].toUpperCase()
  const textWithoutFirstLetter = text.slice(1)
  return `${firstLetter}${textWithoutFirstLetter}`
}
