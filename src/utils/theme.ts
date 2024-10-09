let currentTheme: string

export function setTheme(className: string) {
  const body = document.getElementsByTagName('body')[0]
  if (currentTheme) {
    body.classList.remove(currentTheme)
  }

  body.classList.add(className)
  currentTheme = className
}
