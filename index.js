// alert('js connect')
let genBtn, genTxt
genBtn = document.getElementById('genreNate')
genTxt = document.getElementById('gen-h3')

genBtn.addEventListener('click', () => {
    requestGenre()
})

const requestGenre = async () => {
    let req = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    let res = await req.json()
    console.log("Your genres, m'lady...", res)
    // let h3 = document.createElement('h3')
    genTxt.innerText = res
    genBtn.innerText = `Try again`
}

