(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(t,n,e){"use strict";e.r(n);var s=e(158),i=e.n(s),o={props:[],mounted:function(){var t=this;i.a.get("https://vuejs-back-api.herokuapp.com/meetup/").then(function(n){t.info=n.data})},data:function(){return{info:[]}},methods:{}},r=e(0),a=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("span",{domProps:{innerHTML:this._s(this.info.description)}}),n("p",[this._v(this._s(this.info.members)+" membros")])])},[],!1,null,null,null);n.default=a.exports}}]);