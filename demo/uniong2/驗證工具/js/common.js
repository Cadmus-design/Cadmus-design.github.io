$.ajaxSetup({
	// type: 'POST',
	cache : false
});

function ajax(url, data, fn) {
	$.ajax({
		url : url,
		type : 'POST',
		cache : false,
		dataType : 'json',
		data : data,
		success : fn,
		error : function(jqXHR, textStatus, errorThrown) {
			if (jqXHR.status == 450) {
				var o = $.parseJSON(jqXHR.responseText);
				if (window.top == window.self) {
					console.log("AAAAAAAAAAAAAAAAAAA");
					window.location.href = o.url;
				} else {
					console.log("BBBBBBBBBBBBBBBBBBB");
					window.top.location.href = o.url;
				}
				return;
			}
			alert('occur ajax erroe, type : ' + textStatus);
		},
		complete : function(xhr, status) {
			if ($.bodyUnmask) {
				$.bodyUnmask();
			}
		}
	});
}
function ajaxasy(url, data, async, fn) {
	$.ajax({
		url : url,
		type : 'POST',
		async : async,
		cache : false,
		dataType : 'json',
		data : data,
		success : fn,
		error : function(jqXHR, textStatus, errorThrown) {
			if (jqXHR.status == 450) {
				var o = $.parseJSON(jqXHR.responseText);
				if (window.top == window.self) {
					window.location.href = o.url;
				} else {
					window.top.location.href = o.url;
				}
				return;
			}
			alert('occur ajax erroe, type : ' + textStatus);
		},
		complete : function(xhr, status) {

		}
	});
}

function MM_preloadImages() { // v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}

function MM_swapImgRestore() { // v3.0
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
		x.src = x.oSrc;
}

function MM_findObj(n, d) { // v4.01
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	return x;
}

function MM_swapImage() { // v3.0
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc)
				x.oSrc = x.src;
			x.src = a[i + 2];
		}
}
// 判斷是否為空白 or Null
function isEmpty(str) {
	if (str == null || str == "")
		return true;
	return false;
}
// 檢核是否為整數型態之數字
function chknumberformat(chkstr, msgheader) {
	var iCode = 0;
	// parse every char, no restriction
	for (var i = 0; i < chkstr.length; i++) {
		iCode = chkstr.charCodeAt(i);
		if ((iCode < '0'.charCodeAt(0) || iCode > '9'.charCodeAt(0))) {
			alert(msgheader + "必須為整數型態!");
			return false;
		}
	}
	if (chkstr.substring(0, 1) == '0') {
		alert(msgheader + "第一碼不可為0!");
		return false;
	}
	return true;
}

function contains(obj, a) {
	var isContains = false;
	for (var i = 0; i < a.length; i++) {
		if (a[i].replace(' ', '') == obj) {
			isContains = true;
		}
	}
	return isContains;
}

