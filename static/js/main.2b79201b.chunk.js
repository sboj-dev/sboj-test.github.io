(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),i=(t(93),t(19)),c=(t(73),t(25)),s=t(22),m=t(39),u=t(3),p=t(35),d=t(135),h=t(138),g=t(129),E=t(139),b=t(140),f=t(23),y=t(133),v=t(117),w="#956EDC",j="#FFFFFF";var A=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(p.a,{direction:"row",gap:"small"},r.a.createElement(y.a,{src:e.recruiter.profile_picture,size:"large"}),r.a.createElement("div",null,r.a.createElement("div",null,e.recruiter.name),r.a.createElement("div",{style:{fontWeight:"bold",fontSize:14,color:"#7D7D7D"}},e.recruiter.title," @ ",e.recruiter.organization),r.a.createElement("div",null,Object(f.a)(Array(e.recruiter.rating)).map((function(e){return r.a.createElement(v.a,{color:"#7D7D7D",size:"small"})}))))))},k=t(134),x=t(86);var S=function(e){return r.a.createElement("div",{style:{backgroundColor:w,border:"none",color:j,margin:4,padding:"4px 8px",textAlign:"center",textDecoration:"none",display:"inline-block",borderRadius:"16px",fontSize:"12px"}},e.label)};var B=function(e){return r.a.createElement("a",{style:{color:"#08CAA1",textDecoration:"none"},href:e.href,target:"_blank",rel:"noopener noreferrer"},e.href)};var O=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"WEBSITE"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(B,{href:e.website})),r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"TECH STACK"),r.a.createElement(p.a,{align:"center",direction:"row"},e.techStack&&e.techStack.map((function(e){return r.a.createElement(S,{label:e})}))),r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"LOCATION"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(x.a,null,e.location)))},C=t(118),F=t(119),T=t(120);var P=function(e){return r.a.createElement(p.a,{fill:"horizontal",background:"#FFFFFF",gridArea:"side",pad:"small",margin:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"SOCIAL"),r.a.createElement(p.a,{pad:"none",direction:"row"},r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(C.a,{color:"#006699"}),href:e.social.linkedin,target:"_blank"})),r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(F.a,{color:"#03A9F3"}),href:e.social.twitter,target:"_blank"})),r.a.createElement(p.a,{pad:"small"},r.a.createElement(d.a,{plain:!0,icon:r.a.createElement(T.a,{color:"#FF0700"}),href:e.social.instagram,target:"_blank"}))),r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"POSTED"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(x.a,null,"New - 2 hours ago")),r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"EMPLOYMENT"),r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(x.a,null,"Permanent")))},z=t(121);var R=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},e.description,r.a.createElement("h3",{style:{marginBottom:8}},"Job Responsibilities:"),e.responsibilities.map((function(e){return r.a.createElement("div",null,""!==e&&r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(z.a,{color:"#08CAA1",size:"small",style:{marginTop:4}}),r.a.createElement("div",{style:{marginLeft:4,lineHeight:1}},e)))})),r.a.createElement("h3",{style:{marginBottom:8}},"Required Experience:"),e.experiences.map((function(e){return r.a.createElement("div",null,""!==e&&r.a.createElement(p.a,{pad:"small",direction:"row"},r.a.createElement(z.a,{color:"#08CAA1",size:"small",style:{marginTop:4}}),r.a.createElement("div",{style:{marginLeft:4,lineHeight:1}},e)))})),e.businessTravel&&"0"!==e.businessTravel&&r.a.createElement("h3",null," Business Travel: ",e.businessTravel,"%"))};var W=function(e){return"GBP"===e.currency?r.a.createElement("span",null,"\xa3"):"USD"===e.currency?r.a.createElement("span",null,"$"):"EUR"===e.currency?r.a.createElement("span",null,"\u20ac"):r.a.createElement("span",null)};var D=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"SALARY"),r.a.createElement(p.a,{direction:"row"},r.a.createElement(W,{currency:e.benefits.salary.currency}),e.benefits.salary.min," - ",r.a.createElement(W,{currency:e.benefits.salary.currency}),e.benefits.salary.max," + ",r.a.createElement(W,{currency:e.benefits.salary.currency}),e.benefits.bonus," bonus")),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"REMOTE WORKING"),e.benefits.remoteWorking),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"BONUS STRUCTURE"),Object.entries(e.benefits.bonusStructure).map((function(e){var a=Object(u.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,n,"% ",t)}))),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"HOLIDAY"),e.benefits.holiday),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"EQUITY"),e.benefits.equity),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"PRIVATE HEALTH CARE"),e.benefits.healthcare),r.a.createElement(p.a,{pad:"small"},r.a.createElement(k.a,{size:"18px",margin:"none",color:"#BABABA"},"OTHER BENEFITS"),e.benefits.other.map((function(e){return r.a.createElement("div",null,e)}))))},M=t(136),H=t(137);var q=function(e){return r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(M.a,{anchor:"bottom-left"},r.a.createElement(p.a,{height:"medium"},r.a.createElement(H.a,{fit:"cover",src:e.company.cover_picture,margin:"medium"})),r.a.createElement(M.a,{anchor:"center"},r.a.createElement(y.a,{background:j,size:"xlarge",style:{border:"1px solid #fff"}}),r.a.createElement(y.a,{src:e.company.profile_picture,size:"large",style:{border:"2px solid #fff"}}))),r.a.createElement("h3",null,e.company.elevatorPitch),r.a.createElement("p",null,e.company.info))},_=t(1),J=t(45),L={global:{colors:{brand:"#08CAA1","accent-1":w,text:{light:"#444444"}},font:{family:"Source Sans Pro"}},button:{color:j}},N=function(e){return console.log(Object(i.a)({},L,{},e)),Object(i.a)({},J.grommet,{},L,{},e)};function I(){var e=Object(m.a)(["\n      font-weight: bold;\n      width: 200px;\n    "]);return I=function(){return e},e}var Y=["Jadon Kaufman","Ellesse Bravo","Claudia Sheldon","Kelsi Huffman","Jamelia Arroyo","Armaan Barr","Arielle Zavala","Ronny Talley","Federico Hooper","Beverly O'Reilly"],U=["https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70","https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png","https://www.suelaceyphotography.com/v/p/QDTKd4AO9ofE9HwbZ5v5anz7-business-profile-shots-img-0241-1582334654.jpg","https://i.insider.com/5899ffcf6e09a897008b5c04?width=600&format=jpeg&auto=webp","https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg","https://cathleo.com.au/wp-content/uploads/2016/03/Profiles-UnisA-5.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsBvTHtysWxzGWd0e3yTig65uzlDf1ZsBUKoDhB-w7nkyVyOV9&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwNvj0HEnOYsY5Ny0qcuf1BDJXOEQnMEqHsHQC4ocbMR6FSwpP&usqp=CAU","https://ocbj.media.clients.ellingtoncms.com/img/photos/2011/06/03/SR_Profile_Ken_Sullivan_6-6_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d","https://www.joscottimages.co.uk/_webedit/cached-images/263-0-0-893-10000-7451-612.jpg"];function K(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e}var Q=function(e){Object(s.e)().id,fetch("https://qi827wd4q4.execute-api.eu-west-1.amazonaws.com/api/sboj-job-function").then((function(e){return e.json()})).then((function(e){console.log(e)}));var a=r.a.useState(),t=Object(u.a)(a,2),n=t[0],l=t[1],o={tab:{active:{color:"dark-1"},color:"accent-1",border:{color:"accent-1"},size:"250px",extend:function(e){e.theme;return Object(_.css)(I())}},tabs:{gap:"medium"}},i=Y[Math.floor(Math.random()*Y.length)],c=U[Math.floor(Math.random()*U.length)];e.job||((e={}).job={company:{name:"London Tech",website:"http://www.LonTec.com",location:"London, UK",techStack:["Python","Java","Django"],elevatorPitch:"At London Tech, we solve the most complex problems with the most updated solutions.",info:"Since 2010, London Tech, has been consulting with some of the most well known and forward thinking companies in the world. We have built a reputation for delivering complex solution in the simplest and most effective ways to make to that any technical problem is completely solved.",size:"+100",founded:"2010",profile_picture:"https://i.imgur.com/rK5Jkkc.jpg",cover_picture:"https://i.imgur.com/pazVpu2.jpg",socialMedia:{linkedin:"https://www.linkedin.com/company/sboj-io/",twitter:"https://twitter.com/CrosstownDough",instagram:"https://www.instagram.com/crosstowndoughnuts"}},recruiter:{name:i,title:"Head of Recruiting",organization:"Sboj.io",rating:K(1,5),profile_picture:c},benefits:{salary:{currency:"GBP",min:"40,000",max:"50,000"},remoteWorking:"Yes",bonus:"5,000",bonusStructure:{"Company performance":50,"Personal performance":50},holiday:28,equity:"No",healthcare:"Vitality - Full Memebership",other:["Health Care (Private)","Free Fruit and Coffee","Travel loan","Quarterly company parties","Gym Membership"]},position:"Inhouse SAP ABAP Developer",description:"A global end user in the Consulting industry is seeking a talented and professional ABAP developer for their HQ in the Cologne Area.",responsibilities:["Software development in the SAP ERP environment with the aid of all available development environments","Customisation of the functional SAP modules FI/CO","Interface programming and form design with SAP Script / Smartforms","Ensuring stability and availability of the SAP environment including the interfaces through standardised change and test management","Provide 1st and 2nd level support"],experiences:["2-5 Years Cross-Module customisation Ideally with in FI/CO","Excellent understanding of ABAP and ABAP OO as well as project management knowledge","Able to work independently ","A hunger to grow and learn newer technologies","Conversational German and Fluent English"],employment:"Permanent",businessTravel:"0"});var m=r.a.useState(!1),f=Object(u.a)(m,2),y=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement(p.a,{direction:"row",height:"auto"},r.a.createElement(p.a,{fill:!0,size:"large"},r.a.createElement("div",null,r.a.createElement("h1",null,e.job.position),r.a.createElement("h2",{style:{color:"#BABABA",marginBottom:0}},e.job.company.name))),r.a.createElement(p.a,{fill:!0,align:"end"},!e.hideApplyButton&&r.a.createElement(p.a,{width:"medium",pad:{top:"large",right:"large"}},!y&&r.a.createElement(d.a,{primary:!0,size:"large",label:"Apply",onClick:function(){v(!0)}}),y&&r.a.createElement(d.a,{primary:!0,size:"large",label:"Applied",onClick:function(){}})))),r.a.createElement(h.a,{rows:["auto","flex"],columns:[["auto","800px"],["350px","350px"]],areas:[{name:"header",start:[0,0],end:[1,0]},{name:"main",start:[0,1],end:[0,1]},{name:"side",start:[1,1],end:[1,1]}]},r.a.createElement(p.a,{gridArea:"header",direction:"row",align:"center",justify:"between",pad:{horizontal:"small",vertical:"small"}}),r.a.createElement(g.a,{theme:N(o)},r.a.createElement(E.a,{activeIndex:n,onActive:function(e){return l(e)},justify:"left"},r.a.createElement(b.a,{title:"The Job"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(R,{description:e.job.description,responsibilities:e.job.responsibilities,experiences:e.job.experiences,businessTravel:e.job.businessTravel}))),r.a.createElement(b.a,{title:"The Benefits"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(D,{benefits:e.job.benefits}))),r.a.createElement(b.a,{title:"The Company"},r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(q,{company:e.job.company}))))),r.a.createElement(p.a,{fill:!0,gridArea:"side",justify:"top",align:"center",pad:{horizontal:"medium",vertical:"none"},margin:{top:"38px"}},r.a.createElement(A,{recruiter:e.job.recruiter}),r.a.createElement(O,{website:e.job.company.website,techStack:e.job.company.techStack,location:e.job.company.location}),r.a.createElement(P,{social:e.job.company.socialMedia}))))},V=t(123),G=[{name:"Awesome job one",to:"/job/abc",profile_picture:"https://sboj.io/static/icons/apple-icon-152x152.png"},{name:"Awesome job two",to:"/job/cde",profile_picture:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0008/9493/brand.gif?itok=690RQQCd"},{name:"Awesome job three",to:"/job/xyz",profile_picture:"https://lh3.googleusercontent.com/proxy/AoCp1qwP0kcqdtZDLob4-Wqg9SyWxsEiPsc2YHBOoJUw1TxMJZgR3HaNVwujbDi-lsWF9wQu2J1naLQQ3GoQO6TMdvPf8saMukMb"}];var Z=function(){return r.a.createElement(p.a,{gridArea:"main"},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement("h1",null,"Jobs"),r.a.createElement(V.a,{data:G,pad:"medium"},(function(e,a){return r.a.createElement(p.a,{key:a,direction:"row-responsive",gap:"large",size:"xsmall",align:"center"},r.a.createElement(c.b,{to:e.to},r.a.createElement(p.a,{direction:"row",gap:"small",justify:"center"},r.a.createElement(y.a,{src:e.profile_picture,size:"large"}),r.a.createElement(x.a,{weight:"bold"},e.name))))}))))},$=t(84),X=t(141),ee=t(142),ae=t(143),te=t(124);var ne=function(e){return r.a.createElement("div",{style:{backgroundColor:w,border:"none",color:j,margin:4,padding:"4px 8px",textAlign:"center",textDecoration:"none",display:"inline-block",borderRadius:"16px",fontSize:"12px"}},r.a.createElement(p.a,{direction:"row"},e.label," ",r.a.createElement(te.a,{pad:{left:"large"},color:j,onClick:e.onClick})))};var re=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Position"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(X.a,{value:e.position,onChange:function(a){return e.setPosition(a.target.value)},placeholder:"Java developer"})),r.a.createElement("h3",null,"Tech Stack"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(X.a,{value:l,onChange:function(e){return o(e.target.value)},onKeyPress:function(a){if("Enter"===a.key){var t=Object(f.a)(e.techStack);t.push(l),e.setTechStack(t),o("")}},placeholder:"Type a technology"})),r.a.createElement("div",{hidden:!0},"Smart suggestions based on other positions like yours",r.a.createElement("br",null),r.a.createElement(S,{label:"Java"}),r.a.createElement(S,{label:"Spring Framework"}),r.a.createElement(S,{label:"Postgres"}),r.a.createElement("br",null)),e.techStack&&e.techStack.map((function(a,t){return r.a.createElement(ne,{label:a,onClick:(n=t,function(a){var t=Object(f.a)(e.techStack);t.splice(n,1),e.setTechStack(t)})});var n})),r.a.createElement("h3",null,"Employment Type"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Permanent",name:"employmentType",value:"permanent",checked:"permanent"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Freelance",name:"employmentType",value:"freelance",checked:"freelance"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Part-time",name:"employmentType",value:"parttime",checked:"parttime"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Internship",name:"employmentType",value:"internship",checked:"internship"===e.employmentType,onChange:function(a){return e.setEmploymentType(a.target.value)}}))),r.a.createElement("h3",null,"Holiday"),r.a.createElement(p.a,{direction:"row",align:"center"},r.a.createElement(p.a,{width:"xxsmall"},r.a.createElement(ae.a,{mask:[{regexp:/^[0-9]{1,2}$/,placeholder:"28"}],value:e.holiday,onChange:function(a){return e.setHoliday(a.target.value)}})),r.a.createElement(p.a,{margin:{left:"8px"}},"Days")),r.a.createElement("h3",null,"Remote Working"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Fully",name:"remote",value:"fully",checked:"fully"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Mostly",name:"remote",value:"mostly",checked:"mostly"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Once a week",name:"remote",value:"once",checked:"once"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"When needed",name:"remote",value:"when",checked:"when"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Very rarely",name:"remote",value:"rarely",checked:"rarely"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"None",name:"remote",value:"none",checked:"none"===e.remoteWorking,onChange:function(a){return e.setRemoteWorking(a.target.value)}}))),r.a.createElement("h3",null,"Business Travel"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"100%",name:"businessTravel",value:"100",checked:"100"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"75%",name:"businessTravel",value:"75",checked:"75"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"50%",name:"businessTravel",value:"50",checked:"50"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"25%",name:"businessTravel",value:"25",checked:"25"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"None",name:"businessTravel",value:"0",checked:"0"===e.businessTravel,onChange:function(a){return e.setBusinessTravel(a.target.value)}}))))},le=t(131),oe=t(128),ie=t(144);var ce=function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],d=s[1],h=function(a){return function(t){var n=Object(i.a)({},e.bonusStructure);n[a]=t.target.value,e.setBonusStructure(n)}};return r.a.createElement("div",null,r.a.createElement("h3",null,"Salary"),r.a.createElement(p.a,{width:"small"},r.a.createElement(le.a,{label:r.a.createElement("div",{style:{fontWeight:"bold",color:"#BABABA"}},"Currency")},r.a.createElement(oe.a,{options:["GBP","EUR","USD"],value:e.currency,onChange:function(a){var t=a.option;return e.setCurrency(t)},placeholder:"Currency"}))),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{width:"small"},r.a.createElement(le.a,{label:r.a.createElement("div",{style:{fontWeight:"bold",color:"#BABABA"}},"From")},r.a.createElement(ae.a,{mask:[{regexp:/^[0-9]{1,7}$/,placeholder:"50000"}],value:e.minSalary,onChange:function(a){return e.setMinSalary(a.target.value)}}))),r.a.createElement("div",{style:{width:20,border:"solid 1px #BABABA",margin:10}}),r.a.createElement(p.a,{width:"small"},r.a.createElement(le.a,{label:r.a.createElement("div",{style:{fontWeight:"bold",color:"#BABABA"}},"To")},r.a.createElement(ae.a,{mask:[{regexp:/^[0-9]{1,7}$/,placeholder:"60000"}],value:e.maxSalary,onChange:function(a){return e.setMaxSalary(a.target.value)}})))),r.a.createElement("h3",null,"Bonus"),r.a.createElement(p.a,{width:"small"},r.a.createElement(X.a,{value:e.bonus,onChange:function(a){return e.setBonus(a.target.value)},placeholder:""})),r.a.createElement(p.a,{width:"medium"},r.a.createElement(le.a,{label:r.a.createElement("div",{style:{fontWeight:"bold",color:"#BABABA"}},"How is it achieved?")},r.a.createElement(X.a,{value:m,onChange:function(e){return d(e.target.value)},onKeyPress:function(a){if("Enter"===a.key){var t=Object(i.a)({},e.bonusStructure);t[a.target.value]=50,e.setBonusStructure(t),d("")}},dropProps:{height:"small"},placeholder:"Personal Performance, Stocks..."}))),e.bonusStructure&&Object.entries(e.bonusStructure).map((function(a){var t,n=Object(u.a)(a,2),l=n[0],o=n[1];return r.a.createElement(p.a,{direction:"row",margin:"small"},r.a.createElement("div",{style:{width:150,textAlign:"center",backgroundColor:w,color:j}},l),r.a.createElement(te.a,{pad:{left:"large"},style:{cursor:"pointer"},color:"red",onClick:(t=l,function(a){var n=Object(i.a)({},e.bonusStructure);delete n[t],e.setBonusStructure(n)})}),r.a.createElement(p.a,{size:"small",margin:{left:"small",right:"small"}},r.a.createElement(ie.a,{value:o,onChange:h(l)})),r.a.createElement("div",null,o,"%"))})),r.a.createElement("h3",null,"Equity"),r.a.createElement(p.a,{align:"center",direction:"row"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"Yes",name:"equity",value:"true",checked:"true"===e.equity,onChange:function(a){return e.setEquity(a.target.value)}})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(ee.a,{label:"No",name:"equity",value:"false",checked:"false"===e.equity,onChange:function(a){return e.setEquity(a.target.value)}}))),r.a.createElement("h3",null,"Healthcare"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(oe.a,{options:["None","Vitality - Basic Membership","Vitality - Premium Membership","BUPA Cover","Other"],value:e.healthcare,onChange:function(a){var t=a.option;return e.setHealthcare(t)},placeholder:"Currency"})),r.a.createElement("h3",null,"Other Benefits"),r.a.createElement(p.a,{width:"medium"},r.a.createElement(X.a,{value:l,onChange:function(e){return o(e.target.value)},onSelect:function(a){var t=Object(f.a)(e.otherBenefits);t.push(a.suggestion),e.setOtherBenefits(t),o("")},onKeyPress:function(a){if("Enter"===a.key){var t=Object(f.a)(e.otherBenefits);t.push(l),e.setOtherBenefits(t),o("")}},suggestions:se,dropProps:{height:"small"},placeholder:"Personal Performance, Stocks..."})),e.otherBenefits&&e.otherBenefits.map((function(e){return r.a.createElement("p",null,e)})))},se=["Free Fruit","Free Coffee drinks","Discounted meals","Dental care plans","Free travel","Subsided travel","Travel Loan","Free company events","Childcare vouchers","Flexible working hours","Gym Membership","Yearly Company Holiday","Xmas Food hamper","Cycle Scheme","Shopping Vouchers","Personal Loans","Course Allowance","Car Allowance"],me=t(145);var ue=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Description"),r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(me.a,{placeholder:"Describe a little about the project your company/client is going through. Be concise. You only have 80 words!",value:e.description,onChange:function(a){a.target.value.length<=500&&e.setDescription(a.target.value)},resize:!1})),e.description.length," / 500"),r.a.createElement("h3",null,"Job Responsibilities"),"You can have up to five",r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.responsibility1,onChange:function(a){return e.setResponsibility1(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.responsibility2,onChange:function(a){return e.setResponsibility2(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.responsibility3,onChange:function(a){return e.setResponsibility3(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.responsibility4,onChange:function(a){return e.setResponsibility4(a.target.value)},placeholder:"Type job responsibility here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.responsibility5,onChange:function(a){return e.setResponsibility5(a.target.value)},placeholder:"Type job responsibility here"}))),r.a.createElement("h3",null,"Required Experience"),"You can have up to five",r.a.createElement(p.a,{width:"xlarge"},r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.experience1,onChange:function(a){return e.setExperience1(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.experience2,onChange:function(a){return e.setExperience2(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.experience3,onChange:function(a){return e.setExperience3(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.experience4,onChange:function(a){return e.setExperience4(a.target.value)},placeholder:"Type previous experience here"})),r.a.createElement(p.a,{margin:"small"},r.a.createElement(X.a,{value:e.experience5,onChange:function(a){return e.setExperience5(a.target.value)},placeholder:"Type previous experience here"}))))},pe=t(132),de=t(126),he=t(127),ge=t(125);var Ee=function(e){return r.a.createElement(g.a,{theme:N({button:{color:"brand"}})},r.a.createElement(d.a,{label:"Back",icon:r.a.createElement(ge.a,{color:"brand"}),onClick:e.onClick}))};function be(){var e=Object(m.a)(["\n      font-weight: bold;\n    "]);return be=function(){return e},e}function fe(e){return!e||0===e.length}var ye=function(e){e.checked,Object($.a)(e,["checked"]);var a=r.a.useState(),t=Object(u.a)(a,2),l=t[0],o=t[1],i={tab:{active:{color:"dark-1"},color:"accent-1",border:{color:"accent-1"},size:"250px",extend:function(e){e.theme;return Object(_.css)(be())}},tabs:{gap:"medium"}},c=Object(n.useState)(""),s=Object(u.a)(c,2),m=s[0],h=s[1],f=Object(n.useState)([]),y=Object(u.a)(f,2),v=y[0],w=y[1],A=Object(n.useState)(),k=Object(u.a)(A,2),x=k[0],S=k[1],B=Object(n.useState)(),O=Object(u.a)(B,2),C=O[0],F=O[1],T=Object(n.useState)(),P=Object(u.a)(T,2),z=P[0],R=P[1],W=Object(n.useState)(),D=Object(u.a)(W,2),M=D[0],q=D[1],J=function(){return!fe(m)&&!fe(v)&&!fe(x)&&!fe(C)&&!fe(z)&&!fe(M)},L=Object(n.useState)(""),I=Object(u.a)(L,2),Y=I[0],U=I[1],K=Object(n.useState)(""),V=Object(u.a)(K,2),G=V[0],Z=V[1],X=Object(n.useState)(""),ee=Object(u.a)(X,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(""),le=Object(u.a)(ne,2),oe=le[0],ie=le[1],se=Object(n.useState)({}),me=Object(u.a)(se,2),ge=me[0],ye=me[1],we=Object(n.useState)(),je=Object(u.a)(we,2),Ae=je[0],ke=je[1],xe=Object(n.useState)("None"),Se=Object(u.a)(xe,2),Be=Se[0],Oe=Se[1],Ce=Object(n.useState)([]),Fe=Object(u.a)(Ce,2),Te=Fe[0],Pe=Fe[1],ze=function(){return!fe(Y)&&!fe(G)&&!fe(ae)&&!fe(Be)},Re=Object(n.useState)(""),We=Object(u.a)(Re,2),De=We[0],Me=We[1],He=Object(n.useState)(""),qe=Object(u.a)(He,2),_e=qe[0],Je=qe[1],Le=Object(n.useState)(""),Ne=Object(u.a)(Le,2),Ie=Ne[0],Ye=Ne[1],Ue=Object(n.useState)(""),Ke=Object(u.a)(Ue,2),Qe=Ke[0],Ve=Ke[1],Ge=Object(n.useState)(""),Ze=Object(u.a)(Ge,2),$e=Ze[0],Xe=Ze[1],ea=Object(n.useState)(""),aa=Object(u.a)(ea,2),ta=aa[0],na=aa[1],ra=Object(n.useState)(""),la=Object(u.a)(ra,2),oa=la[0],ia=la[1],ca=Object(n.useState)(""),sa=Object(u.a)(ca,2),ma=sa[0],ua=sa[1],pa=Object(n.useState)(""),da=Object(u.a)(pa,2),ha=da[0],ga=da[1],Ea=Object(n.useState)(""),ba=Object(u.a)(Ea,2),fa=ba[0],ya=ba[1],va=Object(n.useState)(""),wa=Object(u.a)(va,2),ja=wa[0],Aa=wa[1],ka=function(){return!fe(De)&&(!fe(_e)||!fe(Ie)||!fe(Qe)||!fe($e)||!fe(ta))&&(!fe(oa)||!fe(ma)||!fe(ha)||!fe(fa)||!fe(ja))},xa={company:{name:"London Tech",website:"http://www.LonTec.com",location:"London, UK",techStack:["Python","Java","Django"],elevatorPitch:"At London Tech, we solve the most complex problems with the most updated solutions.",info:"Since 2010, London Tech, has been consulting with some of the most well known and forward thinking companies in the world. We have built a reputation for delivering complex solution in the simplest and most effective ways to make to that any technical problem is completely solved.",size:"+100",founded:"2010",profile_picture:"https://i.imgur.com/rK5Jkkc.jpg",cover_picture:"https://i.imgur.com/pazVpu2.jpg",socialMedia:{linkedin:"https://www.linkedin.com/company/sboj-io/",twitter:"https://twitter.com/CrosstownDough",instagram:"https://www.instagram.com/crosstowndoughnuts"}},recruiter:{name:"You",title:"Head of Recruiting",organization:"Sboj.io",rating:5,profile_picture:""},benefits:{salary:{currency:Y,min:G,max:ae},remoteWorking:z,bonus:oe,bonusStructure:ge,equity:Ae,holiday:C,healthcare:Be,other:Te},position:m,description:De,responsibilities:[_e,Ie,Qe,$e,ta],experiences:[oa,ma,ha,fa,ja],employment:x,businessTravel:M},Sa=Object(n.useState)(!1),Ba=Object(u.a)(Sa,2),Oa=Ba[0],Ca=Ba[1];return r.a.createElement(g.a,{theme:N(i)},Oa&&r.a.createElement(pe.a,{onEsc:function(){return Ca(!1)},onClickOutside:function(){return Ca(!1)}},r.a.createElement(p.a,{pad:"large",width:"medium",align:"center"},r.a.createElement(H.a,{fill:!0,fit:"cover",src:"https://sboj.io/dev/rocketman.png"}),r.a.createElement("h2",{style:{margin:0}},"SUCCESS!"),r.a.createElement("h3",null,"Your job has been posted."),r.a.createElement("br",null),r.a.createElement("br",null),"Your job should be visible to potential candidates in the next few minutes.")),r.a.createElement(E.a,{activeIndex:l,onActive:function(e){return o(e)},justify:"left"},r.a.createElement(b.a,{title:r.a.createElement(ve,{isComplete:J(),label:"1: Basic Info"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(re,{position:m,setPosition:h,techStack:v,setTechStack:w,employmentType:x,setEmploymentType:S,holiday:C,setHoliday:F,remoteWorking:z,setRemoteWorking:R,businessTravel:M,setBusinessTravel:q}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(de.a,{color:j}),reverse:!0,onClick:function(){o(1)}}))))),r.a.createElement(b.a,{title:r.a.createElement(ve,{isComplete:ze(),label:"2: Salary and benefits"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(ce,{currency:Y,setCurrency:U,minSalary:G,setMinSalary:Z,maxSalary:ae,setMaxSalary:te,bonus:oe,setBonus:ie,bonusStructure:ge,setBonusStructure:ye,equity:Ae,setEquity:ke,healthcare:Be,setHealthcare:Oe,otherBenefits:Te,setOtherBenefits:Pe}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(Ee,{onClick:function(){o(0)}})),r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(de.a,{color:j}),reverse:!0,onClick:function(){o(2)}}))))),r.a.createElement(b.a,{title:r.a.createElement(ve,{isComplete:ka(),label:"3: Job Description"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},r.a.createElement(ue,{description:De,setDescription:Me,responsibility1:_e,setResponsibility1:Je,responsibility2:Ie,setResponsibility2:Ye,responsibility3:Qe,setResponsibility3:Ve,responsibility4:$e,setResponsibility4:Xe,responsibility5:ta,setResponsibility5:na,experience1:oa,setExperience1:ia,experience2:ma,setExperience2:ua,experience3:ha,setExperience3:ga,experience4:fa,setExperience4:ya,experience5:ja,setExperience5:Aa}),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(Ee,{onClick:function(){o(1)}})),r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{primary:!0,label:"Continue",icon:r.a.createElement(de.a,{color:j}),reverse:!0,onClick:function(){o(3)}}))))),r.a.createElement(b.a,{title:r.a.createElement(ve,{label:"4: Publish"})},r.a.createElement(p.a,{fill:!0,background:"#FFFFFF",gridArea:"main",pad:"small",margin:"small"},(!J()||!ze()||!ka())&&r.a.createElement("div",null,r.a.createElement("h3",null,"Hold up, cowboy!"),r.a.createElement("p",null,"We are nearly there, we just need you to add a few more bits of information.")),J()&&ze()&&ka()&&r.a.createElement("div",null,r.a.createElement("h3",null,"Ready to post?"),r.a.createElement("p",null,"You are almost there. All that is left is to review the preview of your job posting below and then click publish.")),r.a.createElement("div",{hidden:!0},r.a.createElement("pre",null,JSON.stringify({job:xa},null,2))),r.a.createElement(p.a,{direction:"row",justify:"end"},r.a.createElement(p.a,{width:"small"},r.a.createElement(Ee,{onClick:function(){o(2)}})),r.a.createElement(p.a,{width:"small"},r.a.createElement(d.a,{disabled:!(J()&&ze()&&ka()),primary:!0,label:"Publish",icon:r.a.createElement(he.a,{color:j}),reverse:!0,onClick:function(){Ca(!0)}})))),J()&&ze()&&ka()&&r.a.createElement(Q,{job:xa,hideApplyButton:!0}))))},ve=function(e){var a=e.label,t=e.isComplete;return r.a.createElement("div",null,!t&&r.a.createElement(p.a,{direction:"row",align:"center",gap:"xsmall",pad:{right:"large"}},r.a.createElement("span",{style:{color:w}},a)),t&&r.a.createElement(p.a,{direction:"row",align:"center",gap:"xsmall",pad:{right:"large"}},r.a.createElement("span",{style:{color:w}},a),r.a.createElement(z.a,{color:"green",size:"medium"})))};var we=function(){return r.a.createElement("h1",{style:{fontFamily:"Righteous, cursive",fontSize:58,fontWeight:400,color:"#424242",userSelect:"none"}},"Sb",r.a.createElement("span",{style:{color:"#08CAA1"}},"o"),"j")};var je=function(){return r.a.createElement(p.a,{gridArea:"sidebar",background:"#FFFFFF"},r.a.createElement(p.a,{justify:"center",align:"center"},r.a.createElement(we,null)),r.a.createElement(p.a,{justify:"center",pad:{top:"large"}},[{text:"Jobs",href:"/job/abc"},{text:"Post a Job",href:"/post"}].map((function(e){return r.a.createElement(c.c,{className:"side_link",to:e.href},e.text)}))))};var Ae=function(){return fetch("https://0jzvzdhkz4.execute-api.eu-west-1.amazonaws.com/prod/testing").then((function(e){return e.json()})).then((function(e){console.log(e)})),r.a.createElement(c.a,{basename:"/dev"},r.a.createElement(g.a,{full:!0,theme:Object(i.a)({},J.grommet,{},L)},r.a.createElement(h.a,{fill:!0,rows:["full"],columns:["250px","flex"],areas:[{name:"sidebar",start:[0,0],end:[0,0]},{name:"main",start:[1,0],end:[1,0]}]},r.a.createElement(je,null),r.a.createElement(p.a,{gridArea:"main",pad:"medium",width:"xlarge"},r.a.createElement(s.a,{exact:!0,path:"/",component:Q}),r.a.createElement(s.a,{exact:!0,path:"/jobs",component:Z}),r.a.createElement(s.a,{exact:!0,path:"/post",component:ye}),r.a.createElement(s.a,{exact:!0,path:"/job/:id",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,a,t){},88:function(e,a,t){e.exports=t(107)},93:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.2b79201b.chunk.js.map