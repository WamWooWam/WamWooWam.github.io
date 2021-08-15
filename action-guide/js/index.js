var pageNum = 0.5;
var urltext = location.href;
var tftext = urltext.split("?");
var page0seBackCheck = true;
var btnActive = false;
var action1SE = false;
var capture1SE = false;
var modeSE=true;
var playReport4, playReport5, playReport6, playReport7, playReport8, playReport9to14, playReport15to38, playReport39to62;
var basicTimeout2, basicTimeout3, captureTimeout2, captureTimeout3;
var imgload1 = new Image();


window.onload = function() {

    var tocMovNum = Math.floor(Math.random() * 20) + 1;
    if (tocMovNum == 2) {
        tocMovNum = "2-nohand";
    } else if (tocMovNum > 5 && tocMovNum < 10) {
        tocMovNum = tocMovNum.toString(10) + "-nohand";
    } else if (tocMovNum == 12) {
        tocMovNum = tocMovNum.toString(10) + "-nohand";
    }
    document.getElementById('toc-mov').style.backgroundImage = "url(../../video/action" + tocMovNum + ".webp)";
    window.nx.playReport.setCounterSetIdentifier(0); /*0版*/
    wsnd.load({
        "seBack": "../../audio/UiBack.wav",
        "seDecide": "../../audio/UiDecide.wav",
        "UiCursor": "../../audio/UiCursor.wav",
        "UiTurnPage": "../../audio/UiTurnPage.wav",
        "UiToModeSelect": "../../audio/UiToModeSelect.wav"
    });

    function TouchEventFunc(e) {
        e.preventDefault();
    }
    document.addEventListener("touchstart", TouchEventFunc);
    document.addEventListener("touchmove", TouchEventFunc);
    document.addEventListener("touchend", TouchEventFunc);

    window.nx.footer.unsetAssign('x');
    window.nx.footer.setAssign('L', '', customFunctionL, {
        se: ''
    });
    window.nx.footer.setAssign('R', '', customFunctionR, {
        se: ''
    });
    urlChange();
    if (pageNum != 7) {
        firstpage();
        var page0Timeout = setTimeout(function() {
            pageNum = 0;
            clearTimeout(page0Timeout);
        }, 1000);
    }



    window.nx.footer.setAssign('B', '', function() {
        if (pageNum > 0.5) {
            wsnd.play("seBack");
            page0seBackCheck = false;

            timeout0 = setTimeout(function() {
                page0seBackCheck = true;
                clearTimeout(timeout0);
            }, 500);
            document.getElementsByClassName('page' + pageNum.toString(10))[0].style.opacity = 0;

            for (i = 1; i < 12; i++) {
                document.getElementsByClassName('page' + i.toString(10))[0].style.display = "none";
                document.getElementsByClassName('page0')[0].style.display = "block";
            }

            document.getElementsByClassName('page0')[0].style.display = "block";
            document.getElementsByClassName('page0')[0].style.opacity = 1;
            document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[4].innerHTML;

            document.getElementsByClassName('btn-operation')[0].style.opacity = 1;
            document.getElementsByClassName('btn-operation')[1].style.opacity = 0;
            document.getElementsByClassName('btn-operation')[2].style.opacity = 0;
            if (pageNum < 4) {
                document.getElementById('toController').focus();
                document.getElementById('toController').style.backgroundImage = 'url("../../video/cap-select.webp")';
                document.getElementById('toController').style.backgroundPositionX = "";
                document.getElementById('toController').style.color = "";
                document.getElementById('toController').style.backgroundColor = "";

            } else if (pageNum == 4) {
                document.getElementById('toBasicAction').style.backgroundImage = 'url("../../video/cap-select.webp")';
                document.getElementById('toBasicAction').style.backgroundPositionX = "";
                document.getElementById('toBasicAction').style.color = "";
                document.getElementById('toBasicAction').style.backgroundColor = "";
                document.getElementsByClassName("action-mov")[0].style.display = "none";
                document.getElementsByClassName("action-mov")[0].style.opacity = 0;
                document.getElementsByClassName('action-mov')[0].style.boxShadow = "";
                document.getElementsByClassName("joycon-lr-desc")[0].style.display = "none";
                document.getElementsByClassName("joycon-side-desc")[0].style.display = "none";
                document.getElementsByClassName('page4')[0].style.display = "none";
                document.getElementsByClassName("page0")[0].style.display = "block";
                action1SE = false;
                document.getElementById('toBasicAction').focus();
                clearTimeout(playReport7, playReport15to38);

            } else if (pageNum == 5) {
                document.getElementById('toCaptureAction').style.backgroundImage = 'url("../../video/cap-select.webp")';
                document.getElementById('toCaptureAction').style.backgroundPositionX = "";
                document.getElementById('toCaptureAction').style.color = "";
                document.getElementById('toCaptureAction').style.backgroundColor = "";
                document.getElementsByClassName("action-mov")[1].style.display = "none";
                document.getElementsByClassName("action-mov")[1].style.opacity = 0;
                document.getElementsByClassName('action-mov')[1].style.boxShadow = "";
                document.getElementsByClassName("joycon-lr-desc")[1].style.display = "none";
                document.getElementsByClassName("joycon-side-desc")[1].style.display = "none";
                document.getElementsByClassName('page5')[0].style.display = "none";
                document.getElementsByClassName("page0")[0].style.display = "block";
                capture1SE = false;
                document.getElementById('toCaptureAction').focus();
                clearTimeout(playReport8, playReport39to62);
            } else if (pageNum > 5) {
                document.getElementById('toOthers').focus();
                document.getElementById('toOthers').style.backgroundImage = 'url("../../video/cap-select.webp")';
                document.getElementById('toOthers').style.backgroundPositionX = "";
                document.getElementById('toOthers').style.color = "";
                document.getElementById('toOthers').style.backgroundColor = "";
                clearTimeout(playReport9to14);
            }
        } else if (pageNum == 0) {
            btnActive = false;
            if (page0seBackCheck) {
                wsnd.play("seBack");;
                page0seBackCheck = false;
                document.getElementsByTagName('body')[0].style.backgroundColor = "#000000";
                setTimeout(function() {
                    document.getElementsByClassName('contents')[0].style.opacity = 0;
                    setTimeout(function() {
                        window.nx.endApplet();
                    }, 600);
                }, 300);
            } else {
                setTimeout(function() {
                    document.getElementsByClassName('contents')[0].style.opacity = 0;
                    setTimeout(function() {
                        window.nx.endApplet();
                    }, 600);
                }, 1000);
            }

        }
        pageNum = 0;

    }, {
        se: ''
    });

    document.onkeydown = function(e) {
      if(btnActive){
        if (e.keyCode == 39) { //右
            e.preventDefault();
            customFunctionR();
        } else if (e.keyCode == 37) { //左
            e.preventDefault();
            customFunctionL();
        } else if (e.keyCode == 38) { //上
            if (document.activeElement.id == "toController") {
                document.getElementById('toOthers').focus();
            } else if (document.activeElement.id == "toBasicAction") {
                document.getElementById('toController').focus();
            } else if (document.activeElement.id == "toCaptureAction") {
                document.getElementById('toBasicAction').focus();
            } else if (document.activeElement.id == "toOthers") {
                document.getElementById('toCaptureAction').focus();
            }
        } else if (e.keyCode == 40) { //下
            if (document.activeElement.id == "toController") {
                document.getElementById('toBasicAction').focus();
            } else if (document.activeElement.id == "toBasicAction") {
                document.getElementById('toCaptureAction').focus();
            } else if (document.activeElement.id == "toCaptureAction") {
                document.getElementById('toOthers').focus();
            } else if (document.activeElement.id == "toOthers") {
                document.getElementById('toController').focus();
            }
        };
      }else{
        e.preventDefault();
        document.getElementById('toController').focus();
      }


    };



};