/* 預算科 */
function left() {
	$("select[name=left] option:selected").appendTo("#right");
}
function right() {
	$("select[name=right] option:selected").appendTo("#left");
}
function cancel() {
	$("select[name=right] option").appendTo("#left");
}
function check(name, ids, url) {
	var admin = "";
	var adminval = "";
	var realadmin = "";
	var realadminval = "";
	var count = 0;

	if (ids == "ids") {
		window.opener.$("#ids").val($("#right").val());
	} else if (ids == "realids") {
		window.opener.$("#realids").val($("#right").val());
	} else if (ids == "units") {
		window.opener.$("#units").val($("select#right").val());
	} else {
		window.opener.$("#budgets").val($("select#right").val());
		if (url != '') {
			ajaxasy(
					url,
					{
						budget_sn : window.opener.$("#budgets").val()
					},
					false,
					function(data) {
						var html = '';
						var len = data.length;
						for (var i = 0; i < len; i++) {// 單位
							var item = data[i].budget_name;
							html += '<div><FONT COLOR="RED">'
									+ data[i].name
									+ '</FONT>&nbsp;&nbsp;&nbsp;<input type=button id=add'
									+ i
									+ ' onclick=change('
									+ i
									+ ') value=+ /> <br/><div style="display: none;" id=show'
									+ i + '>';
							for (var j = 0; j < item.length; j++) {// 對應的預算科目
								html += item[j] + '<br/>';
							}
							html += '</div></div>';
						}
						window.opener.document.getElementById(name).innerHTML = html;
					});
		}
	}

	$("select[name=right] option").each(function() {
		if (admin == "") {
			admin += $(this).text();
			adminval += $(this).val();
			realadmin += $(this).text();
			realadminval += $(this).val();
		} else {
			admin += "、" + $(this).text();
			adminval += "," + $(this).val();
			realadmin += "、" + $(this).text();
			realadminval += "," + $(this).val();
		}
		count++;
	});

	if (ids == "realids") {
		window.opener.$("#realids").val("check," + realadminval);
	} else if (ids == "ids") {
		window.opener.$("#ids").val("check," + adminval);
	}

	if (name == 'realadmin' && count > 1) {
		alert("主管理者只能選一人");
		realadmin = "";
		realadminval = "";
		return;
	} else if (name == 'realadmin' && count == 0) {
		alert("至少選一人");
		realadmin = "";
		realadminval = "";
		return;
	}
	if (name == 'realadmin' && count == 1) {
		var answer = confirm("是否更換主要預算管理者?");
		if (!answer) {
			window.opener.$("#realids").val("");
		} else {
			window.opener.document.getElementById(name).innerHTML = realadmin;
		}
	} else {
		if (name != 'realadmin' && name != 'budget') {
			window.opener.document.getElementById(name).innerHTML = admin;
			window.opener.$("#unitname").val(admin);
		} else {
			if (url == '') {
				window.opener.document.getElementById(name).innerHTML = admin;
				window.opener.$("#budgetname").val(admin);
			}
		}
	}
	window.close();
}

/* Verify 是否至少選擇一筆資料 */
function checkverify(action) {
	var falg = 0;
	$("input[type='checkbox']").each(function() {
		if ($(this).prop("checked")) {
			falg += 1;
		}
	});
	if (falg > 0) {
		$("#sform").attr("action", action);
		$("#sform").submit();
	} else {
		alert("至少要選擇一筆資料!!");
	}
}

function checkverify(action, status) {
	var falg = 0;
	$("input[type='checkbox']").each(function() {
		if ($(this).prop("checked")) {
			falg += 1;
		}
	});
	if (falg > 0) {
		$("#status").attr("value", status);
		$("#sform").attr("action", action);
		$("#sform").submit();
	} else {
		alert("至少要選擇一筆資料!!");
	}
}

function ow(url) {
	window.open(url, "", config = 'height=250,width=500');
}

function reasonClick(reasontag, litag, listSize) {
	var isSelect = false;
	var nowselect = -1;
	var chselect = -1;
	var txNTP = document.getElementById(reasontag);
	var ctmselect = document.getElementById(litag);

	ctmselect.style.display = "block";
	for (var j = 0; j < listSize; j++) {
		var li = $("#" + litag).find("li").get(j);
		if (txNTP.value == li.innerHTML) {
			// same as the default content of txNTP
			li.style.background = "#1980EC";
			li.style.color = "#fff"
		} else {
			li.style.background = "#ffffff";
			li.style.color = "#000"
		}
	}

	for (var i = 0; i < listSize; i++) {
		var li = $("#" + litag).find("li").get(i);
		li.onmousedown = function() {
			nowselect = parseInt(this.id.substr(2));
			if (chselect != nowselect) {
				li.style.background = "#ffffff";
			}
			this.style.background = "#1980EC";
			this.style.color = "#ffffff";
		}

		li.onmouseup = function() {
			chselect = parseInt(this.id.substr(2));
			ctmselect.style.display = "none";
			$("#" + reasontag).focus().val(
					this.innerHTML.replace(/^\s+|\s+$/g, ''));// 焦點

			if ("6" == $("#leavetype").val()) {
				$("#originReason").val($("#reason").val());
				healthNotice();
			}
		}

		li.onmouseover = function() {
			if (parseInt(this.id.substr(2)) != nowselect) {
				this.style.background = "#1980EC";
				this.style.color = "#ffffff";
			}
		}

		li.onmouseout = function() {
			if (parseInt(this.id.substr(2)) != nowselect) {
				this.style.background = "#ffffff";
				this.style.color = "#000000";
			}
		}

		ctmselect.onmouseover = function() {
			isSelect = true;
		}

		ctmselect.onmouseout = function() {
			isSelect = false;
		}
	}

	txNTP.onblur = function() {
		if (isSelect == false) {
			ctmselect.style.display = "none";
		}
	}
}

