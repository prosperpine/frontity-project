webpackHotUpdate("frontity-project",{

/***/ "./packages/wc-amid-theme/src/menu-modal.js":
/*!**************************************************!*\
  !*** ./packages/wc-amid-theme/src/menu-modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hamburgerlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hamburgerlink */ \"./packages/wc-amid-theme/src/hamburgerlink.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state}=_ref;var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuContent,{as:\"nav\"},isThereLinks&&menu.map((_ref2)=>{var[name,link]=_ref2;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuLink,{key:name,link:link,\"aria-current\":state.router.link===link?\"page\":undefined},name);})));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e2qnkqu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"l3suyx\",styles:\"background-color:darkgrey;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjhCIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vaGFtYnVyZ2VybGlua1wiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnUgIT0gbnVsbCAmJiBtZW51Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiOyBcbiAgY29sb3I6IGJsYWNrOyBcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuXG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8vIGNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudU92ZXJsYXkgLz5cbi8vICAgICAgIDxNZW51Q29udGVudD5cblxuLy8gICAgICAgICA8TWVudUxpbmtcblxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPE1lbnVMaW5rIGhyZWY9XCIvb20tbWlnL1wiPk9tIG1pZzwvTWVudUxpbms+XG5cbi8vICAgICAgICAgPC9NZW51TGluaz5cblxuLy8gICAgICAgPC9NZW51Q29udGVudD5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHotaW5kZXg6IDI7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vIGA7XG4vLyBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbi8vIGNvbG9yOiB3aGl0ZTsgXG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7IFxuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBtYXJnaW46IDAgMTBweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGZsZXgtc2hyaW5rOiAwO1xuXG4vLyAgICYgPiBhIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4vLyAgICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbi8vICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgJjpmaXJzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcbi8vICAgfVxuXG4vLyAgICY6bGFzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgei1pbmRleDogMztcbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBvdXRsaW5lOiAwO1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcGFkZGluZzogMS4ycmVtIDA7XG5cbi8vICAgJjpob3Zlcixcbi8vICAgJjpmb2N1cyB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vICAgfVxuLy8gICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4vLyAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4vLyAgICAgY29sb3I6IHllbGxvdztcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuLy8gICB9XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e2qnkqu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vaGFtYnVyZ2VybGlua1wiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnUgIT0gbnVsbCAmJiBtZW51Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiOyBcbiAgY29sb3I6IGJsYWNrOyBcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuXG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8vIGNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudU92ZXJsYXkgLz5cbi8vICAgICAgIDxNZW51Q29udGVudD5cblxuLy8gICAgICAgICA8TWVudUxpbmtcblxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPE1lbnVMaW5rIGhyZWY9XCIvb20tbWlnL1wiPk9tIG1pZzwvTWVudUxpbms+XG5cbi8vICAgICAgICAgPC9NZW51TGluaz5cblxuLy8gICAgICAgPC9NZW51Q29udGVudD5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHotaW5kZXg6IDI7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vIGA7XG4vLyBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbi8vIGNvbG9yOiB3aGl0ZTsgXG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7IFxuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBtYXJnaW46IDAgMTBweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGZsZXgtc2hyaW5rOiAwO1xuXG4vLyAgICYgPiBhIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4vLyAgICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbi8vICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgJjpmaXJzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcbi8vICAgfVxuXG4vLyAgICY6bGFzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgei1pbmRleDogMztcbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBvdXRsaW5lOiAwO1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcGFkZGluZzogMS4ycmVtIDA7XG5cbi8vICAgJjpob3Zlcixcbi8vICAgJjpmb2N1cyB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vICAgfVxuLy8gICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4vLyAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4vLyAgICAgY29sb3I6IHllbGxvdztcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuLy8gICB9XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_hamburgerlink__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"e2qnkqu2\",label:\"MenuLink\"})( false?undefined:{name:\"2gtxwl\",styles:\"width:100%;display:inline-block;outline:0;font-size:2rem;text-align:center;padding:1.2rem 0;font-family:\\\"Roboto\\\";color:black;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:white;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzZCIiwiZmlsZSI6Ii9Vc2Vycy9qb3NlcGhpbmUvRGVza3RvcC9mcm9udGl0eS1wcm9qZWN0L2Zyb250aXR5LXByb2plY3QvcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vaGFtYnVyZ2VybGlua1wiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnUgIT0gbnVsbCAmJiBtZW51Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiOyBcbiAgY29sb3I6IGJsYWNrOyBcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuXG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8vIGNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudU92ZXJsYXkgLz5cbi8vICAgICAgIDxNZW51Q29udGVudD5cblxuLy8gICAgICAgICA8TWVudUxpbmtcblxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPE1lbnVMaW5rIGhyZWY9XCIvb20tbWlnL1wiPk9tIG1pZzwvTWVudUxpbms+XG5cbi8vICAgICAgICAgPC9NZW51TGluaz5cblxuLy8gICAgICAgPC9NZW51Q29udGVudD5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHotaW5kZXg6IDI7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vIGA7XG4vLyBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbi8vIGNvbG9yOiB3aGl0ZTsgXG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7IFxuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBtYXJnaW46IDAgMTBweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGZsZXgtc2hyaW5rOiAwO1xuXG4vLyAgICYgPiBhIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4vLyAgICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbi8vICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgJjpmaXJzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcbi8vICAgfVxuXG4vLyAgICY6bGFzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgei1pbmRleDogMztcbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBvdXRsaW5lOiAwO1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcGFkZGluZzogMS4ycmVtIDA7XG5cbi8vICAgJjpob3Zlcixcbi8vICAgJjpmb2N1cyB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vICAgfVxuLy8gICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4vLyAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4vLyAgICAgY29sb3I6IHllbGxvdztcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuLy8gICB9XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));// import React from \"react\";\n// import { styled, connect } from \"frontity\";\n// import Link from \"./link\";\n// const MenuModal = ({ state }) => {\n//   const { menu } = state.theme;\n//   const isThereLinks = menu != null && menu.length > 0;\n//   return (\n//     <>\n//       <MenuOverlay />\n//       <MenuContent>\n//         <MenuLink\n//         >\n//           <MenuLink href=\"/om-mig/\">Om mig</MenuLink>\n//         </MenuLink>\n//       </MenuContent>\n//     </>\n//   );\n// };\n// const MenuOverlay = styled.div`\n//   background-color: black;\n//   width: 100vw;\n//   height: 100vh;\n//   overflow: hidden auto;\n//   position: fixed;\n//   z-index: 2;\n//   top: 0;\n//   left: 0;\n// `;\n// const NavItem = styled.div`\n// color: white; \n// position: relative; \n//   padding: 0;\n//   margin: 0 10px;\n//   color: #fff;\n//   font-size: 0.9em;\n//   box-sizing: border-box;\n//   flex-shrink: 0;\n//   & > a {\n//     display: inline-block;\n//     line-height: 2em;\n//     border-bottom: 2px solid;\n//     border-bottom-color: transparent;\n//     /* Use for semantic approach to style the current link */\n//     &[aria-current=\"page\"] {\n//       border-bottom-color: #fff;\n//     }\n//   }\n//   &:first-of-type {\n//     margin-left: 0;\n//   }\n//   &:last-of-type {\n//     margin-right: 0;\n//     &:after {\n//       content: \"\";\n//       display: inline-block;\n//       width: 24px;\n//     }\n//   }\n// `;\n// const MenuContent = styled.div`\n//   z-index: 3;\n// `;\n// const MenuLink = styled(Link)`\n//   width: 100%;\n//   display: inline-block;\n//   outline: 0;\n//   font-size: 20px;\n//   text-align: center;\n//   padding: 1.2rem 0;\n//   &:hover,\n//   &:focus {\n//     background-color: rgba(0, 0, 0, 0.05);\n//   }\n//   /* styles for active link */\n//   &[aria-current=\"page\"] {\n//     color: yellow;\n//     font-weight: bold;\n//     /* border-bottom: 4px solid yellow; */\n//   }\n// `;\n// export default connect(MenuModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy93Yy1hbWlkLXRoZW1lL3NyYy9tZW51LW1vZGFsLmpzP2QyMmUiXSwibmFtZXMiOlsiTWVudU1vZGFsIiwic3RhdGUiLCJtZW51IiwidGhlbWUiLCJpc1RoZXJlTGlua3MiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIiwibGluayIsInJvdXRlciIsInVuZGVmaW5lZCIsIk1lbnVPdmVybGF5IiwiTWVudUNvbnRlbnQiLCJNZW51TGluayIsIkxpbmsiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxVQUFTLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMvQixHQUFNLENBQUVDLElBQUYsRUFBV0QsS0FBSyxDQUFDRSxLQUF2QixDQUNBLEdBQU1DLGFBQVksQ0FBR0YsSUFBSSxFQUFJLElBQVIsRUFBZ0JBLElBQUksQ0FBQ0csTUFBTCxDQUFjLENBQW5ELENBRUEsTUFDRSxzSEFDRSwwREFBQyxXQUFELE1BREYsQ0FFRSwwREFBQyxXQUFELEVBQWEsRUFBRSxDQUFDLEtBQWhCLEVBQ0dELFlBQVksRUFDWEYsSUFBSSxDQUFDSSxHQUFMLENBQVMsYUFBQyxDQUFDQyxJQUFELENBQU9DLElBQVAsQ0FBRCxhQUNQLDJEQUFDLFFBQUQsRUFDRSxHQUFHLENBQUVELElBRFAsQ0FFRSxJQUFJLENBQUVDLElBRlIsQ0FHRSxlQUFjUCxLQUFLLENBQUNRLE1BQU4sQ0FBYUQsSUFBYixHQUFzQkEsSUFBdEIsQ0FBNkIsTUFBN0IsQ0FBc0NFLFNBSHRELEVBS0dILElBTEgsQ0FETyxFQUFULENBRkosQ0FGRixDQURGLENBaUJELENBckJELENBdUJBLEdBQU1JLFlBQVcsOG9LQUFqQixDQVdBLEdBQU1DLFlBQVcsMGlLQUFqQixDQUlBLEdBQU1DLFNBQVEsQ0FBRyxrRkFBT0Msc0RBQVAsc0NBQUgscXBLQUFkLENBc0JlQyx1SEFBTyxDQUFDZixTQUFELENBQXRCLEVBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFja2FnZXMvd2MtYW1pZC10aGVtZS9zcmMvbWVudS1tb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vaGFtYnVyZ2VybGlua1wiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnUgIT0gbnVsbCAmJiBtZW51Lmxlbmd0aCA+IDA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IChcbiAgICAgICAgICAgIDxNZW51TGlua1xuICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS4ycmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiOyBcbiAgY29sb3I6IGJsYWNrOyBcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG5cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNZW51TW9kYWwpO1xuXG5cblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8vIGNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcbi8vICAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbi8vICAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8TWVudU92ZXJsYXkgLz5cbi8vICAgICAgIDxNZW51Q29udGVudD5cblxuLy8gICAgICAgICA8TWVudUxpbmtcblxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPE1lbnVMaW5rIGhyZWY9XCIvb20tbWlnL1wiPk9tIG1pZzwvTWVudUxpbms+XG5cbi8vICAgICAgICAgPC9NZW51TGluaz5cblxuLy8gICAgICAgPC9NZW51Q29udGVudD5cbi8vICAgICA8Lz5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHotaW5kZXg6IDI7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vIGA7XG4vLyBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbi8vIGNvbG9yOiB3aGl0ZTsgXG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7IFxuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBtYXJnaW46IDAgMTBweDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGZvbnQtc2l6ZTogMC45ZW07XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIGZsZXgtc2hyaW5rOiAwO1xuXG4vLyAgICYgPiBhIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbi8vICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4vLyAgICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbi8vICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgJjpmaXJzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcbi8vICAgfVxuXG4vLyAgICY6bGFzdC1vZi10eXBlIHtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICB9XG4vLyAgIH1cbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbi8vICAgei1pbmRleDogMztcbi8vIGA7XG5cbi8vIGNvbnN0IE1lbnVMaW5rID0gc3R5bGVkKExpbmspYFxuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBvdXRsaW5lOiAwO1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcGFkZGluZzogMS4ycmVtIDA7XG5cbi8vICAgJjpob3Zlcixcbi8vICAgJjpmb2N1cyB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vICAgfVxuLy8gICAvKiBzdHlsZXMgZm9yIGFjdGl2ZSBsaW5rICovXG4vLyAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4vLyAgICAgY29sb3I6IHllbGxvdztcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgeWVsbG93OyAqL1xuLy8gICB9XG4vLyBgO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/wc-amid-theme/src/menu-modal.js\n");

/***/ })

})