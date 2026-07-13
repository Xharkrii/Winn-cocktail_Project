// Selecting elements
const container = document.querySelector('.cocktail-list')
const input = document.getElementById('input')

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
let searchParams = ''

function fetchCocktailList(){
    const inputValue = input.value
    if (inputValue === '') {
        input = 'a'
    }
    else{
        searchParams = inputValue
    }
    fetch(`${url}${searchParams}`)
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
                <article>
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
                        </div>
                        <a href="">
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
