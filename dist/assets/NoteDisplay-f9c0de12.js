import{d as c,o as n,e as s,z as l,f as r,t as a,_ as d}from"./index-7a13ca49.js";const u=["innerHTML"],m=["textContent"],f=["textContent"],k=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return(e,t)=>e.noteHtml?(n(),s("div",{key:0,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(n(),s("div",{key:1,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(n(),s("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,f)],2))}}),y=d(k,[["__file","/Users/mattiamanzati/Desktop/long-running-process/node_modules/.pnpm/@slidev+client@0.43.6_postcss@8.4.30_vite@4.4.9/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{y as N};
