"use strict";(self.webpackChunkfreeday_doc=self.webpackChunkfreeday_doc||[]).push([[581],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},c="Slack",s={unversionedId:"bot-slack",id:"bot-slack",title:"Slack",description:"You have to create a Slack app to use the Slack bot in Freeday.",source:"@site/docs/bot-slack.md",sourceDirName:".",slug:"/bot-slack",permalink:"/docs/bot-slack",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/deployment"},next:{title:"First usage",permalink:"/docs/first-usage"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack"},"Slack"),(0,o.kt)("p",null,"You have to create a Slack app to use the Slack bot in Freeday."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/apps"},"Slack apps page")," and hit ",(0,o.kt)("em",{parentName:"li"},"Create New App"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("em",{parentName:"li"},"From App Manifest")),(0,o.kt)("li",{parentName:"ul"},"Select your Workspace"),(0,o.kt)("li",{parentName:"ul"},"Edit the app manifest so it looks like the one below")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"_metadata:\n  major_version: 1\n  minor_version: 1\ndisplay_information:\n  name: Freeday\n  description: 'Dayoff management with chat bots'\n  background_color: '#30404d'\nfeatures:\n  app_home:\n    home_tab_enabled: false\n    messages_tab_enabled: true\n    messages_tab_read_only_enabled: false\n  bot_user:\n    display_name: Freeday\n    always_online: true\noauth_config:\n  redirect_urls:\n    # change the URL here\n    - https://public.freeday.url/\n  scopes:\n    bot:\n      - chat:write\n      - im:history\n      - im:read\n      - im:write\n      - team:read\n      - users:read\n      - channels:read\n      - groups:read\nsettings:\n  event_subscriptions:\n    # change the URL here\n    request_url: https://public.freeday.url/api/slack/events\n    bot_events:\n      - message.im\n  interactivity:\n    is_enabled: true\n    # change the URL here\n    request_url: https://public.freeday.url/api/slack/events\n  org_deploy_enabled: false\n  socket_mode_enabled: false\n  token_rotation_enabled: false\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"event_subscriptions")," URL must be validated in Slack app configuration.\nTo activate the URL, Freeday must be running and listening to Slack API calls.")),(0,o.kt)("p",null,"Then go in the ",(0,o.kt)("em",{parentName:"p"},"Basic Information")," section. Here you will find various credentials that need to be copied into Freeday's environment file."),(0,o.kt)("p",null,"Finally, go in the ",(0,o.kt)("em",{parentName:"p"},"Install App")," page, and hit the ",(0,o.kt)("em",{parentName:"p"},"Install to Workspace")," button. A page will open displaying the scopes granted to the Freeday app. You can validate by clicking the ",(0,o.kt)("em",{parentName:"p"},"Allow")," button. The Bot Access Token (also needed in Freeday's environment file) will then will be displayed to you."))}m.isMDXComponent=!0}}]);