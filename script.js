const motivationalQuotes = [
  "Life isn't about finding yourself. Life is about creating yourself.",
  "Doubt kills more dreams than failure ever will.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Whether you think you can or think you can't, you're right.",
  "The happiness of your life depends on the quality of your thoughts.",
  "Nothing is impossible. The word itself says 'I'm possible!'",
  "The limit is not the sky. The limit is the mind.",
  "And, when you want something, all the universe conspires in helping you to achieve it.",
  "Realize deeply that the present moment is all you ever have. Make the Now the primary focus of your life.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Do or do not. There is no try.",
  "Happiness is not something ready made. It comes from your own actions.",
  "What you seek is seeking you.",
  "It always seems impossible until it's done.",
  "Energy flows where attention goes.",
  "Do what you can, with what you have, where you are.",
  "Perfection is not attainable. But if we chase perfection we can catch excellence.",
  "The most effective way to do it is to do it.",
  "You cannot always control what goes on outside. But you can always control what goes on inside.",
  "The best way out is always through.",
];

let button = document.querySelector("button");
let quote = document.querySelector("h1");
button.addEventListener("click", () => {
  let index = Math.floor(Math.random() * motivationalQuotes.length);
  quote.textContent = motivationalQuotes[index];
});
