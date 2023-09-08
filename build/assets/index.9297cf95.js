import{s as e,W as o,j as t,L as r,r as i,u as l,a as n,B as a,F as d,R as c,b as s,c as m,d as h}from"./vendor.0418497e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const p=e.div`
    max-width: 768px;
    margin: 40px auto;
    padding: 20px;
    transition: ease-in-out .35s;
    text-align: center;
    background: ${({theme:e})=>e.colors.TransCols};
    color: white;
    border-radius: 1.5rem;
    border-right: 2px groove ${({theme:e})=>e.colors.pinkcols};
    border-left:  2px groove ${({theme:e})=>e.colors.pinkcols};
    /* min-height: 100vh; */
    h1{
        color: yellow;
        transition: ease-in .24s;
    }
    p{
        color: #f1356d;
        font-weight: 700;
    }
    h1:hover{
        color: white;
    }
    &:hover{
        /* background: linear-gradient(45deg, lime, green, darkgreen, black ); */
        /* cursor: pointer; */
    }
    @media(max-width: ${({theme:e})=>e.SduoMobile}){
        font-weight: 600;
        font-size: 1rem;
    }
    @media(max-width: ${({theme:e})=>e.IphoneMobile}){
        font-weight: 400;
        font-size: .85rem;
        padding: .2rem;
    }
    @media(max-width: ${({theme:e})=>e.GfoldMobile}){
        font-weight: 400;
        font-size: .85rem;
        padding: .05rem;
        >h2{
            font-size: 1rem;
        }
    }
    `,g=o`
    /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'); */
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        /* background-color: #132601; */
        /* background-color: rgba(0,0,0,0.1);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2300D500'/%3E%3Cstop offset='1' stop-color='%23132601'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23F8FF18' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23F8FF18' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: cover; */
        background-color: black;
        /* background-color: rgba(0,0,0,0.9); */

        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        opacity: .6;
        line-height: 1.5;   
    }

    img {
        max-width: 100%;
    }
`,f=e.article`
    max-width: 768px;
    /* max-width: 1024px; */
    background-color: rgb(0,0,0,.9);
    background-color: black;
    margin: auto;
    min-height: 100vh;
`,x=e.nav`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 768px;
margin: 0 auto;
/* color:${({theme:e})=>e.colors.limecols}; */
border-bottom: 2px solid ${({theme:e})=>e.colors.pinkcols};
/* Dev Cols */
    background: ${({theme:e})=>e.colors.TransCols}; 
    
    h1{
        font-family: ${({theme:e})=>e.assets.font_fam};
        /* background: ${({theme:e})=>e.colors.pinkcols};  */
        color: ${({theme:e})=>e.colors.limecols}; 
        /* border: 2px groove ${({theme:e})=>e.assets.color_i}; */
        padding: 1rem;
        border-radius: 10px;
        text-align: center;
    }
    @media(max-width: ${({theme:e})=>e.IpadMobile}){
        padding: 1rem;
        display: block;
        >h1{ 
            width: 50%;
            margin: 0 auto;
            margin-bottom: .25rem;
        }
        @media(max-width: ${({theme:e})=>e.SduoMobile}){
            >h1{ 
                width: 50%;
                padding: .5rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme:e})=>e.PixelMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.5rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme:e})=>e.IphoneMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.5rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme:e})=>e.GfoldMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.3rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
    }
    `,u=e.div`
margin-left: auto;
background-color: ${({theme:e})=>e.colors.TransCols};
border-radius: 10px;
padding: 1rem;
text-align: center;
/* border: 2px groove ${({theme:e})=>e.assets.color_c}; */

        
        a {
            margin-left: 16px;
            text-decoration: none;
            color:${({theme:e})=>e.colors.pinkcols};
            padding: 6px;
            /* font-family: cursive; */
            font-family: ${({theme:e})=>e.assets.font_fam};
            transition: all .5s ease-out;
        }
        a:hover{
            color:${({theme:e})=>e.colors.limecols};
            transform: scale(1.1);
        }

    /* RESPONSIVE SECTION */
    @media(max-width: ${({theme:e})=>e.IpadMobile}){
        padding: 1rem;
        width: 50%;
        margin: 0 auto;
    }

    @media(max-width: ${({theme:e})=>e.SduoMobile}){
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
            
        a {
            text-decoration: none;
            color:${({theme:e})=>e.colors.pinkcols};
            padding: 3px;
            font-family: cursive;
        }
    }

    @media(max-width: ${({theme:e})=>e.IphoneMobile}){
        width: 85%;
        margin: 0 auto;
        padding: .25rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        a {
            text-decoration: none;
            color:${({theme:e})=>e.colors.pinkcols};
            padding: 1px;
            font-family: cursive;
            }
        }
        
    @media(max-width: ${({theme:e})=>e.PixelMobile}){
        width: 85%;
        margin: 0 auto;
        padding: .25rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        a {
            text-decoration: none;
            color:${({theme:e})=>e.colors.pinkcols};
            padding: 1px;
            font-family: cursive;
            }
        }
        `,b=t.exports.jsx,w=t.exports.jsxs;function v(){return w(x,{children:[b("h1",{children:"The FloJoTer"}),w(u,{children:[b(r,{to:"/",children:"Home"}),b(r,{to:"create/",children:"New Blog"})]})]})}const y=e.div`