function customFunctionL() {
    if (pageNum == 1) {
        wsnd.play("UiTurnPage");
        pageNum = 0.5;
        document.getElementsByClassName('page1')[0].style.opacity = 0;
        document.getElementsByClassName('page2')[0].style.opacity = 0;
        document.getElementsByClassName('page3')[0].style.opacity = 1;
        clearTimeout(playReport4);
        var timeoutl1 = setTimeout(function() {
            pageNum = 3;
            clearTimeout(timeoutl1);
        }, 300);
        playReport6 = setTimeout(function() {
            playReportCount(6);
            var removeplayReport6 = setTimeout(function() {
                clearTimeout(playReport6, removeplayReport6);
            }, 100);
        }, 2000);
    } else if (pageNum == 2) {
        wsnd.play("UiTurnPage");
        pageNum = 0.5;
        document.getElementsByClassName('page1')[0].style.opacity = 1;
        document.getElementsByClassName('page2')[0].style.opacity = 0;
        document.getElementsByClassName('page3')[0].style.opacity = 0;
        clearTimeout(playReport5);
        var timeoutl2 = setTimeout(function() {
            pageNum = 1;
            clearTimeout(timeoutl2);
        }, 300);
        playReport4 = setTimeout(function() {
            playReportCount(4);
            var removeplayReport4 = setTimeout(function() {
                clearTimeout(playReport4, removeplayReport4);
            }, 100);
        }, 2000);

    } else if (pageNum == 3) {
        pageNum = 0.5;
        wsnd.play("UiTurnPage");
        document.getElementsByClassName('page1')[0].style.opacity = 0;
        document.getElementsByClassName('page2')[0].style.opacity = 1;
        document.getElementsByClassName('page3')[0].style.opacity = 0;
        page2Open();
        clearTimeout(playReport6);
    } else if (pageNum == 4) {
        if (document.activeElement.id == "dummy-a-4") {
            document.getElementById('dummy-a-4').focus();
        }
        var actionNum = parseFloat(document.activeElement.id.slice(6));
        if (actionNum == 1) {
            actionNum = 25;
        }
        document.getElementById('action' + (actionNum - 1)).focus();

    } else if (pageNum == 5) {
        if (document.activeElement.id == "dummy-a-5") {
            document.getElementById('dummy-a-5').focus();
        }
        var captureNum = parseFloat(document.activeElement.id.slice(7));
        if (captureNum == 1) {
            captureNum = 25;
        }
        document.getElementById('capture' + (captureNum - 1)).focus();

    } else if (pageNum > 5) {
        wsnd.play("UiTurnPage");
        clearTimeout(playReport9to14);
        if (pageNum == 6) {
            pageNum = 0.5;
            document.getElementsByClassName('page6')[0].style.opacity = 0;
            document.getElementsByClassName('page11')[0].style.opacity = 1;
            var timeoutl6 = setTimeout(function() {
                pageNum = 11;
                clearTimeout(timeoutl6);
            }, 300);
            playReport9to14 = setTimeout(function() {
                playReportCount(pageNum + 3);
                var removeplayReport9to14 = setTimeout(function() {
                    clearTimeout(playReport9to14, removeplayReport9to14);
                }, 100);
            }, 2000);
        } else {
            var newPage = pageNum - 1;
            var currentPage = pageNum;
            pageNum = 0.5;
            document.getElementsByClassName('page' + currentPage.toString(10))[0].style.opacity = 0;
            document.getElementsByClassName('page' + newPage.toString(10))[0].style.opacity = 1;
            if (newPage == 7) {
                document.getElementById('toModeChange').focus();
            } else {
                document.getElementById('dummy-a-6').focus();
            }
            var timeoutl7 = setTimeout(function() {
                pageNum = newPage;
                clearTimeout(timeoutl7);
            }, 300);
            playReport9to14 = setTimeout(function() {
                playReportCount(pageNum + 3);
                var removeplayReport9to14 = setTimeout(function() {
                    clearTimeout(playReport9to14, removeplayReport9to14);
                }, 100);
            }, 2000);
        }

    } else if (pageNum == 0) {
        document.activeElement.focus();
    }
}

