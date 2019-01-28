const ctrlModule = ((dataModule, uiModule) => {

    const init = () => {
        let request = $.ajax({
            url: dataModule.constants.allShows,
            method: "GET",
        });

        request.done(function (objectData) {
            objectData.forEach(element => {
                dataModule.createShows(element.id, element.name, element.image.medium, element.rating.average);
            });
            dataModule.showList.sort(function (a, b) {
                return parseFloat(b.rating) - parseFloat(a.rating)
            });
            let counter = 0;
            
            const interval = () => {
                let showToInsert = dataModule.showList[counter];
                let card = uiModule.createCard(showToInsert);
                uiModule.$firstPageCardInputPlace.append(card);
                counter++
                if (counter === 50) {
                    clearInterval(xyz);
                }
            }
            let xyz = setInterval(interval, 100);
        });

    }


    const changeGlobalId = (id) => {
        let input = id.toString();
        localStorage.setItem("showId", input)
        window.location.replace("selectedShow.html");
    }

    const displayShowSeasons = () => {
        let input = localStorage.getItem("showId");

        let request = $.ajax({
            url: `http://api.tvmaze.com/shows/${input}/seasons`,
            method: "GET",
        });

        request.done(function (objectData) {
            $seasonsNumber = $("<h3>");
            $seasonsNumber.text(`Seasons: (${objectData.length})`);

            $seasonDeatils = $("<ul>")
            objectData.forEach(element => {
                $seasonDates = $("<li>");
                $seasonDates.text(`${element.premiereDate} to ${element.endDate}`);
                $seasonDeatils.append($seasonDates);

            })

            uiModule.$selectedShowSeasons.append($seasonsNumber);
            uiModule.$selectedShowSeasons.append($seasonDeatils);

        })

    }

    const displayShowCast = () => {
        let input = localStorage.getItem("showId");

        let request = $.ajax({
            url: `http://api.tvmaze.com/shows/${input}/cast`,
            method: "GET",
        });

        request.done(function (objectData) {
            $title = $("<h3>");
            $title.text("Cast:");

            $castList = $("<ul>");
            objectData.forEach(element => {
                $castName = $("<li>");
                $castName.text(element.person.name);
                $castList.append($castName);
            })

            uiModule.$selectedShowCast.append($title);
            uiModule.$selectedShowCast.append($castList);
        })
    }

    const displayTitlePosterAndSummary = () => {
        let input = localStorage.getItem("showId");

        let request = $.ajax({
            url: `http://api.tvmaze.com/shows/${input}`,
            method: "GET",
        });

        request.done(function (objectData) {
            $title = $("<h1>");
            $title.attr("style","text-align:center");
            $title.text(objectData.name);
            uiModule.$selectedShowTitle.append($title);

            $poster = $("<img>");
            $poster.attr("src", objectData.image.original);
            $poster.attr("style","width: 100%")
            uiModule.$selectedShowImg.append($poster);
            
            $summary = uiModule.createSummary(objectData.summary);
            uiModule.$selectedShowSummary.append($summary);
        });

    };


    const selectedShowInit = () => {
        displayShowSeasons();
        displayShowCast();
        displayTitlePosterAndSummary();
    }


    return {
        init,
        changeGlobalId,
        selectedShowInit,
    };

})(dataModule, uiModule);