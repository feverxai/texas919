import $ from 'jquery';

class PromotionDetail {
	constructor() {
        this.page = $(".promotion");
        this.item = $(".promotion__item");
        this.detail = $(".promotion__detail");
        this.close = $(".promotion__detail--close");
		this.events();
	}

	events() {
		// var that = this;
		this.item.click(this.toggleOpenClass.bind(this));
		this.close.click(this.toggleCloseClass.bind(this));
	}

	toggleOpenClass() {
        // TODO add ajax call
        this.page.removeClass("content__main--active-flex");
        this.detail.addClass("content__main--active");

        return false;
    }
    
    toggleCloseClass() {
        this.detail.removeClass("content__main--active");
        this.page.addClass("content__main--active-flex");
	}
}

export default PromotionDetail;