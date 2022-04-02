document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});

let genBtn = document.getElementById('genreNate')
let genTxt = document.getElementById('gen-h3')
let bulletinBoard = document.getElementById('bulletinBoard')
let genre = document.getElementById('genre')
let likeBtn = document.getElementById('likeBtn')

const requestGenre = async () => {
    let req = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    let res = await req.json()
    console.log("Your genres, m'lady...", res)
    // let h3 = document.createElement('h3')
    genTxt.innerText = res
    genBtn.innerText = `Try again`
    
    genre.value = res.toUpperCase()
}

// let button = document.createElement('button')
// button.id = "likeBtn"
// button.innerText = `0 likes`
// let = document.getElementById('comment')
// comment.append(button)

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
    buttonL.innerText = `0 likes`
    div.append(head, p, clickLink, brk, buttonL)
    bulletinBoard.append(div)
    form.reset()
    
    // likeBtn.addEventListener('click', () => {
        //     ++startNum
        //     likeBtn.innerText = `${startNum} likes`
        // })
    })
    
    //create like button
    let startNum = 0
    likeBtn.addEventListener('click', (e) => {
        e.preventDefault()
        startNum++
        likeBtn.innerText = `${startNum} likes`
    })