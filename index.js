import { articleListArr } from "./data.js";

const articleList = document.querySelector('#article-list')

articleListArr.forEach((item, index) => {
    console.log(item.heading)

    const articleCard = document.createElement('article')
    articleCard.classList.add(`${index}-article`)
    articleCard.classList.add('article-card')

    const title = document.createElement('h2')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')
    const date = document.createElement('time')

    title.textContent= item.heading
    paragraph.textContent= item.paragraph
        
    image.src= item.picture
    image.alt=item.heading 
    image.loading="lazy"

    date.dateTime = item.date;
    date.textContent = new Date(item.date + "T00:00:00").toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    articleCard.appendChild(title)
    articleCard.appendChild(date)
    articleCard.appendChild(paragraph)
    articleCard.appendChild(image)

    articleList.appendChild(articleCard)

    
});