import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement("div");
  const divHeadline = document.createElement("div");
  const divAuthor = document.createElement("div");
  const divContainer = document.createElement("div");
  const newImage = document.createElement("img");
  const newSpan = document.createElement("span");

  divCard.classList.add("card")
  divHeadline.classList.add("headline")
  divAuthor.classList.add("author")
  divContainer.classList.add("img-container")
  
  divHeadline.textContent = article.headline;
  newSpan.textContent = "By " + article.authorName;
  newImage.setAttribute("src", article.authorPhoto);
  
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divContainer);
  divAuthor.appendChild(newSpan);
  divContainer.appendChild(newImage);
  
  divCard.addEventListener("click", (event) => {
    console.log(event.target.divHeadline)
  })

  return divCard

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    const newCards = document.querySelector(selector);
    const newCard0 = res.data.articles.bootstrap;
    const newCard1 = res.data.articles.javascript;
    const newCard2 = res.data.articles.jquery;
    const newCard3 = res.data.articles.node;
    const newCard4 = res.data.articles.technology;
   
   newCard0.forEach((item) => {
      newCards.appendChild(Card(item));
    });

   newCard1.forEach((item) => {
      newCards.appendChild(Card(item));
    });

    newCard2.forEach((item) => {
      newCards.appendChild(Card(item));
    });

    newCard3.forEach((item) => {
      newCards.appendChild(Card(item));
    });

    newCard4.forEach((item) => {
      newCards.appendChild(Card(item));
    });
    
    return newCards


  })
  .catch((error) => {
    console.log(error)
  })

}

export { Card, cardAppender }
