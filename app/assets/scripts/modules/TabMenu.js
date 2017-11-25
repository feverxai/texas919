import $ from 'jquery';

class TabMenu {
	constructor() {
		this.tab = $(".content__menu a");
		this.game = $(".game");
		this.mobileToggle = $(".content__menu--toggle");
		this.events();
	}

	events() {
		// var that = this;
		this.tab.click(this.toggleOpenClass);
		this.mobileToggle.click(this.toggleMenu);
	}

	toggleOpenClass() {
		var tabContent = $(this).attr("href");
		
		$(this).siblings().children("li").removeClass("active");
		$(this).children("li").addClass("active");

		if(tabContent == "#promotion") {
			$(tabContent).siblings().removeClass("content__main--active");
			$(tabContent).siblings().removeClass("content__main--active-flex");
			$(tabContent).addClass("content__main--active-flex");
		}
		else {
			$(tabContent).siblings().removeClass("content__main--active");
			$(tabContent).siblings().removeClass("content__main--active-flex");
			$(tabContent).addClass("content__main--active");
		}

		//for mobile
		$(this).siblings().children("li").removeClass("mobile--open");

		return false;
	}

	toggleMenu() {
		$(this).siblings().children("li").addClass("mobile--open");
	}
}

export default TabMenu;