function customFunctionR() {
    if (pageNum == 1) {
        wsnd.play("UiTurnPage");
        pageNum = 0.5;
        document.getElementsByClassName('page1')[0].style.opacity = 0;
        document.getElementsByClassName('page2')[0].style.opacity = 1;
        document.getElementsByClassName('page3')[0].style.opacity = 0;
        clearTimeout(playReport4);
        page2Open();
    } else if (pageNum == 2) {
        wsnd.play("UiTurnPage");
        pageNum = 0.5;
        document.getElementsByClassName('page1')[0].style.opacity = 0;
        document.getElementsByClassName('page2')[0].style.opacity = 0;
        document.getElementsByClassName('page3')[0].style.opacity = 1;
        clearTimeout(playReport5);
        var timeoutr3 = setTimeout(function() {
            pageNum = 3;
            clearTimeout(timeoutr3);
        }, 300);
        playReport6 = setTimeout(function() {
            playReportCount(6);
            var removeplayReport6 = setTimeout(function() {
                clearTimeout(playReport6, removeplayReport6);
            }, 100);
        }, 2000);
    } else if (pageNum == 3) {
        wsnd.play("UiTurnPage");
        pageNum = 0.5;
        document.getElementsByClassName('page1')[0].style.opacity = 1;
        document.getElementsByClassName('page2')[0].style.opacity = 0;
        document.getElementsByClassName('page3')[0].style.opacity = 0;
        clearTimeout(playReport6);
        var timeoutr1 = setTimeout(function() {
            pageNum = 1;
            clearTimeout(timeoutr1);
        }, 300);
        playReport4 = setTimeout(function() {
            playReportCount(4);
            var removeplayReport4 = setTimeout(function() {
                clearTimeout(playReport4, removeplayReport4);
            }, 100);
        }, 2000);
    } else if (pageNum == 4) {
        if (document.activeElement.id == "dummy-a-4") {
            document.getElementById('dummy-a-4').focus();
        }
        var actionNum = parseFloat(document.activeElement.id.slice(6));
        if (actionNum > 23) {
            actionNum = 0;
        }
        document.getElementById('action' + (actionNum + 1)).focus();

    } else if (pageNum == 5) {
        if (document.activeElement.id == "dummy-a-5") {
            document.getElementById('dummy-a-5').focus();
        }
        var capturenNum = parseFloat(document.activeElement.id.slice(7));
        if (capturenNum > 23) {
            capturenNum = 0;
        }
        document.getElementById('capture' + (capturenNum + 1)).focus();

    } else if (pageNum > 5) {
        wsnd.play("UiTurnPage");
        clearTimeout(playReport9to14);
        if (pageNum == 11) {
            pageNum = 0.5;
            document.getElementsByClassName('page11')[0].style.opacity = 0;
            document.getElementsByClassName('page6')[0].style.opacity = 1;
            var timeoutr12 = setTimeout(function() {
                pageNum = 6;
                clearTimeout(timeoutr12);
            }, 300)
            playReport9to14 = setTimeout(function() {
                playReportCount(pageNum + 3);
                var removeplayReport9to14 = setTimeout(function() {
                    clearTimeout(playReport9to14, removeplayReport9to14);
                }, 100);
            }, 2000);
        } else {
            var newPage = pageNum + 1;
            var currentPage = pageNum;
            pageNum = 0.5;
            document.getElementsByClassName('page' + currentPage.toString(10))[0].style.opacity = 0;
            document.getElementsByClassName('page' + newPage.toString(10))[0].style.opacity = 1;
            if (newPage == 7) {
                document.getElementById('toModeChange').focus();
            } else {
                document.getElementById('dummy-a-6').focus();
            }
            var timeoutr5 = setTimeout(function() {
                pageNum = newPage;
                clearTimeout(timeoutr5)
            }, 300);
            playReport9to14 = setTimeout(function() {
                playReportCount(pageNum + 3);
                var removeplayReport9to14 = setTimeout(function() {
                    clearTimeout(playReport9to14, removeplayReport9to14);
                }, 100);
            }, 2000);
        }
    } else if (pageNum == 0) {
        document.activeElement.focus();
    }
}