/* display: flex;
flex-direction: column;
align-items: center; */
&>div{
    color: ${({theme:e})=>e.colors.limecols};
    text-align: left; 
}
>h2{
    color: ${({theme:e})=>e.colors.limecols};
    margin-bottom: .5rem;
}
>p{
    color: ${({theme:e})=>e.assets.color_c};
    margin-bottom: .5rem;
    font-weight: 900;
    font-family: cursive;
}
`,$=e.div`
    padding: 10px 16px;
    margin: 20px 0;
    border-bottom: 1px solid ${({theme:e})=>e.assets.color_c};
    width: 100%;
    text-align: left; 
    transition: all .3s ease;
    &:hover{
        box-shadow: 1px 3px 5px rgba(0,0,0,0.5);
        cursor: pointer;
        border-radius: 1.5rem;
    }
    &>a{
        text-decoration: none;
        color: ${({theme:e})=>e.colors.limecols};
    }
    &>h2{
        font-size: 20px;
        color: ${({theme:e})=>e.colors.pinkcols};
        margin-bottom: 8px;
    }
    >p{
        color: ${({theme:e})=>e.colors.limecols};
    }

    /*RESPONSIVE SECTION*/
    @media(max-width: ${({theme:e})=>e.GfoldMobile}){
        width: 90%;
        margin :auto;
        padding: 16px 2px;
    /*@media(max-width: ${({theme:e})=>e.SduoMobile}){}*/
    /*@media(max-width: ${({theme:e})=>e.IphoneMobile}){}*/
    }
    `,k=e.div`
    >h2{
        color: #f1356d;
        text-align: left;
        @media(max-width:${({theme:e})=>e.IphoneMobile}){
            padding: 1rem;
            margin-bottom: -1rem;
        }
        
    }
`,S=e.button`
    width: 5rem;
    height: 2.5rem;
    padding: .25rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({theme:e})=>e.colors.limecols};
    
    &:hover{
        background-color:black;
        color:${({theme:e})=>e.colors.limecols};
        cursor: pointer;
    }
`,C=({blogs:e,title:o})=>w(k,{children:[b("h2",{children:o+"!"}),e.map((e=>b($,{children:w(r,{to:`/blogs/${e.id}`,children:[b("h2",{children:e.title}),w("p",{children:["Written by ",e.author]})]})},e.id)))]}),E=e=>{const[o,t]=i.exports.useState(null),[r,l]=i.exports.useState(!0),[n,a]=i.exports.useState(null);return i.exports.useEffect((()=>{const o=new AbortController;return setTimeout((()=>{fetch(e,{signal:o.signal}).then((e=>{if(!e.ok)throw Error("Could not fetch the data for that resource");return e.json()})).then((e=>{t(e),l(!1),a(null)})).catch((e=>{"AbortError"===e.name?console.log("fetch aborted"):(a(e.message),l(!1))}))}),1e3),()=>o.abort()}),[e]),{data:o,isPending:r,error:n}},_=()=>{const{data:e,isPending:o,error:t}=E("http://localhost:8000/blogs");return w(y,{children:[t&&b("div",{children:t}),o&&b("div",{children:" Loading... "}),e&&b(C,{blogs:e,title:"All Blogs"})]})},M=e.div`
    color: ${({theme:e})=>e.colors.limecols};
    max-width: 400px;
    margin: 0 auto;
    text-align: center;

    label{
        text-align: left;
        display: block;
    }

    h2{
        font-size: 20px;
        color: ${({theme:e})=>e.colors.pinkcols};
        margin-bottom: 20px;
    }
    
    input, textarea, select{
        width: 100%;
        padding: 8px 10px;
        margin: 10px 0;
        border: 1px ridge ${({theme:e})=>e.colors.pinkcols};
        border-radius: 10px;
        box-sizing: border-box;
        display: block;
    }
    
    input:focus, textarea:focus, select:focus{
        outline: none;
        border: 1px ridge ${({theme:e})=>e.colors.limecols};
        /* color: ${({theme:e})=>e.colors.pinkcols}; */
    }

