(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[463],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,p=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),m=i(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||s[f]||p;return n?r.createElement(y,l(l({ref:e},u),{},{components:n})):r.createElement(y,l({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var p=n.length,l=new Array(p);l[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7906:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),p=(n(7294),n(3905)),l=["components"],a={title:"Contour plot"},c=void 0,i={unversionedId:"matplotlib/contour-plot",id:"matplotlib/contour-plot",isDocsHomePage:!1,title:"Contour plot",description:"`python",source:"@site/docs/matplotlib/contour-plot.md",sourceDirName:"matplotlib",slug:"/matplotlib/contour-plot",permalink:"/python-tutorial/matplotlib/contour-plot",editUrl:"https://github.com/pranabdas/python-tutorial/blob/master/docs/matplotlib/contour-plot.md",version:"current",frontMatter:{title:"Contour plot"},sidebar:"docs",previous:{title:"Histogram",permalink:"/python-tutorial/matplotlib/histogram"},next:{title:"Image plot",permalink:"/python-tutorial/matplotlib/image-plot"}},u=[],s={toc:u};function m(t){var e=t.components,a=(0,o.Z)(t,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\nx = np.linspace(0, 5, 100)\ny = np.linspace(0, 5, 100)\nX,Y = np.meshgrid(x, y)\n\n# Define some function\nZ = np.sin(X) ** 2 + np.cos(5 + X * Y)\n\nplt.contour(X, Y, Z)\nplt.show()\n')),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"contour-plot",src:n(13).Z})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"plt.contour(X, Y, Z, 10, cmap='RdGy')\nplt.show()\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"contour-plot",src:n(6731).Z})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"plt.contourf(X, Y, Z, 20, cmap='RdGy')\nplt.colorbar()\nplt.show()\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"contour-plot",src:n(1576).Z})))}m.isMDXComponent=!0},13:function(t,e,n){"use strict";e.Z=n.p+"assets/images/contour-plot-1-67a874f430b88a3f24fc80d37583058e.png"},6731:function(t,e,n){"use strict";e.Z=n.p+"assets/images/contour-plot-2-5f68de09b56685c54b32ef565028108f.png"},1576:function(t,e,n){"use strict";e.Z=n.p+"assets/images/contour-plot-3-55b796101ab057288922f13774d48cbb.png"}}]);