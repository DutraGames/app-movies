

export function getListMovies (size:number, movies:object){
    let popularMovies = [];

    for(let i  =  0,  l  =  size;  i  <  l;  i++){
        popularMovies.push(movies[i])
    }

    return  popularMovies;
}

export function bannerRandom(movies:object){
    return Math.floor(Math.random() * movies.length)
}