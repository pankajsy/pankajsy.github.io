(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n,i=t(0),l=t.n(i),r=t(8),o=t.n(r),s=(t(14),t(1)),c=t(2),m=t(4),u=t(3),d=t(5),p=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Education - Work Experience")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Select Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Recommendations")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(i.Component),h=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/dp.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(i.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("p",null,e.skillsDescription1),l.a.createElement("p",null,e.skillsDescription2),l.a.createElement("p",null,e.skillsDescription3))))}}]),a}(i.Component),f=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Some of my academic/work project contributions"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(i.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(i.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me as per your convenience below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Phone :",e.phone)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Address :",e.address)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email :",e.email)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(i.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2018 PankajSYewale"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(i.Component),y=t(6),k=(n={imagebaseurl:"https://pankaj.github.io/",name:"Pankaj S Yewale",role:"Software Developent Engineer",linkedinId:" https://www.linkedin.com/in/pankajsy/",skypeid:"",phone:" +1 (551)-221-6022",email:" psy231@nyu.edu",address:" Brooklyn, New York 11209, USA",roleDescription:"Computing intrigues me.  Early on start up exposure provided me with extensive experience on cutting edge software technology under a well cultured software development life cycle. Contributing to various project modules in areas such as Data engineering, Frontend, DevOps initially then later developing and deploying Web backend, REST API's and Android Apps consolidated my programming skills. It further enhanced my predilection for computer science which eventually brought me to New York University in pursuit of MS. I like working on new projects. Apart from being an active learner, I'm hard working and a team player just like the one required in a quick Soccer game :) Always looking out to make significant contributions in the Corporate world.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/pankajsy/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/pankajsy",className:"fa fa-github"},{name:"skype",url:"https://www.skype.com/pankajnyu",className:"fa fa-skype"},{name:"twitter",url:"https://twitter.com/pankaj_sy",className:"fa fa-skype"},{name:"facebook",url:"https://www.facebook.com/pankajsynyu",className:"fa fa-skype"}],aboutme:"MS New York University, SDE at REVMAX Inc (Funded by BMW)"},Object(y.a)(n,"address","Brooklyn, New York 11209, USA"),Object(y.a)(n,"website",""),Object(y.a)(n,"education",[{UniversityName:"New York University",specialization:"Software Engineering and Development, Cloud Computing",MonthOfPassing:"May",YearOfPassing:"2017",Achievements:"GPA 3.5, $10,000 Graduate International Engineering Scholarship"},{UniversityName:"University of Pune, Maharashtra Institute of Technology, Pune",specialization:"ECE , Minor in Computer Information Technology",MonthOfPassing:"May",YearOfPassing:"2012",Achievements:"Consistent High Academic Honor"}]),Object(y.a)(n,"work",[{CompanyName:"REVMAX Inc. (Seed-Fund by BMW)",specialization:"Software Development Engineer",MonthOfLeaving:"Present",YearOfLeaving:"",Achievements:"Engineered scalable demand forecasting tool for Transurban Group predicting daily highway trips-revenue for dynamic toll pricing model - built Machine Learning based browsable REST APIs for dashboards (Django, Templates, Pandas, AWS, React)       Optimized backend Database schema for BMW\u2019s German car-sharing service to track vehicles location and predict day-wise potential revenue for maximizing the profits (Django, Flask, AWS EC2)       Developed admin panel for Client-Profile setup featuring auth, stripe, email server, data engineering to extract features for (pdf, csv, json) reports thereby reducing installation setup time by more than 60% (Django Forms Templates, Stripe, React, CSS)       Implemented Extract Transform Load Pipeline - processing big data with reduced time complexity using geohash indexing. Proposed geohash proximity-search approach that reduced processing time by ~50% (Python, Pandas, Notebook)       Built and published \u200b Android\u200b app for \u2018SidewalkIQ\u2019 that notifies hourly foot traffic with weather updates (Android Studio/SDK) Created a bash script that collects data from Weather Underground and Foot Traffic sensors (>100) to build/update the PostgreSQL backend asynchronously, on hourly basis using cronjob (REST, Python, Bash, Celery, SQL)       Directed server deployments, migration, scaling and DNS routing on AWS with minimal outages (AWS EC2, RDS, S3, Route 53)"},{CompanyName:"Authorized Revolution Technologies Inc (HaloLoop)",specialization:"SDE Intern",MonthOfLeaving:"Aug",YearOfLeaving:"2016",Achievements:"Structured admin panel data models of an Inspirational Live Streaming Social Platform - \u2018\u200b HaloLoop\u200b \u2019 (Django, MySQL, Bitbucket)       Built and deployed secure REST APIs on cloud platform with authorized tokens for Mobile Apps (DRF, AWS EC2)       Integrated Stripe, OpenTok platform SDK\u2019s for high quality interactive video, voice sharing paid services (Stripe, TokBox SDK)"},{CompanyName:"Shoptimize India Private Limmited (Funded by Tandem Capital)",specialization:"SDE Technical Staff",MonthOfLeaving:"Aug",YearOfLeaving:"2015",Achievements:"Reinforced backend models for e-Commerce Social Networking App - \u2018\u200b Cooliyo\u200b \u2019 1M+ User base (Django, REST)      Designed and published \u200b Android\u200b App featuring social media login, deep linked push notifications, search, filter, order checkout, tags, save, follow etc (Java, Android Studio/SDK).       Integrated web/mobile analytics SDK for monitoring user actions. It provided insights that improved website DAU, UI experience, user engagement by more than 15% and mobile downloads by 25% (Mixpanel, GA, Crashlytics, Amplitude, SQS).       Built automated email marketing campaign system with custom time and delivery content. Up to 0.5M users were notified about new deals and weekly activities that boosted the DAU by more than 20%\u200b ( \u200b Mandrill-Python \u200b )"}]),Object(y.a)(n,"skillsDescription","Primary Skills - Extensive experience in \u200b Java\u200b\u200b -Android, \u200b Python\u200b\u200b -Django, \u200b SQL, AWS"),Object(y.a)(n,"skillsDescription1","Tools - Terminal, Android Studio, \u200b GitHub\u200b\u200b , Wix, \u200b PyCharm, \u200b Eclipse\u200b , \u200b Visual Studio\u200b , \u200b Screen,\u200b Jupyter\u200b\u200b , JIRA, Trello\u200b , \u200b Bitbucket"),Object(y.a)(n,"skillsDescription2","Frameworks - \u200b REST\u200b\u200b , \u200b Android, Django\u200b\u200b , HayStack-Elasticsearch, \u200b Celery\u200b\u200b , \u200b Redis\u200b\u200b , Stripe, \u200b Pandas\u200b\u200b , AWS\u200b EC2 S3 \u200b SQS RDS"),Object(y.a)(n,"skillsDescription3","Secondary Skills - \u200b HTML\u200b\u200b , CSS, Spring, Javascript-React, Flask, PostgreSQL, MySQL, C++, \u200b Numpy\u200b\u200b , Matplotlib, VHDL"),Object(y.a)(n,"skills",[{skillname:"Java"},{skillname:"Python"},{skillname:"AWS"},{skillname:"SQL"},{skillname:"GitHub"},{skillname:"Ubuntu , MAC , Windows "}]),Object(y.a)(n,"portfolio",[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/judah.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/farmerboy.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/coffee.jpg"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/console.jpg"}]),Object(y.a)(n,"testimonials",[{description:"Pankaj was one of our earliest employees.        He is the kind of guy you would love to have at your startup.       He is a hard working developer who gets things done!       Pankaj is not afraid to pick up new tools and technologies.       He has a great attitude and is very easy to work with in a team environment.       I am happy to recommend him for suitable roles.",name:"Vivek Phalak (Co-Founder and CTO, Shoptimize)"},{description:"Pankaj was one of the earliest members of our Technical Staff team.       He contributed immensely towards multiple projects, ensuring that all deadlines are met.       He is enthusiastic and always has a positive outlook.       Pankaj is good and knows his stuff when it comes to software development.       I would highly recommend him for the appropriate opportunity.",name:"Vardhan Phadnis (Director and Chief Sales Officer at Shoptimize)"},{description:"Pankaj is a great team player and an extremely capable developer and problem solver.       You would be very fortunate to have him on your team!",name:"O'Neill Dewey (Director Of Business Development REVMAX Inc.)"},{description:"Pankaj is such an integral part of a team.       He is committed, hard-working and extremely talented.       No matter how challenging the situation is,       he keeps pushing forward until solutions have been found and the job has been completed.       Any team would be lucky to have him.",name:"Anna Polito (Designer at Authorized Revolutions Technologies Inc.)"}]),n),w=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:k}),l.a.createElement(h,{resumeData:k}),l.a.createElement(E,{resumeData:k}),l.a.createElement(f,{resumeData:k}),l.a.createElement(g,{resumeData:k}),l.a.createElement(v,{resumeData:k}),l.a.createElement(b,{resumeData:k}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.7245a328.chunk.js.map