`,z=()=>{const[e,o]=i.exports.useState(""),[t,r]=i.exports.useState(""),[n,a]=i.exports.useState(""),[d,c]=i.exports.useState(!1),s=l();return w(M,{children:[b("h2",{children:"Add a New Blog"}),w("form",{onSubmit:o=>{o.preventDefault();const r={title:e,body:t,author:n};fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((()=>{console.log("New Blog added"),c(!1),s("/")}))},children:[b("label",{children:"Blog Author:"}),b("input",{type:"text",required:!0,value:n,onChange:e=>a(e.target.value)}),b("label",{children:"Blog Title:"}),b("input",{type:"text",required:!0,value:e,onChange:e=>o(e.target.value)}),b("label",{children:"Blog Body:"}),b("textarea",{required:!0,value:t,onChange:e=>r(e.target.value)}),!d&&b(S,{children:"Add Blog"}),d&&b(S,{disabled:!0,children:"Adding blog..."})]})]})},I=e.div`
    color: ${({theme:e})=>e.colors.limecols};
    text-align: left;

    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    div{
        margin: 20px 0;
    }
    p{
        /* color:#f1356d; */
    }
    @media(max-width:${({theme:e})=>e.GfoldMobile}){
        padding: 10px;
        h2{
            font-size: 15px;
            margin-bottom: 3px;
        }
        div{
            margin: 10px 0;
        }
    }
`,P=()=>{const{id:e}=n(),{data:o,error:t,isPending:r}=E("http://localhost:8000/blogs/"+e),i=l();return w(I,{children:[r&&b("div",{children:"Loading..."}),t&&b("div",{children:t}),o&&w("article",{children:[b("h2",{children:o.title}),w("p",{children:["Written by ",o.author]}),b("div",{children:o.body}),b(S,{onClick:()=>{fetch("http://localhost:8000/blogs/"+o.id,{method:"DELETE"}).then((()=>{i("/")}))},children:"delete"})]})]})},B=e.div`
    color: ${({theme:e})=>e.colors.limecols};
    
    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    div{
        margin: 20px 0;
    }
    a{
        text-decoration: none;
        color: ${({theme:e})=>e.colors.limecols};
    }
`,T=()=>w(B,{children:[b("h2",{children:"Sorry"}),b("p",{children:"That page cannot be found at the moment"}),b(r,{to:"/",children:"Back to the homepage..."})]}),j={colors:{pinkcols:"#f1356d",PrimoCols:"hsl(192, 100%, 9%)",TransCols:"rgba(0,250,0,0.055)",limecols:"limegreen"},IpadMobile:"768px",SduoMobile:"540px",PixelMobile:"420px",IphoneMobile:"360px",GfoldMobile:"280px",assets:{font_fam:"Poppins",radius:"0.5rem",radius_2:"1rem",padding:"1rem",h:"100vh",w:"100vw",padding_2:"0.5rem",fontSizeSmallest:"1rem",fontSizeSmall:"2rem",fontSizeMid:"3.5rem",fontSizeLarge:"5rem",color_a:"#18ffff",color_b:"#6fffd2",color_c:"#0affad",color_d:"#08a573",color_e:"#1de9b6",color_f:"#004d40",color_g:"#84ffff",color_h:"#0b6953",color_i:"#fcfc18",color_j:"#f71111",color_0:"#0ed80e",color_1:"#2885db",color_2:"#f56980",color_3:"#07075f",color_4:"#8f2c2cbe",color_5:"#00ff00",color_6:"#807676",color_7:"#ff7b00",color_8:"#dd06dd",color_9:"#FBF9F9",color_10:"rgba(50, 50, 50, 0.3)",box_shadow:"0px 2px 5px 1px black"}};function F(){return b(a,{children:b(d,{theme:j,children:w(f,{children:[b(g,{}),b(v,{}),b(p,{children:w(c,{children:[b(s,{exact:!0,path:"/",caseSensitive:!1,element:b(_,{})}),b(s,{exact:!0,path:"/create",caseSensitive:!1,element:b(z,{})}),b(s,{exact:!0,path:"/blogs/:id",caseSensitive:!1,element:b(P,{})}),b(s,{path:"*",caseSensitive:!1,element:b(T,{})})]})})]})})})}m.render(b(h.StrictMode,{children:b(F,{})}),document.getElementById("root"));