function urlChange() {
    if (tftext[1][0] == 1) {
        document.getElementsByClassName('footer-L')[0].src = "../../img/two-play-footer-L-stick.webp";
        document.getElementsByClassName('footer-L')[1].src = "../../img/two-play-footer-L-stick.webp";
        document.getElementsByClassName('footer-A')[0].src = "../../img/two-play-footer-btn-A.webp";
        document.getElementsByClassName('footer-B')[0].src = "../../img/two-play-footer-btn-B.webp";
        document.getElementsByClassName('footer-B')[1].src = "../../img/two-play-footer-btn-B.webp";
        document.getElementsByClassName('footer-B')[2].src = "../../img/two-play-footer-btn-B.webp";
        if (document.getElementById('L-stick-gray2') != null) {
            document.getElementById('L-stick-gray2').src = "../../img/two-play-L-stick-gray2.webp";
        }
        document.getElementById('assist-a-btn').src = "../../img/two-play-btn-A-gold.webp";
        if (document.getElementById("btn-Y-gray") != null) {
            document.getElementById('btn-Y-gray').src = "../../img/two-play-btn-Y-gray.webp";
        }

        for (var i = 0; i < 9; i++) {
            document.getElementsByClassName('left-arrow')[i].src = "../../img/two-play-left-arrow.webp";
            document.getElementsByClassName('right-arrow')[i].src = "../../img/two-play-right-arrow.webp";
        }
    }
    for (var i = 0; i < 3; i++) {
        if (tftext[2][i] == 0) {
            if (i == 0) {
                for (var j = 6; j < 13; j++) {
                    document.getElementById("action" + j).getElementsByTagName("img")[0].src = "../../img/temp/black-question.webp";
                    document.getElementById('action' + j).getElementsByTagName('img')[0].style.opacity = 0.08;
                    document.getElementsByClassName("action" + j + "-cap")[0].style.opacity = 0;
                }
            } else if (i == 1) {
                document.getElementById("action23").getElementsByTagName("img")[0].src = "../../img/temp/black-question.webp";
                document.getElementById('action23').getElementsByTagName('img')[0].style.opacity = 0.08;
            } else if (i == 2) {
                document.getElementById("action24").getElementsByTagName("img")[0].src = "../../img/temp/black-question.webp";
                document.getElementById('action24').getElementsByTagName('img')[0].style.opacity = 0.08;
            }
        }

    }
    for (var j = 0; j < 24; j++) {
        if (tftext[3][j] == 0) {
            document.getElementById("capture" + (j + 1)).getElementsByTagName("img")[0].src = "../../img/temp/black-question.webp";
            document.getElementById("capture" + (j + 1)).getElementsByTagName('img')[0].style.opacity = 0.08;
            document.getElementsByClassName('action-desc')[1].getElementsByTagName("h2")[j].innerHTML = "?";
            document.getElementsByClassName('action-desc')[1].getElementsByClassName("capture-ms")[j].innerHTML = "";
        }
    }
    if (tftext[4][0] == 1) {
        pageNum = 7;
        btnActive=true;
        for (i = 6; i < 12; i++) {
            document.getElementsByClassName('page' + i.toString(10))[0].style.display = "block";
            document.getElementById('toModeChange').focus();
        }
        footerText();
        document.getElementsByClassName('page0')[0].style.opacity = 0;
        document.getElementsByClassName('page7')[0].style.opacity = 1;
        document.getElementsByClassName('btn-operation')[0].style.opacity = 0;
        document.getElementsByClassName('btn-operation')[1].style.opacity = 0;
        document.getElementsByClassName('btn-operation')[2].style.opacity = 1;
        document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[3].innerHTML;
    }
    if (tftext[5][0] == 1) {
        document.getElementById('assist-mode-desc-span').style.height = "263px";
        document.getElementById('toModeChange').style.display = "none";
    }
}

