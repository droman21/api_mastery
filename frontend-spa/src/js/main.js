import Header from './components/Header';
import Home from './components/Home';
import apiActions from './components/apiActions';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import FoodType from './components/FoodType';
import FoodTypes from './components/FoodTypes';
import RecipePostSection from './components/RecipePostSection';
import RecipeEdit from '.components/RecipeEdit';
import Footer from './components/footer';
import recipe from './components/Recipe';

const appDiv = document.querySelector('.app')

export default function pageBuild() {
    header();
    navHome();
    navFoodTypes();
    navRecipes();
    footer();
    showFoodTypes();
}
function header() {
    const header = document.querySelector('#header');
    header.innerHTML = Header();
}
function navHome() {
    const homeButton = document.querySelector('.home__nav');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch";
    })
}
function navFoodTypes() {
    const foodTypesButton = document.querySelector('.foodType__nav');
    foodTypesButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch"
    })
}
function navRecipes() {
    const recipesButton = document.querySelector('.recipes__nav');
    recipesButton.addEventListener('click', function () {
        appDiv.innerHTML = "fetch"
    })
}
function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}
function showFoodTypes() {
    fetch("https://localhost:44307/api/foodtype")
        .then(response => response.json())
        .then(foodTypes => {
            appDiv.innerHTML = FoodTypes(foodTypes);
            foodTypesButton();
        })
        .catch(err => console.log(err))
}

function foodTypesButton() {
    const FoodTypeElement = document.querySelectorAll('.foodtype__list');
    FoodTypeElement.forEach(element => {
        element.addEventListener('click', function () {
            const foodTypeId = element.id;
            const foodTypeEndpoint = `https://localhost:44307/api/foodtype/${foodTypeId}`;
            const foodTypeCallback = foodType => {
                appDiv.innerHTML = FoodType(foodType);
                recipeButton(foodTypeId, foodType.foodCategory);
            };
            apiActions.getRequest(foodTypeEndpoint, foodTypeCallback);
        })
    })
}

