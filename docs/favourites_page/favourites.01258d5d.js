function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire0dda;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire0dda=o),o.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"8KcgT":"favourites.01258d5d.js","11Lkf":"heart_red.cdb1f07e.png","eBKIm":"heart.4cc18b58.png"}'));new URL("../"+o("27Lyk").resolve("11Lkf"),import.meta.url).toString();new URL("../"+o("27Lyk").resolve("eBKIm"),import.meta.url).toString();let i=localStorage.getItem("welcomeemail"),a=JSON.parse(localStorage.getItem("useremails")||"[]"),l=JSON.parse(localStorage.getItem("usernames")||"[]"),s=a.indexOf(i),c=document.querySelector("h1"),d=document.querySelector(".result__container"),u=localStorage.getItem("favorites"),f=[],m=[];async function p(){try{if(0==f.length)document.querySelector("h2").textContent="No favourites";else for(let e of f){let t=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`;const r=await fetch(t),n=await r.json();m.push(n.meals[0])}}catch(e){console.error("Error:",e)}finally{!function(e){let t="";d.innerHTML="";for(let r=0;r<e.length;r++)t+=`\n                <div class="result__item">\n                <a href='../recipe_page/recipe.html?id=${e[r].idMeal}'><img src="${e[r].strMealThumb}" alt="${e[r].strMeal}"></a>\n                    <div class="item__details">\n                        <div class="details">\n                            <h2 class="item-name">${e[r].strMeal}</h2>\n                            <h3 class="item-area">${e[r].strArea}</h3>\n                        </div>\n                        \n                        <button class="view-button" onclick="window.location.href = '../recipe_page/recipe.html?id=${e[r].idMeal}'">View recipe</button>\n                    </div>            \n                </div>`;d.innerHTML=t}(m)}}document.addEventListener("DOMContentLoaded",(function(){!function(){i&&""!=i?(c.textContent=`Welcome, ${l[s]}`,c.classList.add("welcome-msg"),u?u=JSON.parse(u):(u=[{email:i,favRecipes:[]}],document.querySelector("h2").textContent="No favourites")):document.querySelector("h2").textContent="You need to register or sign in";let e=u.findIndex((e=>e.email===i));e>-1&&(f=u[e].favRecipes.slice())}(),p()}));
//# sourceMappingURL=favourites.01258d5d.js.map
