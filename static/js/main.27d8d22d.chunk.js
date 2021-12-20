(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(2),i=c.n(s),o=(c(20),c(15)),l=(c(21),c(11)),r=c(0);function d(e){return Object(r.jsx)("li",{className:"navBar__list-li",children:Object(r.jsx)(l.Link,{onClick:e.handleClickLi,to:e.to,spy:!0,smooth:!0,children:Object(r.jsx)("label",{className:"navBar__Label",children:e.children})})})}function j(){var e=Object(a.useState)({clicked:!1}),t=Object(o.a)(e,2),c=t[0],s=t[1],i=function(){s({clicked:!1})};return Object(r.jsx)(n.a.Fragment,{children:Object(r.jsxs)("div",{className:"navBar",children:[Object(r.jsx)("div",{className:"button-menu",onClick:function(){s({clicked:!c.clicked})}}),Object(r.jsxs)("ul",{className:c.clicked?"navBar__list-clicked scale-in-top":"navBar__list",children:[Object(r.jsx)(d,{handleClickLi:i,to:"home",children:" Home"}),Object(r.jsx)(d,{handleClickLi:i,to:"about",children:" About me"}),Object(r.jsx)(d,{handleClickLi:i,to:"skills__textContainer",children:" Skills"}),Object(r.jsx)(d,{handleClickLi:i,to:"portfolio",children:" Portfolio"}),Object(r.jsx)(d,{handleClickLi:i,to:"contact",children:" Contact"})]})]})})}c(33);var b=c.p+"static/media/yo-redondo.0cf22abd.png";function h(){return Object(r.jsx)("div",{className:"home",children:Object(r.jsxs)("div",{className:"home-container",children:[Object(r.jsx)("div",{className:"img-container",children:Object(r.jsx)("img",{src:b,alt:""})}),Object(r.jsxs)("div",{className:"home__textContainer",children:[Object(r.jsx)("h1",{children:"Victor Gea "}),Object(r.jsx)("h2",{children:"Frontend Developer"})]})]})})}c(34);function m(){return Object(r.jsx)("div",{className:"contact",children:Object(r.jsxs)("div",{className:"logos__container",children:[Object(r.jsxs)("div",{className:"linkedin",children:[" ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/victor-gea-villa",target:"_blank",rel:"noreferrer"})]}),Object(r.jsxs)("div",{className:"github",children:[" ",Object(r.jsx)("a",{href:"http://www.github.com/vpandam",target:"_blank",rel:"noreferrer"})]})]})})}c(35);function p(){return Object(r.jsx)("div",{className:"about",children:Object(r.jsxs)("div",{className:"about__textContainer",children:[Object(r.jsx)("h1",{children:"About me"}),Object(r.jsxs)("p",{children:["Hi! I'm a frontend developer with great passion for technology and programming.",Object(r.jsx)("br",{})," I have a constant desire to acquire knowledge and I'm eager to contribute and develop myself as a professional of the industry.",Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{className:"download-button",children:[Object(r.jsx)("a",{href:"CV_Victor-Gea.pdf",download:!0,target:"",children:"Download CV"}),Object(r.jsx)("label",{className:"download-icon"})]})]})})}c(36),c(37);function x(e){return i.a.createPortal(Object(r.jsx)("div",{id:"myModal"+e.id,className:"modal",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("span",{id:"close-modal-span"+e.id,className:"close",children:"\xd7"}),Object(r.jsx)("div",{className:"modal-content__flex",children:e.children})]})}),document.getElementById("modal"))}var O=function(e){return Object(r.jsx)("div",{className:"project-container",children:Object(r.jsxs)("div",{className:"project "+e.projectClass,children:[Object(r.jsx)("button",{onClick:function(){var t=document.getElementById("myModal"+e.id);t.style.display="block",t.classList.add("showModal"),e.onModalClick(e.id)}}),Object(r.jsxs)(x,{id:e.id,children:[Object(r.jsx)("div",{className:"modal__project-image "+e.projectClass+" contain"}),Object(r.jsx)("div",{className:"modal__text-container",children:Object(r.jsxs)("p",{children:[e.projectDescription,Object(r.jsx)("br",{}),e.projectDescription2,Object(r.jsx)("br",{}),e.projectDescription3]})}),Object(r.jsxs)("div",{className:"link-buttons__container",children:[Object(r.jsx)("div",{className:"gitHub__project-link button__modal",children:Object(r.jsx)("a",{href:e.projectGithubLink,target:"_blank",rel:"noreferrer",children:" "})}),Object(r.jsx)("div",{className:"project-link button__modal",children:Object(r.jsx)("a",{href:e.projectDeployLink,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("p",{className:"modal__button_text",children:"Visit site"})})})]})]})]})})};function u(){var e=function(e){var t=document.getElementById("myModal"+e),c=document.getElementById("close-modal-span"+e);window.onclick=function(e){e.target!==t&&e.target!==c||(t.style.display="none")}};return Object(r.jsxs)("div",{className:"portfolio",children:[Object(r.jsx)("div",{className:"text__container",children:Object(r.jsx)("h1",{children:"Portfolio"})}),Object(r.jsxs)("div",{className:"project__container",children:[Object(r.jsx)(O,{projectClass:"jap",projectDescription:"A web app made with Next.js for learning japanese hiragana and katakana.",projectDescription2:"Once you have selected the syllables you want\r to practice, the app loads the symbol and a gif showing how to write it.",id:"2",onModalClick:e,projectDeployLink:"https://jap-learning.netlify.app/",projectGithubLink:"https://github.com/VPandam/Jap-learning-nextjs"}),Object(r.jsx)(O,{id:"3",projectClass:"rick-and-morty",projectDescription:"It is a Rick and Morty memory game made with\r Next.js and the Rick and Morty API.",projectDescription2:" When the game starts, the API is called and gets photos of \r random characters in the series.\r Making this game i learnt about CSS animation and API calling.",onModalClick:e,projectDeployLink:"https://rick-morty-memo.netlify.app",projectGithubLink:"https://github.com/VPandam/rick-morty-memo-nextjs"}),Object(r.jsx)(O,{id:"4",onModalClick:e,projectClass:"badges",projectDescription:"A badge management system made with ReactJS.",projectDescription2:"The API is made with Java Spring, allows you to create, read, update \r and delete badges.",projectDescription3:"The API and the DB are deployed in heroku so it takes a while to load\r the first time.",projectDeployLink:"https://badge-management.netlify.app/",projectGithubLink:"https://github.com/VPandam/Badge-Management-System",additionalLink:"https://github.com/VPandam/Badges-API"}),Object(r.jsx)(O,{projectClass:"mobile-first",projectDescription:"The website of Batatabit, in this web you can \r consult the different plans, watch graphics and learn about\r what the app offers you.\r This is a project i made for learning html, css and responsive design. \r Its part of the frontend developer school in platzi, an online academy.",id:"1",onModalClick:e,projectDeployLink:"https://wonderful-mcclintock-aa79d0.netlify.app/",projectGithubLink:"https://github.com/VPandam/Mobile-first"})]})]})}c(38);function f(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"skills__textContainer",children:Object(r.jsx)("h1",{children:"Skills"})}),Object(r.jsxs)("div",{className:"skills__iconContainer",children:[Object(r.jsx)("div",{className:"html"}),Object(r.jsx)("div",{className:"css"}),Object(r.jsx)("div",{className:"js"}),Object(r.jsx)("div",{className:"sass"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"react"}),Object(r.jsx)("div",{className:"nextjs"}),Object(r.jsx)("div",{className:"git"}),Object(r.jsx)("div",{className:"terminal"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"java"}),Object(r.jsx)("div",{className:"spring"}),Object(r.jsx)("div",{className:"responsive"}),Object(r.jsx)("div",{className:"csharp"})]})]})}c(39);function v(){return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(j,{scrollTop:function(){window.scrollTo(0,0)}}),Object(r.jsx)(h,{}),Object(r.jsx)(p,{}),Object(r.jsx)(f,{}),Object(r.jsx)(u,{}),Object(r.jsx)(m,{})]})}var g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(r.jsx)(v,{}),document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.27d8d22d.chunk.js.map