// function recipeNameButton(foodTypeId, foodCategory) {
//     const recipeNameElement = document.querySelectorAll('.foodtype-recipe');
//     recipeNameElement.forEach(element => {
//         element.addEventListener('click', function () {
//             const recipeId = element.id;
//             const endpoint = `https://localhost:44307/api/recipe/${recipeId}`;
//             const foodTypeCallback = foodType => {;
//             const callBack = recipe => {
//                 appDiv.innerHTML = Recipe(recipe);
//             };
//             apiActions.getRequest(endpoint, callBack);
//         })
//     })
// }

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('create-recipe_recipeName')) {
        const addRecipeSection = document.querySelector('.create-recipe');
        addRecipeSection.innerHTML = RecipePostSection();
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-artist__submit')) {
        const artistName = event.target.parentElement.querySelector(".add-artist__artistName").value;
        const artistImageName = event.target.parentElement.querySelector(".add-artist__artistImageName").value;
        const artistAge = event.target.parentElement.querySelector(".add-artist__artistAge").value;
        const artistHomeTown = event.target.parentElement.querySelector(".add-artist__artistHomeTown").value;

        var requestBody = {
            Name: artistName,
            ImageName: artistImageName,
            Age: artistAge,
            HomeTown: artistHomeTown
        }

        apiActions.postRequest(
            "https://localhost:44313/api/artist",
            requestBody,
            newArtists => {
                appDiv.innerHTML = Artists(newArtists);
                artistNameButton();
            }
        )
    }

})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-album__button')) {
        const addAlbumSection = document.querySelector('.add-album');
        const artistId = event.target.parentElement.querySelector(".add-album__button").id;
        addAlbumSection.innerHTML = AlbumPostSection(artistId);
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-album__submit')) {
        const albumName = event.target.parentElement.querySelector(".add-album__albumName").value;
        const albumImageName = event.target.parentElement.querySelector(".add-album__albumImageName").value;
        const albumReleaseYear = event.target.parentElement.querySelector(".add-album__releaseYear").value;
        const albumRecordLabel = event.target.parentElement.querySelector(".add-album__recordLabel").value;
        const albumGenre = event.target.parentElement.querySelector(".add-album__albumGenre").value;
        const artistId = event.target.parentElement.querySelector(".add-album__artistId").value;

        var requestBody = {
            Name: albumName,
            ImageName: albumImageName,
            ReleaseYear: albumReleaseYear,
            RecordLabel: albumRecordLabel,
            Genre: albumGenre,
            ArtistId: artistId
        }

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
        }

        apiActions.postRequest(
            "https://localhost:44313/api/album",
            requestBody,
            artistCallback
        )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-song__button')) {
        const addSongSection = document.querySelector('.add-song');
        const albumId = event.target.parentElement.querySelector(".add-song__button").id;
        addSongSection.innerHTML = SongPostSection(albumId);
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-song__submit')) {
        const songTitle = event.target.parentElement.querySelector(".add-song__songTitle").value;
        const songDuration = event.target.parentElement.querySelector(".add-song__songDuration").value;
        const albumId = event.target.parentElement.querySelector(".add-song__albumId").value;
        var requestBody = {
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        }

        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    appDiv.innerHTML = Album(album);
                })
        }

        apiActions.postRequest(
            "https://localhost:44313/api/song",
            requestBody,
            albumCallback
        )
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('delete-album__button')) {
        const albumId = event.target.parentElement.querySelector('.delete-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
        }

        apiActions.deleteRequest(
            `https://localhost:44313/api/album/${albumId}`,
            artistCallback
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-album__button')) {
        const editAlbumSection = document.querySelector('.edit-album');
        const albumId = event.target.parentElement.querySelector('.edit-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;
        apiActions.getRequest(
            `https://localhost:44313/api/album/${albumId}`,
            albumEdit => {
                editAlbumSection.innerHTML = AlbumEditSection(artistId, albumEdit);
            }
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-album__submit')) {
        const albumId = event.target.parentElement.querySelector('.edit-album__albumId').value;
        const albumName = event.target.parentElement.querySelector('.edit-album__albumName').value;
        const imageName = event.target.parentElement.querySelector('.edit-album__albumImageName').value;
        const releaseYear = event.target.parentElement.querySelector('.edit-album__releaseYear').value;
        const recordLabel = event.target.parentElement.querySelector('.edit-album__recordLabel').value;
        const genre = event.target.parentElement.querySelector('.edit-album__albumGenre').value;
        const artistId = event.target.parentElement.querySelector('.edit-album__artistId').value;

        const albumEdit = {
            id: albumId,
            Name: albumName,
            ImageName: imageName,
            ReleaseYear: releaseYear,
            RecordLabel: recordLabel,
            Genre: genre,
            ArtistId: artistId
        };

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
        }

        apiActions.putRequest(
            `https://localhost:44313/api/album/${albumId}`,
            albumEdit,
            artistCallback
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('nav-artist-return__button')) {
        const artistId = event.target.parentElement.querySelector(".nav-artist-return__button").id;
        const endpoint = `https://localhost:44313/api/artist/${artistId}`;
        const callBack = artist => {
            appDiv.innerHTML = Artist(artist);
            albumNameButton();
        };
        apiActions.getRequest(endpoint, callBack);
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('delete-song__button')) {
        const songId = event.target.parentElement.querySelector(".delete-song__button").id;
        const albumId = event.target.parentElement.querySelector(".delete-song__button").value;
        const endpoint = `https://localhost:44313/api/song/${songId}`;
        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    appDiv.innerHTML = Album(album);
                })
        }
        apiActions.deleteRequest(endpoint, albumCallback);
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('update-song__button')) {
        const editSongSection = document.querySelector('.edit-song');
        const songId = event.target.parentElement.querySelector('.update-song__button').id;
        const albumId = event.target.parentElement.querySelector('.update-song__button').value;
        apiActions.getRequest(
            `https://localhost:44313/api/song/${songId}`,
            songEdit => {
                editSongSection.innerHTML = SongEditSection(songEdit, albumId);
            }
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-song__submit')) {
        const songId = event.target.parentElement.querySelector(".edit-song__songId").value;
        const albumId = event.target.parentElement.querySelector('.edit-song__albumId').value;
        const songTitle = event.target.parentElement.querySelector('.edit-song__songTitle').value;
        const songDuration = event.target.parentElement.querySelector('.edit-song__songDuration').value;
        const songEdit = {
            id: songId,
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        };

        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    appDiv.innerHTML = Album(album);
                    albumNameButton();
                })
        }

        apiActions.putRequest(
            `https://localhost:44313/api/song/${songId}`,
            songEdit,
            albumCallback
        )
    }
})


appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('delete-artist__button')) {
        console.log("in delete artist");
        const artistId = event.target.parentElement.querySelector(".delete-artist__button").id;
        const endpoint = `https://localhost:44313/api/artist/${artistId}`;

        apiActions.deleteRequest(
            endpoint,
            newArtists => {
                console.log("22artistid=" + artistId);
                appDiv.innerHTML = Artists(newArtists);
                artistNameButton();
            }
        )

    }