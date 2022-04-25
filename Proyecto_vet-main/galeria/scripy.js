const main = document.querySelector('main')
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const photos = await res.json()
    photos.forEach(p => {
        console.log(p)

        const card = document.createElement('div')
        card.className = "card"

        const img = document.createElement('img')
        img.src = p.url

        const titulo = document.createElement('h3')
        titulo.textContent = p.title

        card.append(img, titulo)
        main.append(card)
    });


}
getData()