(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[66],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),f=l(n),m=i,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(y,o(o({ref:e},u),{},{components:n})):r.createElement(y,o({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},448:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],p={title:"Curve fitting"},c=void 0,l={unversionedId:"scipy/curve-fitting",id:"scipy/curve-fitting",isDocsHomePage:!1,title:"Curve fitting",description:"`python",source:"@site/docs/scipy/curve-fitting.md",sourceDirName:"scipy",slug:"/scipy/curve-fitting",permalink:"/python-tutorial/scipy/curve-fitting",editUrl:"https://github.com/pranabdas/python-tutorial/blob/master/docs/scipy/curve-fitting.md",version:"current",frontMatter:{title:"Curve fitting"},sidebar:"docs",previous:{title:"Integration",permalink:"/python-tutorial/scipy/integration"},next:{title:"Convolution",permalink:"/python-tutorial/scipy/convolution"}},u=[],s={toc:u};function f(t){var e=t.components,p=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport matplotlib.pyplot as plt\n%matplotlib inline\nplt.rcParams["figure.dpi"]=150\nplt.rcParams["figure.facecolor"]="white"\n\n# Generate our data\nx = np.linspace(0, 5, num=100)\ny = 2.5 * np.exp(0.5 * x) + np.random.rand(100)\n\n# plot our data\nplt.plot(x, y, \'.\')\nplt.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"original-data-plot",src:n(233).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Input:"',title:'"Input:"'},"from scipy import optimize\n\ndef fit_func(x, a, b):\n    return a * np.exp(b * x)\n\nparams, params_covariance = optimize.curve_fit(fit_func, x, y, p0=[1, 1])\n\nprint(params)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Output:"',title:'"Output:"'},"[2.77004013 0.48224117]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# plot both data and fit function\nplt.plot(x, y, 'o', markersize='4', label='Data')\nplt.plot(x, fit_func(x, params[0], params[1]), c = 'r', label='Fit')\nplt.legend(frameon=False, loc=\"upper center\")\nplt.show()\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"curve-fit",src:n(9957).Z})))}f.isMDXComponent=!0},233:function(t,e,n){"use strict";e.Z=n.p+"assets/images/scipy-curve-fit-data-6309ed78efb92dc8323c3935d0ed789b.png"},9957:function(t,e,n){"use strict";e.Z=n.p+"assets/images/scipy-curve-fit-9ae89c32a6b46df884c0f8ba2176767b.png"}}]);