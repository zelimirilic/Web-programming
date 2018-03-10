const ctrlModule = ((dataModule, uiModule) => {

    const init = () => {
        let request = $.ajax({
            url: dataModule.constants.allShows,
            method: "GET",
        });

        request.done(function (objectData) {
            objectData.forEach(element => {
                const show = dataModule.createShows(element.id, element.name, element.image.medium, element.rating.average);
                const card = uiModule.createCard(show);
                uiModule.$firstPageCardInputPlace.append(card);
            });

        })

        selectSingleShow();
    };

    const getShowSeasonUrlRequest = () => {

    }

    const selectedShowInit = () => {


        let request = $.ajax({

        })
    }

    const selectSingleShow = () => {
        $(document).on("click", ".show", (event) => {
            event.preventDefault();
            event.stopPropagation();
            const id = $(event.currentTarget).attr('data-show-id');
            localStorage.setItem("showId", id);

            window.location.href = "selectedShow.html";
        });
    }

    return {
        init
    }

})(dataModule, uiModule);