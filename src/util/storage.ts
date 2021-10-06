import AsyncStorage from "@react-native-async-storage/async-storage";

export async function GetMoviesSave(key:string) {
    const movies = await AsyncStorage.getItem(key)

    let movieSaves = JSON.parse(movies) || []

    return movieSaves
}

export async function MoviesSave(key:string, movie) {
    let movieStored = await GetMoviesSave(key)

    const hasmovie = movieStored.some(item => item.id === movie.id)

    if(hasmovie.id){
        console.log("existe já")
        return
    }

    movieStored.push(movie)

    await AsyncStorage.setItem(key, JSON.stringify(movieStored))
    console.log("Salvou")
}


