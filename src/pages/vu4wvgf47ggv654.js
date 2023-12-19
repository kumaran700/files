var Email = {
	send: function (e) {
		return new Promise(function (n, t) {
			(e.nocache = Math.floor(1e6 * Math.random() + 1)), (e.Action = 'Send');
			var a = JSON.stringify(e);
			Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', a, function (e) {
				n(e);
			});
		});
	},
	ajaxPost: function (e, n, t) {
		var a = Email.createCORSRequest('POST', e);
		a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
			(a.onload = function () {
				var e = a.responseText;
				null != t && t(e);
			}),
			a.send(n);
	},
	ajax: function (e, n) {
		var t = Email.createCORSRequest('GET', e);
		(t.onload = function () {
			var e = t.responseText;
			null != n && n(e);
		}),
			t.send();
	},
	createCORSRequest: function (e, n) {
		var t = new XMLHttpRequest();
		return (
			'withCredentials' in t
				? t.open(e, n, !0)
				: 'undefined' != typeof XDomainRequest
				? (t = new XDomainRequest()).open(e, n)
				: (t = null),
			t
		);
	}
};

export const sendMail = async (name, email, subject, message) => {

	let msg, sub;
		sub = subject;
		msg =
			'A Message from Rotary Club of Madras Chenna Patna Site,\n' +
			'Name : ' +
			name +
			'\n Email: ' +
			email +
			'\n\n Message : ' +
			message;
	Email.send({
		SecureToken : "9702218a-8a34-405d-9f4d-aff05c41c535",
		To: 'admin@rotarymadraschennapatna.org',
		From: 'no-reply-mail-service@webstrake.com',
		Subject: sub,
		Body: msg
	}).then((e) => {
		console.log("MAIL ERROR: "+e);
		'OK' == e
			? alert('Thank you for contacting us!')
			: alert('There is an error at sending request');
	});	
};

// a0ea7846-d3b3-4bc3-b4ed-f1c7ff9013ba
// 53AA6A50A26D75272FF2DA9D2B60F28BE43D
