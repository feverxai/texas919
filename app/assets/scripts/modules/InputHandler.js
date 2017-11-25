import $ from 'jquery';

class InputHandler {
	constructor() {
		this.input = $(".invalid");
		this.events();
	}

	events() {
		// var that = this;
        this.input.change(this.toggleClass);
	}

	toggleClass() {
		$(this).siblings("label").removeClass("active");
		
        if(this.value !== "") {
			$(this).siblings("label").addClass("active");
		}

		// console.log();
    }
}

export default InputHandler;