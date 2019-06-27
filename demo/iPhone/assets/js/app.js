/* gacode */
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
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



/*1117*/
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-83528157-2');
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-83528157-9');

/*1117*/

/* GTM 20170628 */
/*Google Tag Manager*/
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TJ6FMT8');
/* GTM 20170628 end*/

var plan_content = {
    '4g.json': {
        "type": "table1",
        "content": [
            ["999元", "400元", "500元", "650元", "800元", "{vip}"],
            ["1,199元", "500元", "600元", "700元", "1,000元", "{vip}"],
            ["1,399元", "500元", "600元", "700元", "1,000元", "{vip}"],
            ["1,599元", "500元", "650元", "750元", "1,000元", "{vip}"],
            ["1,799元", "500元", "700元", "800元", "1,000元", "{vip}"],
            ["2,699元", "600元", "700元", "800元", "1,000元", "{vip}"]
        ]
    },
    'student.json': {
        "type": "table2",
        "plan": ["388元", "588元", "688元"],
        "content": [
            ["h1row", "iPhone XR", "64GB", "-", "22,900", "21,900"],
            ["h1row", "iPhone XR", "128GB", "-", "24,900", "23,900"],
            ["h1row", "iPhone XR", "256GB", "-", "28,500", "27,500"],
            ["h1row", "iPhone XS", "64GB", "-", "31,900", "30,900"],
            ["h1row", "iPhone XS", "256GB", "-", "37,500", "36,500"],
            ["h1row", "iPhone XS", "512GB", "-", "44,900", "43,900"],
            ["h1row", "iPhone XS Max", "64GB", "-", "35,900", "34,900"],
            ["h1row", "iPhone XS Max", "256GB", "-", "41,500", "40,500"],
            ["h1row", "iPhone XS Max", "512GB", "-", "48,900", "47,900"],
            ["h1row", "iPhone 8", "64GB", "17,500", "15,500", "14,500"],
            ["h1row", "iPhone 8", "256GB", "23,100", "21,100", "20,100"],
            ["h1row", "iPhone 8 Plus", "64GB", "21,500", "19,500", "18,500"],
            ["h1row", "iPhone 8 Plus", "256GB", "27,100", "25,100", "24,100"],
            ["h1row", "iPhone 7*", "32GB", "10,900", "8,900", "7,900"],
            ["h1row", "iPhone 7*", "128GB", "14,900", "12,900", "11,900"],
            ["h1row", "iPhone 7 Plus*", "32GB", "13,400", "11,400", "10,400"],
            ["h1row", "iPhone 7 Plus*", "128GB", "17,400", "15,400", "14,400"]
        ]
    },
    'upgrade.json': {
        "type": "table3",
        "content": [
            ["iPhone XR", "64GB", "26,900",  "128GB", "28,900", "256GB", "32,500"],
            ["iPhone XS", "64GB", "35,900",  "256GB", "41,500",  "512GB", "48,900"],
            ["iPhone XS Max", "64GB", "39,900",  "256GB", "45,500", "512GB", "52,900"],
            ["iPhone 8", "64GB", "21,500",  "256GB", "27,100"],
            ["iPhone 8 Plus", "64GB", "25,500", "256GB", "31,100"],
            ["iPhone 7*", "32GB", "15,900",  "128GB", "19,900"],
            ["iPhone 7 Plus*", "32GB", "20,500",  "128GB", "24,500"]
        ]
    },
    '2gto4g.json': {
        "type": "table4",
        "plan": ["88元", "188元", "288/399元"],
        "content": [
            ["h1row", "iPhone 7", "32G", "18,900", "17,900", "16,900"],
            ["h1row", "iPhone 7", "128G", "22,500", "21,500", "20,500"],
            ["h1row", "iPhone 7", "256G", "26,100", "25,100", "24,100"],
            ["h1row", "iPhone 7 Plus", "32G", "23,500", "22,500", "21,500"],
            ["h1row", "iPhone 7 Plus", "128G", "27,100", "26,100", "25,100"],
            ["h1row", "iPhone 7 Plus", "256G", "30,700", "29,700", "28,700"],
            ["h1row", "iPhone 6s", "32G", "15,500", "14,500", "13,500"],
            ["h1row", "iPhone 6s", "128G", "18,900", "17,900", "16,900"],
            ["h1row", "iPhone 6s Plus", "32G", "18,900", "17,900", "16,900"],
            ["h1row", "iPhone 6s Plus", "128G", "22,500", "21,500", "20,500"],
            ["h1row", "iPhone SE", "32G", "11,900", "10,900", "9,900"],
            ["h1row", "iPhone SE", "128G", "15,500", "14,500", "13,500"]
        ]
    },
    'save.json': {
        "type": "table5",
        "plan": ["398元", "598元", "798元", "998元", "1198元"],
        "content": [
            ["h1row", "iPhone 7", "32G", "21,000", "19,000", "16,400", "14,900", "13,500"],
            ["h1row", "iPhone 7", "128G", "25,000", "23,000", "20,400", "18,900", "17,500"],
            ["h1row", "iPhone 7", "256G", "29,000", "27,000", "24,400", "22,900", "21,500"],
            ["h1row", "iPhone 7 Plus", "32G", "25,400", "23,400", "20,800", "19,300", "17,900"],
            ["h1row", "iPhone 7 Plus", "128G", "29,400", "27,400", "24,800", "23,300", "21,900"],
            ["h1row", "iPhone 7 Plus", "256G", "33,400", "31,400", "28,800", "27,300", "25,900"],
            ["h1row", "iPhone 6s", "32G", "17,000", "15,000", "12,400", "10,900", "9,500"],
            ["h1row", "iPhone 6s", "128G", "21,000", "19,000", "16,400", "14,900", "13,500"],
            ["h1row", "iPhone 6s Plus", "32G", "21,000", "19,000", "16,400", "14,900", "13,500"],
            ["h1row", "iPhone 6s Plus", "128G", "25,000", "23,000", "20,400", "18,900", "17,500"],
            ["h1row", "iPhone SE", "16G", "12,000", "10,000", "7,400", "5,900", "4,500"],
            ["h1row", "iPhone SE", "64G", "14,000", "12,000", "9,400", "7,900", "6,500"],
            ["h1row", "iPhone 6 Plus", "<span>*</span>16G", "15,000", "13,000", "10,400", "8,900", "7,500"],
        ]
    },
    'save24.json': {
        "type": "table6",
        "plan": ["398元", "598元", "798元", "998元", "1198元"],
        "content": [
            ["h1row", "iPhone 7", "32G", "21,500", "20,000", "17,900", "16,900", "15,500"],
            ["h1row", "iPhone 7", "128G", "25,500", "24,000", "21,900", "20,900", "19,500"],
            ["h1row", "iPhone 7", "256G", "29,500", "28,000", "25,900", "24,900", "23,500"],
            ["h1row", "iPhone 7 Plus", "32G", "25,900", "24,400", "22,300", "21,300", "19,900"],
            ["h1row", "iPhone 7 Plus", "128G", "29,900", "28,400", "26,300", "25,300", "23,900"],
            ["h1row", "iPhone 7 Plus", "256G", "33,900", "32,400", "30,300", "29,300", "27,900"],
            ["h1row", "iPhone 6s", "32G", "17,500", "16,000", "13,900", "12,900", "11,500"],
            ["h1row", "iPhone 6s", "128G", "21,500", "20,000", "17,900", "16,900", "15,500"],
            ["h1row", "iPhone 6s Plus", "32G", "21,500", "20,000", "17,900", "16,900", "15,500"],
            ["h1row", "iPhone 6s Plus", "128G", "25,500", "24,000", "21,900", "20,900", "19,500"],
            ["h1row", "iPhone SE", "16G", "12,500", "11,000", "8,900", "7,900", "6,500"],
            ["h1row", "iPhone SE", "64G", "14,500", "13,000", "10,900", "9,900", "8,500"],
            ["h1row", "iPhone 6 Plus", "<span>*</span>16G", "15,500", "14,000", "11,900", "10,900", "9,500"],
        ]
    },
    '777.json': {
        "type": "table7",
        "plan": ["777元"],
        "content": [
            ["h1row", "iPhone 7", "32G", "19,500"],
            ["h1row", "iPhone 7", "128G", "23,500"],
            ["h1row", "iPhone 7", "256G", "27,500"],
            ["h1row", "iPhone 7 Plus", "32G", "23,900"],
            ["h1row", "iPhone 7 Plus", "128G", "27,900"],
            ["h1row", "iPhone 7 Plus", "256G", "31,900"],
            ["h1row", "iPhone 6s", "32G", "15,500"],
            ["h1row", "iPhone 6s", "128G", "19,500"],
            ["h1row", "iPhone 6s Plus", "32G", "19,500"],
            ["h1row", "iPhone 6s Plus", "128G", "23,500"],
            ["h1row", "iPhone SE", "16G", "10,500"],
            ["h1row", "iPhone SE", "64G", "12,500"],
        ]
    },
    'offer.json': {
        "type": "table8",
        "plan": ["699元"],
        "content": [
            ["h1row", "iPhone XR", "64GB", "21,800"],
            ["h1row", "iPhone XR", "128GB", "22,800"],
            ["h1row", "iPhone XR", "256GB", "26,400"],
            ["h1row", "iPhone XS", "64GB", "29,800"],
            ["h1row", "iPhone XS", "256GB", "35,400"],
            ["h1row", "iPhone XS", "512GB", "42,800"],
            ["h1row", "iPhone XS Max", "64GB", "33,800"],
            ["h1row", "iPhone XS Max", "256GB", "39,400"],
            ["h1row", "iPhone XS Max", "512GB", "46,800"],
            ["h1row", "iPhone 8", "64GB", "16,900"],
            ["h1row", "iPhone 8", "256GB", "22,500"],
            ["h1row", "iPhone 8 Plus", "64GB", "20,900"],
            ["h1row", "iPhone 8 Plus", "256GB", "26,500"],
            ["h1row", "iPhone 7*", "32GB", "9,900"],
            ["h1row", "iPhone 7*", "128GB", "13,900"],
            ["h1row", "iPhone 7 Plus*", "32GB", "12,400"],
            ["h1row", "iPhone 7 Plus*", "128GB", "16,400"]
        ]
    },
    'offers2.json': {
        "type": "table9",
        "plan": ["589元", "789元", "989元"],
        "content": [
            ["h1row", "iPhone 7", "32G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 7", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone 7", "256G", "25,500", "24,000", "23,000"],
            ["h1row", "iPhone 7 Plus", "32G", "21,900", "20,400", "19,400"],
            ["h1row", "iPhone 7 Plus", "128G", "25,900", "24,400", "23,400"],
            ["h1row", "iPhone 7 Plus", "256G", "29,900", "28,400", "27,400"],
            ["h1row", "iPhone 6s", "32G", "13,500", "12,000", "11,000"],
            ["h1row", "iPhone 6s", "128G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 6s Plus", "32G", "17,500", "16,000", "15,000"],
            ["h1row", "iPhone 6s Plus", "128G", "21,500", "20,000", "19,000"],
            ["h1row", "iPhone SE", "*16G", "6,500", "5,000", "4,000"],
            ["h1row", "iPhone SE", "32G", "8,500", "7,000", "6,000"],
            ["h1row", "iPhone SE", "*64G", "10,500", "9,000", "8,000"],
            ["h1row", "iPhone SE", "128G", "12,500", "11,000", "10,000"]
        ]
    },

}

/* global js */
$(function () {
    $.ajaxSetup({
        cache: false
    });
    $('.header').load('element/header.html');
    $('.footer').load('element/footer.html', function () {
        $('img[usemap]').rwdImageMaps();
    });

    $('.header').on('click', '#btn-menu-toggle', function () {
        $('.header .menu').toggle();
    });

    var compare = $('#compare-main-table');
    if (compare.length) {
        compare.load('element/compare_table.html', function () {
            $('.i7p , .i7').addClass('coming');
            $('.chose-iphone').click(function () {
                $('.ul-w input[type="checkbox"]').removeAttr('checked');
                $('#com_phone_select').fadeIn();
            });
            $('#com_phone_select input').click(function () {
                if ($('#com_phone_select input:checked').length > 2) {
                    alert('你已選擇兩款 iPhone 機種。');
                    return false;
                }
            });
            $('.com_button').click(function () {
                if ($('#com_phone_select input:checked').length != 2) {
                    alert('請選擇兩款 iPhone 機種進行比較。');
                    return false;
                }
                $('#compare-main-table td').removeClass('coming');
                $('#com_phone_select input:checked').each(function () {
                    $('.' + $(this).val()).addClass('coming');
                });
                $('#com_phone_select').fadeOut();
            });
            $('#com_phone_select .close').click(function () {
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
        } else if (json.type === 'table3') {
            final = table3(json);
            console.debug(final);
            plan.html(final);
        } else if (json.type === 'table4') {
            final = table4(json);
            plan.html(final);
            item_length = json.plan.length;
        } else if (json.type === 'table5') {
            final = table5(json);
            plan.html(final);
            item_length = json.plan.length;
        } else if (json.type === 'table6') {
            final = table6(json);
            plan.html(final);
            item_length = json.plan.length;
        } else if (json.type === 'table7') {
            final = table7(json);
            plan.html(final);
            item_length = json.plan.length;
        } else if (json.type === 'table8') {
            final = table8(json);
            plan.html(final);
            item_length = json.plan.length;
        } else {
            final = table9(json);
            plan.html(final);
            item_length = json.plan.length;
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
                before: function () {
                    $('.bg').fadeOut();
                },
            });

            setTimeout(function () {
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

    $.each(json.content, function (i, row) {

        var column = '';
        $.each(row, function (i, d) {
            var tr_classname = (d === '{vip}') ? 'h2row' : 'h1row';
            var td_classname = (i > 0) ? ' color-6' : ' color-2 plan-name';
            var result = null;
            td_classname = (i == row.length - 1) ? ' color-7' : td_classname;
            if (result = /(.*){(\d)}/.exec(d)) {
                tr_classname = 'h' + result[2] + 'row';
                d = result[1];
            } else if (d === '{vip}') {
                d = '依優質客戶等級<br>折500~5,000元';
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
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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

    $.each(sizes, function (i, data) {
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
    $.each(json.content, function (i, data) {
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
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-4-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-4-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-4-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-4-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-4-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table4" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-4-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}

function table5(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-5-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-5-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-5-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-5-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-5-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table4" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-5-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}

function table6(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-5-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-5-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-5-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-5-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-5-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table4" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-5-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}

function table7(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-4-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-7-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-7-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-7-2 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-7-2" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table7" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-7-1 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}

function table8(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-2">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-6 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-6" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-6 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-6" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table2" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-2 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}


function table9(json) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = 0,
        sizes = [],
        sizes_count = -1,
        last_name = '';
    $.each(json.plan, function (plan_i, plan_data) {
        var li = '';
        var has_div = '';
        rows_count = 0;
        sizes = [];
        sizes_count = -1;
        $.each(json.content, function (i, data) {
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
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class="h1row"><th class="color-2">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    $.each(sizes, function (i, data) {
        //console.log(i, data);
        if (i == 0) {
            sizes_tmp = '<td class="color-6 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row"><td class="color-6" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr>';
            sizes_tmp += '<td class="color-6 left-3-td h1row">' + data[j] + '</td></tr>';
        }

        //console.log(tmp);
    });
    //console.log(sizes,tmp);

    var left = '<tr><td class="vertical-row color-6" rowspan="' + rows_count + '">購<br />機<br />優<br />惠<br />︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table2" cellpadding="0" cellspacing="0" rules="all"><tr><th colspan="3" class="color-2 left-first-td">月繳金額</th><td id="slide" rowspan="' + (rows_count + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}