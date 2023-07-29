const names = ['John', 'Sally', 'Jane', 'Roberto', 'Felipe', 'Phineas', 'Gigi']

console.log(names)

let randomNum = Math.floor(Math.random() * names.length)

let currentName = names[randomNum]

document.querySelector('.name').append(currentName)

fetch('https://api.imgflip.com/get_memes')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.memes)
    for (let i = 0; i < data.data.memes.length; i++) {
      let img = document.createElement('img')
      img.src = data.data.memes[i].url
      document.getElementById('img-container').appendChild(img)
    }
  })
