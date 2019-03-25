/* gacode */
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-83528157-2', 'auto');
ga('send', 'pageview');
//ga("send", "pageview", 'wpage' + _t);

var plan_content = {
    '4g.json': {
        "type": "table1",
        "content": [
            ["999元", "—", "400元", "500元", "650元", "800元", "{vip}", "—"],
            ["1,399元", "1,000元{5}", "{vip}", "1,000元"],
            ["1,799元", "2,000元{5}", "{vip}", "2,000元"],
            ["2,699元", "3,000元{5}", "{vip}", "3,000元"]
        ]
    },
    'student.json': {
        "type": "table2",
        "plan": ["589", "789", "989"],
        "content": [
            ["h1row", "iPhone 7", "32G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 7", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone 7", "256G", "25,500", "24,000", "23,000"],
            ["h1row", "iPhone 7 Plus", "32G", "21,900", "20,400", "19,400"],
            ["h1row", "iPhone 7 Plus", "128G", "25,900", "24,400", "23,400"],
            ["h1row", "iPhone 7 Plus", "256G", "29,900", "28,400", "27,400"],
            ["h1row", "iPhone 6s", "<span>*</span>16G", "11,500", "10,000", "9,000"],
            ["h1row", "iPhone 6s", "32G", "13,500", "12,000", "11,000"],
            ["h1row", "iPhone 6s", "128G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 6s Plus", "<span>*</span>16G", "15,500", "14,000", "13,000"],
            ["h1row", "iPhone 6s Plus", "32G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 6s Plus", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone SE", "16G", "8,500", "7,000", "6,000"],
            ["h1row", "iPhone SE", "64G", "10,500", "9,000", "8,000"],
            ["h1row", "iPhone 6 Plus", "<span>*</span>16G", "11,500", "10,000", "9,000"]
        ]
    },
    'upgrade.json': {
        "type": "table3",
        "content": [
            ["iPhone 7", "32G", "24,500", "128G", "28,500", "256G", "32,500"],
            ["iPhone 7 Plus", "32G", "28,900", "128G", "32,900", "256G", "36,900"],
            ["iPhone 6s", "<span>*</span>16G", "18,500", "32G", "20,500", "128G", "24,500"],
            ["iPhone 6s Plus", "<span>*</span>16G", "22,500", "32G", "24,500", "128G", "28,500"],
            ["iPhone SE", "16G", "15,500", "64G", "17,500"],
            ["iPhone 6 Plus", "<span>*</span>16G", "18,500"]
        ]
    },	
	'2gto4g.json': {
        "type": "table4",
        "plan": ["587", "787", "987"],
        "content": [
            ["h1row", "iPhone 7", "32G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 7", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone 7", "256G", "25,500", "24,000", "23,000"],
            ["h1row", "iPhone 7 Plus", "32G", "21,900", "20,400", "19,400"],
            ["h1row", "iPhone 7 Plus", "128G", "25,900", "24,400", "23,400"],
            ["h1row", "iPhone 7 Plus", "256G", "29,900", "28,400", "27,400"],
            ["h1row", "iPhone 6s", "<span>*</span>16G<br/>售完為止", "11,500", "10,000", "9,000"],
            ["h1row", "iPhone 6s", "32G", "13,500", "12,000", "11,000"],
			["h1row", "iPhone 6s", "64G<br/>售完為止", "15,500", "14,000", "13,000"],
            ["h1row", "iPhone 6s", "128G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 6s Plus", "<span>*</span>16G<br/>售完為止", "15,500", "14,000", "13,000"],
            ["h1row", "iPhone 6s Plus", "32G", "17,500", "16,000", "15,000"],
			["h1row", "iPhone 6s Plus", "64G<br/>售完為止", "19,500", "18,000", "17,000"],
            ["h1row", "iPhone 6s Plus", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone SE", "16G", "8,500", "7,000", "6,000"],
            ["h1row", "iPhone SE", "64G", "10,500", "9,000", "8,000"],
            ["h1row", "iPhone 6", "<span>*</span>16G", "9,500", "8,000", "7,000"],
			["h1row", "iPhone 6", "<span>*</span>64G", "11,500", "10,000", "9,000"],
			["h1row", "iPhone 6", "<span>*</span>128G", "15,500", "14,000", "13,000"]
			["h1row", "iPhone 6 Plus", "<span>*</span>16G", "11,500", "10,000", "9,000"],
			["h1row", "iPhone 6 Plus", "<span>*</span>64G", "15,500", "14,000", "13,000"]
        ]
    }
	
}

/* global js */
$(function() {
    $.ajaxSetup({ cache: false });
    $('.header').load('element/header.html');
    $('.footer').load('element/footer.html', function() {
        $('img[usemap]').rwdImageMaps();
    });

    $('.header').on('click', '#btn-menu-toggle', function() {
        $('.header .menu').toggle();
    });

    var compare = $('#compare-main-table');
    if (compare.length) {
        compare.load('element/compare_table.html', function() {
            $('.i7p , .i7').addClass('coming');
            $('.chose-iphone').click(function() {
                $('.ul-w input[type="checkbox"]').removeAttr('checked');
                $('#com_phone_select').fadeIn();
            });
            $('#com_phone_select input').click(function() {
                if ($('#com_phone_select input:checked').length > 2) {
                    alert('你已選擇兩款 iPhone 機種。');
                    return false;
                }
            });
            $('.com_button').click(function() {
                if ($('#com_phone_select input:checked').length != 2) {
                    alert('請選擇兩款 iPhone 機種進行比較。');
                    return false;
                }
                $('#compare-main-table td').removeClass('coming');
                $('#com_phone_select input:checked').each(function() {
                    $('.' + $(this).val()).addClass('coming');
                });
                $('#com_phone_select').fadeOut();
            });
            $('#com_phone_select .close').click(function() {
                $('#com_phone_select').fadeOut();
                return false;
            });
        });
    }

    var plan = $('.plan-table');
    if (plan.length && plan.data('plan-name')) {
        var json = plan_content[plan.data('plan-name')];
        var final = '';
        var item_length = 0;

        if (json.type === 'table1') {
            final = table1(json);
            plan.find('.slides').html(final);
            item_length = json.content.length;
        } else if (json.type === 'table2') {
            final = table2(json);
            plan.html(final);
            item_length = json.plan.length;
        } else {
            final = table3(json);
            console.debug(final);
            plan.html(final);
        }

        if ($('body').width() < 768) {
            $('#slide').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                startAt: 0,
                animationSpeed: 300,
                before: function() {
                    $('.bg').fadeOut();
                },
            });

            setTimeout(function() {
                $(".slides li").width($(".flex-viewport").width());
            }, 1000);
        } else {
            if (json.type !== 'table3') {
                $('.slides li').css('width', 100 / item_length + '%');
            }
        }
    }
});

function table1(json) {
    var content = '';

    $.each(json.content, function(i, row) {

        var column = '';
        $.each(row, function(i, d) {
            var tr_classname = (d === '{vip}') ? 'h2row' : 'h1row';
            var td_classname = (i > 0) ? ' color-6' : ' color-2 plan-name';
            var result = null;
            td_classname = (i == row.length - 1) ? ' color-7' : td_classname;
            if (result = /(.*){(\d)}/.exec(d)) {
                tr_classname = 'h' + result[2] + 'row';
                d = result[1];
            } else if (d === '{vip}') {
                d = '依優質客戶等級<br>再折500~5,000元';
                td_classname += ' vip';
            }
            column += '<tr class="' + tr_classname + '"><td class="' + td_classname + '">' + d + '</td></tr>';
        });

        content += '<li><table cellpadding="0" cellspacing="0">' + column + '</table></li>';
    });

    return content;
}

function table2(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function(plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function(i, data) {
            //console.log(data);
            has_div = data[0]
            li += '<tr class="' + has_div + '"><td>' + data[3 + plan_i] + '</td></tr>';
            rows_count++;
            if (last_name != data[1]) {
                last_name = data[1];
                sizes_count++;
                sizes[sizes_count] = [last_name];
            }
            sizes[sizes_count].push(data[2]);
        });
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-2-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function(i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-2-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-2-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-2-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-2-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table2" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-2-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}

function table3(json) {
    var tmp = '';
    $.each(json.content, function(i, data) {
        tmp += '<tr><td class="color-3-2" rowspan="' + (data.length - 1) / 2 + '">' + data[0] + '</td>';
        for (var i = 1; i < data.length; i += 2) {
            if (i != 1) tmp += '<tr>';
            tmp += '<td>' + data[i] + '</td><td>' + data[i + 1] + '</td></tr>';
        }
    });
    return '<table class="table3"><tr><th class="color-3-1">機型</th><th class="color-3-1">容量</th><th class="color-3-1">購機優惠(元)</th></tr>' + tmp + '</table>';
}


function table4(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function(plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function(i, data) {
            //console.log(data);
            has_div = data[0]
            li += '<tr class="' + has_div + '"><td>' + data[3 + plan_i] + '</td></tr>';
            rows_count++;
            if (last_name != data[1]) {
                last_name = data[1];
                sizes_count++;
                sizes[sizes_count] = [last_name];
            }
            sizes[sizes_count].push(data[2]);
        });
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-2-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function(i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-2-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-2-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-2-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-2-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table2" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-2-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}