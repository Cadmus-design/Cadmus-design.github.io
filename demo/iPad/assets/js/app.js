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

ga('create', 'UA-83528157-7', 'auto');
ga('send', 'pageview');
//ga("send", "pageview", 'wpage' + _t);

var plan_content = {
    'student.json': {
        "type": "table2",
        "title": "合約期間30個月",
        "plan": ["388元", "588元", "688元"],
        "content": [
            ["h1row", "11吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "64G", "27,690", "27,690", "26,690"],
			["h1row", "11吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "256G", "32,490", "32,490", "31,490"],


            ["h1row", "iPad<p>Wi-Fi + Cellular 機型</p>", "32G", "12,490", "12,490", "11,490"],
			["h1row", "iPad<p>Wi-Fi + Cellular 機型</p>", "128G", "14,990", "14,990", "13,990"],

            ["h1row", "11吋 iPad Pro<p>Wi-Fi 機型</p>", "64G", "22,890", "22,890", "21,890"],
			["h1row", "11吋 iPad Pro<p>Wi-Fi 機型</p>", "256G", "27,690", "27,690", "26,690"],

            ["h1row", "12.9吋 iPad Pro<p>Wi-Fi 機型</p>", "64G", "29,590", "29,590", "28,590"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi 機型</p>", "256G", "34,390", "34,390", "33,390"],


            ["h1row", "iPad<p>Wi-Fi 機型</p>", "32G", "7,590", "7,590", "6,590"],
			["h1row", "iPad<p>Wi-Fi 機型</p>", "128G", "10,190", "10,190", "9,190"],
            
        ]
    },
    'student36.json': {
        "type": "table2",
        "title": "合約期間36個月",
        "plan": ["689元", "889元", "1,089元"],
        "content": [
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "64G", "17,690", "16,190", "14,690"],
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "256G", "22,490", "20,990", "19,490"],
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "512G", "29,190", "27,690", "26,190"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "64G", "22,390", "20,890", "19,390"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "256G", "27,190", "25,690", "24,190"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi + Cellular 機型</p>", "512G", "33,890", "32,390", "30,890"],
			["h1row", "iPad<p>Wi-Fi + Cellular 機型</p>", "32G", "8,490", "6,990", "5,490"],
			["h1row", "iPad<p>Wi-Fi + Cellular 機型</p>", "128G", "10,990", "9,490", "7,990"],
            ["h1row", "iPad mini 4<p>Wi-Fi + Cellular 機型</p>", "128G", "10,590", "9,090", "7,590"],
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi 機型</p>", "64G", "12,890", "11,390", "9,890"],
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi 機型</p>", "256G", "17,690", "16,190", "14,690"],
			["h1row", "10.5吋 iPad Pro<p>Wi-Fi 機型</p>", "512G", "24,390", "22,890", "21,390"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi 機型</p>", "64G", "17,690", "16,190", "14,690"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi 機型</p>", "256G", "22,490", "20,990", "19,490"],
			["h1row", "12.9吋 iPad Pro<p>Wi-Fi 機型</p>", "512G", "29,190", "27,690", "26,190"],
			["h1row", "iPad<p>Wi-Fi 機型</p>", "32G", "3,590", "2,090", "590"],
			["h1row", "iPad<p>Wi-Fi 機型</p>", "128G", "6,190", "4,690", "3,190"],
            ["h1row", "iPad mini 4<p>Wi-Fi 機型</p>", "128G", "5,690", "4,190", "2,690"]
        ]
    }


};

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
            compare.find('tr').each(function() {
                var td_count = 1;
                $(this).find('td').each(function() {
                    $(this).addClass('td-' + td_count);
                    td_count++;
                });
            });
            $('.td-1 , .td-2').addClass('coming');
            $('.chose-iphone').click(function() {
                $('.ul-w input[type="checkbox"]').removeAttr('checked');
                $('#com_phone_select').fadeIn();
            });
            $('#com_phone_select input').click(function() {
                if ($('#com_phone_select input:checked').length > 2) {
                    alert('你已選擇兩款 iPad 機種。');
                    return false;
                }
            });
            $('.com_button').click(function() {
                if ($('#com_phone_select input:checked').length != 2) {
                    alert('請選擇兩款 iPad 機種進行比較。');
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

    $('.ipad-tab a').click(function() {
        $('.ipad-tab a').removeClass('active');
        $(this).addClass('active');
        $('.list-ipad ul').removeClass('active');
        $('.list-ipad ul.' + $(this).data('tab')).addClass('active');
    });

    var plan = $('.plan-table');
    if (plan.length && plan.data('plan-name')) {
        plan.each(function() {
            var that = this;
            var json = plan_content[$(this).data('plan-name')];
            var final = '';
            var item_length = 0;
            if (json.type === 'table2') {
                final = table2(json, $(that).data('silder-class'));
                $(that).html(final);
                item_length = json.plan.length;
            }
            if ($('body').width() < 768) {
                $('.' + $(that).data('silder-class')).flexslider({
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
        })

    }

});


function table2(json, plan_class) {
    var tmp = '',
        final = '',
        sizes_tmp = '',
        rows_count = [0, 0, 0],
        sizes = [],
        sizes_count = -1,
        last_name = '',
        class_name = '';
    $.each(json.plan, function(plan_i, plan_data) {
        var li = '';
        var has_div = '';
        sizes = [];
        rows_count = [0, 0, 0];
        sizes_count = -1;
        $.each(json.content, function(i, data) {
            //console.log(data);
            class_name = (data[1].indexOf('<p>Wi-Fi 機型</p>') > 0) ? 1 : 2;
            has_div = data[0];
            li += '<tr class="' + has_div + '"><td>' + data[3 + plan_i] + '</td></tr>';
            rows_count[class_name]++;
            rows_count[0]++;
            if (last_name != data[1]) {
                last_name = data[1];
                sizes_count++;
                sizes[sizes_count] = [last_name];
            }
            sizes[sizes_count].push(data[2]);
        });
        tmp += '<li><table rules="all" cellpadding="0" cellspacing="0"><tr class=""><th class="color-2-1">' + plan_data + '</th></tr>' + li + '</table></li>';
    });

    last_name = '';
    $.each(sizes, function(i, data) {
        class_name = (data[0].indexOf('<p>Wi-Fi 機型</p>') > 0) ? 1 : 2;
        //console.log(i, data);
        if (last_name && last_name != class_name) {
            sizes_tmp += '<tr class="bold h1row type' + class_name + '"><td class="vertical-row color-2-2" rowspan="' + rows_count[class_name] + '">購<br>機<br>優<br>惠<br>︵<br>元<br>︶</td><td class="color-2-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else if (i == 0) {
            sizes_tmp = '<td class="color-2-2 left-second-td" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        } else {
            sizes_tmp += '<tr class="h1row bold type' + class_name + '"><td class="color-2-2" rowspan="' + (data.length - 1) + '">' + data[0] + '</td>';
        }
        for (var j = 1; j < data.length; j++) {
            if (j != 1) sizes_tmp += '<tr class="h1row bold type' + class_name + '">';
            sizes_tmp += '<td class="color-2-2 left-3-td">' + data[j] + '</td></tr>';
        }
        last_name = class_name;
        //console.log(tmp);
    });
    //console.log(sizes, sizes_tmp, rows_count);

    var left = '<tr class="bold h1row"><td class="vertical-row color-2-2" rowspan="' + rows_count[2] + '">購<br>機<br>優<br>惠<br>︵<br>元<br>︶</td>' + sizes_tmp + '</tr>';
    return '<table class="slide-table table2" cellpadding="0" cellspacing="0" rules="all"><tr><td colspan="4" class="color-2-0 top-first-td"><i>◆</i>' + json.title + '</td></tr><tr><th colspan="3" class="color-2-1 left-first-td">月繳金額</th><td class="slide-id ' + plan_class + '" rowspan="' + (rows_count[0] + 1) + '"><div class="bg"></div><ul class="slides">' + tmp + '</ul></td></tr>' + left + '</table>';
}
