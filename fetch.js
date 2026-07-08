// Selecting elements
const container = document.querySelector('.cocktail-list')
const input = document.getElementById('input')

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const searchParams = ''

function fetchCocktailList(){
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
       } 
    )
}

fetchCocktailList()