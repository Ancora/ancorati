// Método não necessário, pois usei a variável css já definida em global.js

const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
