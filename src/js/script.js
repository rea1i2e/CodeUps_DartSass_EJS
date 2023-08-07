jQuery(function ($) {
	/* ------------------------------
ドロワーメニュー開閉
------------------------------ */

	$("#js-menu").click(function () {
		if ($(this).attr("aria-expanded") == "false") {
			$("body").addClass("is-drawerActive");
			$(this).attr("aria-expanded", true);
			$("#js-drawer").attr("aria-hidden", "false");
			$("#js-drawer").fadeIn().css("display", "flex");
			$("html,body").css("overflow", "hidden");
		} else {
			$(this).attr("aria-expanded", false);
			$("body").removeClass("is-drawerActive");
			$("#js-drawer").attr("aria-hidden", "true");
			$("#js-drawer").fadeOut();
			$("html,body").css("overflow", "initial");
		}
	});

	$("#js-drawer").click(function () {
		$("#js-menu").attr("aria-expanded", false);
		$("body").removeClass("is-drawerActive");
		$("#js-drawer").attr("aria-hidden", "true");
		$("#js-drawer").fadeOut();
		$("html,body").css("overflow", "initial");
	});


});

// /* ------------------------------
// アコーディオンjQuery(function ($) {} });の外に記述
// ------------------------------ */
// document.addEventListener("DOMContentLoaded", function () {
// 	setUpAccordion();
// });

// /**
//  * ライブラリ(GSAP)を使ってアコーディオンのアニメーションを制御します
//  */
// var setUpAccordion = function setUpAccordion() {
// 	var details = document.querySelectorAll(".js-details");
// 	var IS_OPENED_CLASS = "is-opened"; // アイコン操作用のクラス名

// 	details.forEach(function (element) {
// 		var summary = element.querySelector(".js-summary");
// 		var content = element.querySelector(".js-content");
// 		summary.addEventListener("click", function (event) {
// 			// デフォルトの挙動を無効化
// 			event.preventDefault();

// 			// is-openedクラスの有無で判定（detailsのopen属性の判定だと、アニメーション完了を待つ必要がありタイミング的に不安定になるため）
// 			if (element.classList.contains(IS_OPENED_CLASS)) {
// 				// アコーディオンを閉じるときの処理
// 				// アイコン操作用クラスを切り替える(クラスを取り除く)
// 				element.classList.toggle(IS_OPENED_CLASS);

// 				// アニメーション実行
// 				closingAnim(content, element).restart();
// 			} else {
// 				// アコーディオンを開くときの処理
// 				// アイコン操作用クラスを切り替える(クラスを付与)
// 				element.classList.toggle(IS_OPENED_CLASS);

// 				// open属性を付与
// 				element.setAttribute("open", "true");

// 				// アニメーション実行
// 				openingAnim(content).restart();
// 			}
// 		});
// 	});
// };

// /**
//  * アコーディオンを閉じる時のアニメーション
//  */
// var closingAnim = function closingAnim(content, element) {
// 	return gsap.to(content, {
// 		height: 0,
// 		opacity: 0,
// 		duration: 0.4,
// 		ease: "power3.out",
// 		overwrite: true,
// 		onComplete: function onComplete() {
// 			// アニメーションの完了後にopen属性を取り除く
// 			element.removeAttribute("open");
// 		},
// 	});
// };

// /**
//  * アコーディオンを開く時のアニメーション
//  */
// var openingAnim = function openingAnim(content) {
// 	return gsap.fromTo(
// 		content,
// 		{
// 			height: 0,
// 			opacity: 0,
// 		},
// 		{
// 			height: "auto",
// 			opacity: 1,
// 			duration: 0.4,
// 			ease: "power3.out",
// 			overwrite: true,
// 		}
// 	);
// };
