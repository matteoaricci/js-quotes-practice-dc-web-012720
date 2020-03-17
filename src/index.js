document.addEventListener('DOMContentLoaded', pageSetup())

function pageSetup() {
    getForm();
    fetchQuotes();
}

function fetchQuotes() {
    fetch('http://localhost:3000/quotes?_embed=likes')
    .then(resp => resp.json())
    .then(quotes => quotes.forEach(quote => {
        renderQuote(quote)
        
    }));
}

function renderQuote(quotes) {
    // console.log(quote)
    let breakItem = document.createElement('br')

    let likedQuotes = document.getElementById('quote-list')

    let newLi = document.createElement('li')
        newLi.className = 'quote-card'
    
    let newBlockQ = document.createElement('blockquote')
        newBlockQ.className = 'blockquote'

    let newPara = document.createElement('p')
        newPara.className = 'mb-0'
        newPara.innerText = quotes.quote

    let newFooter = document.createElement('footer')
        newFooter.className = 'blockquote-footer'
        newFooter.innerText = quotes.author

    let btnLikes = document.createElement('button')
        btnLikes.className = 'btn-success'
        btnLikes.innerText = `Likes: `

    let likesSpan = document.createElement('span')
        likesSpan.innerText = `${quotes.likes.length}`

    let btnDanger = document.createElement('button')
        btnDanger.className = 'btn-danger'
        btnDanger.innerText = 'Danger'


    btnLikes.append(likesSpan)
    newBlockQ.append(newPara, newFooter, breakItem, btnLikes, btnDanger)
    newLi.append(newBlockQ)
    likedQuotes.append(newLi)
}

function getForm() {
    const form = document.getElementById('new-quote-form')
    form.addEventListener('submit', processForm)
}

function processForm(event) {
    event.preventDefault()
    debugger;
}