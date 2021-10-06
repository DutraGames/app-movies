import AsyncStorage from "@react-native-async-storage/async-storage";

export async function GetMoviesSave(key:string) {
    const movies = await AsyncStorage.getItem(key)

    let movieSaves = JSON.parse(movies) || []

    return movieSaves
}

export async function MoviesSave(key:string, movie) {
    let movieStored = await GetMoviesSave(key)

    const hasmovie = movieStored.some(item => item.id === movie.id)

    if(hasmovie){
        console.log("existe já")
        return
    }

    movieStored.push(movie)

    await AsyncStorage.setItem(key, JSON.stringify(movieStored))
    console.log("Salvou")
}

export async function MoviesDelete(id) {
    let movieStored = await GetMoviesSave('@favorites')
    let myMovies = movieStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@favorites', JSON.stringify(myMovies))
    console.log("Delete")
    return myMovies
}

export async function MoviesHas(movie) {
    let movieStored = await GetMoviesSave('@favorites')

    const hasMovie = movieStored.find(item => item.id === movie.id)

    if(hasMovie){
        return true
    }

    return false
}

