import $ from 'jquery';
import jvalid from 'jquery-validation';
import form from 'jquery-form';

class FormValidation {
	constructor() {
        this.depForm = $("#deposit-form");
        this.withForm = $("#withdraw-form");
	    this.initialize();
	}

	initialize() {
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
		
        this.depForm.validate({
			rules: {
				transaction_datetime: {
					required: true
				},
				transaction_slip: {
					required: true
				},
				transaction_amount: {
					required: true,
					number: true
				}
			},
			messages: {
				transaction_datetime: {
					required: "Please enter your datetime!"
				},
				transaction_slip: {
					required: "Please upload slip!"
				},
				transaction_amount: {
					required: "Please enter your amount!",
					email: "Please enter a valid amount"
				}
			},
				
			// SUBMIT //
			submitHandler: function(form) {
				var result;
				$(".submit").attr("disabled", true);
				$(form).ajaxSubmit({
					type: "POST",
					url: baseUrl+"front/deposit",
					success: function(msg) {
						var res = JSON.parse(msg);
						if (res.status == 'OK') {
							result = res.text;
							$('#transaction_datetime').val('');
							$('#transaction_slip').val('');
							$('#transaction_amount').val('');
						} else {
							result = res.text;
							
						}
						
						$("#alert-area3").html(result);
						$(".submit").attr("disabled", false);
	
					},
					error: function() {
	
						result = '<div class="alert alert--red">There was an error sending the transaction!</div>';
						$("#alert-area3").html(result);
						$(".submit").attr("disabled", false);
					}
				});
			}
		});

		this.withForm.validate({
			rules: {
				transaction_security_code: {
					required: true,
					number: true
				},
				transaction_amount: {
					required: true,
					number: true
				}
			},
			messages: {
				transaction_security_code: {
					required: "Please enter your Security Code!"
				},
				transaction_amount: {
					required: "Please enter your amount!",
					email: "Please enter a valid amount"
				}
			},
				
			// SUBMIT //
			submitHandler: function(form) {
				var result;
				$(".submit").attr("disabled", true);
				$(form).ajaxSubmit({
					type: "POST",
					url: baseUrl+"front/withdraw",
					success: function(msg) {
						var res = JSON.parse(msg);
						if (res.status == 'OK') {
							result = res.text;
							$('#transaction_security_code').val('');
							$('.transaction_amount').val('');
						} else {
							result = res.text;
						}
						
						$("#alert-area4").html(result);
						$(".submit").attr("disabled", false);
					},
					error: function() {
	
						result = '<div class="alert alert--red">There was an error sending the request!</div>';
						$("#alert-area4").html(result);
						$(".submit").attr("disabled", false);
					}
				});
			}
		});
	}

}

export default FormValidation;
