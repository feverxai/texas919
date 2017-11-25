import $ from 'jquery';

class GetPromotionDetail {
    constructor() {
        this.promotionItem = $(".promotion__item");
        this.events();
    }

    events() {
        this.promotionItem.click(this.getDetail);
    }

    getDetail() {
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
		
        var id = $(this).data("id");

        $.ajax({
            url: baseUrl+"front/get_pro_info/"+id
        }).done(function(data) {
            $("#promotion__detail > div.promotion__detail--desc").html(data);
        });
    }
}

export default GetPromotionDetail;