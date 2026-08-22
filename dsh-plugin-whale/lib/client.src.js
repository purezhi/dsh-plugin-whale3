window.__ModuleLoader__.load({
	id: "dsh-plugin-whale",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		//#region whale markups
		var WHALE_MARKUPS = {
			blue: "<div class=\"dsh-whale\" aria-hidden=\"true\" title=\"\u62d6\u62fd\u79fb\u52a8\u9cb8\u9c7c,\u53f3\u952e\u5207\u6362\u54c1\u79cd\"><svg viewBox=\"0 -80 230 230\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"dsh-whale-grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"var(--whale-top)\"/><stop offset=\"100%\" stop-color=\"var(--whale-bottom)\"/></linearGradient></defs><g class=\"whale-body\"><path class=\"whale-body-main\" d=\"M 190 76 C 174 50 128 44 84 48 C 56 51 38 58 30 64 C 23 70 22 78 28 85 C 35 94 55 102 88 107 C 132 113 176 108 190 94 C 198 89 198 82 190 76 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"whale-belly\" d=\"M 48 92 C 76 106 132 108 176 94 C 140 114 66 114 48 92 Z\" fill=\"var(--whale-belly)\"/><path class=\"whale-fin\" d=\"M 96 96 C 91 112 87 126 81 134 C 86 126 93 112 99 100 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"dorsal-fin\" d=\"M 152 46 C 155 39 158 37 160 40 C 162 44 158 49 154 50 Z\" fill=\"url(#dsh-whale-grad)\"/><g class=\"whale-eye\"><circle cx=\"58\" cy=\"62\" r=\"9.5\" fill=\"#ffffff\"/><circle cx=\"56\" cy=\"63\" r=\"4.4\" fill=\"var(--whale-ink)\"/><circle cx=\"54.5\" cy=\"61.5\" r=\"1.5\" fill=\"#ffffff\"/></g><g class=\"whale-face\"><ellipse cx=\"71\" cy=\"75\" rx=\"6.5\" ry=\"3.8\" fill=\"var(--whale-blush)\" opacity=\".5\"/><path d=\"M 46 80 Q 57 88 70 82\" stroke=\"var(--whale-ink)\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/></g></g><path class=\"whale-tailbase\" d=\"M 178 66 C 190 62 200 65 205 71 C 208 76 205 82 198 86 C 188 89 179 87 176 81 C 173 75 175 69 178 66 Z\" fill=\"url(#dsh-whale-grad)\"/><g class=\"whale-tail\"><path class=\"tail-lobe tail-lobe-top\" d=\"M 181 70 C 191 60 201 50 213 40 C 219 35 225 32 229 33 C 221 46 213 58 205 67 C 198 73 189 74 181 70 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"tail-lobe tail-lobe-bottom\" d=\"M 181 82 C 191 90 201 100 213 108 C 219 112 225 114 229 112 C 221 102 213 92 205 84 C 198 79 189 80 181 82 Z\" fill=\"url(#dsh-whale-grad)\"/></g><g class=\"whale-spout\"><rect class=\"spout-jet\" x=\"71.5\" y=\"-42\" width=\"4.5\" height=\"80\" rx=\"2.2\" fill=\"var(--whale-spout)\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"4.5\" style=\"--dx:0px;--dy:-76px;--delay:0s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.2\" style=\"--dx:-11px;--dy:-66px;--delay:0.12s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.2\" style=\"--dx:11px;--dy:-66px;--delay:0.12s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.4\" style=\"--dx:-5px;--dy:-80px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.4\" style=\"--dx:5px;--dy:-80px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"1.8\" style=\"--dx:-17px;--dy:-74px;--delay:0.3s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"1.8\" style=\"--dx:17px;--dy:-74px;--delay:0.3s\"/></g></svg></div>",
	humpback: "<div class=\"dsh-whale\" aria-hidden=\"true\" title=\"\u62d6\u62fd\u79fb\u52a8\u9cb8\u9c7c,\u53f3\u952e\u5207\u6362\u54c1\u79cd\"><svg viewBox=\"0 -80 230 230\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"dsh-whale-grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"var(--whale-top)\"/><stop offset=\"100%\" stop-color=\"var(--whale-bottom)\"/></linearGradient></defs><g class=\"whale-body\"><path class=\"whale-body-main\" d=\"M 190 60 C 170 24 120 16 74 24 C 54 28 38 36 28 44 C 20 52 18 64 22 76 C 27 92 46 106 78 116 C 124 128 170 118 190 92 C 199 85 199 66 190 60 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"whale-belly\" d=\"M 34 90 C 60 114 130 120 182 96 C 140 128 50 126 34 90 Z\" fill=\"var(--whale-belly)\"/><path class=\"whale-fin\" d=\"M 104 88 C 97 108 86 130 68 146 C 81 138 93 120 104 102 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"dorsal-fin\" d=\"M 148 26 C 156 16 162 15 165 20 C 168 27 162 36 152 38 Z\" fill=\"url(#dsh-whale-grad)\"/><circle class=\"tubercle\" cx=\"34\" cy=\"62\" r=\"2\" fill=\"var(--whale-bottom)\"/><circle class=\"tubercle\" cx=\"40\" cy=\"56\" r=\"1.7\" fill=\"var(--whale-bottom)\"/><circle class=\"tubercle\" cx=\"46\" cy=\"64\" r=\"1.7\" fill=\"var(--whale-bottom)\"/><circle class=\"tubercle\" cx=\"30\" cy=\"69\" r=\"1.5\" fill=\"var(--whale-bottom)\"/><g class=\"whale-eye\"><circle cx=\"52\" cy=\"56\" r=\"10\" fill=\"#ffffff\"/><circle cx=\"49\" cy=\"57\" r=\"4.8\" fill=\"var(--whale-ink)\"/><circle cx=\"47\" cy=\"55\" r=\"1.8\" fill=\"#ffffff\"/></g><g class=\"whale-face\"><ellipse cx=\"65\" cy=\"70\" rx=\"7\" ry=\"4\" fill=\"var(--whale-blush)\" opacity=\".5\"/><path d=\"M 38 74 Q 51 84 65 76\" stroke=\"var(--whale-ink)\" stroke-width=\"2.4\" fill=\"none\" stroke-linecap=\"round\"/></g></g><path class=\"whale-tailbase\" d=\"M 178 66 C 190 62 200 65 205 71 C 208 76 205 82 198 86 C 188 89 179 87 176 81 C 173 75 175 69 178 66 Z\" fill=\"url(#dsh-whale-grad)\"/><g class=\"whale-tail\"><path class=\"tail-lobe tail-lobe-top\" d=\"M 181 70 C 191 60 201 50 213 40 C 219 35 225 32 229 33 C 221 46 213 58 205 67 C 198 73 189 74 181 70 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"tail-lobe tail-lobe-bottom\" d=\"M 181 82 C 191 90 201 100 213 108 C 219 112 225 114 229 112 C 221 102 213 92 205 84 C 198 79 189 80 181 82 Z\" fill=\"url(#dsh-whale-grad)\"/></g><g class=\"whale-spout\"><path class=\"spout-arc\" d=\"M 74 38 Q 56 8 38 2\" stroke=\"var(--whale-spout)\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/><path class=\"spout-arc\" d=\"M 74 38 Q 74 2 74 -8\" stroke=\"var(--whale-spout)\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/><path class=\"spout-arc\" d=\"M 74 38 Q 92 8 110 2\" stroke=\"var(--whale-spout)\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"4.2\" style=\"--dx:0px;--dy:-50px;--delay:0s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.4\" style=\"--dx:-17px;--dy:-44px;--delay:0.1s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.4\" style=\"--dx:17px;--dy:-44px;--delay:0.1s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.6\" style=\"--dx:-32px;--dy:-36px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.6\" style=\"--dx:32px;--dy:-36px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2\" style=\"--dx:-44px;--dy:-26px;--delay:0.3s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2\" style=\"--dx:44px;--dy:-26px;--delay:0.3s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"1.7\" style=\"--dx:-9px;--dy:-54px;--delay:0.15s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"1.7\" style=\"--dx:9px;--dy:-54px;--delay:0.15s\"/></g></svg></div>",
	orca: "<div class=\"dsh-whale\" aria-hidden=\"true\" title=\"\u62d6\u62fd\u79fb\u52a8\u9cb8\u9c7c,\u53f3\u952e\u5207\u6362\u54c1\u79cd\"><svg viewBox=\"0 -80 230 230\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"dsh-whale-grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"var(--whale-top)\"/><stop offset=\"100%\" stop-color=\"var(--whale-bottom)\"/></linearGradient></defs><g class=\"whale-body\"><path class=\"whale-body-main\" d=\"M 190 70 C 172 44 132 36 92 40 C 64 43 44 50 34 58 C 26 65 25 74 31 83 C 39 94 66 105 104 111 C 146 117 178 108 190 92 C 198 87 198 76 190 70 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"whale-belly\" d=\"M 30 72 C 40 94 76 110 124 112 C 96 114 52 102 30 72 Z\" fill=\"var(--whale-belly)\"/><path class=\"orca-saddle\" d=\"M 136 36 C 150 32 164 34 178 44 C 162 48 148 46 136 40 Z\" fill=\"#8a8f98\"/><path class=\"whale-fin\" d=\"M 97 96 C 93 116 91 126 97 130 C 103 126 105 112 103 98 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"dorsal-fin\" d=\"M 132 42 C 144 14 160 4 172 6 C 166 23 157 38 145 47 Z\" fill=\"url(#dsh-whale-grad)\"/><ellipse class=\"orca-eyepatch\" cx=\"62\" cy=\"57\" rx=\"7.5\" ry=\"3.4\" fill=\"var(--whale-belly)\" transform=\"rotate(-14 62 57)\"/><g class=\"whale-eye\"><circle cx=\"50\" cy=\"60\" r=\"7.5\" fill=\"#ffffff\"/><circle cx=\"48.5\" cy=\"61\" r=\"3.6\" fill=\"var(--whale-ink)\"/><circle cx=\"47\" cy=\"59.5\" r=\"1.3\" fill=\"#ffffff\"/></g><g class=\"whale-face\"><ellipse cx=\"62\" cy=\"72\" rx=\"6\" ry=\"3.5\" fill=\"var(--whale-blush)\" opacity=\".4\"/><path d=\"M 38 78 Q 49 86 61 80\" stroke=\"var(--whale-ink)\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/></g></g><path class=\"whale-tailbase\" d=\"M 178 66 C 190 62 200 65 205 71 C 208 76 205 82 198 86 C 188 89 179 87 176 81 C 173 75 175 69 178 66 Z\" fill=\"url(#dsh-whale-grad)\"/><g class=\"whale-tail\"><path class=\"tail-lobe tail-lobe-top\" d=\"M 181 70 C 191 60 201 50 213 40 C 219 35 225 32 229 33 C 221 46 213 58 205 67 C 198 73 189 74 181 70 Z\" fill=\"url(#dsh-whale-grad)\"/><path class=\"tail-lobe tail-lobe-bottom\" d=\"M 181 82 C 191 90 201 100 213 108 C 219 112 225 114 229 112 C 221 102 213 92 205 84 C 198 79 189 80 181 82 Z\" fill=\"url(#dsh-whale-grad)\"/></g><g class=\"whale-spout\"><rect class=\"spout-jet\" x=\"71.5\" y=\"-10\" width=\"5\" height=\"48\" rx=\"2.5\" fill=\"var(--whale-spout)\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"4\" style=\"--dx:0px;--dy:-42px;--delay:0s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.2\" style=\"--dx:-17px;--dy:-38px;--delay:0.1s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"3.2\" style=\"--dx:17px;--dy:-38px;--delay:0.1s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.6\" style=\"--dx:-29px;--dy:-32px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2.6\" style=\"--dx:29px;--dy:-32px;--delay:0.2s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2\" style=\"--dx:-38px;--dy:-24px;--delay:0.3s\"/><circle class=\"spout-drop\" cx=\"74\" cy=\"38\" r=\"2\" style=\"--dx:38px;--dy:-24px;--delay:0.3s\"/></g></svg></div>"
		};
		var WHALE_KINDS = ["humpback", "blue", "orca"];
		//#endregion

		//#region whale styles
		var WHALE_CSS = ':root{--whale-y:14px;--whale-x:20px;--whale-w:clamp(104px,11vw,158px)}.dsh-whale{position:fixed;top:var(--whale-y);left:var(--whale-x);width:var(--whale-w);z-index:45;pointer-events:auto;cursor:grab;touch-action:none;opacity:.94;filter:drop-shadow(0 6px 14px rgba(30,50,120,.28));animation:whale-swim 40s ease-in-out infinite;user-select:none;-webkit-user-select:none}.dsh-whale.dragging{cursor:grabbing;animation-play-state:paused;transition:none}.dsh-whale[data-kind="blue"]{--whale-top:#4d6bfe;--whale-bottom:#3451db;--whale-belly:rgba(226,234,255,.95);--whale-ink:#14264d;--whale-blush:#ff9eb3;--whale-spout:#7aa2ff}.dsh-whale[data-kind="humpback"]{--whale-top:#5b8cff;--whale-bottom:#2a5adf;--whale-belly:rgba(244,248,255,.98);--whale-ink:#12306b;--whale-blush:#ffa2b8;--whale-spout:#a8c6ff}.dsh-whale[data-kind="orca"]{--whale-top:#101016;--whale-bottom:#1e1e2a;--whale-belly:#f5f6fa;--whale-ink:#0c0c14;--whale-blush:#ffa2b8;--whale-spout:#dfe6f2}.dsh-whale .whale-body{transform-box:fill-box;transform-origin:50% 60%;animation:whale-float 6s ease-in-out infinite}.whale-tail{transform-box:fill-box;transform-origin:3% 50%;animation:tail-bend 1s ease-in-out infinite}.tail-lobe-top{transform-box:fill-box;transform-origin:4% 88%;animation:lobe-top 1s ease-in-out infinite}.tail-lobe-bottom{transform-box:fill-box;transform-origin:4% 12%;animation:lobe-bottom 1s ease-in-out infinite}.dsh-whale .whale-fin{transform-box:fill-box;transform-origin:40% 85%;animation:whale-fin 2.4s ease-in-out infinite}.dsh-whale .whale-eye{transform-box:fill-box;transform-origin:52% 58%;animation:whale-blink 6s ease-in-out infinite}.whale-spout{transform-box:fill-box;transform-origin:50% 100%}.spout-jet{transform-box:fill-box;transform-origin:50% 100%;animation:spout-jet 1.5s ease-out infinite}.spout-drop{transform-box:fill-box;transform-origin:center;animation:spout-drop 1.5s ease-out infinite;animation-delay:var(--delay,0s)}.spout-arc{opacity:0;animation:spout-arc 1.5s ease-out infinite}@keyframes whale-swim{0%,8%{transform:translateX(0) scaleX(-1)}40%{transform:translateX(calc(100vw - var(--whale-w) - var(--whale-x) - 14px)) scaleX(-1)}45%{transform:translateX(calc(100vw - var(--whale-w) - var(--whale-x) - 14px)) scaleX(-1)}48%{transform:translateX(calc(100vw - var(--whale-w) - var(--whale-x) - 14px)) scaleX(1)}92%{transform:translateX(0) scaleX(1)}95%{transform:translateX(0) scaleX(1)}97%{transform:translateX(0) scaleX(-1)}100%{transform:translateX(0) scaleX(-1)}}@keyframes whale-float{0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-9px) rotate(1.5deg)}}@keyframes tail-bend{0%,100%{transform:rotate(2deg)}50%{transform:rotate(-3.5deg)}}@keyframes lobe-top{0%,100%{transform:rotate(9deg)}50%{transform:rotate(-8deg)}}@keyframes lobe-bottom{0%,100%{transform:rotate(-9deg)}50%{transform:rotate(8deg)}}@keyframes whale-fin{0%,100%{transform:rotate(0)}50%{transform:rotate(12deg)}}@keyframes whale-blink{0%,91%,100%{transform:scaleY(1)}94%,96%{transform:scaleY(.08)}}@keyframes spout-jet{0%{transform:scaleY(0);opacity:0}12%{transform:scaleY(1);opacity:.95}38%{transform:scaleY(1);opacity:.85}60%,100%{transform:scaleY(.15);opacity:0}}@keyframes spout-drop{0%{transform:translate(0,0) scale(.3);opacity:0}15%{opacity:1}100%{transform:translate(var(--dx,0px),var(--dy,-40px)) scale(1);opacity:0}}@keyframes spout-arc{0%,10%{opacity:0}30%{opacity:.9}55%{opacity:.7}80%,100%{opacity:0}}@media (prefers-reduced-motion:reduce){.dsh-whale,.dsh-whale *{animation:none}}';
		//#endregion

		//#region lib/types/client/index.js
		/** Client plugin body: mount the whale companion, right-click cycles species. */
		function apply(ctx) {
			if (typeof document === "undefined") return;
			if (document.querySelector(".dsh-whale")) return;
			var style = document.createElement("style");
			style.textContent = WHALE_CSS;
			document.head.appendChild(style);

			var wrap = document.createElement("div");
			wrap.innerHTML = WHALE_MARKUPS[WHALE_KINDS[0]];
			var whale = wrap.firstElementChild;
			document.body.appendChild(whale);
			whale.dataset.kind = WHALE_KINDS[0];

			var kindIdx = 0;
			function setKind(idx) {
				kindIdx = (idx + WHALE_KINDS.length) % WHALE_KINDS.length;
				var kind = WHALE_KINDS[kindIdx];
				var inner = document.createElement("div");
				inner.innerHTML = WHALE_MARKUPS[kind];
				var newSvg = inner.querySelector("svg");
				var oldSvg = whale.querySelector("svg");
				if (oldSvg && newSvg) oldSvg.replaceWith(newSvg);
				whale.dataset.kind = kind;
			}
			whale.addEventListener("contextmenu", function (e) {
				e.preventDefault();
				setKind(kindIdx + 1);
			});
			whale.addEventListener("dblclick", function (e) {
				setKind(0);
			});

			var dragging = false;
			var startX = 0, startY = 0, startTop = 0, startLeft = 0;
			whale.addEventListener("pointerdown", function (e) {
				if (e.button !== 0 && e.pointerType === "mouse") return;
				dragging = true;
				startX = e.clientX;
				startY = e.clientY;
				var rect = whale.getBoundingClientRect();
				startTop = rect.top;
				startLeft = rect.left;
				whale.classList.add("dragging");
				try { whale.setPointerCapture(e.pointerId); } catch (_) {}
				e.preventDefault();
			});
			whale.addEventListener("pointermove", function (e) {
				if (!dragging) return;
				var dx = e.clientX - startX;
				var dy = e.clientY - startY;
				var maxY = window.innerHeight - whale.offsetHeight - 8;
				var maxX = window.innerWidth - whale.offsetWidth - 8;
				var top = Math.max(4, Math.min(maxY, startTop + dy));
				var left = Math.max(4, Math.min(maxX, startLeft + dx));
				whale.style.setProperty("--whale-y", top + "px");
				whale.style.setProperty("--whale-x", left + "px");
			});
			function endDrag() {
				if (!dragging) return;
				dragging = false;
				whale.classList.remove("dragging");
			}
			whale.addEventListener("pointerup", endDrag);
			whale.addEventListener("pointercancel", endDrag);
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});
