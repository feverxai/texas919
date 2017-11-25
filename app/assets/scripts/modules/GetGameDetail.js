import $ from 'jquery';

class GetGameDetail {
    constructor() {
        this.gameItem = $(".game__item");
        this.events();
    }

    events() {
        this.gameItem.click(this.getDetail);
    }

    getDetail() {
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
		
        var id = $(this).data("id");

        $.ajax({
            url: baseUrl+"front/get_game_info/"+id
        }).done(function(data) {
            $("#game__detail > div.game__detail--desc").html(data);
        });
    }
}

export default GetGameDetail;