function firstpage() {
    btnActive = false;
    document.getElementsByClassName('btn-operation')[0].style.opacity = 1;
    var firstpage1 = setTimeout(function() {
        btnActive = true;
        clearTimeout(firstpage1);
    }, 1000)

}

function menuSelect(e) {
    pageNum = 0.5;
    if (btnActive) {
        if (e.id != "toModeChange") {
            wsnd.play("seDecide");
            footerText();
            e.style.backgroundImage = 'url("")';
            e.style.backgroundColor = "#525252";
            e.style.color = "#fff";
        } else {
          if(modeSE){
            wsnd.play("UiToModeSelect");
          }
          modeSE=false;
        }

        var menuTimeout = setTimeout(function() {
            if (e.id == "toController") {
                page1Open(e);
            } else if (e.id == "toBasicAction") {
                page4Open(e);
            } else if (e.id == "toCaptureAction") {
                page5Open(e);
            } else if (e.id == "toOthers") {
                page6Open(e);
            } else if (e.id == "toModeChange") {
                pageNum = 0.5;
                document.getElementById('toModeChange').style.animationName = "text-flashing";
                document.getElementsByTagName('body')[0].style.backgroundColor = "#000000";
                setTimeout(function() {
                    document.getElementsByClassName('page7')[0].style.transitionDuration = "0.5s";
                    document.getElementById('page0Footer').style.opacity = 0;
                    document.getElementsByClassName('page7')[0].style.opacity = 0;
                    document.getElementsByClassName('contents')[0].style.opacity = 0;
                    setTimeout(function() {
                        location.href = "http://localhost/ChangeMode";
                    }, 600);
                }, 300);
            }
            clearTimeout(menuTimeout);
        }, 100);
    }
}

function menuBlur(e) {
    e.style.backgroundImage = 'url("")';
}

function menuFocus(e) {
    wsnd.play("UiCursor");
    e.style.backgroundImage = 'url("../../video/cap-select.webp")';
}

function footerText() {
    document.getElementsByClassName('footer-choose')[1].innerHTML = document.getElementsByClassName('footer-choose')[0].innerHTML;
    document.getElementsByClassName('footer-back')[1].innerHTML = document.getElementsByClassName('footer-back')[0].innerHTML;
    document.getElementsByClassName('footer-back')[2].innerHTML = document.getElementsByClassName('footer-back')[0].innerHTML;
}

function page1Open(e) {
    pageNum = 0.5;
    for (i = 1; i < 4; i++) {
        document.getElementsByClassName('page' + i.toString(10))[0].style.display = "block";
        document.getElementById('dummy-a-1').focus();
    }
    document.getElementsByClassName("page0")[0].style.opacity = 0;
    document.getElementsByClassName("page0")[0].style.display = "none";
    document.getElementsByClassName("page1")[0].style.opacity = 1;
    document.getElementsByClassName('btn-operation')[0].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[1].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[2].style.opacity = 1;
    document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[0].innerHTML;
    callOutRedPage1();
    callOutGrayPage1();
    var page1Timeout = setTimeout(function() {
        pageNum = 1;
        clearTimeout(page1Timeout);
    }, 300);
    playReport4 = setTimeout(function() {
        playReportCount(4);
        var removeplayReport4 = setTimeout(function() {
            clearTimeout(playReport4, removeplayReport4);
        }, 100);
    }, 2000);
}

function callOutRedPage1() {
    var redLine = document.getElementById("call-out-red").getContext("2d");
    var redDashLine = document.getElementById("call-out-red-dash").getContext("2d");

    redLine.strokeStyle = "#F80026";
    redLine.lineWidth = 3;

    redLine.beginPath();
    redLine.setLineDash([]);
    redLine.strokeStyle = "#F80026";
    redLine.moveTo(516, 296);
    redLine.lineTo(413, 296);
    redLine.stroke();

    redLine.strokeStyle = "#F80026";
    redLine.moveTo(758, 270);
    redLine.lineTo(900, 270);
    redLine.lineTo(900, 308);
    redLine.stroke();

    redLine.strokeStyle = "#F80026";
    redLine.moveTo(766, 316);
    redLine.lineTo(766, 491);
    redLine.lineTo(866, 491);
    redLine.stroke();

    redDashLine.strokeStyle = "#F80026";
    redDashLine.lineWidth = 3;
    redDashLine.setLineDash([11, 8, 10, 8, 20, 8, 12, 8, 12, 8, 12]);
    redDashLine.moveTo(490, 235);
    redDashLine.lineTo(490, 188);
    redDashLine.lineTo(410, 188);
    redDashLine.stroke();
}

