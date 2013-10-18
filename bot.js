/* Convert from scientific notation to fixed, beyond 20 digits */
function toFixed(x) {
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split('e-')[1]);
		if (e) {
				x *= Math.pow(10,e-1);
				x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
				e -= 20;
				x /= Math.pow(10,e);
				x += (new Array(e+1)).join('0');
		}
	}
	return x;
}

function spendAll() {
	var score = toFixed(Number(Meteor.users.findOne({_id:Meteor.userId()}).profile.score));
	$(".details").append('<input type="button" id="' + score + '" value="LOL" class="buy btn span4">');
	$("#" + score).click();
}

setInterval(spendAll, 10000);