$(document).ready(function(){
	//$('form').attr('target','_blank');
	var wpRegExp = /^[6789]\d{9}$/;
	var hpRegExp = /^[0-9]\d{2,4}-\d{6,8}$/;
	var emRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	$('input.submitButtonInput').click(function(event){
		var testValid = true;
		var wp = $('form .formRow div.formElement input[name="phoneno1"]').val();
		var FN = $('input[name="name"]').val();
		var RN = $('input[name="rollno"]').val();
		var EM = $('input[name="email"]').val();
			
		if(RN == "") {
			testValid = false;alert('Please enter your roll / registration number');
			event.preventDefault();
			$('form .formRow div.formElement input[name="rollno"]').focus();
			return;
		}
		if(FN == "") {
			testValid = false;alert('Please enter your name');
			event.preventDefault();
			$('form .formRow div.formElement input[name="name"]').focus();
			return;
		}
		if(wp ==""){
			testValid = false;
			alert('Please enter your mobile number');
			event.preventDefault();
			$('form .formRow div.formElement input[name="phoneno1"]').focus();
			return;
		}
		if(wp != undefined && wp != "") {
			if(!wpRegExp.test(wp)) {
				testValid = false;
				alert('Please enter valid mobile number');
				event.preventDefault();
				return;
			}
		}
		
		if(EM == "") {
			testValid = false;alert('Please enter your email');
			event.preventDefault();
			$('form .formRow div.formElement input[name="email"]').focus();
			return;
		}
		if(EM != undefined && EM != "") {
			if(!emRegExp.test(EM)) {
				testValid = false;
				alert('Please enter valid email');
				event.preventDefault();
				$('form .formRow div.formElement input[name="email"]').focus();
				return;
			}
		}
		
		$('form .formRow').each(function(){
			var selectField = $(this).find('div.formElement select[name="boardname"]');
			if(selectField.length == 1 ) {
				//Escape the phone fields
				var selectVal = selectField.val();
				if(selectVal == "" || selectVal == undefined || selectVal == '--- Select One ---') {
					testValid = false;
					alert('Please select Board Name');
					event.preventDefault();
					return;
				}
			}

		var selectField1 = $(this).find('div.formElement select[name="city"]');
			if(selectField1.length == 1 ) {
				//Escape the phone fields
				var selectVal1 = selectField1.val();
				if(selectVal1 == "" || selectVal1 == undefined || selectVal1 == '--- Select One ---') {
					testValid = false;
					alert('Please select City');
					event.preventDefault();
					return;
				}
			}
			
			var selectField2 = $(this).find('div.formElement select[name="preferredstream"]');
			if(selectField2.length == 1 ) {
				//Escape the phone fields
				var selectVal2 = selectField2.val();
				if(selectVal2 == "" || selectVal2 == undefined || selectVal2 == '--- Select One ---') {
					testValid = false;
					alert('Please select Preferred Course');
					event.preventDefault();
					return;
				}
			}
		});		
		
		if(testValid) {
			//$('form').attr('target','_self');
			//$('.registrationLeadForm').hide();
			//$('.leadTYMessage').show();
			//$('.loadingDiv').show();
			//$('.loadingImgDiv').show();
		}
	});

	$('input[name="phoneno1"]').change(function(){
		$('.examplePhoneBox').fadeOut();
	});
	
	$('input[name="phoneno1"]').keyup(function(){
		$('.examplePhoneBox').fadeIn();
		var value = $(this).val();
		var numberRegExp = /^\d*$/;
		if(value != "") {
			if(!numberRegExp.test(value)) {
				var newValue = value.substring(0,value.length-1);
				
			}
		}
	});
	$('input[name="name"]').keyup(function(){
		var value = $(this).val();
		var numberRegExp = /^[a-z|A-Z]*$/;
		if(value != "") {
			if(!numberRegExp.test(value)) {
				var newValue = value.substring(0,value.length-1);
				$(this).val(newValue);
			}
		}
	});
	/*$('input[name="rollno"]').keyup(function(){
		var value = $(this).val();
		if(value != "") {
			var newValue = value.substring(0,value.length-1);
			$(this).val(newValue);
		}
	});*/
	
	$('#CT').change(function ()
    { 
		$('span#optCT').html('');
		$('span#optCT').html($('#CT option:selected').text());
    });
	
	$('#BoardName').change(function ()
    { 
		$('span#optBoardName').html('');
		$('span#optBoardName').html($('#BoardName option:selected').text());
    });
	$('#ProgramOfInterest2').change(function ()
    { 
		$('span#optProgramOfInterest2').html('');
		$('span#optProgramOfInterest2').html($('#ProgramOfInterest2 option:selected').text());
    });

});