function callOutGrayPage1() {
    var ctl = document.getElementById("call-out-gray1").getContext("2d");
    ctl.strokeStyle = "#9fa0a0";
    ctl.lineWidth = 3;
    ctl.setLineDash([]);
    ctl.beginPath();
    ctl.moveTo(536, 252);
    ctl.lineTo(536, 126);
    ctl.lineTo(339, 126);
    ctl.stroke();

    ctl.moveTo(494, 382);
    ctl.lineTo(339, 382);
    ctl.stroke();

    ctl.strokeStyle = "#b59d00";
    ctl.lineWidth = 3;
    ctl.setLineDash([]);
    ctl.beginPath();
    ctl.moveTo(530, 372);
    ctl.lineTo(530, 560);
    ctl.lineTo(339, 560);
    ctl.stroke();


    var ctr = document.getElementById("call-out-gray2").getContext("2d");
    ctr.strokeStyle = "#9fa0a0";
    ctr.lineWidth = 3;
    ctr.setLineDash([]);
    ctr.beginPath();
    ctr.moveTo(726, 248);
    ctr.lineTo(726, 126);
    ctr.lineTo(940, 126);
    ctr.stroke();

    ctr.moveTo(756, 231);
    ctr.lineTo(756, 180);
    ctr.lineTo(940, 180);
    ctr.stroke();

    ctr.moveTo(751, 364);
    ctr.lineTo(751, 560);
    ctr.lineTo(940, 560);
    ctr.stroke();
}

function page2Open() {
    callOutRedPage2();
    callOutGrayPage2();
    var page2Timeout = setTimeout(function() {
        pageNum = 2;
        clearTimeout(page2Timeout);
    }, 300);
    playReport5 = setTimeout(function() {
        playReportCount(5);
        var removeplayReport5 = setTimeout(function() {
            clearTimeout(playReport5, removeplayReport5);
        }, 100);
    }, 2000);

}


function callOutRedPage2() {
    var redLineL = document.getElementById("call-out-page2red-left").getContext("2d");
    var redLineR = document.getElementById("call-out-page2red-right").getContext("2d");

    redLineL.strokeStyle = "#F80026";
    redLineL.lineWidth = 3;
    redLineR.strokeStyle = "#F80026";
    redLineR.lineWidth = 3;

    redLineL.beginPath();
    redLineL.moveTo(382, 459);
    redLineL.lineTo(382, 289);
    redLineL.lineTo(366, 289);
    redLineL.stroke();

    redLineL.moveTo(352, 408);
    redLineL.lineTo(352, 386);
    redLineL.stroke();

    redLineL.moveTo(345, 476);
    redLineL.lineTo(345, 512);
    redLineL.stroke();

    redLineL.moveTo(410, 486);
    redLineL.lineTo(410, 608);
    redLineL.lineTo(366, 608);
    redLineL.stroke();

    redLineR.moveTo(859, 408);
    redLineR.lineTo(859, 196);
    redLineR.lineTo(912, 196);
    redLineR.stroke();

    redLineR.moveTo(883, 466);
    redLineR.lineTo(883, 264);
    redLineR.lineTo(912, 264);
    redLineR.stroke();

    redLineR.moveTo(921, 459);
    redLineR.lineTo(921, 357);
    redLineR.stroke();

    redLineR.moveTo(947, 490);
    redLineR.lineTo(947, 582);
    redLineR.stroke();
}

function callOutGrayPage2() {
    var grayLineL = document.getElementById("call-out-page2gray-left").getContext("2d");
    var grayLineR = document.getElementById("call-out-page2gray-right").getContext("2d");
    grayLineL.strokeStyle = "#9fa0a0";
    grayLineL.lineWidth = 3;
    grayLineL.setLineDash([]);
    grayLineR.strokeStyle = "#9fa0a0";
    grayLineR.lineWidth = 3;
    grayLineR.setLineDash([]);

    grayLineL.beginPath();
    grayLineL.moveTo(397, 446);
    grayLineL.lineTo(397, 190);
    grayLineL.lineTo(288, 190);


    grayLineL.moveTo(304, 454);
    grayLineL.lineTo(288, 454);
    grayLineL.stroke();

    grayLineR.moveTo(936, 444);
    grayLineR.lineTo(936, 396);
    grayLineR.lineTo(996, 396);
    grayLineR.stroke();

    grayLineR.moveTo(966, 466);
    grayLineR.lineTo(966, 541);
    grayLineR.lineTo(642, 541);
    grayLineR.lineTo(642, 311);
    grayLineR.stroke();
}



