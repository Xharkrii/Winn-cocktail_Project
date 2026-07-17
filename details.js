const lookupUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const searchParams = new URLSearchParams(window.location.search)
const container = document.getElementById('container')
const id = searchParams.get('id')

const fetchDetails = () =>{
    fetch(`${lookupUrl}${id}`)
    .then(resp => {
            if (resp.status === 200) {
                return resp.json()
            } 
            else{
                return
            }
        }
    )
    .then(data => {
        const drinkDetails = data.drinks[0]
        // console.log(drinkDetails);
            
            container.innerHTML +=`
                <div class="single">
                    <h3 id="detail-title">${drinkDetails.strDrink}</h3>
                    <div class="single-center">
                        <div class="image">
                            <img id="detail-image" src="${drinkDetails.strDrinkThumb}" alt="A1">
                        </div>
                        <div class="description">
                            <div class="sub">
                                <span>Category:</span>
                                <span id="detail-category">${drinkDetails.strCategory}</span>
                            </div>
                            <div class="sub">
                                <span>glass:</span>
                                <span id="detail-glass">${drinkDetails.strGlass}</span>
                            </div>
                            <div class="sub">
                                <span>instructions:</span>
                                <span id="detail-instructions">${drinkDetails.strInstructions}</span>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                    <div class="home-btn">
                        <a href="/">
                            <button>Back</button>
                        </a>
                    </div>
                </div>
            `
        })
}

fetchDetails()