import $ from 'jquery';

class DepWithSelector {
	constructor() {
        this.dep = $("#depost_btn");
        this.with = $("#withdraw_btn");
        this.formDep = $("#deposit-form");
        this.formWith = $("#withdraw-form");
		this.events();
	}

	events() {
		// var that = this;
		this.dep.click(this.toggleDepOpenClass.bind(this));
		this.with.click(this.toggleWithOpenClass.bind(this));
	}

	toggleDepOpenClass() {
        
        this.formDep.show();
        this.formWith.hide();

        this.dep.addClass("active");
        this.with.removeClass("active");

        return false;
    }
    
    toggleWithOpenClass() {

        this.formDep.hide();
        this.formWith.show();

        this.dep.removeClass("active");
        this.with.addClass("active");
        
        return false;
	}
}

export default DepWithSelector;