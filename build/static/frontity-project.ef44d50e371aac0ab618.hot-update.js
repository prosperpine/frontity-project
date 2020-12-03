webpackHotUpdate("frontity-project",{

/***/ "./node_modules/@frontity/components/link/index.tsx":
/*!**********************************************************!*\
  !*** ./node_modules/@frontity/components/link/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_hooks_use_in_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/hooks/use-in-view */ \"./node_modules/@frontity/hooks/use-in-view.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./node_modules/@frontity/components/link/utils.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var queue=new _utils__WEBPACK_IMPORTED_MODULE_3__[\"Queue\"]();/**\n * The Link component that enables linking to internal pages in a frontity app.\n *\n * Under the hood, this component uses the `actions.router.set(link)` method\n * from `@frontity/tiny-router` and creates an `<a/>` tag.\n *\n * All \"unknown\" props passed to the Link are passed down to an anchor `</a>`\n * tag.\n *\n * @example\n * ```js\n * <Link link=\"/some-post\">\n *   <div>Some Post</div>\n * </Link>\n * ```\n *\n * @param props - Defined by {@link LinkProps}.\n *\n * @returns An HTML anchor element.\n */var Link=(_ref)=>{var _state$theme;var{link:rawLink,children,onClick,target=\"_self\",scroll=true,prefetch=true,replaceSourceUrls=true,\"aria-current\":ariaCurrent}=_ref,anchorProps=_objectWithoutProperties(_ref,[\"link\",\"children\",\"onClick\",\"target\",\"scroll\",\"prefetch\",\"replaceSourceUrls\",\"aria-current\"]);var{state,actions}=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"useConnect\"])();var{ref:inViewRef,inView}=Object(_frontity_hooks_use_in_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({triggerOnce:true,rootMargin:\"200px\"});var ref=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);// we need to handle multiple refs, one for useInView and one for tracking the hover events.\nvar setRefs=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(node=>{ref.current=node;if(typeof inViewRef===\"function\"){inViewRef(node);}},[inViewRef]);if(!rawLink||typeof rawLink!==\"string\"){Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"warn\"])(\"link prop is required and must be a string\");}var link=replaceSourceUrls?Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"removeSourceUrl\"])(rawLink,state.source.url):rawLink;var autoPrefetch=(_state$theme=state.theme)===null||_state$theme===void 0?void 0:_state$theme.autoPrefetch;var isExternal=link.startsWith(\"http\");Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{var _navigator$connection,_navigator$connection2;/**\n     * Checks if user is on slow connection or has enabled data saver.\n     */var _navigator=window.navigator;var isSlowConnection=(_navigator===null||_navigator===void 0?void 0:(_navigator$connection=_navigator.connection)===null||_navigator$connection===void 0?void 0:_navigator$connection.saveData)||((_navigator===null||_navigator===void 0?void 0:(_navigator$connection2=_navigator.connection)===null||_navigator$connection2===void 0?void 0:_navigator$connection2.effectiveType)||\"\").includes(\"2g\");if(!prefetch||!link||isSlowConnection||isExternal){return;}/**\n     * Prefetches the link only if necessary.\n     *\n     * @param link - The link to prefetch.\n     * @param runNow - Whether the prefetch should be executed immediately.\n     */var maybePrefetch=function maybePrefetch(link){var runNow=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(queue.toPrefetch.has(link)){return;}var data=state.source.get(link);if(data.isReady||data.isFetching){return;}// when prefetch mode is \"hover\" we want to prefetch without batching.\nif(runNow){actions.source.fetch(link);}else{queue.toPrefetch.add(link);}// if the queue is still running this link will be picked up automatically.\nif(!queue.isProcessing){queue.process(actions.source.fetch);queue.isProcessing=true;}};if(autoPrefetch===\"all\"){maybePrefetch(link);}else if(ref.current&&autoPrefetch===\"hover\"){return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"onHover\"])(ref.current,()=>{maybePrefetch(link,true);});}else if(inView&&autoPrefetch===\"in-view\"){maybePrefetch(link);}},[prefetch,link,ref,inView,autoPrefetch,actions.source,isExternal,state.source]);/**\n   * The event handler for the click event. It will try to do client-side\n   * rendering but bail out in certain situations, like when the link is\n   * external or the user is trying to open a new tab.\n   *\n   * @param event - The mouse click event.\n   */var onClickHandler=event=>{// Do nothing if it's an external link\nif(isExternal)return;// Do nothing if this is supposed to open in a new tab\nif(target===\"_blank\")return;// Allow the user to open the link in a new tab\nif(event.ctrlKey||event.shiftKey||event.metaKey||event.button&&event.button===1){return;}// Prevent the server-side rendering.\nevent.preventDefault();// Set the router to the new url.\nactions.router.set(link);// Scroll the page to the top\nif(scroll){window.scrollTo(0,0);document.body.focus();}// If there's an additional handler, execute it.\nif(typeof onClick===\"function\"){onClick(event);}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",_extends({href:link,target:target,onClick:onClickHandler,\"aria-current\":ariaCurrent},anchorProps,{ref:setRefs}),children);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Link,{injectProps:false}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L2NvbXBvbmVudHMvbGluay9pbmRleC50c3g/YmExZiJdLCJuYW1lcyI6WyJxdWV1ZSIsIlF1ZXVlIiwiTGluayIsImxpbmsiLCJyYXdMaW5rIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwidGFyZ2V0Iiwic2Nyb2xsIiwicHJlZmV0Y2giLCJyZXBsYWNlU291cmNlVXJscyIsImFyaWFDdXJyZW50IiwiYW5jaG9yUHJvcHMiLCJzdGF0ZSIsImFjdGlvbnMiLCJ1c2VDb25uZWN0IiwicmVmIiwiaW5WaWV3UmVmIiwiaW5WaWV3IiwidXNlSW5WaWV3IiwidHJpZ2dlck9uY2UiLCJyb290TWFyZ2luIiwidXNlUmVmIiwic2V0UmVmcyIsInVzZUNhbGxiYWNrIiwibm9kZSIsImN1cnJlbnQiLCJ3YXJuIiwicmVtb3ZlU291cmNlVXJsIiwic291cmNlIiwidXJsIiwiYXV0b1ByZWZldGNoIiwidGhlbWUiLCJpc0V4dGVybmFsIiwic3RhcnRzV2l0aCIsInVzZUVmZmVjdCIsIl9uYXZpZ2F0b3IiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJpc1Nsb3dDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsImluY2x1ZGVzIiwibWF5YmVQcmVmZXRjaCIsInJ1bk5vdyIsInRvUHJlZmV0Y2giLCJoYXMiLCJkYXRhIiwiZ2V0IiwiaXNSZWFkeSIsImlzRmV0Y2hpbmciLCJmZXRjaCIsImFkZCIsImlzUHJvY2Vzc2luZyIsInByb2Nlc3MiLCJvbkhvdmVyIiwib25DbGlja0hhbmRsZXIiLCJldmVudCIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInNldCIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJjb25uZWN0IiwiaW5qZWN0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUNFbUQsS0FBSyxDQUFDQyxPQUFOLEVBQ0FELEtBQUssQ0FBQ0UsUUFETixFQUVBRixLQUFLLENBQUNHLE9BRk4sRUFHQ0gsS0FBSyxDQUFDSSxNQUFOLEVBQWdCSixLQUFLLENBQUNJLE1BQU4sR0FBaUIsQ0FKcEMsQ0FLRSxDQUNBLE9BQ0QsQ0FFRDtBQUNBSixLQUFLLENBQUNLLGNBQU4sR0FFQTtBQUNBakQsT0FBTyxDQUFDa0QsTUFBUixDQUFlQyxHQUFmLENBQW1COUQsSUFBbkIsRUFFQTtBQUNBLEdBQUlLLE1BQUosQ0FBWSxDQUNWNkIsTUFBTSxDQUFDNkIsUUFBUCxDQUFnQixDQUFoQixDQUFtQixDQUFuQixFQUNBQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxHQUNELENBRUQ7QUFDQSxHQUFJLE1BQU8vRCxRQUFQLEdBQW1CLFVBQXZCLENBQW1DLENBQ2pDQSxPQUFPLENBQUNvRCxLQUFELENBQVAsQ0FDRCxDQUNGLENBakNELENBbUNBLE1BQ0UseUVBQ0UsSUFBSSxDQUFFdkQsSUFEUixDQUVFLE1BQU0sQ0FBRUksTUFGVixDQUdFLE9BQU8sQ0FBRWtELGNBSFgsQ0FJRSxlQUFjOUMsV0FKaEIsRUFLTUMsV0FMTixFQU1FLEdBQUcsQ0FBRVcsT0FOUCxHQVFHbEIsUUFSSCxDQURGLENBWUQsQ0EvSkQsQ0FpS2VpRSx1SEFBTyxDQUFDcEUsSUFBRCxDQUFPLENBQUVxRSxXQUFXLENBQUUsS0FBZixDQUFQLENBQXRCIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2FybiwgY29ubmVjdCwgdXNlQ29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwiQGZyb250aXR5L2hvb2tzL3VzZS1pbi12aWV3XCI7XG5pbXBvcnQgeyBRdWV1ZSwgb25Ib3ZlciwgcmVtb3ZlU291cmNlVXJsIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IFBhY2thZ2VzLCBMaW5rUHJvcHMsIE5hdmlnYXRvcldpdGhDb25uZWN0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3QgcXVldWUgPSBuZXcgUXVldWUoKTtcblxuLyoqXG4gKiBUaGUgTGluayBjb21wb25lbnQgdGhhdCBlbmFibGVzIGxpbmtpbmcgdG8gaW50ZXJuYWwgcGFnZXMgaW4gYSBmcm9udGl0eSBhcHAuXG4gKlxuICogVW5kZXIgdGhlIGhvb2QsIHRoaXMgY29tcG9uZW50IHVzZXMgdGhlIGBhY3Rpb25zLnJvdXRlci5zZXQobGluaylgIG1ldGhvZFxuICogZnJvbSBgQGZyb250aXR5L3Rpbnktcm91dGVyYCBhbmQgY3JlYXRlcyBhbiBgPGEvPmAgdGFnLlxuICpcbiAqIEFsbCBcInVua25vd25cIiBwcm9wcyBwYXNzZWQgdG8gdGhlIExpbmsgYXJlIHBhc3NlZCBkb3duIHRvIGFuIGFuY2hvciBgPC9hPmBcbiAqIHRhZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIDxMaW5rIGxpbms9XCIvc29tZS1wb3N0XCI+XG4gKiAgIDxkaXY+U29tZSBQb3N0PC9kaXY+XG4gKiA8L0xpbms+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBEZWZpbmVkIGJ5IHtAbGluayBMaW5rUHJvcHN9LlxuICpcbiAqIEByZXR1cm5zIEFuIEhUTUwgYW5jaG9yIGVsZW1lbnQuXG4gKi9cbmNvbnN0IExpbms6IFJlYWN0LkZDPExpbmtQcm9wcz4gPSAoe1xuICBsaW5rOiByYXdMaW5rLFxuICBjaGlsZHJlbixcbiAgb25DbGljayxcbiAgdGFyZ2V0ID0gXCJfc2VsZlwiLFxuICBzY3JvbGwgPSB0cnVlLFxuICBwcmVmZXRjaCA9IHRydWUsXG4gIHJlcGxhY2VTb3VyY2VVcmxzID0gdHJ1ZSxcbiAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnQsXG4gIC4uLmFuY2hvclByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHVzZUNvbm5lY3Q8UGFja2FnZXM+KCk7XG4gIGNvbnN0IHsgcmVmOiBpblZpZXdSZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICB0cmlnZ2VyT25jZTogdHJ1ZSxcbiAgICByb290TWFyZ2luOiBcIjIwMHB4XCIsXG4gIH0pO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgLy8gd2UgbmVlZCB0byBoYW5kbGUgbXVsdGlwbGUgcmVmcywgb25lIGZvciB1c2VJblZpZXcgYW5kIG9uZSBmb3IgdHJhY2tpbmcgdGhlIGhvdmVyIGV2ZW50cy5cbiAgY29uc3Qgc2V0UmVmcyA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlKSA9PiB7XG4gICAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBpZiAodHlwZW9mIGluVmlld1JlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGluVmlld1JlZihub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpblZpZXdSZWZdXG4gICk7XG5cbiAgaWYgKCFyYXdMaW5rIHx8IHR5cGVvZiByYXdMaW5rICE9PSBcInN0cmluZ1wiKSB7XG4gICAgd2FybihcImxpbmsgcHJvcCBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgfVxuXG4gIGNvbnN0IGxpbmsgPSByZXBsYWNlU291cmNlVXJsc1xuICAgID8gcmVtb3ZlU291cmNlVXJsKHJhd0xpbmssIHN0YXRlLnNvdXJjZS51cmwpXG4gICAgOiByYXdMaW5rO1xuXG4gIGNvbnN0IGF1dG9QcmVmZXRjaCA9IHN0YXRlLnRoZW1lPy5hdXRvUHJlZmV0Y2g7XG4gIGNvbnN0IGlzRXh0ZXJuYWwgPSBsaW5rLnN0YXJ0c1dpdGgoXCJodHRwXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHVzZXIgaXMgb24gc2xvdyBjb25uZWN0aW9uIG9yIGhhcyBlbmFibGVkIGRhdGEgc2F2ZXIuXG4gICAgICovXG4gICAgY29uc3QgX25hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3IgYXMgTmF2aWdhdG9yV2l0aENvbm5lY3Rpb247XG5cbiAgICBjb25zdCBpc1Nsb3dDb25uZWN0aW9uID1cbiAgICAgIF9uYXZpZ2F0b3I/LmNvbm5lY3Rpb24/LnNhdmVEYXRhIHx8XG4gICAgICAoX25hdmlnYXRvcj8uY29ubmVjdGlvbj8uZWZmZWN0aXZlVHlwZSB8fCBcIlwiKS5pbmNsdWRlcyhcIjJnXCIpO1xuXG4gICAgaWYgKCFwcmVmZXRjaCB8fCAhbGluayB8fCBpc1Nsb3dDb25uZWN0aW9uIHx8IGlzRXh0ZXJuYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaGVzIHRoZSBsaW5rIG9ubHkgaWYgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIGxpbmsgLSBUaGUgbGluayB0byBwcmVmZXRjaC5cbiAgICAgKiBAcGFyYW0gcnVuTm93IC0gV2hldGhlciB0aGUgcHJlZmV0Y2ggc2hvdWxkIGJlIGV4ZWN1dGVkIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGNvbnN0IG1heWJlUHJlZmV0Y2ggPSAobGluazogc3RyaW5nLCBydW5Ob3cgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKHF1ZXVlLnRvUHJlZmV0Y2guaGFzKGxpbmspKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQobGluayk7XG5cbiAgICAgIGlmIChkYXRhLmlzUmVhZHkgfHwgZGF0YS5pc0ZldGNoaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2hlbiBwcmVmZXRjaCBtb2RlIGlzIFwiaG92ZXJcIiB3ZSB3YW50IHRvIHByZWZldGNoIHdpdGhvdXQgYmF0Y2hpbmcuXG4gICAgICBpZiAocnVuTm93KSB7XG4gICAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKGxpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUudG9QcmVmZXRjaC5hZGQobGluayk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHRoZSBxdWV1ZSBpcyBzdGlsbCBydW5uaW5nIHRoaXMgbGluayB3aWxsIGJlIHBpY2tlZCB1cCBhdXRvbWF0aWNhbGx5LlxuICAgICAgaWYgKCFxdWV1ZS5pc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgcXVldWUucHJvY2VzcyhhY3Rpb25zLnNvdXJjZS5mZXRjaCk7XG4gICAgICAgIHF1ZXVlLmlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChhdXRvUHJlZmV0Y2ggPT09IFwiYWxsXCIpIHtcbiAgICAgIG1heWJlUHJlZmV0Y2gobGluayk7XG4gICAgfSBlbHNlIGlmIChyZWYuY3VycmVudCAmJiBhdXRvUHJlZmV0Y2ggPT09IFwiaG92ZXJcIikge1xuICAgICAgcmV0dXJuIG9uSG92ZXIocmVmLmN1cnJlbnQsICgpID0+IHtcbiAgICAgICAgbWF5YmVQcmVmZXRjaChsaW5rLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaW5WaWV3ICYmIGF1dG9QcmVmZXRjaCA9PT0gXCJpbi12aWV3XCIpIHtcbiAgICAgIG1heWJlUHJlZmV0Y2gobGluayk7XG4gICAgfVxuICB9LCBbXG4gICAgcHJlZmV0Y2gsXG4gICAgbGluayxcbiAgICByZWYsXG4gICAgaW5WaWV3LFxuICAgIGF1dG9QcmVmZXRjaCxcbiAgICBhY3Rpb25zLnNvdXJjZSxcbiAgICBpc0V4dGVybmFsLFxuICAgIHN0YXRlLnNvdXJjZSxcbiAgXSk7XG5cbiAgLyoqXG4gICAqIFRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgY2xpY2sgZXZlbnQuIEl0IHdpbGwgdHJ5IHRvIGRvIGNsaWVudC1zaWRlXG4gICAqIHJlbmRlcmluZyBidXQgYmFpbCBvdXQgaW4gY2VydGFpbiBzaXR1YXRpb25zLCBsaWtlIHdoZW4gdGhlIGxpbmsgaXNcbiAgICogZXh0ZXJuYWwgb3IgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIG9wZW4gYSBuZXcgdGFiLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgbW91c2UgY2xpY2sgZXZlbnQuXG4gICAqL1xuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChldmVudDogTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pID0+IHtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW4gZXh0ZXJuYWwgbGlua1xuICAgIGlmIChpc0V4dGVybmFsKSByZXR1cm47XG5cbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoaXMgaXMgc3VwcG9zZWQgdG8gb3BlbiBpbiBhIG5ldyB0YWJcbiAgICBpZiAodGFyZ2V0ID09PSBcIl9ibGFua1wiKSByZXR1cm47XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBvcGVuIHRoZSBsaW5rIGluIGEgbmV3IHRhYlxuICAgIGlmIChcbiAgICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgICAoZXZlbnQuYnV0dG9uICYmIGV2ZW50LmJ1dHRvbiA9PT0gMSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHRoZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFNldCB0aGUgcm91dGVyIHRvIHRoZSBuZXcgdXJsLlxuICAgIGFjdGlvbnMucm91dGVyLnNldChsaW5rKTtcblxuICAgIC8vIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgdG9wXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYWRkaXRpb25hbCBoYW5kbGVyLCBleGVjdXRlIGl0LlxuICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgaHJlZj17bGlua31cbiAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4gICAgICBhcmlhLWN1cnJlbnQ9e2FyaWFDdXJyZW50fVxuICAgICAgey4uLmFuY2hvclByb3BzfVxuICAgICAgcmVmPXtzZXRSZWZzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpbmssIHsgaW5qZWN0UHJvcHM6IGZhbHNlIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@frontity/components/link/index.tsx\n");

/***/ }),

/***/ "./node_modules/@frontity/components/link/utils.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@frontity/components/link/utils.ts ***!
  \*********************************************************/
/*! exports provided: config, Queue, onHover, removeSourceUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return Queue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onHover\", function() { return onHover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeSourceUrl\", function() { return removeSourceUrl; });\nfunction _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}/**\n * Configuration for the prefetcher behaviour.\n */var config={/**\n   * The number of miliseconds to wait until the hover triggers the prefetch.\n   *\n   * We can avoid prefetching when the mouse is moving quickly through a menu,\n   * without pausing in a specific link.\n   */hoverDelay:50,/**\n   * The number of requests per batch.\n   *\n   * We can avoid doing too many requests at the same time.\n   */requestsPerBatch:4,/**\n   * Interval of time to wait between processing each batch.\n   */batchInterval:1000};/**\n * Controls the processing queue of the links.\n */class Queue{constructor(){_defineProperty(this,\"isProcessing\",false);_defineProperty(this,\"toPrefetch\",new Set());}/**\n   * Process the queue of links to prefetch.\n   *\n   * @param prefetcher - The function used to prefetch the link.\n   */process(prefetcher){var batchInterval=null;/**\n     * Process a batch of prefetches.\n     */var process=()=>{var batch=Array.from(this.toPrefetch).slice(0,config.requestsPerBatch);// if batch is empty, stop process and allow it to run again if necessary.\nif(batch.length===0){this.isProcessing=false;clearTimeout(batchInterval);return;}batch.forEach(link=>{prefetcher(link);this.toPrefetch.delete(link);});};batchInterval=setInterval(()=>{process();},config.batchInterval);}}/**\n * Executes the callback when the hover event is triggered for the element.\n *\n * @param el - The element to watch for hover events.\n * @param cb - The callback that should run should an hover event happen.\n *\n * @returns A callback that removes the event listeners.\n */var onHover=(el,cb)=>{var timeout=null;/**\n   * When the mouse is moved over the element, it delays the call of the\n   * callback for a number of miliseconds, as configured in\n   * `config.hoverDelay`.\n   */var mouseOverHandler=()=>{timeout=setTimeout(()=>{cb();},config.hoverDelay);};/**\n   * Removes the timeout to avoid executing the callback if the cursor is\n   * moved out of the element before `config.hoverDelay`.\n   */var mouseOutHandler=()=>{clearTimeout(timeout);};el.addEventListener(\"mouseover\",mouseOverHandler);el.addEventListener(\"mouseout\",mouseOutHandler);return()=>{el.removeEventListener(\"mouseover\",mouseOverHandler);el.removeEventListener(\"mouseout\",mouseOutHandler);};};/**\n * Make the link relative if it belongs to the backend, to force client-side\n * navigation.\n *\n * @param link - The link URL.\n * @param sourceUrl - The Source URL. It usually comes from `state.source.url`.\n *\n * @returns The URL without the Source URL.\n */var removeSourceUrl=(link,sourceUrl)=>{var linkUrl=new URL(link,sourceUrl);return linkUrl.hostname===new URL(sourceUrl).hostname?linkUrl.pathname+linkUrl.search+linkUrl.hash:link;};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L2NvbXBvbmVudHMvbGluay91dGlscy50cz9iZThhIl0sIm5hbWVzIjpbImNvbmZpZyIsImhvdmVyRGVsYXkiLCJyZXF1ZXN0c1BlckJhdGNoIiwiYmF0Y2hJbnRlcnZhbCIsIlF1ZXVlIiwiU2V0IiwicHJvY2VzcyIsInByZWZldGNoZXIiLCJiYXRjaCIsIkFycmF5IiwiZnJvbSIsInRvUHJlZmV0Y2giLCJzbGljZSIsImxlbmd0aCIsImlzUHJvY2Vzc2luZyIsImNsZWFyVGltZW91dCIsImZvckVhY2giLCJsaW5rIiwiZGVsZXRlIiwic2V0SW50ZXJ2YWwiLCJvbkhvdmVyIiwiZWwiLCJjYiIsInRpbWVvdXQiLCJtb3VzZU92ZXJIYW5kbGVyIiwic2V0VGltZW91dCIsIm1vdXNlT3V0SGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlU291cmNlVXJsIiwic291cmNlVXJsIiwibGlua1VybCIsIlVSTCIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIl0sIm1hcHBpbmdzIjoiOzs7OztzTEFBQTtBQUNBO0FBQ0EsR0FDTyxHQUFNQSxPQUFNLENBQUcsQ0FDcEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0VDLFVBQVUsQ0FBRSxFQVBRLENBU3BCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FDRUMsZ0JBQWdCLENBQUUsQ0FkRSxDQWdCcEI7QUFDRjtBQUNBLEtBQ0VDLGFBQWEsQ0FBRSxJQW5CSyxDQUFmLENBc0JQO0FBQ0E7QUFDQSxHQUNPLEtBQU1DLE1BQU0sbURBSUYsS0FKRSxvQ0FTSixHQUFJQyxJQUFKLEVBVEksR0FXakI7QUFDRjtBQUNBO0FBQ0E7QUFDQSxLQUNFQyxPQUFPLENBQUNDLFVBQUQsQ0FBcUMsQ0FDMUMsR0FBSUosY0FBNkMsQ0FBRyxJQUFwRCxDQUVBO0FBQ0o7QUFDQSxPQUNJLEdBQU1HLFFBQU8sQ0FBRyxJQUFNLENBQ3BCLEdBQU1FLE1BQUssQ0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0MsVUFBaEIsRUFBNEJDLEtBQTVCLENBQ1osQ0FEWSxDQUVaWixNQUFNLENBQUNFLGdCQUZLLENBQWQsQ0FLQTtBQUNBLEdBQUlNLEtBQUssQ0FBQ0ssTUFBTixHQUFpQixDQUFyQixDQUF3QixDQUN0QixLQUFLQyxZQUFMLENBQW9CLEtBQXBCLENBQ0FDLFlBQVksQ0FBQ1osYUFBRCxDQUFaLENBQ0EsT0FDRCxDQUVESyxLQUFLLENBQUNRLE9BQU4sQ0FBZUMsSUFBRCxFQUFVLENBQ3RCVixVQUFVLENBQUNVLElBQUQsQ0FBVixDQUNBLEtBQUtOLFVBQUwsQ0FBZ0JPLE1BQWhCLENBQXVCRCxJQUF2QixFQUNELENBSEQsRUFJRCxDQWpCRCxDQW1CQWQsYUFBYSxDQUFHZ0IsV0FBVyxDQUFDLElBQU0sQ0FDaENiLE9BQU8sR0FDUixDQUYwQixDQUV4Qk4sTUFBTSxDQUFDRyxhQUZpQixDQUEzQixDQUdELENBNUNnQixDQStDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNPLEdBQU1pQixRQUFPLENBQUcsQ0FBQ0MsRUFBRCxDQUF3QkMsRUFBeEIsR0FBMkMsQ0FDaEUsR0FBSUMsUUFBc0MsQ0FBRyxJQUE3QyxDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FDRSxHQUFNQyxpQkFBZ0IsQ0FBRyxJQUFNLENBQzdCRCxPQUFPLENBQUdFLFVBQVUsQ0FBQyxJQUFNLENBQ3pCSCxFQUFFLEdBQ0gsQ0FGbUIsQ0FFakJ0QixNQUFNLENBQUNDLFVBRlUsQ0FBcEIsQ0FHRCxDQUpELENBTUE7QUFDRjtBQUNBO0FBQ0EsS0FDRSxHQUFNeUIsZ0JBQWUsQ0FBRyxJQUFNLENBQzVCWCxZQUFZLENBQUNRLE9BQUQsQ0FBWixDQUNELENBRkQsQ0FJQUYsRUFBRSxDQUFDTSxnQkFBSCxDQUFvQixXQUFwQixDQUFpQ0gsZ0JBQWpDLEVBQ0FILEVBQUUsQ0FBQ00sZ0JBQUgsQ0FBb0IsVUFBcEIsQ0FBZ0NELGVBQWhDLEVBRUEsTUFBTyxJQUFNLENBQ1hMLEVBQUUsQ0FBQ08sbUJBQUgsQ0FBdUIsV0FBdkIsQ0FBb0NKLGdCQUFwQyxFQUNBSCxFQUFFLENBQUNPLG1CQUFILENBQXVCLFVBQXZCLENBQW1DRixlQUFuQyxFQUNELENBSEQsQ0FJRCxDQTdCTSxDQStCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDTyxHQUFNRyxnQkFBZSxDQUFHLENBQUNaLElBQUQsQ0FBZWEsU0FBZixHQUFxQyxDQUNsRSxHQUFNQyxRQUFPLENBQUcsR0FBSUMsSUFBSixDQUFRZixJQUFSLENBQWNhLFNBQWQsQ0FBaEIsQ0FDQSxNQUFPQyxRQUFPLENBQUNFLFFBQVIsR0FBcUIsR0FBSUQsSUFBSixDQUFRRixTQUFSLEVBQW1CRyxRQUF4QyxDQUNIRixPQUFPLENBQUNHLFFBQVIsQ0FBbUJILE9BQU8sQ0FBQ0ksTUFBM0IsQ0FBb0NKLE9BQU8sQ0FBQ0ssSUFEekMsQ0FFSG5CLElBRkosQ0FHRCxDQUxNIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsvdXRpbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcmVmZXRjaGVyIGJlaGF2aW91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsaXNlY29uZHMgdG8gd2FpdCB1bnRpbCB0aGUgaG92ZXIgdHJpZ2dlcnMgdGhlIHByZWZldGNoLlxuICAgKlxuICAgKiBXZSBjYW4gYXZvaWQgcHJlZmV0Y2hpbmcgd2hlbiB0aGUgbW91c2UgaXMgbW92aW5nIHF1aWNrbHkgdGhyb3VnaCBhIG1lbnUsXG4gICAqIHdpdGhvdXQgcGF1c2luZyBpbiBhIHNwZWNpZmljIGxpbmsuXG4gICAqL1xuICBob3ZlckRlbGF5OiA1MCxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiByZXF1ZXN0cyBwZXIgYmF0Y2guXG4gICAqXG4gICAqIFdlIGNhbiBhdm9pZCBkb2luZyB0b28gbWFueSByZXF1ZXN0cyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgcmVxdWVzdHNQZXJCYXRjaDogNCxcblxuICAvKipcbiAgICogSW50ZXJ2YWwgb2YgdGltZSB0byB3YWl0IGJldHdlZW4gcHJvY2Vzc2luZyBlYWNoIGJhdGNoLlxuICAgKi9cbiAgYmF0Y2hJbnRlcnZhbDogMTAwMCxcbn07XG5cbi8qKlxuICogQ29udHJvbHMgdGhlIHByb2Nlc3NpbmcgcXVldWUgb2YgdGhlIGxpbmtzLlxuICovXG5leHBvcnQgY2xhc3MgUXVldWUge1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHF1ZXVlIGlzIHByb2Nlc3Npbmcgb3Igbm90LlxuICAgKi9cbiAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgYFNldGAgdG8gc3RvcmUgdGhlIGxpbmtzIHRoYXQgbmVlZCB0byBiZSBwcmVmZXRjaGVkLlxuICAgKi9cbiAgdG9QcmVmZXRjaCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRoZSBxdWV1ZSBvZiBsaW5rcyB0byBwcmVmZXRjaC5cbiAgICpcbiAgICogQHBhcmFtIHByZWZldGNoZXIgLSBUaGUgZnVuY3Rpb24gdXNlZCB0byBwcmVmZXRjaCB0aGUgbGluay5cbiAgICovXG4gIHByb2Nlc3MocHJlZmV0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gdm9pZCkge1xuICAgIGxldCBiYXRjaEludGVydmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhIGJhdGNoIG9mIHByZWZldGNoZXMuXG4gICAgICovXG4gICAgY29uc3QgcHJvY2VzcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGJhdGNoID0gQXJyYXkuZnJvbSh0aGlzLnRvUHJlZmV0Y2gpLnNsaWNlKFxuICAgICAgICAwLFxuICAgICAgICBjb25maWcucmVxdWVzdHNQZXJCYXRjaFxuICAgICAgKTtcblxuICAgICAgLy8gaWYgYmF0Y2ggaXMgZW1wdHksIHN0b3AgcHJvY2VzcyBhbmQgYWxsb3cgaXQgdG8gcnVuIGFnYWluIGlmIG5lY2Vzc2FyeS5cbiAgICAgIGlmIChiYXRjaC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGJhdGNoSW50ZXJ2YWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJhdGNoLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgcHJlZmV0Y2hlcihsaW5rKTtcbiAgICAgICAgdGhpcy50b1ByZWZldGNoLmRlbGV0ZShsaW5rKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBiYXRjaEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcHJvY2VzcygpO1xuICAgIH0sIGNvbmZpZy5iYXRjaEludGVydmFsKTtcbiAgfVxufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBob3ZlciBldmVudCBpcyB0cmlnZ2VyZWQgZm9yIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBlbCAtIFRoZSBlbGVtZW50IHRvIHdhdGNoIGZvciBob3ZlciBldmVudHMuXG4gKiBAcGFyYW0gY2IgLSBUaGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgcnVuIHNob3VsZCBhbiBob3ZlciBldmVudCBoYXBwZW4uXG4gKlxuICogQHJldHVybnMgQSBjYWxsYmFjayB0aGF0IHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IG9uSG92ZXIgPSAoZWw6IEhUTUxBbmNob3JFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBsZXQgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBtb3VzZSBpcyBtb3ZlZCBvdmVyIHRoZSBlbGVtZW50LCBpdCBkZWxheXMgdGhlIGNhbGwgb2YgdGhlXG4gICAqIGNhbGxiYWNrIGZvciBhIG51bWJlciBvZiBtaWxpc2Vjb25kcywgYXMgY29uZmlndXJlZCBpblxuICAgKiBgY29uZmlnLmhvdmVyRGVsYXlgLlxuICAgKi9cbiAgY29uc3QgbW91c2VPdmVySGFuZGxlciA9ICgpID0+IHtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYigpO1xuICAgIH0sIGNvbmZpZy5ob3ZlckRlbGF5KTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgdGltZW91dCB0byBhdm9pZCBleGVjdXRpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBjdXJzb3IgaXNcbiAgICogbW92ZWQgb3V0IG9mIHRoZSBlbGVtZW50IGJlZm9yZSBgY29uZmlnLmhvdmVyRGVsYXlgLlxuICAgKi9cbiAgY29uc3QgbW91c2VPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdXNlT3ZlckhhbmRsZXIpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbW91c2VPdXRIYW5kbGVyKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVySGFuZGxlcik7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG1vdXNlT3V0SGFuZGxlcik7XG4gIH07XG59O1xuXG4vKipcbiAqIE1ha2UgdGhlIGxpbmsgcmVsYXRpdmUgaWYgaXQgYmVsb25ncyB0byB0aGUgYmFja2VuZCwgdG8gZm9yY2UgY2xpZW50LXNpZGVcbiAqIG5hdmlnYXRpb24uXG4gKlxuICogQHBhcmFtIGxpbmsgLSBUaGUgbGluayBVUkwuXG4gKiBAcGFyYW0gc291cmNlVXJsIC0gVGhlIFNvdXJjZSBVUkwuIEl0IHVzdWFsbHkgY29tZXMgZnJvbSBgc3RhdGUuc291cmNlLnVybGAuXG4gKlxuICogQHJldHVybnMgVGhlIFVSTCB3aXRob3V0IHRoZSBTb3VyY2UgVVJMLlxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlU291cmNlVXJsID0gKGxpbms6IHN0cmluZywgc291cmNlVXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbGlua1VybCA9IG5ldyBVUkwobGluaywgc291cmNlVXJsKTtcbiAgcmV0dXJuIGxpbmtVcmwuaG9zdG5hbWUgPT09IG5ldyBVUkwoc291cmNlVXJsKS5ob3N0bmFtZVxuICAgID8gbGlua1VybC5wYXRobmFtZSArIGxpbmtVcmwuc2VhcmNoICsgbGlua1VybC5oYXNoXG4gICAgOiBsaW5rO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@frontity/components/link/utils.ts\n");

/***/ }),

/***/ "./packages/wc-amid-theme/src/link.js":
/*!********************************************!*\
  !*** ./packages/wc-amid-theme/src/link.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/**\n * The MarsLink component, which is a wrapper on top of the {@link Link}\n * component.\n *\n * @param props - It accepts the same props than the {@link Link} component.\n *\n * @example\n * ```js\n * <MarsLink link=\"/some-post\">\n *   <div>Some Post</div>\n * </MarsLink>\n * ```\n *\n * @returns A {@link Link} component, which returns an HTML anchor element.\n */var MarsLink=(_ref)=>{var{children}=_ref,props=_objectWithoutProperties(_ref,[\"children\"]);var{state,actions}=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"useConnect\"])();/**\n   * A handler that closes the mobile menu when a link is clicked.\n   */var onClick=()=>{if(state.theme.isMobileMenuOpen){actions.theme.closeMobileMenu();}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_extends({},props,{onClick:onClick}),children);};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(MarsLink,{injectProps:false}));// import React from \"react\";\n// import { connect, styled } from \"frontity\";\n// const Link = ({ href, actions, children }) => {\n//   return (\n//     <div>\n//       <Anchor\n//         href={href}\n//         onClick={event => {\n//           event.preventDefault();\n//           actions.router.set(href);\n//         }}\n//       >\n//         {children}\n//       </Anchor>\n//     </div>\n//   );\n// };\n// export default connect(Link);\n// const Anchor = styled.a`\n// color: rgba(255, 255, 255, 0.9);\n// font-family: \"Roboto\"; \n// `;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy93Yy1hbWlkLXRoZW1lL3NyYy9saW5rLmpzPzNiZjUiXSwibmFtZXMiOlsiTWFyc0xpbmsiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJhY3Rpb25zIiwidXNlQ29ubmVjdCIsIm9uQ2xpY2siLCJ0aGVtZSIsImlzTW9iaWxlTWVudU9wZW4iLCJjbG9zZU1vYmlsZU1lbnUiLCJjb25uZWN0IiwiaW5qZWN0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7KzlCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLEdBQU1BLFNBQVEsQ0FBRyxRQUE0QixJQUEzQixDQUFFQyxRQUFGLENBQTJCLE1BQVpDLEtBQVksNkNBQzNDLEdBQU0sQ0FBRUMsS0FBRixDQUFTQyxPQUFULEVBQXFCQywyREFBVSxFQUFyQyxDQUVBO0FBQ0Y7QUFDQSxLQUNFLEdBQU1DLFFBQU8sQ0FBRyxJQUFNLENBQ3BCLEdBQUlILEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxnQkFBaEIsQ0FBa0MsQ0FDaENKLE9BQU8sQ0FBQ0csS0FBUixDQUFjRSxlQUFkLEdBQ0QsQ0FDRixDQUpELENBTUEsTUFDRSwyREFBQyxpRUFBRCxhQUFVUCxLQUFWLEVBQWlCLE9BQU8sQ0FBRUksT0FBMUIsR0FDR0wsUUFESCxDQURGLENBS0QsQ0FqQkQsQ0FtQmVTLHVIQUFPLENBQUNWLFFBQUQsQ0FBVyxDQUFFVyxXQUFXLENBQUUsS0FBZixDQUFYLENBQXRCLEVBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWNrYWdlcy93Yy1hbWlkLXRoZW1lL3NyYy9saW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgdXNlQ29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2xpbmtcIjtcblxuLyoqXG4gKiBUaGUgTWFyc0xpbmsgY29tcG9uZW50LCB3aGljaCBpcyBhIHdyYXBwZXIgb24gdG9wIG9mIHRoZSB7QGxpbmsgTGlua31cbiAqIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgLSBJdCBhY2NlcHRzIHRoZSBzYW1lIHByb3BzIHRoYW4gdGhlIHtAbGluayBMaW5rfSBjb21wb25lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiA8TWFyc0xpbmsgbGluaz1cIi9zb21lLXBvc3RcIj5cbiAqICAgPGRpdj5Tb21lIFBvc3Q8L2Rpdj5cbiAqIDwvTWFyc0xpbms+XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJucyBBIHtAbGluayBMaW5rfSBjb21wb25lbnQsIHdoaWNoIHJldHVybnMgYW4gSFRNTCBhbmNob3IgZWxlbWVudC5cbiAqL1xuY29uc3QgTWFyc0xpbmsgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB1c2VDb25uZWN0KCk7XG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGNsb3NlcyB0aGUgbW9iaWxlIG1lbnUgd2hlbiBhIGxpbmsgaXMgY2xpY2tlZC5cbiAgICovXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4pIHtcbiAgICAgIGFjdGlvbnMudGhlbWUuY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgey4uLnByb3BzfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcnNMaW5rLCB7IGluamVjdFByb3BzOiBmYWxzZSB9KTtcblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbi8vIGNvbnN0IExpbmsgPSAoeyBocmVmLCBhY3Rpb25zLCBjaGlsZHJlbiB9KSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxBbmNob3JcblxuLy8gICAgICAgICBocmVmPXtocmVmfVxuLy8gICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB7XG4vLyAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICBhY3Rpb25zLnJvdXRlci5zZXQoaHJlZik7XG4vLyAgICAgICAgIH19XG4vLyAgICAgICA+XG4vLyAgICAgICAgIHtjaGlsZHJlbn1cblxuLy8gICAgICAgPC9BbmNob3I+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KExpbmspO1xuXG4vLyBjb25zdCBBbmNob3IgPSBzdHlsZWQuYWBcbi8vIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4vLyBmb250LWZhbWlseTogXCJSb2JvdG9cIjsgXG4vLyBgOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/wc-amid-theme/src/link.js\n");

/***/ })

})