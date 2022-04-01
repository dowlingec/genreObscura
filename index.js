// alert('js connect')
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

let genBtn = document.getElementById('genreNate')
let genTxt = document.getElementById('gen-h3')
let bulletinBoard = document.getElementById('bulletinBoard')
let genre = document.getElementById('genre')
// let cmmntContain = document.getElementById('container-cmmnt')


const requestGenre = async () => {
    let req = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    let res = await req.json()
    console.log("Your genres, m'lady...", res)
    // let h3 = document.createElement('h3')
    genTxt.innerText = res
    genBtn.innerText = `Try again`

    genre.value = res.toUpperCase()
}

// const requestImg = async () => {
//     let req2 = await fetch('https://picsum.photos/400')
//     let res2 = await req2.json()
    
//     console.log('Noice', res2)
// }
// requestImg()

fetch("https://picsum.photos/400").then(async response => {
    try {
     const data = await response.json()
     console.log('response data?', data)
   } catch(error) {
     console.log('Error happened here!')
     console.error(error)
   }
})


genBtn.addEventListener('click', () => {
    requestGenre()
})

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let aName = document.getElementById('aName')
    let link = document.getElementById('link')
    let desc = document.getElementById('desc')
    
    let div = document.createElement('div')
    div.id = "comment"
    let head = document.createElement('h4')
    head.innerHTML = `${aName.value}<br>->${genre.value}`
    let p = document.createElement('p')
    p.innerText = desc.value
    let clickLink = document.createElement('a')
    clickLink.href = link.value
    clickLink.innerText = "Check 'em out"
    // div.append(head, p, clickLink)
    div.append(head, p, clickLink)
    bulletinBoard.append(div)
    form.reset()
})