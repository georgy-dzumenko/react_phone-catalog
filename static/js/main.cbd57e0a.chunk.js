(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{36:function(e,t,a){e.exports=a(77)},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return ke}));var c=a(0),n=a.n(c),r=a(19),l=a.n(r),s=a(2),o=(a(41),a(42),a(4)),i=a(1),u=a(32),m=(a(44),function(e){var t=e.placeholder,a=Object(s.f)(),r=Object(s.e)(),l=new URLSearchParams(a.search),o=Object(c.useState)(l.get("query")||""),m=Object(i.a)(o,2),d=m[0],f=m[1],E=Object(c.useCallback)(Object(u.debounce)((function(e){l.delete("page"),""!==e.trim()?l.get("query")?l.set("query",e):l.append("query",e):l.delete("query"),r.push({search:l.toString()})}),500),[a]);return n.a.createElement("div",{className:"search-bar-container"},n.a.createElement("input",{value:d,onChange:function(e){var t=e.target;f(t.value),E(t.value)},className:"search-bar",placeholder:t}))}),d=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"header__nav"},n.a.createElement("ul",{className:"nav__link-list"},n.a.createElement("li",{className:"link-list__link-container"},n.a.createElement("div",{className:"logo"},"LOGO")),n.a.createElement("li",{className:"link-list__link-container"},n.a.createElement(o.c,{exact:!0,to:"/",className:"link",activeClassName:"is-active"},"Home")),n.a.createElement("li",{className:"link-list__link-container"},n.a.createElement(o.c,{to:"/phones",className:"link",activeClassName:"is-active"},"Phones")),n.a.createElement("li",{className:"link-list__link-container"},n.a.createElement(o.c,{to:"/tablets",className:"link",activeClassName:"is-active"},"Tablets")),n.a.createElement("li",{className:"link-list__link-container"},n.a.createElement(o.c,{to:"/accessories",className:"link",activeClassName:"is-active"},"Accessories"))),n.a.createElement("ul",{className:"nav__link-list"},n.a.createElement(s.a,{path:"/phones"},n.a.createElement(m,{placeholder:"Search in phones..."})),n.a.createElement(s.a,{path:"/tablets"},n.a.createElement(m,{placeholder:"Search in tablets..."})),n.a.createElement(s.a,{path:"/accessories"},n.a.createElement(m,{placeholder:"Search in accessories..."})),n.a.createElement(o.c,{to:"/cart",className:"link-list__square-nav-link",activeClassName:"is-active"},n.a.createElement("i",{className:"cart-icon"})),n.a.createElement(o.c,{to:"/favorites",className:"link-list__square-nav-link",activeClassName:"is-active"},n.a.createElement("i",{className:"heart-icon"})))))},f=a(7),E=a.n(f),b=a(13),v="https://mate-academy.github.io/react_phone-catalog/api/",p=function(){var e=Object(b.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,_().then((function(e){return a=e}));case 3:return e.abrupt("return",a.filter((function(e){return t.some((function(t){return e.id===t}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,_().then((function(e){return a=e}));case 3:return e.abrupt("return",a.find((function(e){return t===e.id})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){return fetch("".concat(v,"/products.json")).then((function(e){return e.json()}))},g=function(){return fetch("".concat(v,"/products.json")).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"phone"===e.type}))}))},N=function(){return fetch("".concat(v,"/products.json")).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"tablet"===e.type}))}))},O=function(){return fetch("".concat(v,"/products.json")).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"accessories"===e.type}))}))},j=function(){return fetch("".concat(v,"/products.json")).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return e.discount>0})).sort((function(e,t){return t.discount-e.discount}))}))},k=function(e){return fetch("".concat(v,"/products/").concat(e,".json")).then((function(e){return e.json()}))},y=a(10),x=a(14),C=a(5),P=function(e){return{type:"CART/ADD_PRODUCT",payload:e}},S=function(e){return{type:"CART/DELETE_PRODUCT",payload:e}},w=function(e){return{type:"FAVORITE/DELETE_PRODUCT",payload:e}},I=function(e){return{type:"FAVORITE/ADD_PRODUCT",payload:e}},T={addCartProduct:P,deleteCartProduct:S},A=Object(C.b)((function(e){return{cart:e.cart.cart}}),T)((function(e){var t=e.isBig,a=e.cart,c=void 0===a?[]:a,r=e.addCartProduct,l=e.deleteCartProduct,s=e.idToAdd,o=c.some((function(e){return e.productId===s}));return n.a.createElement("button",{onClick:function(){r&&l&&(o?l(s):r(s)),console.log(c)},className:x(["button three-in-four",{button_size_big:t,"is-active":o}])},o?"Added to cart":"Add to cart")})),R=(a(50),a(14)),D={addFavoriteProduct:I,deleteFavoriteProduct:w},q=Object(C.b)((function(e){return{favorites:e.favorites.favorites}}),D)((function(e){var t=e.id,a=e.isBig,c=e.favorites,r=void 0===c?[]:c,l=e.addFavoriteProduct,s=e.deleteFavoriteProduct,o=r.some((function(e){return e===t}));return n.a.createElement("button",{onClick:function(){l&&s&&(o?s(t):l(t))},className:R([{"square-button_size_big":a,"is-active":o},"square-button","is_relative"])},o?n.a.createElement("i",{className:"heart-icon_filled icon-size_large"}):n.a.createElement("i",{className:"heart-icon icon-size_large"}))})),L=a(16),U={addCartProduct:P,deleteCartProduct:S,addFavoriteProduct:I,deleteFavoriteProduct:w},B=Object(C.b)((function(e){return{cart:e.cart.cart,favorites:e.favorites.favorites}}),U)((function(e){var t=e.card;return n.a.createElement("div",{className:"card",key:t.id},n.a.createElement(L.a,{smooth:!0,className:"card__img-container",to:{pathname:"/".concat(t.type,"s/").concat(t.id),hash:"top"}},n.a.createElement("img",{alt:"",width:"100%",className:"card__img",src:t.imageUrl})),n.a.createElement("div",{className:"card__info"},n.a.createElement("span",{className:"body-text"},t.name),n.a.createElement("div",null,n.a.createElement("span",{className:"h2"},"$",t.price," "),0!==t.discount?n.a.createElement("span",{className:"is_crossed h3 text_color_gray"},"$",t.price+t.discount):""),n.a.createElement("div",{className:"hr"}),n.a.createElement("div",{className:"info__characteristics"},n.a.createElement("div",{className:"small-text text_color_gray"},"Screen"),n.a.createElement("div",{className:" small-text characteristics__value_align_is-right "},t.screen),n.a.createElement("div",{className:"small-text text_color_gray"},"Capacity"),n.a.createElement("div",{className:" small-text characteristics__value_align_is-right "},t.capacity),n.a.createElement("div",{className:"small-text text_color_gray"},"RAM"),n.a.createElement("div",{className:" small-text characteristics__value_align_is-right "},t.ram)),n.a.createElement("div",{className:"card__quick-action-buttons-block row_gap_8px"},n.a.createElement(A,{idToAdd:t.id}),n.a.createElement(q,{id:t.id}))))})),F=(a(51),a(14)),z=function(e){var t=e.ref,a=void 0===t?null:t,c=e.cardsArr,r=e.oneRow,l=void 0!==r&&r;return n.a.createElement("div",{ref:a,className:F(["products-list",{"products-list_one-row":l}])},c.map((function(e){return n.a.createElement(B,{card:e})})))},J=(a(52),a(14)),M=function(e){for(var t=e.cardsPerPage,a=e.totalCards,c=[],r=Object(s.f)(),l=Object(s.e)(),o=new URLSearchParams(r.search),i=+(o.get("page")||1),u=function(e){o.set("page","".concat(e)),l.push({search:o.toString()})},m=1;m<=Math.ceil(a/t);m++)c.push(m);return n.a.createElement("div",{className:"pagination"},n.a.createElement("button",{key:"back",disabled:1===i,className:"square-button",onClick:function(){return u(i-1)}},"<"),c.map((function(e){return n.a.createElement("button",{key:e,className:J(["square-button",{"square-button_selected":i===e}]),onClick:function(){return u(e)}},e)})),n.a.createElement("button",{key:"forward",disabled:i===c.length,className:"square-button",onClick:function(){return u(i+1)}},">"))},$=(a(53),a(14)),V=function(e){var t=e.label,a=e.keyInUrl,r=void 0===a?"":a,l=e.onChange,o=void 0===l?function(){}:l,u=e.options,m=Object(c.useState)(!1),d=Object(i.a)(m,2),f=d[0],E=d[1],b=Object(c.useRef)(null),v=Object(s.f)(),p=Object(s.e)(),h=new URLSearchParams(v.search),_=h.get(r),g=Object(c.useState)(r&&u.find((function(e){return e.value===h.get(r)}))||u[0]),N=Object(i.a)(g,2),O=N[0],j=N[1];return Object(c.useEffect)((function(){j(r&&u.find((function(e){return e.value===h.get(r)}))||u[0])}),[_,r,u,h]),n.a.createElement("div",{className:"select-container"},n.a.createElement("span",{className:"text_color_gray small-text"},t),n.a.createElement("div",{ref:b,tabIndex:0,onBlur:function(){return E(!1)},className:$(["select-container__select",{"select-container__select_active":f}]),onClick:function(){E(!f),b.current&&!f&&b.current.focus()}},n.a.createElement("div",{className:"select__text"},O.text),n.a.createElement("div",{className:$(["select__options-block",{"select__options-block_closed":!f}])},u.map((function(e){return n.a.createElement("div",{className:"options-block__option",key:e.text,onClick:function(){o(h),r&&(h.set(r,e.value),p.push({search:h.toString()})),E(!1),j(e)}},e.text)})))))},W=function(){return n.a.createElement("h1",null,"Loading...")},G=function(){return n.a.createElement("h1",null,"No results")},H=a(33),Y=function(e){var t=e.match,a=e.param,r=Object(c.useState)(""),l=Object(i.a)(r,2),s=l[0],o=l[1];return Object(c.useEffect)((function(){k(t.params[a]).then((function(e){return o(e.name)}))}),[t.params,a]),n.a.createElement("span",null,s)},Z=[{path:"/",breadcrumb:function(){return n.a.createElement("i",{className:"home-icon lg"})}},{path:"/phones",breadcrumb:"Phones"},{path:"/tablets",breadcrumb:"Tablets"},{path:"/accessories",breadcrumb:"Phones"},{path:"/phones/:phoneId",breadcrumb:function(e){var t=e.match;return n.a.createElement(Y,{match:t,param:"phoneId"})}},{path:"/tablets/:tabletId",breadcrumb:function(e){var t=e.match;return n.a.createElement(Y,{match:t,param:"tabletId"})}}],K=function(){var e=Object(H.a)(Z);return e.length>1?n.a.createElement("div",{className:"breadcrumbs"},e.map((function(e){var t=e.breadcrumb,a=e.match;return n.a.createElement("div",{key:a.url,className:"breadcrumbs"},n.a.createElement("span",null,"/"!==a.url?n.a.createElement("i",{className:"arrow"}):""),n.a.createElement("span",null,n.a.createElement(o.b,{className:"breadcrumb small-text",to:a.url},t)))}))):n.a.createElement(n.a.Fragment,null)},Q=function(e){var t=e.products,a=e.title,r=Object(s.f)(),l=Object(s.e)(),o=new URLSearchParams(r.search),u=o.get("sortBy")||"",m=o.get("query")||"",d=o.get("cardsPerPage")||"4",f=+(o.get("page")||"1"),E=f*+d,b=f*+d-+d,v=Object(c.useState)([]),p=Object(i.a)(v,2),h=p[0],_=p[1];return Object(c.useEffect)((function(){t!==[]&&_(Object(y.a)(t).sort((function(e,t){return"name"===u?e.name.localeCompare(t.name):"age"===u||"price"===u?e[u]-t[u]:1})).filter((function(e){return e.name.toLocaleLowerCase().includes(m.toLocaleLowerCase())})))}),[f,E,b,t,u,m]),n.a.createElement(n.a.Fragment,null,""===m?n.a.createElement(K,null):"",n.a.createElement("div",null,""===m?n.a.createElement("h1",null,a):"",n.a.createElement("small",{className:"text_color_gray"},h.length," models")),n.a.createElement("section",null,""===m?n.a.createElement("div",{className:"row_gap_10px"},n.a.createElement(V,{keyInUrl:"cardsPerPage",onChange:function(e){e.set("page","".concat(1)),l.push({search:e.toString()})},label:"Items on page",options:[{value:"4",text:"4"},{value:"8",text:"8"},{value:"16",text:"16"}]}),n.a.createElement(V,{keyInUrl:"sortBy",label:"Sort by",options:[{value:"age",text:"Newest"},{value:"name",text:"Alphabetically"},{value:"price",text:"Cheapest"}]})):"",null===t?n.a.createElement(W,null):"",h.length>0?n.a.createElement(z,{cardsArr:h.slice(b,E)}):n.a.createElement(G,null),h.length>+d?n.a.createElement(M,{cardsPerPage:+d,totalCards:h.length}):""))},X=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),n.a.createElement("div",{className:"Page"},n.a.createElement(Q,{products:a,title:"Accessories"}))},ee=(a(58),function(){var e=Object(s.e)();return n.a.createElement(L.a,{to:{hash:"top"},className:"breadcrumb small-text back-button",onClick:function(){e.goBack()}},n.a.createElement("i",{className:"arrow_direction_left arrow_color_black"})," Back")}),te=(a(59),{addCartProduct:P,deleteCartProduct:S,deleteOneCartProduct:function(e){return{type:"CART/DELETE_ONE_PRODUCT",payload:e}}}),ae=Object(C.b)((function(e){return{cart:e.cart.cart}}),te)((function(e){var t=e.order,a=e.addCartProduct,r=void 0===a?function(){}:a,l=e.deleteCartProduct,s=void 0===l?function(){}:l,u=e.deleteOneCartProduct,m=void 0===u?function(){}:u,d=Object(c.useState)({}),f=Object(i.a)(d,2),E=f[0],b=f[1];return Object(c.useEffect)((function(){h(t.productId).then((function(e){return b(e)}))})),n.a.createElement("div",{className:"cart-product",key:null===E||void 0===E?void 0:E.id},n.a.createElement("div",{className:"cart-product__main"},n.a.createElement("div",{onClick:function(){return s(null===E||void 0===E?void 0:E.id)}},n.a.createElement("i",{className:"deleteButton"})),n.a.createElement(o.b,{to:"/".concat(null===E||void 0===E?void 0:E.type,"s/").concat(null===E||void 0===E?void 0:E.id)},n.a.createElement("img",{alt:"",width:"100%",className:"cart-product__img",src:null===E||void 0===E?void 0:E.imageUrl})),n.a.createElement(o.b,{className:"cart-product__title",to:"/".concat(null===E||void 0===E?void 0:E.type,"s/").concat(null===E||void 0===E?void 0:E.id)},null===E||void 0===E?void 0:E.name)),n.a.createElement("div",{className:"row_gap_10px row_align_center"},n.a.createElement("button",{className:"square-button square-button_size_small",disabled:1===t.count,onClick:function(){m(t.productId)}},"-"),t.count,n.a.createElement("button",{className:"square-button square-button_size_small",onClick:function(){r(t.productId)}},"+")),n.a.createElement("div",{className:"price"},n.a.createElement("span",{className:"h2"},"$",(null===E||void 0===E?void 0:E.price)*t.count," ")))})),ce=(a(60),function(e){var t=e.orders;return n.a.createElement("div",{className:"orders-list"},t.map((function(e){return n.a.createElement(ae,{order:e})})))}),ne=Object(C.b)((function(e){return{cart:e.cart.cart}}),null)((function(e){var t=e.cart,a=void 0===t?[]:t,r=Object(c.useState)([]),l=Object(i.a)(r,2),s=l[0],o=l[1];Object(c.useEffect)((function(){p(a.map((function(e){return e.productId}))).then((function(e){return o(e)}))}),[a]);var u=a.reduce((function(e,t){return e+t.count}),0),m=a.reduce((function(e,t){var a;return e+((s?null===(a=s.find((function(e){return e.id===t.productId})))||void 0===a?void 0:a.price:0)||0)*t.count}),0);return n.a.createElement("div",{className:"Page"},n.a.createElement(ee,null),n.a.createElement("h1",{className:"h1"},a.length>0?"Cart":"Your cart is emty right now."),n.a.createElement("section",null,a.length>0?n.a.createElement("div",{className:"is_flex",style:{justifyItems:"space-between"}},n.a.createElement(ce,{orders:a}),n.a.createElement("div",{className:"checkout-block"},n.a.createElement("div",{className:"checkout-block_info"},n.a.createElement("div",{className:"h1 checkout-block_price"},"$",m),n.a.createElement("div",{className:"text_color_gray small-text"},"Total for ",u," items")),n.a.createElement("div",{className:"hr"}),n.a.createElement("button",{className:"button is_bottom_in_flex"},"checkout"))):""))})),re=Object(C.b)((function(e){return{favorites:e.favorites.favorites}}),null)((function(e){var t=e.favorites,a=void 0===t?[]:t,r=Object(c.useState)([]),l=Object(i.a)(r,2),s=l[0],o=l[1];return Object(c.useEffect)((function(){p(a).then((function(e){return o(e)}))}),[a]),n.a.createElement("div",{className:"Page"},n.a.createElement(K,null),n.a.createElement("h1",null,"Favorites"),n.a.createElement("section",null,n.a.createElement(z,{cardsArr:s})))})),le=(a(61),a(35)),se=a.n(le),oe=a(14),ie=function(e){var t=e.imgArr,a=Object(c.useState)(0),r=Object(i.a)(a,2),l=r[0],s=r[1],o=function(){l!==t.length-1?s(l+1):s(0)},u=Object(c.useCallback)(se()(o,5e3),[l]),m=Object(c.useCallback)((function(){s(0!==l?l-1:t.length-1)}),[l,t.length]);return Object(c.useEffect)((function(){return u(),u.cancel}),[l,u]),n.a.createElement("div",{className:"picture-slider-container"},n.a.createElement("div",{className:"picture-slider"},n.a.createElement("button",{className:"picture-slider__scroll-button",onClick:m},n.a.createElement("i",{className:"arrow_direction_left arrow_color_black"})),n.a.createElement("img",{alt:"",className:"picture-slider__picture",src:"".concat(t[l])}),n.a.createElement("button",{className:"picture-slider__scroll-button",onClick:o},n.a.createElement("i",{className:"arrow_direction_right arrow_color_black"}))),n.a.createElement("div",{className:"scroll-state"},t.map((function(e){return n.a.createElement("div",{onClick:function(){return s(t.indexOf(e))},className:oe([{is_active:t.indexOf(e)===l}])})}))))},ue=(a(72),a(73),function(e){var t=e.products,a=e.title,r=Object(c.useRef)(null),l=r.current?Object(y.a)(r.current.childNodes).find((function(e){return e.className.includes("products-list")})):"",s=Object(c.useState)(0),o=Object(i.a)(s,2),u=o[0],m=o[1];return n.a.createElement("div",{className:"product-slider",ref:r},n.a.createElement("div",{className:"is_flex items_centered"},n.a.createElement("h1",null,a),n.a.createElement("div",{className:"row_gap_10px"},n.a.createElement("button",{disabled:u<=0,onClick:function(){var e,t=l.scrollLeft-((null===(e=r.current)||void 0===e?void 0:e.clientWidth)+16);l.scrollTo({left:t,behavior:"smooth"}),m(t)},className:"square-button"},n.a.createElement("i",{className:"arrow_direction_left arrow_color_black"})),n.a.createElement("button",{disabled:u>=l.scrollWidth-l.clientWidth,onClick:function(){var e,t=l.scrollLeft+((null===(e=r.current)||void 0===e?void 0:e.clientWidth)+16);l.scrollTo({left:t,behavior:"smooth"}),m(t)},className:"square-button"},n.a.createElement("i",{className:"arrow_direction_right arrow_color_black"})))),n.a.createElement(z,{cardsArr:t,oneRow:!0}))}),me=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(c.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(c.useState)([]),f=Object(i.a)(d,2),E=f[0],b=f[1],p=Object(c.useState)([]),h=Object(i.a)(p,2),_=h[0],k=h[1],y=Object(c.useState)([]),x=Object(i.a)(y,2),C=x[0],P=x[1];return Object(c.useEffect)((function(){N().then((function(e){k(e)})),g().then((function(e){b(e)})),j().then((function(e){r(e)})),fetch("".concat(v,"/products.json")).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return 0===e.discount})).sort((function(e,t){return t.price-e.price}))})).then((function(e){m(e)})),O().then((function(e){P(e)}))}),[]),n.a.createElement("div",{className:"Page Page_gap_big"},n.a.createElement(ie,{imgArr:["img/banners/Banner.png","https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"]}),n.a.createElement("section",null,n.a.createElement(ue,{products:a,title:"Hot prices"})),n.a.createElement("section",null,n.a.createElement("h1",null,"Shop by category"),n.a.createElement("div",{className:"is_flex items_centered"},n.a.createElement("div",null,n.a.createElement("div",{className:"is_relative shop-by-category-link",style:{backgroundColor:"#FCDBC1"}},n.a.createElement(o.b,{to:"/phones"},n.a.createElement("img",{alt:"",className:"is_left is_bottom",src:"img/categoriesImgs/Phones.png"}))),n.a.createElement("h3",null,"Phones"),n.a.createElement("p",{className:"is_gray"},E.length," models")),n.a.createElement("div",null,n.a.createElement("div",{className:"is_relative  shop-by-category-link",style:{backgroundColor:"#8D8D92"}},n.a.createElement(o.b,{to:"/tablets"},n.a.createElement("img",{alt:"",className:"is_left is_bottom",src:"img/categoriesImgs/Tablets.png"}))),n.a.createElement("h3",null,"Tablets"),n.a.createElement("p",{className:"is_gray"},_.length," models")),n.a.createElement("div",null,n.a.createElement("div",{className:"is_relative  shop-by-category-link",style:{backgroundColor:"#973D5F"}},n.a.createElement(o.b,{to:"/accessories"},n.a.createElement("img",{alt:"",className:"is_left is_bottom",src:"img/categoriesImgs/Accessories.png"}))),n.a.createElement("h3",null,"Accessories"),n.a.createElement("p",{className:"is_gray"},C.length," models")))),n.a.createElement("section",null,n.a.createElement(ue,{products:u,title:"Brand new models"})))},de=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),n.a.createElement("div",{className:"Page"},n.a.createElement(Q,{products:a,title:"Phones"}))},fe=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(b.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N().then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[]),n.a.createElement("div",{className:"Page"},n.a.createElement(Q,{products:a,title:"Tablets"}))},Ee=(a(74),a(14)),be=function(e){var t=e.imgArr,a=Object(c.useState)(0),r=Object(i.a)(a,2),l=r[0],s=r[1];return Object(c.useEffect)((function(){s(0)}),[t]),n.a.createElement("div",{className:"product-img-list-container"},n.a.createElement("div",{className:"list__scroll-state"},t.map((function(e){var a=t.indexOf(e);return n.a.createElement("div",{key:e,onMouseOver:function(){return s(a)},className:Ee(["croll-state__miniature",{"scroll-state__miniature_active":l===a}])},n.a.createElement("img",{alt:"",src:t[a],className:"miniature__img"}))}))),n.a.createElement("div",{className:"product-img-list"},n.a.createElement("img",{alt:"",className:"list__picture",src:"".concat(t[l])})))},ve=(a(75),function(e){var t=e.id,a=Object(c.useState)({}),r=Object(i.a)(a,2),l=r[0],o=r[1],u=Object(c.useState)(0),m=Object(i.a)(u,2),d=m[0],f=m[1],E=Object(c.useState)([]),b=Object(i.a)(E,2),v=b[0],p=b[1],_=Object(s.e)();return Object(c.useEffect)((function(){console.log(_),j().then((function(e){return p(e.filter((function(e){return t!==e.id})))})),k(t).then((function(e){return o(e)})),h(t).then((function(e){var t=e.price;return f(t)}))}),[t,_]),n.a.createElement("div",{className:"Page"},n.a.createElement(K,null),n.a.createElement(ee,null),n.a.createElement("h1",null,l.name),n.a.createElement("div",{className:"info-block"},n.a.createElement(be,{imgArr:l.images||[]}),n.a.createElement("div",{className:"actions-block"},n.a.createElement("div",{className:"actions-block_part"},n.a.createElement("h1",null,"$",d),n.a.createElement("div",{className:"is_flex row_gap_8px"},n.a.createElement(A,{idToAdd:t,isBig:!0}),n.a.createElement(q,{id:t,isBig:!0}))),n.a.createElement("div",{className:"actions-block_part"},n.a.createElement("div",{className:"small-text tech-specs-block"},n.a.createElement("div",{className:"text_color_gray"},"Screen"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.display||{}).screenSize),n.a.createElement("div",{className:"text_color_gray"},"Resolution"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.display||{}).screenResolution),n.a.createElement("div",{className:"text_color_gray"},"Processor"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.hardware||{}).cpu),n.a.createElement("div",{className:"text_color_gray"},"RAM"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.storage||{}).ram))))),n.a.createElement("div",{className:"details-block"},n.a.createElement("div",{className:"details-block_column"},n.a.createElement("h1",null,"About"),n.a.createElement("div",{className:"hr"}),n.a.createElement("p",{className:"body-text text_color_gray"},l.description)),n.a.createElement("div",{className:"details-block_column"},n.a.createElement("h1",null,"Tech specs"),n.a.createElement("div",{className:"hr"}),n.a.createElement("div",{className:"body-text tech-specs-block"},n.a.createElement("div",{className:"text_color_gray"},"Screen"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.display||{}).screenSize),n.a.createElement("div",{className:"text_color_gray"},"Resolution"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.display||{}).screenResolution),n.a.createElement("div",{className:"text_color_gray"},"Processor"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.hardware||{}).cpu),n.a.createElement("div",{className:"text_color_gray"},"RAM"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.storage||{}).ram),n.a.createElement("div",{className:"text_color_gray"},"Built in memory"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.storage||{}).flash),n.a.createElement("div",{className:"text_color_gray"},"Camera"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.camera||{}).primary),n.a.createElement("div",{className:"text_color_gray"},"Zoom"),n.a.createElement("div",{className:"tech-specs-block_value"},(l.connectivity||{}).cell)))),n.a.createElement(ue,{title:"You may also like",products:v}))}),pe=(a(76),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("nav",{className:"footer-nav"},n.a.createElement("span",null,"LOGO"),n.a.createElement("div",null,n.a.createElement("a",{className:"link",href:"https://github.com/georgy-dzumenko/react_phone-catalog"},"Github")),n.a.createElement("div",null,n.a.createElement(L.a,{className:"link",smooth:!0,to:{hash:"top"}},n.a.createElement("div",{className:"row_gap_10px row_align_center"},n.a.createElement("span",null,"back to top"),n.a.createElement("button",{className:"square-button square-button_size_small"},n.a.createElement("i",{className:"arrow_color_black arrow_direction_up"})))))))}),he=function(){return n.a.createElement("div",{id:"top"},n.a.createElement(d,null),n.a.createElement(s.a,{exact:!0,path:"/"},n.a.createElement(me,null)),n.a.createElement(s.a,{exact:!0,path:"/phones"},n.a.createElement(de,null)),n.a.createElement(s.a,{exact:!0,path:"/tablets"},n.a.createElement(fe,null)),n.a.createElement(s.a,{exact:!0,path:"/accessories"},n.a.createElement(X,null)),n.a.createElement(s.a,{exact:!0,path:"/cart"},n.a.createElement(ne,null)),n.a.createElement(s.a,{exact:!0,path:"/favorites"},n.a.createElement(re,null)),n.a.createElement(s.a,{exact:!0,path:"/phones/:phoneId"},n.a.createElement(ve,{id:((Object(s.g)("/phones/:phoneId")||{}).params||{}).phoneId})),n.a.createElement(s.a,{exact:!0,path:"/tablets/:tabletId"},n.a.createElement(ve,{id:((Object(s.g)("/tablets/:tabletId")||{}).params||{}).tabletId})),n.a.createElement(pe,null))},_e=a(22),ge=a(12),Ne={cart:JSON.parse(localStorage.getItem("cart")||"[]")||[]},Oe={favorites:JSON.parse(localStorage.getItem("favorites")||"[]")||[]},je=Object(_e.a)({cart:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CART/ADD_PRODUCT":return e=t.cart.some((function(e){return e.productId===a.payload}))?t.cart.map((function(e){return e.productId===a.payload?Object(ge.a)(Object(ge.a)({},e),{},{count:e.count+1}):Object(ge.a)({},e)})):[{productId:a.payload,count:1}].concat(Object(y.a)(t.cart)),localStorage.setItem("cart",JSON.stringify(e)),Object(ge.a)(Object(ge.a)({},t),{},{cart:e});case"CART/DELETE_ONE_PRODUCT":return e=Object(y.a)(t.cart).map((function(e){return e.productId===a.payload?e.count>1?{productId:e.productId,count:e.count-1}:null:e})).filter((function(e){return null!==e})),localStorage.setItem("cart",JSON.stringify(e)),{cart:e};case"CART/DELETE_PRODUCT":return e=Object(y.a)(t.cart).filter((function(e){return e.productId!==a.payload})),localStorage.setItem("cart",JSON.stringify(e)),{cart:e}}return t},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"FAVORITE/ADD_PRODUCT":return a=[].concat(Object(y.a)(e.favorites),[t.payload]),localStorage.setItem("favorites",JSON.stringify(a)),Object(ge.a)(Object(ge.a)({},e),{},{favorites:[].concat(Object(y.a)(e.favorites),[t.payload])});case"FAVORITE/DELETE_PRODUCT":return a=Object(y.a)(e.favorites).filter((function(e){return e!==t.payload})),localStorage.setItem("favorites",JSON.stringify(a)),Object(ge.a)(Object(ge.a)({},e),{},{favorites:a})}return e}}),ke=Object(_e.b)(je);l.a.render(n.a.createElement(C.a,{store:ke},n.a.createElement(o.a,null,n.a.createElement(he,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.cbd57e0a.chunk.js.map