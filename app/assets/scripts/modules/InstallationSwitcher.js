import $ from 'jquery';

class InstallationSwitcher {
	constructor() {
        this.android = $("#android_btn");
        this.iOS = $("#iOS_btn");
		this.events();
	}

	events() {
		// var that = this;
        this.android.click(this.androidOpenClass);
        this.iOS.click(this.iOSOpenClass);
	}

	androidOpenClass() {
        $("#ios_install").removeClass("install__ios--open");
        $("#android_install").addClass("install__android--open");

        $(this).siblings("button").removeClass("active");
        $(this).addClass("active");
    }
    
    iOSOpenClass() {
        $("#android_install").removeClass("install__android--open");
        $("#ios_install").addClass("install__ios--open");

        $(this).siblings("button").removeClass("active");
        $(this).addClass("active");
	}
}

export default InstallationSwitcher;