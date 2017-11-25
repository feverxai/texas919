import $ from 'jquery';

class RegisterValidate {
	constructor() {
        this.step1 = $("#step1");
        this.step2 = $("#step2");
        this.nextBtn = $("#next");
        this.email = $("#member_email");
        this.pw = $("#member_password");
        this.cfpw = $("#member_cpassword");
        this.alert = $("#alert-area9");
		this.events();
	}

	events() {
		// var that = this;
		this.nextBtn.click(this.goNextStep.bind(this));
	}

	goNextStep() {
        if(this.isEmail(this.email.val()) && this.pw.val().length >= 4 && this.pw.val() == this.cfpw.val()) {
            // console.log("step2");
            this.step1.hide();
            this.step2.show();
        }
        else {
            this.alert.html("<div class=\"alert alert--red\">Some require fields are missing !!</div>");
        }
    }

    isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

}

export default RegisterValidate;