function datepicker(datatag) {
	$("#" + datatag).datepicker({
		inline : true,
		changeYear : true,
		changeMonth : true,
		showOtherMonths : true,
		selectOtherMonths : true,
		defaultDate : new Date()
	});
	$("#" + datatag).datepicker("show");
}

function datepicker(datatag, chosePastDay) {
	if ("false" == chosePastDay) {
		$("#" + datatag).datepicker({
			inline : true,
			changeYear : true,
			changeMonth : true,
			showOtherMonths : true,
			selectOtherMonths : true,
			minDate : new Date()
		});
		$("#" + datatag).datepicker("show");
	} else {
		$("#" + datatag).datepicker({
			inline : true,
			changeYear : true,
			changeMonth : true,
			showOtherMonths : true,
			selectOtherMonths : true,
			defaultDate : new Date()
		});
		$("#" + datatag).datepicker("show");
	}
}

function timepicker(datatag) {
	$("#" + datatag).timepicker({
		timeFormat : 'H:i',
		'show2400' : false
	});
	$("#" + datatag).timepicker("show");
}

function dateInput(tagName, defaultValue) {
	return dateInput(tagName, defaultValue, true);
}

function dateInput(tagName, defaultValue, chosePastDay) {
	var $dateInput = $('<input>', {
		type : 'text',
		name : tagName,
		id : tagName,
		'class' : 'p4_form_text_day',
		readonly : 'readonly',
		value : defaultValue
	});
	if (false == chosePastDay) {
		$dateInput.datepicker({
			inline : true,
			changeYear : true,
			changeMonth : true,
			showOtherMonths : true,
			selectOtherMonths : true,
			minDate : new Date()
		});
	} else {
		$dateInput.datepicker({
			inline : true,
			changeYear : true,
			changeMonth : true,
			showOtherMonths : true,
			selectOtherMonths : true,
			defaultDate : new Date()
		});
	}
	return $dateInput;
}

function timeInput(tagName, defaultValue) {
	var $timeInput = $('<input>', {
		type : 'text',
		name : tagName,
		id : tagName,
		'class' : 'p4_form_text_day',
		style : 'width:50px;',
		value : defaultValue
	});
	$timeInput.timepicker({
		timeFormat : 'H:i',
		'show2400' : false

	});
	return $timeInput;
}

function StringBuffer() {
	this._Strings = new Array();
}

StringBuffer.prototype = {
	append : function(str) {
		this._Strings.push(str);
	},
	toString : function() {
		return this._Strings.join("");
	},
	length : function() {
		return this.toString().length;
	},
	indexOf : function(compare) {
		return this.toString().indexOf(compare);
	}
}

// 全選checkbox
function checkAll(allTag) {
	if ($("#" + allTag).prop("checked")) {
		$("input[type='checkbox']").each(function() {
			$(this).prop("checked", true);
		});
	} else {
		$("input[type='checkbox']").each(function() {
			$(this).prop("checked", false);
		});
	}
}

// 民國年月日加減
function rocDateCalculate(type, NumDay, dtDate) {
	var type = parseInt(type); // 類型
	var lIntval = parseInt(NumDay); // 間隔

	var year = parseInt(dtDate.substr(0, 3), 10) + 1911;
	var month = parseInt(dtDate.substr(3, 2), 10) - 1;
	var days = parseInt(dtDate.substr(5, 2), 10);
	var date = new Date(year, month, days);

	switch (type) {
	case 1:// 年
		date.setYear(date.getFullYear() + lIntval);
		break;
	case 2:// 季度
		date.setMonth(date.getMonth() + (lIntval * 4));
		break;
	case 3:// 月
		date.setMonth(date.getMonth() + lIntval);
		break;
	case 4:// 天
		date.setDate(date.getDate() + lIntval);
		break;
	default:
	}

	return LPad("" + parseInt(date.getFullYear() - 1911), "0", 3) + '-'
			+ LPad("" + parseInt(date.getMonth() + 1), "0", 2) + '-'
			+ LPad("" + parseInt(date.getDate()), "0", 2);
}

// 向左補零
function LPad(str, sub, len) {
	var str1 = str;
	while (1) {
		var i = str1.length;
		if (i >= len) {
			break;
		} else {
			str1 = sub + str1;
		}
	}
	return str1;
}

