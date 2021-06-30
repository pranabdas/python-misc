(self.webpackChunkpython_tutorial=self.webpackChunkpython_tutorial||[]).push([[565],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,p=function(n,e){if(null==n)return{};var t,a,p={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(p[t]=n[t]);return p}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(p[t]=n[t])}return p}var l=a.createContext({}),o=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=o(n.components);return a.createElement(l.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(n,e){var t=n.components,p=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),f=o(t),u=p,m=f["".concat(l,".").concat(u)]||f[u]||h[u]||i;return t?a.createElement(m,r(r({ref:e},c),{},{components:t})):a.createElement(m,r({ref:e},c))}));function u(n,e){var t=arguments,p=e&&e.mdxType;if("string"==typeof n||p){var i=t.length,r=new Array(i);r[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:p,r[1]=s;for(var o=2;o<i;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3498:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return f}});var a=t(2122),p=t(9756),i=(t(7294),t(3905)),r=["components"],s={title:"3D spherical plots"},l=void 0,o={unversionedId:"matplotlib/3d-sph",id:"matplotlib/3d-sph",isDocsHomePage:!1,title:"3D spherical plots",description:"Plotting spherical harmonics in 3D wireframe:",source:"@site/docs/matplotlib/3d-sph.md",sourceDirName:"matplotlib",slug:"/matplotlib/3d-sph",permalink:"/python-tutorial/matplotlib/3d-sph",editUrl:"https://github.com/pranabdas/python-tutorial/blob/master/docs/matplotlib/3d-sph.md",version:"current",frontMatter:{title:"3D spherical plots"},sidebar:"docs",previous:{title:"Interactive plots",permalink:"/python-tutorial/matplotlib/interactive-plots"},next:{title:"3D volume plots",permalink:"/python-tutorial/matplotlib/3d-vol"}},c=[{value:"Wrapping an image onto a sphere",id:"wrapping-an-image-onto-a-sphere",children:[]}],h={toc:c};function f(n){var e=n.components,s=(0,p.Z)(n,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Plotting spherical harmonics in 3D wireframe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.special import sph_harm\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"] = 150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n# plt.style.use('dark_background')\n# plt.style.use('default')\n\nm, l = 0, 0\nphi = np.linspace(0, np.pi, 30)\ntheta = np.linspace(0, 2*np.pi, 45)\nphi, theta = np.meshgrid(phi, theta)\n\nr = sph_harm(m, l, theta, phi).real\nx = np.abs(r) * np.sin(phi) * np.cos(theta)\ny = np.abs(r) * np.sin(phi) * np.sin(theta)\nz = np.abs(r) * np.cos(phi)\n\nfig = plt.figure(figsize=(6, 6))\nax = plt.subplot(projection=\"3d\")\nax.plot_surface(x, y, z, color='aqua', edgecolor='k')\nplt.axis('off')\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"spherical harmonics",src:t(3691).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"m, l = 2, 3\nphi = np.linspace(0, np.pi, 100)\ntheta = np.linspace(0, 2*np.pi, 100)\nphi, theta = np.meshgrid(phi, theta)\n\nfunc = sph_harm(m, l, theta, phi).real\n\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nfig = plt.figure(figsize=(6, 6))\nax = plt.subplot(projection=\"3d\")\n\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"spherical harmonics",src:t(4912).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"m, l = 2, 3\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nfig = plt.figure(figsize=(12, 8))\nax = fig.add_subplot(2, 3, 6, projection='3d')\nax.set_title('l=3, m=2')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\n\nm, l = 1, 3\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nax = fig.add_subplot(2, 3, 5, projection='3d')\nax.set_title('l=3, m=1')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\n\nm, l = 0, 3\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nax = fig.add_subplot(2, 3, 4, projection='3d')\nax.set_title('l=3, m=0')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\n\n\nm, l = 1, 2\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nax = fig.add_subplot(2, 3, 3, projection='3d')\nax.set_title('l=2, m=1')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\n\nm, l = 0, 2\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nax = fig.add_subplot(2, 3, 2, projection='3d')\nax.set_title('l=2, m=0')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\n\nm, l = 0, 1\nfunc = sph_harm(m, l, theta, phi).real\nx = np.abs(func) * np.sin(phi) * np.cos(theta)\ny = np.abs(func) * np.sin(phi) * np.sin(theta)\nz = np.abs(func) * np.cos(phi)\n\nax = fig.add_subplot(2, 3, 1, projection='3d')\nax.set_title('l=1, m=0')\nsurf = ax.plot_surface(x, y, z, rstride=2, cstride=2, color='white',\n                       shade=False, edgecolor='k')\nplt.axis('off')\nplt.tight_layout()\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"spherical harmonics",src:t(8477).Z})),(0,i.kt)("h3",{id:"wrapping-an-image-onto-a-sphere"},"Wrapping an image onto a sphere"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport matplotlib.image as image\nimport matplotlib.pyplot as plt\nimport matplotlib.cm as cm\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"] = 150\nplt.style.use('dark_background')\n# plt.style.use('default')\n\nearth = image.imread('../datafiles/earth_texture2048x1024.png')\nxp, yp, __ = earth.shape\n\nx = np.arange(0, xp, 1)\ny = np.arange(0, yp, 1)\nY, X = np.meshgrid(y, x)\n\nphi = np.linspace(0, 2 * np.pi, yp)\ntheta = np.linspace(0, np.pi, xp)\nphigrid, thetagrid = np.meshgrid(phi, theta)\n\nx = np.sin(thetagrid) * np.cos(phigrid)\ny = np.sin(thetagrid) * np.sin(phigrid)\nz = np.cos(thetagrid)\n\nfig = plt.figure(figsize=(12,12))\nax = plt.subplot(projection='3d')\nax.dist=20\nax.view_init(elev=10, azim=60)\n\nax.plot_surface(x, y, z, facecolors=earth,\n                rstride=4, cstride=4,\n                antialiased=True, shade=False)\n\nax.set_xlim3d([-1.25, 1.25])\nax.set_ylim3d([-1.25, 1.25])\nplt.axis('off')\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D earth",src:t(1743).Z})),(0,i.kt)("p",null,"Making series of images with different rotation view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(12,12))\nax = fig.gca(projection='3d')\nax.dist=20\n\nfor azim in range(0, 360, 5):\n    fig = plt.figure()\n    ax = fig.gca(projection='3d')\n    ax.plot_surface(x, y, z, facecolors=earth,\n                rstride=4, cstride=4,\n                antialiased=False, shade=False)\n\n    ax.view_init(elev=10, azim=azim)\n\n    filename = 'temp/earth'+ \"{0:0=3d}\".format(azim) + '.png'\n    plt.axis('off')\n    plt.savefig(filename, dpi=300, bbox_inches='tight', pad_inches=0)\n    ax.set_xlim3d([-1.25, 1.25])\n    ax.set_ylim3d([-1.25, 1.25])\n    plt.gca()\n    plt.clf()\n")),(0,i.kt)("p",null,"Making a gif from multiple images:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from PIL import Image\nimport glob\n\n# Create the frames\nframes = []\nimgs = glob.glob(\"temp/*.png\")\nfor i in imgs:\n    new_frame = Image.open(i)\n    frames.append(new_frame)\n\nframes[0].save('earth.gif', format='GIF',\n               append_images=frames[1:],\n               save_all=True,\n               duration=300, loop=0)\n")))}f.isMDXComponent=!0},1743:function(n,e,t){"use strict";e.Z=t.p+"assets/images/3d-earth-435f8999c77d1ec6221c6b7cc33b41ea.png"},4912:function(n,e,t){"use strict";e.Z=t.p+"assets/images/3d-sph-harm-2-c429cd9a0d891d200cf4b762004d036c.png"},8477:function(n,e,t){"use strict";e.Z=t.p+"assets/images/3d-sph-harm-3-e82f41831d81885941512d943d37f561.png"},3691:function(n,e,t){"use strict";e.Z=t.p+"assets/images/3d-sph-harm-3772013074026110a5af9371c0c1ba60.png"}}]);