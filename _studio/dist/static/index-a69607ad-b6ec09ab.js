import{s as b,a0 as x,r as l,q as d,P as j,j as o,bY as v,ag as H,cg as I,$ as g,aJ as k,ah as B,a$ as E}from"./sanity-44d5c817.js";import{useDeskTool as y}from"./index-aba2361f-ec501b99.js";var u;function C(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=y();return!(n!=null&&n.length)&&!i?null:o(H,{actions:o(I,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(g,{as:k,"data-as":"a",icon:B,mode:"bleed"}),title:i})}const L=b(x)(u||(u=C([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=E();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function A(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,h]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(O,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[v.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{A as default};
