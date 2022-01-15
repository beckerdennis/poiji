"use strict";(self.webpackChunkpoiji_documentation=self.webpackChunkpoiji_documentation||[]).push([[364],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:14},l="Custom Formating",c={unversionedId:"features/Custom Formatting",id:"features/Custom Formatting",title:"Custom Formating",description:"You can create your own formatting implementation without relying on the default Poiji formatting configuration using the Formatting interface.",source:"@site/docs/features/Custom Formatting.md",sourceDirName:"features",slug:"/features/Custom Formatting",permalink:"/poiji/docs/features/Custom Formatting",editUrl:"https://github.com/ozlerhakan/poiji-documentation/edit/main/docs/features/Custom Formatting.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Display Cells",permalink:"/poiji/docs/features/Disable Cells Formats"},next:{title:"Poi Sheet Object",permalink:"/poiji/docs/features/Use Poi Sheet"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-formating"},"Custom Formating"),(0,i.kt)("p",null,"You can create your own formatting implementation without relying on the default Poiji formatting configuration using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Formatting")," interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class MyFormatting implements Formatting {\n    @Override\n    public String transform(PoijiOptions options, String value) {\n        return value.toUpperCase().trim(); <1>\n    }\n}\n\npublic class Person {\n\n    @ExcelCellName("ID")\n    protected String employeeId;\n\n    @ExcelCellName("NAME")\n    protected String name;\n\n    @ExcelCellName("SURNAME")\n    protected String surname;\n\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Suppose that all the header names of an excel file have different formatting. Using custom formatting, we are able to look at headers with a custom format. All the headers will be uppercase and don't have white spaces before and after.")),(0,i.kt)("p",null,"Then you can add your custom implementation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"withFormatting")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"PoijiOptions options = PoijiOptions.PoijiOptionsBuilder.settings()\n                .withFormatting(new MyFormatting())\n                .build();\nList<Person> people = Poiji.fromExcel(excel, Person.class, options);\n")))}m.isMDXComponent=!0}}]);