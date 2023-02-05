let gift = document.querySelector('#gift')

let gifts = ['Bombones🍫', 'Ropa👗', 'Collar🐚', 'Ramo de Flores🌸', 'Aritos💎', 'Salida al cine🍿','Perfumes🥀', 'Chocolates🍫', 'Dinero💸', 'Cena Romantica🍝', 'Dedicatoria de Canción🎶', 'Mucho amor❤️']

const generate = (array) => {
    let generateRandomGift = Math.floor(Math.random() * array.length)

    let randomGift = array[generateRandomGift]

   return gift.textContent = randomGift
}



