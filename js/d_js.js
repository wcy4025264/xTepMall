/**
 * Created by Administrator on 2016-12-7.
 */





window.onload = function () {
    /*TOP部分*/
    $(document).ready(function () {
        $("#myTep").mouseenter(function () {
            $("#dropdownMy").show();
        })
        $("#myTep").mouseleave(function () {
            $("#dropdownMy").hide();
        })
        $("#phoneTep").mouseenter(function () {
            $("#erweima").show();
        })
        $("#phoneTep").mouseleave(function () {
            $("#erweima").hide();
        })
    })

    /*search部分*/
    var ssk = document.getElementById("ssk");
    ssk.onfocus = function () {
        console.log("aaa");
        console.log(ssk.value);
        if (ssk.value == "跑鞋") {
            this.value = "";
            console.log("aaa");
        }
        this.style.color = "#000";
    }
    ssk.onblur = function () {
        if (ssk.value == "") {
            this.value = "跑鞋";
        }
        if (ssk.value == "跑鞋") {
            this.style.color = "#999";
        }
    }

    /*sbanner部分*/
    $(document).ready(function () {
        $("#pointer").children().mouseenter(function () {
            $(this).addClass("on").siblings("a").removeClass("on");
            var index = $(this).index();
            //console.log(index);
            $("#sbanner a:eq(" + index + ")").show().siblings("a").hide();
        })
    })
    /*导航部分*/
    $(document).ready(function () {
        $("#navTop>li").mouseenter(function () {
            $(this).children("div").show();
        })
        $("#navTop>li").mouseleave(function () {
            $(this).children("div").hide();
        })
    })
    var nav = document.getElementById("nav");
    var slider = document.getElementById("slider");
    var header = document.getElementById("header");
    var goods = document.getElementById("goods");
    var allGoods = document.getElementById("allGoods");

    /*商品分类部分*/
    $(document).ready(function () {
        $("#goods").children(".goods-item").mouseenter(function () {
            /*var index = $(this).index();
             $("#goods").children(".goods-in:eq("+index+")").show();*/
            $(this).children(".goods-in").show();
        })
        $("#goods").children(".goods-item").mouseleave(function () {
            /*var index = $(this).index();
             $("#goods").children(".goods-in:eq("+index+")").hide();*/
            $(this).children(".goods-in").hide();
        })
    })
    /*轮播图部分*/

    $(document).ready(function () {

        var arrIndex = 0;

        $("#arrR").click(function () {
            if (arrIndex === $("#sliderMain").children("li").length - 1) {
                arrIndex = 0;
            } else {
                arrIndex++;
            }
            //console.log(arrIndex);
            $("#sliderMain li:eq(" + arrIndex + ")").animate({"opacity": 1}, 600).siblings("li").animate({"opacity": 0}, 600)
            $("#point li:eq(" + arrIndex + ")").addClass("on").siblings("li").removeClass("on");
        })
        $("#arrL").click(function () {
            if (arrIndex === 0) {
                arrIndex = $("#sliderMain").children("li").length - 1;
            } else {
                arrIndex--;
            }
            //console.log(arrIndex);
            $("#sliderMain li:eq(" + arrIndex + ")").animate({"opacity": 1}, 600).siblings("li").animate({"opacity": 0}, 600)
            $("#point li:eq(" + arrIndex + ")").addClass("on").siblings("li").removeClass("on");

        })
        setInterval(function () {
         $("#arrR").click();
         },3000)


        $("#slider").mouseenter(function () {
            $("#arrow").show();
        })
        $("#slider").mouseleave(function () {
            $("#arrow").hide();
        })
        $("#point").children("li").click(function () {
            $(this).addClass("on").siblings("li").removeClass("on");
            //var index = $(this).index();
            arrIndex = $(this).index();
            $("#sliderMain").children("li:eq(" + arrIndex + ")").animate({"opacity": 1}, 600).siblings("li").animate({"opacity": 0}, 600);
            //arrIndex = index;
            //console.log(arrIndex);
            //console.log(arrIndex);
        })


    })
    /*公告区新闻轮播*/
    //window.onload = function () {
    var box = document.getElementById("box");
    var ull = document.getElementById("ul");
    var lis = ull.children;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var newsWidth = box.offsetWidth;

    var firstNews = lis[0].cloneNode(true);
    ull.appendChild(firstNews);
    var pic1 = 0;
    next.onclick = function () {
        if (pic1 === lis.length - 1) {
            ull.style.left = 0;
            pic1 = 0;
        }
        pic1++;
        var target = -pic1 * newsWidth;
        animate(ull, target);

    };
    prev.onclick = function () {
        if (pic1 === 0) {
            ull.style.left = -(lis.length - 1) * newsWidth + "px";
            pic1 = lis.length - 1;
        }
        pic1--;
        var target = -pic1 * newsWidth;
        animate(ull, target);

    };
    //}

    /*公告区轮播图*/
    var nslider = document.getElementById("nslider");
    var screen = document.getElementById("wrap");
    var ul = screen.children[0];
    var ulLis = ul.children;
    var ol = document.getElementById("npoint");
    var olLis = ol.children;
    var right = document.getElementById("right");
    var imgWidth = screen.offsetWidth;


    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //干掉所有人
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //留下我自己
            this.className = "on";
            var target = -this.index * imgWidth;
            animate(ul, target);


            pic = square = this.index;

        };
    }
    var pic = 0;
    var square = 0;

    right.onclick = function () {

        if (pic === ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }

        olLis[square].className = "on";

    };
    timer = setInterval(playNext, 2000);
    function playNext() {
        right.onclick();
    }

    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;
            var step = 30;
            step = leader < target ? step : -step;
            if (Math.abs(target - leader) >= Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + "px";
            } else {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 15);
    }

    //楼层
    var floor1 = document.getElementById("floor1");
    var floor2 = document.getElementById("floor2");
    var floor4 = document.getElementById("floor4");
    var floor3 = document.getElementById("floor3");
    var d_lis = floor1.children[0].children[1].children;
    var d_lis2 = floor2.children[0].children[1].children;
    var d_lis3 = floor3.children[0].children[1].children;
    var d_lis4 = floor4.children[0].children[1].children;
    var d_divs = floor1.children[1].children[1].children;
    var d_divs3 = floor3.children[1].children[1].children;
    var d_divs4 = floor4.children[1].children[1].children;
    var d_divs2 = floor2.children[1].children[1].children;
    var lift = document.getElementById("lift")
    var liftUl = lift.children[0];
    var liftLis = liftUl.children;
    var timer = null
    for (var i = 0; i < d_lis.length; i++) {
        d_lis[i].index = i;
        d_lis[i].onmouseover = function () {
            for (var j = 0; j < d_divs.length; j++) {
                d_divs[j].style.display = "none";
                d_lis[j].className = "";
            }
            d_divs[this.index].style.display = "block";
            this.className = "current"
        };
    }
    for (var a = 0; a < d_lis2.length; a++) {
        d_lis2[a].index = a;
        d_lis2[a].onmouseover = function () {
            for (var j = 0; j < d_divs2.length; j++) {
                d_divs2[j].style.display = "none";
                d_lis2[j].className = "";
            }
            d_divs2[this.index].style.display = "block";
            this.className = "current"
        };
    }
    for (var k = 0; k < d_lis3.length; k++) {
        d_lis3[k].index = k;
        d_lis3[k].onmouseover = function () {
            for (var j = 0; j < d_divs3.length; j++) {
                d_divs3[j].style.display = "none";
                d_lis3[j].className = "";
            }
            ;
            d_divs3[this.index].style.display = "block";
            this.className = "current"
        };
    }
    for (var u = 0; u < d_lis4.length; u++) {
        d_lis4[u].index = u;
        d_lis4[u].onmouseover = function () {
            for (var j = 0; j < d_divs4.length; j++) {
                d_divs4[j].style.display = "none";
                d_lis4[j].className = "";
            }
            d_divs4[this.index].style.display = "block";
            this.className = "current"
        };
    }
    for (var j = 0; j < liftLis.length; j++) {
        liftLis[j].index = j;
        liftLis[j].onclick = function () {
            fn(liftLis);
            liftLis[this.index].className = "clor";
            liftLis[this.index].children[0].className = "iclor";
            clearInterval(timer)
            var leader = window.pageYOffset;
            var that = this;
            timer = setInterval(function () {
                var target = (floor1.offsetHeight + 20) * that.index + 1397;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader)
                if (leader === target) {
                    clearInterval(timer)
                }
            }, 25)

        }


        function fn(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].className = "";
                arr[i].children[0].className = "";
            }
        }

    }

    $(function () {
        $("#subbcar").mouseenter(function () {
            $("#subcarcenter").show()
        })
        $("#subbcar").mouseleave(function () {
            $("#subcarcenter").hide()
        })
        $("#rihgt_kefu").mouseenter(function () {
            $("#allri-kefu").show()
        })
        $("#rihgt_kefu").mouseleave(function () {
            $("#allri-kefu").hide()
        })
        $("#weixin").mouseenter(function () {
            $("#img-sj").show()
        })
        $("#weixin").mouseleave(function () {
            $("#img-sj").hide()
        })

    })
    var left = document.getElementById("lift");
    window.onscroll = function () {


        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop > 150) {
            nav.className = "nav clearfix fixed";
            nav.style.zIndex = 15;
            //slider.style.paddingTop = 136 + "px";
            header.style.marginBottom = 39 + "px";
            goods.className = "allgoods-dd hide";
            allGoods.onmouseover = function () {
                goods.className = "allgoods-dd show";
            }
            allGoods.onmouseout = function () {
                goods.className = "allgoods-dd hide";
            }
        } else {
            nav.className = "nav clearfix";
            //slider.style.paddingTop = 0;
            header.style.marginBottom = 0;
            goods.className = "allgoods-dd show";
            allGoods.onmouseout = function () {
                goods.className = "allgoods-dd show";
            }
        }


        if (window.pageYOffset >= floor4.offsetTop - 39) {
            fn(liftLis)
            liftLis[3].className = "clor";
            liftLis[3].children[0].className = "iclor";
            //console.log("aa");
        } else if (window.pageYOffset >= floor3.offsetTop - 39) {
            fn(liftLis)
            liftLis[2].className = "clor";
            liftLis[2].children[0].className = "iclor";
        } else if (window.pageYOffset >= floor2.offsetTop - 39) {
            fn(liftLis)
            liftLis[1].className = "clor";
            liftLis[1].children[0].className = "iclor";
            //console.log("aa");
        } else if (window.pageYOffset >= floor1.offsetTop - 39) {
            fn(liftLis)
            liftLis[0].className = "clor";
            liftLis[0].children[0].className = "iclor";
        }


        //var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop >= 1397) {
            left.style.display = "block";
        } else {
            left.style.display = "none";
        }
    };
}