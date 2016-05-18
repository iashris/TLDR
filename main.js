var intab;
function report (arg) {
	if(arg=="office"){
		intab=["Public","Staff"];
		var th='<table class="table borderless">\
    <thead><tr><th></th><th><i class="fa fa-mars" aria-hidden="true"></i> Male</th><th><i class="fa fa-venus" aria-hidden="true"></i> Female</th></tr></thead><tbody><tr><td>'+intab[0]+'</td><td><input id="c11" class="form-control" type="text"></td><td><input id="c12" class="form-control" type="text"></td></tr><tr> \
    <td>'+intab[1]+'</td><td><input id="c21" class="form-control" type="text"></td><td><input id="c22" class="form-control" type="text"></td></tr></tbody></table><button class="btn btn-primary" onclick="results();">Go!</button>';
$('#malfem').html(th);
	}
	// body...
}
function results(){
	var Public_Male=parseInt($('#c11').val());
	var Public_Female=parseInt($('#c12').val());
	var Staff_Male=parseInt($('#c21').val());
	var Staff_Female=parseInt($('#c22').val());

	var pm_wc=oneper(25,Public_Male);
	var pf_wc=oneper(15,Public_Female);
	var sm_wc=oneper(25,Staff_Male);
	var sf_wc=oneper(15,Staff_Female);

	//urinals--
	var pm_ur=urinal(Public_Male);
	var sm_ur=urinal(Staff_Male);

	//washbasin
	var pm_wa=oneper(25,Public_Male);
	var pf_wa=oneper(25,Public_Female);
	var sm_wa=oneper(25,Staff_Male);
	var sf_wa=oneper(25,Staff_Female);

	//Drinking water fountain
	var pm_dr=oneper(100,Public_Male);
	var pf_dr=oneper(100,Public_Female);
	var sm_dr=oneper(100,Staff_Male);
	var sf_dr=oneper(100,Staff_Female);


//Visualize the results
var th='<table class="table borderless">\
    <thead><tr><th></th><th><i class="fa fa-mars" aria-hidden="true"></i> Public Male</th><th><i class="fa fa-venus" aria-hidden="true"></i> Public Female</th><th><i class="fa fa-mars" aria-hidden="true"></i> Staff Male</th><th><i class="fa fa-venus" aria-hidden="true"></i> Staff Female</th></tr></thead><tbody><tr><td>Water Closets</td><td>'+pm_wc+'</td><td>'+pf_wc+'</td><td>'+sm_wc+'</td><td>'+sf_wc+'</tr><tr> \
    <td>Urinals</td><td>'+pm_ur+'</td><td>0</td><td>'+sm_ur+'</td><td>0</td></tr><tr><td>Washbasins</td><td>'+pm_wa+'</td><td>'+pf_wa+'</td><td>'+sm_wa+'</td><td>'+sf_wa+'</td></tr><tr><td>Drinking Fountain</td><td>'+pm_dr+'</td><td>'+pf_dr+'</td><td>'+sm_dr+'</td><td>'+sf_dr+'</td></tr></tbody></table><h5>Based on National Building Code of India, 2005 Part 9: Table 9 to 22</h5>';

var nb='<h4>NOTE:</h4><ol><li>For Executive Rooms and Office conference halls, an attached toilet unit should be provided for individual officer room. For Public, a toilet suite comprising of one WC and one washbasin common for Male/Female or separate should be provided.</li> \
<li>One cleanear sink must be provided in each floor.</li><li>One absolution tap is provided in each WC.</li></ol>';
$('#prm').html(th);
$('#note').html(nb);
$('#drpdwn').html('');
$('#malfem').html('');

}
function oneper(pernum,numuser){
	return 1+parseInt(numuser/pernum);
}
function urinal(n){
	if(n<=6){
		return 0;
	}
	if(n<=20){
		return 1;
	}
	if(n<=45){
		return 2;
	}
	if(n<=70){
		return 3;
	}
	if(n<=100){
		return 4;
	}
	if(n<=200){
		return 4+Math.round(0.03*(n-100));
	}
	if(n>200){
		return 7+Math.round(0.025*(n-200));
	}
}
