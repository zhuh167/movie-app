import{a as n,c as r,h as t,t as a,m as v,r as _,e as u,w as g,g as m,x as y,F as $,l as f,y as k,b as h,T,i as b,z as x,A as I,B as R,p as j,q as w,C as p,k as B}from"./index.a97e0d74.js";const C={key:0,class:"main__budjet"},F={class:"main__budjet-info"},L=t("span",null,"\u0411\u044E\u0434\u0436\u0435\u0442",-1),N={class:"main__budjet-info"},V=t("span",null,"\u0421\u0431\u043E\u0440\u044B",-1),A={class:"main__budjet-info"},D=t("span",null,"\u0421\u0442\u0430\u0442\u0443\u0441",-1),U={class:"main__budjet-info"},z=t("span",null,"\u0418\u0441\u0445\u043E\u0434\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",-1),E={__name:"Budget",props:["currentMovie"],setup(e){return(s,d)=>e.currentMovie?(n(),r("div",C,[t("div",F,[L,t("span",null,"$"+a(e.currentMovie.budget),1)]),t("div",N,[V,t("span",null,"$"+a(e.currentMovie.revenue),1)]),t("div",A,[D,t("span",null,a(e.currentMovie.status),1)]),t("div",U,[z,t("span",null,a(e.currentMovie.original_title||e.currentMovie.original_name),1)])])):v("",!0)}},S={key:0,class:"main__media"},Y=["src"],q={class:"main__media-block"},K={class:"main__media-left"},G={class:"main__media-left-title"},H={class:"main__media-left-text"},J={class:"main__media-left-janr"},O={class:"main__media-date"},P={key:0},Q={class:"main__media-right"},W=["src"],X={class:"main__media-actors"},Z=t("h2",{class:"main__media-title"},"\u0412 \u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u043E\u043B\u044F\u0445",-1),ee={class:"main__media-casts"},te={__name:"Intro",props:["typeMT","currentMovie"],setup(e){return(s,d)=>{const i=_("Trailer"),o=_("Actors"),c=_("Loader");return n(),u(T,{name:"infoblock",mode:"out-in"},{default:g(()=>[e.currentMovie?(n(),r("div",S,[t("img",{src:m(y)+e.currentMovie.poster_path,alt:"",class:"main__media-poster"},null,8,Y),t("div",q,[t("div",K,[t("h1",G,a(e.currentMovie.title||e.currentMovie.name),1),t("p",H,a(e.currentMovie.overview),1),t("p",J,[t("span",O,a(new Date(e.currentMovie.release_date).getFullYear()||new Date(e.currentMovie.first_air_date).getFullYear())+",",1),(n(!0),r($,null,f(e.currentMovie.genres,(l,M)=>(n(),r("span",{key:l.id},[k(a(l.name)+" ",1),M<e.currentMovie.genres.length-1?(n(),r("span",P,",")):v("",!0)]))),128))]),h(i)]),t("div",Q,[t("img",{src:m(y)+e.currentMovie.backdrop_path,alt:""},null,8,W)]),t("div",X,[Z,t("div",ee,[h(o,{count:6,id:e.currentMovie.id,type:e.typeMT},null,8,["id","type"])])])])])):(n(),u(c,{key:1}))]),_:1})}}},ne={class:"main__recommend"},se={class:"container"},oe={class:"main__recommend-title"},ie={key:0,class:"main__content-list"},ae=["src"],ce={class:"main__content-title"},re={__name:"Recommend",props:["typeMT","recommend"],setup(e){return(s,d)=>{const i=_("router-link");return n(),r("div",ne,[t("div",se,[t("h2",oe,a(e.recommend.length>0?"\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438":"\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0439 \u043D\u0435\u0442"),1),e.recommend.length>0?(n(),r("div",ie,[(n(!0),r($,null,f(e.recommend,o=>(n(),u(i,{key:o.id,to:`/${e.typeMT}/${o.id}`,class:"main__content-item"},{default:g(()=>[t("img",{src:m(b)+o.backdrop_path,alt:"",loading:"lazy",class:"main__content-img"},null,8,ae),t("h2",ce,a(o.title||o.name),1)]),_:2},1032,["to"]))),128))])):v("",!0)])])}}},de=x({id:"recommend",state:()=>({url:"https://api.themoviedb.org/3",recomMovies:null,recomTvs:null}),actions:{async getRecom(e){let{type:s,id:d}=e;try{const o=(await I.get(`${this.url}/${s}/${d}/recommendations?api_key=${R}&language=ru-RU`)).data.results,c=[];o.forEach(l=>{c.length<4&&c.push(l)}),s=="movie"?this.recomMovies=c:this.recomTvs=c}catch(i){console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C",i)}}}}),le={class:"main__contentId"},ue={__name:"ContentId",props:["type"],setup(e){const s=e,d=j(),i=de(),o=w(),c=p(()=>s.type=="movie"?d.movie:d.tv),l=p(()=>s.type=="movie"?i.recomMovies:i.recomTvs);return B(()=>{setTimeout(()=>{d.getMedia({type:s.type,id:o.params.id}),i.getRecom({type:s.type,id:o.params.id})},500)}),(M,me)=>(n(),r("div",le,[h(te,{typeMT:s.type,currentMovie:m(c)},null,8,["typeMT","currentMovie"]),h(E,{currentMovie:m(c)},null,8,["currentMovie"]),m(l)?(n(),u(re,{key:0,typeMT:s.type,recommend:m(l)},null,8,["typeMT","recommend"])):v("",!0)]))}};export{ue as _};
