import $ from 'jquery';

class LanguageSelector {
	constructor() {
		this.btn = $(".dropdown-toggle");
		this.menu = $(".site-header__lang");
		this.events();
	}

	events() {
		// var that = this;
		this.btn.click(this.toggleOpenClass.bind(this));
	}

	toggleOpenClass() {
		$(this.menu).toggleClass("site-header__lang--open");
	}
}

export default LanguageSelector;