function page4Open(e) {
    pageNum = 0.5;
    document.getElementsByClassName("page0")[0].style.display = "none";
    document.getElementsByClassName('page4')[0].style.display = "block";
    document.getElementById('dummy-a-4').focus();

    document.getElementsByClassName('page0')[0].style.opacity = 0;
    document.getElementsByClassName('page4')[0].style.opacity = 1;

    document.getElementsByClassName("action-mov")[0].style.display = "block";


    document.getElementsByClassName('btn-operation')[0].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[1].style.opacity = 1;
    document.getElementsByClassName('btn-operation')[2].style.opacity = 0;
    document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[1].innerHTML;


    document.getElementsByClassName("action-mov")[0].style.opacity = 1;
    document.getElementsByClassName("joycon-lr-desc")[0].style.display = "block";
    document.getElementsByClassName("joycon-side-desc")[0].style.display = "block";
    document.getElementsByClassName('page4')[0].style.display = "block"; //連打対策
    document.getElementById('action1').focus();
    pageNum = 4;

    playReport7 = setTimeout(function() {
        playReportCount(7);
        var removeplayReport7 = setTimeout(function() {
            clearTimeout(playReport7, removeplayReport7);
        }, 100);
    }, 2000);
}

function page5Open(e) {
    pageNum = 0.5;
    document.getElementsByClassName("page0")[0].style.display = "none";
    document.getElementsByClassName('page5')[0].style.display = "block";
    document.getElementById('dummy-a-5').focus();

    document.getElementsByClassName("action-mov")[1].style.display = "block";

    document.getElementsByClassName('page0')[0].style.opacity = 0;
    document.getElementsByClassName('page5')[0].style.opacity = 1;
    document.getElementsByClassName('btn-operation')[0].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[1].style.opacity = 1;
    document.getElementsByClassName('btn-operation')[2].style.opacity = 0;
    document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[2].innerHTML;

    document.getElementsByClassName("action-mov")[1].style.opacity = 1;
    document.getElementsByClassName("action-mov")[1].style.display = "block";
    document.getElementsByClassName("joycon-lr-desc")[1].style.display = "block";
    document.getElementsByClassName("joycon-side-desc")[1].style.display = "block";
    document.getElementsByClassName('page5')[0].style.display = "block"; //連打対策
    document.getElementById('capture1').focus();
    pageNum = 5;

    playReport8 = setTimeout(function() {
        playReportCount(8);
        var removeplayReport8 = setTimeout(function() {
            clearTimeout(playReport8, removeplayReport8);
        }, 100);
    }, 2000);

}

function page6Open(e) {
    pageNum = 0.5;
    for (i = 6; i < 12; i++) {
        document.getElementsByClassName('page' + i.toString(10))[0].style.display = "block";
        document.getElementById('dummy-a-6').focus();
    }
    document.getElementsByClassName('page0')[0].style.opacity = 0;
    document.getElementsByClassName('page6')[0].style.opacity = 1;
    document.getElementsByClassName('btn-operation')[0].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[1].style.opacity = 0;
    document.getElementsByClassName('btn-operation')[2].style.opacity = 1;
    document.getElementsByClassName('page-title')[0].getElementsByTagName('span')[0].innerHTML = document.getElementById('footer-title').getElementsByTagName('span')[3].innerHTML;

    var page6Timeout = setTimeout(function() {
        pageNum = 6;
        clearTimeout(page6Timeout);
    }, 300);
    playReport9to14 = setTimeout(function() {
        playReportCount(pageNum + 3);
        var removeplayReport9to14 = setTimeout(function() {
            clearTimeout(playReport9to14, removeplayReport9to14);
        }, 100);
    }, 2000);
}