function getContextPath() {
	var path = parent.document.getElementById("ctxPath");
	if (path == undefined && opener != undefined) {
		path = opener.parent.document.getElementById("ctxPath");
	}
	if (path == null || path == undefined) {
		path = parent.document.getElementById("ctxPath");
	}
	return path.value;
}

function Map() {
	this._map = new Object();
}

Map.prototype = {
	push : function(key, value) {
		this._map[key] = value;
	},
	remove : function(key) {
		delete this._map[key];
	},
	values : function() {
		return this._map;
	},
	get : function(key) {
		return this._map[key];
	},
	keys : function() {
		var s = new Array();
		for ( var p in this._map) {
			s.push(p);
		}
		return s;
	},
	toJSON : function() {
		return JSON.stringify(this._map);
	},
	toString : function() {
		var sb = new StringBuffer();
		for ( var p in this._map) {
			if (this._map.hasOwnProperty(p)) {
				sb.append(p + ":" + this._map[p] + "\n");
			}
		}
		return sb.toString();
	}
};

function getResultTrTag() {
	return $('<tr>');
}

function getResultTdTag() {
	return $('<td>');
}
$(function() {
	$.ctx = function() {
		var contextPath = $("meta[name='contextPath']").attr("content");
		if (contextPath === undefined) {
			throw ("contextPath not found...");
		}
		return contextPath;
	};
	$.checkYearMonthForCpapb02m = function(yearMonth, success) {
		var checkUrl = $.ctx() + "/p4/common/checkCpapb02m.ug";
		ajax(checkUrl, {
			checkType : 1,
			yearMonth : yearMonth
		}, function(data) {
			if (!data.status) {
				alert(data.message);
				return false;
			}
			success.call(this);
		});
	};
	$.checkBeginDateToEndDateForCpapb02m = function(beginDate, endDate, success) {
		var checkUrl = $.ctx() + "/p4/common/checkCpapb02m.ug";
		ajax(checkUrl, {
			checkType : 2,
			beginDate : beginDate,
			endDate : endDate
		}, function(data) {
			if (!data.status) {
				alert(data.message);
				return false;
			}
			success.call(this);
		});
	};
	// <194_SW-48>
	$.checkYearMonthForCpaphyymm = function(beginDate, endDate, success) {
		var checkUrl = $.ctx() + "/p4/common/checkCpaphyymm.ug";
		ajax(checkUrl, {
			beginDate : beginDate,
			endDate : endDate
		}, function(data) {
			if (!data.status) {
				alert(data.message);
				return false;
			}
			success.call(this);
		});
	};
	$.fn.pageLoad = function(pageUrl) {
		$(this).load(pageUrl);
	};
	$.parseData = function(data) {
		data = data.replace("<pre>", "").replace("</pre>", "").replace(/\\/g,
				"");
		if (data.substring(0, 1) == "\"") {
			data = data.substring(1, data.length);
		}
		if (data.substring(data.length - 1, data.length) == "\"") {
			data = data.substring(0, data.length - 1);
		}
		return $.parseJSON(data);
	};
	$.validateEmail = function(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	$.getWindowTopName = function(){
		if(window.parent && typeof window.parent.getWindowTopName === 'function'){
			return window.parent.getWindowTopName();
		}else if (window.top != window.self && window.name != undefined && window.name !='') {
			return window.name;
		}else{
			return "_top";
		}
	}
});
/**
 * from 距離現在幾天 ex. -1代表昨天 0代表今天 1代表明天
 */
function getROCDate(from) {
	var d = new Date();
	d.setDate(d.getDate() + from);
	var year = d.getFullYear() - 1911;
	var month = parseInt(d.getMonth()) + 1 < 10 ? "0" + (d.getMonth() + 1) : d
			.getMonth() + 1;
	var date = parseInt(d.getDate()) < 10 ? "0" + (d.getDate()) : d.getDate();
	var dayArray = [ '日', '一', '二', '三', '四', '五', '六' ];
	var day = dayArray[d.getDay()];
	return year + "-" + month + "-" + date;
}

/**
 * 抓到"星期幾"
 * 
 * @param from
 *            ex. -1代表昨天 0代表今天 1代表明天
 */
function getDayOfWeek(from) {
	var d = new Date();
	d.setDate(d.getDate() + from);
	var dayArray = [ '日', '一', '二', '三', '四', '五', '六' ];
	return dayArray[d.getDay()];
}

function escape(html) {
	var codeSpan = /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm;
	var codeBlock = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;
	var spans = [];
	var blocks = [];
	var text = String(html).replace(/\r\n/g, '\n').replace('/\r/g', '\n');
	text = '\n\n' + text + '\n\n';

	text = text.replace(codeSpan, function(code) {
		spans.push(code);
		return '`span`';
	});

	text += '~0';

	return text.replace(codeBlock, function(whole, code, nextChar) {
		blocks.push(code);
		return '\n\tblock' + nextChar;
	}).replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,
			'&gt;').replace(/"/g, '&quot;').replace(/`span`/g, function() {
		return spans.shift();
	}).replace(/\n\tblock/g, function() {
		return blocks.shift();
	}).replace(/~0$/, '').replace(/^\n\n/, '').replace(/\n\n$/, '');
}

