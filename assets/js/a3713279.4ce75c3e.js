"use strict";(self.webpackChunkfreeday_doc=self.webpackChunkfreeday_doc||[]).push([[720],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},l="Deployment",i={unversionedId:"deployment",id:"deployment",title:"Deployment",description:"Docker",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/docs/deployment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Slack",permalink:"/docs/bot-slack"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"docker-compose.yml",id:"docker-composeyml",level:3},{value:".env",id:"env",level:3},{value:"Production",id:"production",level:2},{value:"Reverse proxy",id:"reverse-proxy",level:3},{value:"Localhost",id:"localhost",level:2},{value:"Slack bot",id:"slack-bot",level:3},{value:"Running Ngrok",id:"running-ngrok",level:4},{value:"Configuring Slack app",id:"configuring-slack-app",level:4}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Freeday can be easily deployed using Docker images."),(0,o.kt)("p",null,"You can find below an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file and its ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," companion."),(0,o.kt)("p",null,"Edit configuration as you wish then run the whole thing using ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,o.kt)("h3",{id:"docker-composeyml"},"docker-compose.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\n\nservices:\n  freeday:\n    image: freedayapp/freeday:latest\n    container_name: freeday\n    restart: always\n    env_file:\n      - .env\n    networks:\n      - freeday-network\n    ports:\n      - 8787:8787\n  mongo:\n    image: mongo\n    container_name: mongo\n    restart: always\n    command: mongod --quiet --logpath /dev/null\n    networks:\n      - freeday-network\n\nnetworks:\n  freeday-network:\n    name: freeday\n")),(0,o.kt)("h3",{id:"env"},".env"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"##\n## General\n##\n\n# Environment (prod or dev)\n# If prod router will serve the web client build\nENVIRONMENT=prod\n\n# Public URL on which Freeday is reachable\nPUBLIC_URL=https://freeday.domain.com/\n\n# Port on which Freeday API will run\nPORT=8787\n\n# Path to logs directory\nLOG_DIR=/var/log/freeday\n\n##\n## Database\n##\n\n# Mongo database URL\nMONGO_URL=mongodb://mongo:27017/freeday\n\n# Mongo test database URL\n# This database is used when running tests\n# Not required in production\n#MONGO_TEST_URL=mongodb://freeday-mongo:27017/freeday-test\n\n##\n## Slack bot\n##\n\n# If Slack bot should be enabled\nSLACK_ENABLED=true\n\n# Slack configuration\nSLACK_CLIENT_ID=1234567891234.1234567891234\nSLACK_CLIENT_SECRET=12345678912341234567891234\nSLACK_SIGNING_SECRET=abc123abc123abc123abc123abc123\nSLACK_ACCESS_TOKEN=xoxb-12345678-12345678-abc123abc123abc123abc123\n\n##\n## Dialogflow\n##\n\n# If Dialogflow NLU should be enabled\nDIALOGFLOW_ENABLED=false\n\n# Dialogflow configuration\n#DIALOGFLOW_KEYFILE=/path/to/keyfile.json\n#DIALOGFLOW_ENDPOINT=europe-west1-dialogflow.googleapis.com\n#DIALOGFLOW_PROJECT=my-project\n#DIALOGFLOW_LOCATION=europe-west1\n#DIALOGFLOW_ENVIRONMENT=production\n#DIALOGFLOW_USER=my-user\n#DIALOGFLOW_SESSION=1234\n#DIALOGFLOW_LANGUAGE=en\n")),(0,o.kt)("h2",{id:"production"},"Production"),(0,o.kt)("h3",{id:"reverse-proxy"},"Reverse proxy"),(0,o.kt)("p",null,"When deploying Freeday in production, it is recommended to have a single domain pointing to your server,\nand a reverse proxy distributing the app."),(0,o.kt)("p",null,"Let's say you're using this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"PUBLIC_URL=https://freeday.domain.com/\n")),(0,o.kt)("p",null,"Then your Nginx reverse proxy configuration would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n  listen 80;\n  listen [::]:80;\n\n  server_name freeday.domain.com;\n\n  return 301 https://$host$request_uri;\n}\n\nserver {\n  listen 443 ssl;\n  listen [::]:443 ssl;\n\n  server_name freeday.domain.com;\n\n  ssl_certificate /path/to/ssl/fullchain.pem;\n  ssl_certificate_key /path/to/ssl/privkey.pem;\n\n  location / {\n    proxy_pass http://127.0.0.1:8787;\n    proxy_http_version 1.1;\n    proxy_set_header Host $host;\n  }\n}\n")),(0,o.kt)("h2",{id:"localhost"},"Localhost"),(0,o.kt)("p",null,"When running Freeday on localhost, some additional steps are required so everything works properly."),(0,o.kt)("h3",{id:"slack-bot"},"Slack bot"),(0,o.kt)("p",null,"In a local environment, the Freeday API URL will be something like ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8787/"),".\nThe problem is that Slack API can't reach your Freeday instance through this URL.\nTherefore you need to setup some kind of proxy / tunnel and set the correct URL in the Slack app manifest so it ca communicates with your Freeday instance."),(0,o.kt)("p",null,"Here we're gonna use ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"Ngrok"),"."),(0,o.kt)("h4",{id:"running-ngrok"},"Running Ngrok"),(0,o.kt)("p",null,"Start a Ngrok tunnel targetting the API port (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"8787"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ngrok http 8787\n")),(0,o.kt)("p",null,"Then get the tunnel ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," URL in the Ngrok console. It should look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1234-12-34-123-12.ngrok.io"),"."),(0,o.kt)("h4",{id:"configuring-slack-app"},"Configuring Slack app"),(0,o.kt)("p",null,"Go in to the ",(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"Slack apps page")," and edit your Freeday app."),(0,o.kt)("p",null,"Put the Ngrok ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," link in the ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth_config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"event_subscriptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"interactivity")," sections. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_subscriptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"interactivity")," sections, be sure to keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/slack/events")," path. Values should look like the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\noauth_config:\n  redirect_urls:\n    - https://1234-12-34-123-12.ngrok.io/\n# ...\nsettings:\n  event_subscriptions:\n    request_url: https://1234-12-34-123-12.ngrok.io/api/slack/events\n# ...\n  interactivity:\n    request_url: https://1234-12-34-123-12.ngrok.io/api/slack/events\n# ...\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The ",(0,o.kt)("inlineCode",{parentName:"p"},"event_subscriptions")," URL must be validated in Slack app configuration.\nTo activate the URL, Freeday must be running and listening to Slack API calls.")))}d.isMDXComponent=!0}}]);