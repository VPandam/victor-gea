(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(7),s=a.n(i),l=(a(23),a(2)),o=a(3),r=a(5),j=a(4),d=(a(24),a(6)),b=a(0),h=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e.handleClickLi=function(){e.setState({clicked:!1})},e.handleClickLi=function(){e.setState({clicked:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsxs)("div",{className:"navBar",children:[Object(b.jsx)("div",{className:"button-menu",onClick:this.handleClick}),Object(b.jsxs)("div",{className:"button-up",children:[" ",Object(b.jsx)(d.Link,{to:"home",spy:!0,smooth:!0})]}),Object(b.jsxs)("ul",{className:this.state.clicked?"navBar__list-clicked":"navBar__list",children:[Object(b.jsx)("li",{className:"navBar__list-li",children:Object(b.jsx)(d.Link,{onClick:this.handleClickLi,to:"home",spy:!0,smooth:!0,children:Object(b.jsx)("label",{className:"navBar__Label",children:"Home"})})}),Object(b.jsx)("li",{className:"navBar__list-li",children:Object(b.jsx)(d.Link,{onClick:this.handleClickLi,to:"about",spy:!0,smooth:!0,children:Object(b.jsx)("label",{className:"navBar__Label",children:"About me"})})}),Object(b.jsx)("li",{className:"navBar__list-li",children:Object(b.jsx)(d.Link,{onClick:this.handleClickLi,to:"skills__textContainer",spy:!0,smooth:!0,offset:-100,children:Object(b.jsx)("label",{className:"navBar__Label",children:"Skills"})})}),Object(b.jsx)("li",{className:"navBar__list-li",children:Object(b.jsx)(d.Link,{onClick:this.handleClickLi,to:"portfolio",spy:!0,smooth:!0,children:Object(b.jsx)("label",{className:"navBar__Label",children:"Portfolio"})})}),Object(b.jsx)("li",{className:"navBar__list-li",children:Object(b.jsx)(d.Link,{onClick:this.handleClickLi,to:"contact",spy:!0,smooth:!0,children:Object(b.jsx)("label",{className:"navBar__Label",children:"Contact"})})})]})]})})}}]),a}(n.a.Component),m=(a(36),function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home__textContainer",children:[Object(b.jsx)("h1",{children:"Victor Gea "}),Object(b.jsx)("h2",{children:"Frontend Developer"})]})})}}]),a}(n.a.Component)),p=(a(37),function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"contact",children:Object(b.jsxs)("div",{className:"logos__container",children:[Object(b.jsxs)("div",{className:"linkedin",children:[" ",Object(b.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank"})]}),Object(b.jsxs)("div",{className:"github",children:[" ",Object(b.jsx)("a",{href:"http://www.github.com",target:"_blank"})]})]})})}}]),a}(n.a.Component)),u=(a(38),function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"about",children:Object(b.jsxs)("div",{className:"about__textContainer",children:[Object(b.jsx)("h1",{children:"About me"}),Object(b.jsxs)("p",{children:["Hi! I'm a frontend developer with great passion for technology and programming.",Object(b.jsx)("br",{})," I have a constant desire to acquire knowledge and I'm eager to contribute and develop myself as a professional of the industry.",Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"download-button",children:[Object(b.jsx)("a",{href:"panda.png",download:!0,target:"",children:"Download CV"}),Object(b.jsx)("label",{className:"download-icon"})]})]})})}}]),a}(n.a.Component));a(39),a(40);var O=function(e){return s.a.createPortal(Object(b.jsx)("div",{id:"myModal"+e.id,className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("span",{id:"close-modal-span"+e.id,className:"close",children:"\xd7"}),Object(b.jsx)("div",{className:"modal-content__flex",children:e.children})]})}),document.getElementById("modal"))};var x=function(e){return Object(b.jsx)("div",{className:"project-container",children:Object(b.jsxs)("div",{className:"project "+e.projectClass,children:[Object(b.jsx)("button",{onClick:function(){var t=document.getElementById("myModal"+e.id);t.style.display="block",t.classList.add("showModal"),e.onModalClick(e.id)}}),Object(b.jsxs)(O,{id:e.id,children:[Object(b.jsx)("div",{className:"modal__project-image "+e.projectClass+" contain"}),Object(b.jsx)("div",{className:"modal__text-container",children:Object(b.jsxs)("p",{children:[e.projectDescription,Object(b.jsx)("br",{}),e.projectDescription2,Object(b.jsx)("br",{}),e.projectDescription3]})}),Object(b.jsxs)("div",{className:"link-buttons__container",children:[Object(b.jsx)("div",{className:"gitHub__project-link button__modal",children:Object(b.jsx)("a",{href:e.projectGithubLink,target:"_blank",rel:"noreferrer",children:" "})}),Object(b.jsx)("div",{className:"project-link button__modal",children:Object(b.jsx)("a",{href:e.projectDeployLink,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("p",{className:"modal__button_text",children:"Visit site"})})})]})]})]})})},v=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"onModalClick",value:function(e){var t=document.getElementById("myModal"+e),a=document.getElementById("close-modal-span"+e);window.onclick=function(e){e.target!==t&&e.target!==a||(t.style.display="none")}}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"portfolio",children:[Object(b.jsx)("div",{className:"text__container",children:Object(b.jsx)("h1",{children:"Portfolio"})}),Object(b.jsxs)("div",{className:"project__container",children:[Object(b.jsx)(x,{id:"4",onModalClick:this.onModalClick,projectClass:"badges",projectDescription:"A badge management system made with ReactJS.",projectDescription2:"The API is made with Java Spring, allows you to create, read, update \r and delete badges.",projectDescription3:"The API and the DB are deployed in heroku so it takes a while to load\r the first time.",projectDeployLink:"https://suspicious-gates-57218c.netlify.app/",projectGithubLink:"https://github.com/VPandam/Badge-Management-System",additionalLink:"https://github.com/VPandam/Badges-API"}),Object(b.jsx)(x,{id:"3",projectClass:"rick-and-morty",projectDescription:"It is a Rick and Morty memory game made with JavaScript using \r React and the Rick and Morty API.",projectDescription2:" When the game starts, the API is called and gets photos of \r random characters in the series.\r Making this game i learnt about CSS animation and API calling.",onModalClick:this.onModalClick,projectDeployLink:"https://hungry-saha-1d15ce.netlify.app/",projectGithubLink:"https://github.com/VPandam/rick-and-morty-memo"}),Object(b.jsx)(x,{projectClass:"jap",projectDescription:"Its a very simple game made for learning Unity with C#. I learnt\r about object oriented programming, rendering in real time and procedural generation.",id:"2",onModalClick:this.onModalClick,projectDeployLink:"https://zealous-hamilton-8b56ff.netlify.app/",projectGithubLink:"https://github.com/VPandam/Japanese-learning"}),Object(b.jsx)(x,{projectClass:"mobile-first",projectDescription:"The website of Batatabit, in this web you can \r consult the different plans, watch graphics and learn about\r what the app offers you.\r This is a project i made for learning html, css and responsive design. \r Its part of the frontend developer school in platzi, an online academy.",id:"1",onModalClick:this.onModalClick,projectDeployLink:"https://wonderful-mcclintock-aa79d0.netlify.app/",projectGithubLink:"https://github.com/VPandam/Mobile-first"})]})]})}}]),a}(n.a.Component),k=(a(41),function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"skills",children:[Object(b.jsx)("div",{className:"skills__textContainer",children:Object(b.jsx)("h1",{children:"Skills"})}),Object(b.jsxs)("div",{className:"skills__iconContainer",children:[Object(b.jsx)("div",{className:"html"}),Object(b.jsx)("div",{className:"css"}),Object(b.jsx)("div",{className:"js"}),Object(b.jsx)("div",{className:"responsive"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"react"}),Object(b.jsx)("div",{className:"npm"}),Object(b.jsx)("div",{className:"git"}),Object(b.jsx)("div",{className:"terminal"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"java"}),Object(b.jsx)("div",{className:"spring"}),Object(b.jsx)("div",{className:"postgres"}),Object(b.jsx)("div",{className:"csharp"})]})]})}}]),a}(n.a.Component)),f=(a(42),function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).scrollTop=function(){window.scrollTo(0,0)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(h,{scrollTop:this.scrollTop}),Object(b.jsx)(m,{}),Object(b.jsx)(u,{}),Object(b.jsx)(k,{}),Object(b.jsx)(v,{}),Object(b.jsx)(p,{})]})}}]),a}(n.a.Component)),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(f,{}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.a07adf72.chunk.js.map