function basicMov(num) {
    if (action1SE) {
        wsnd.play("UiCursor");
    } else {
        action1SE = true;
    }
    clearTimeout(playReport15to38);
    clearTimeout(basicTimeout2);
    clearTimeout(basicTimeout3);
    document.getElementsByClassName("action-mov")[0].style.backgroundImage = "url(../../video/action" + num + "_0.webp)";
    document.getElementById('basic-title').getElementsByTagName('span')[0].style.opacity = 0;
    var basicTitle = document.getElementById('basic-title').getElementsByTagName('span')[0];
    var leftDesc = document.getElementsByClassName('joycon-lr-desc')[0].getElementsByTagName('span')[0];
    var rightDesc = document.getElementsByClassName('joycon-side-desc')[0].getElementsByTagName('span')[0];
    var regExp = new RegExp("../../img/", "g");
    basicTitle.innerHTML = document.getElementsByClassName('action-desc')[0].getElementsByTagName('h2')[num - 1].innerHTML;
    leftDesc.innerHTML = document.getElementsByClassName('action-desc')[0].getElementsByClassName('action-ms')[num - 1].innerHTML;
    document.getElementById('action' + num).getElementsByTagName('img')[0].style.animationName = "focus-thmb-up1";
    if (num == 8) {
        rightDesc.innerHTML = "―";
    } else {

        rightDesc.innerHTML = document.getElementsByClassName('action-desc')[0].getElementsByClassName('action-ms')[num - 1].innerHTML.replace(regExp, "../../img/two-play-");
    }

    if ((num > 5 && num < 13) || num > 22) {
        var basicCheck;
        if (num > 5 && num < 13) {
            basicCheck = 0;
        } else if (num == 23) {
            basicCheck = 1;
        } else if (num == 24) {
            basicCheck = 2;
        }
        if (tftext[2][basicCheck] == 0) {
            document.getElementsByClassName("action-mov")[0].style.backgroundImage = "url(../../img/temp/mov-not-open.webp)";
            document.getElementById('action' + num).getElementsByTagName('img')[0].style.animationName = "";
            basicTitle.innerHTML = "?"
            leftDesc.innerHTML = "";
            rightDesc.innerHTML = "";
        } else {
            basicTimeout2 = setTimeout(function() {
                imgload1.src = "../../video/action" + num + ".webp";
                basicTimeout3 = setTimeout(function() {
                    document.getElementsByClassName("action-mov")[0].style.backgroundImage = "url(../../video/action" + num + ".webp)";
                    imgload1.src=null;
                    clearTimeout(basicTimeout3);
                }, 200);
                clearTimeout(basicTimeout2);
            }, 100);
            playReport15to38 = setTimeout(function() {
                playReportCount(num + 14);
                var removeplayReport15to38 = setTimeout(function() {
                    clearTimeout(playReport15to38, removeplayReport15to38);
                }, 100);
            }, 2000);

        }
    } else {
        basicTimeout2 = setTimeout(function() {
            imgload1.src = "../../video/action" + num + ".webp";
            basicTimeout3 = setTimeout(function() {
                document.getElementsByClassName("action-mov")[0].style.backgroundImage = "url(../../video/action" + num + ".webp)";
                imgload1.src=null;
                clearTimeout(basicTimeout3);
            }, 200);
            clearTimeout(basicTimeout2);
        }, 100);
        playReport15to38 = setTimeout(function() {
            playReportCount(num + 14);
            var removeplayReport15to38 = setTimeout(function() {
                clearTimeout(playReport15to38, removeplayReport15to38);
            }, 100);
        }, 2000);
    }
    var basicTimeout1 = setTimeout(function() {
        basicTitle.style.opacity = 1;
        clearTimeout(basicTimeout1);
    }, 100);
}

function captureMov(num) {
    if (capture1SE) {
        wsnd.play("UiCursor");
    } else {
        capture1SE = true;
    }
    clearTimeout(playReport39to62);
    clearTimeout(captureTimeout2);
    clearTimeout(captureTimeout3);
    document.getElementsByClassName("action-mov")[1].style.backgroundImage = "url(../../video/capture" + num + "_0.webp)";
    document.getElementById('capture-title').getElementsByTagName('span')[0].style.opacity = 0;
    var captureTitle = document.getElementById('capture-title').getElementsByTagName('span')[0];
    var leftDesc = document.getElementsByClassName('joycon-lr-desc')[1].getElementsByTagName('span')[0];
    var rightDesc = document.getElementsByClassName('joycon-side-desc')[1].getElementsByTagName('span')[0];
    var regExp = new RegExp("../../img/", "g");
    captureTitle.innerHTML = document.getElementsByClassName('action-desc')[1].getElementsByTagName('h2')[num - 1].innerHTML;
    leftDesc.innerHTML = document.getElementsByClassName('action-desc')[1].getElementsByClassName('capture-ms')[num - 1].innerHTML;
    rightDesc.innerHTML = document.getElementsByClassName('action-desc')[1].getElementsByClassName('capture-ms')[num - 1].innerHTML.replace(regExp, "../../img/two-play-");
    document.getElementById('capture' + num).getElementsByTagName('img')[0].style.animationName = "focus-thmb-up1";

    if (tftext[3][num - 1] == 0) {
        document.getElementsByClassName("action-mov")[1].style.backgroundImage = "url(../../img/temp/mov-not-open.webp)";
        document.getElementById('capture' + num).getElementsByTagName('img')[0].style.animationName = "";
    } else {
        captureTimeout2 = setTimeout(function() {
            imgload1.src = "../../video/capture" + num + ".webp";
            captureTimeout3 = setTimeout(function() {
                document.getElementsByClassName("action-mov")[1].style.backgroundImage = "url(../../video/capture" + num + ".webp)";
                imgload1.src=null;
                clearTimeout(captureTimeout3);
            }, 200);

            clearTimeout(captureTimeout2);
        }, 100);

        playReport39to62 = setTimeout(function() {
            playReportCount(num + 38);
            var removeplayReport39to62 = setTimeout(function() {
                clearTimeout(playReport39to62, removeplayReport39to62);
            }, 100);
        }, 2000);
    }

    var captureTimeout1 = setTimeout(function() {
        document.getElementById('capture-title').getElementsByTagName('span')[0].style.opacity = 1;
        clearTimeout(captureTimeout1);
    }, 100);
}


function playReportCount(obj) {
    window.nx.playReport.incrementCounter(parseInt(obj));
}
