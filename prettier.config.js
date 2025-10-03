/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // agrega punto y coma al final de cada línea
  singleQuote: true, // usa comillas simples
  printWidth: 100, // máximo de caracteres por línea
  tabWidth: 2, // usa 2 espacios por tabulación
  trailingComma: 'es5', // coma final donde sea válido en ES5 (objetos, arrays, etc.)
  bracketSpacing: true, // agrega espacios dentro de objetos { foo: bar }
  arrowParens: 'always', // siempre usa paréntesis en funciones flecha
  plugins: ['prettier-plugin-tailwindcss'], // ordena las clases de Tailwind
};
