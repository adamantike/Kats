(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8740],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5349:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={id:"plugins",title:"Hydra plugins",sidebar_label:"Hydra plugins"},l={unversionedId:"advanced/plugins",id:"version-0.11/advanced/plugins",isDocsHomePage:!1,title:"Hydra plugins",description:"Hydra has a plugin architecture.",source:"@site/versioned_docs/version-0.11/advanced/plugins.md",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/Kats/docs/0.11/advanced/plugins",editUrl:"https://github.com/facebookresearch/kats/edit/master/website/versioned_docs/version-0.11/advanced/plugins.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1578885213,formattedLastUpdatedAt:"1/12/2020",sidebar_label:"Hydra plugins",frontMatter:{id:"plugins",title:"Hydra plugins",sidebar_label:"Hydra plugins"},sidebar:"version-0.11/docs",previous:{title:"Config search path",permalink:"/Kats/docs/0.11/advanced/search_path"},next:{title:"Compose API",permalink:"/Kats/docs/0.11/advanced/compose_api"}},s=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra has a plugin architecture.\nPlugin types includes:"),(0,i.kt)("h2",{id:"sweeper"},"Sweeper"),(0,i.kt)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),(0,i.kt)("p",null,"And creates 4 jobs with the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),(0,i.kt)("h2",{id:"launcher"},"Launcher"),(0,i.kt)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),(0,i.kt)("h2",{id:"searchpathplugin"},"SearchPathPlugin"),(0,i.kt)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),(0,i.kt)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),(0,i.kt)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed."))}u.isMDXComponent=!0}}]);