$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

// $(".back-to-top").click(function () {
//   $("html, body").animate(
//     {
//       scrollTop: 0,
//     },
//     1000
//   );
//   return false;
// });

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("navbtn").classList.toggle("bg-gray");
}

$(window).ready(function () {
  //$(".page").append( "<div class='wp-navi-border'></div>" );
  $("<div class='wp-navi-border'></div>").insertAfter(".page");
  $("<div class='wp-navi-border'></div>").insertAfter(".current");
  $(".wp-navi-border:last-of-type").hide();
  $(".menu-link").click(function () {
    $(".mobile-nav-toggle").click();
  });
});

// フローティングボタン PC
$(document).ready(function () {
  let btnWrapper = $(".btn-wrapper");
  let footer = $("footer");
  btnWrapper.css("bottom", "0");

  if (!isMobileDevice()) {
    $(window).scroll(function () {
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      let footerHeight = $("footer").height();
      let btnWrapperHeight = $(".btn-wrapper").height();

      btnWrapper.css("bottom", "0");

      if (scrollHeight - scrollPosition < footer.outerHeight()) {
        let rootFontSize = parseFloat($("html").css("font-size"));
        btnWrapper.css(
          "bottom",
          (footer.outerHeight() - scrollHeight + scrollPosition) /
            rootFontSize +
            "rem"
        );
      }
    });
  }

  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
});

// フローティングボタン SP

function adjustButtonPosition() {
  if ($(window).width() <= 767) {
    let footerHeight = $("footer").outerHeight();
    let btnWrapper = $(".btn-wrapper");
    let windowHeight = window.innerHeight;
    let scrollTop = $(window).scrollTop();
    let documentHeight = $(document).height();
    let scrollBottom = documentHeight - (scrollTop + windowHeight);

    if (scrollBottom <= footerHeight) {
      btnWrapper.css({
        position: "fixed",
        bottom: Math.max(0, footerHeight - scrollBottom) + "px" // フッターに近づくと、ボタンの位置を調整
      });
    } else {
      btnWrapper.css({
        position: "fixed",
        bottom: "0"
      });
    }
  }
}

// 初回の調整
adjustButtonPosition();

// スクロールおよびウィンドウのリサイズイベント時に調整を実行
$(window).on("scroll resize", adjustButtonPosition);