function disableAllActions() {
	var rad = document.getElementsByTagName("input");
	for (var i = 0; i < rad.length; i++) {
		var e = rad[i];
		if (e.type == 'button' || e.type == 'submit' || e.type == 'reset') {
			e.disabled = true;
		}
	}

	rad = document.getElementsByTagName("button");
	for (var i = 0; i < rad.length; i++) {
		var e = rad[i];
		if (e.type == 'button' || e.type == 'submit') {
			e.disabled = true;
		}
	}
}

function enableAllActions() {
	var rad = document.getElementsByTagName("input");
	for (var i = 0; i < rad.length; i++) {
		var e = rad[i];
		if (e.type == 'button' || e.type == 'submit' || e.type == 'reset') {
			e.disabled = false;
		}
	}

	rad = document.getElementsByTagName("button");
	for (var i = 0; i < rad.length; i++) {
		var e = rad[i];
		if (e.type == 'button' || e.type == 'submit') {
			e.disabled = false;
		}
	}
}

/**
 * 日期格式轉換
 * 
 * @param dateStr
 *            eeeMMddHHmm or yyyyMMddHHmm
 * @return eee-MM-dd (W) HH:mm
 */
function getDateWeekDisplay(dateStr) {
	var weekList = [ '日', '一', '二', '三', '四', '五', '六' ];

	var year = '';
	var month = '';
	var date = '';
	var hour = '';
	var min = ''

	if (('' + dateStr).length === 8) {
		year = Number(dateStr.substring(0, 4)) - 1911
		month = dateStr.substring(4, 6);
		date = dateStr.substring(6, 8);
		hour = dateStr.substring(8, 10);
		min = dateStr.substring(10, 12);
	} else {
		year = dateStr.substring(0, 3);
		month = dateStr.substring(3, 5);
		date = dateStr.substring(5, 7);
		hour = dateStr.substring(7, 9);
		min = dateStr.substring(9, 11);
	}

	date = new Date(year, month, date, hour, min);
	var dateYear = date.getFullYear();
	var dateMonth = date.getMonth() < 10 ? '0' + date.getMonth() : date
			.getMonth();
	var dateDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	var dateWeek = weekList[date.getDay()];
	var dateHour = date.getHours() < 10 ? '0' + date.getHours() : date
			.getHours();
	var dateMin = date.getMinutes() < 10 ? '0' + date.getMinutes() : date
			.getMinutes();
	return dateYear + '-' + dateMonth + '-' + dateDate + ' (' + dateWeek + ') '
			+ dateHour + ':' + dateMin;
}

/**
 * @param distance
 *            距離當月多少的月 可為0 return year : 年 month : 月 days 當月天數
 */
function getSpecificMonthInfo(distance) {
	var d = new Date();
	var newMonth = d.getMonth() + distance;
	if (newMonth < 0) {
		newMonth += 12;
		d.setYear(d.getFullYear() - 1);
	} else if (newMonth > 12) {
		newMonth -= 12;
		d.setYear(d.getFullYear() + 1);
	}
	d.setMonth(newMonth);
	return {
		year : d.getFullYear(),
		month : d.getMonth() + 1,
		days : new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
	};
}

function trim(str){ //刪除左右兩端空格
	return str.replace(/^\s+|\s+$/gm,'');
}