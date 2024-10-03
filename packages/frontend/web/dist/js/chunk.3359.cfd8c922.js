"use strict";(globalThis.webpackChunk_affine_web=globalThis.webpackChunk_affine_web||[]).push([[3359],{53653:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(4285),n=i(24312),r=i(86326);function l(){let e=(0,n.s9)(),t=(0,r.useMemo)(()=>n.YZ.find(t=>t.tag===e.language),[e.language]),i=(0,r.useMemo)(()=>n.YZ.map(e=>({tag:e.tag,originalName:e.originalName,name:e.name,Completeness:e.completeRate})),[]),l=(0,a.V)(async t=>{await e.changeLanguage(t)},[e]);return(0,r.useEffect)(()=>{t&&(document.documentElement.lang=t.tag)},[t]),(0,r.useMemo)(()=>({currentLanguage:t,languagesList:i,onLanguageChange:l}),[t,i,l])}},22563:(e,t,i)=>{i.d(t,{h:()=>l});var a=i(10980),n=i(98504),r=i(86326);function l(e){let t=(0,a.h1)(n.q),[i,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{if(!e){l(null);return}let i=t.open({metadata:e});return l(i.workspace),()=>{i.dispose()}},[e,t]),i}},13359:(e,t,i)=>{i.r(t),i.d(t,{AllWorkspaceModals:()=>aq,AuthModal:()=>aG,CurrentWorkspaceModals:()=>aT,Setting:()=>aU,SignOutConfirmModal:()=>aD});var a,n,r,l=i(36870),s=i(4588),o=i(81427),c=i(21823),d=i(10980),f=i(17049),p=i(61569),u=i(98504),m=i(5863),h=i(86326),C=i(77846),x=i(73679),g=i(62759),y=i(99646),j=i(4285),v=i(94002),b=i(52490),_=i(24312);i(56964);var k=i(21038),w=i(59481),S=i(10330),F=i(7776),A="_457yde1";let N=new b.k("CreateWorkspaceModal"),M=({loading:e,onConfirmName:t,...i})=>{let a=(0,_.s9)(),[n,r]=(0,h.useState)(""),[o,f]=(0,h.useState)(!0),u=(0,d.h1)(w.uR).session,x=(0,p.S)(u.status$),g=(0,m.Xr)(C.W7),j=(0,h.useCallback)(()=>{g(e=>({...e,openModal:!0}))},[g]),v=(0,h.useCallback)(e=>"authenticated"!==x?j():f(e),[x,j]),b=(0,h.useCallback)(()=>{t(n,o?c.j.AFFINE_CLOUD:c.j.LOCAL)},[o,t,n]),k=(0,h.useCallback)(e=>{"Enter"===e.key&&n&&b()},[b,n]);return(0,l.jsxs)(y.uo,{defaultOpen:!0,title:a["com.affine.nameWorkspace.title"](),description:a["com.affine.nameWorkspace.description"](),cancelText:a["com.affine.nameWorkspace.button.cancel"](),confirmText:a["com.affine.nameWorkspace.button.create"](),confirmButtonOptions:{variant:"primary",loading:e,disabled:!n,"data-testid":"create-workspace-create-button"},closeButtonOptions:{"data-testid":"create-workspace-close-button"},onConfirm:b,...i,children:[(0,l.jsx)("div",{className:"_457yde2",children:(0,l.jsx)(s.eu,{size:56,name:n,colorfulFallback:!0})}),(0,l.jsxs)("div",{className:"_457yde3",children:[(0,l.jsx)("div",{className:A,children:a["com.affine.nameWorkspace.subtitle.workspace-name"]()}),(0,l.jsx)(s.pd,{autoFocus:!0,"data-testid":"create-workspace-input",onKeyDown:k,placeholder:a["com.affine.nameWorkspace.placeholder"](),maxLength:64,minLength:0,onChange:r,size:"large"})]}),(0,l.jsxs)("div",{className:"_457yde4",children:[(0,l.jsx)("div",{className:A,children:a["AFFiNE Cloud"]()}),(0,l.jsxs)("div",{className:"_457yde5",children:[(0,l.jsxs)("div",{className:"_457yde6",children:[(0,l.jsxs)("div",{className:"_457yde7",children:[(0,l.jsx)("span",{children:a["com.affine.nameWorkspace.affine-cloud.title"]()}),(0,l.jsx)(s.dO,{checked:o,onChange:v,disabled:!0})]}),(0,l.jsx)("div",{className:"_457yde8",children:a["com.affine.nameWorkspace.affine-cloud.description"]()})]}),(0,l.jsx)("div",{className:"_457ydea",children:(0,l.jsx)(F.u,{})})]}),(0,l.jsx)("a",{className:"_457yde9",href:"https://affine.pro/download",target:"_blank",rel:"noreferrer",children:a["com.affine.nameWorkspace.affine-cloud.web-tips"]()})]})]})},B=({mode:e,onClose:t,onCreate:i})=>{let[a,n]=(0,h.useState)(),r=(0,_.s9)(),c=(0,d.h1)(u.q),[f,p]=(0,h.useState)(!1);(0,h.useLayoutEffect)(()=>{let a=!1;return"add"===e?(async()=>{if(!o.Ok)return;N.info("load db file"),n(void 0);let e=await o.Ok.dialog.loadDBFile();e.workspaceId&&!a?((0,S.tE)(e.workspaceId),c.list.revalidate(),i(e.workspaceId)):(e.error||e.canceled)&&(e.error&&(0,s.oR)(r[e.error]()),t())})().catch(e=>{console.error(e)}):"new"===e?n("name-workspace"):n(void 0),()=>{a=!0}},[e,t,i,r,c]);let m=(0,j.V)(async(e,t)=>{if(v.u4.$.$.$.createWorkspace({flavour:t}),!f){p(!0);{let{meta:a,defaultDocId:n}=await (0,k.R)(c,t,e);i(a.id,n)}p(!1)}},[f,i,c]),C=(0,h.useCallback)(e=>{e||t()},[t]);return"name-workspace"===a?(0,l.jsx)(M,{loading:f,open:!1!==e&&!!a,onOpenChange:C,onConfirmName:m}):(0,l.jsx)(y.aF,{open:!1!==e&&!!a,width:560,onOpenChange:C,contentOptions:{style:{padding:"10px"}},children:(0,l.jsx)("div",{className:"_457yde0"})})};var $=i(38711),L=i(99971);function I(){return(0,l.jsxs)("svg",{width:"400",height:"220",viewBox:"0 0 400 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_5877_92351)",children:[(0,l.jsx)("g",{filter:"url(#filter0_d_5877_92351)",children:(0,l.jsx)("rect",{y:"0.0753174",width:"400",height:"220",fill:(0,L.Vg)("backgroundPrimaryColor")})}),(0,l.jsx)("rect",{x:"16",y:"10",width:"64",height:"32",rx:"12",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsxs)("g",{filter:"url(#filter1_d_5877_92351)",children:[(0,l.jsx)("rect",{x:"20",y:"14",width:"24",height:"24",rx:"8",fill:(0,L.Vg)("backgroundPrimaryColor"),shapeRendering:"crispEdges"}),(0,l.jsx)("g",{clipPath:"url(#clip1_5877_92351)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.8334 18.7084C26.5677 18.7084 25.5417 19.7344 25.5417 21V31C25.5417 32.2657 26.5677 33.2917 27.8334 33.2917H36.1667C37.4323 33.2917 38.4584 32.2657 38.4584 31V21C38.4584 19.7344 37.4323 18.7084 36.1667 18.7084H27.8334ZM26.7917 21C26.7917 20.4247 27.2581 19.9584 27.8334 19.9584H36.1667C36.742 19.9584 37.2084 20.4247 37.2084 21V31C37.2084 31.5753 36.742 32.0417 36.1667 32.0417H27.8334C27.2581 32.0417 26.7917 31.5753 26.7917 31V21ZM29.5 22.0417C29.1548 22.0417 28.875 22.3215 28.875 22.6667C28.875 23.0119 29.1548 23.2917 29.5 23.2917H32.4167C32.7619 23.2917 33.0417 23.0119 33.0417 22.6667C33.0417 22.3215 32.7619 22.0417 32.4167 22.0417H29.5ZM28.875 25.5834C28.875 25.2382 29.1548 24.9584 29.5 24.9584H34.5C34.8452 24.9584 35.125 25.2382 35.125 25.5834C35.125 25.9286 34.8452 26.2084 34.5 26.2084H29.5C29.1548 26.2084 28.875 25.9286 28.875 25.5834ZM29.5 27.875C29.1548 27.875 28.875 28.1549 28.875 28.5C28.875 28.8452 29.1548 29.125 29.5 29.125H33.6667C34.0119 29.125 34.2917 28.8452 34.2917 28.5C34.2917 28.1549 34.0119 27.875 33.6667 27.875H29.5Z",fill:(0,L.Vg)("primaryColor")})})]}),(0,l.jsx)("g",{clipPath:"url(#clip2_5877_92351)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M59.9735 19.9584C59.1137 19.9584 58.4167 20.6554 58.4167 21.5152C58.4167 22.3751 59.1137 23.0721 59.9735 23.0721C60.8334 23.0721 61.5304 22.3751 61.5304 21.5152C61.5304 20.6554 60.8334 19.9584 59.9735 19.9584ZM57.1667 21.5152C57.1667 19.965 58.4234 18.7084 59.9735 18.7084C61.4604 18.7084 62.6772 19.8644 62.7742 21.3266C63.4762 21.3273 64.1503 21.3383 64.8517 21.5077C65.6295 21.6956 66.4061 22.0674 67.3305 22.7607L67.3475 22.7734L67.3636 22.7873C68.669 23.9126 69.3224 25.7317 69.326 27.4358H70.7084C71.0536 27.4358 71.3334 27.7156 71.3334 28.0608V31.9881C71.3334 32.3333 71.0536 32.6131 70.7084 32.6131H66.781C66.4359 32.6131 66.156 32.3333 66.156 31.9881V28.0608C66.156 27.7156 66.4359 27.4358 66.781 27.4358H68.076C68.0724 26.0148 67.5229 24.5853 66.563 23.7476C65.7506 23.1409 65.1313 22.8612 64.5582 22.7227C63.9652 22.5795 63.3858 22.5766 62.5918 22.5766V22.5289C62.2585 23.3891 61.5135 24.0442 60.5986 24.2523V27.5056C61.8479 27.7898 62.7804 28.9073 62.7804 30.2427C62.7804 31.7928 61.5237 33.0495 59.9735 33.0495C58.4234 33.0495 57.1667 31.7928 57.1667 30.2427C57.1667 28.9073 58.0992 27.7897 59.3486 27.5056V24.2523C58.0992 23.9682 57.1667 22.8506 57.1667 21.5152ZM59.9735 28.6858C59.1137 28.6858 58.4167 29.3828 58.4167 30.2427C58.4167 31.1025 59.1137 31.7995 59.9735 31.7995C60.8334 31.7995 61.5304 31.1025 61.5304 30.2427C61.5304 29.3828 60.8334 28.6858 59.9735 28.6858ZM67.406 31.3631V28.6858H70.0834V31.3631H67.406Z",fill:(0,L.Vg)("iconColor")})}),(0,l.jsx)("rect",{x:"92",y:"10",width:"128.528",height:"32",rx:"12",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M238.998 23.4697C239.29 23.1768 239.765 23.1768 240.058 23.4697L244.174 27.5858C244.37 27.781 244.686 27.781 244.881 27.5858L248.998 23.4697C249.29 23.1768 249.765 23.1768 250.058 23.4697C250.351 23.7626 250.351 24.2374 250.058 24.5303L245.942 28.6464C245.161 29.4275 243.895 29.4275 243.114 28.6464L238.998 24.5303C238.705 24.2374 238.705 23.7626 238.998 23.4697Z",fill:(0,L.Vg)("iconColor")}),(0,l.jsx)("g",{filter:"url(#filter2_di_5877_92351)",children:(0,l.jsx)("rect",{x:"107.402",y:"32.1934",width:"211.325",height:"221.308",rx:"8",stroke:(0,L.Vg)("borderColor"),fill:(0,L.Vg)("backgroundOverlayPanelColor")})}),(0,l.jsx)("rect",{x:"120",y:"49",width:"183.726",height:"18",rx:"4",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsx)("rect",{x:"120",y:"77",width:"183.726",height:"18",rx:"4",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsx)("rect",{x:"120",y:"105",width:"183.726",height:"18",rx:"4",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsx)("rect",{x:"120",y:"133",width:"183.726",height:"18",rx:"4",fill:(0,L.Vg)("backgroundSecondaryColor")}),(0,l.jsxs)("g",{clipPath:"url(#clip3_5877_92351)",children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M137.973 171.496L137.972 171.497L136.958 172.412H138.25C138.595 172.412 138.875 172.692 138.875 173.037C138.875 173.382 138.595 173.662 138.25 173.662H135.333C134.988 173.662 134.708 173.382 134.708 173.037V170.167C134.708 169.822 134.988 169.542 135.333 169.542C135.678 169.542 135.958 169.822 135.958 170.167V171.631L137.139 170.565C138.428 169.411 140.133 168.708 142 168.708C146.027 168.708 149.292 171.973 149.292 176C149.292 180.027 146.027 183.292 142 183.292C138.529 183.292 135.626 180.867 134.889 177.62C134.813 177.283 135.024 176.948 135.36 176.872C135.697 176.796 136.032 177.007 136.108 177.343C136.719 180.034 139.125 182.042 142 182.042C145.337 182.042 148.042 179.337 148.042 176C148.042 172.663 145.337 169.958 142 169.958C140.453 169.958 139.043 170.539 137.973 171.496Z",fill:(0,L.Vg)("iconColor")}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M142 171.625C142.345 171.625 142.625 171.905 142.625 172.25V175.741L144.942 178.058C145.186 178.302 145.186 178.698 144.942 178.942C144.698 179.186 144.302 179.186 144.058 178.942L141.582 176.466C141.45 176.334 141.375 176.153 141.375 175.966V172.25C141.375 171.905 141.655 171.625 142 171.625Z",fill:(0,L.Vg)("iconColor")})]}),(0,l.jsx)("path",{d:"M161.651 170.818L164.673 179.389H164.793L167.815 170.818H169.108L165.369 181H164.097L160.358 170.818H161.651ZM170.535 181V173.364H171.708V181H170.535ZM171.131 172.091C170.903 172.091 170.705 172.013 170.54 171.857C170.377 171.701 170.296 171.514 170.296 171.295C170.296 171.077 170.377 170.889 170.54 170.734C170.705 170.578 170.903 170.5 171.131 170.5C171.36 170.5 171.556 170.578 171.718 170.734C171.884 170.889 171.967 171.077 171.967 171.295C171.967 171.514 171.884 171.701 171.718 171.857C171.556 172.013 171.36 172.091 171.131 172.091ZM177.059 181.159C176.323 181.159 175.688 180.997 175.155 180.672C174.624 180.344 174.215 179.886 173.927 179.3C173.642 178.71 173.499 178.024 173.499 177.241C173.499 176.459 173.642 175.77 173.927 175.173C174.215 174.573 174.616 174.106 175.13 173.771C175.647 173.433 176.25 173.264 176.939 173.264C177.337 173.264 177.73 173.33 178.118 173.463C178.506 173.596 178.858 173.811 179.177 174.109C179.495 174.404 179.748 174.795 179.937 175.283C180.126 175.77 180.221 176.37 180.221 177.082V177.58H174.334V176.565H179.028C179.028 176.134 178.941 175.75 178.769 175.412C178.6 175.074 178.358 174.807 178.043 174.612C177.732 174.416 177.364 174.318 176.939 174.318C176.472 174.318 176.068 174.434 175.726 174.666C175.388 174.895 175.128 175.193 174.946 175.561C174.764 175.929 174.672 176.323 174.672 176.744V177.42C174.672 177.997 174.772 178.486 174.971 178.887C175.173 179.285 175.453 179.588 175.811 179.797C176.169 180.002 176.585 180.105 177.059 180.105C177.367 180.105 177.645 180.062 177.894 179.976C178.146 179.886 178.363 179.754 178.545 179.578C178.728 179.399 178.868 179.177 178.968 178.912L180.101 179.23C179.982 179.615 179.782 179.953 179.5 180.244C179.218 180.533 178.87 180.758 178.456 180.92C178.041 181.08 177.576 181.159 177.059 181.159ZM183.736 181L181.409 173.364H182.642L184.292 179.21H184.372L186.003 173.364H187.256L188.866 179.19H188.946L190.596 173.364H191.829L189.503 181H188.349L186.679 175.134H186.559L184.889 181H183.736ZM197.477 181V170.818H198.71V175.352H204.139V170.818H205.372V181H204.139V176.446H198.71V181H197.477ZM207.681 181V173.364H208.855V181H207.681ZM208.278 172.091C208.049 172.091 207.852 172.013 207.686 171.857C207.524 171.701 207.443 171.514 207.443 171.295C207.443 171.077 207.524 170.889 207.686 170.734C207.852 170.578 208.049 170.5 208.278 170.5C208.507 170.5 208.702 170.578 208.865 170.734C209.03 170.889 209.113 171.077 209.113 171.295C209.113 171.514 209.03 171.701 208.865 171.857C208.702 172.013 208.507 172.091 208.278 172.091ZM216.413 175.074L215.359 175.372C215.292 175.196 215.195 175.026 215.065 174.86C214.939 174.691 214.767 174.552 214.548 174.442C214.33 174.333 214.049 174.278 213.708 174.278C213.241 174.278 212.851 174.386 212.54 174.602C212.232 174.814 212.077 175.084 212.077 175.412C212.077 175.704 212.183 175.934 212.396 176.103C212.608 176.272 212.939 176.413 213.39 176.526L214.523 176.804C215.206 176.97 215.715 177.223 216.05 177.565C216.384 177.903 216.552 178.339 216.552 178.872C216.552 179.31 216.426 179.701 216.174 180.045C215.925 180.39 215.577 180.662 215.13 180.861C214.683 181.06 214.162 181.159 213.569 181.159C212.79 181.159 212.145 180.99 211.635 180.652C211.125 180.314 210.801 179.82 210.665 179.17L211.779 178.892C211.885 179.303 212.086 179.611 212.381 179.817C212.679 180.022 213.068 180.125 213.549 180.125C214.096 180.125 214.53 180.009 214.852 179.777C215.176 179.542 215.339 179.26 215.339 178.932C215.339 178.667 215.246 178.445 215.06 178.266C214.875 178.083 214.59 177.947 214.205 177.858L212.933 177.56C212.233 177.394 211.719 177.137 211.391 176.789C211.067 176.438 210.904 175.999 210.904 175.472C210.904 175.041 211.025 174.66 211.267 174.328C211.512 173.997 211.845 173.737 212.266 173.548C212.691 173.359 213.171 173.264 213.708 173.264C214.464 173.264 215.057 173.43 215.488 173.761C215.922 174.093 216.23 174.53 216.413 175.074ZM221.639 173.364V174.358H217.682V173.364H221.639ZM218.835 171.534H220.008V178.812C220.008 179.144 220.056 179.393 220.153 179.558C220.252 179.721 220.378 179.83 220.53 179.886C220.686 179.939 220.85 179.966 221.023 179.966C221.152 179.966 221.258 179.959 221.341 179.946C221.424 179.929 221.49 179.916 221.54 179.906L221.778 180.96C221.699 180.99 221.588 181.02 221.445 181.05C221.303 181.083 221.122 181.099 220.903 181.099C220.572 181.099 220.247 181.028 219.929 180.886C219.614 180.743 219.352 180.526 219.143 180.234C218.938 179.943 218.835 179.575 218.835 179.131V171.534ZM226.424 181.159C225.735 181.159 225.13 180.995 224.61 180.667C224.093 180.339 223.688 179.88 223.396 179.29C223.108 178.7 222.964 178.01 222.964 177.222C222.964 176.426 223.108 175.732 223.396 175.138C223.688 174.545 224.093 174.085 224.61 173.756C225.13 173.428 225.735 173.264 226.424 173.264C227.114 173.264 227.717 173.428 228.234 173.756C228.754 174.085 229.159 174.545 229.447 175.138C229.739 175.732 229.884 176.426 229.884 177.222C229.884 178.01 229.739 178.7 229.447 179.29C229.159 179.88 228.754 180.339 228.234 180.667C227.717 180.995 227.114 181.159 226.424 181.159ZM226.424 180.105C226.948 180.105 227.379 179.971 227.717 179.702C228.055 179.434 228.305 179.081 228.468 178.643C228.63 178.206 228.711 177.732 228.711 177.222C228.711 176.711 228.63 176.236 228.468 175.795C228.305 175.354 228.055 174.998 227.717 174.726C227.379 174.454 226.948 174.318 226.424 174.318C225.901 174.318 225.47 174.454 225.132 174.726C224.794 174.998 224.543 175.354 224.381 175.795C224.218 176.236 224.137 176.711 224.137 177.222C224.137 177.732 224.218 178.206 224.381 178.643C224.543 179.081 224.794 179.434 225.132 179.702C225.47 179.971 225.901 180.105 226.424 180.105ZM231.675 181V173.364H232.809V174.517H232.888C233.028 174.139 233.28 173.833 233.644 173.597C234.009 173.362 234.42 173.244 234.877 173.244C234.963 173.244 235.071 173.246 235.2 173.249C235.33 173.253 235.427 173.258 235.494 173.264V174.457C235.454 174.447 235.363 174.433 235.22 174.413C235.081 174.389 234.933 174.378 234.778 174.378C234.406 174.378 234.075 174.456 233.783 174.612C233.495 174.764 233.266 174.976 233.097 175.248C232.932 175.516 232.849 175.823 232.849 176.168V181H231.675ZM237.873 183.864C237.674 183.864 237.496 183.847 237.341 183.814C237.185 183.784 237.077 183.754 237.017 183.724L237.316 182.69C237.601 182.763 237.853 182.79 238.071 182.77C238.29 182.75 238.484 182.652 238.653 182.477C238.825 182.304 238.983 182.024 239.125 181.636L239.344 181.04L236.52 173.364H237.793L239.901 179.449H239.98L242.088 173.364H243.361L240.12 182.114C239.974 182.508 239.793 182.835 239.578 183.093C239.362 183.355 239.112 183.549 238.827 183.675C238.545 183.801 238.227 183.864 237.873 183.864ZM249.424 170.818L252.447 179.389H252.566L255.589 170.818H256.881L253.143 181H251.87L248.131 170.818H249.424ZM260.799 181.159C260.063 181.159 259.429 180.997 258.895 180.672C258.365 180.344 257.955 179.886 257.667 179.3C257.382 178.71 257.239 178.024 257.239 177.241C257.239 176.459 257.382 175.77 257.667 175.173C257.955 174.573 258.356 174.106 258.87 173.771C259.387 173.433 259.99 173.264 260.68 173.264C261.077 173.264 261.47 173.33 261.858 173.463C262.246 173.596 262.599 173.811 262.917 174.109C263.235 174.404 263.489 174.795 263.678 175.283C263.866 175.77 263.961 176.37 263.961 177.082V177.58H258.075V176.565H262.768C262.768 176.134 262.682 175.75 262.509 175.412C262.34 175.074 262.098 174.807 261.783 174.612C261.472 174.416 261.104 174.318 260.68 174.318C260.212 174.318 259.808 174.434 259.467 174.666C259.129 174.895 258.868 175.193 258.686 175.561C258.504 175.929 258.413 176.323 258.413 176.744V177.42C258.413 177.997 258.512 178.486 258.711 178.887C258.913 179.285 259.193 179.588 259.551 179.797C259.909 180.002 260.325 180.105 260.799 180.105C261.107 180.105 261.386 180.062 261.634 179.976C261.886 179.886 262.103 179.754 262.286 179.578C262.468 179.399 262.609 179.177 262.708 178.912L263.842 179.23C263.722 179.615 263.522 179.953 263.24 180.244C262.958 180.533 262.61 180.758 262.196 180.92C261.782 181.08 261.316 181.159 260.799 181.159ZM265.746 181V173.364H266.879V174.517H266.959C267.098 174.139 267.35 173.833 267.714 173.597C268.079 173.362 268.49 173.244 268.947 173.244C269.034 173.244 269.141 173.246 269.271 173.249C269.4 173.253 269.498 173.258 269.564 173.264V174.457C269.524 174.447 269.433 174.433 269.29 174.413C269.151 174.389 269.004 174.378 268.848 174.378C268.477 174.378 268.145 174.456 267.854 174.612C267.565 174.764 267.337 174.976 267.168 175.248C267.002 175.516 266.919 175.823 266.919 176.168V181H265.746ZM276.364 175.074L275.31 175.372C275.244 175.196 275.146 175.026 275.017 174.86C274.891 174.691 274.718 174.552 274.499 174.442C274.281 174.333 274.001 174.278 273.659 174.278C273.192 174.278 272.802 174.386 272.491 174.602C272.183 174.814 272.029 175.084 272.029 175.412C272.029 175.704 272.135 175.934 272.347 176.103C272.559 176.272 272.89 176.413 273.341 176.526L274.475 176.804C275.157 176.97 275.666 177.223 276.001 177.565C276.336 177.903 276.503 178.339 276.503 178.872C276.503 179.31 276.377 179.701 276.125 180.045C275.877 180.39 275.529 180.662 275.081 180.861C274.634 181.06 274.113 181.159 273.52 181.159C272.741 181.159 272.097 180.99 271.586 180.652C271.076 180.314 270.753 179.82 270.617 179.17L271.73 178.892C271.836 179.303 272.037 179.611 272.332 179.817C272.63 180.022 273.02 180.125 273.5 180.125C274.047 180.125 274.481 180.009 274.803 179.777C275.128 179.542 275.29 179.26 275.29 178.932C275.29 178.667 275.197 178.445 275.012 178.266C274.826 178.083 274.541 177.947 274.156 177.858L272.884 177.56C272.184 177.394 271.671 177.137 271.343 176.789C271.018 176.438 270.855 175.999 270.855 175.472C270.855 175.041 270.976 174.66 271.218 174.328C271.463 173.997 271.797 173.737 272.218 173.548C272.642 173.359 273.122 173.264 273.659 173.264C274.415 173.264 275.008 173.43 275.439 173.761C275.873 174.093 276.182 174.53 276.364 175.074ZM278.269 181V173.364H279.442V181H278.269ZM278.866 172.091C278.637 172.091 278.44 172.013 278.274 171.857C278.112 171.701 278.031 171.514 278.031 171.295C278.031 171.077 278.112 170.889 278.274 170.734C278.44 170.578 278.637 170.5 278.866 170.5C279.094 170.5 279.29 170.578 279.452 170.734C279.618 170.889 279.701 171.077 279.701 171.295C279.701 171.514 279.618 171.701 279.452 171.857C279.29 172.013 279.094 172.091 278.866 172.091ZM284.694 181.159C284.004 181.159 283.399 180.995 282.879 180.667C282.362 180.339 281.958 179.88 281.666 179.29C281.378 178.7 281.233 178.01 281.233 177.222C281.233 176.426 281.378 175.732 281.666 175.138C281.958 174.545 282.362 174.085 282.879 173.756C283.399 173.428 284.004 173.264 284.694 173.264C285.383 173.264 285.986 173.428 286.503 173.756C287.024 174.085 287.428 174.545 287.716 175.138C288.008 175.732 288.154 176.426 288.154 177.222C288.154 178.01 288.008 178.7 287.716 179.29C287.428 179.88 287.024 180.339 286.503 180.667C285.986 180.995 285.383 181.159 284.694 181.159ZM284.694 180.105C285.217 180.105 285.648 179.971 285.986 179.702C286.324 179.434 286.575 179.081 286.737 178.643C286.899 178.206 286.981 177.732 286.981 177.222C286.981 176.711 286.899 176.236 286.737 175.795C286.575 175.354 286.324 174.998 285.986 174.726C285.648 174.454 285.217 174.318 284.694 174.318C284.17 174.318 283.739 174.454 283.401 174.726C283.063 174.998 282.813 175.354 282.65 175.795C282.488 176.236 282.407 176.711 282.407 177.222C282.407 177.732 282.488 178.206 282.65 178.643C282.813 179.081 283.063 179.434 283.401 179.702C283.739 179.971 284.17 180.105 284.694 180.105ZM291.118 176.406V181H289.945V173.364H291.078V174.557H291.178C291.357 174.169 291.629 173.857 291.993 173.622C292.358 173.384 292.828 173.264 293.405 173.264C293.922 173.264 294.375 173.37 294.762 173.582C295.15 173.791 295.452 174.109 295.667 174.537C295.883 174.961 295.99 175.498 295.99 176.148V181H294.817V176.227C294.817 175.627 294.661 175.16 294.35 174.825C294.038 174.487 293.611 174.318 293.067 174.318C292.693 174.318 292.358 174.399 292.063 174.562C291.771 174.724 291.541 174.961 291.372 175.273C291.203 175.584 291.118 175.962 291.118 176.406Z",fill:(0,L.Vg)("textPrimaryColor")}),(0,l.jsx)("rect",{x:"120",y:"201",width:"183.726",height:"18",rx:"4",fill:(0,L.Vg)("backgroundSecondaryColor")})]}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("filter",{id:"filter0_d_5877_92351",x:"-7.65691",y:"-7.5816",width:"415.314",height:"235.314",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feOffset",{}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"3.82846"}),(0,l.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5877_92351"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5877_92351",result:"shape"})]}),(0,l.jsxs)("filter",{id:"filter1_d_5877_92351",x:"16",y:"10",width:"32",height:"32",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feOffset",{}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,l.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.258824 0 0 0 0 0.254902 0 0 0 0 0.286275 0 0 0 0.14 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5877_92351"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5877_92351",result:"shape"})]}),(0,l.jsxs)("filter",{id:"filter2_di_5877_92351",x:"95.4016",y:"20.1934",width:"235.325",height:"245.308",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feOffset",{}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"6"}),(0,l.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.258824 0 0 0 0 0.254902 0 0 0 0 0.286275 0 0 0 0.14 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_5877_92351"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_5877_92351",result:"shape"}),(0,l.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,l.jsx)("feMorphology",{radius:"0.5",operator:"erode",in:"SourceAlpha",result:"effect2_innerShadow_5877_92351"}),(0,l.jsx)("feOffset",{}),(0,l.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),(0,l.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"}),(0,l.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect2_innerShadow_5877_92351"})]}),(0,l.jsx)("clipPath",{id:"clip0_5877_92351",children:(0,l.jsx)("rect",{width:"400",height:"220",fill:"white"})}),(0,l.jsx)("clipPath",{id:"clip1_5877_92351",children:(0,l.jsx)("rect",{width:"20",height:"20",fill:"white",transform:"translate(22 16)"})}),(0,l.jsx)("clipPath",{id:"clip2_5877_92351",children:(0,l.jsx)("rect",{width:"20",height:"20",fill:"white",transform:"translate(54 16)"})}),(0,l.jsx)("clipPath",{id:"clip3_5877_92351",children:(0,l.jsx)("rect",{width:"20",height:"20",fill:"white",transform:"translate(132 166)"})})]})]})}let O=()=>{let e=(0,_.s9)(),t=(0,d.h1)(f.j).workspace,[i,a]=(0,m.fp)(C.Jr),n=(0,$.K)(),r=(0,h.useCallback)(()=>{a(!1),n(t)},[n,t,a]);return(0,l.jsx)(s.of,{open:i,topImage:(0,l.jsx)(I,{}),title:e["com.affine.history-vision.tips-modal.title"](),onOpenChange:a,description:e["com.affine.history-vision.tips-modal.description"](),cancelText:e["com.affine.history-vision.tips-modal.cancel"](),confirmButtonOptions:{variant:"primary"},onConfirm:r,confirmText:e["com.affine.history-vision.tips-modal.confirm"]()})},E=()=>{let e=(0,_.s9)(),[t,i]=(0,m.fp)(C.tc);return(0,l.jsx)(s.of,{open:t,topImage:(0,l.jsx)("video",{width:400,height:300,style:{objectFit:"cover"},src:"/static/newIssue.mp4",autoPlay:!0,loop:!0}),title:e["com.affine.issue-feedback.title"](),onOpenChange:i,description:e["com.affine.issue-feedback.description"](),cancelText:e["com.affine.issue-feedback.cancel"](),to:"https://github.com/toeverything/AFFiNE/issues/new/choose",confirmText:e["com.affine.issue-feedback.confirm"](),confirmButtonOptions:{variant:"primary"},external:!0})};var H=i(61953),R=i(52114),V=i(1630),P=i.n(V);let Z=()=>{let e=(0,_.s9)(),t=(0,d.h1)(f.j).workspace,[i,a]=(0,m.fp)(C.Tb),n=(0,d.h1)(R.P);(0,h.useEffect)(()=>{n.quota.revalidate()},[n]);let r=(0,p.S)(n.quota.quota$),s=(0,d.h1)(H.Q),o=(0,p.S)(s.permission.isOwner$);(0,h.useEffect)(()=>{s.permission.revalidate()},[s]);let c=(0,d.h1)(w.RK),u=(0,p.S)(c.quota.quota$.map(e=>e?{name:e.humanReadable.name,blobLimit:e.humanReadable.blobLimit}:null)),x=(0,h.useMemo)(()=>o&&u?.name==="free",[o,u]),g=(0,m.Xr)(C.JO),j=(0,h.useCallback)(()=>{g({open:!0,activeTab:"plans",scrollAnchor:"cloudPricingPlan"}),v.u4.$.paywall.storage.viewPlans(),a(!1)},[a,g]),b=(0,h.useMemo)(()=>u&&x?e["com.affine.payment.blob-limit.description.owner.free"]({planName:u.name,currentQuota:u.blobLimit,upgradeQuota:"100MB"}):o&&u&&"pro"===u.name.toLowerCase()?e["com.affine.payment.blob-limit.description.owner.pro"]({planName:u.name,quota:u.blobLimit}):r?e["com.affine.payment.blob-limit.description.member"]({quota:r.humanReadable.blobLimit}):null,[u,x,o,r,e]);return(0,h.useEffect)(()=>{if(!r)return;t.engine.blob.singleBlobSizeLimit=P().parse(r.blobLimit.toString());let e=t.engine.blob.onAbortLargeBlob.on(()=>{a(!0)});return()=>{e?.dispose()}},[t.engine.blob,a,r]),(0,l.jsx)(y.uo,{open:i,title:e["com.affine.payment.blob-limit.title"](),onOpenChange:a,description:b,cancelButtonOptions:{hidden:!x},onConfirm:j,confirmText:x?e["com.affine.payment.upgrade"]():e["Got it"](),confirmButtonOptions:{variant:"primary"}})},U=()=>{let e=(0,_.s9)(),t=(0,d.h1)(f.j).workspace,[i,a]=(0,m.fp)(C.Tb),n=(0,h.useCallback)(()=>{a(!1)},[a]);return(0,h.useEffect)(()=>{let e=t.engine.blob.onAbortLargeBlob.on(()=>{a(!0)});return()=>{e?.dispose()}},[t.engine.blob.onAbortLargeBlob,a]),(0,l.jsx)(y.uo,{open:i,title:e["com.affine.payment.blob-limit.title"](),description:e["com.affine.payment.blob-limit.description.local"]({quota:"100MB"}),onOpenChange:a,cancelButtonOptions:{hidden:!0},onConfirm:n,confirmText:e["Got it"](),confirmButtonOptions:{variant:"primary"}})},G=({title:e,subtitle:t,...i})=>(0,l.jsxs)("div",{className:"_43pnlm0",...i,children:[(0,l.jsx)("div",{className:"title",children:e}),t?(0,l.jsx)("div",{className:"subtitle",children:t}):null]});var T=i(37064);let D=({name:e,desc:t,children:i,onClick:a,style:n,spreadCol:r=!0,disabled:s=!1,className:o,...c})=>(0,l.jsxs)("div",{className:(0,T.A)("_43pnlm2",{"two-col":r,disabled:s},o),style:n,onClick:a,"data-testid":c["data-testid"],children:[(0,l.jsxs)("div",{className:"left-col",children:[(0,l.jsx)("div",{className:"name",children:e}),(0,l.jsx)("div",{className:"desc",children:t})]}),r?(0,l.jsx)("div",{className:"right-col",children:i}):i]});var q=i(93502);let z=({title:e,children:t})=>(0,l.jsxs)("div",{className:"_43pnlm1",children:[e?(0,l.jsx)("div",{className:"title",children:e}):null,t]}),W=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:(0,l.jsx)(q.E,{}),subtitle:(0,l.jsx)(q.E,{})}),Array.from({length:3},(e,t)=>(0,l.jsx)(z,{title:(0,l.jsx)(q.E,{}),children:(0,l.jsx)(D,{name:(0,l.jsx)(q.E,{}),desc:(0,l.jsx)(q.E,{}),spreadCol:!1})},t))]});var K=i(23675);let X=()=>(0,l.jsxs)(K.Z6,{alignItems:"center",style:{padding:"0 24px",height:30,marginBottom:4},children:[(0,l.jsx)(q.E,{variant:"circular",width:14,height:14,style:{marginRight:10}}),(0,l.jsx)(q.E,{variant:"rectangular",height:16,width:0,style:{flexGrow:1}})]}),Y=()=>(0,l.jsx)(l.Fragment,{children:Array.from({length:5},(e,t)=>(0,l.jsx)(X,{},t))});var J=i(45483),Q=i(55161),ee=i(15907),et=i(90024),ei=i(27502),ea=i(53216);let en=({fileChange:e,accept:t,children:i,disabled:a,...n})=>{let r=(0,_.s9)(),s=(0,h.useRef)(null);return a?i??(0,l.jsx)(et.$n,{children:r.Upload()}):(0,l.jsxs)("div",{style:{display:"flex"},onClick:()=>{s.current&&s.current.click()},children:[i??(0,l.jsx)(et.$n,{children:r.Upload()}),(0,l.jsx)("input",{ref:s,type:"file",style:{display:"none"},onChange:t=>{let i=t.target.files;i&&(e(i[0]),s.current&&(s.current.value=""))},accept:t,...n})]})};var er=i(99029),el=i(29007),es=i(30397);let eo=e=>{let t=(0,_.s9)(),[i,a]=(0,h.useState)(!1),[n,r]=(0,h.useState)((0,es.Ak)()),o=(0,d.h1)(w.nC).subscription,c=(0,d.h1)(w.uR),{openConfirmModal:f}=(0,s.fl)(),p=(0,er.k)(),u=(0,j.V)(async()=>{let e=o.ai$.value;e&&v.u4.$.settingsPanel.plans.cancelSubscription({plan:ea.R$.AI,recurring:e.recurring}),f({title:t["com.affine.payment.ai.action.cancel.confirm.title"](),description:t["com.affine.payment.ai.action.cancel.confirm.description"](),reverseFooter:!0,confirmText:t["com.affine.payment.ai.action.cancel.confirm.confirm-text"](),confirmButtonOptions:{variant:"secondary"},cancelText:t["com.affine.payment.ai.action.cancel.confirm.cancel-text"](),cancelButtonOptions:{variant:"primary"},onConfirm:async()=>{try{a(!0),await o.cancelSubscription(n,ea.R$.AI),r((0,es.Ak)()),v.u4.$.settingsPanel.plans.confirmCancelingSubscription({plan:ea.R$.AI,recurring:e?.recurring});let t=c.session.account$.value,i=o.ai$.value?.recurring;t&&i&&p((0,el.Pc)({email:t.email,name:t.info?.name,id:t.id,plan:ea.R$.AI,recurring:i}))}finally{a(!1)}}})},[o,f,t,n,c.session.account$.value,p]);return(0,l.jsx)(s.$n,{onClick:u,loading:i,variant:"primary",...e,children:t["com.affine.payment.ai.action.cancel.button-label"]()})},ec=e=>{let t=(0,_.s9)(),i=(0,m.Xr)(C.W7),a=(0,h.useCallback)(()=>{i(e=>({...e,openModal:!0}))},[i]);return(0,l.jsx)(s.$n,{onClick:a,variant:"primary",...e,children:t["com.affine.payment.ai.action.login.button-label"]()})},ed=e=>{let t=(0,_.s9)(),[i,a]=(0,h.useState)((0,es.Ak)()),n=(0,d.h1)(w.nC).subscription,[r,o]=(0,h.useState)(!1),{openConfirmModal:c}=(0,s.fl)(),f=(0,j.V)(async()=>{let e=n.ai$.value;e&&v.u4.$.settingsPanel.plans.resumeSubscription({plan:ea.R$.AI,recurring:e.recurring}),c({title:t["com.affine.payment.ai.action.resume.confirm.title"](),description:t["com.affine.payment.ai.action.resume.confirm.description"](),confirmText:t["com.affine.payment.ai.action.resume.confirm.confirm-text"](),confirmButtonOptions:{variant:"primary"},cancelText:t["com.affine.payment.ai.action.resume.confirm.cancel-text"](),onConfirm:async()=>{o(!0),await n.resumeSubscription(i,ea.R$.AI),e&&v.u4.$.settingsPanel.plans.confirmResumingSubscription({plan:e.plan,recurring:e.recurring}),(0,s.me)({icon:(0,l.jsx)(J.SingleSelectSelectSolidIcon,{}),iconColor:(0,L.Vg)("processingColor"),title:t["com.affine.payment.ai.action.resume.confirm.notify.title"](),message:t["com.affine.payment.ai.action.resume.confirm.notify.msg"]()}),a((0,es.Ak)())}})},[n,c,t,i]);return(0,l.jsx)(s.$n,{loading:r,onClick:f,variant:"primary",...e,children:t["com.affine.payment.ai.action.resume.button-label"]()})};var ef=i(86639);let ep=({displayedFrequency:e="yearly",...t})=>{let[i,a]=(0,h.useState)((0,es.Ak)()),[n,r]=(0,h.useState)(!1),[o,c]=(0,h.useState)(!1),f=(0,d.h1)(w.uR),u=(0,d.h1)(w.nC),m=(0,p.S)(u.prices.aiPrice$);(0,h.useEffect)(()=>{u.prices.revalidate()},[u]);let C=(0,_.s9)();(0,h.useEffect)(()=>{if(o)return window.addEventListener("focus",u.subscription.revalidate),()=>{window.removeEventListener("focus",u.subscription.revalidate)}},[o,u]);let x=(0,j.V)(async()=>{r(!0),v.u4.$.settingsPanel.plans.checkout({plan:ea.R$.AI,recurring:ea.zS.Yearly});try{let e=await u.createCheckoutSession({recurring:ea.zS.Yearly,idempotencyKey:i,plan:ea.R$.AI,coupon:null,successCallbackLink:(0,el.e6)(f.session.account$.value,ea.R$.AI,ea.zS.Yearly)});(0,ef.RM)(e),c(!0),a((0,es.Ak)())}finally{r(!1)}},[f,i,u]);if(!m||!m.yearlyAmount)return(0,l.jsx)(s.EA,{className:t.className,width:160,height:36,style:{borderRadius:18,...t.style}});let g=`$${(m.yearlyAmount/100/("yearly"===e?1:12)).toFixed(2)}`,y="yearly"===e?C["com.affine.payment.billing-setting.year"]():C["com.affine.payment.billing-setting.month"]();return(0,l.jsxs)(s.$n,{loading:n,onClick:x,variant:"primary",...t,children:[t.children??`${g} / ${y}`,"monthly"===e?(0,l.jsx)("span",{style:{fontSize:10,opacity:.75,letterSpacing:-.2,paddingLeft:4},children:C["com.affine.payment.ai.subscribe.billed-annually"]()}):null]})};var eu="xhwnaf2",em="xhwnaf0",eh="xhwnaf1";let eC=()=>{let e=(0,_.s9)(),t=(0,m.Xr)(C.JO),i=(0,d.h1)(w.BB),a=(0,p.S)(i.serverConfig.features$.map(e=>e?.payment)),n=(0,d.h1)(w.nC),r=(0,p.S)(n.subscription.ai$);(0,h.useEffect)(()=>{n.subscription.revalidate()},[n]);let o=(0,d.h1)(w.bl);(0,h.useEffect)(()=>{o.copilotQuota.revalidate()},[o]);let c=(0,p.S)(o.copilotQuota.copilotActionLimit$),f=(0,p.S)(o.copilotQuota.copilotActionUsed$),u=null===c||null===f,x=(0,p.S)(o.copilotQuota.error$),g=(0,h.useCallback)(()=>{t({open:!0,activeTab:"billing"}),v.u4.$.settingsPanel.accountUsage.viewPlans({plan:ea.R$.AI})},[t]);if(u)return x?(0,l.jsx)(D,{name:e["com.affine.payment.ai.usage-title"](),desc:"",spreadCol:!1,children:(0,l.jsx)(s.Kw,{children:"Load error"})}):(0,l.jsx)(D,{name:e["com.affine.payment.ai.usage-title"](),desc:"",spreadCol:!1,children:(0,l.jsx)(s.EA,{height:42})});let y="unlimited"===c?0:Math.min(100,Math.max(.5,Number((f/c*100).toFixed(4)))),j=y>80?(0,L.Vg)("errorColor"):(0,L.Vg)("processingColor");return(0,l.jsx)(D,{spreadCol:!!r,desc:r?e["com.affine.payment.ai.usage-description-purchased"]():"",name:e["com.affine.payment.ai.usage-title"](),children:"unlimited"===c?a&&r?.canceledAt?(0,l.jsx)(ed,{}):(0,l.jsx)(s.$n,{onClick:g,children:e["com.affine.payment.ai.usage.change-button-label"]()}):(0,l.jsxs)("div",{className:em,children:[(0,l.jsxs)("div",{className:eh,children:[(0,l.jsxs)("div",{className:"storage-progress-desc",children:[(0,l.jsx)("span",{children:e["com.affine.payment.ai.usage.used-caption"]()}),(0,l.jsx)("span",{children:e["com.affine.payment.ai.usage.used-detail"]({used:f.toString(),limit:c.toString()})})]}),(0,l.jsx)("div",{className:"storage-progress-bar-wrapper",children:(0,l.jsx)("div",{className:eu,style:{width:`${y}%`,backgroundColor:j}})})]}),a&&(0,l.jsx)(ep,{variant:"primary",children:e["com.affine.payment.ai.usage.purchase-button-label"]()})]})})};!function(e){e.Primary="primary",e.Default="secondary"}(a||(a={}));let ex=({onUpgrade:e})=>{let t=(0,_.s9)(),i=(0,d.h1)(w.RK).quota;(0,h.useEffect)(()=>{i.revalidate()},[i]);let a=(0,p.S)(i.color$),n=(0,p.S)(i.usedFormatted$),r=(0,p.S)(i.maxFormatted$),o=(0,p.S)(i.percent$),c=(0,d.h1)(w.BB),f=(0,p.S)(c.serverConfig.features$.map(e=>e?.payment)),u=(0,d.h1)(w.nC).subscription;(0,h.useEffect)(()=>{u.revalidate()},[u]);let m=(0,p.S)(u.pro$),C=!m,x=(0,p.S)(i.quota$.map(e=>null!==e?e?.humanReadable.name:null)),g=(0,p.S)(i.error$),y=(0,h.useMemo)(()=>C?"primary":"secondary",[C]);return null===m||null===o||null===x?g?(0,l.jsx)(s.Kw,{children:"Load error"}):(0,l.jsx)(s.EA,{height:42}):(0,l.jsxs)("div",{className:em,children:[(0,l.jsxs)("div",{className:eh,children:[(0,l.jsxs)("div",{className:"storage-progress-desc",children:[(0,l.jsx)("span",{children:t["com.affine.storage.used.hint"]()}),(0,l.jsxs)("span",{children:[n,"/",r,` (${x} ${t["com.affine.storage.plan"]()})`]})]}),(0,l.jsx)("div",{className:"storage-progress-bar-wrapper",children:(0,l.jsx)("div",{className:eu,style:{width:`${o}%`,backgroundColor:a??(0,L.Vg)("processingColor")}})})]}),f?(0,l.jsx)(s.m_,{options:{hidden:o<100},content:C?t["com.affine.storage.maximum-tips"]():t["com.affine.storage.maximum-tips.pro"](),children:(0,l.jsx)("span",{tabIndex:0,children:(0,l.jsx)(s.$n,{variant:y,onClick:e,children:C?t["com.affine.storage.upgrade"]():t["com.affine.storage.change-plan"]()})})}):null]})},eg=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.uR).session,i=(0,p.M)(t.account$),a=(0,j.V)(async e=>{try{v.u4.$.settingsPanel.accountSettings.uploadAvatar(),await t.uploadAvatar(e),s.me.success({title:"Update user avatar success"})}catch(e){s.me.error({title:"Update user avatar failed",message:String(e)})}},[t]),n=(0,ei.A)(async()=>{v.u4.$.settingsPanel.accountSettings.removeAvatar(),await t.removeAvatar()},[t]);return(0,l.jsx)(en,{accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",fileChange:a,"data-testid":"upload-user-avatar",children:(0,l.jsx)(ee.e,{size:56,name:i.label,url:i.avatar,hoverIcon:(0,l.jsx)(J.CameraIcon,{}),onRemove:i.avatar?n:void 0,avatarTooltipOptions:{content:e["Click to replace photo"]()},removeTooltipOptions:{content:e["Remove photo"]()},"data-testid":"user-setting-avatar",removeButtonProps:{"data-testid":"user-setting-remove-avatar-button"}})})},ey=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.uR).session,i=(0,p.M)(t.account$),[a,n]=(0,h.useState)(i.label),r=!!a&&a!==i.label,o=(0,j.V)(async()=>{if(null!==i&&r)try{v.u4.$.settingsPanel.accountSettings.updateUserName(),await t.updateLabel(a)}catch(e){s.me.error({title:"Failed to update user name.",message:String(e)})}},[i,r,t,a]);return(0,l.jsx)(D,{name:e["com.affine.settings.profile"](),desc:e["com.affine.settings.profile.message"](),spreadCol:!1,children:(0,l.jsxs)(s.Z6,{style:{margin:"12px 0 24px 0"},alignItems:"center",children:[(0,l.jsx)(eg,{}),(0,l.jsxs)("div",{className:"_6mftq30",children:[(0,l.jsx)("label",{children:e["com.affine.settings.profile.name"]()}),(0,l.jsxs)(s.Z6,{alignItems:"center",children:[(0,l.jsx)(s.pd,{defaultValue:a,"data-testid":"user-name-input",placeholder:e["com.affine.settings.profile.placeholder"](),maxLength:64,minLength:0,style:{width:280,height:32},onChange:n,onEnter:o}),r?(0,l.jsx)(et.$n,{"data-testid":"save-user-name",onClick:o,style:{marginLeft:"12px"},children:e["com.affine.editCollection.save"]()}):null]})]})]})})},ej=()=>{let e=(0,_.s9)(),t=(0,m.Xr)(C.JO),i=(0,h.useCallback)(()=>{v.u4.$.settingsPanel.accountUsage.viewPlans({plan:ea.R$.Pro}),t({open:!0,activeTab:"plans",scrollAnchor:"cloudPricingPlan"})},[t]);return(0,l.jsx)(D,{name:e["com.affine.storage.title"](),desc:"",spreadCol:!1,children:(0,l.jsx)(ex,{onUpgrade:i})})},ev=()=>{let{authService:e,serverConfigService:t}=(0,d.A$)({AuthService:w.uR,ServerConfigService:w.BB}),i=(0,p.S)(t.serverConfig.features$),a=(0,_.s9)(),n=e.session;(0,h.useEffect)(()=>{n.revalidate()},[n]);let r=(0,p.M)(n.account$),s=(0,m.Xr)(C.W7),o=(0,m.Xr)(C.G4),c=(0,h.useCallback)(()=>{s({openModal:!0,state:"sendEmail",email:r.email,emailType:r.info?.emailVerified?"changeEmail":"verifyEmail"})},[r.email,r.info?.emailVerified,s]),f=(0,h.useCallback)(()=>{s({openModal:!0,state:"sendEmail",email:r.email,emailType:r.info?.hasPassword?"changePassword":"setPassword"})},[r.email,r.info?.hasPassword,s]),u=(0,h.useCallback)(()=>{o(!0)},[o]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:a["com.affine.setting.account"](),subtitle:a["com.affine.setting.account.message"](),"data-testid":"account-title"}),(0,l.jsx)(ey,{}),(0,l.jsx)(D,{name:a["com.affine.settings.email"](),desc:r.email,children:(0,l.jsx)(et.$n,{onClick:c,children:r.info?.emailVerified?a["com.affine.settings.email.action.change"]():a["com.affine.settings.email.action.verify"]()})}),(0,l.jsx)(D,{name:a["com.affine.settings.password"](),desc:a["com.affine.settings.password.message"](),children:(0,l.jsx)(et.$n,{onClick:f,children:r.info?.hasPassword?a["com.affine.settings.password.action.change"]():a["com.affine.settings.password.action.set"]()})}),(0,l.jsx)(ej,{}),i?.copilot&&(0,l.jsx)(eC,{}),(0,l.jsx)(D,{name:a["Sign out"](),desc:a["com.affine.setting.sign.out.message"](),style:{cursor:"pointer"},"data-testid":"sign-out-button",onClick:u,children:(0,l.jsx)(J.ArrowRightSmallIcon,{})})]})},eb=(0,i(49791).eU)(null);var e_=i(52858),ek=i(5685),ew=i(6503),eS=i(25670);let eF=[{icon:(0,l.jsx)(()=>(0,l.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{clipPath:"url(#clip0_3073_4801)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.667 2C7.14199 2 2.66699 6.58819 2.66699 12.2529C2.66699 16.7899 5.52949 20.6219 9.50449 21.9804C10.0045 22.0701 10.192 21.7625 10.192 21.4934C10.192 21.2499 10.1795 20.4425 10.1795 19.5838C7.66699 20.058 7.01699 18.9558 6.81699 18.3791C6.70449 18.0843 6.21699 17.1743 5.79199 16.9308C5.44199 16.7386 4.94199 16.2644 5.77949 16.2516C6.56699 16.2388 7.12949 16.9949 7.31699 17.3025C8.21699 18.8533 9.65449 18.4175 10.2295 18.1484C10.317 17.4819 10.5795 17.0334 10.867 16.777C8.64199 16.5207 6.31699 15.6364 6.31699 11.7147C6.31699 10.5997 6.70449 9.67689 7.34199 8.95918C7.24199 8.70286 6.89199 7.65193 7.44199 6.24215C7.44199 6.24215 8.27949 5.97301 10.192 7.29308C10.992 7.06239 11.842 6.94704 12.692 6.94704C13.542 6.94704 14.392 7.06239 15.192 7.29308C17.1045 5.9602 17.942 6.24215 17.942 6.24215C18.492 7.65193 18.142 8.70286 18.042 8.95918C18.6795 9.67689 19.067 10.5868 19.067 11.7147C19.067 15.6492 16.7295 16.5207 14.5045 16.777C14.867 17.0975 15.1795 17.7126 15.1795 18.6738C15.1795 20.0452 15.167 21.1474 15.167 21.4934C15.167 21.7625 15.3545 22.0829 15.8545 21.9804C17.8396 21.2932 19.5646 19.9851 20.7867 18.2401C22.0088 16.4951 22.6664 14.4012 22.667 12.2529C22.667 6.58819 18.192 2 12.667 2Z"})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_3073_4801",children:(0,l.jsx)("rect",{width:"25",height:"24",fill:"white"})})})]}),{}),title:"GitHub",link:"https://github.com/toeverything/AFFiNE"},{icon:(0,l.jsx)(J.TwitterIcon,{}),title:"X",link:"https://twitter.com/AffineOfficial"},{icon:(0,l.jsx)(()=>(0,l.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{clipPath:"url(#clip0_3073_4801)",children:(0,l.jsx)("path",{d:"M19.2565 5.64663C17.9898 5.05614 16.6183 4.62755 15.1897 4.37993C15.1772 4.37953 15.1647 4.38188 15.1532 4.38681C15.1417 4.39175 15.1314 4.39915 15.1231 4.4085C14.9516 4.72279 14.7516 5.13233 14.6183 5.44662C13.103 5.21804 11.562 5.21804 10.0467 5.44662C9.9134 5.1228 9.71339 4.72279 9.53243 4.4085C9.52291 4.38945 9.49434 4.37993 9.46576 4.37993C8.03715 4.62755 6.67521 5.05614 5.39899 5.64663C5.38946 5.64663 5.37994 5.65615 5.37041 5.66568C2.77987 9.54197 2.06556 13.3135 2.41795 17.0469C2.41795 17.066 2.42748 17.085 2.44652 17.0946C4.16086 18.3517 5.80852 19.1137 7.43714 19.6184C7.46571 19.628 7.49428 19.6184 7.50381 19.5994C7.88477 19.0756 8.22764 18.5232 8.52288 17.9422C8.54193 17.9041 8.52288 17.866 8.48479 17.8565C7.94191 17.647 7.42761 17.3993 6.92284 17.1136C6.88474 17.0946 6.88474 17.0374 6.91331 17.0088C7.01808 16.9327 7.12284 16.8469 7.22761 16.7707C7.24666 16.7517 7.27523 16.7517 7.29428 16.7612C10.5706 18.2565 14.104 18.2565 17.3422 16.7612C17.3612 16.7517 17.3898 16.7517 17.4088 16.7707C17.5136 16.8565 17.6184 16.9327 17.7231 17.0184C17.7612 17.0469 17.7612 17.1041 17.7136 17.1231C17.2184 17.4184 16.6945 17.6565 16.1517 17.866C16.1136 17.8755 16.104 17.9232 16.1136 17.9517C16.4183 18.5327 16.7612 19.0851 17.1326 19.6089C17.1612 19.6184 17.1898 19.628 17.2184 19.6184C18.8565 19.1137 20.5042 18.3517 22.2185 17.0946C22.2375 17.085 22.2471 17.066 22.2471 17.0469C22.6661 12.7325 21.5518 8.98958 19.2946 5.66568C19.2851 5.65615 19.2756 5.64663 19.2565 5.64663ZM9.01813 14.7707C8.03715 14.7707 7.21808 13.8659 7.21808 12.7516C7.21808 11.6373 8.01811 10.7325 9.01813 10.7325C10.0277 10.7325 10.8277 11.6468 10.8182 12.7516C10.8182 13.8659 10.0182 14.7707 9.01813 14.7707ZM15.6564 14.7707C14.6754 14.7707 13.8564 13.8659 13.8564 12.7516C13.8564 11.6373 14.6564 10.7325 15.6564 10.7325C16.666 10.7325 17.466 11.6468 17.4565 12.7516C17.4565 13.8659 16.666 14.7707 15.6564 14.7707Z",fill:"#5865F2"})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_3073_4801",children:(0,l.jsx)("rect",{width:"25",height:"24",fill:"white"})})})]}),{}),title:"Discord",link:"https://discord.gg/whd5mjYqVw"},{icon:(0,l.jsx)(()=>(0,l.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M21.7477 7.19232C21.6387 6.76858 21.4261 6.38227 21.1311 6.07186C20.8361 5.76145 20.4689 5.53776 20.0662 5.42308C18.5917 5 12.6575 5 12.6575 5C12.6575 5 6.72304 5.01281 5.24858 5.43589C4.84583 5.55057 4.47865 5.77427 4.18363 6.0847C3.88861 6.39512 3.67602 6.78145 3.56705 7.2052C3.12106 9.96155 2.94806 14.1616 3.5793 16.8077C3.68828 17.2314 3.90087 17.6177 4.19589 17.9281C4.49092 18.2386 4.85808 18.4622 5.26083 18.5769C6.73528 19 12.6696 19 12.6696 19C12.6696 19 18.6039 19 20.0783 18.5769C20.481 18.4623 20.8482 18.2386 21.1432 17.9282C21.4383 17.6177 21.6509 17.2314 21.7599 16.8077C22.2303 14.0474 22.3752 9.85004 21.7477 7.1924V7.19232Z",fill:"#FF0000"}),(0,l.jsx)("path",{d:"M10.667 15L15.667 12L10.667 9V15Z",fill:"white"})]}),{}),title:"YouTube",link:"https://www.youtube.com/@affinepro"},{icon:(0,l.jsx)(()=>(0,l.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M12 2C9.34844 2 6.80312 3.05422 4.92969 4.92891C3.05432 6.80434 2.00052 9.34778 2 12C2 14.6511 3.05469 17.1964 4.92969 19.0711C6.80312 20.9458 9.34844 22 12 22C14.6516 22 17.1969 20.9458 19.0703 19.0711C20.9453 17.1964 22 14.6511 22 12C22 9.34891 20.9453 6.80359 19.0703 4.92891C17.1969 3.05422 14.6516 2 12 2Z",fill:"url(#paint0_linear_8233_169329)"}),(0,l.jsx)("path",{d:"M6.5267 11.8943C9.44232 10.6243 11.3861 9.78694 12.3579 9.38241C15.1361 8.22726 15.7126 8.02663 16.0892 8.01983C16.172 8.01851 16.3564 8.03898 16.4767 8.13624C16.5767 8.21827 16.6048 8.32921 16.6189 8.4071C16.6314 8.48491 16.6486 8.66226 16.6345 8.80069C16.4845 10.3819 15.8329 14.2191 15.5017 15.9902C15.3626 16.7396 15.0861 16.9908 14.8189 17.0154C14.2376 17.0688 13.797 16.6316 13.2345 16.263C12.3548 15.686 11.8579 15.3269 11.0033 14.764C10.0158 14.1134 10.6564 13.7557 11.2189 13.1713C11.3658 13.0184 13.9251 10.691 13.9736 10.4799C13.9798 10.4535 13.9861 10.3551 13.9267 10.3032C13.8689 10.2512 13.7829 10.269 13.7204 10.283C13.6314 10.303 12.2267 11.2324 9.5017 13.071C9.10326 13.3451 8.74232 13.4787 8.41732 13.4716C8.06107 13.464 7.37357 13.2698 6.86264 13.1038C6.23764 12.9002 5.7392 12.7926 5.78295 12.4468C5.80482 12.2668 6.05326 12.0826 6.5267 11.8943Z",fill:"white"}),(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"paint0_linear_8233_169329",x1:"1002",y1:"2",x2:"1002",y2:"2002",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#2AABEE"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#229ED9"})]})})]}),{}),title:"Telegram",link:"https://t.me/affineworkos"},{icon:(0,l.jsx)(()=>(0,l.jsxs)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M12.334 22C17.8568 22 22.334 17.5228 22.334 12C22.334 6.47715 17.8568 2 12.334 2C6.81114 2 2.33398 6.47715 2.33398 12C2.33398 17.5228 6.81114 22 12.334 22Z",fill:"#FF4500"}),(0,l.jsx)("path",{d:"M18.9863 12.0954C18.9863 11.2848 18.3308 10.641 17.5319 10.641C17.1545 10.6404 16.7915 10.7857 16.5186 11.0463C15.5172 10.331 14.1461 9.86611 12.6202 9.8065L13.2877 6.68299L15.4574 7.14783C15.4814 7.69627 15.9343 8.13744 16.4948 8.13744C17.067 8.13744 17.5319 7.6726 17.5319 7.1001C17.5319 6.52791 17.067 6.06299 16.4948 6.06299C16.0895 6.06299 15.7316 6.30143 15.5648 6.64721L13.1448 6.13455C13.0732 6.12252 13.0016 6.13455 12.9539 6.17033C12.8943 6.20611 12.8586 6.26564 12.8468 6.33721L12.1074 9.8183C10.5577 9.86611 9.16273 10.331 8.14945 11.0583C7.87653 10.7976 7.51349 10.6524 7.13609 10.653C6.32539 10.653 5.68164 11.3085 5.68164 12.1074C5.68164 12.7035 6.03922 13.2041 6.54008 13.4308C6.51576 13.5766 6.50379 13.7241 6.5043 13.8719C6.5043 16.113 9.11524 17.9372 12.3341 17.9372C15.553 17.9372 18.1639 16.125 18.1639 13.8719C18.1638 13.7241 18.1519 13.5766 18.1281 13.4308C18.6288 13.2041 18.9863 12.6914 18.9863 12.0954ZM8.99586 13.1325C8.99586 12.5603 9.4607 12.0954 10.0332 12.0954C10.6054 12.0954 11.0703 12.5603 11.0703 13.1325C11.0703 13.7048 10.6055 14.1699 10.0332 14.1699C9.46078 14.1816 8.99586 13.7048 8.99586 13.1325ZM14.8019 15.8865C14.0866 16.6019 12.7274 16.6496 12.3341 16.6496C11.9288 16.6496 10.5697 16.5899 9.86609 15.8865C9.75898 15.7792 9.75898 15.6123 9.86609 15.505C9.97344 15.3979 10.1403 15.3979 10.2477 15.505C10.7008 15.9581 11.6545 16.113 12.3341 16.113C13.0137 16.113 13.9792 15.9581 14.4203 15.505C14.5277 15.3979 14.6945 15.3979 14.8019 15.505C14.8972 15.6123 14.8972 15.7792 14.8019 15.8865ZM14.611 14.1817C14.0387 14.1817 13.5739 13.7168 13.5739 13.1446C13.5739 12.5723 14.0387 12.1074 14.611 12.1074C15.1834 12.1074 15.6483 12.5723 15.6483 13.1446C15.6483 13.7047 15.1834 14.1817 14.611 14.1817Z",fill:"white"})]}),{}),title:"Reddit",link:"https://www.reddit.com/r/Affine/"}];var eA="_6l2oz60";!function(e){e.UNCHECK="uncheck",e.LATEST="latest",e.UPDATE_AVAILABLE="update-available",e.ERROR="error"}(n||(n={}));let eN=e=>{let t=(0,_.s9)(),{updateAvailable:i,downloadProgress:a,updateReady:n,checkingForUpdates:r}=(0,ek.iI)(),o=(0,h.useMemo)(()=>n?t["com.affine.aboutAFFiNE.checkUpdate.button.restart"]():i&&null===a?t["com.affine.aboutAFFiNE.checkUpdate.button.download"]():"latest"===e||"error"===e?t["com.affine.aboutAFFiNE.checkUpdate.button.retry"]():t["com.affine.aboutAFFiNE.checkUpdate.button.check"](),[e,a,t,i,n]),c=(0,h.useMemo)(()=>n?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.restart"]():i&&null===a?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.update-available"]({version:i.version}):r?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.checking"]():i&&null!==a?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.downloading"]():"error"===e?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.error"]():"latest"===e?t["com.affine.aboutAFFiNE.checkUpdate.subtitle.latest"]():t["com.affine.aboutAFFiNE.checkUpdate.subtitle.check"](),[e,a,r,t,i,n]);return{subtitle:(0,h.useMemo)(()=>(0,l.jsxs)("span",{className:(0,T.A)("_6l2oz63",{active:n||i&&null===a||"latest"===e,error:"error"===e}),children:[r?(0,l.jsx)(s.Rh,{size:14}):null,c]}),[e,a,r,c,i,n]),buttonLabel:o}},eM=()=>{let e=(0,_.s9)(),{checkForUpdates:t,downloadUpdate:i,quitAndInstall:a,updateAvailable:n,downloadProgress:r,updateReady:s}=(0,ek.iI)(),[o,c]=(0,h.useState)("uncheck"),{buttonLabel:d,subtitle:f}=eN(o),p=(0,j.V)(async()=>{let e="uncheck";try{let i=await t();null===i?e="error":!1===i?e="latest":"string"==typeof i&&(e="update-available")}catch(t){console.error(t),e="error"}finally{c(e)}},[t]),u=(0,h.useCallback)(()=>n&&null===r?i():s?a():void p(),[p,r,i,a,n,s]);return(0,l.jsx)(D,{name:e["com.affine.aboutAFFiNE.checkUpdate.title"](),desc:f,children:(0,l.jsx)(et.$n,{"data-testid":"check-update-button",onClick:u,disabled:null!==r&&!s,children:d})})},eB=()=>{let e=(0,_.s9)(),{appSettings:t,updateSettings:i}=(0,ew.V)(),{toggleAutoCheck:a,toggleAutoDownload:n}=(0,ek.iI)(),r="internal",o=eS.appIconMap[r],c=eS.appNames[r],d=(0,h.useCallback)(e=>{a(e),i("autoCheckUpdate",e)},[a,i]),f=(0,h.useCallback)(e=>{n(e),i("autoDownloadUpdate",e)},[n,i]),p=(0,h.useCallback)(e=>{e?v.jp.opt_in_tracking():v.jp.opt_out_tracking(),i("enableTelemetry",e)},[i]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:e["com.affine.aboutAFFiNE.title"](),subtitle:e["com.affine.aboutAFFiNE.subtitle"](),"data-testid":"about-title"}),(0,l.jsxs)(z,{title:e["com.affine.aboutAFFiNE.version.title"](),children:[(0,l.jsx)(D,{name:c,desc:"0.16.0",className:"_6l2oz64",children:(0,l.jsx)("img",{src:o,alt:c,width:56,height:56})}),(0,l.jsx)(D,{name:e["com.affine.aboutAFFiNE.version.editor.title"](),desc:"0.17.0-canary-202408121434-8bc42f0"}),environment.isDesktop?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eM,{}),(0,l.jsx)(D,{name:e["com.affine.aboutAFFiNE.autoCheckUpdate.title"](),desc:e["com.affine.aboutAFFiNE.autoCheckUpdate.description"](),children:(0,l.jsx)(s.dO,{checked:t.autoCheckUpdate,onChange:d})}),(0,l.jsx)(D,{name:e["com.affine.aboutAFFiNE.autoDownloadUpdate.title"](),desc:e["com.affine.aboutAFFiNE.autoDownloadUpdate.description"](),children:(0,l.jsx)(s.dO,{checked:t.autoDownloadUpdate,onChange:f})}),(0,l.jsx)(D,{name:e["com.affine.aboutAFFiNE.changelog.title"](),desc:e["com.affine.aboutAFFiNE.changelog.description"](),style:{cursor:"pointer"},onClick:()=>{(0,ef.RM)("https://github.com/toeverything/AFFiNE/releases")},children:(0,l.jsx)(J.ArrowRightSmallIcon,{})})]}):null,(0,l.jsx)(D,{name:e["com.affine.telemetry.enable"](),desc:e["com.affine.telemetry.enable.desc"](),children:(0,l.jsx)(s.dO,{checked:!1!==t.enableTelemetry,onChange:p})})]}),(0,l.jsxs)(z,{title:e["com.affine.aboutAFFiNE.contact.title"](),children:[(0,l.jsxs)("a",{className:eA,rel:"noreferrer",href:"https://affine.pro",target:"_blank",children:[e["com.affine.aboutAFFiNE.contact.website"](),(0,l.jsx)(J.OpenInNewIcon,{className:"icon"})]}),(0,l.jsxs)("a",{className:eA,rel:"noreferrer",href:"https://community.affine.pro",target:"_blank",children:[e["com.affine.aboutAFFiNE.contact.community"](),(0,l.jsx)(J.OpenInNewIcon,{className:"icon"})]})]}),(0,l.jsx)(z,{title:e["com.affine.aboutAFFiNE.community.title"](),children:(0,l.jsx)("div",{className:"_6l2oz61",children:eF.map(({icon:e,title:t,link:i})=>(0,l.jsxs)("div",{className:"_6l2oz62",onClick:()=>{(0,ef.RM)(i)},children:[e,(0,l.jsx)("p",{children:t})]},t))})}),(0,l.jsxs)(z,{title:e["com.affine.aboutAFFiNE.legal.title"](),children:[(0,l.jsxs)("a",{className:eA,rel:"noreferrer",href:"https://affine.pro/privacy",target:"_blank",children:[e["com.affine.aboutAFFiNE.legal.privacy"](),(0,l.jsx)(J.OpenInNewIcon,{className:"icon"})]}),(0,l.jsxs)("a",{className:eA,rel:"noreferrer",href:"https://affine.pro/terms",target:"_blank",children:[e["com.affine.aboutAFFiNE.legal.tos"](),(0,l.jsx)(J.OpenInNewIcon,{className:"icon"})]})]})]})};var e$=i(51520),eL=i(33926),eI=i(66216),eO=i(53653);let eE=(0,h.memo)(function(){let{currentLanguage:e,languagesList:t,onLanguageChange:i}=(0,eO.A)();return(0,l.jsx)(l.Fragment,{children:t.map(t=>{let a=e?.originalName===t.originalName;return(0,l.jsx)(eI.Dr,{title:t.name,lang:t.tag,onSelect:()=>i(t.tag),endFix:(100*t.Completeness).toFixed(0)+"%","data-selected":a,className:"hooakb1",children:(0,l.jsxs)("div",{className:"hooakb2",children:[(0,l.jsx)("div",{children:t.originalName}),a&&(0,l.jsx)(J.DoneIcon,{fontSize:"16px"})]})},t.name)})})}),eH=()=>{let{currentLanguage:e}=(0,eO.A)();return(0,l.jsx)(eI.W1,{items:(0,l.jsx)(eE,{}),contentOptions:{className:"hooakb0",align:"end"},children:(0,l.jsx)(eI.cQ,{"data-testid":"language-menu-button",style:{textTransform:"capitalize",fontWeight:600,width:"250px"},block:!0,children:e?.originalName||""})})};var eR=i(94343),eV="_497d0d0";i(24522);let eP=()=>{let e=(0,_.s9)(),{setTheme:t,theme:i}=(0,eL.D)(),a=(0,h.useMemo)(()=>[{value:"system",label:e["com.affine.themeSettings.system"](),testId:"system-theme-trigger"},{value:"light",label:e["com.affine.themeSettings.light"](),testId:"light-theme-trigger"},{value:"dark",label:e["com.affine.themeSettings.dark"](),testId:"dark-theme-trigger"}],[e]);return(0,l.jsx)(s.z6,{items:a,value:i,width:250,className:eV,onChange:(0,h.useCallback)(e=>{t(e)},[t])})},eZ=()=>{let e=(0,_.s9)(),{appSettings:t,updateSettings:i}=(0,ew.V)(),a=(0,h.useMemo)(()=>e$.r1.map(({key:t,value:i})=>{let a="Mono"===t?e["com.affine.appearanceSettings.fontStyle.mono"]():"Sans"===t?e["com.affine.appearanceSettings.fontStyle.sans"]():"Serif"===t?e["com.affine.appearanceSettings.fontStyle.serif"]():"";return{value:t,label:a,testId:"system-font-style-trigger",style:{fontFamily:i}}}),[e]);return(0,l.jsx)(s.z6,{items:a,value:t.fontStyle,width:250,className:eV,onChange:(0,h.useCallback)(e=>{i("fontStyle",e)},[i])})},eU=()=>{let e=(0,_.s9)(),{appSettings:t,updateSettings:i}=(0,ew.V)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:e["com.affine.appearanceSettings.title"](),subtitle:e["com.affine.appearanceSettings.subtitle"]()}),(0,l.jsxs)(z,{title:e["com.affine.appearanceSettings.theme.title"](),children:[(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.color.title"](),desc:e["com.affine.appearanceSettings.color.description"](),children:(0,l.jsx)(eP,{})}),(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.font.title"](),desc:e["com.affine.appearanceSettings.font.description"](),children:(0,l.jsx)(eZ,{})}),(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.language.title"](),desc:e["com.affine.appearanceSettings.language.description"](),children:(0,l.jsx)("div",{className:eV,children:(0,l.jsx)(eH,{})})}),environment.isDesktop?(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.clientBorder.title"](),desc:e["com.affine.appearanceSettings.clientBorder.description"](),"data-testid":"client-border-style-trigger",children:(0,l.jsx)(s.dO,{checked:t.clientBorder,onChange:e=>i("clientBorder",e)})}):null,(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.fullWidth.title"](),desc:e["com.affine.appearanceSettings.fullWidth.description"](),children:(0,l.jsx)(s.dO,{"data-testid":"full-width-layout-trigger",checked:t.fullWidthLayout,onChange:e=>i("fullWidthLayout",e)})}),null,null]}),null,environment.isDesktop?(0,l.jsxs)(z,{title:e["com.affine.appearanceSettings.sidebar.title"](),children:[(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.noisyBackground.title"](),desc:e["com.affine.appearanceSettings.noisyBackground.description"](),children:(0,l.jsx)(s.dO,{checked:t.enableNoisyBackground,onChange:e=>i("enableNoisyBackground",e)})}),environment.isMacOs&&(0,l.jsx)(D,{name:e["com.affine.appearanceSettings.translucentUI.title"](),desc:e["com.affine.appearanceSettings.translucentUI.description"](),children:(0,l.jsx)(s.dO,{checked:t.enableBlurBackground,onChange:e=>i("enableBlurBackground",e)})})]}):null]})};var eG=i(86243),eT=i(73896),eD=i(21817),eq=i(89679),ez=i(14486),eW=i(31523),eK=i(47488);let eX=e=>{let{onReset:t,onError:i}=e,a=(0,h.useRef)([]),{cache:n}=(0,eK.iX)(),r=h.useCallback(()=>{let e=a.current;for(let t of(a.current=[],n.keys())){let i=n.get(t);e.includes(i?.error)&&n.delete(t)}},[n]),s=h.useCallback(e=>{r(),t?.(e)},[r,t]),o=h.useCallback((e,t)=>{a.current.push(e),i?.(e,t)},[i]);return h.useEffect(()=>r,[r]),(0,l.jsx)(eW.tH,{...e,onReset:s,onError:o,children:e.children})};var eY=i(53978),eJ="_12asts4w",eQ="_12asts4m",e1="_12asts42",e0="_12asts4o",e2="_12asts4z";let e3=({type:e,loading:t,open:i,content:a,onOpenChange:n,onConfirm:r,...s})=>{let o=(0,_.s9)(),c=(0,h.useRef)(!1),d=o[`com.affine.payment.modal.${e}.title`](),f=o[`com.affine.payment.modal.${e}.confirm`](),p=o[`com.affine.payment.modal.${e}.cancel`](),u="change"!==e?o[`com.affine.payment.modal.${e}.content`]():"";return(0,h.useEffect)(()=>{!t&&i&&c.current&&(n?.(!1),c.current=!1)},[t,i,n]),(0,l.jsx)(y.uo,{title:d,cancelText:p,confirmText:f,confirmButtonOptions:{variant:"primary",loading:t},open:i,onOpenChange:n,onConfirm:()=>{c.current=!0,r?.()?.catch(console.error)},...s,children:a??u})},e4=({open:e,loading:t,onOpenChange:i,onCancel:a})=>{let n=(0,_.s9)(),r=(0,h.useRef)(!1);return(0,h.useEffect)(()=>{!t&&e&&r.current&&(i?.(!1),r.current=!1)},[t,e,i]),(0,l.jsxs)(y.aF,{title:n["com.affine.payment.modal.downgrade.title"](),open:e,contentOptions:{},width:480,onOpenChange:i,children:[(0,l.jsxs)("div",{className:"_12asts4v",children:[(0,l.jsx)("p",{className:eJ,children:n["com.affine.payment.modal.downgrade.content"]()}),(0,l.jsx)("p",{className:"_12asts4x",children:n["com.affine.payment.modal.downgrade.caption"]()})]}),(0,l.jsxs)("footer",{className:"_12asts4y",children:[(0,l.jsx)(et.$n,{onClick:()=>{r.current=!0,a?.()},loading:t,children:n["com.affine.payment.modal.downgrade.cancel"]()}),(0,l.jsx)(eY.zM,{asChild:!0,children:(0,l.jsx)(et.$n,{disabled:t,onClick:()=>i?.(!1),variant:"primary",children:n["com.affine.payment.modal.downgrade.confirm"]()})})]})]})},e7=({children:e,open:t,onOpenChange:i})=>{let[a,n]=(0,h.useState)((0,es.Ak)()),[r,s]=(0,h.useState)(!1),o=(0,d.h1)(w.nC).subscription,c=(0,p.S)(o.pro$),f=(0,d.h1)(w.uR),u=(0,er.k)();(0,h.useEffect)(()=>{t&&c&&v.u4.$.settingsPanel.plans.cancelSubscription({plan:c.plan,recurring:c.recurring})},[t,c]);let m=(0,j.V)(async()=>{try{let e=f.session.account$.value,t=o.pro$.value?.recurring;s(!0),await o.cancelSubscription(a),o.revalidate(),await o.isRevalidating$.waitFor(e=>!e),n((0,es.Ak)()),i(!1);let r=o.pro$.value;r&&v.u4.$.settingsPanel.plans.confirmCancelingSubscription({plan:r.plan,recurring:r.recurring}),e&&t&&u((0,el.Pc)({email:e.email??"",id:e.id,name:e.info?.name??"",plan:ea.R$.Pro,recurring:t}))}finally{s(!1)}},[f.session.account$.value,o,a,i,u]);return(0,l.jsxs)(l.Fragment,{children:[e,(0,l.jsx)(e4,{open:t,onCancel:m,onOpenChange:i,loading:r})]})},e9=({children:e,open:t,onOpenChange:i})=>{let[a,n]=(0,h.useState)((0,es.Ak)()),[r,s]=(0,h.useState)(!1),o=(0,d.h1)(w.nC).subscription,c=(0,j.V)(async()=>{try{s(!0),await o.resumeSubscription(a),o.revalidate(),await o.isRevalidating$.waitFor(e=>!e),n((0,es.Ak)()),i(!1);let e=o.pro$.value;e&&v.u4.$.settingsPanel.plans.confirmResumingSubscription({plan:e.plan,recurring:e.recurring})}finally{s(!1)}},[o,a,i]);return(0,l.jsxs)(l.Fragment,{children:[e,(0,l.jsx)(e3,{type:"resume",open:t,onConfirm:c,onOpenChange:i,loading:r})]})},e5=`<svg 
  width="352" 
  height="320" 
  viewBox="0 0 352 320" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  class="affine-svg"
>
  <g filter="url(#filter0_dddd_782_4147)">
    <path 
      fill="url(#believerAffineIconGradient)"
      class="affine"
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M116.696 47.3266C123.09 36.2513 127.89 27.9391 130.138 24.0455L130.131 24.0532C131.853 21.0201 136.347 21.0584 138.07 24.0532C138.899 25.4399 140.482 28.2114 142.109 31.0592L142.112 31.0646L142.113 31.0662C143.926 34.2404 145.793 37.5081 146.729 39.0578C159.768 61.6638 175.427 88.7902 191.338 116.352L191.353 116.378C198.777 129.239 206.256 142.194 213.548 154.829L116.696 47.3266ZM95.6843 83.7222C65.9312 135.266 27.4975 201.875 21.1035 213.078C19.9705 215.804 22.0605 219.243 25.031 219.297C25.6193 219.354 29.0911 219.347 31.3338 219.343H31.3345H31.3351H31.3356H31.3361C32.1278 219.342 32.766 219.341 33.0697 219.343C38.9111 219.345 45.1459 219.347 51.6934 219.348L95.6843 83.7222ZM94.8237 219.35C111.168 219.349 128.22 219.347 145.141 219.345C180.097 219.34 214.49 219.336 240.911 219.343L241.212 219.343H241.213C242.07 219.344 243.123 219.345 243.177 219.297C243.387 219.315 243.57 219.273 243.751 219.232C243.88 219.202 244.008 219.173 244.142 219.167C246.615 218.424 248.108 215.513 247.105 213.085C247.007 212.944 246.967 212.852 246.908 212.721C246.824 212.532 246.703 212.26 246.324 211.638C242.34 204.727 238.108 197.391 233.697 189.745L94.8237 219.35ZM144.914 11.4689C136.24 5.09634 123.501 7.80009 118.203 17.1521C113.965 24.553 101.087 46.8414 85.5332 73.7598C55.3395 126.015 15.0642 195.719 8.34886 207.831C4.21469 217.757 9.97191 229.53 20.3226 232.417C23.369 233.225 26.5304 233.17 29.5054 233.117C30.7322 233.095 31.9274 233.074 33.0697 233.114C60.2291 233.14 95.7969 233.126 131.767 233.111C171.174 233.095 211.065 233.078 240.911 233.114C242.565 233.145 245.451 233.114 247.886 232.425C255.396 230.334 260.977 223.188 261.199 215.398C261.284 212.817 260.801 210.236 259.867 207.846C259.015 205.998 258.311 204.797 257.619 203.617L257.619 203.617C257.354 203.164 257.09 202.714 256.82 202.232L251.048 192.229C238.163 169.9 221.518 141.059 204.873 112.217L204.167 110.993C187.749 82.5434 171.382 54.1817 158.672 32.1567L152.899 22.1537L150.013 17.1521C148.704 14.9845 146.989 13.0084 144.914 11.4689ZM215.983 167.938C213.319 165.616 210.582 163.395 207.767 161.299L113.985 206.625C113.754 206.788 113.522 206.95 113.289 207.111L226.643 179.013L215.983 167.938ZM134.763 187.748L196.966 154.14C193.36 152.042 189.636 150.163 185.788 148.543L134.763 187.748ZM144.168 170.768L174.282 144.611C172.663 144.183 171.023 143.802 169.362 143.469C166.442 142.936 163.506 142.562 160.552 142.374L144.168 170.768ZM129.17 179.638C127.529 182.104 125.738 184.462 123.815 186.722C122.704 187.988 121.561 189.211 120.388 190.394L112.8 151.268L129.17 179.638ZM112.596 133.826C111.282 131.172 110.136 128.44 109.139 125.639C108.601 124.047 108.115 122.449 107.679 120.846L145.334 133.826H112.596ZM105.342 83.7389L190.087 141.396C190.209 141.45 190.33 141.504 190.452 141.558C190.535 141.596 190.619 141.633 190.702 141.671L110.653 58.5003L108.898 64.5935C107.307 70.9253 106.076 77.3241 105.342 83.7389ZM88.0881 211.55C80.8724 214.586 73.3244 216.987 65.645 218.921L64.3555 219.241L95.4864 111.157L88.0881 211.55ZM111.196 198.43C107.536 201.207 103.681 203.696 99.6707 205.931L101.828 129.939C102 130.403 102.176 130.866 102.356 131.328L111.196 198.43ZM163.608 132.998L104.577 96.6275C104.573 100.712 104.808 104.79 105.317 108.847L163.608 132.998ZM119.438 145.959L131.963 167.657H131.97C132.927 169.312 135.308 169.312 136.265 167.657L148.79 145.959C149.74 144.304 148.545 142.236 146.639 142.236H121.589C119.675 142.236 118.481 144.304 119.438 145.959Z" 
    />
  </g>
  <defs>
    <linearGradient 
      id="believerAffineIconGradient" 
      x1="0" 
      y1="0" 
      x2="352" 
      y2="320" 
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="var(--_15uwrpu0)"/>
      <stop offset="1" stop-color="var(--_15uwrpu1)"/>
    </linearGradient>
    <filter id="filter0_dddd_782_4147" x="0" y="0" width="351.209" height="319.144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4" dy="3"/>
      <feGaussianBlur stdDeviation="5.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_782_4147"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="14" dy="14"/>
      <feGaussianBlur stdDeviation="10"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0.09 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_782_4147" result="effect2_dropShadow_782_4147"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="32" dy="30"/>
      <feGaussianBlur stdDeviation="13.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_782_4147" result="effect3_dropShadow_782_4147"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="58" dy="54"/>
      <feGaussianBlur stdDeviation="16"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0 0.34902 0 0 0 0.01 0"/>
      <feBlend mode="normal" in2="effect3_dropShadow_782_4147" result="effect4_dropShadow_782_4147"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_782_4147" result="shape"/>
    </filter>
  </defs>
</svg>
`,e6=`<svg
  class="icons-svg"
  width="167" 
  height="174" 
  viewBox="0 0 167 174" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <g class="icons">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M148.989 6.74753C145.221 5.58339 141.223 7.69404 140.059 11.4618C139.9 11.9777 139.802 12.4964 139.761 13.0105C139.706 13.704 139.099 14.2216 138.405 14.1667C135.915 13.9694 133.532 15.5142 132.764 17.9999C131.873 20.8811 133.487 23.9385 136.369 24.8287L150.816 29.2925C154.583 30.4566 158.581 28.3459 159.746 24.5782C160.91 20.8104 158.799 16.8123 155.031 15.6482C154.986 15.6341 154.94 15.6205 154.894 15.6073C154.309 15.439 153.928 14.8767 153.989 14.2711C154.319 10.9618 152.289 7.76701 148.989 6.74753ZM137.651 10.7178C139.226 5.62029 144.636 2.76471 149.733 4.33972C153.864 5.61605 156.521 9.40853 156.544 13.5133C161.155 15.3711 163.647 20.4868 162.153 25.3221C160.578 30.4197 155.169 33.2753 150.072 31.7003L135.625 27.2365C131.414 25.9354 129.055 21.467 130.356 17.256C131.356 14.0189 134.226 11.878 137.413 11.6499C137.476 11.3384 137.556 11.0274 137.651 10.7178Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M123.676 148.269L128.617 149.932C129.889 146.577 131.619 143.709 133.495 141.716C133.878 141.31 134.28 140.927 134.697 140.58C129.985 140.892 125.67 143.774 123.676 148.269ZM140.477 138.924C132.398 136.205 123.644 140.549 120.924 148.628C118.205 156.707 122.549 165.46 130.628 168.18C138.706 170.9 147.46 166.555 150.18 158.477C152.9 150.398 148.555 141.644 140.477 138.924ZM139.699 141.234C138.714 140.903 137.144 141.396 135.269 143.387C133.669 145.087 132.106 147.632 130.929 150.71L140.953 154.085C141.877 150.921 142.172 147.949 141.925 145.628C141.636 142.909 140.684 141.566 139.699 141.234ZM143.264 154.863C144.281 151.422 144.638 148.091 144.348 145.37C144.289 144.815 144.2 144.267 144.078 143.738C147.642 146.836 149.336 151.741 148.206 156.526L143.264 154.863ZM140.175 156.394L130.151 153.02C129.227 156.183 128.932 159.155 129.179 161.477C129.469 164.196 130.42 165.539 131.405 165.871C132.39 166.202 133.96 165.708 135.835 163.717C137.436 162.018 138.998 159.473 140.175 156.394ZM136.407 166.525C136.824 166.177 137.226 165.795 137.609 165.388C139.485 163.396 141.215 160.528 142.487 157.173L147.428 158.836C145.435 163.331 141.119 166.213 136.407 166.525ZM127.026 163.367C126.904 162.838 126.815 162.29 126.756 161.734C126.467 159.013 126.823 155.683 127.84 152.242L122.899 150.578C121.768 155.364 123.462 160.269 127.026 163.367Z" />
    <g class="star">
      <path fill="currentColor" d="M16.4781 27.0219C16.2651 26.4531 15.6593 26.1346 15.07 26.2816C14.4807 26.4286 14.0955 26.9944 14.1746 27.5965C14.6893 31.5122 14.222 34.4734 12.8463 36.769C11.4706 39.0645 9.07964 40.8729 5.38392 42.2654C4.81558 42.4796 4.49833 43.0861 4.64655 43.675C4.79477 44.264 5.36129 44.6481 5.9633 44.5677C9.81233 44.0538 12.8303 44.5064 15.1718 45.8808C17.5046 47.25 19.3365 49.6344 20.6191 53.3293C20.8222 53.9144 21.4388 54.2473 22.0395 54.0961C22.6401 53.9449 23.0256 53.3597 22.9275 52.7481C22.3179 48.9507 22.7939 45.9282 24.2039 43.5753C25.6139 41.2225 28.0549 39.3775 31.6911 38.1244C32.2767 37.9226 32.6109 37.3068 32.4611 36.7058C32.3112 36.1048 31.7269 35.718 31.1151 35.8148C27.252 36.426 24.2855 35.9348 21.9781 34.5233C19.662 33.1064 17.8399 30.6585 16.4781 27.0219Z" />
      <path fill="currentColor" d="M27.5899 18.6428C27.5071 18.4216 27.2715 18.2978 27.0423 18.355C26.8132 18.4121 26.6634 18.6321 26.6941 18.8663C26.8943 20.3891 26.7125 21.5407 26.1776 22.4334C25.6426 23.3261 24.7128 24.0293 23.2755 24.5709C23.0545 24.6542 22.9311 24.89 22.9888 25.1191C23.0464 25.3481 23.2667 25.4975 23.5008 25.4662C24.9977 25.2664 26.1713 25.4424 27.0819 25.9769C27.9891 26.5093 28.7015 27.4366 29.2003 28.8735C29.2793 29.101 29.5191 29.2305 29.7527 29.1717C29.9863 29.1129 30.1362 28.8853 30.098 28.6475C29.861 27.1707 30.0461 25.9953 30.5944 25.0803C31.1427 24.1653 32.092 23.4478 33.5061 22.9605C33.7338 22.882 33.8638 22.6425 33.8055 22.4088C33.7472 22.1751 33.52 22.0247 33.2821 22.0623C31.7798 22.3 30.6261 22.109 29.7288 21.56C28.8281 21.009 28.1195 20.0571 27.5899 18.6428Z" />
    </g>
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M39.763 123.789C37.1323 124.113 35.508 126.75 36.1349 129.679L38.9392 142.784C39.5661 145.713 42.2069 147.826 44.8375 147.502L47.2471 147.206L48.676 153.883C48.7894 154.413 49.1784 154.855 49.6616 155.004C50.1447 155.153 50.6269 154.979 50.8832 154.562L56.0842 146.119L62.7695 145.298C65.4002 144.974 67.0246 142.337 66.3977 139.408L63.5933 126.304C62.9664 123.374 60.3257 121.262 57.695 121.585L39.763 123.789ZM38.4884 129.39C38.1713 127.908 38.993 126.574 40.3238 126.41L58.2559 124.206C59.5867 124.042 60.9226 125.111 61.2397 126.593L64.0441 139.697C64.3612 141.179 63.5395 142.513 62.2087 142.677L55.0359 143.559C54.7238 143.597 54.454 143.772 54.2859 144.045L50.3526 150.43L49.3203 145.606C49.1654 144.882 48.513 144.36 47.863 144.44L44.2766 144.881C42.9458 145.045 41.6099 143.976 41.2928 142.494L38.4884 129.39ZM46.0992 137.8C46.9663 137.693 47.5013 136.822 47.2942 135.855C47.0872 134.888 46.2165 134.191 45.3494 134.298C44.4824 134.405 43.9474 135.275 44.1544 136.242C44.3615 137.21 45.2322 137.907 46.0992 137.8ZM52.9661 134.72C53.1732 135.687 52.6381 136.558 51.7711 136.665C50.9041 136.772 50.0334 136.075 49.8263 135.108C49.6193 134.141 50.1543 133.27 51.0213 133.163C51.8884 133.056 52.7591 133.753 52.9661 134.72ZM57.443 135.53C58.31 135.423 58.8451 134.552 58.638 133.585C58.431 132.618 57.5602 131.921 56.6932 132.028C55.8262 132.135 55.2912 133.006 55.4982 133.973C55.7053 134.94 56.576 135.637 57.443 135.53Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M93.966 64.4554L93.9641 64.4567L92.0333 65.8359L94.2622 66.0913C94.8579 66.1595 95.2854 66.6977 95.2172 67.2933C95.1489 67.889 94.6108 68.3165 94.0151 68.2483L88.9821 67.6717C88.3864 67.6035 87.9589 67.0653 88.0271 66.4697L88.5945 61.5165C88.6628 60.9209 89.2009 60.4933 89.7966 60.5616C90.3922 60.6298 90.8198 61.168 90.7515 61.7636L90.4621 64.2901L92.7097 62.6846C95.1632 60.9478 98.2435 60.0723 101.465 60.4414C108.415 61.2375 113.403 67.5162 112.607 74.4654C111.811 81.4146 105.532 86.4027 98.5826 85.6066C92.5931 84.9205 88.0626 80.1627 87.433 74.4134C87.3678 73.8175 87.798 73.2814 88.394 73.2162C88.9899 73.1509 89.526 73.5811 89.5912 74.1771C90.1129 78.9404 93.8694 82.8814 98.8297 83.4496C104.588 84.1092 109.79 79.9762 110.45 74.2183C111.109 68.4604 106.976 63.258 101.218 62.5984C98.5483 62.2926 96.0001 63.0161 93.966 64.4554Z" />
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M100.889 65.4744C101.484 65.5427 101.912 66.0809 101.844 66.6765L101.154 72.7008L104.694 77.157C105.067 77.6264 104.989 78.3093 104.519 78.6822C104.05 79.0551 103.367 78.9769 102.994 78.5075L99.2113 73.7462C99.0083 73.4907 98.9152 73.1651 98.9523 72.8409L99.6868 66.4294C99.755 65.8338 100.293 65.4062 100.889 65.4744Z" />
  </g>
</svg>
`,e8=({children:e,type:t,className:i,...a})=>(0,l.jsxs)("div",{className:(0,T.A)("_15uwrpu2",i),"data-type":t,...a,children:[(0,l.jsx)("div",{className:"_15uwrpu4",dangerouslySetInnerHTML:{__html:`${e5}${e6}`}}),(0,l.jsx)("div",{className:"_15uwrpu3",children:e})]});var te="_1qfr8z71";let tt=({className:e,...t})=>{let i=(0,_.s9)();return(0,l.jsxs)("ul",{className:(0,T.A)("_1qfr8z70",e),...t,children:[(0,l.jsxs)("li",{className:te,children:[(0,l.jsx)(J.AfFiNeIcon,{}),(0,l.jsx)("span",{children:i["com.affine.payment.lifetime.benefit-1"]()})]}),(0,l.jsxs)("li",{className:te,children:[(0,l.jsx)(J.DoneIcon,{}),(0,l.jsx)("span",{children:i["com.affine.payment.lifetime.benefit-2"]()})]}),(0,l.jsxs)("li",{className:te,children:[(0,l.jsx)(J.DoneIcon,{}),(0,l.jsx)("span",{children:i["com.affine.payment.lifetime.benefit-3"]({capacity:"1T"})})]})]})};var ti="klcomi7",ta="klcomi4",tn="klcomia",tr="klcomi8",tl="klcomi5",ts="klcomi3",to="klcomi6";!function(e){e.Basic="com.affine.payment.billing-setting.current-plan.description",e.Monthly="com.affine.payment.billing-setting.current-plan.description.monthly",e.Yearly="com.affine.payment.billing-setting.current-plan.description.yearly",e.Lifetime="com.affine.payment.billing-setting.current-plan.description.lifetime"}(r||(r={}));let tc=(e,t)=>e!==ea.R$.Pro?"com.affine.payment.billing-setting.current-plan.description":r[t],td=()=>{let e=(0,_.s9)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:e["com.affine.payment.billing-setting.title"](),subtitle:e["com.affine.payment.billing-setting.subtitle"]()}),(0,l.jsx)(eX,{FallbackComponent:tv,children:(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(tv,{}),children:(0,l.jsx)(z,{title:e["com.affine.payment.billing-setting.information"](),children:(0,l.jsx)(tf,{})})})}),(0,l.jsx)(eX,{FallbackComponent:tb,children:(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(tb,{}),children:(0,l.jsx)(z,{title:e["com.affine.payment.billing-setting.history"](),children:(0,l.jsx)(ty,{})})})})]})},tf=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.nC);(0,h.useEffect)(()=>{t.subscription.revalidate(),t.prices.revalidate()},[t]);let i=(0,p.S)(t.subscription.pro$),a=(0,p.S)(t.prices.proPrice$),n=(0,p.S)(t.subscription.isBeliever$),[r,s]=(0,h.useState)(!1),o=(0,m.Xr)(C.JO),c=i?.plan??ea.R$.Free,f=i?.recurring??ea.zS.Monthly,u=(0,h.useCallback)(e=>{v.u4.$.settingsPanel.billing.viewPlans(),o({open:!0,activeTab:"plans",scrollAnchor:e})},[o]),x=(0,h.useCallback)(()=>u("cloudPricingPlan"),[u]),g=(0,h.useCallback)(()=>u("aiPricingPlan"),[u]),y=i?a?i.recurring===ea.zS.Monthly?String((a.amount??0)/100):String((a.yearlyAmount??0)/100):"?":"0";return(0,l.jsxs)("div",{className:"klcomi0",children:[(0,l.jsx)(tm,{onClick:g}),null!==i?n?(0,l.jsx)(tu,{onOpenPlans:x}):(0,l.jsxs)("div",{className:ts,children:[(0,l.jsxs)("div",{className:ta,children:[(0,l.jsx)(D,{spreadCol:!1,name:e["com.affine.payment.billing-setting.current-plan"](),desc:(0,l.jsx)(_.x6,{i18nKey:tc(c,f),values:{planName:c},components:{1:(0,l.jsx)("span",{onClick:x,className:tn})}})}),(0,l.jsx)(th,{plan:c,gotoPlansSetting:x})]}),(0,l.jsxs)("p",{className:to,children:["$",y,(0,l.jsxs)("span",{className:ti,children:["/",f===ea.zS.Monthly?e["com.affine.payment.billing-setting.month"]():e["com.affine.payment.billing-setting.year"]()]})]})]}):(0,l.jsx)(tv,{}),(0,l.jsx)(tp,{}),null!==i?i?.status===ea.it.Active&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{className:tr,name:e["com.affine.payment.billing-setting.payment-method"](),desc:e["com.affine.payment.billing-setting.payment-method.description"](),children:(0,l.jsx)(tC,{})}),i.nextBillAt&&(0,l.jsx)(D,{name:e["com.affine.payment.billing-setting.renew-date"](),desc:e["com.affine.payment.billing-setting.renew-date.description"]({renewDate:new Date(i.nextBillAt).toLocaleDateString()})}),n?null:i.end&&i.canceledAt?(0,l.jsx)(D,{name:e["com.affine.payment.billing-setting.expiration-date"](),desc:e["com.affine.payment.billing-setting.expiration-date.description"]({expirationDate:new Date(i.end).toLocaleDateString()}),children:(0,l.jsx)(tx,{})}):(0,l.jsx)(e7,{open:r,onOpenChange:s,children:(0,l.jsx)(D,{style:{cursor:"pointer"},onClick:()=>{s(!0)},className:"dangerous-setting",name:e["com.affine.payment.billing-setting.cancel-subscription"](),desc:e["com.affine.payment.billing-setting.cancel-subscription.description"](),children:(0,l.jsx)(tg,{})})})]}):(0,l.jsx)(tv,{})]})},tp=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.nC),i=(0,d.h1)(w.uR),a=(0,p.S)(t.subscription.pro$),n=(0,p.S)(t.subscription.ai$),r=(0,p.S)(i.session.account$);if(!r||!a&&!n)return null;let s=[];a&&s.push(ea.R$.Pro),n&&s.push(ea.R$.AI);let o=(0,el.ed)({name:r.info?.name,id:r.id,email:r.email,recurring:a?.recurring??n?.recurring??ea.zS.Yearly,plan:s});return(0,l.jsx)(D,{className:tr,name:e["com.affine.payment.billing-type-form.title"](),desc:e["com.affine.payment.billing-type-form.description"](),children:(0,l.jsx)("a",{target:"_blank",href:o,rel:"noreferrer",children:(0,l.jsx)(et.$n,{children:e["com.affine.payment.billing-type-form.go"]()})})})},tu=({onOpenPlans:e})=>{let t=(0,_.s9)(),i=(0,d.h1)(w.nC),a=(0,p.S)(i.prices.readableLifetimePrice$);return a?(0,l.jsxs)(e8,{type:2,style:{borderRadius:8,padding:12},children:[(0,l.jsxs)("header",{className:"klcomid",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"klcomie",children:t["com.affine.payment.billing-setting.believer.title"]()}),(0,l.jsx)("div",{className:"klcomif",children:(0,l.jsx)(_.x6,{i18nKey:"com.affine.payment.billing-setting.believer.description",components:{a:(0,l.jsx)("a",{href:"#",onClick:e})}})})]}),(0,l.jsxs)("div",{className:"klcomig",children:[(0,l.jsx)("div",{className:"klcomih",children:a}),(0,l.jsx)("div",{className:"klcomii",children:t["com.affine.payment.billing-setting.believer.price-caption"]()})]})]}),(0,l.jsx)(tt,{})]}):null},tm=({onClick:e})=>{let t=(0,_.s9)(),i=(0,d.h1)(w.nC);(0,h.useEffect)(()=>{i.subscription.revalidate(),i.prices.revalidate()},[i]);let a=(0,p.S)(i.prices.aiPrice$),n=(0,p.S)(i.subscription.ai$),r=a?.yearlyAmount?`$${(a.yearlyAmount/100).toFixed(2)}`:"?",o=t["com.affine.payment.billing-setting.year"]();if(null===n)return(0,l.jsx)(s.EA,{height:100});let c=void 0===n?(0,l.jsx)(_.x6,{i18nKey:"com.affine.payment.billing-setting.ai.free-desc",components:{a:(0,l.jsx)("a",{href:"#",onClick:e,className:tn})}}):n?.nextBillAt?t["com.affine.payment.ai.billing-tip.next-bill-at"]({due:(0,_.U$)(n.nextBillAt,{absolute:{accuracy:"day"}})}):n?.canceledAt&&n.end?t["com.affine.payment.ai.billing-tip.end-at"]({end:(0,_.U$)(n.end,{absolute:{accuracy:"day"}})}):null;return(0,l.jsxs)("div",{className:ts,style:{marginBottom:24},children:[(0,l.jsxs)("div",{className:ta,children:[(0,l.jsx)(D,{spreadCol:!1,name:t["com.affine.payment.billing-setting.ai-plan"](),desc:c}),a?.yearlyAmount?n?n.canceledAt?(0,l.jsx)(ed,{className:tl}):(0,l.jsx)(eo,{className:tl}):(0,l.jsx)(ep,{className:tl,children:t["com.affine.payment.billing-setting.ai.purchase"]()}):null]}),(0,l.jsxs)("p",{className:to,children:[n?r:"$0",(0,l.jsxs)("span",{className:ti,children:["/",o]})]})]})},th=({plan:e,gotoPlansSetting:t})=>{let i=(0,_.s9)();return(0,l.jsx)(et.$n,{className:tl,variant:"primary",onClick:t,children:e===ea.R$.Pro?i["com.affine.payment.billing-setting.change-plan"]():i["com.affine.payment.billing-setting.upgrade"]()})},tC=()=>{let{isMutating:e,trigger:t}=(0,eq.n)({mutation:eD.Yl}),i=(0,_.s9)(),a=(0,j.V)(async()=>{await t(null,{onSuccess:e=>{(0,ef.RM)(e.createCustomerPortal)}})},[t]);return(0,l.jsx)(et.$n,{onClick:a,loading:e,disabled:e,children:i["com.affine.payment.billing-setting.update"]()})},tx=()=>{let e=(0,_.s9)(),[t,i]=(0,h.useState)(!1),a=(0,d.h1)(w.nC).subscription,n=(0,h.useCallback)(()=>{i(!0)},[]);return(0,l.jsx)(e9,{open:t,onOpenChange:i,children:(0,l.jsx)(et.$n,{onClick:n,"data-event-props":"$.settingsPanel.plans.resumeSubscription","data-event-args-type":a.pro$.value?.plan,"data-event-args-category":a.pro$.value?.recurring,children:e["com.affine.payment.billing-setting.resume-subscription"]()})})},tg=({loading:e})=>(0,l.jsx)(et.K0,{style:{pointerEvents:"none"},disabled:e,loading:e,children:(0,l.jsx)(J.ArrowRightSmallIcon,{})}),ty=()=>{let e=(0,_.s9)(),{data:t}=(0,ez.IT)({query:eD.W1}),[i,a]=(0,h.useState)(0),{data:n}=(0,ez.IT)({query:eD.P2,variables:{skip:i,take:12}}),r=n.currentUser?.invoices??[],s=t.currentUser?.invoiceCount??0;return(0,l.jsxs)("div",{className:"klcomi1",children:[(0,l.jsx)("div",{className:"klcomi2",children:0===r.length?(0,l.jsx)("p",{className:"klcomi9",children:e["com.affine.payment.billing-setting.no-invoice"]()}):r.map(e=>(0,l.jsx)(tj,{invoice:e},e.id))}),s>12&&(0,l.jsx)(eG.dK,{totalCount:s,countPerPage:12,onPageChange:e=>a(e)})]})},tj=({invoice:e})=>{let t=(0,_.s9)(),i=(0,h.useCallback)(()=>{e.link&&(0,ef.RM)(e.link)},[e.link]),a=e.plan===ea.R$.AI?"AFFiNE AI":e.plan===ea.R$.Pro?e.recurring===ea.zS.Lifetime?"AFFiNE Cloud Believer":"AFFiNE Cloud":null;return(0,l.jsx)(D,{name:new Date(e.createdAt).toLocaleDateString(),desc:`${e.status===ea.Sx.Paid?t["com.affine.payment.billing-setting.paid"]():""} $${e.amount/100} - ${a}`,children:(0,l.jsx)(et.$n,{onClick:i,children:t["com.affine.payment.billing-setting.view-invoice"]()})},e.id)},tv=()=>{let e=(0,_.s9)();return(0,l.jsx)(z,{title:e["com.affine.payment.billing-setting.information"](),children:(0,l.jsxs)("div",{className:"klcomib",children:[(0,l.jsx)(s.EA,{variant:"rounded",height:"104px"}),(0,l.jsx)(s.EA,{variant:"rounded",height:"46px"})]})})},tb=()=>{let e=(0,_.s9)();return(0,l.jsx)(z,{title:e["com.affine.payment.billing-setting.history"](),children:(0,l.jsx)("div",{className:"klcomic",children:(0,l.jsx)(eT.R,{})})})};var t_=i(17597);let tk=`<svg
  width="429"
  height="101"
  viewBox="0 0 429 101"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.3" filter="url(#filter0_i_909_33931)">
    <g clip-path="url(#clip0_909_33931)">
      <rect
        x="0.505859"
        y="30.9414"
        width="40"
        height="40"
        rx="6.06061"
        fill="#454545"
        fill-opacity="0.42"
      />
      <g filter="url(#filter1_d_909_33931)">
        <rect
          x="2.32397"
          y="32.7595"
          width="36.3636"
          height="36.3636"
          rx="3.96118"
          fill="url(#paint0_linear_909_33931)"
        />
        <rect
          x="2.47549"
          y="32.911"
          width="36.0606"
          height="36.0606"
          rx="3.80966"
          stroke="#757575"
          stroke-width="0.30303"
        />
        <g filter="url(#filter2_i_909_33931)">
          <path
            d="M29.6836 40.9414H20.0521C20.0521 43.3415 21.998 45.2874 24.398 45.2874H26.1719V47.0019C26.1739 49.3966 28.1125 51.3379 30.5052 51.3445H30.5059V41.7797C30.5059 41.7783 30.5059 41.7777 30.5059 41.7763C30.5059 41.3195 30.1391 40.9487 29.6843 40.9421H29.6836V40.9414ZM24.9182 45.7388H15.2866C15.2873 48.1389 17.2325 50.0841 19.6326 50.0841H21.4065V51.7993C21.4085 54.1987 23.353 56.1426 25.7524 56.1446V46.5738C25.7524 46.113 25.379 45.7395 24.9182 45.7395V45.7388ZM20.1488 50.5356H10.5059C10.5072 52.9363 12.4538 54.8816 14.8545 54.8816C14.8585 54.8816 14.8625 54.8816 14.8665 54.8816H16.641V56.5954C16.641 58.9948 18.5856 60.9401 20.985 60.9414V51.3732C20.985 50.9104 20.6102 50.5356 20.1474 50.5356H20.1488Z"
            fill="#D0CFCF"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.5" filter="url(#filter3_i_909_33931)">
    <g clip-path="url(#clip1_909_33931)">
      <rect
        x="72.5059"
        y="20.9414"
        width="60"
        height="60"
        rx="9.09091"
        fill="#454545"
        fill-opacity="0.42"
      />
      <g filter="url(#filter4_d_909_33931)">
        <rect
          x="75.2332"
          y="23.6687"
          width="54.5455"
          height="54.5455"
          rx="5.94177"
          fill="url(#paint1_linear_909_33931)"
        />
        <rect
          x="75.4604"
          y="23.896"
          width="54.0909"
          height="54.0909"
          rx="5.7145"
          stroke="#757575"
          stroke-width="0.454545"
        />
        <g filter="url(#filter5_i_909_33931)">
          <path
            d="M107.701 47.2596H101.514V35.1914H107.701C111.04 35.1914 113.756 37.8977 113.756 41.2248C113.756 44.552 111.04 47.2596 107.701 47.2596ZM103.498 45.283H107.701C109.947 45.283 111.772 43.4622 111.772 41.2262C111.772 38.9902 109.945 37.1694 107.701 37.1694H103.498V45.283ZM103.498 47.2596H97.3123C93.9734 47.2596 91.2575 44.5533 91.2575 41.2262C91.2575 37.8991 93.9734 35.1914 97.3123 35.1914H103.499V47.2596H103.498ZM97.3123 37.1681C95.067 37.1681 93.2411 38.9888 93.2411 41.2248C93.2411 43.4608 95.067 45.283 97.3123 45.283H101.516V37.1681H97.3123ZM103.498 57.3498H97.3123C93.9734 57.3498 91.2575 54.6435 91.2575 51.3164C91.2575 47.9893 93.9734 45.283 97.3123 45.283H103.499V57.3498H103.498ZM97.3123 47.2596C95.067 47.2596 93.2411 49.0804 93.2411 51.3164C93.2411 53.5524 95.0684 55.3732 97.3123 55.3732H101.516V47.2596H97.3123ZM97.3447 67.4414C93.9882 67.4414 91.2561 64.7351 91.2561 61.408C91.2561 58.0808 93.972 55.3745 97.3109 55.3745H103.498V61.3421C103.498 64.7055 100.738 67.4414 97.3447 67.4414ZM97.3123 57.3498C96.233 57.3513 95.1983 57.7791 94.4351 58.5396C93.6719 59.3001 93.2425 60.3311 93.2411 61.4066C93.2411 63.644 95.0818 65.4634 97.346 65.4634C99.6452 65.4634 101.517 63.6144 101.517 61.3408V57.3498H97.3123ZM107.701 57.3498H107.569C104.23 57.3498 101.514 54.6435 101.514 51.3164C101.514 47.9893 104.23 45.283 107.569 45.283H107.701C111.04 45.283 113.756 47.9893 113.756 51.3164C113.756 54.6435 111.04 57.3498 107.701 57.3498ZM107.57 47.2596C105.325 47.2596 103.499 49.0804 103.499 51.3164C103.499 53.5524 105.327 55.3732 107.57 55.3732H107.703C109.948 55.3732 111.774 53.5524 111.774 51.3164C111.774 49.0804 109.945 47.2596 107.701 47.2596H107.57Z"
            fill="#3E3E3E"
          />
          <path
            d="M107.701 47.2596H101.514V35.1914H107.701C111.04 35.1914 113.756 37.8977 113.756 41.2248C113.756 44.552 111.04 47.2596 107.701 47.2596ZM103.498 45.283H107.701C109.947 45.283 111.772 43.4622 111.772 41.2262C111.772 38.9902 109.945 37.1694 107.701 37.1694H103.498V45.283ZM103.498 47.2596H97.3123C93.9734 47.2596 91.2575 44.5533 91.2575 41.2262C91.2575 37.8991 93.9734 35.1914 97.3123 35.1914H103.499V47.2596H103.498ZM97.3123 37.1681C95.067 37.1681 93.2411 38.9888 93.2411 41.2248C93.2411 43.4608 95.067 45.283 97.3123 45.283H101.516V37.1681H97.3123ZM103.498 57.3498H97.3123C93.9734 57.3498 91.2575 54.6435 91.2575 51.3164C91.2575 47.9893 93.9734 45.283 97.3123 45.283H103.499V57.3498H103.498ZM97.3123 47.2596C95.067 47.2596 93.2411 49.0804 93.2411 51.3164C93.2411 53.5524 95.0684 55.3732 97.3123 55.3732H101.516V47.2596H97.3123ZM97.3447 67.4414C93.9882 67.4414 91.2561 64.7351 91.2561 61.408C91.2561 58.0808 93.972 55.3745 97.3109 55.3745H103.498V61.3421C103.498 64.7055 100.738 67.4414 97.3447 67.4414ZM97.3123 57.3498C96.233 57.3513 95.1983 57.7791 94.4351 58.5396C93.6719 59.3001 93.2425 60.3311 93.2411 61.4066C93.2411 63.644 95.0818 65.4634 97.346 65.4634C99.6452 65.4634 101.517 63.6144 101.517 61.3408V57.3498H97.3123ZM107.701 57.3498H107.569C104.23 57.3498 101.514 54.6435 101.514 51.3164C101.514 47.9893 104.23 45.283 107.569 45.283H107.701C111.04 45.283 113.756 47.9893 113.756 51.3164C113.756 54.6435 111.04 57.3498 107.701 57.3498ZM107.57 47.2596C105.325 47.2596 103.499 49.0804 103.499 51.3164C103.499 53.5524 105.327 55.3732 107.57 55.3732H107.703C109.948 55.3732 111.774 53.5524 111.774 51.3164C111.774 49.0804 109.945 47.2596 107.701 47.2596H107.57Z"
            fill="#D0CFCF"
          />
        </g>
      </g>
    </g>
  </g>
  <g filter="url(#filter6_i_909_33931)">
    <g clip-path="url(#clip2_909_33931)">
      <rect
        x="164.506"
        y="0.941406"
        width="100"
        height="100"
        rx="15.1515"
        fill="#454545"
        fill-opacity="0.42"
      />
      <g filter="url(#filter7_d_909_33931)">
        <rect
          x="169.051"
          y="5.48682"
          width="90.9091"
          height="90.9091"
          rx="9.90295"
          fill="url(#paint2_linear_909_33931)"
        />
        <rect
          x="169.43"
          y="5.8656"
          width="90.1515"
          height="90.1515"
          rx="9.52416"
          stroke="#595959"
          stroke-width="0.757576"
        />
        <g filter="url(#filter8_i_909_33931)">
          <path
            d="M194.424 41.464C194.424 39.6297 195.152 37.8706 196.449 36.5736C197.746 35.2766 199.506 34.548 201.34 34.548H207.917C208.602 34.548 209.023 33.8356 208.761 33.204C208.628 32.8934 208.523 32.5717 208.447 32.2426C207.684 28.8146 210.273 25.3267 214.019 25.3267C217.768 25.3267 220.354 28.8146 219.591 32.2426C219.515 32.5717 219.41 32.8934 219.278 33.204C219.012 33.8356 219.437 34.548 220.121 34.548H224.393C226.227 34.548 227.986 35.2766 229.283 36.5736C230.58 37.8706 231.309 39.6297 231.309 41.464V45.7357C231.309 46.4204 232.019 46.8423 232.653 46.5795C232.964 46.4504 233.282 46.3397 233.614 46.266C237.042 45.5029 240.53 48.0895 240.53 51.8379C240.53 55.5864 237.042 58.173 233.614 57.4099C233.285 57.3341 232.964 57.2291 232.653 57.0964C232.021 56.8313 231.309 57.2554 231.309 57.9401V64.5172C231.309 66.3515 230.58 68.1106 229.283 69.4076C227.986 70.7046 226.227 71.4332 224.393 71.4332H220.029C219.365 71.4332 218.939 70.7624 219.13 70.1284C219.225 69.8057 219.296 69.4737 219.326 69.1279C219.387 68.3938 219.296 67.655 219.057 66.9581C218.818 66.2613 218.437 65.6216 217.938 65.0795C217.439 64.5373 216.834 64.1046 216.159 63.8086C215.484 63.5126 214.756 63.3598 214.019 63.3598C213.282 63.3598 212.554 63.5126 211.879 63.8086C211.205 64.1046 210.599 64.5373 210.1 65.0795C209.601 65.6216 209.22 66.2613 208.982 66.9581C208.743 67.655 208.651 68.3938 208.712 69.1279C208.742 69.4737 208.814 69.8057 208.911 70.1284C209.1 70.7624 208.673 71.4332 208.011 71.4332H201.34C199.506 71.4332 197.746 70.7046 196.449 69.4076C195.152 68.1106 194.424 66.3515 194.424 64.5172V57.8479C194.424 57.184 195.095 56.7575 195.729 56.9488C196.051 57.0434 196.383 57.1148 196.729 57.1448C197.463 57.206 198.202 57.1143 198.899 56.8754C199.596 56.6366 200.235 56.2557 200.778 55.7569C201.32 55.2582 201.752 54.6523 202.048 53.9778C202.344 53.3032 202.497 52.5746 202.497 51.8379C202.497 51.1013 202.344 50.3726 202.048 49.6981C201.752 49.0235 201.32 48.4177 200.778 47.9189C200.235 47.4202 199.596 47.0393 198.899 46.8004C198.202 46.5615 197.463 46.4698 196.729 46.5311C196.383 46.561 196.051 46.6325 195.729 46.7293C195.095 46.9184 194.424 46.4919 194.424 45.8302V41.464Z"
            fill="#D0CFCF"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.5" filter="url(#filter9_i_909_33931)">
    <g clip-path="url(#clip3_909_33931)">
      <rect
        x="296.506"
        y="20.9414"
        width="60"
        height="60"
        rx="9.09091"
        fill="#454545"
        fill-opacity="0.42"
      />
      <g filter="url(#filter10_d_909_33931)">
        <rect
          x="299.233"
          y="23.6687"
          width="54.5455"
          height="54.5455"
          rx="5.94177"
          fill="url(#paint3_linear_909_33931)"
        />
        <rect
          x="299.46"
          y="23.896"
          width="54.0909"
          height="54.0909"
          rx="5.7145"
          stroke="#757575"
          stroke-width="0.454545"
        />
        <g
          clip-path="url(#clip4_909_33931)"
          filter="url(#filter11_i_909_33931)"
        >
          <path
            d="M326.539 32.9546C316.589 32.9546 308.519 41.023 308.519 50.9746C308.519 58.9364 313.682 65.6909 320.843 68.074C321.743 68.2407 322.034 67.6821 322.034 67.2076V63.8528C317.022 64.943 315.978 61.7265 315.978 61.7265C315.158 59.6437 313.976 59.0896 313.976 59.0896C312.341 57.9708 314.101 57.9948 314.101 57.9948C315.91 58.121 316.863 59.8524 316.863 59.8524C318.469 62.6065 321.078 61.8106 322.106 61.3496C322.267 60.1858 322.734 59.3899 323.251 58.9409C319.249 58.4829 315.041 56.9377 315.041 50.0345C315.041 48.0658 315.745 46.4591 316.897 45.1977C316.711 44.7427 316.094 42.9091 317.073 40.4284C317.073 40.4284 318.586 39.9448 322.03 42.2754C323.467 41.876 325.008 41.6763 326.539 41.6687C328.071 41.6763 329.613 41.876 331.053 42.2754C334.494 39.9448 336.004 40.4284 336.004 40.4284C336.985 42.9106 336.368 44.7442 336.181 45.1977C337.338 46.4591 338.036 48.0673 338.036 50.0345C338.036 56.9557 333.821 58.4799 329.808 58.9259C330.454 59.4845 331.044 60.5807 331.044 62.2626V67.2076C331.044 67.6866 331.333 68.2497 332.247 68.0725C339.403 65.6864 344.559 58.9334 344.559 50.9746C344.559 41.023 336.491 32.9546 326.539 32.9546Z"
            fill="#D0CFCF"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.3" filter="url(#filter12_i_909_33931)">
    <g clip-path="url(#clip5_909_33931)">
      <rect
        x="388.506"
        y="30.9414"
        width="40"
        height="40"
        rx="6.06061"
        fill="#454545"
        fill-opacity="0.42"
      />
      <g filter="url(#filter13_d_909_33931)">
        <rect
          x="390.324"
          y="32.7595"
          width="36.3636"
          height="36.3636"
          rx="3.96118"
          fill="url(#paint4_linear_909_33931)"
        />
        <rect
          x="390.475"
          y="32.911"
          width="36.0606"
          height="36.0606"
          rx="3.80966"
          stroke="#757575"
          stroke-width="0.30303"
        />
        <g filter="url(#filter14_i_909_33931)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M414.856 44.5774C411.355 41.0764 405.687 41.0628 402.169 44.5366L414.897 57.2642C418.37 53.7463 418.357 48.0785 414.856 44.5774ZM400.373 47.0514L412.382 59.06C413.005 58.7615 413.6 58.3872 414.155 57.937L401.496 45.278C401.046 45.8326 400.672 46.4284 400.373 47.0514ZM408.998 59.9272L399.506 50.4352C399.551 49.6297 399.704 48.8291 399.964 48.0569L411.376 59.4687C410.604 59.7293 409.803 59.8821 408.998 59.9272ZM402.128 57.3054C400.611 55.7882 399.748 53.8641 399.541 51.8845L407.549 59.8922C405.569 59.6848 403.645 58.8225 402.128 57.3054Z"
            fill="#D0CFCF"
          />
        </g>
      </g>
    </g>
  </g>
  <defs>
    <filter
      id="filter0_i_909_33931"
      x="0.505859"
      y="30.7394"
      width="40"
      height="40.202"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.20202" />
      <feGaussianBlur stdDeviation="0.707071" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter1_d_909_33931"
      x="0.808823"
      y="31.7494"
      width="39.3938"
      height="39.3938"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.505051" />
      <feGaussianBlur stdDeviation="0.757576" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_909_33931"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_909_33931"
        result="shape"
      />
    </filter>
    <filter
      id="filter2_i_909_33931"
      x="8.51465"
      y="38.9502"
      width="24.2725"
      height="24.2725"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.245902" dy="0.245902" />
      <feGaussianBlur stdDeviation="0.327869" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter3_i_909_33931"
      x="72.5059"
      y="20.6384"
      width="60"
      height="60.303"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.30303" />
      <feGaussianBlur stdDeviation="1.06061" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter4_d_909_33931"
      x="72.9604"
      y="22.1535"
      width="59.0909"
      height="59.0909"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.757576" />
      <feGaussianBlur stdDeviation="1.13636" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_909_33931"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_909_33931"
        result="shape"
      />
    </filter>
    <filter
      id="filter5_i_909_33931"
      x="84.5193"
      y="32.9546"
      width="36.4089"
      height="36.4089"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.368852" dy="0.368852" />
      <feGaussianBlur stdDeviation="0.491803" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter6_i_909_33931"
      x="164.506"
      y="0.436356"
      width="100"
      height="100.505"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.50505" />
      <feGaussianBlur stdDeviation="1.76768" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter7_d_909_33931"
      x="165.263"
      y="2.96156"
      width="98.4849"
      height="98.4849"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="1.26263" />
      <feGaussianBlur stdDeviation="1.89394" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_909_33931"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_909_33931"
        result="shape"
      />
    </filter>
    <filter
      id="filter8_i_909_33931"
      x="194.424"
      y="25.3267"
      width="46.7212"
      height="46.7212"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.614754" dy="0.614754" />
      <feGaussianBlur stdDeviation="0.819672" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter9_i_909_33931"
      x="296.506"
      y="20.6384"
      width="60"
      height="60.303"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.30303" />
      <feGaussianBlur stdDeviation="1.06061" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter10_d_909_33931"
      x="296.96"
      y="22.1535"
      width="59.0909"
      height="59.0909"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.757576" />
      <feGaussianBlur stdDeviation="1.13636" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_909_33931"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_909_33931"
        result="shape"
      />
    </filter>
    <filter
      id="filter11_i_909_33931"
      x="308.519"
      y="32.9546"
      width="36.4089"
      height="36.4089"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.368852" dy="0.368852" />
      <feGaussianBlur stdDeviation="0.491803" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter12_i_909_33931"
      x="388.506"
      y="30.7394"
      width="40"
      height="40.202"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.20202" />
      <feGaussianBlur stdDeviation="0.707071" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <filter
      id="filter13_d_909_33931"
      x="388.809"
      y="31.7494"
      width="39.3938"
      height="39.3938"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.505051" />
      <feGaussianBlur stdDeviation="0.757576" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_909_33931"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_909_33931"
        result="shape"
      />
    </filter>
    <filter
      id="filter14_i_909_33931"
      x="396.515"
      y="38.9502"
      width="24.2725"
      height="24.2725"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.245902" dy="0.245902" />
      <feGaussianBlur stdDeviation="0.327869" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_909_33931"
      />
    </filter>
    <linearGradient
      id="paint0_linear_909_33931"
      x1="7.37448"
      y1="33.5171"
      x2="28.6876"
      y2="69.5777"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#383838" />
      <stop offset="0.260417" stop-color="#2A2A2A" />
      <stop offset="0.619792" stop-color="#393939" />
      <stop offset="1" stop-color="#414141" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_909_33931"
      x1="82.8089"
      y1="24.8051"
      x2="114.779"
      y2="78.896"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#383838" />
      <stop offset="0.260417" stop-color="#2A2A2A" />
      <stop offset="0.619792" stop-color="#393939" />
      <stop offset="1" stop-color="#414141" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_909_33931"
      x1="181.678"
      y1="7.38076"
      x2="234.96"
      y2="97.5323"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#383838" />
      <stop offset="0.260417" stop-color="#2A2A2A" />
      <stop offset="0.619792" stop-color="#393939" />
      <stop offset="1" stop-color="#414141" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_909_33931"
      x1="306.809"
      y1="24.8051"
      x2="338.779"
      y2="78.896"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#383838" />
      <stop offset="0.260417" stop-color="#2A2A2A" />
      <stop offset="0.619792" stop-color="#393939" />
      <stop offset="1" stop-color="#414141" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_909_33931"
      x1="395.374"
      y1="33.5171"
      x2="416.688"
      y2="69.5777"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#383838" />
      <stop offset="0.260417" stop-color="#2A2A2A" />
      <stop offset="0.619792" stop-color="#393939" />
      <stop offset="1" stop-color="#414141" />
    </linearGradient>
    <clipPath id="clip0_909_33931">
      <rect
        x="0.505859"
        y="30.9414"
        width="40"
        height="40"
        rx="6.06061"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip1_909_33931">
      <rect
        x="72.5059"
        y="20.9414"
        width="60"
        height="60"
        rx="9.09091"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip2_909_33931">
      <rect
        x="164.506"
        y="0.941406"
        width="100"
        height="100"
        rx="15.1515"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip3_909_33931">
      <rect
        x="296.506"
        y="20.9414"
        width="60"
        height="60"
        rx="9.09091"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip4_909_33931">
      <rect
        width="36.0399"
        height="36.0399"
        fill="white"
        transform="translate(308.519 32.9546)"
      />
    </clipPath>
    <clipPath id="clip5_909_33931">
      <rect
        x="388.506"
        y="30.9414"
        width="40"
        height="40"
        rx="6.06061"
        fill="white"
      />
    </clipPath>
  </defs>
</svg>`,tw=`<svg
  width="429"
  height="100"
  viewBox="0 0 429 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.6" filter="url(#filter0_i_907_33313)">
    <g clip-path="url(#clip0_907_33313)">
      <rect
        x="0.624512"
        y="30"
        width="40"
        height="40"
        rx="6.06061"
        fill="#F8F8F8"
      />
      <g filter="url(#filter1_d_907_33313)">
        <rect
          x="2.44263"
          y="31.8181"
          width="36.3636"
          height="36.3636"
          rx="3.96118"
          fill="url(#paint0_linear_907_33313)"
        />
        <rect
          x="2.59414"
          y="31.9697"
          width="36.0606"
          height="36.0606"
          rx="3.80966"
          stroke="#E4E4E4"
          stroke-width="0.30303"
        />
        <g filter="url(#filter2_i_907_33313)">
          <path
            d="M29.8023 40H20.1707C20.1707 42.4001 22.1166 44.346 24.5167 44.346H26.2905V46.0605C26.2925 48.4552 28.2311 50.3965 30.6238 50.4031H30.6245V40.8383C30.6245 40.8369 30.6245 40.8363 30.6245 40.8349C30.6245 40.3781 30.2577 40.0073 29.8029 40.0007H29.8023V40ZM25.0368 44.7974H15.4053C15.4059 47.1975 17.3512 49.1427 19.7512 49.1427H21.5251V50.8579C21.5271 53.2573 23.4717 55.2012 25.8711 55.2032V45.6324C25.8711 45.1716 25.4976 44.7981 25.0368 44.7981V44.7974ZM20.2674 49.5942H10.6245C10.6258 51.9949 12.5724 53.9402 14.9731 53.9402C14.9772 53.9402 14.9812 53.9402 14.9852 53.9402H16.7597V55.654C16.7597 58.0534 18.7043 59.9987 21.1037 60V50.4318C21.1037 49.969 20.7289 49.5942 20.2661 49.5942H20.2674Z"
            fill="#E2E5E6"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.8" filter="url(#filter3_i_907_33313)">
    <g clip-path="url(#clip1_907_33313)">
      <rect
        x="72.6245"
        y="20"
        width="60"
        height="60"
        rx="9.09091"
        fill="#F8F8F8"
      />
      <g filter="url(#filter4_d_907_33313)">
        <rect
          x="75.3518"
          y="22.7272"
          width="54.5455"
          height="54.5455"
          rx="5.94177"
          fill="url(#paint1_linear_907_33313)"
        />
        <rect
          x="75.5791"
          y="22.9545"
          width="54.0909"
          height="54.0909"
          rx="5.7145"
          stroke="#E4E4E4"
          stroke-width="0.454545"
        />
        <g filter="url(#filter5_i_907_33313)">
          <path
            d="M107.82 46.3182H101.633V34.25H107.82C111.159 34.25 113.875 36.9563 113.875 40.2834C113.875 43.6105 111.159 46.3182 107.82 46.3182ZM103.617 44.3415H107.82C110.065 44.3415 111.891 42.5208 111.891 40.2848C111.891 38.0488 110.064 36.228 107.82 36.228H103.617V44.3415ZM103.617 46.3182H97.4309C94.092 46.3182 91.3761 43.6119 91.3761 40.2848C91.3761 36.9576 94.092 34.25 97.4309 34.25H103.618V46.3182H103.617ZM97.4309 36.2266C95.1857 36.2266 93.3598 38.0474 93.3598 40.2834C93.3598 42.5194 95.1857 44.3415 97.4309 44.3415H101.634V36.2266H97.4309ZM103.617 56.4084H97.4309C94.092 56.4084 91.3761 53.7021 91.3761 50.375C91.3761 47.0478 94.092 44.3415 97.4309 44.3415H103.618V56.4084H103.617ZM97.4309 46.3182C95.1857 46.3182 93.3598 48.139 93.3598 50.375C93.3598 52.611 95.187 54.4318 97.4309 54.4318H101.634V46.3182H97.4309ZM97.4633 66.5C94.1069 66.5 91.3748 63.7937 91.3748 60.4665C91.3748 57.1394 94.0907 54.4331 97.4296 54.4331H103.617V60.4007C103.617 63.7641 100.856 66.5 97.4633 66.5ZM97.4309 56.4084C96.3516 56.4098 95.317 56.8377 94.5538 57.5982C93.7906 58.3587 93.3612 59.3897 93.3598 60.4652C93.3598 62.7025 95.2005 64.522 97.4647 64.522C99.7639 64.522 101.636 62.673 101.636 60.3993V56.4084H97.4309ZM107.82 56.4084H107.688C104.349 56.4084 101.633 53.7021 101.633 50.375C101.633 47.0478 104.349 44.3415 107.688 44.3415H107.82C111.159 44.3415 113.875 47.0478 113.875 50.375C113.875 53.7021 111.159 56.4084 107.82 56.4084ZM107.689 46.3182C105.444 46.3182 103.618 48.139 103.618 50.375C103.618 52.611 105.445 54.4318 107.689 54.4318H107.821C110.067 54.4318 111.892 52.611 111.892 50.375C111.892 48.139 110.064 46.3182 107.82 46.3182H107.689Z"
            fill="black"
          />
          <path
            d="M107.82 46.3182H101.633V34.25H107.82C111.159 34.25 113.875 36.9563 113.875 40.2834C113.875 43.6105 111.159 46.3182 107.82 46.3182ZM103.617 44.3415H107.82C110.065 44.3415 111.891 42.5208 111.891 40.2848C111.891 38.0488 110.064 36.228 107.82 36.228H103.617V44.3415ZM103.617 46.3182H97.4309C94.092 46.3182 91.3761 43.6119 91.3761 40.2848C91.3761 36.9576 94.092 34.25 97.4309 34.25H103.618V46.3182H103.617ZM97.4309 36.2266C95.1857 36.2266 93.3598 38.0474 93.3598 40.2834C93.3598 42.5194 95.1857 44.3415 97.4309 44.3415H101.634V36.2266H97.4309ZM103.617 56.4084H97.4309C94.092 56.4084 91.3761 53.7021 91.3761 50.375C91.3761 47.0478 94.092 44.3415 97.4309 44.3415H103.618V56.4084H103.617ZM97.4309 46.3182C95.1857 46.3182 93.3598 48.139 93.3598 50.375C93.3598 52.611 95.187 54.4318 97.4309 54.4318H101.634V46.3182H97.4309ZM97.4633 66.5C94.1069 66.5 91.3748 63.7937 91.3748 60.4665C91.3748 57.1394 94.0907 54.4331 97.4296 54.4331H103.617V60.4007C103.617 63.7641 100.856 66.5 97.4633 66.5ZM97.4309 56.4084C96.3516 56.4098 95.317 56.8377 94.5538 57.5982C93.7906 58.3587 93.3612 59.3897 93.3598 60.4652C93.3598 62.7025 95.2005 64.522 97.4647 64.522C99.7639 64.522 101.636 62.673 101.636 60.3993V56.4084H97.4309ZM107.82 56.4084H107.688C104.349 56.4084 101.633 53.7021 101.633 50.375C101.633 47.0478 104.349 44.3415 107.688 44.3415H107.82C111.159 44.3415 113.875 47.0478 113.875 50.375C113.875 53.7021 111.159 56.4084 107.82 56.4084ZM107.689 46.3182C105.444 46.3182 103.618 48.139 103.618 50.375C103.618 52.611 105.445 54.4318 107.689 54.4318H107.821C110.067 54.4318 111.892 52.611 111.892 50.375C111.892 48.139 110.064 46.3182 107.82 46.3182H107.689Z"
            fill="#E2E5E6"
          />
        </g>
      </g>
    </g>
  </g>
  <g filter="url(#filter6_i_907_33313)">
    <g clip-path="url(#clip2_907_33313)">
      <rect x="164.625" width="100" height="100" rx="15.1515" fill="#F8F8F8" />
      <g filter="url(#filter7_d_907_33313)">
        <rect
          x="169.17"
          y="4.54544"
          width="90.9091"
          height="90.9091"
          rx="9.90295"
          fill="url(#paint2_linear_907_33313)"
        />
        <rect
          x="169.549"
          y="4.92423"
          width="90.1515"
          height="90.1515"
          rx="9.52416"
          stroke="#E4E4E4"
          stroke-width="0.757576"
        />
        <g filter="url(#filter8_i_907_33313)">
          <path
            d="M194.542 40.5226C194.542 38.6884 195.271 36.9293 196.568 35.6323C197.865 34.3353 199.624 33.6066 201.458 33.6066H208.036C208.72 33.6066 209.142 32.8943 208.879 32.2626C208.747 31.9521 208.642 31.6304 208.566 31.3013C207.803 27.8733 210.392 24.3853 214.138 24.3853C217.886 24.3853 220.473 27.8733 219.71 31.3013C219.634 31.6304 219.529 31.9521 219.396 32.2626C219.131 32.8943 219.555 33.6066 220.24 33.6066H224.512C226.346 33.6066 228.105 34.3353 229.402 35.6323C230.699 36.9293 231.428 38.6884 231.428 40.5226V44.7944C231.428 45.4791 232.138 45.9009 232.772 45.6381C233.083 45.509 233.401 45.3984 233.733 45.3246C237.161 44.5615 240.649 47.1481 240.649 50.8966C240.649 54.645 237.161 57.2316 233.733 56.4686C233.404 56.3927 233.082 56.2878 232.772 56.155C232.14 55.8899 231.428 56.3141 231.428 56.9988V63.5759C231.428 65.4101 230.699 67.1692 229.402 68.4662C228.105 69.7632 226.346 70.4919 224.512 70.4919H220.148C219.484 70.4919 219.057 69.821 219.249 69.1871C219.343 68.8643 219.415 68.5323 219.445 68.1865C219.506 67.4524 219.414 66.7136 219.175 66.0168C218.936 65.3199 218.556 64.6802 218.057 64.1381C217.558 63.596 216.952 63.1633 216.278 62.8673C215.603 62.5713 214.874 62.4184 214.138 62.4184C213.401 62.4184 212.672 62.5713 211.998 62.8673C211.323 63.1633 210.718 63.596 210.219 64.1381C209.72 64.6802 209.339 65.3199 209.1 66.0168C208.861 66.7136 208.77 67.4524 208.831 68.1865C208.861 68.5323 208.932 68.8643 209.029 69.1871C209.218 69.821 208.792 70.4919 208.13 70.4919H201.458C199.624 70.4919 197.865 69.7632 196.568 68.4662C195.271 67.1692 194.542 65.4101 194.542 63.5759V56.9066C194.542 56.2426 195.213 55.8162 195.847 56.0075C196.17 56.102 196.502 56.1735 196.848 56.2034C197.582 56.2647 198.321 56.173 199.018 55.9341C199.714 55.6952 200.354 55.3143 200.896 54.8156C201.438 54.3168 201.871 53.711 202.167 53.0364C202.463 52.3619 202.616 51.6332 202.616 50.8966C202.616 50.1599 202.463 49.4313 202.167 48.7567C201.871 48.0822 201.438 47.4764 200.896 46.9776C200.354 46.4788 199.714 46.098 199.018 45.8591C198.321 45.6202 197.582 45.5285 196.848 45.5897C196.502 45.6197 196.17 45.6912 195.847 45.788C195.213 45.977 194.542 45.5505 194.542 44.8889V40.5226Z"
            fill="#DEE2E3"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.8" filter="url(#filter9_i_907_33313)">
    <g clip-path="url(#clip3_907_33313)">
      <rect
        x="296.625"
        y="20"
        width="60"
        height="60"
        rx="9.09091"
        fill="#F8F8F8"
      />
      <g filter="url(#filter10_d_907_33313)">
        <rect
          x="299.352"
          y="22.7272"
          width="54.5455"
          height="54.5455"
          rx="5.94177"
          fill="url(#paint3_linear_907_33313)"
        />
        <rect
          x="299.579"
          y="22.9545"
          width="54.0909"
          height="54.0909"
          rx="5.7145"
          stroke="#E4E4E4"
          stroke-width="0.454545"
        />
        <g
          clip-path="url(#clip4_907_33313)"
          filter="url(#filter11_i_907_33313)"
        >
          <path
            d="M326.658 32.0132C316.708 32.0132 308.638 40.0817 308.638 50.0332C308.638 57.995 313.801 64.7495 320.962 67.1327C321.862 67.2994 322.153 66.7407 322.153 66.2662V62.9115C317.14 64.0017 316.097 60.7851 316.097 60.7851C315.277 58.7023 314.095 58.1482 314.095 58.1482C312.46 57.0295 314.22 57.0535 314.22 57.0535C316.029 57.1796 316.981 58.9111 316.981 58.9111C318.588 61.6651 321.196 60.8692 322.225 60.4082C322.386 59.2444 322.853 58.4485 323.369 57.9995C319.367 57.5415 315.16 55.9963 315.16 49.0932C315.16 47.1245 315.864 45.5177 317.016 44.2563C316.83 43.8013 316.212 41.9678 317.191 39.487C317.191 39.487 318.705 39.0035 322.148 41.3341C323.586 40.9346 325.126 40.7349 326.658 40.7274C328.19 40.7349 329.732 40.9346 331.172 41.3341C334.612 39.0035 336.123 39.487 336.123 39.487C337.103 41.9693 336.486 43.8028 336.3 44.2563C337.456 45.5177 338.155 47.126 338.155 49.0932C338.155 56.0143 333.939 57.5385 329.927 57.9845C330.573 58.5432 331.163 59.6394 331.163 61.3212V66.2662C331.163 66.7452 331.451 67.3084 332.366 67.1312C339.521 64.745 344.678 57.992 344.678 50.0332C344.678 40.0817 336.609 32.0132 326.658 32.0132Z"
            fill="#E2E5E6"
          />
        </g>
      </g>
    </g>
  </g>
  <g opacity="0.6" filter="url(#filter12_i_907_33313)">
    <g clip-path="url(#clip5_907_33313)">
      <rect
        x="388.625"
        y="30"
        width="40"
        height="40"
        rx="6.06061"
        fill="#F8F8F8"
      />
      <g filter="url(#filter13_d_907_33313)">
        <rect
          x="390.443"
          y="31.8181"
          width="36.3636"
          height="36.3636"
          rx="3.96118"
          fill="url(#paint4_linear_907_33313)"
        />
        <rect
          x="390.594"
          y="31.9697"
          width="36.0606"
          height="36.0606"
          rx="3.80966"
          stroke="#E4E4E4"
          stroke-width="0.30303"
        />
        <g filter="url(#filter14_i_907_33313)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M414.974 43.636C411.473 40.135 405.805 40.1214 402.287 43.5952L415.015 56.3228C418.489 52.8049 418.475 47.1371 414.974 43.636ZM400.492 46.1099L412.5 58.1186C413.123 57.8201 413.719 57.4458 414.274 56.9956L401.615 44.3365C401.165 44.8912 400.79 45.487 400.492 46.1099ZM409.117 58.9858L399.625 49.4938C399.67 48.6883 399.822 47.8877 400.083 47.1155L411.495 58.5273C410.723 58.7879 409.922 58.9407 409.117 58.9858ZM402.246 56.364C400.729 54.8468 399.867 52.9227 399.66 50.9431L407.667 58.9508C405.688 58.7434 403.763 57.8811 402.246 56.364Z"
            fill="#DEE2E3"
          />
        </g>
      </g>
    </g>
  </g>
  <defs>
    <filter
      id="filter0_i_907_33313"
      x="0.624512"
      y="29.798"
      width="40"
      height="40.202"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.20202" />
      <feGaussianBlur stdDeviation="0.707071" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter1_d_907_33313"
      x="0.927476"
      y="30.808"
      width="39.3938"
      height="39.394"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.505051" />
      <feGaussianBlur stdDeviation="0.757576" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_907_33313"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_907_33313"
        result="shape"
      />
    </filter>
    <filter
      id="filter2_i_907_33313"
      x="8.6333"
      y="38.0088"
      width="24.2725"
      height="24.2725"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.245902" dy="0.245902" />
      <feGaussianBlur stdDeviation="0.327869" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter3_i_907_33313"
      x="72.6245"
      y="19.697"
      width="60"
      height="60.303"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.30303" />
      <feGaussianBlur stdDeviation="1.06061" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter4_d_907_33313"
      x="73.0791"
      y="21.2121"
      width="59.0909"
      height="59.0909"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.757576" />
      <feGaussianBlur stdDeviation="1.13636" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_907_33313"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_907_33313"
        result="shape"
      />
    </filter>
    <filter
      id="filter5_i_907_33313"
      x="84.6379"
      y="32.0132"
      width="36.4089"
      height="36.4088"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.368852" dy="0.368852" />
      <feGaussianBlur stdDeviation="0.491803" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter6_i_907_33313"
      x="164.625"
      y="-0.50505"
      width="100"
      height="100.505"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.50505" />
      <feGaussianBlur stdDeviation="1.76768" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter7_d_907_33313"
      x="165.382"
      y="2.02019"
      width="98.4849"
      height="98.4848"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="1.26263" />
      <feGaussianBlur stdDeviation="1.89394" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_907_33313"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_907_33313"
        result="shape"
      />
    </filter>
    <filter
      id="filter8_i_907_33313"
      x="194.542"
      y="24.3853"
      width="46.7212"
      height="46.7213"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.614754" dy="0.614754" />
      <feGaussianBlur stdDeviation="0.819672" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter9_i_907_33313"
      x="296.625"
      y="19.697"
      width="60"
      height="60.303"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.30303" />
      <feGaussianBlur stdDeviation="1.06061" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter10_d_907_33313"
      x="297.079"
      y="21.2121"
      width="59.0909"
      height="59.0909"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.757576" />
      <feGaussianBlur stdDeviation="1.13636" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_907_33313"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_907_33313"
        result="shape"
      />
    </filter>
    <filter
      id="filter11_i_907_33313"
      x="308.638"
      y="32.0132"
      width="36.4089"
      height="36.4088"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.368852" dy="0.368852" />
      <feGaussianBlur stdDeviation="0.491803" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter12_i_907_33313"
      x="388.625"
      y="29.798"
      width="40"
      height="40.202"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.20202" />
      <feGaussianBlur stdDeviation="0.707071" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <filter
      id="filter13_d_907_33313"
      x="388.927"
      y="30.808"
      width="39.3938"
      height="39.394"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="0.505051" />
      <feGaussianBlur stdDeviation="0.757576" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_907_33313"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_907_33313"
        result="shape"
      />
    </filter>
    <filter
      id="filter14_i_907_33313"
      x="396.633"
      y="38.0088"
      width="24.2725"
      height="24.2725"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="BackgroundImageFix"
        result="shape"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="0.245902" dy="0.245902" />
      <feGaussianBlur stdDeviation="0.327869" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
      />
      <feBlend
        mode="normal"
        in2="shape"
        result="effect1_innerShadow_907_33313"
      />
    </filter>
    <linearGradient
      id="paint0_linear_907_33313"
      x1="7.49313"
      y1="32.5757"
      x2="28.8063"
      y2="68.6363"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F8F8F8" />
      <stop offset="0.348555" stop-color="white" />
      <stop offset="0.672956" stop-color="white" />
      <stop offset="1" stop-color="#FAFAFA" />
      <stop offset="1" stop-color="#F8F8F8" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_907_33313"
      x1="82.9276"
      y1="23.8636"
      x2="114.897"
      y2="77.9545"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F8F8F8" />
      <stop offset="0.348555" stop-color="white" />
      <stop offset="0.672956" stop-color="white" />
      <stop offset="1" stop-color="#FAFAFA" />
      <stop offset="1" stop-color="#F8F8F8" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_907_33313"
      x1="181.796"
      y1="6.43938"
      x2="235.079"
      y2="96.5909"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F8F8F8" />
      <stop offset="0.348555" stop-color="white" />
      <stop offset="0.672956" stop-color="white" />
      <stop offset="1" stop-color="#FAFAFA" />
      <stop offset="1" stop-color="#F8F8F8" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_907_33313"
      x1="306.928"
      y1="23.8636"
      x2="338.897"
      y2="77.9545"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F8F8F8" />
      <stop offset="0.348555" stop-color="white" />
      <stop offset="0.672956" stop-color="white" />
      <stop offset="1" stop-color="#FAFAFA" />
      <stop offset="1" stop-color="#F8F8F8" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_907_33313"
      x1="395.493"
      y1="32.5757"
      x2="416.806"
      y2="68.6363"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F8F8F8" />
      <stop offset="0.348555" stop-color="white" />
      <stop offset="0.672956" stop-color="white" />
      <stop offset="1" stop-color="#FAFAFA" />
      <stop offset="1" stop-color="#F8F8F8" />
    </linearGradient>
    <clipPath id="clip0_907_33313">
      <rect
        x="0.624512"
        y="30"
        width="40"
        height="40"
        rx="6.06061"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip1_907_33313">
      <rect
        x="72.6245"
        y="20"
        width="60"
        height="60"
        rx="9.09091"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip2_907_33313">
      <rect x="164.625" width="100" height="100" rx="15.1515" fill="white" />
    </clipPath>
    <clipPath id="clip3_907_33313">
      <rect
        x="296.625"
        y="20"
        width="60"
        height="60"
        rx="9.09091"
        fill="white"
      />
    </clipPath>
    <clipPath id="clip4_907_33313">
      <rect
        width="36.0399"
        height="36.0399"
        fill="white"
        transform="translate(308.638 32.0132)"
      />
    </clipPath>
    <clipPath id="clip5_907_33313">
      <rect
        x="388.625"
        y="30"
        width="40"
        height="40"
        rx="6.06061"
        fill="white"
      />
    </clipPath>
  </defs>
</svg>`,tS=()=>{let{resolvedTheme:e}=(0,eL.D)();return(0,l.jsx)("div",{className:"bqcxvw0",dangerouslySetInnerHTML:{__html:"dark"===e?tk:tw}})},tF=({onConfirm:e})=>{let t=(0,_.s9)(),[i,a]=(0,h.useState)(!1),n=(0,h.useCallback)((e,t)=>{a(t)},[]);return(0,l.jsxs)("div",{className:"_1ge4cxu0","data-testid":"experimental-prompt",children:[(0,l.jsx)("div",{className:"_1ge4cxu1",children:t["com.affine.settings.workspace.experimental-features.prompt-header"]()}),(0,l.jsx)("div",{className:"_1ge4cxu2",children:(0,l.jsx)(tS,{})}),(0,l.jsxs)("div",{className:"_1ge4cxu3",children:[(0,l.jsx)("div",{className:"_1ge4cxu4",children:t["com.affine.settings.workspace.experimental-features.prompt-warning-title"]()}),t["com.affine.settings.workspace.experimental-features.prompt-warning"]()]}),(0,l.jsx)("div",{className:"_1ge4cxu5"}),(0,l.jsxs)("label",{className:"_1ge4cxu6",children:[(0,l.jsx)(s.Sc,{checked:i,onChange:n,"data-testid":"experimental-prompt-disclaimer"}),t["com.affine.settings.workspace.experimental-features.prompt-disclaimer"]()]}),(0,l.jsx)("div",{className:"_1ge4cxu8",children:(0,l.jsx)(s.$n,{disabled:!i,onClick:e,variant:"primary","data-testid":"experimental-confirm-button",children:t["com.affine.settings.workspace.experimental-features.get-started"]()})})]})},tA=({type:e})=>{switch(e){case"discord":return(0,l.jsx)(J.DiscordIcon,{fontSize:16});case"email":return(0,l.jsx)(J.EmailIcon,{fontSize:16});case"github":return(0,l.jsx)(J.GithubIcon,{fontSize:16});default:return null}},tN={discord:"https://discord.gg/whd5mjYqVw",email:"mailto:support@toeverything.info",github:"https://github.com/toeverything/AFFiNE/issues"},tM=({title:e,description:t,feedbackType:i,isMutating:a,checked:n,onChange:r,testId:o})=>{let c=i?tN[i]:void 0;return(0,l.jsxs)("div",{className:"_1ge4cxuc",children:[(0,l.jsxs)("div",{className:"_1ge4cxu9",children:[e,(0,l.jsx)(s.dO,{checked:n,onChange:r,className:a?"_1ge4cxua":"","data-testid":o})]}),!!t&&(0,l.jsx)(s.m_,{content:t,children:(0,l.jsx)("div",{className:"_1ge4cxud",children:t})}),!!i&&(0,l.jsxs)("a",{className:"_1ge4cxue",href:c,target:"_blank",rel:"noreferrer",children:[(0,l.jsx)(tA,{type:i}),(0,l.jsx)("span",{children:"Discussion about this feature"}),(0,l.jsx)(J.ArrowRightSmallIcon,{fontSize:20,className:"_1ge4cxuf"})]})]})},tB=()=>{let{appSettings:e,updateSettings:t}=(0,ew.V)(),i=(0,h.useCallback)(e=>{t("enableMultiView",e)},[t]),a=e$.dn.enableMultiView,n=a?.precondition?.();return a&&n?(0,l.jsx)(tM,{title:a.displayName,description:a.description,feedbackType:a.feedbackType,checked:e.enableMultiView,onChange:i}):null},t$=()=>{let{appSettings:e,updateSettings:t}=(0,ew.V)(),i=(0,h.useCallback)((i,a)=>{t("editorFlags",{...e.editorFlags,[i]:a})},[e.editorFlags,t]);return(0,l.jsx)(l.Fragment,{children:Object.entries(e$.F$).map(([t,a])=>a.precondition&&!a.precondition()?null:(0,l.jsx)(tM,{title:"Block Suite: "+a.displayName,description:a.description,feedbackType:a.feedbackType,checked:!!e.editorFlags?.[t],onChange:e=>i(t,e)},t))})},tL=()=>{let e=(0,_.s9)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:e["com.affine.settings.workspace.experimental-features.header.plugins"](),subtitle:e["com.affine.settings.workspace.experimental-features.header.subtitle"]()}),(0,l.jsxs)("div",{className:"_1ge4cxu7","data-testid":"experimental-settings",children:[(0,l.jsx)(tB,{}),(0,l.jsx)(t$,{})]})]})},tI=(0,t_.tG)("affine:experimental-features-disclaimer",!1),tO=()=>{let[e,t]=(0,m.fp)(tI),i=(0,j.V)(async()=>{t(!0)},[t]);return e?(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(s.Rh,{}),children:(0,l.jsx)(tL,{})}):(0,l.jsx)(tF,{onConfirm:i})},tE=({width:e,height:t})=>(0,l.jsx)("svg",{className:"icon",width:e||16,height:t||16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 8C1.5 4.41022 4.41022 1.5 8 1.5C11.5898 1.5 14.5 4.41022 14.5 8C14.5 11.5898 11.5898 14.5 8 14.5C4.41022 14.5 1.5 11.5898 1.5 8ZM8 2.5C4.96251 2.5 2.5 4.96251 2.5 8C2.5 11.0375 4.96251 13.5 8 13.5C11.0375 13.5 13.5 11.0375 13.5 8C13.5 4.96251 11.0375 2.5 8 2.5ZM4.91917 7.64645L7.64645 4.91917C7.84171 4.72391 8.15829 4.72391 8.35355 4.91917L11.0808 7.64645C11.2761 7.84171 11.2761 8.15829 11.0808 8.35355C10.8856 8.54882 10.569 8.54882 10.3737 8.35355L8.5 6.47983V11C8.5 11.2761 8.27614 11.5 8 11.5C7.72386 11.5 7.5 11.2761 7.5 11V6.47983L5.62628 8.35355C5.43102 8.54882 5.11444 8.54882 4.91917 8.35355C4.72391 8.15829 4.72391 7.84171 4.91917 7.64645Z",fill:"currentColor"})}),tH=({width:e,height:t})=>(0,l.jsx)("svg",{className:"icon",width:e||16,height:t||16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 4.66634C1.5 3.65382 2.32081 2.83301 3.33333 2.83301H12.6667C13.6792 2.83301 14.5 3.65382 14.5 4.66634V11.333C14.5 12.3455 13.6792 13.1663 12.6667 13.1663H3.33333C2.32081 13.1663 1.5 12.3455 1.5 11.333V4.66634ZM3.33333 3.83301C2.8731 3.83301 2.5 4.2061 2.5 4.66634V5.49967H13.5V4.66634C13.5 4.2061 13.1269 3.83301 12.6667 3.83301H3.33333ZM13.5 6.49967H2.5V11.333C2.5 11.7932 2.8731 12.1663 3.33333 12.1663H12.6667C13.1269 12.1663 13.5 11.7932 13.5 11.333V6.49967ZM9.5 9.99967C9.5 9.72353 9.72386 9.49967 10 9.49967H12C12.2761 9.49967 12.5 9.72353 12.5 9.99967C12.5 10.2758 12.2761 10.4997 12 10.4997H10C9.72386 10.4997 9.5 10.2758 9.5 9.99967Z",fill:"currentColor"})});var tR="_1eqdg9h7",tV=i(55137),tP=i(59142),tZ=i(35623);let tU=({title:e,caption:t,children:i})=>{let[a,n]=(0,h.useState)(!0),r=(0,h.useCallback)(()=>n(e=>!e),[]);return(0,l.jsxs)(tV.bL,{open:a,onOpenChange:n,children:[(0,l.jsxs)("section",{className:"_4aytmw5",children:[(0,l.jsxs)("div",{className:"_4aytmw6",children:[(0,l.jsx)("div",{className:"_4aytmw7",children:e}),(0,l.jsx)("div",{className:"_4aytmw8",children:t})]}),(0,l.jsx)(s.K0,{onClick:r,size:"20",children:(0,l.jsx)(J.ArrowUpSmallIcon,{style:{transform:a?"rotate(0deg)":"rotate(180deg)",transition:"transform 0.23s ease"}})})]}),(0,l.jsx)(tV.UC,{children:i})]})},tG=({cloud:e,ai:t,cloudTip:i})=>{let a=(0,_.s9)(),[n,r]=(0,m.fp)(C.JO),o="plans"===n.activeTab?n.scrollAnchor:null,c=(0,h.useRef)(null),d=(0,h.useRef)(null),f=(0,m.md)(eb),p=(0,h.useCallback)(()=>{if(!i)return;let e=c.current?.querySelector("#cloudPricingPlan");if(!f||!e)return;let t=f.getBoundingClientRect();e.getBoundingClientRect().top-t.top<t.height-30&&(f.dataset.cloudVisible="")},[i,f]);(0,h.useLayoutEffect)(()=>{o&&(0,tZ.flushSync)(()=>{let e=c.current?.querySelector(`#${o}`);e&&(e.scrollIntoView(),r(e=>({...e,scrollAnchor:void 0})))})},[o,r]),(0,h.useEffect)(()=>{if(f&&d.current)return f.addEventListener("scroll",p),p(),()=>{f.removeEventListener("scroll",p)}},[f,p]);let u=(0,h.useCallback)(e=>{let t=c.current?.querySelector(`#${e}`);t&&t.scrollIntoView({behavior:"smooth"})},[]);return(0,l.jsxs)("div",{className:"_4aytmw0",ref:c,children:[(0,l.jsx)(G,{style:{marginBottom:"0px"},title:a["com.affine.payment.title"]()}),t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"aiPricingPlan",children:t}),(0,l.jsx)(s.cG,{className:"_4aytmwa"})]}):null,(0,l.jsx)("div",{id:"cloudPricingPlan",children:e}),i&&f?(0,tZ.createPortal)((0,l.jsxs)("div",{className:"_4aytmwc",ref:d,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"_4aytmwd",children:a["com.affine.cloud-scroll-tip.title"]()}),(0,l.jsx)("div",{className:"_4aytmwe",children:a["com.affine.cloud-scroll-tip.caption"]()})]}),(0,l.jsx)(s.$n,{onClick:()=>u("cloudPricingPlan"),variant:"primary",children:a["com.affine.ai-scroll-tip.view"]()})]}),f,"aiScrollTip"):null]})},tT=({title:e="AFFiNE Cloud",caption:t,select:i,toggle:a,scroll:n,lifetime:r,scrollRef:s})=>(0,l.jsxs)(tU,{title:e,caption:t,children:[(0,l.jsxs)("div",{className:"_4aytmw9",children:[(0,l.jsx)("div",{children:i}),(0,l.jsx)("div",{children:a})]}),(0,l.jsxs)(tP.bL,{children:[(0,l.jsx)(tP.LM,{ref:s,className:"_4aytmw1",children:n}),(0,l.jsx)(tP.Ze,{forceMount:!0,orientation:"horizontal",className:"_4aytmw2",children:(0,l.jsx)(tP.zi,{className:"_4aytmw3"})})]}),r?(0,l.jsx)("div",{style:{paddingTop:12},id:"lifetimePricingPlan",children:r}):null]}),tD=e=>[{name:e["com.affine.payment.ai.benefit.g1"](),icon:(0,l.jsx)(J.TextIcon,{}),items:[e["com.affine.payment.ai.benefit.g1-1"](),e["com.affine.payment.ai.benefit.g1-2"](),e["com.affine.payment.ai.benefit.g1-3"]()]},{name:e["com.affine.payment.ai.benefit.g2"](),icon:(0,l.jsx)(J.PenIcon,{}),items:[e["com.affine.payment.ai.benefit.g2-1"](),e["com.affine.payment.ai.benefit.g2-2"](),e["com.affine.payment.ai.benefit.g2-3"]()]},{name:e["com.affine.payment.ai.benefit.g3"](),icon:(0,l.jsx)(J.CheckBoxCheckLinearIcon,{}),items:[e["com.affine.payment.ai.benefit.g3-1"](),e["com.affine.payment.ai.benefit.g3-2"](),e["com.affine.payment.ai.benefit.g3-3"]()]}],tq=()=>{let e=(0,_.s9)(),t=(0,h.useMemo)(()=>tD(e),[e]);return(0,l.jsx)("div",{className:"_1eqdg9ha",children:t.map(({name:e,icon:t,items:i})=>(0,l.jsxs)("div",{className:"_1eqdg9hb",children:[(0,l.jsxs)("div",{className:"_1eqdg9hc",children:[t,e]}),(0,l.jsx)("ul",{className:"_1eqdg9hd",children:i.map(e=>(0,l.jsx)("li",{className:"_1eqdg9he",children:e},e))})]},e))})},tz=({caption:e,actionButtons:t,billingTip:i})=>{let a=(0,_.s9)(),n=a["com.affine.payment.ai.pricing-plan.title"]();return(0,l.jsx)(tU,{title:n,caption:e,children:(0,l.jsxs)("div",{className:"_1eqdg9h0",children:[(0,l.jsxs)("div",{className:"_1eqdg9h1",children:[(0,l.jsx)("section",{className:"_1eqdg9h2",children:a["com.affine.payment.ai.pricing-plan.title-caption-1"]()}),(0,l.jsx)("section",{className:"_1eqdg9h4",children:a["com.affine.payment.ai.pricing-plan.title"]()}),(0,l.jsx)("section",{className:"_1eqdg9h3",children:a["com.affine.payment.ai.pricing-plan.title-caption-2"]()})]}),(0,l.jsxs)("div",{className:"_1eqdg9h5",children:[(0,l.jsx)("div",{className:"_1eqdg9h6",children:t}),i?(0,l.jsx)("div",{className:"_1eqdg9h9",children:i}):null]}),(0,l.jsx)(tq,{})]})})},tW=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.uR),i=(0,d.h1)(w.nC),a=(0,p.S)(i.subscription.ai$),n=(0,p.S)(i.prices.aiPrice$),r="authenticated"===(0,p.S)(t.session.status$);if((0,h.useEffect)(()=>{i.subscription.revalidate(),i.prices.revalidate()},[i]),!n?.yearlyAmount)return null;let o=a?.nextBillAt?e["com.affine.payment.ai.billing-tip.next-bill-at"]({due:(0,_.U$)(a.nextBillAt,{absolute:{accuracy:"day"}})}):a?.canceledAt&&a.end?e["com.affine.payment.ai.billing-tip.end-at"]({end:(0,_.U$)(a.end,{absolute:{accuracy:"day"}})}):null;return(0,l.jsx)(tz,{caption:a?e["com.affine.payment.ai.pricing-plan.caption-purchased"]():e["com.affine.payment.ai.pricing-plan.caption-free"](),actionButtons:r?a?a.canceledAt?(0,l.jsx)(ed,{className:tR}):(0,l.jsx)(eo,{className:tR}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ep,{className:tR,displayedFrequency:"monthly"}),(0,l.jsx)("a",{href:"https://ai.affine.pro",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(s.$n,{className:"_1eqdg9h8 _1eqdg9h7",children:e["com.affine.payment.ai.pricing-plan.learn"]()})})]}):(0,l.jsx)(ec,{className:tR}),billingTip:o})};var tK=i(39958);let tX=e=>{let{detail:t,recurring:i}=e,a="authenticated"===(0,p.S)((0,d.h1)(w.uR).session.status$),n=(0,d.h1)(w.nC),r=(0,p.S)(n.subscription.pro$),s=r?.plan??ea.R$.Free,o=a&&t.plan===s&&i===r?.recurring,c=t.plan===ea.R$.Pro;return(0,l.jsxs)("div",{"data-current":o,className:c?"_12asts4a _12asts48":"_12asts48",children:[(0,l.jsx)("div",{className:"_12asts49"}),(0,l.jsxs)("div",{className:"_12asts4d",children:[(0,l.jsxs)("div",{style:{paddingBottom:12},children:[(0,l.jsx)("section",{className:"_12asts4f",children:t.name}),(0,l.jsx)("section",{className:"_12asts4g",children:t.description}),(0,l.jsx)("section",{className:"_12asts4h",children:t.titleRenderer(i,t)})]}),(0,l.jsx)(tY,{...e})]}),(0,l.jsx)("div",{className:"_12asts4p",children:Object.entries(t.benefits).map(([e,t])=>(0,l.jsxs)("ul",{className:"_12asts4q",children:[(0,l.jsxs)("section",{className:"_12asts4r",children:[e,":"]}),t.map(({icon:e,title:t},i)=>(0,l.jsxs)("li",{className:"_12asts4s",children:[(0,l.jsx)("div",{className:"_12asts4t",children:e??(0,l.jsx)(J.DoneIcon,{})}),(0,l.jsx)("div",{className:"_12asts4u",children:t})]},i))]},e))})]},t.plan)},tY=({detail:e,recurring:t})=>{let i=(0,_.s9)(),a="authenticated"===(0,p.S)((0,d.h1)(w.uR).session.status$),n=(0,d.h1)(w.nC),r=(0,p.S)(n.subscription.isBeliever$),s=(0,p.S)(n.subscription.pro$),o=s?.plan??ea.R$.Free,c=s?.recurring;if("dynamic"===e.type)return(0,l.jsx)(t1,{plan:e.plan});if(!a)return(0,l.jsx)(t3,{children:e.plan===ea.R$.Free?i["com.affine.payment.sign-up-free"]():i["com.affine.payment.buy-pro"]()});if(r)return(0,l.jsx)(et.$n,{className:eQ,disabled:!0,children:i["com.affine.payment.cloud.lifetime.included"]()});let f=!!s?.canceledAt,u=e.plan===ea.R$.Free;return e.plan===o&&(u||c===t&&s?.status===ea.it.Active)?f?(0,l.jsx)(t4,{}):(0,l.jsx)(tJ,{}):u?(0,l.jsx)(tQ,{disabled:f}):o===e.plan?(0,l.jsx)(t2,{from:c,to:t,due:s?.nextBillAt||"",disabled:f}):(0,l.jsx)(t0,{recurring:t})},tJ=()=>{let e=(0,_.s9)();return(0,l.jsx)(et.$n,{className:eQ,children:e["com.affine.payment.current-plan"]()})},tQ=({disabled:e})=>{let t=(0,_.s9)(),[i,a]=(0,h.useState)(!1),n=e?t["com.affine.payment.downgraded-tooltip"]():null,r=(0,h.useCallback)(()=>{a(!0)},[]);return(0,l.jsx)(e7,{open:i,onOpenChange:a,children:(0,l.jsx)(tK.m,{content:n,rootOptions:{delayDuration:0},children:(0,l.jsx)("div",{className:eQ,children:(0,l.jsx)(et.$n,{className:eQ,variant:"primary",onClick:r,disabled:e,children:t["com.affine.payment.downgrade"]()})})})})},t1=({plan:e})=>{let t=(0,_.s9)(),i=(0,h.useMemo)(()=>{switch(e){case ea.R$.Team:return"https://6dxre9ihosp.typeform.com/to/niBcdkvs";case ea.R$.Enterprise:return"https://6dxre9ihosp.typeform.com/to/rFfobTjf";default:return"https://affine.pro/pricing"}},[e]);return(0,l.jsx)("a",{className:eQ,href:i,target:"_blank",rel:"noreferrer",children:(0,l.jsx)(et.$n,{className:eQ,variant:"primary","data-event-props":"$.settingsPanel.billing.bookDemo","data-event-args-url":i,children:t["com.affine.payment.tell-us-use-case"]()})})},t0=({className:e,recurring:t,children:i,...a})=>{let[n,r]=(0,h.useState)(!1),[s,o]=(0,h.useState)(!1),c=(0,_.s9)(),f=(0,d.h1)(w.nC),p=(0,d.h1)(w.uR),[u,m]=(0,h.useState)((0,es.Ak)());(0,h.useEffect)(()=>{if(s)return window.addEventListener("focus",f.subscription.revalidate),()=>{window.removeEventListener("focus",f.subscription.revalidate)}},[s,f]);let C=(0,j.V)(async()=>{r(!0),v.u4.$.settingsPanel.plans.checkout({plan:ea.R$.Pro,recurring:t});let e=await f.createCheckoutSession({recurring:t,idempotencyKey:u,plan:ea.R$.Pro,coupon:null,successCallbackLink:(0,el.e6)(p.session.account$.value,ea.R$.Pro,t)});r(!1),m((0,es.Ak)()),(0,ef.RM)(e),o(!0)},[t,p.session.account$.value,f,u]);return(0,l.jsx)(et.$n,{className:(0,T.A)(eQ,e),variant:"primary",onClick:C,disabled:n,loading:n,...a,children:i??c["com.affine.payment.upgrade"]()})},t2=({from:e,to:t,disabled:i,due:a})=>{let n=(0,_.s9)(),[r,s]=(0,h.useState)(!1),[o,c]=(0,h.useState)(!1),[f,p]=(0,h.useState)((0,es.Ak)()),u=(0,d.h1)(w.nC).subscription,m=(0,h.useCallback)(()=>{v.u4.$.settingsPanel.plans.changeSubscriptionRecurring({plan:ea.R$.Pro,recurring:t}),s(!0)},[t]),C=(0,j.V)(async()=>{c(!0),await u.setSubscriptionRecurring(f,t),p((0,es.Ak)()),c(!1)},[u,t,f]),x=(0,l.jsxs)(_.x6,{values:{from:e,to:t,due:a},className:eJ,children:["You are changing your ",(0,l.jsx)("span",{className:e2,children:e})," ","subscription to ",(0,l.jsx)("span",{className:e2,children:t})," ","subscription. This change will take effect in the next billing cycle, with an effective date of"," ",(0,l.jsx)("span",{className:e2,children:new Date(a).toLocaleDateString()}),"."]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(et.$n,{className:eQ,variant:"primary",onClick:m,disabled:i||o,loading:o,children:n["com.affine.payment.change-to"]({to:t})}),(0,l.jsx)(e3,{type:"change",loading:o,open:r,onConfirm:C,onOpenChange:s,content:x})]})},t3=({children:e})=>{let t=(0,m.Xr)(C.W7),i=(0,h.useCallback)(()=>{t(e=>({...e,openModal:!0}))},[t]);return(0,l.jsx)(et.$n,{onClick:i,className:eQ,variant:"primary",children:e})},t4=()=>{let e=(0,_.s9)(),[t,i]=(0,h.useState)(!1),a=(0,d.h1)(w.nC).subscription,n=(0,h.useCallback)(()=>{i(!0);let e=a.pro$.value;e&&v.u4.$.settingsPanel.plans.resumeSubscription({plan:ea.R$.Pro,recurring:e.recurring})},[a.pro$.value]);return(0,l.jsx)(e9,{open:t,onOpenChange:i,children:(0,l.jsxs)(et.$n,{className:"_12asts4n _12asts4m",onClick:n,children:[(0,l.jsx)("span",{"data-show-hover":"true",className:(0,T.A)(e0),children:e["com.affine.payment.resume-renewal"]()}),(0,l.jsx)("span",{"data-show-hover":"false",className:(0,T.A)(e0),children:e["com.affine.payment.current-plan"]()})]})})};var t7="_1as6clu3";let t9=()=>{let e=(0,_.s9)(),t=(0,d.h1)(w.nC),i=(0,p.S)(t.prices.readableLifetimePrice$),a=(0,p.S)(t.subscription.isBeliever$);return i?(0,l.jsxs)(e8,{type:1,children:[(0,l.jsx)("div",{className:"_1as6clu0",children:e["com.affine.payment.lifetime.caption-1"]()}),(0,l.jsx)("div",{className:"_1as6clu1",children:e["com.affine.payment.lifetime.title"]()}),(0,l.jsx)("div",{className:"_1as6clu2",children:i}),a?(0,l.jsx)(s.$n,{className:t7,size:"default",disabled:!0,children:e["com.affine.payment.lifetime.purchased"]()}):(0,l.jsx)(t0,{className:t7,recurring:ea.zS.Lifetime,children:e["com.affine.payment.lifetime.purchase"]()}),(0,l.jsx)("div",{className:"_1as6clu4",children:(0,l.jsx)(_.x6,{i18nKey:"com.affine.payment.lifetime.caption-2",components:{a:(0,l.jsx)("a",{className:"_1as6clu5",href:"#"})}})}),(0,l.jsx)(tt,{style:{padding:"8px 6px"}})]}):null},t5=e=>({[e["com.affine.payment.cloud.free.benefit.g1"]()]:[1,2,3].map(t=>({title:e[`com.affine.payment.cloud.free.benefit.g1-${t}`]()})),[e["com.affine.payment.cloud.free.benefit.g2"]()]:[1,2,3,4,5].map(t=>({title:e[`com.affine.payment.cloud.free.benefit.g2-${t}`]()}))}),t6=e=>({[e["com.affine.payment.cloud.pro.benefit.g1"]()]:[{title:e["com.affine.payment.cloud.pro.benefit.g1-1"](),icon:(0,l.jsx)(J.AfFiNeIcon,{})},...[2,3,4,5,6,7,8].map(t=>({title:e[`com.affine.payment.cloud.pro.benefit.g1-${t}`]()}))]}),t8=e=>({[e["com.affine.payment.cloud.team.benefit.g1"]()]:[{title:e["com.affine.payment.cloud.team.benefit.g1-1"](),icon:(0,l.jsx)(J.AfFiNeIcon,{})},...[2,3,4].map(t=>({title:e[`com.affine.payment.cloud.team.benefit.g1-${t}`]()}))],[e["com.affine.payment.cloud.team.benefit.g2"]()]:[{title:e["com.affine.payment.cloud.team.benefit.g2-1"]()},{title:e["com.affine.payment.cloud.team.benefit.g2-2"]()},{title:e["com.affine.payment.cloud.team.benefit.g2-3"]()}]}),ie=({recurring:e,t})=>e===ea.zS.Monthly?t["com.affine.payment.recurring-monthly"]():t["com.affine.payment.recurring-yearly"](),it=()=>{let e=(0,_.s9)(),t=(0,h.useRef)(null),{authService:i,subscriptionService:a}=(0,d.A$)({AuthService:w.uR,SubscriptionService:w.nC}),n=(0,p.S)(a.prices.prices$),r="authenticated"===(0,p.S)(i.session.status$),o=(0,p.S)(a.subscription.pro$),[c,f]=(0,h.useState)(o?.recurring??ea.zS.Yearly),u=(0,h.useMemo)(()=>{let t=function(e){return new Map([[ea.R$.Free,{type:"fixed",plan:ea.R$.Free,price:"0",yearlyPrice:"0",name:e["com.affine.payment.cloud.free.name"](),description:e["com.affine.payment.cloud.free.description"](),titleRenderer:()=>e["com.affine.payment.cloud.free.title"](),benefits:t5(e)}],[ea.R$.Pro,{type:"fixed",plan:ea.R$.Pro,price:"1",yearlyPrice:"1",name:e["com.affine.payment.cloud.pro.name"](),description:e["com.affine.payment.cloud.pro.description"](),titleRenderer:(t,i)=>{let a=t===ea.zS.Yearly?i.yearlyPrice:i.price;return(0,l.jsxs)(l.Fragment,{children:[e["com.affine.payment.cloud.pro.title.price-monthly"]({price:"$"+a}),t===ea.zS.Yearly?(0,l.jsx)("span",{className:"_12asts4i",children:e["com.affine.payment.cloud.pro.title.billed-yearly"]()}):null]})},benefits:t6(e)}],[ea.R$.Team,{type:"dynamic",plan:ea.R$.Team,contact:!0,name:e["com.affine.payment.cloud.team.name"](),description:e["com.affine.payment.cloud.team.description"](),titleRenderer:()=>e["com.affine.payment.cloud.team.title"](),benefits:t8(e)}]])}(e),i=new Map;return t.forEach((e,t)=>{i.set(t,{...e})}),n?.forEach(e=>{let t=i.get(e.plan);t?.type==="fixed"&&(t.price=((e.amount??0)/100).toFixed(2),t.yearlyPrice=((e.yearlyAmount??0)/100/12).toFixed(2),t.discount=e.yearlyAmount&&e.amount?Math.floor((1-e.yearlyAmount/12/e.amount)*100).toString():void 0)}),i},[n,e]),m=o?.plan??ea.R$.Free,C=!!o?.canceledAt,x=o?.recurring??ea.zS.Monthly,g=u.get(ea.R$.Pro)?.discount;(0,h.useEffect)(()=>{if(!t.current)return;let e=t.current?.querySelector('[data-current="true"]'),i=getComputedStyle(t.current),a=e?e.getBoundingClientRect().left-t.current.getBoundingClientRect().left-parseInt(i.paddingLeft):0,n="true"===t.current.dataset.appeared,r=requestAnimationFrame(()=>{t.current?.scrollTo({behavior:n?"smooth":"instant",left:a}),t.current?.setAttribute("data-appeared","true")});return()=>{cancelAnimationFrame(r)}},[c]);let y=r?C?(0,l.jsx)("p",{children:e["com.affine.payment.subtitle-canceled"]({plan:`${ie({recurring:x,t:e})} ${m}`})}):(0,l.jsx)("p",{children:(0,l.jsxs)(_.x6,{plan:m,i18nKey:"com.affine.payment.subtitle-active",values:{currentPlan:m},children:["You are currently on the ",{currentPlan:m}," plan. If you have any questions, please contact our ",(0,l.jsx)("a",{href:"mailto:support@toeverything.info",style:{color:"var(--affine-link-color)"},children:"customer support"}),"."]})}):(0,l.jsx)("p",{children:e["com.affine.payment.subtitle-not-signed-in"]()}),j=(0,l.jsxs)("div",{className:"_12asts41",children:[(0,l.jsx)("div",{children:c===ea.zS.Yearly?(0,l.jsx)("div",{className:e1,children:e["com.affine.payment.cloud.pricing-plan.toggle-yearly"]()}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:e1,children:(0,l.jsx)("span",{children:e["com.affine.payment.cloud.pricing-plan.toggle-billed-yearly"]()})}),g?(0,l.jsx)("div",{className:"_12asts43",children:e["com.affine.payment.cloud.pricing-plan.toggle-discount"]({discount:g})}):null]})}),(0,l.jsx)(s.dO,{checked:c===ea.zS.Yearly,onChange:e=>f(e?ea.zS.Yearly:ea.zS.Monthly)})]}),v=(0,l.jsx)("div",{className:"_12asts47",ref:t,children:Array.from(u.values()).map(e=>(0,l.jsx)(tX,{detail:e,recurring:c},e.plan))}),b=(0,l.jsxs)("div",{className:"_12asts46",children:[(0,l.jsx)("b",{children:e["com.affine.payment.cloud.pricing-plan.select.title"]()}),(0,l.jsx)("span",{children:e["com.affine.payment.cloud.pricing-plan.select.caption"]()})]});return(0,l.jsx)(tT,{caption:y,select:b,toggle:j,scroll:v,scrollRef:t,lifetime:(0,l.jsx)(t9,{})})},ii=({radius:e=8,...t})=>(0,l.jsx)(s.EA,{...t,style:{borderRadius:`${e}px`}}),ia=()=>(0,l.jsx)(s.EA,{variant:"rounded",width:"256px",height:"24px"}),ir=()=>(0,l.jsxs)("div",{className:"_1wd2fkr1",children:[(0,l.jsxs)("header",{className:"_1wd2fkr2",children:[(0,l.jsx)(ii,{variant:"rounded",width:"100%",height:"60px"}),(0,l.jsx)(ii,{variant:"rounded",width:"100%",height:"28px"})]}),(0,l.jsx)("main",{className:"_1wd2fkr3",children:(0,l.jsx)(ii,{variant:"rounded",width:"100%",height:"100%"})})]}),il=()=>(0,l.jsxs)("div",{className:"_1wd2fkr0",children:[(0,l.jsx)(ir,{}),(0,l.jsx)(ir,{}),(0,l.jsx)(ir,{})]}),is=()=>(0,l.jsx)(tG,{ai:(0,l.jsx)(tz,{caption:(0,l.jsx)(ii,{variant:"rectangular",radius:2,width:"200px",height:"20px"}),actionButtons:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ii,{variant:"rectangular",radius:20,width:"206px",height:"37px"}),(0,l.jsx)(ii,{variant:"rectangular",radius:20,width:"193px",height:"37px"})]})}),cloud:(0,l.jsx)(tT,{toggle:(0,l.jsx)(ii,{variant:"rounded",width:"100%",height:"32px"}),select:(0,l.jsx)(ia,{}),scroll:(0,l.jsx)(il,{})})}),io=()=>{let e=(0,d.h1)(w.nC),t=(0,p.S)(e.prices.prices$);return((0,h.useEffect)(()=>{e.subscription.revalidate(),e.prices.revalidate()},[e]),null===t)?(0,l.jsx)(is,{}):(0,l.jsx)(tG,{cloudTip:!0,cloud:(0,l.jsx)(it,{}),ai:(0,l.jsx)(tW,{})})},ic=()=>(0,l.jsx)(eX,{FallbackComponent:id,children:(0,l.jsx)(io,{})}),id=({resetErrorBoundary:e})=>{let t=(0,_.s9)(),i=(0,l.jsxs)("div",{className:"_12asts410",children:[(0,l.jsx)("span",{children:t["com.affine.payment.plans-error-tip"]()}),(0,l.jsx)("a",{onClick:e,className:"_12asts411",children:t["com.affine.payment.plans-error-retry"]()})]});return(0,l.jsx)(tG,{cloud:(0,l.jsx)(tT,{scroll:i})})},ip=()=>{let e=(0,_.s9)();return(0,h.useCallback)(t=>e[`com.affine.keyboardShortcuts.${t}`](),[e])},iu=()=>{let e=(0,_.s9)();return(0,h.useCallback)(t=>e["com.affine.keyboardShortcuts.heading"]({number:t}),[e])},im=()=>{let e=ip();return(0,h.useMemo)(()=>({[e("cancel")]:["ESC"],[e("quickSearch")]:["Ctrl","K"],[e("newPage")]:["Ctrl","N"],[e("expandOrCollapseSidebar")]:["Ctrl","/"],[e("goBack")]:["Ctrl","["],[e("goForward")]:["Ctrl","]"],[e("copy-private-link")]:["⌘","⇧","C"]}),[e])},ih=()=>{let e=ip();return(0,h.useMemo)(()=>({[e("cancel")]:["ESC"],[e("quickSearch")]:["⌘","K"],[e("newPage")]:["⌘","N"],[e("expandOrCollapseSidebar")]:["⌘","/"],[e("goBack")]:["⌘ ","["],[e("goForward")]:["⌘ ","]"],[e("copy-private-link")]:["⌘","⇧","C"]}),[e])},iC=()=>{let e=ip();return(0,h.useMemo)(()=>({[e("selectAll")]:["⌘","A"],[e("undo")]:["⌘","Z"],[e("redo")]:["⌘","⇧","Z"],[e("zoomIn")]:["⌘","+"],[e("zoomOut")]:["⌘","-"],[e("zoomTo100")]:["⌘","0"],[e("zoomToFit")]:["⌘","1"],[e("select")]:["V"],[e("text")]:["T"],[e("shape")]:["S"],[e("image")]:["I"],[e("straightConnector")]:["L"],[e("elbowedConnector")]:["X"],[e("pen")]:["P"],[e("hand")]:["H"],[e("note")]:["N"]}),[e])},ix=()=>{let e=ip();return(0,h.useMemo)(()=>({[e("selectAll")]:["Ctrl","A"],[e("undo")]:["Ctrl","Z"],[e("redo")]:["Ctrl","Y/Ctrl","Shift","Z"],[e("zoomIn")]:["Ctrl","+"],[e("zoomOut")]:["Ctrl","-"],[e("zoomTo100")]:["Ctrl","0"],[e("zoomToFit")]:["Ctrl","1"],[e("select")]:["V"],[e("text")]:["T"],[e("shape")]:["S"],[e("image")]:["I"],[e("straightConnector")]:["L"],[e("elbowedConnector")]:["X"],[e("pen")]:["P"],[e("hand")]:["H"],[e("note")]:["N"],[e("switch")]:["Alt ",""]}),[e])},ig=()=>{let e=ip(),t=iu();return(0,h.useMemo)(()=>({[e("undo")]:["⌘","Z"],[e("redo")]:["⌘","⇧","Z"],[e("bold")]:["⌘","B"],[e("italic")]:["⌘","I"],[e("underline")]:["⌘","U"],[e("strikethrough")]:["⌘","⇧","S"],[e("inlineCode")]:["⌘","E"],[e("codeBlock")]:["⌘","⌥","C"],[e("link")]:["⌘","K"],[e("quickSearch")]:["⌘","K"],[e("bodyText")]:["⌘","⌥","0"],[t("1")]:["⌘","⌥","1"],[t("2")]:["⌘","⌥","2"],[t("3")]:["⌘","⌥","3"],[t("4")]:["⌘","⌥","4"],[t("5")]:["⌘","⌥","5"],[t("6")]:["⌘","⌥","6"],[e("increaseIndent")]:["Tab"],[e("reduceIndent")]:["⇧","Tab"],[e("groupDatabase")]:["⌘","G"],[e("switch")]:["⌥","S"]}),[e,t])},iy=()=>{let e=ip(),t=iu();return(0,h.useMemo)(()=>({[e("bold")]:["**Text**"],[e("italic")]:["*Text*"],[e("underline")]:["~Text~"],[e("strikethrough")]:["~~Text~~"],[e("divider")]:["***"],[e("inlineCode")]:["`Text` "],[e("codeBlock")]:["``` Space"],[t("1")]:["# Text"],[t("2")]:["## Text"],[t("3")]:["### Text"],[t("4")]:["#### Text"],[t("5")]:["##### Text"],[t("6")]:["###### Text"]}),[e,t])},ij=()=>{let e=ip(),t=iu();return(0,h.useMemo)(()=>({[e("undo")]:["Ctrl","Z"],[e("redo")]:["Ctrl","Y"],[e("bold")]:["Ctrl","B"],[e("italic")]:["Ctrl","I"],[e("underline")]:["Ctrl","U"],[e("strikethrough")]:["Ctrl","Shift","S"],[e("inlineCode")]:[" Ctrl","E"],[e("codeBlock")]:["Ctrl","Alt","C"],[e("link")]:["Ctr","K"],[e("quickSearch")]:["Ctrl","K"],[e("bodyText")]:["Ctrl","Shift","0"],[t("1")]:["Ctrl","Shift","1"],[t("2")]:["Ctrl","Shift","2"],[t("3")]:["Ctrl","Shift","3"],[t("4")]:["Ctrl","Shift","4"],[t("5")]:["Ctrl","Shift","5"],[t("6")]:["Ctrl","Shift","6"],[e("increaseIndent")]:["Tab"],[e("reduceIndent")]:["Shift+Tab"],[e("groupDatabase")]:["Ctrl + G"],Switch:["Alt + S"]}),[e,t])},iv=()=>{let e=ip(),t=iu();return(0,h.useMemo)(()=>({[e("bold")]:["**Text** "],[e("italic")]:["*Text* "],[e("underline")]:["~Text~ "],[e("strikethrough")]:["~~Text~~ "],[e("divider")]:["***"],[e("inlineCode")]:["`Text` "],[e("codeBlock")]:["``` Text"],[t("1")]:["# Text"],[t("2")]:["## Text"],[t("3")]:["### Text"],[t("4")]:["#### Text"],[t("5")]:["##### Text"],[t("6")]:["###### Text"]}),[e,t])},ib=()=>{let e=(0,_.s9)(),t=iy(),i=iv(),a=environment.isBrowser&&environment.isMacOs;return{title:e["com.affine.shortcutsTitle.markdownSyntax"](),shortcuts:a?t:i}},i_=()=>{let e=(0,_.s9)(),t=ig(),i=ij(),a=environment.isBrowser&&environment.isMacOs;return{title:e["com.affine.shortcutsTitle.page"](),shortcuts:a?t:i}},ik=()=>{let e=(0,_.s9)(),t=iC(),i=ix(),a=environment.isBrowser&&environment.isMacOs;return{title:e["com.affine.shortcutsTitle.edgeless"](),shortcuts:a?t:i}},iw=()=>{let e=(0,_.s9)(),t=ih(),i=im(),a=environment.isBrowser&&environment.isMacOs;return{title:e["com.affine.shortcutsTitle.general"](),shortcuts:a?t:i}},iS=({shortcutsInfo:e})=>(0,l.jsx)(z,{title:e.title,children:Object.entries(e.shortcuts).map(([e,t])=>(0,l.jsxs)("div",{className:"hw5iyc0",children:[(0,l.jsx)("span",{children:e}),(0,l.jsx)("div",{className:"hw5iyc1",children:t.map(e=>(0,l.jsx)("span",{className:"hw5iyc2",children:e},e))})]},e))}),iF=()=>{let e=(0,_.s9)(),t=ib(),i=i_(),a=ik(),n=iw();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(G,{title:e["com.affine.keyboardShortcuts.title"](),subtitle:e["com.affine.keyboardShortcuts.subtitle"](),"data-testid":"keyboard-shortcuts-title"}),(0,l.jsx)(iS,{shortcutsInfo:n}),(0,l.jsx)(iS,{shortcutsInfo:i}),(0,l.jsx)(iS,{shortcutsInfo:a}),(0,l.jsx)(iS,{shortcutsInfo:t})]})},iA=()=>{let e=(0,_.s9)(),{authService:t,serverConfigService:i,userFeatureService:a}=(0,d.A$)({AuthService:w.uR,ServerConfigService:w.BB,UserFeatureService:e_.r}),n=(0,p.S)(t.session.status$),r=(0,p.S)(i.serverConfig.features$.map(e=>e?.payment));(0,h.useEffect)(()=>{a.userFeature.revalidate()},[a]);let l=[{key:"appearance",title:e["com.affine.settings.appearance"](),icon:J.AppearanceIcon,testId:"appearance-panel-trigger"},{key:"shortcuts",title:e["com.affine.keyboardShortcuts.title"](),icon:J.KeyboardIcon,testId:"shortcuts-panel-trigger"},{key:"about",title:e["com.affine.aboutAFFiNE.title"](),icon:J.InformationIcon,testId:"about-panel-trigger"}];return r&&(l.splice(3,0,{key:"plans",title:e["com.affine.payment.title"](),icon:tE,testId:"plans-panel-trigger"}),"authenticated"===n&&l.splice(3,0,{key:"billing",title:e["com.affine.payment.billing-setting.title"](),icon:tH,testId:"billing-panel-trigger"})),l.push({key:"experimental-features",title:e["com.affine.settings.workspace.experimental-features"](),icon:J.ExperimentIcon,testId:"experimental-features-trigger"}),l},iN=({generalKey:e})=>{switch(e){case"shortcuts":return(0,l.jsx)(iF,{});case"appearance":return(0,l.jsx)(eU,{});case"about":return(0,l.jsx)(eB,{});case"plans":return(0,l.jsx)(ic,{});case"billing":return(0,l.jsx)(td,{});case"experimental-features":return(0,l.jsx)(tO,{});default:return null}};var iM=i(48834),iB=i(81340),i$=i(52428),iL=i(40971),iI="w6lall8",iO="w6lall3",iE="w6lall4",iH="w6lall2";let iR=({onAccountSettingClick:e,active:t})=>{let i=(0,p.S)((0,d.h1)(w.uR).session.account$);if(i)return(0,l.jsxs)("div",{"data-testid":"user-info-card",className:(0,T.A)(iI,{active:t}),onClick:e,children:[(0,l.jsx)(ee.e,{size:28,rounded:2,name:i.label,url:i.avatar,className:"avatar"}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"name-container",children:[(0,l.jsx)("div",{className:"name",title:i.label,children:i.label}),(0,l.jsx)(iL.$,{})]}),(0,l.jsx)("div",{className:"email",title:i.email,children:i.email})]})]})},iV=()=>{let e=(0,_.s9)(),[,t]=(0,m.fp)(C.W7);return(0,l.jsxs)("div",{className:iI,onClick:(0,h.useCallback)(()=>{t({openModal:!0,state:"signIn"})},[t]),children:[(0,l.jsx)("div",{className:"avatar not-sign",children:(0,l.jsx)(J.Logo1Icon,{})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"name",title:e["com.affine.settings.sign"](),children:e["com.affine.settings.sign"]()}),(0,l.jsx)("div",{className:"email",title:e["com.affine.setting.sign.message"](),children:e["com.affine.setting.sign.message"]()})]})]})},iP=({activeTab:e,onTabChange:t,selectedWorkspaceId:i})=>{let a=(0,_.s9)(),n=(0,p.S)((0,d.h1)(w.uR).session.status$),r=iA(),s=(0,h.useCallback)(e=>{let i=e.currentTarget.dataset.eventArg;i&&(v.u4.$.settingsPanel.menu.openSettings({to:i}),t(i,null))},[t]),o=(0,h.useCallback)(()=>{v.u4.$.settingsPanel.menu.openSettings({to:"account"}),t("account",null)},[t]),c=(0,h.useCallback)((e,i)=>{v.u4.$.settingsPanel.menu.openSettings({to:"workspace",control:e}),t(`workspace:${e}`,i)},[t]);return(0,l.jsxs)("div",{className:"w6lall0","data-testid":"settings-sidebar",children:[(0,l.jsx)("div",{className:"w6lall1",children:a["com.affine.settingSidebar.title"]()}),(0,l.jsx)("div",{className:iH,children:a["com.affine.settingSidebar.settings.general"]()}),(0,l.jsx)("div",{className:iO,children:r.map(({title:t,icon:i,key:a,testId:n})=>(0,l.jsxs)("div",{className:(0,T.A)(iE,{active:a===e}),title:t,"data-event-arg":a,onClick:s,"data-testid":n,children:[i({className:"icon"}),(0,l.jsx)("span",{className:"setting-name",children:t})]},a))}),(0,l.jsx)("div",{className:iH,children:a["com.affine.settingSidebar.settings.workspace"]()}),(0,l.jsx)("div",{className:(0,T.A)(iO,"scroll"),children:(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(Y,{}),children:(0,l.jsx)(iZ,{onWorkspaceSettingClick:c,selectedWorkspaceId:i,activeSubTab:e.split(":")[1]})})}),(0,l.jsxs)("div",{className:"w6lall7",children:["unauthenticated"===n?(0,l.jsx)(iV,{}):null,"authenticated"===n?(0,l.jsx)(h.Suspense,{children:(0,l.jsx)(iR,{onAccountSettingClick:o,active:"account"===e})}):null]})]})},iZ=({onWorkspaceSettingClick:e,selectedWorkspaceId:t,activeSubTab:i})=>{let a=(0,p.S)((0,d.h1)(u.q).list.workspaces$);return(0,l.jsx)(l.Fragment,{children:a.map(a=>(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(X,{}),children:(0,l.jsx)(iG,{meta:a,onClick:t=>{e(t,a)},activeSubTab:a.id===t?i:void 0})},a.id))})},iU=[{key:"preference",title:"com.affine.settings.workspace.preferences"},{key:"properties",title:"com.affine.settings.workspace.properties"}],iG=({activeSubTab:e,meta:t,onClick:i})=>{let{workspaceService:a,userFeatureService:n}=(0,d.A$)({WorkspaceService:f.j,UserFeatureService:e_.r}),r=(0,iB.R)(t),s=r?.name??i$.EZ,o=a.workspace.id===t.id,c=(0,_.s9)();(0,h.useEffect)(()=>{n.userFeature.revalidate()},[n]);let p=(0,h.useCallback)(()=>{i("preference")},[i]),u=(0,h.useMemo)(()=>iU.map(({key:t,title:a})=>(0,l.jsx)("div",{"data-testid":`workspace-list-item-${t}`,onClick:()=>{i(t)},className:(0,T.A)("w6lall5",{active:e===t}),children:c[a]()},t)),[e,i,c]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:(0,T.A)(iE,{active:!!e}),title:s,onClick:p,"data-testid":"workspace-list-item",children:[(0,l.jsx)(iM.z,{meta:t,size:16,name:s,colorfulFallback:!0,style:{marginRight:"10px"},rounded:2},t.id),(0,l.jsx)("span",{className:"setting-name",children:s}),o?(0,l.jsx)(tK.m,{content:"Current",side:"top",children:(0,l.jsx)("div",{className:"w6lall6","data-testid":"current-workspace-label"})}):null]}),e&&u.length>1?u:null]})};var iT="_1hbyecy6";let iD=["shortcuts","appearance","about","plans","billing","experimental-features"];var iq=i(22563),iz=i(33907),iW=i(69628),iK=i(93965),iX="fvkbfk3";let iY=({workspaceMetadata:e,...t})=>{let{onConfirm:i}=t,[a,n]=(0,h.useState)(""),r=(0,iB.R)(e),o=r?.name??i$.EZ,d=a===o,f=(0,_.s9)(),p=(0,h.useCallback)(()=>{if(d)return i?.()},[d,i]);return(0,l.jsxs)(y.uo,{title:`${f["com.affine.workspaceDelete.title"]()}?`,cancelText:f["com.affine.workspaceDelete.button.cancel"](),confirmText:f["com.affine.workspaceDelete.button.delete"](),confirmButtonOptions:{variant:"error",disabled:!d,"data-testid":"delete-workspace-confirm-button"},...t,children:[e.flavour===c.j.LOCAL?(0,l.jsxs)(_.x6,{i18nKey:"com.affine.workspaceDelete.description",children:["Deleting (",(0,l.jsx)("span",{className:iX,children:{workspace:o}}),") cannot be undone, please proceed with caution. All contents will be lost."]}):(0,l.jsxs)(_.x6,{i18nKey:"com.affine.workspaceDelete.description2",children:["Deleting (",(0,l.jsx)("span",{className:iX,children:{workspace:o}}),") will delete both local and cloud data, this operation cannot be undone, please proceed with caution."]}),(0,l.jsx)("div",{className:"fvkbfk2",children:(0,l.jsx)(s.pd,{autoFocus:!0,onChange:n,"data-testid":"delete-workspace-input",onEnter:p,placeholder:f["com.affine.workspaceDelete.placeholder"](),size:"large"})})]})},iJ=()=>{let{workspaceService:e,globalContextService:t,workspacePermissionService:i,workspacesService:a}=(0,d.A$)({WorkspaceService:f.j,GlobalContextService:iz.q,WorkspacePermissionService:H.Q,WorkspacesService:u.q}),n=(0,_.s9)(),r=e.workspace,{jumpToSubPath:o,jumpToIndex:c}=(0,iW.P)(),[x,g]=(0,h.useState)(!1),[v,b]=(0,h.useState)(!1),k=(0,m.Xr)(C.JO),w=(0,p.S)(a.list.workspaces$),S=(0,p.S)(t.globalContext.workspaceId.$),F=(0,p.S)(i.permission.isOwner$);(0,h.useEffect)(()=>{i.permission.revalidate()},[i]);let A=(0,h.useCallback)(()=>{null!==F&&(F?g(!0):b(!0))},[F]),N=(0,j.V)(async()=>{if(k(e=>({...e,open:!1,workspaceId:null})),S===r.id){let e=w.find(e=>e.id!==S);e?o(e?.id||"",iK.Tk.ALL,iW.Q.REPLACE):c(iW.Q.REPLACE)}F?await a.deleteWorkspace(r.meta):await i.leaveWorkspace(),s.me.success({title:n["Successfully deleted"]()})},[k,S,r.id,r.meta,F,n,w,o,c,a,i]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{name:(0,l.jsx)("span",{style:{color:"var(--affine-error-color)"},children:F?n["com.affine.workspaceDelete.title"]():n["com.affine.deleteLeaveWorkspace.leave"]()}),desc:n["com.affine.deleteLeaveWorkspace.description"](),style:{cursor:"pointer"},onClick:A,"data-testid":"delete-workspace-button",children:(0,l.jsx)(J.ArrowRightSmallIcon,{})}),F?(0,l.jsx)(iY,{onConfirm:N,open:x,onOpenChange:g,workspaceMetadata:r.meta}):(0,l.jsx)(y.uo,{open:v,cancelText:n["com.affine.confirmModal.button.cancel"](),onConfirm:N,onOpenChange:b,title:`${n["com.affine.deleteLeaveWorkspace.leave"]()}?`,description:n["com.affine.deleteLeaveWorkspace.leaveDescription"](),confirmText:n.Leave(),confirmButtonOptions:{variant:"error"}})]})},iQ=()=>{let e=(0,_.s9)(),t=(0,$.K)(),i=(0,d.h1)(f.j).workspace,a=(0,p.S)(i.name$),n=i.flavour,r=(0,m.Xr)(C.JO),s=(0,h.useCallback)(()=>{i&&t(i,{onSuccess:()=>{r(e=>({...e,open:!1}))}})},[t,r,i]);return n!==c.j.LOCAL?null:(0,l.jsx)(D,{name:e["Workspace saved locally"]({name:a??i$.EZ}),desc:e["Enable cloud hint"](),spreadCol:!1,style:{padding:"10px",background:"var(--affine-background-secondary-color)"},children:(0,l.jsx)(et.$n,{"data-testid":"publish-enable-affine-cloud-button",variant:"primary",onClick:s,style:{marginTop:"12px"},children:e["Enable AFFiNE Cloud"]()})})};var i1=i(10265);let i0=({workspaceMetadata:e,workspace:t})=>{let i=e.id,a=(0,_.s9)(),[n,r]=(0,h.useState)(!1),c=(0,i1.A)(),d=(0,j.V)(async()=>{if(!n&&t){r(!0);try{c&&(await t.engine.waitForDocSynced(),await t.engine.blob.sync());let e=await o.Ok?.dialog.saveDBFileAs(i);if(e?.error)throw Error(e.error);e?.canceled||s.me.success({title:a["Export success"]()})}catch(e){s.me.error({title:a["Export failed"](),message:e.message})}finally{r(!1)}}},[c,n,a,t,i]);return(0,l.jsx)(D,{name:a.Export(),desc:a["Export Description"](),children:(0,l.jsx)(et.$n,{"data-testid":"export-affine-backup",onClick:d,disabled:n,children:a.Export()})})};var i2="_1ap5wdpc",i3="_1ap5wdp7";let i4=({value:e,background:t})=>(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"_1ap5wdpg",style:{background:t},children:e})}),i7=()=>{let e=(0,d.h1)(f.j).workspace,t=(0,d.h1)(H.Q),i=(0,p.S)(t.permission.isOwner$);(0,h.useEffect)(()=>{t.permission.revalidate()},[t]);let a=(0,h.useMemo)(()=>({local:{value:"Local",background:"var(--affine-tag-orange)"},syncCloud:{value:"Sync with AFFiNE Cloud",background:"var(--affine-tag-blue)"},syncDocker:{value:"Sync with AFFiNE Docker",background:"var(--affine-tag-green)"},selfHosted:{value:"Self-Hosted Server",background:"var(--affine-tag-purple)"},joinedWorkspace:{value:"Joined Workspace",background:"var(--affine-tag-yellow)"},availableOffline:{value:"Available Offline",background:"var(--affine-tag-green)"},publishedToWeb:{value:"Published to Web",background:"var(--affine-tag-blue)"}}),[]),n=[{condition:!i,label:"joinedWorkspace"},{condition:"local"===e.flavour,label:"local"},{condition:"affine-cloud"===e.flavour,label:"syncCloud"}];return(0,l.jsx)("div",{className:"_1ap5wdp2",children:n.map(({condition:e,label:t})=>e&&(0,l.jsx)(i4,{value:a[t].value,background:a[t].background},t))})};var i9=i(61362);function i5(){let{mutate:e}=(0,eK.iX)();return(0,h.useCallback)(async()=>e(e=>!!Array.isArray(e)&&"cloud"===e[0]),[e])}function i6(e){let t={[ea.aX.Owner]:4,[ea.aX.Admin]:3,[ea.aX.Write]:2,[ea.aX.Read]:1};return[Number(e.permission===ea.aX.Owner),Number(!e.accepted),t[e.permission]||0].reduce((e,t,i,a)=>e+t*Math.pow(10,a.length-1-i),0)}let i8=()=>{let e=(0,_.s9)();return(0,l.jsx)(tK.m,{content:e["com.affine.settings.member-tooltip"](),children:(0,l.jsx)("div",{className:"_1ap5wdp5",children:(0,l.jsx)(D,{name:`${e.Members()} (0)`,desc:e["Members hint"](),children:(0,l.jsx)(et.$n,{children:e["Invite Members"]()})})})})},ae=()=>{let e=(0,d.h1)(w.BB).serverConfig,t=(0,p.S)(e.features$.map(e=>e?.payment)),i=(0,d.h1)(f.j).workspace,a=function(e){let{data:t}=(0,ez.IT)({query:eD.TJ,variables:{workspaceId:e}});return t.workspace.memberCount}(i.id),n=(0,d.h1)(H.Q),r=(0,p.S)(n.permission.isOwner$);(0,h.useEffect)(()=>{n.permission.revalidate()},[n]);let o=(0,h.useCallback)((e,t)=>void 0!==t&&e>=t,[]),c=(0,d.h1)(R.P);(0,h.useEffect)(()=>{c.quota.revalidate()},[c]);let u=(0,p.S)(c.quota.quota$),x=(0,d.h1)(w.nC),g=(0,p.S)(x.subscription.pro$.map(e=>e?.plan)),y=u?o(a,u.memberLimit):null,j=(0,_.s9)(),{invite:b,isMutating:k}=function(e){let{trigger:t,isMutating:i}=(0,eq.n)({mutation:eD.i6}),a=i5();return{invite:(0,h.useCallback)(async(i,n,r=!1)=>{let l=await t({workspaceId:e,email:i,permission:n,sendInviteMail:r});return await a(),l?.invite},[a,t,e]),isMutating:i}}(i.id),S=function(e){let t=i5(),{trigger:i}=(0,eq.n)({mutation:eD.NW});return(0,h.useCallback)(async a=>{let n=await i({workspaceId:e,userId:a});return await t(),n},[t,i,e])}(i.id),[F,A]=(0,h.useState)(!1),[N,M]=(0,h.useState)(0),B=(0,h.useCallback)(()=>{A(!0)},[]),$=(0,h.useCallback)(e=>{M(e)},[]),L=(0,h.useCallback)(async({email:e,permission:t})=>{await b(e,t,!0)&&(s.me.success({title:j["Invitation sent"](),message:j["Invitation sent hint"]()}),A(!1))},[b,j]),I=(0,m.Xr)(C.JO),O=(0,h.useCallback)(()=>{I({open:!0,activeTab:"plans",scrollAnchor:"cloudPricingPlan"}),v.u4.$.settingsPanel.workspace.viewPlans({control:"inviteMember"})},[I]),E=(0,h.useRef)(null),[V,P]=(0,h.useState)(null);(0,h.useLayoutEffect)(()=>{a>8&&E.current&&null===V&&P(E.current.getBoundingClientRect().height)},[E,a,V]);let Z=(0,h.useCallback)(async e=>{let t=await S(e);t?.revoke&&s.me.success({title:j["Removed successfully"]()})},[S,j]),U=(0,h.useMemo)(()=>u?(0,l.jsxs)("span",{children:[j["com.affine.payment.member.description2"](),t?(0,l.jsx)("div",{className:"_1ap5wdpi",onClick:O,children:(0,l.jsx)("span",{className:"_1ap5wdph",children:j["com.affine.payment.member.description.choose-plan"]()})}):null]}):null,[O,t,j,u]);return null===u?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{name:`${j.Members()} (${a}/${u.humanReadable.memberLimit})`,desc:U,spreadCol:!!r,children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(et.$n,{onClick:B,children:j["Invite Members"]()}),y?(0,l.jsx)(eG.bI,{isFreePlan:!!g,open:F,plan:u.humanReadable.name??"",quota:u.humanReadable.memberLimit??"",setOpen:A,onConfirm:O}):(0,l.jsx)(eG.lq,{open:F,setOpen:A,onConfirm:L,isMutating:k})]}):null}),(0,l.jsxs)("div",{className:i3,ref:E,style:V?{height:V}:{},children:[(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(ai,{memberCount:a}),children:(0,l.jsx)(aa,{workspaceId:i.id,isOwner:!!r,skip:N,onRevoke:Z})}),a>8&&(0,l.jsx)(eG.dK,{totalCount:a,countPerPage:8,onPageChange:$})]})]})},at=()=>{let e=(0,_.s9)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D,{name:e.Members(),desc:e["com.affine.payment.member.description2"]()}),(0,l.jsx)("div",{className:i3,children:(0,l.jsx)(ai,{memberCount:1})})]})},ai=({memberCount:e})=>{let t=(0,h.useMemo)(()=>e>8?506:"auto",[e]),i=(0,_.s9)();return(0,l.jsxs)("div",{style:{height:t},className:"_1ap5wdp6",children:[(0,l.jsx)(eT.R,{size:20}),(0,l.jsx)("span",{children:i["com.affine.settings.member.loading"]()})]})},aa=({workspaceId:e,isOwner:t,skip:i,onRevoke:a})=>{let n=function(e,t,i=8){let{data:a}=(0,ez.IT)({query:eD.JL,variables:{workspaceId:e,skip:t,take:i}}),n=a.workspace.members;return(0,h.useMemo)(()=>n.sort((e,t)=>{let i=i6(t)-i6(e);return 0!==i?i:null===e.name?1:null===t.name?-1:e.name.localeCompare(t.name)}),[n])}(e,i,8),r=(0,d.h1)(w.uR).session,s=(0,p.M)(r.account$);return(0,l.jsx)("div",{className:"_1ap5wdp8",children:n.map(e=>(0,l.jsx)(an,{currentAccount:s,member:e,isOwner:t,onRevoke:a},e.id))})},an=({member:e,isOwner:t,currentAccount:i,onRevoke:a})=>{let n=(0,_.s9)(),r=(0,h.useCallback)(()=>{a(e.id)},[a,e.id]),s=(0,h.useMemo)(()=>({show:t&&i.id!==e.id,leaveOrRevokeText:n["Remove from workspace"]()}),[i.id,t,e.id,n]);return(0,l.jsxs)("div",{className:"_1ap5wdp9","data-testid":"member-item",children:[(0,l.jsx)(ee.e,{size:36,url:e.avatarUrl,name:e.name?e.name:e.email}),(0,l.jsx)("div",{className:"_1ap5wdpa",children:e.name?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:i2,children:e.name}),(0,l.jsx)("div",{className:"_1ap5wdpd",children:e.email})]}):(0,l.jsx)("div",{className:i2,children:e.email})}),(0,l.jsx)("div",{className:(0,T.A)("_1ap5wdpb",{pending:!e.accepted}),children:e.accepted?e.permission===ea.aX.Owner?"Workspace Owner":"Member":"Pending"}),(0,l.jsx)(eI.W1,{items:(0,l.jsx)(eI.Dr,{"data-member-id":e.id,onClick:r,children:s.leaveOrRevokeText}),children:(0,l.jsx)(et.K0,{disabled:!s.show,style:{visibility:s.show?"visible":"hidden",flexShrink:0},children:(0,l.jsx)(J.MoreVerticalIcon,{})})})]},e.id)},ar=()=>(0,d.h1)(f.j).workspace.flavour===c.j.LOCAL?(0,l.jsx)(i8,{}):(0,l.jsx)(i9.E,{children:(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(at,{}),children:(0,l.jsx)(ae,{})})});var al=i(80943);let as=()=>{let e=(0,_.s9)(),t=(0,d.h1)(f.j).workspace,i=(0,d.h1)(H.Q),a=(0,p.S)(i.permission.isOwner$);(0,h.useEffect)(()=>{i.permission.revalidate()},[i]);let n=p.S(t?.engine.rootDocState$)?.ready,[r,o]=(0,h.useState)("");(0,h.useEffect)(()=>{if(t?.docCollection){o(t.docCollection.meta.name??i$.EZ);let e=t.docCollection.meta.commonFieldsUpdated.on(()=>{o(t.docCollection.meta.name??i$.EZ)});return()=>{e.dispose()}}o(i$.EZ)},[t]);let c=(0,h.useCallback)(async e=>{if(t){if(!e){t.docCollection.meta.setAvatar("");return}try{let i=await (0,al.f)(e),a=t.docCollection.blobSync,n=await a.set(i);t.docCollection.meta.setAvatar(n)}catch(e){throw console.error(e),e}}},[t]),u=(0,h.useCallback)(e=>{t&&t.docCollection.meta.setName(e)},[t]),[m,C]=(0,h.useState)("");(0,h.useEffect)(()=>{C(r)},[r]);let x=(0,h.useCallback)(t=>{u(t),s.me.success({title:e["Update workspace name success"]()})},[u,e]),g=(0,h.useCallback)(e=>{C(e)},[]),y=(0,h.useCallback)(e=>{"Enter"===e.code&&r!==m&&x(m)},[x,m,r]),j=(0,h.useCallback)(()=>{x(m)},[x,m]),v=(0,ei.A)(async()=>{await c(null)},[c]),b=(0,h.useCallback)(e=>{c(e).then(()=>{s.me.success({title:"Update workspace avatar success"})}).catch(e=>{s.me.error({title:"Update workspace avatar failed",message:e})})},[c]),k=n&&a;return(0,l.jsxs)("div",{className:"_1ap5wdp0",children:[(0,l.jsx)(en,{accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",fileChange:b,"data-testid":"upload-avatar",disabled:!a,children:(0,l.jsx)(iM.z,{meta:t.meta,size:56,name:r,rounded:8,colorfulFallback:!0,hoverIcon:a?(0,l.jsx)(J.CameraIcon,{}):void 0,onRemove:k?v:void 0,avatarTooltipOptions:k?{content:e["Click to replace photo"]()}:void 0,removeTooltipOptions:k?{content:e["Remove photo"]()}:void 0,"data-testid":"workspace-setting-avatar",removeButtonProps:{"data-testid":"workspace-setting-remove-avatar-button"}})}),(0,l.jsxs)(s.mO,{marginLeft:20,children:[(0,l.jsx)("div",{className:"_1ap5wdpf",children:e["Workspace Name"]()}),(0,l.jsxs)(s.Z6,{alignItems:"center",flexGrow:"1",children:[(0,l.jsx)(s.pd,{disabled:!n||!a,value:m,style:{width:280,height:32},"data-testid":"workspace-name-input",placeholder:e["Workspace Name"](),maxLength:64,minLength:0,onChange:g,onKeyUp:y}),m===r?null:(0,l.jsx)(et.$n,{"data-testid":"save-workspace-name",onClick:j,style:{marginLeft:"12px"},children:e["com.affine.editCollection.save"]()})]})]})]})},ao=({workspaceMetadata:e})=>{let t=(0,_.s9)(),i=(0,iq.h)(e),a=(0,iB.R)(e),n=(0,h.useCallback)(()=>{i?.engine.doc.resetSyncStatus().then(()=>{window.location.reload()}).catch(e=>{console.error(e)})},[i]);return i?(0,l.jsxs)(d.xc,{scope:i.scope,children:[(0,l.jsx)(G,{title:t["Workspace Settings with name"]({name:a?.name??i$.EZ}),subtitle:t["com.affine.settings.workspace.description"]()}),(0,l.jsx)(z,{title:t.Info(),children:(0,l.jsxs)(D,{name:t["Workspace Profile"](),desc:t["com.affine.settings.workspace.not-owner"](),spreadCol:!1,children:[(0,l.jsx)(as,{}),(0,l.jsx)(i7,{})]})}),(0,l.jsxs)(z,{title:t["com.affine.brand.affineCloud"](),children:[(0,l.jsx)(iQ,{}),(0,l.jsx)(ar,{})]}),environment.isDesktop&&(0,l.jsx)(z,{title:t["Storage and Export"](),children:(0,l.jsx)(i0,{workspace:i,workspaceMetadata:e})}),(0,l.jsxs)(z,{children:[(0,l.jsx)(iJ,{}),(0,l.jsx)(D,{name:(0,l.jsx)("span",{style:{color:"var(--affine-text-secondary-color)"},children:t["com.affine.resetSyncStatus.button"]()}),desc:t["com.affine.resetSyncStatus.description"](),style:{cursor:"pointer"},onClick:n,"data-testid":"reset-sync-status",children:(0,l.jsx)(J.ArrowRightSmallIcon,{})})]})]}):null};var ac=i(67301),ad=i(47265),af=i(20880),ap=i(43704),au="jgw419a";let am=(0,h.createContext)(),ah=()=>{let e=(0,ac.o)();return(0,h.useMemo)(()=>new ad.hW(e),[e])},aC=()=>(0,l.jsx)("div",{className:"jgw4197"}),ax=({property:e})=>{let t=(0,_.s9)(),i=(0,h.useContext)(am),[a,n]=(0,h.useState)(()=>({...e}));(0,h.useEffect)(()=>{n(e)},[e]);let r=(0,h.useCallback)(()=>{i.updatePropertyMeta(a.id,{required:!a.required})},[i,a.id,a.required]),o=(0,h.useCallback)(()=>{i.removePropertyMeta(a.id)},[i,a.id]),[c,d]=(0,h.useState)(!1),[f,p]=(0,h.useState)(!1),[u,m]=(0,h.useState)(!1),C=(0,h.useCallback)(()=>{d(!1),p(!1),i.updatePropertyMeta(a.id,a)},[a,i]),x=(0,h.useMemo)(()=>{let e=[];return e.push({text:t["com.affine.settings.workspace.properties.set-as-required"](),onClick:r,checked:a.required}),e.push("-"),e.push({text:t["com.affine.settings.workspace.properties.edit-property"](),onClick:e=>{e.preventDefault(),p(!0)}}),e.push({text:t["com.affine.settings.workspace.properties.delete-property"](),onClick:()=>m(!0),type:"danger",icon:(0,l.jsx)(J.DeleteIcon,{})}),(0,ap.DP)(e)},[r,a.required,t]),g=(0,h.useCallback)(e=>{i.updatePropertyMeta(a.id,{name:e})},[i,a.id]),y=(0,h.useCallback)(e=>{n(t=>({...t,name:e}))},[]),j=(0,h.useCallback)(e=>{n(t=>({...t,icon:e})),i.updatePropertyMeta(a.id,{icon:e})},[a.id,i]),v=(0,h.useMemo)(()=>{let e=[];return e.push((0,l.jsx)(ap.hf,{property:a,onIconChange:j,onNameBlur:g,onNameChange:y})),e.push((0,l.jsx)(ap.mM,{property:a})),e.push("-"),e.push({text:t["com.affine.settings.workspace.properties.delete-property"](),onClick:o,type:"danger",icon:(0,l.jsx)(J.DeleteIcon,{})}),(0,ap.DP)(e)},[o,j,g,y,a,t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.W1,{rootOptions:{open:c,onOpenChange:C},items:f?v:x,children:(0,l.jsx)(s.K0,{onClick:()=>d(!0),size:"20",children:(0,l.jsx)(J.MoreHorizontalIcon,{})})}),(0,l.jsx)(af.K,{onConfirm:()=>{m(!1),o()},onCancel:()=>m(!1),show:u,property:e})]})},ag=({property:e,relatedPages:t})=>{let i=(0,ad.U)(e.icon,e.type),a=e.required,n=(0,_.s9)();return(0,l.jsxs)("div",{className:"jgw4192","data-property-id":e.id,"data-testid":"custom-property-row",children:[(0,l.jsx)(i,{className:"jgw4194"}),(0,l.jsx)("div",{"data-unnamed":!e.name,className:"jgw4195",children:e.name||n.unnamed()}),t.length>0?(0,l.jsxs)("div",{className:"jgw4196",children:["·"," ",(0,l.jsxs)(_.x6,{i18nKey:t.length>1?"com.affine.settings.workspace.properties.doc_others":"com.affine.settings.workspace.properties.doc",count:t.length,children:[(0,l.jsx)("span",{children:{count:t.length}})," doc"]})]}):null,(0,l.jsx)("div",{className:"jgw4198"}),a?(0,l.jsx)("div",{className:"jgw4199",children:n["com.affine.page-properties.property.required"]()}):null,(0,l.jsx)(ax,{property:e})]})},ay=({properties:e,statistics:t})=>(0,l.jsx)("div",{className:"jgw4193",children:e.map(e=>{let i=[...t.get(e.id)??[]];return(0,l.jsxs)(h.Fragment,{children:[(0,l.jsx)(ag,{property:e,relatedPages:i}),(0,l.jsx)(aC,{})]},e.id)})}),aj=({filterMode:e})=>{let t=(0,h.useContext)(am),i=t.getOrderedPropertiesSchema(),a=t.getPropertyStatistics(),n=(0,_.s9)();if("all"!==e){let t=i.filter(t=>{let i=a.get(t.id)?.size??0;return"in-use"===e?i>0:0===i});return(0,l.jsx)(ay,{properties:t,statistics:a})}{let e=i.filter(e=>e.required),t=i.filter(e=>!e.required);return(0,l.jsxs)(l.Fragment,{children:[e.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:au,children:n["com.affine.settings.workspace.properties.required-properties"]()}),(0,l.jsx)(ay,{properties:e,statistics:a})]}):null,t.length>0?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:au,children:n["com.affine.settings.workspace.properties.general-properties"]()}),(0,l.jsx)(ay,{properties:t,statistics:a})]}):null]})}},av=()=>{let e=(0,_.s9)(),t=(0,h.useContext)(am),[i,a]=(0,h.useState)("all"),n=t.getOrderedPropertiesSchema(),r=(0,h.useMemo)(()=>{let t=["all","-","in-use","unused"].map(t=>"-"===t?"-":{text:e[`com.affine.settings.workspace.properties.${t}`](),onClick:()=>a(t),checked:i===t});return(0,ap.DP)(t)},[i,e]),o=(0,h.useCallback)((e,t)=>{setTimeout(()=>{let e=document.querySelector(`[data-testid="custom-property-row"][data-property-id="${t}"]`);e&&(e.scrollIntoView({behavior:"smooth"}),e.dataset.highlight="",setTimeout(()=>{delete e.dataset.highlight},3e3))})},[]);return(0,l.jsxs)("div",{className:"jgw4190",children:[(0,l.jsxs)("div",{className:"jgw4191",children:[n.length>0?(0,l.jsx)(s.W1,{items:r,children:(0,l.jsx)(s.$n,{prefix:(0,l.jsx)(J.FilterIcon,{}),children:"all"===i?e["com.affine.filter"]():e[`com.affine.settings.workspace.properties.${i}`]()})}):null,(0,l.jsx)(s.W1,{items:(0,l.jsx)(ad.fq,{onCreated:o,metaManager:t}),children:(0,l.jsx)(s.$n,{variant:"primary",children:e["com.affine.settings.workspace.properties.add_property"]()})})]}),(0,l.jsx)(aj,{filterMode:i})]})},ab=()=>{let e=ah();return(0,l.jsx)(am.Provider,{value:e,children:(0,l.jsx)(av,{})})},a_=({workspaceMetadata:e})=>{let t=(0,_.s9)(),i=(0,iq.h)(e),a=(0,iB.R)(e),n=a?.name||"untitled";return null===i?null:(0,l.jsxs)(d.xc,{scope:i.scope,children:[(0,l.jsx)(G,{title:t["com.affine.settings.workspace.properties.header.title"](),subtitle:(0,l.jsxs)(_.x6,{values:{name:n},i18nKey:"com.affine.settings.workspace.properties.header.subtitle",children:["Manage workspace ",(0,l.jsx)("strong",{children:"name"})," properties"]})}),(0,l.jsx)(ab,{})]})},ak=({workspaceMetadata:e,subTab:t})=>{switch(t){case"preference":return(0,l.jsx)(ao,{workspaceMetadata:e});case"properties":return(0,l.jsx)(a_,{workspaceMetadata:e})}},aw=e=>iD.includes(e),aS=()=>(0,l.jsx)("div",{className:"_1hbyecy7",children:(0,l.jsx)(s.Rh,{size:24})}),aF=({activeTab:e="appearance",workspaceMetadata:t=null,onSettingClick:i,...a})=>{let n=(0,p.S)((0,d.h1)(w.uR).session.status$),r=(0,h.useRef)(null),o=(0,h.useRef)(null),c=(0,m.Xr)(eb);(0,h.useLayoutEffect)(()=>{let e;if(!a.open)return;let t=(0,Q.A)(()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(!r.current||!o.current)return;let e=o.current.offsetWidth,t=o.current.offsetHeight,i=r.current.offsetWidth,a=o.current;a?.style.setProperty("--setting-modal-width",`${e}px`),a?.style.setProperty("--setting-modal-height",`${t}px`),a?.style.setProperty("--setting-modal-content-width",`${i}px`),a?.style.setProperty("--setting-modal-gap-x",`${(e-i)/2}px`)})},200);return window.addEventListener("resize",t),t(),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",t)}},[a.open]),(0,h.useEffect)(()=>(c(o.current),()=>{c(null)}),[c]);let f=(0,h.useCallback)((e,t)=>{i({activeTab:e,workspaceMetadata:t})},[i]),u=(0,m.Xr)(C.tc),x=(0,m.Xr)(C.SH),g=(0,h.useCallback)(()=>{u(!0)},[u]),y=(0,h.useCallback)(()=>{x(!0)},[x]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(iP,{activeTab:e,onTabChange:f,selectedWorkspaceId:t?.id??null}),(0,l.jsx)(s.yE.Root,{children:(0,l.jsxs)(s.yE.Viewport,{"data-testid":"setting-modal-content",className:"_1hbyecy0",ref:o,children:[(0,l.jsxs)("div",{ref:r,className:"_1hbyecy1",children:[(0,l.jsx)("div",{className:"_1hbyecy2",children:(0,l.jsxs)(h.Suspense,{fallback:(0,l.jsx)(W,{}),children:[e.startsWith("workspace:")&&t?(0,l.jsx)(ak,{subTab:e.split(":")[1],workspaceMetadata:t},t.id):null,aw(e)?(0,l.jsx)(iN,{generalKey:e}):null,"account"===e&&"authenticated"===n?(0,l.jsx)(ev,{}):null]})}),(0,l.jsxs)("div",{className:"_1hbyecy5",children:[(0,l.jsx)(J.ContactWithUsIcon,{fontSize:16}),(0,l.jsx)(_.x6,{i18nKey:"com.affine.settings.suggestion-2",components:{1:(0,l.jsx)("span",{className:iT,onClick:y}),2:(0,l.jsx)("span",{className:iT,onClick:g})}})]})]}),(0,l.jsx)(s.yE.Scrollbar,{})]})})]})},aA=({activeTab:e="appearance",workspaceMetadata:t=null,onSettingClick:i,...a})=>(0,l.jsx)(y.aF,{width:1280,height:920,contentOptions:{"data-testid":"setting-modal",style:{maxHeight:"85vh",maxWidth:"70vw",padding:0,overflow:"hidden",display:"flex"}},...a,children:(0,l.jsx)(h.Suspense,{fallback:(0,l.jsx)(aS,{}),children:(0,l.jsx)(aF,{activeTab:e,workspaceMetadata:t,onSettingClick:i,...a})})});var aN=i(93813);let aM=()=>{let e=(0,_.s9)(),[t,i]=(0,m.fp)(C.SH);return(0,l.jsx)(s.of,{open:t,topImage:(0,l.jsx)("video",{width:400,height:300,style:{objectFit:"cover"},src:"/static/githubStar.mp4",autoPlay:!0,loop:!0}),title:e["com.affine.star-affine.title"](),onOpenChange:i,description:e["com.affine.star-affine.description"](),cancelText:e["com.affine.star-affine.cancel"](),to:"https://github.com/toeverything/AFFiNE",confirmButtonOptions:{variant:"primary"},confirmText:e["com.affine.star-affine.confirm"](),external:!0})};var aB=i(6427),a$=i(80696),aL=i(17660),aI=i(50822),aO=i(85651),aE=i(74255),aH="_17rc1nd";let aR=(e,t,i)=>{let a=e.getContext("2d");if(!a)return;let n=window.devicePixelRatio||1;e.width=e.getBoundingClientRect().width*n,e.height=e.getBoundingClientRect().height*n;let r=getComputedStyle(document.documentElement).getPropertyValue("--affine-text-primary-color").trim();a.scale(n,n),a.clearRect(0,0,e.width,e.height),a.fillStyle=r,a.font="15px Inter",a.fillText(t,-i,22),a.textAlign="left",a.textBaseline="middle"},aV=({text:e,scrollLeft:t,className:i})=>{let a=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let i=a.current;if(i)return aR(i,e,t),(0,s.vy)(i,()=>aR(i,e,t))},[e,t]),(0,l.jsx)("canvas",{className:i,ref:a})},aP=()=>{let[e,t]=(0,h.useState)(""),i=(0,d.h1)(aE.H).findInPage,a=(0,p.S)(i.visible$),n=(0,p.S)(i.result$),r=(0,p.S)(i.isSearching$),o=(0,h.useRef)(null),[c,f]=(0,h.useState)(!1),[u,m]=(0,h.useState)(0),[C,x]=(0,h.useState)(!1),[{status:g},y]=(0,aO.p)({timeout:120});(0,h.useEffect)(()=>{y(a)},[a]);let j=(0,h.useCallback)(e=>{let a=e.target.value;t(a),C||i.findInPage(a),0===a.length&&i.clear(),o.current?.focus()},[C,i]),v=(0,h.useCallback)(()=>{f(!0)},[]),b=(0,h.useCallback)(()=>{f(!1)},[]);(0,h.useEffect)(()=>{if(a){t(i.searchText$.value||"");let e=e=>{"Escape"===e.key&&i.onChangeVisible(!1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}return()=>{}},[i,i.searchText$.value,a]),(0,h.useEffect)(()=>{let e=i.isSearching$.subscribe(()=>{o.current?.focus(),setTimeout(()=>{o.current?.focus()})});return()=>{e.unsubscribe()}},[i.isSearching$]);let _=(0,h.useCallback)(()=>{i.backward()},[i]),k=(0,h.useCallback)(()=>{i.forward()},[i]),w=(0,h.useCallback)(e=>{e||i.clear(),i.onChangeVisible(e)},[i]),S=(0,h.useCallback)(()=>{w(!1)},[w]),F=(0,h.useCallback)(e=>{("Enter"===e.key||"ArrowDown"===e.key)&&k(),"ArrowUp"===e.key&&_()},[_,k]),A=(0,h.useCallback)(e=>{m(e.currentTarget.scrollLeft)},[]),N=(0,h.useCallback)(()=>{x(!0)},[]),M=(0,h.useCallback)(e=>{x(!1),i.findInPage(e.currentTarget.value)},[i]);return(0,l.jsx)(eY.bL,{open:"exited"!==g,children:(0,l.jsxs)(eY.ZL,{children:[(0,l.jsx)(eY.hJ,{className:"_17rc1n3"}),(0,l.jsx)("div",{className:"_17rc1n4",children:(0,l.jsxs)(eY.UC,{style:(0,aI.D)({"var(--_17rc1n0)":"120ms"}),className:"_17rc1n5","data-state":g,children:[(0,l.jsxs)("div",{className:(0,T.A)("_17rc1n8",{active:c||r}),children:[(0,l.jsx)(J.SearchIcon,{className:"_17rc1n7"}),(0,l.jsxs)("div",{className:"_17rc1n9",children:[(0,l.jsx)("input",{type:"text",autoFocus:!0,value:e,ref:o,style:{visibility:r?"hidden":"visible"},onBlur:b,onFocus:v,className:"_17rc1na",onKeyDown:F,onChange:j,onScroll:A,onCompositionStart:N,onCompositionEnd:M}),(0,l.jsx)(aV,{className:"_17rc1nb _17rc1na",text:e,scrollLeft:u})]}),(0,l.jsx)("div",{className:"_17rc1nc",children:e.length>0&&n&&0!==n.matches?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:n?.activeMatchOrdinal||0}),(0,l.jsx)("span",{children:"/"}),(0,l.jsx)("span",{children:n?.matches||0})]}):e.length?(0,l.jsx)("span",{children:"No matches"}):null})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.K0,{size:"24",className:(0,T.A)(aH,"backward"),onClick:_,icon:(0,l.jsx)(J.ArrowUpSmallIcon,{})}),(0,l.jsx)(s.K0,{size:"24",className:(0,T.A)(aH,"forward"),onClick:k,icon:(0,l.jsx)(J.ArrowDownSmallIcon,{})})]}),(0,l.jsx)(s.K0,{onClick:S,icon:(0,l.jsx)(J.CloseIcon,{})})]})})]})})};var aZ=i(93412);let aU=()=>{let[{open:e,workspaceMetadata:t,activeTab:i},a]=(0,m.fp)(C.JO),n=(0,h.useCallback)(({activeTab:e,workspaceMetadata:t})=>{a(i=>({...i,activeTab:e,workspaceMetadata:t}))},[a]),r=(0,h.useCallback)(e=>{a(t=>({...t,open:e}))},[a]);return((0,h.useEffect)(()=>{if(environment.isDesktop)return o.AZ?.applicationMenu.openAboutPageInSettingModal(()=>a({activeTab:"about",open:!0}))},[a]),e)?(0,l.jsx)(aA,{open:e,activeTab:i,workspaceMetadata:t,onSettingClick:n,onOpenChange:r}):null},aG=()=>{let[{openModal:e,state:t,email:i="",emailType:a="changePassword"},n]=(0,m.fp)(C.W7);return(0,l.jsx)(x.U,{open:e,state:t,email:i,emailType:a,setEmailType:(0,h.useCallback)(e=>{n(t=>({...t,emailType:e}))},[n]),setOpen:(0,h.useCallback)(e=>{n(t=>({...t,openModal:e}))},[n]),setAuthState:(0,h.useCallback)(e=>{n(t=>({...t,state:e}))},[n]),setAuthEmail:(0,h.useCallback)(e=>{n(t=>({...t,email:e}))},[n])})};function aT(){let e=(0,d.h1)(f.j).workspace,{trashModal:t,setTrashModal:i,handleOnConfirm:a}=(0,a$.T)(e.docCollection),n=t.pageTitles,r=t.open,s=(0,h.useCallback)(e=>{i({...t,open:e})},[t,i]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(aM,{}),(0,l.jsx)(E,{}),e?(0,l.jsx)(aU,{}):null,e?.flavour===c.j.LOCAL&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{}),(0,l.jsx)(O,{})]}),e?.flavour===c.j.AFFINE_CLOUD&&(0,l.jsx)(Z,{}),(0,l.jsx)(g.I,{}),(0,l.jsx)(aZ.hv,{}),environment.isDesktop&&(0,l.jsx)(aP,{}),(0,l.jsx)(aB.fB.ConfirmModal,{open:r,onConfirm:a,onOpenChange:s,titles:n})]})}let aD=()=>{let{openPage:e}=(0,iW.P)(),t=(0,d.h1)(aL.uR),[i,a]=(0,m.fp)(C.G4),n=d.Dq(f.j)?.workspace,r=(0,p.S)((0,d.h1)(u.q).list.workspaces$),o=(0,j.V)(async()=>{a(!1);try{await t.signOut()}catch(e){console.error(e),s.me.error({title:"Failed to sign out"})}if(n?.flavour===c.j.AFFINE_CLOUD){let t=r.find(e=>e.flavour===c.j.LOCAL);t&&e(t.id,iK.Tk.ALL)}},[t,n,e,a,r]);return(0,l.jsx)(aN.$,{open:i,onOpenChange:a,onConfirm:o})},aq=()=>{let[e,t]=(0,m.fp)(C.qj),{jumpToSubPath:i,jumpToPage:a}=(0,iW.P)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(B,{mode:e,onClose:(0,h.useCallback)(()=>{t(!1)},[t]),onCreate:(0,h.useCallback)((e,n)=>{t(!1),setTimeout(()=>{n?a(e,n):i(e,iK.Tk.ALL)})},[a,i,t])}),(0,l.jsx)(aG,{}),(0,l.jsx)(aD,{})]})}}}]);
//# sourceMappingURL=chunk.3359.cfd8c922.js.map