const jokeEl = document.getElementById('joker');
const jokeBtn = document.getElementById('jokerBtn');

jokeBtn.addEventListener('click', generateJoker);

generateJoker();

// USING ASYNC/AWAIT
async function generateJoker() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokerEl.innerHTML = data.Joker

// USING .then()
// function generateJoker() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joker
//     })
// }
