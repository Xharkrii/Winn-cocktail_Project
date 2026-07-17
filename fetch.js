// Selecting elements
const container = document.querySelector('.cocktail-list')
const input = document.getElementById('input')

const searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
let searchParams = ''

function fetchCocktailList(){
    const inputValue = input.value
    if (inputValue === '') {
        searchParams = 'a'
    }
    else{
        searchParams = inputValue
    }
    fetch(`${searchUrl}${searchParams}`)
    .then(
        (resp)=>{
            if (resp.status === 200) {
                return resp.json()
            } 
            else{
                return
            }
        }
    )
    .then(
       (data)=>{
        const drinksArray = data.drinks
        console.log(drinksArray);

        container.innerHTML = ''
        drinksArray.forEach(singleDrink => {
            container.innerHTML += `
                <article class="card">
                    <div class="image">
                        <img src=${singleDrink.strDrinkThumb} alt="">
                    </div>
                    <div class="description">
                        <h4>${singleDrink.strDrink}</h4>
                        <div class="sub">
                            <p>Category:</p>
                            <p>${singleDrink.strCategory}</p>
                        </div>
                        <div class="sub">
                            <p>Serving Glass:</p>
                            <p>${singleDrink.strGlass}</p>
                        </div class="detail-btn" data-id="${singleDrink.idDrink}">
                        <a href="details.html?id=${singleDrink.idDrink}">
                            <button>More Details</button>
                        </a>
                    </div>  
                </article>
            `
        })
       } 
    )
}


input.addEventListener('keyup', fetchCocktailList)
document.addEventListener('DOMContentLoaded', fetchCocktailList)