$(document).ready(function () {
  $(".top-region").show();
  $(".hokkaido-sec").hide();
  $(".kanto-sec").hide();
  $(".koshinetsu-sec").hide();
  $(".kyushu-sec").hide();
  $(".tokai-sec").hide();
  $(".kansai-sec").hide();
  $(".shikoku-sec").hide();
  $(".work-wrapper").hide();
  $(".condition-wrapper").hide();

  $(".work-forward-btn").css({
    "background-color": "#0AE",
    border: "1px solid #000",
    "font-size": "2.6rem",
    "font-weight": "600",
    color: "#FFF",
  });

  $(".condition-forward-btn").css({
    "background-color": "#0AE",
    border: "1px solid #000",
    "font-size": "2.6rem",
    "font-weight": "600",
    color: "#FFF",
  });

  $(".hokkaido-btn").click(function () {
    $(".kanto-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".kyushu-sec").hide();
    $(".tokai-sec").hide();
    $(".kansai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".hokkaido-sec").show();
      }
    );
  });

  $(".kanto-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".kyushu-sec").hide();
    $(".tokai-sec").hide();
    $(".kansai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".kanto-sec").show();
      }
    );
  });

  $(".koshinetsu-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".kanto-sec").hide();
    $(".kyushu-sec").hide();
    $(".tokai-sec").hide();
    $(".kansai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".koshinetsu-sec").show();
      }
    );
  });

  $(".kyushu-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".kanto-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".tokai-sec").hide();
    $(".kansai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".kyushu-sec").show();
      }
    );
  });

  $(".tokai-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".kanto-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".kyushu-sec").hide();
    $(".kansai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".tokai-sec").show();
      }
    );
  });

  $(".kansai-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".kanto-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".kyushu-sec").hide();
    $(".tokai-sec").hide();
    $(".shikoku-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".kansai-sec").show();
      }
    );
  });

  $(".shikoku-btn").click(function () {
    $(".hokkaido-sec").hide();
    $(".kanto-sec").hide();
    $(".koshinetsu-sec").hide();
    $(".kyushu-sec").hide();
    $(".tokai-sec").hide();
    $(".kansai-sec").hide();

    $(".top-region").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".top-region").hide();
        $(".top-region").css({
          left: "0",
          top: "0",
        });
        $(".shikoku-sec").show();
      }
    );
  });

  $(".region-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  $(".top-region-btn").click(function () {
    let parentElement = $(this).parent();

    $(parentElement).animate(
      {
        left: "300rem",
        top: "0",
      },
      300,
      function () {
        $(parentElement).hide();
        $(parentElement).css({
          left: "0",
          top: "0",
        });
        $(".top-region").show();
      }
    );

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  const prefecture_jp = [
    "北海道",
    "青森",
    "秋田",
    "岩手",
    "山形",
    "宮城",
    "福島",
    "東京",
    "神奈川",
    "千葉",
    "埼玉",
    "栃木",
    "群馬",
    "茨城",
    "新潟",
    "長野",
    "山梨",
    "石川",
    "富山",
    "福井",
    "愛知",
    "静岡",
    "三重",
    "岐阜",
    "大阪",
    "京都",
    "兵庫",
    "奈良",
    "滋賀",
    "和歌山",
    "広島",
    "岡山",
    "島根",
    "鳥取",
    "山口",
    "愛媛",
    "香川",
    "徳島",
    "高知",
    "福岡",
    "佐賀",
    "長崎",
    "熊本",
    "大分",
    "宮崎",
    "鹿児島",
    "沖縄",
  ];

  const prefecture_en = [
    "hokkaido",
    "aomori",
    "akita",
    "iwate",
    "yamagata",
    "miyagi",
    "fukushima",
    "tokyo",
    "kanagawa",
    "chiba",
    "saitama",
    "tochigi",
    "gunma",
    "ibaraki",
    "niigata",
    "nagano",
    "yamanashi",
    "ishikawa",
    "toyama",
    "fukui",
    "aichi",
    "shizuoka",
    "triple",
    "gifu",
    "osaka",
    "kyoto",
    "hyogo",
    "nara",
    "shiga",
    "wakayama",
    "hiroshima",
    "okayama",
    "shimane",
    "tottori",
    "yamaguchi",
    "ehime",
    "kagawa",
    "tokushima",
    "kochi",
    "fukuoka",
    "saga",
    "nagasaki",
    "kumamoto",
    "oita",
    "miyazaki",
    "kagoshima",
    "okinawa",
  ];

  let selected_prefecture;

  $(".prefecture-btn").click(function () {
    let prefecture = jQuery(this).text().trim();
    $(".region-wrapper").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".region-wrapper").hide();
        $(".region-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".work-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".work-wrapper").show();
        $(".progress-sec-bar").animate(
          {
            width: "64%",
          },
          800
        );
        $(".progress-sec-not-bar").animate(
          {
            width: "32%",
          },
          800
        );
      }
    );
    selected_prefecture =
      prefecture_en[prefecture_jp.findIndex((jp) => jp === prefecture)];
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  $(".work-back-btn").click(function () {
    $(".work-wrapper").animate(
      {
        top: "0",
        left: "300rem",
      },
      400,
      function () {
        $(".work-wrapper").hide();
        $(".region-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".work-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".region-wrapper").show();
        $(".progress-sec-bar").animate(
          {
            width: "32%",
          },
          800
        );
        $(".progress-sec-not-bar").animate(
          {
            width: "64%",
          },
          800
        );
        $(".progress-sec-bar").css({
          "border-bottom-right-radius": "0",
          "border-top-right-radius": "0",
        });
      }
    );

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  $(".work-forward-btn").click(function () {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      $(".btn-wrapper").css("bottom", "1.5rem");
    }

    $(".work-wrapper").animate(
      {
        left: "-100rem",
        top: "0",
      },
      300,
      function () {
        $(".work-wrapper").hide();
        $(".work-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".condition-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".condition-wrapper").show();
        $(".progress-sec-bar").animate(
          {
            width: "96%",
          },
          800
        );
        $(".progress-sec-bar").css({
          "border-radius": "1rem",
        });
        $(".progress-sec-not-bar").animate(
          {
            width: "0%",
          },
          800
        );
      }
    );

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  $(".condition-back-btn").click(function () {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      $(".btn-wrapper").css("bottom", "1.5rem");
    }
    $(".condition-wrapper").animate(
      {
        top: "0",
        left: "300rem",
      },
      400,
      function () {
        $(".condition-wrapper").hide();
        $(".work-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".condition-wrapper").css({
          left: "0",
          top: "0",
        });
        $(".work-wrapper").show();
        $(".progress-sec-bar").animate(
          {
            width: "64%",
          },
          800
        );
        $(".progress-sec-not-bar").animate(
          {
            width: "32%",
          },
          800
        );
        $(".progress-sec-bar").css({
          "border-bottom-right-radius": "0",
          "border-top-right-radius": "0",
        });
      }
    );

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  let selectedElements = [];

  let elements = Array.from(document.getElementsByClassName("active"));

  elements.forEach((element) => {
    selectedElements.push(element.innerHTML);
  });

  // if (selectedElements.length) {
  //   $(".condition-forward-btn").css({
  //     "background-color": "#0AE",
  //     border: "1px solid #000",
  //     "font-size": "1.6rem",
  //     "font-weight": "600",
  //     color: "#FFF",
  //   });
  // } else {
  //   $(".condition-forward-btn").css({
  //     "background-color": "#FFF",
  //     border: "1px solid #C4C4C4",
  //     "font-size": "1.6rem",
  //     "font-weight": "600",
  //     color: "#000",
  //   });
  // }

  $(".work-type-link").click(function () {
    let backgroundColor = $(this).css("background-color");
    if (backgroundColor == "rgb(255, 255, 255)") {
      if (!selectedElements.includes(jQuery(this).text()))
        selectedElements.push(jQuery(this).text());

      $(this).addClass("active");
    } else if (backgroundColor == "rgb(0, 170, 238)") {
      let index = selectedElements.indexOf(jQuery(this).text());
      if (index !== -1) {
        selectedElements.splice(index, 1);
      }

      $(this).removeClass("active");
    }

    // if (selectedElements.length) {
    //   $(".condition-forward-btn").css({
    //     "background-color": "#0AE",
    //     border: "1px solid #000",
    //     "font-size": "1.6rem",
    //     "font-weight": "600",
    //     color: "#FFF",
    //   });
    // } else {
    //   $(".condition-forward-btn").css({
    //     "background-color": "#FFF",
    //     border: "1px solid #C4C4C4",
    //     "font-size": "1.6rem",
    //     "font-weight": "600",
    //     color: "#000",
    //   });
    // }
  });

  let works_jp = [
    "単発（1日）",
    "短期（1週間以内）",
    "短期（1ヶ月以内）",
    "短期（3ヶ月以内）",
    "長期（3か月以上）",
    "春/夏/冬休み期間限定",
    "土日祝のみ勤務",
    "平日のみ勤務",
    "週1勤務OK",
    "シフト自由・自己申告",
    "フレックスタイム制",
    "完全週休2日制",
    "1日4h以内可",
    "早朝",
    "朝朝",
    "昼",
    "夕方",
    "夜",
    "夜勤",
  ];
  let works_id = [
    3101, 3102, 3103, 3104, 3201, 3202, 225, 224, 51, 223, 264, 268, 247, 45,
    41, 42, 43, 47, 44,
  ];

  let conditions_jp = [
    "高収入",
    "日払い/週払い",
    "在宅ワーク・内職",
    "交通費支給",
    "履歴書不要",
    "オープニングスタッフ",
    "未経験歓迎",
    "高校生歓迎",
    "髪色自由",
    "髪型自由",
    "扶養控除内勤務可",
    "体を動かす仕事",
    "残業時間月10時間以下",
    "まかないあり",
    "研修制度あり",
    "送迎制度あり",
    "寮・社宅あり",
    "昇給あり",
    "制服貸与",
    "社員割引あり",
    "社会保険完備",
    "社員登用あり",
    "託児所あり",
    "産休・育休取得実績あり",
    "すぐ働ける",
    "友達と応募歓迎",
    "大量募集（10名以上）",
    "面接確約あり",
    "動画応募可能",
    "オンライン面接可能",
    "英語力・語学力を活かす",
    "PCスキルを活かす",
    "経験者優遇",
    "資格を活かせる",
    "駅から5分以内",
    "車通勤可",
    "バイク/自動車通勤可",
    "英語力・語学力が身につく",
    "PCスキルが身につく",
    "大学生歓迎",
    "主婦（夫）歓迎",
    "フリーター歓迎",
    "二部学生歓迎",
    "シルバー歓迎",
    "留学生歓迎",
    "副業・Wワーク歓迎",
    "第二新卒歓迎",
    "学歴不問",
    "服装自由",
    "ピアス可",
    "ネイル可",
    "ひげ可",
  ];

  let conditions_id = [
    25, 26, 219, 239, 249, 24, 29, 240, 256, 23, 251, 211, 265, 210, 215, 222,
    237, 221, 214, 238, 236, 229, 263, 266, 246, 217, 28, 2118, 2119, 2117, 261,
    232, 235, 253, 21, 27, 260, 231, 262, 242, 245, 241, 243, 254, 255, 248,
    267, 244, 22, 257, 258, 259,
  ];

  $(".condition-forward-btn").click(function () {
    let selected_id = [];
    selectedElements.forEach((current_selected_element) => {
      let selected_work_id = works_jp.findIndex(
        (work_jp) => work_jp === current_selected_element
      );
      if (selected_work_id != -1) {
        selected_id.push(works_id[selected_work_id]);
      }
      let selected_condition_id = conditions_jp.findIndex(
        (condition_jp) => condition_jp === current_selected_element
      );
      if (selected_condition_id != -1) {
        selected_id.push(conditions_id[selected_condition_id]);
      }
    });

    let url = "/" + String(selected_prefecture);
    if (selected_id.length == 0) {
      url += "/all";
    } else {
      url += "/kd-";
      for (let i = 0; i < selected_id.length; i++) {
        if (i) url += "_";
        url += String(selected_id[i]);
      }
    }
    window.location.href = "https://baito.mynavi.jp" + url;
  });
});
