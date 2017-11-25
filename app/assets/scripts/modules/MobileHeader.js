import $ from 'jquery';

class MobileHeader {
	constructor() {
		this.btn = $(".login-toggle");
		this.menu = $(".site-header__login");
		this.events();
	}

	events() {
		// var that = this;
		this.btn.click(this.toggleOpenClass.bind(this));
	}

	toggleOpenClass() {
        $(this.btn).toggleClass("site-header__mobile--login-toggle");
		$(this.menu).toggleClass("site-header__login--open");
	}
}

export default MobileHeader;