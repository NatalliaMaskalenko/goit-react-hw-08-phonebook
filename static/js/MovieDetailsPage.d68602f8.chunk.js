(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{88:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(36);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},89:function(t,e,n){t.exports={form:"Form_form__17VRi",form__label:"Form_form__label__2kuJ9",form__input:"Form_form__input__1osmb",form__button:"Form_form__button__1QM19"}},90:function(t,e,n){t.exports={contacts__list:"ContactsList_contacts__list__3QjpM"}},91:function(t,e,n){t.exports={item:"ContactsItem_item__BP66K",text:"ContactsItem_text__1aOE3",button:"ContactsItem_button__2-a5R"}},92:function(t,e,n){t.exports={filter__label:"Filter_filter__label__21k6y",filter__input:"Filter_filter__input__2BVgD"}},95:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var a=n(88),r=n(0),c=n(19),o=n(25),i=n(1),s={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15,color:"rgba(194, 194, 194, 0.658)"},input:{backgroundColor:"rgba(194, 194, 194, 0.658)",borderRadius:5,padding:5,marginTop:10}};function l(){var t=Object(r.useState)(""),e=Object(a.a)(t,2),n=e[0],l=e[1],u=Object(r.useState)(""),b=Object(a.a)(u,2),m=b[0],f=b[1],j=Object(c.b)(),_=function(t){switch(t.target.name){case"email":l(t.target.value);break;case"password":f(t.target.value);break;default:alert("check input name please ")}};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j(Object(o.a)({email:n,password:m})),l(""),f("")},style:s.form,autoComplete:"off",children:[Object(i.jsxs)("label",{style:s.label,children:["E-mail",Object(i.jsx)("input",{style:s.input,type:"email",name:"email",value:n,onChange:_})]}),Object(i.jsxs)("label",{style:s.label,children:["Password",Object(i.jsx)("input",{style:s.input,type:"password",name:"password",value:m,onChange:_})]}),Object(i.jsx)("button",{type:"submit",children:"Sing In"})]})}},96:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var a=n(88),r=n(19),c=n(0),o=n(13),i=n(89),s=n.n(i),l=n(1);function u(){var t=Object(r.c)((function(t){return t.contacts.items})),e=Object(r.b)(),n=Object(c.useState)(""),i=Object(a.a)(n,2),u=i[0],b=i[1],m=Object(c.useState)(""),f=Object(a.a)(m,2),j=f[0],_=f[1],d=function(){b(""),_("")};return Object(l.jsxs)("form",{className:s.a.form,onSubmit:function(n){n.preventDefault();var a=u.toLowerCase();t.find((function(t){return t.name.toLowerCase()===a}))?alert("".concat(u," is already in contacts")):function(t,n){e(Object(o.a)(t,n))}({name:u,number:j}),d()},children:[Object(l.jsxs)("label",{className:s.a.form__label,children:["Name",Object(l.jsx)("input",{className:s.a.form__input,value:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){b(t.currentTarget.value)}})]}),Object(l.jsxs)("label",{className:s.a.form__label,children:["Number",Object(l.jsx)("input",{className:s.a.form__input,value:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){_(t.currentTarget.value)}})]}),Object(l.jsx)("button",{className:s.a.form__button,type:"submit",children:"Add contact"})]})}var b=n(90),m=n.n(b),f=n(91),j=n.n(f),_=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return Object(l.jsxs)("li",{className:j.a.item,children:[Object(l.jsx)("p",{className:j.a.text,children:e}),Object(l.jsx)("p",{className:j.a.text,children:n}),Object(l.jsx)("button",{className:j.a.button,onClick:a,children:"Delete"})]})};function d(){var t=Object(r.c)((function(t){var e=t.contacts,n=e.filter,a=e.items;if(n){var r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))}return a})),e=Object(r.b)();return Object(c.useEffect)((function(){e(Object(o.c)())}),[e]),Object(l.jsx)("ul",{className:m.a.contacts__list,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(l.jsx)(_,{name:a,number:r,onDeleteContact:function(){return function(t){return e(Object(o.b)(t))}(n)}},n)}))})}var p=n(47),O=n(92),h=n.n(O);function x(){var t=Object(r.c)((function(t){return t.contacts.filter})),e=Object(r.b)();return Object(l.jsxs)("label",{className:h.a.filter__label,children:["Find contacts by name",Object(l.jsx)("input",{className:h.a.filter__input,type:"text",value:t,onChange:function(t){return e(Object(p.a)(t.target.value))},placeholder:"Jacob Mercer"})]})}function v(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(u,{}),Object(l.jsx)("h2",{children:"Contacts"}),Object(l.jsx)(x,{}),Object(l.jsx)(d,{})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.d68602f8.chunk.js.map