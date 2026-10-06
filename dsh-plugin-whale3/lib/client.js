window.__ModuleLoader__.load({
	id: "@purezhi/dsh-plugin-whale3",
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

		//#region settings pages (Plugins page slots)
		// The Plugins page renders a plugin's own configuration instead of the
		// schema-generated form in Settings. The Config schema alone is not
		// enough: the page only shows an entry point when the matching slot is
		// registered, so two registrations are needed —
		//
		//   plugins.bundle.config, keyed by the PACKAGE name: renders on the
		//     bundle's detail page between its description and its rows. The page
		//     renders that section only while `ledger.bundles.has(packageName)`
		//     is true, i.e. exactly when this key is registered.
		//
		//   plugins.row.config, keyed by "<package>#<row id>": gives that row a
		//     Configure control and renders the row's own page.
		//
		// A row page is handed `form = { state, mutate(operations, revision) }` by
		// the page; a bundle page is not, because a bundle can hold several
		// entries and has no single form. That page therefore reads the shared
		// settings surface itself and degrades to a read-only view (plus the YAML
		// alternative) when no settings surface is mounted.
		//
		// A save re-reads /whale/config through whaleRefreshConfig(), so the pet
		// follows the new value immediately instead of only at mount.
		var CONFIG_PACKAGE = "@purezhi/dsh-plugin-whale3";
		var CONFIG_ROW_ID = "whale";
		var CONFIG_ROW_KEY = CONFIG_PACKAGE + "#" + CONFIG_ROW_ID;
		var CONFIG_DICT_NS = "whaleSettings";
		var CONFIG_YAML =
			"- id: whale\n" +
			"  config:\n" +
			"    rightClickSwitch: true";

		/** Copy shown by the settings pages; also registered as the locale dictionary. */
		var CONFIG_TEXT = {
			en: {
				title: "Whale settings",
				summary: "Whether right-clicking the whale switches species.",
				rightClickSwitch: "Right-click switches the species",
				rightClickSwitchHint: "Off keeps the browser menu on right-click; double-click still resets to the humpback.",
				on: "On",
				off: "Off",
				save: "Save",
				saving: "Saving…",
				reset: "Reset to default",
				saved: "Saved. The pet re-read the configuration.",
				conflict: "This configuration changed elsewhere. Reopen the page and apply your values again.",
				failed: "The deployment did not accept these values.",
				loading: "Loading configuration…",
				readOnly: "This deployment exposes no editable settings surface for this plugin, so the effective value is shown read-only.",
				unavailable: "The settings service does not serve this plugin, so the effective value is shown read-only."
			},
			zh: {
				title: "Whale 设置",
				summary: "右键点击是否切换形象。",
				rightClickSwitch: "右键点击切换形象",
				rightClickSwitchHint: "关闭后右键不再切换（保留浏览器菜单），双击仍可重置为座头鲸。",
				on: "开",
				off: "关",
				save: "保存",
				saving: "保存中…",
				reset: "恢复默认",
				saved: "已保存。桌宠已重新读取配置。",
				conflict: "配置已在其它地方被修改，请重新打开本页并再次保存。",
				failed: "本部署没有接受该值。",
				loading: "正在读取配置…",
				readOnly: "本部署没有为该插件提供可编辑的设置界面，以下为当前生效值（只读）。",
				unavailable: "设置服务未提供该插件，以下为当前生效值（只读）。"
			}
		};

		/** Inline styles: the pages live on the Plugins page, so they follow its CSS variables. */
		var CONFIG_STYLE = {
			form: { maxWidth: "560px", margin: "0", color: "var(--dsw-alias-label-primary, inherit)" },
			field: { display: "flex", flexDirection: "column", gap: "4px", margin: "0 0 12px" },
			checkRow: { display: "flex", alignItems: "center", gap: "8px" },
			label: { fontSize: "13px", color: "var(--dsw-alias-label-primary, inherit)" },
			hint: { fontSize: "12px", margin: "0", color: "var(--dsw-alias-label-tertiary, #8a8a90)" },
			row: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "4px" },
			button: {
				font: "inherit", fontSize: "13px", padding: "5px 12px", borderRadius: "6px", cursor: "pointer",
				border: "1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.2))",
				background: "var(--dsw-alias-bg-primary, transparent)",
				color: "var(--dsw-alias-label-primary, inherit)"
			},
			ok: { fontSize: "12px", margin: "8px 0 0", color: "var(--dsw-alias-state-success-primary, #2e7d32)" },
			err: { fontSize: "12px", margin: "8px 0 0", color: "var(--dsw-alias-state-danger-primary, #c62828)" },
			code: { fontSize: "12px", margin: "8px 0 0", whiteSpace: "pre-wrap", color: "var(--dsw-alias-label-tertiary, #8a8a90)" }
		};

		// ---- registration state (one bundle factory = one module instance) ----
		var react = null;                 // require("react"), when the loader provides it
		var whaleRefreshConfig = null;    // re-reads /whale/config for the mounted pet
		var configSlotsOwner = null;      // fiber owning the live slot registration
		var configSlotsDispose = null;    // its disposer (clears the claim above)
		var configFormsService = null;    // optional ctx.configForms (shared settings forms)
		var configRemoteSettings = null;  // optional ctx.remote.settings namespace

		/** Translate one settings string: the page's locale seat, else the built-in dictionary. */
		function configTranslator(t) {
			return function (key, params) {
				var text;
				if (typeof t === "function") {
					try { text = t(key, params); } catch (e) { text = undefined; }
				}
				if (text === undefined || text === key) {
					var zh = false;
					try {
						zh = /^zh/i.test(navigator.language || "") ||
							/^zh/i.test((document.documentElement && document.documentElement.lang) || "");
					} catch (e) { zh = false; }
					text = (zh ? CONFIG_TEXT.zh : CONFIG_TEXT.en)[key];
					if (text === undefined) text = key;
					if (params) {
						text = String(text).replace(/\{(\w+)\}/g, function (match, name) {
							return name in params ? String(params[name]) : match;
						});
					}
				}
				return text;
			};
		}

		/** The editable field of one namespace value. */
		function configDraft(value) {
			var v = value && typeof value === "object" ? value : {};
			return { rightClickSwitch: v.rightClickSwitch !== false };
		}

		/** Toggle the switch, and let the mounted pet follow immediately. */
		function configOps(draft) {
			return [{ op: "set", path: ["rightClickSwitch"], value: draft.rightClickSwitch === true }];
		}

		/** Drop the override so the schema default applies again (`unset` restores inheritance). */
		var CONFIG_RESET_OPS = [{ op: "unset", path: ["rightClickSwitch"] }];

		/** Re-read the effective value so a mounted pet follows a save at once. */
		function notifyPet() {
			try {
				if (typeof whaleRefreshConfig === "function") whaleRefreshConfig();
			} catch (e) { /* the pet may be gone: the value still reached the host */ }
		}

		/** Outcome of a write, shaped like the remote result or a boolean from a page form. */
		function configOutcome(res, tr) {
			if (res === true || (res && res.ok === true)) return { kind: "ok", text: tr("saved") };
			var code = res && res.error ? String(res.error.code || "") : "";
			return { kind: "error", text: code.indexOf("conflict") >= 0 ? tr("conflict") : tr("failed") };
		}

		/** Failure text for a rejected write (transport errors land here too). */
		function configFailure(err, tr) {
			var code = String((err && (err.code || err.message)) || err || "");
			return { kind: "error", text: code.indexOf("conflict") >= 0 ? tr("conflict") : tr("failed") };
		}

		/**
		 * The settings card. `props.form` is either the row page's
		 * `{ state, mutate(operations, revision) }` or the bundle page's
		 * equivalent face; without one the effective value is shown read-only
		 * with the YAML alternative.
		 */
		function WhaleConfigForm(props) {
			var tr = configTranslator(props.t);
			var form = props.form || null;
			var state = (form && form.state) || null;
			var revision = state ? state.revision : undefined;
			// Without a form there is nothing to write through: the switch is a
			// read-only view of the effective value.
			var writable = !!form && (!state || state.writable !== false);
			var incoming = configDraft(form ? state && state.value : props.values);
			var key = String(revision) + "|" + String(incoming.rightClickSwitch);
			var draftPair = react.useState(function () { return incoming; });
			var draft = draftPair[0], setDraft = draftPair[1];
			var statusPair = react.useState(null);
			var status = statusPair[0], setStatus = statusPair[1];
			var busyPair = react.useState(false);
			var busy = busyPair[0], setBusy = busyPair[1];
			var dirty = react.useRef(false);
			var lastKey = react.useRef(key);

			// A value that arrives (or changes) after the first render replaces the
			// draft, unless the editor already touched it: staged edits survive.
			react.useEffect(function () {
				if (lastKey.current === key) return;
				lastKey.current = key;
				if (dirty.current) return;
				setDraft(incoming);
			}, [key]);

			function submit(ops) {
				if (!form || busy || !writable) return;
				setBusy(true);
				setStatus(null);
				var result;
				try {
					result = form.mutate(ops, revision);
				} catch (e) {
					result = Promise.reject(e);
				}
				Promise.resolve(result).then(function (res) {
					setBusy(false);
					var outcome = configOutcome(res, tr);
					if (outcome.kind === "ok") {
						dirty.current = false;
						notifyPet();
					}
					setStatus(outcome);
				}, function (err) {
					setBusy(false);
					setStatus(configFailure(err, tr));
				});
			}

			var toggle = react.createElement("div", { key: "switch", style: CONFIG_STYLE.field },
				react.createElement("label", { style: CONFIG_STYLE.checkRow, htmlFor: "whale-cfg-switch" },
					react.createElement("input", {
						id: "whale-cfg-switch",
						type: "checkbox",
						checked: draft.rightClickSwitch === true,
						disabled: busy || !writable,
						onChange: function (e) {
							dirty.current = true;
							setDraft({ rightClickSwitch: e.target.checked === true });
						}
					}),
					react.createElement("span", { style: CONFIG_STYLE.label }, tr("rightClickSwitch")),
					react.createElement("span", { style: CONFIG_STYLE.hint },
						draft.rightClickSwitch ? tr("on") : tr("off"))
				),
				react.createElement("span", { style: CONFIG_STYLE.hint }, tr("rightClickSwitchHint"))
			);

			var actions = form ? react.createElement("div", { key: "actions", style: CONFIG_STYLE.row },
				react.createElement("button", {
					type: "button",
					style: CONFIG_STYLE.button,
					disabled: busy || !writable,
					onClick: function () { submit(configOps(draft)); }
				}, busy ? tr("saving") : tr("save")),
				react.createElement("button", {
					type: "button",
					style: CONFIG_STYLE.button,
					disabled: busy || !writable,
					onClick: function () { submit(CONFIG_RESET_OPS); }
				}, tr("reset"))
			) : null;

			var resultLine = status ? react.createElement("p", {
				key: "status",
				role: status.kind === "ok" ? "status" : "alert",
				style: status.kind === "ok" ? CONFIG_STYLE.ok : CONFIG_STYLE.err
			}, status.text) : null;

			var readOnlyNote = form && writable ? null : react.createElement("div", { key: "readonly" },
				react.createElement("p", { style: CONFIG_STYLE.hint },
					props.note ? tr(props.note) : tr("readOnly")),
				react.createElement("pre", { style: CONFIG_STYLE.code }, CONFIG_YAML)
			);

			return react.createElement("div", { style: CONFIG_STYLE.form, "data-whale-config": true },
				toggle,
				actions,
				resultLine,
				readOnlyNote
			);
		}

		/** A local observable face the bundle page renders: `{ getState, subscribe, start, mutate }`. */
		function configFaceState(note) {
			return { status: "loading", value: undefined, revision: undefined, writable: false, note: note || "" };
		}

		/** Listeners shared by every face. */
		function configFaceListeners() {
			var listeners = [];
			return {
				subscribe: function (cb) {
					listeners.push(cb);
					return function () {
						var i = listeners.indexOf(cb);
						if (i >= 0) listeners.splice(i, 1);
					};
				},
				emit: function () {
					for (var i = 0; i < listeners.length; i++) {
						try { listeners[i](); } catch (e) { /* one render must not stop the others */ }
					}
				}
			};
		}

		/** Face over the settings domain's shared form service (the official client mechanism). */
		function createConfigFormsFace(form) {
			var bus = configFaceListeners();
			var state = configFaceState();
			return {
				getState: function () {
					var snap = form.getSnapshot();
					if (snap.status === "unavailable") {
						state.status = "ready";
						state.writable = false;
						state.note = "unavailable";
						return state;
					}
					if (snap.status !== "ready") return state;
					state.status = "ready";
					state.value = snap.value;
					state.revision = snap.revision;
					state.writable = snap.writable !== false;
					state.note = "";
					return state;
				},
				subscribe: bus.subscribe,
				start: function () { /* the shared form loads itself */ },
				mutate: function (ops, revision) { return form.mutate(ops, revision); }
			};
		}

		/** Face over the raw `remote.settings` namespace, for clients without the form service. */
		function createRemoteSettingsFace(settings) {
			var bus = configFaceListeners();
			var state = configFaceState();
			var started = false;
			function adopt(view) {
				if (!view) return;
				state.status = "ready";
				state.value = view.value && typeof view.value === "object" ? view.value : {};
				state.revision = view.revision;
				state.writable = true;
				state.note = "";
				bus.emit();
			}
			return {
				getState: function () { return state; },
				subscribe: bus.subscribe,
				start: function () {
					if (started) return;
					started = true;
					Promise.resolve().then(function () {
						return settings.describe();
					}).then(function (res) {
						if (!res || res.ok !== true) {
							state.status = "ready";
							state.note = "unavailable";
							bus.emit();
							return;
						}
						var list = (res.value && res.value.namespaces) || [];
						var found = null;
						for (var i = 0; i < list.length; i++) {
							if (list[i] && list[i].ns === CONFIG_ROW_ID) found = list[i];
						}
						if (!found) {
							state.status = "ready";
							state.note = "unavailable";
							bus.emit();
							return;
						}
						state.status = "ready";
						state.value = found.value && typeof found.value === "object" ? found.value : {};
						state.revision = found.revision;
						state.writable = res.value.writable !== false;
						state.note = "";
						bus.emit();
					}, function () {
						state.status = "ready";
						state.note = "unavailable";
						bus.emit();
					});
				},
				mutate: function (ops, revision) {
					return settings.mutate(CONFIG_ROW_ID, ops, revision).then(function (res) {
						if (res && res.ok === true) adopt(res.value);
						return res;
					});
				}
			};
		}

		/** Face with no settings surface at all: the host's own config route, read-only. */
		function createReadOnlyFace() {
			var bus = configFaceListeners();
			var state = configFaceState("readOnly");
			var started = false;
			return {
				getState: function () { return state; },
				subscribe: bus.subscribe,
				start: function () {
					if (started) return;
					started = true;
					try {
						fetch("/whale/config", { signal: AbortSignal.timeout(5000) })
							.then(function (r) { return r.ok ? r.json() : null; })
							.then(function (cfg) {
								state.status = "ready";
								state.writable = false;
								state.value = { rightClickSwitch: !cfg || cfg.rightClickSwitch !== false };
								bus.emit();
							}, function () { state.status = "ready"; bus.emit(); });
					} catch (e) {
						state.status = "ready";
					}
				},
				mutate: null
			};
		}

		/** Prefer the shared form service, then the raw remote namespace, then a read-only view. */
		function resolveConfigFace() {
			try {
				if (configFormsService && typeof configFormsService.get === "function") {
					var form = configFormsService.get(CONFIG_ROW_ID);
					if (form && typeof form.getSnapshot === "function" && typeof form.mutate === "function") {
						return createConfigFormsFace(form);
					}
				}
			} catch (e) { /* fall through to the next surface */ }
			try {
				if (configRemoteSettings && typeof configRemoteSettings.describe === "function") {
					return createRemoteSettingsFace(configRemoteSettings);
				}
			} catch (e) { /* fall through to read-only */ }
			return createReadOnlyFace();
		}

		/**
		 * Self-resolving page: used for `plugins.bundle.config` (which is handed
		 * only `{ view: 'page' }`) and as the row page's fallback when the page
		 * passed no form.
		 */
		function WhaleSettingsPage(props) {
			var tr = configTranslator(props.t);
			var facePair = react.useState(resolveConfigFace);
			var face = facePair[0];
			var snapPair = react.useState(function () { return face.getState(); });
			var snapshot = snapPair[0], setSnapshot = snapPair[1];

			react.useEffect(function () {
				var notify = function () { setSnapshot(face.getState()); };
				var off = face.subscribe(notify);
				notify();
				try { face.start(); } catch (e) { /* a failed load keeps the read-only view */ }
				return function () { try { if (typeof off === "function") off(); } catch (e) {} };
			}, [face]);

			if (props.view === "summary") return tr("summary");
			if (snapshot.status === "loading") {
				return react.createElement("p", { style: CONFIG_STYLE.hint }, tr("loading"));
			}
			var form = face.mutate && snapshot.writable && snapshot.revision !== undefined
				? { state: snapshot, mutate: face.mutate }
				: null;
			return react.createElement(WhaleConfigForm, {
				t: props.t,
				form: form,
				values: snapshot.value,
				note: snapshot.note
			});
		}

		/** Row page: the page's own form when it supplied one, otherwise the self-resolving page. */
		function WhaleRowConfig(props) {
			if (props.view === "summary") return configTranslator(props.t)("summary");
			if (props.form) return react.createElement(WhaleConfigForm, { t: props.t, form: props.form });
			return react.createElement(WhaleSettingsPage, { view: props.view, t: props.t });
		}

		/** True while a fiber can still own effects; without a state axis the owner is assumed live. */
		function configFiberActive(fiber) {
			try {
				if (!fiber) return false;
				var state = fiber.state;
				if (state === undefined || state === null) return true;
				return state === 2 || state === "ACTIVE" || state === "active";
			} catch (e) { return false; }
		}

		/** Register both keys once the slots service exists (it may never exist: the pet still mounts). */
		function registerConfigPages(sctx, disposers) {
			var slots = null;
			try { slots = sctx.slots; } catch (e) { slots = null; }
			if (!slots || typeof slots.inject !== "function" || typeof slots.register !== "function") return;

			// The locale seat is declared only when our dictionary really
			// registered: the renderer treats a declared namespace without a locale
			// face as a load error, and a missing dictionary would render keys.
			// Strict read: only an ACTIVE locale service has installed the slots
			// locale face this registration's `locale` option needs.
			var locale = null;
			try {
				locale = sctx.reflect && typeof sctx.reflect.get === "function"
					? sctx.reflect.get("locale")
					: null;
			} catch (e) { locale = null; }
			var useLocale = false;
			if (locale && typeof locale.register === "function") {
				try {
					var offDict = locale.register(CONFIG_DICT_NS, { en: CONFIG_TEXT.en, zh: CONFIG_TEXT.zh });
					if (typeof offDict === "function") disposers.push(offDict);
					useLocale = true;
				} catch (e) { useLocale = false; }
			}

			var rowOptions = { name: "plugins.row.config", key: CONFIG_ROW_KEY };
			var bundleOptions = { name: "plugins.bundle.config", key: CONFIG_PACKAGE };
			if (useLocale) {
				rowOptions.locale = CONFIG_DICT_NS;
				bundleOptions.locale = CONFIG_DICT_NS;
			}

			try {
				disposers.push(slots.inject("plugins.row.config", function () {
					return slots.register(rowOptions, WhaleRowConfig);
				}));
			} catch (e) { /* the slot never appears: the row shows no Configure control */ }
			try {
				disposers.push(slots.inject("plugins.bundle.config", function () {
					return slots.register(bundleOptions, WhaleSettingsPage);
				}));
			} catch (e) { /* the slot never appears: the bundle page shows no section */ }
		}

		/**
		 * Register the settings pages. Called before the pet's mount guard, because
		 * that guard only suppresses a second pet after a reload — it must never
		 * suppress this instance's configuration pages.
		 */
		function registerConfigSlots(ctx) {
			if (!ctx) return;
			var fiber = null;
			try { fiber = ctx.fiber || null; } catch (e) { fiber = null; }
			// One registration per live instance: registering the same key twice
			// would fight over one keyed slot. The claim is released by the
			// disposer, so a reload can register again once the old fiber is gone.
			if (configSlotsDispose && configFiberActive(configSlotsOwner)) return;

			var reactModule = null;
			try { reactModule = require("react"); } catch (e) { reactModule = null; }
			if (!reactModule || typeof reactModule.createElement !== "function") return;
			react = reactModule;

			var disposers = [];
			// The Plugins page renders a bundle's "包含的组件" section
			// unconditionally; for a single-row bundle it only repeats the plugin's
			// own name under the configuration form. It cannot be removed through a
			// slot, so hide it on THIS package's page only, via the page's data
			// attributes, and only while the configuration page is registered.
			try {
				var pageStyle = document.createElement("style");
				pageStyle.id = "dsh-whale-page-style";
				pageStyle.textContent =
					'[data-plugin-detail="' + CONFIG_PACKAGE + '"] [data-plugin-rows]{display:none!important}';
				document.head.appendChild(pageStyle);
				disposers.push(function () {
					try { if (pageStyle.parentNode) pageStyle.parentNode.removeChild(pageStyle); } catch (e) {}
				});
			} catch (e) { /* no document (or no head): nothing to style */ }
			// Wait for `slots` instead of requiring it: a child fiber parked on a
			// service the deployment never provides leaves the pet untouched.
			try {
				disposers.push(ctx.inject(["slots"], function (sctx) {
					registerConfigPages(sctx, disposers);
				}));
			} catch (e) { /* no inject support: no settings pages */ }
			// Optional surfaces: captured when (and if) they appear.
			try {
				disposers.push(ctx.inject(["configForms"], function (c) {
					configFormsService = c.configForms;
				}));
			} catch (e) { /* no shared form service */ }
			try {
				disposers.push(ctx.inject(["remote", "remote.settings"], function (c) {
					try { configRemoteSettings = c.remote.settings; } catch (e) { configRemoteSettings = null; }
				}));
			} catch (e) { /* no remote settings namespace */ }

			var disposed = false;
			var dispose = function () {
				if (disposed) return;
				disposed = true;
				for (var i = disposers.length - 1; i >= 0; i--) {
					try { disposers[i](); } catch (e) { /* already gone */ }
				}
				disposers.length = 0;
				configFormsService = null;
				configRemoteSettings = null;
				if (configSlotsDispose === dispose) {
					configSlotsOwner = null;
					configSlotsDispose = null;
				}
			};
			configSlotsOwner = fiber;
			configSlotsDispose = dispose;
			try {
				if (typeof ctx.effect === "function") {
					ctx.effect(function () { return dispose; }, "whale: settings pages");
				}
			} catch (e) { /* the registration still lives with the injected children */ }
		}
		//#endregion

		//#region lib/types/client/index.js
		/** Client plugin body: mount the whale companion, right-click cycles species. */
		function apply(ctx) {
			// Settings pages first, and independently of the pet: the mount guard
			// below exists to avoid a second whale after a reload, and skipping this
			// call there would drop the reloaded instance's configuration pages.
			// A failure here is contained — the pet must mount regardless.
			try { registerConfigSlots(ctx); } catch (e) {}

			if (typeof document === "undefined") return;
			if (document.querySelector(".dsh-whale")) return;
			// Disposal state: the whale must disappear when the plugin is
			// disabled/uninstalled (or HMR-reloaded). Without a registered
			// teardown the pet outlived its fiber, so turning this plugin off
			// left the whale on screen — which also made the confirmo/whale3
			// toggles look like they controlled each other.
			var tornDown = false;
			var style = document.createElement("style");
			style.id = "dsh-whale-style";   // removed again on dispose
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
			// Right-click cycles species. The host row config can turn this off
			// (`rightClickSwitch: false`); the effective value arrives over
			// /whale/config, and until it does the default (on) applies. When it
			// is off we leave the event alone so the browser menu still works.
			//
			// The read is repeatable: the settings pages call the exposed
			// whaleRefreshConfig() after a successful save, so a change made while
			// the pet is mounted takes effect at once.
			var rightClickSwitch = true;
			function refreshConfig() {
				try {
					return fetch("/whale/config", { signal: AbortSignal.timeout(5000) })
						.then(function (r) { return r.ok ? r.json() : null; })
						.then(function (c) { if (c && typeof c.rightClickSwitch === "boolean") rightClickSwitch = c.rightClickSwitch; })
						.catch(function () {});
				} catch (e) { return Promise.resolve(); }
			}
			whaleRefreshConfig = refreshConfig;
			refreshConfig();
			whale.addEventListener("contextmenu", function (e) {
				if (!rightClickSwitch) return;
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

			// ---- dispose ----------------------------------------------------
			// The whale is pure CSS animation and every pointer listener lives on
			// the node itself, so removing the node + stylesheet releases
			// everything. Registered through ctx.effect so cordis runs it when
			// this plugin is disabled or reloaded.
			function teardown() {
				if (tornDown) return;
				tornDown = true;
				try { if (whale.parentNode) whale.parentNode.removeChild(whale); } catch (e) {}
				try { if (style.parentNode) style.parentNode.removeChild(style); } catch (e) {}
				// drop the settings pages' handle into this unmounted instance
				if (whaleRefreshConfig === refreshConfig) whaleRefreshConfig = null;
			}
			try {
				if (ctx && typeof ctx.effect === "function") {
					ctx.effect(function () { return teardown; }, "whale3: desktop pet");
				} else if (ctx && typeof ctx.on === "function") {
					ctx.on("dispose", teardown);
				}
			} catch (e) {}
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});
