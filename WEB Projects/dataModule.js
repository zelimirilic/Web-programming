const dataModule = (() => {

    const constants = {
        allShows: "http://api.tvmaze.com/shows",
        // showSeasons: "http://api.tvmaze.com/shows/" + showId + "/seasons",
        // showCast: "http://api.tvmaze.com/shows/" + showId + "/cast",
        
    }
    
    let globalId = 0;

    const showList = [];

    class Show {
        constructor(id, title, imgMedium, rating) {
            this.id = id;
            this.title = title;
            this.imgMedium = imgMedium;
            this.rating = rating;
        }
    }

    class Seasons {
        constructor(num, start, end) {
            this.num = num;
            this.start = start;
            this.end = end;
        }
    }

    class Cast {
        constructor(name) {
            this.name = name;
        }
    }

    class DetailedShow extends Show {
        constructor(id, title, imgMedium, rating, imgLarge, summary, seasonsObj, castArr) {
            super(id, title, imgMedium, rating)
            this.imgLarge = imgLarge;
            this.summary = summary;
            this.seasons = seasonsObj;
            this.cast = castArr;
        }
    }

    const createShows = (id, title, imgMedium, rating) => {
        const newShow = new Show(id, title, imgMedium, rating);
        showList.push(newShow);
        return newShow;
    }

    // const createSeason = (num, start, end) => {
    //     return new Seasons(num, start, end);
    // }

    const createShowDetails = (id, title, imgMedium, rating, imgLarge, summary, seasonsObj, actorsArr) => {
        return new DetailedShow(id, title, imgMedium, rating, imgLarge, summary, seasonsObj, actorsArr);
    }

    return {
        constants,
        // createSeason,
        createShows,
        showList,
        createShowDetails,
        globalId
    }

})();