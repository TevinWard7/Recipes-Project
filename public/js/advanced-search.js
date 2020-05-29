const API_KEY = 'e88644c6c9354e7795a330f1d321bc90';

$(document).ready(() => {

  $('#advanced-search').on('submit', (event) => {

    event.preventDefault();

    const dishInput = $('#dish').val();
    const validInput = validateSearchInput(dishInput);
    const dishTrimmed = dishInput.trim();
    const dishString = dishTrimmed.replace(/ /g, ',+');

    if (validInput) {
      const dietInput = $('input[name=diet]:checked').val();

      const allergyInput = [];
      $.each($('input[name=\'allergy\']:checked'), function(){
        allergyInput.push($(this).val());
      });

      const query = `https://api.spoonacular.com/recipes/complexSearch?query=${dishString}&diet=${dietInput}&intolerances=${allergyInput}&apiKey=${API_KEY}`;

      $.ajax({
        url: query,
        success: (data) => {
          console.log(data);
          const results = data.results;

          results.forEach(rec => {
            const recipe = createRecipeCard(rec);
            $('#advanced-search-results').append(recipe);
          });

        }
      });
    } else {
      alert('Invalid Input');
    }

  });

  const createRecipeCard = (recipe) => {

    const { id, title, image, readyInMinutes, servings, sourceUrl } = recipe;

    const imageTypeIndex = image.lastIndexOf('.', image.length);

    const imageType = image.substring(imageTypeIndex);

    const imageSize = '480x360';

    const imagePath = `https://spoonacular.com/recipeImages/${id}-${imageSize}${imageType}`;

    return `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div class="card">
                <img src="${imagePath}" class="card-img-top img-fluid" alt="${title}">
                <div class="card-body">
                  <h4 class="card-title">${title}</h4>
                  <p class="card-text">Prep Time: ${readyInMinutes} minutes</p>
                  <p class="card-text">Servings: ${servings}</p>
                </div>
                <div class="card-body">
                  <a href="#" name="${id}" onclick="addToRecipeBook(name)" class="btn btn-primary">Add</a>
                  <a href="#" name="${id}" onclick="viewRecipeDetails(name)" class="btn btn-primary">Details</a>
                  <p><a href="${sourceUrl}">View Source Link</a></p>
                </div>
              </div>
            </div>`;

  };

  const addToRecipeBook = id => {
    event.preventDefault();
    console.log(id);
  };

  const viewRecipeDetails = id => {
    event.preventDefault();
    console.log(id);
  };

  const validateSearchInput = input => {
    var rmSp = input.trim();
    var result = rmSp.search(/^[A-Za-z\s']+$/); //check to make sure the input is alphabetical
    return (result === 0 ? true : false); //return true if it is alphabetical, false if not
  };

});