function SetHome(obj, url) {
    try {
        obj.style.behavior = 'url(#default#homepage)';
        obj.setHomePage(url);
    } catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        } else {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
        }
    }
}

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
        }
    }
}

function DY_scroll(wraper, prev, next, img, speed, or) {
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function() {
        img.animate({
            'margin-left': -w
        }, function() {
            img.find('li').eq(0).appendTo(img);
            img.css({
                'margin-left': 0
            });
        });
    });
    prev.click(function() {
        img.find('li:last').prependTo(img);
        img.css({
            'margin-left': -w
        });
        img.animate({
            'margin-left': 0
        });
    });
    if (or == true) {
        ad = setInterval(function() {
            next.click();
        }, s * 1000);
        wraper.hover(function() {
            clearInterval(ad);
        }, function() {
            ad = setInterval(function() {
                next.click();
            }, s * 1000);
        });

    }
}

$(function() {
    var cname = "";
    $("#topnav li").hover(function() {
        cname = $(this).attr("class");
        if (!cname) {
            $(this).addClass("hover");
        }
        $("dl", this).show();
    }, function() {
        $("dl", this).hide();
        if (!cname) {
            $(this).removeClass("hover");
        }
    });
    //
    DY_scroll('.pro_width', '.arrow_left', '.arrow_right', '.pro_width', 5, true);

})


function checksearch(the) {
    if ($.trim(the.key.value) == '') {
        alert('请输入关键字');
        the.key.focus();
        the.key.value = '';
        return false
    }
    if ($.trim(the.key.value) == '请输入关键字') {
        alert('请输入关键字');
        the.key.focus();
        the.key.value = '';
        return false
    }
}
//回顶部
window.onload = function() {
    var topbtn = document.getElementById("top");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight;

    topbtn.onclick = function() {

        timer = setInterval(function() {
            var backtop = document.body.scrollTop;
            var speedtop = backtop / 4;
            document.body.scrollTop = backtop - speedtop;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 20);
    }
}

//二级导航菜单
function xiala() {
    var sfiles = document.getElementById("xiala").gerElementsByTagName("li");
    for (var i = 0; i < sfiles.length; i++) {
        sfiles[i].onmouseover = function() {
            this.className += (this.className.length > 0 ? " " : "") + "listshow";
        }
        sfiles[i].onmouseover = function() {
            this.className += this.className.replace("listshow", "");
        }
    }
}
window.onload = xiala;

//产品介绍换底图
var cp1_bg = document.getElementById("cp1")
var cp2_bg = document.getElementById("cp2")
var cp3_bg = document.getElementById("cp3")
var cp4_bg = document.getElementById("cp4")
var cp5_bg = document.getElementById("cp5")

var cp6_bg = document.getElementById("cp6")
var cp7_bg = document.getElementById("cp7")
var cp8_bg = document.getElementById("cp8")
var cp9_bg = document.getElementById("cp9")
var cp10_bg = document.getElementById("cp10")

var cp11_bg = document.getElementById("cp11")
var cp12_bg = document.getElementById("cp12")
var cp13_bg = document.getElementById("cp13")
var cp14_bg = document.getElementById("cp14")
var cp15_bg = document.getElementById("cp15")

var cp16_bg = document.getElementById("cp16")
var cp17_bg = document.getElementById("cp17")
var cp18_bg = document.getElementById("cp18")
var cp19_bg = document.getElementById("cp19")
var cp20_bg = document.getElementById("cp20")

var cp21_bg = document.getElementById("cp21")
var cp22_bg = document.getElementById("cp22")

cp1_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_1_1.jpg)"
}

cp1_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_1.jpg)"
}

cp2_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_2_1.jpg)"
}
cp2_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_2.jpg)"
}

cp3_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_3_1.jpg)"
}
cp3_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_3.jpg)"
}

cp4_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_4_1.jpg)"
}
cp4_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_4.jpg)"
}

cp5_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_5_1.jpg)"
}
cp5_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_5.jpg)"
}

//
cp6_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_6_1.jpg)"
}
cp6_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_6.jpg)"
}

cp7_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_7_1.jpg)"
}
cp7_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_7.jpg)"
}

cp8_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_8_1.jpg)"
}
cp8_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_8.jpg)"
}

cp9_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_9_1.jpg)"
}
cp9_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_9.jpg)"
}

cp10_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_22_1.jpg)"
}
cp10_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_22.jpg)"
}

//
cp11_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_10_1.jpg)"
}
cp11_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_10.jpg)"
}

cp12_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_11_1.jpg)"
}
cp12_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_11.jpg)"
}

cp13_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_12_1.jpg)"
}
cp13_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_12.jpg)"
}

cp14_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_13_1.jpg)"
}
cp14_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_13.jpg)"
}

cp15_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_14_1.jpg)"
}
cp15_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_14.jpg)"
}


cp16_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_15_1.jpg)"
}
cp16_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_15.jpg)"
}

cp17_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_16_1.jpg)"
}
cp17_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_16.jpg)"
}

cp18_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_19_1.jpg)"
}
cp18_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_19.jpg)"
}

cp19_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_20_1.jpg)"
}
cp19_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_20.jpg)"
}

cp20_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_21_1.jpg)"
}
cp20_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_21.jpg)"
}


cp21_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_17_1.jpg)"
}
cp21_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_17.jpg)"
}

cp22_bg.onmouseover = function() {
    this.style.backgroundImage = "url(./skin/images/blue_18_1.jpg)"
}
cp22_bg.onmouseout = function() {
    this.style.backgroundImage = "url(./skin/images/blue_18.jpg)"
}