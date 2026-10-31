import { articleListArr } from "./data.js";
const articleList= document.querySelector('#article-list')

const params = new URLSearchParams(window.location.search)
const index = Number(params.get('id'))
const articleContainer =document.querySelector('.article-container')
const article = articleListArr[index]   

function articleRender(article){
    const title = document.createElement('h1')
    title.innerText=article.heading 

    const date = document.createElement('time')
    date.dateTime=article.Date
    date.textContent = new Date(article.date + "T00:00:00").toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    const image = document.createElement('img')
    image.src = article.picture
    image.alt = article.heading
    image.loading='lazy'

    const excerpt = document.createElement('p')
    excerpt.innerText=article.excerpt
    const paragraph = document.createElement('p')
    paragraph.innerText=article.paragraph

    articleContainer.appendChild(title)
    articleContainer.appendChild(date)
    articleContainer.appendChild(excerpt)
    articleContainer.appendChild(image)
    articleContainer.appendChild(paragraph)

}
articleRender(article)

function articleCardRender(articleListArr){
const articleList = document.querySelector('#article-list')
    articleListArr.forEach((item, index) => {

        const articleCard = document.createElement('article')
        articleCard.classList.add(`${index}-article`)
        articleCard.classList.add('article-card')

        const title = document.createElement('a');
        title.href =`article.html?id=${index}`

        title.textContent= item.heading

        const date = document.createElement('time')
        date.dateTime = item.date;
        date.textContent = new Date(item.date + "T00:00:00").toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });

        const excerpt = document.createElement('p')
        excerpt.textContent= item.excerpt


            
        const image = document.createElement('img')
        image.src= item.picture
        image.alt=item.heading 
        image.loading="lazy"


        articleCard.appendChild(title)
        articleCard.appendChild(date)
        articleCard.appendChild(excerpt)
        articleCard.appendChild(image)

        articleList.appendChild(articleCard)

    });

}
articleCardRender(articleListArr)