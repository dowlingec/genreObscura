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

genBtn.addEventListener('click', () => {
    requestGenre()
    // requestImg()
})

// const requestImg = async () => {
//     let req2 = await fetch('https://picsum.photos/500')
//     let res2 = await req2.json()
    
//     console.log('Noice', res2)
// }
// requestImg()

let form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let aName = document.getElementById('aName')
    let link = document.getElementById('link')
    let desc = document.getElementById('desc')
    
    let div = document.createElement('div')
    let head = document.createElement('h4')
    let p = document.createElement('p')
    let clickLink = document.createElement('a')
    let brk = document.createElement('br')
    let buttonL = document.createElement('button')

    div.id = "comment"
    head.innerHTML = `${aName.value}<br>->${genre.value}`
    p.innerText = desc.value
    clickLink.href = link.value
    clickLink.innerText = "Check 'em out"
    buttonL.id = "likeBtn"
    let startNum2 = 0
    buttonL.innerText = `${startNum2} likes`

    div.append(head, p, clickLink, brk, buttonL)
    bulletinBoard.append(div)
    form.reset()
})

//create like button
let button = document.createElement('button')
button.id = "likeBtn"
let startNum = 0
button.innerText = `${startNum} likes`
let comment = document.getElementById('comment')
comment.append(button)


// let likeBtn = document.getElementById('likeBtn')
// likeBtn.addEventListener('click', () => {
//     let startNum = 0

// })