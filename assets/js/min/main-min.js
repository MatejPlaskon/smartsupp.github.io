function scrollFunction(){document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("btt").style.display="block":document.getElementById("btt").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}if(document.body.classList.contains("docs"))for(var headings=document.querySelectorAll("h1,h2,h3,h4"),i=0;i<headings.length;i++){var el=headings[i];el.insertAdjacentHTML("beforeend",'<a href="#'+el.id+'">#</a>')}window.onscroll=function(){scrollFunction()};