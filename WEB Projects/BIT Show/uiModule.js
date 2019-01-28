const uiModule = (($) => {

    const $firstPageCardInputPlace = $(".firstPageCardInputPlace");
    //  const $createCardElementNode = $('.firstPageParagraph');
    const $btnMainPage = $("btn-primary")

    const $selectedShowTitle = $(".selectedShowTitle");
    const $selectedShowImg = $(".selectedShowImg");
    const $selectedShowSeasons = $(".selectedShowSeasons");
    const $selectedShowCast = $(".selectedShowCast");
    const $selectedShowSummary = $(".selectedShowSummary");


    const createCard = (show) => {
        const {
            id,
            imgMedium,
            title
        } = show;

        return `
        <div class="card col-sm-12 col-md-6 col-lg-4">
            <img class="card-img-top" src="${imgMedium}" alt="Card image cap">
            <div class="card-body">
            <div class="row">
                <h5 class="card-title col-12">${title}</h5>
                <input type="button" class = "btn btn-primary col-8" onclick = " ctrlModule.changeGlobalId(${id})" value="See more details">
            </div>
            </div>
        </a>
    </div>`
    };

    const createSummary = (summaryData) => {
        return `<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click for summary
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          ${summaryData}
        </div>
      </div>`
    }


    // const singleCard = $(cardTemplate)

    return {
        createCard,
        createSummary,
        $firstPageCardInputPlace,
        $selectedShowSeasons,
        $btnMainPage,
        $selectedShowCast,
        $selectedShowImg,
        $selectedShowTitle,
        $selectedShowSummary,
    }

})(jQuery);