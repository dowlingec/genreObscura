// alert('js connect')
let genContainer, genBtn
genContainer = document.getElementById('generate-container')
genBtn = document.getElementById('genreNate')
console.log("Testing, testing, 1, 2,", genContainer)


const requestGenre = async () => {
    let req = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    let res = await req.json()
    console.log("Your genres, m'lady...", res)
    
    let h3 = document.createElement('h3')
    h3.innerText = res
    genContainer.append(h3)
}


genBtn.addEventListener('click', () => {
    requestGenre()
})