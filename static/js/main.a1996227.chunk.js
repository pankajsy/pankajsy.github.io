(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n,i,r,o=t(0),l=t.n(o),s=t(9),c=t.n(s),m=(t(15),t(2)),u=t(3),d=t(5),p=t(4),h=t(6),g=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).call(this))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",null,l.a.createElement("a",null,"(beta dev*)")),l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#work"},"Work Experience")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Select Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Recommendations")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#hobbies"},"Hobbies")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(o.Component),f=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("img",{className:"profile-pic",src:"images/dp.jpg",alt:""}),l.a.createElement("h2",null,"About Me"),l.a.createElement("div",null,l.a.createElement("p",null,e.name,l.a.createElement("br",null),l.a.createElement("span",null,e.aboutme),l.a.createElement("br",null),l.a.createElement("span",null,e.address))))}}]),a}(o.Component),b=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("h2",null,"Skills"),l.a.createElement("img",{className:"skills-pic",src:"images/portfolio/console.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h3",null,"Primary"),l.a.createElement("p",null,e.primary),l.a.createElement("h3",null,"Tools"),l.a.createElement("p",null,e.tools),l.a.createElement("h3",null,"Frameworks"),l.a.createElement("p",null,e.framework),l.a.createElement("h3",null,"Secondary"),l.a.createElement("p",null,e.secondary))))}}]),a}(o.Component),E=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.courses_list),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))))}}]),a}(o.Component),y=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Some of my academic/work project contributions"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(o.Component),v=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(o.Component),w=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me as per your convenience below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Phone :",e.phone)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Address :",e.address)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email :",e.email)),l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),a}(o.Component),k=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2018 pankajsy"),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{href:"http://www.Styleshout.com",title:"Styleshout"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(o.Component),S=t(1),j=(r={imagebaseurl:"https://pankajsy.github.io/",name:"Pankaj S Yewale",role:"Software Developent Engineer",linkedinId:" https://www.linkedin.com/in/pankajsy/",skypeid:"",phone:" +1 (551)-221-6022",email:" psy231@nyu.edu",address:" Brooklyn, New York 11209, USA",roleDescription:"Computing intrigues me. Early on start up exposure provided me with extensive experience    on cutting edge software technology under a well cultured software development life cycle. Contributing to various    project modules in areas such as Data engineering, Frontend, DevOps initially then later developing and deploying Web backend,    REST API's and Android Apps consolidated my programming skills. It further enhanced my predilection for computer science which    eventually brought me to New York University in pursuit of MS. I like working on new projects. Apart from being an active learner,    I'm hard working and a team player just like the one required in a quick Soccer game :) Always looking out to make significant  contributions in the Corporate world.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/pankajsy/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/pankajsy",className:"fa fa-github"},{name:"skype",url:"https://www.skype.com/pankajnyu",className:"fa fa-skype"},{name:"twitter",url:"https://twitter.com/pankaj_sy",className:"fa fa-skype"},{name:"facebook",url:"https://www.facebook.com/pankajsynyu",className:"fa fa-skype"}],aboutme:"Master of Science New York University'17 working as a Software Development Engineer  \nEnjoy watching and playing Soccer on weekends, Love painting and playing Guitar. I'm a Hindu and speak 3 languages"},Object(S.a)(r,"address","Brooklyn, New York 11209, USA"),Object(S.a)(r,"website",""),Object(S.a)(r,"education",[{UniversityName:"New York University",address:"Brooklyn, New York",specialization:"Computer Engineering (Software Engineering and Development)",courses_list:"Design and Analysis of Algorithms, Computer Architecture, Programming Languages Design and Implementation, Advanced Computer HW design, Mobile Security, Application Security, Interntet Architecture and Protocols, System Engineering, Data Center and Cloud Computing, Cloud Computing",courses:[(n={name:"Design and Analysis of Algorithms"},Object(S.a)(n,"name","Computer Architecture"),Object(S.a)(n,"name","Programming Languages Design and Implementation"),Object(S.a)(n,"name","Advanced Computer HW design"),Object(S.a)(n,"name","Mobile Security"),Object(S.a)(n,"name","Application Security"),Object(S.a)(n,"name","Interntet Architecture and Protocols"),Object(S.a)(n,"name","System Engineering"),Object(S.a)(n,"name","Data Center and Cloud Computing"),Object(S.a)(n,"name","Cloud Computing"),n)],MonthOfPassing:"May",YearOfPassing:"2017",gpa:"3.5",Achievements:"GPA 3.5, $10,000 Graduate International Engineering Scholarship"},{UniversityName:"University of Pune, Maharashtra Institute of Technology",specialization:"ECE , Minor in Computer Information Technology",courses_list:"Data Structures and Algorithms, Computer Organization and Architecture, Intro to Programming Languages, Soft Computing, Artificial Neural Network, Joint Time and Frequency Analysis, Digital Signal Processing",courses:[(i={name:"Data Structures and Algorithms"},Object(S.a)(i,"name","Computer Organization and Architecture"),Object(S.a)(i,"name","Intro to Programming Languages"),Object(S.a)(i,"name","Soft Computing"),Object(S.a)(i,"name","Artificial Neural Network"),Object(S.a)(i,"name","Joint Time and Frequency Analysis"),Object(S.a)(i,"name","Micro Controller and Applications"),Object(S.a)(i,"name","Wave Theory and Antenna"),Object(S.a)(i,"name","Digital Signal Processing"),Object(S.a)(i,"name","VLSI design and Verification"),i)],gpa:"3.7",MonthOfPassing:"May",YearOfPassing:"2012",Achievements:"GPA 3.7, Consistent High Academic Honor"}]),Object(S.a)(r,"work",[{CompanyName:"REVMAX Inc. (Seed-Fund by BMW)",specialization:"Software Development Engineer",dateofjoining:"August 2017",MonthOfLeaving:"Present",YearOfLeaving:"2018",Achievements:"\u2022 Engineered scalable demand forecasting tool for Transurban Group predicting daily highway trips-revenue for dynamic toll pricing model - built Machine Learning based browsable REST APIs for dashboards (Django, Templates, Pandas, AWS, React)       \n\u2022 Optimized backend Database schema for BMW\u2019s German car-sharing service to track vehicles location and predict day-wise potential revenue for maximizing the profits (Django, Flask, AWS EC2)       \n\u2022 Developed admin panel for Client-Profile setup featuring auth, stripe, email server, data engineering to extract features for (pdf, csv, json) reports thereby reducing installation setup time by more than 60% (Django Forms Templates, Stripe, React, CSS)       \n\u2022 Implemented Extract Transform Load Pipeline - processing big data with reduced time complexity using geohash indexing. Proposed geohash proximity-search approach that reduced processing time by ~50% (Python, Pandas, Notebook)       \n\u2022 Built and published \u200b Android\u200b app for \u2018SidewalkIQ\u2019 that notifies hourly foot traffic with weather updates (Android Studio/SDK) Created a bash script that collects data from Weather Underground and Foot Traffic sensors (>100) to build/update the PostgreSQL backend asynchronously, on hourly basis using cronjob (REST, Python, Bash, Celery, SQL)       \n\u2022 Directed server deployments, migration, scaling and DNS routing on AWS with minimal outages (AWS EC2, RDS, S3, Route 53)"},{CompanyName:"Authorized Revolution Technologies Inc (HaloLoop)",specialization:"Summer Software Intern",MonthOfLeaving:"Aug",YearOfLeaving:"2016",Achievements:"\u2022 Structured admin panel data models of an Inspirational Live Streaming Social Platform - \u2018\u200b HaloLoop\u200b \u2019 (Django, MySQL, Bitbucket)       \n\u2022 Built and deployed secure REST APIs on cloud platform with authorized tokens for Mobile Apps (DRF, AWS EC2)       \n\u2022 Integrated Stripe, OpenTok platform SDK\u2019s for high quality interactive video, voice sharing paid services (Stripe, TokBox SDK)"},{CompanyName:"Shoptimize India Pvt Ltd (Funded by Tandem Capital)",specialization:"Software Development Engineer - Technical Staff",MonthOfLeaving:"Aug",YearOfLeaving:"2015",Achievements:"\u2022 Reinforced backend models for e-Commerce Social Networking App - \u2018\u200b Cooliyo\u200b \u2019 1M+ User base (Django, REST)      \n\u2022 Designed and published \u200b Android\u200b App featuring social media login, deep linked push notifications, search, filter, order checkout, tags, save, follow etc (Java, Android Studio/SDK).       \n\u2022 Integrated web/mobile analytics SDK for monitoring user actions. It provided insights that improved website DAU, UI experience, user engagement by more than 15% and mobile downloads by 25% (Mixpanel, GA, Crashlytics, Amplitude, SQS).       \n\u2022 Built automated email marketing campaign system with custom time and delivery content. Up to 0.5M users were notified about new deals and weekly activities that boosted the DAU by more than 20%\u200b ( \u200b Mandrill-Python \u200b )"}]),Object(S.a)(r,"primary","Extensive experience in \u200b Java\u200b\u200b(Android), \u200b Python\u200b\u200b(Django),\u200b SQL, Github, AWS(Ec2, S3, SQS, RDS)"),Object(S.a)(r,"tools","Terminal, Android Studio, \u200b GitHub\u200b\u200b , Wix, \u200b PyCharm, \u200b Eclipse\u200b , \u200b Visual Studio\u200b , \u200b Screen,\u200b Jupyter\u200b\u200b , JIRA, Trello\u200b , \u200b Bitbucket"),Object(S.a)(r,"framework","REST\u200b\u200b , \u200b Android, Django\u200b\u200b , HayStack-Elasticsearch, \u200b Celery\u200b\u200b , \u200b Redis\u200b\u200b , Stripe, \u200b Pandas\u200b\u200b , AWS\u200b EC2 S3 \u200b SQS RDS"),Object(S.a)(r,"secondary","HTML\u200b\u200b , CSS, Spring, Javascript-React, Flask, PostgreSQL, MySQL, C++, \u200b Numpy\u200b\u200b , Matplotlib, VHDL"),Object(S.a)(r,"skills",[{skillname:"Java"},{skillname:"Python"},{skillname:"AWS"},{skillname:"SQL"},{skillname:"GitHub"},{skillname:"Ubuntu , MAC , Windows "}]),Object(S.a)(r,"portfolio",[{name:"SidewalkIQ\u200b\u200b",description:"Led and managed an IoT based Web Project - quickest way to get sidewalk traffic for retail locations in NYC with high accuracy (~92%) at less cost - Setup a distributed server environment for efficient data processing      \n(Django, PostgreSQL, Celery, AWS)",imgurl:"images/portfolio/judah.jpg"},{name:"SidewalkIQ Android App",description:"Designed, executed and published an Android app that notifies hourly foot traffic with weather updates       \n(Java, Android SDK, REST API, Play Store)",imgurl:"images/portfolio/retrocam.jpg"},{name:"MIPS Processor",description:"Designed processor components and assembly code to implement RC5 Block Cipher with Round Key generation -      Implemented a \u2018machine code generating compiler\u2019 from assembly code      ( C \u200b ++, Python, Assembly, VHDL)",imgurl:"images/portfolio/farmerboy.jpg"},{name:"Cooliyo\u200b\u200b",description:"Developed and published an e-Commerce Android app (4.2+ rated, 0.5M downloads) featuring social media login, deep      linked push notifications, search, filter, order checkout, tags, save, follow etc      (Java, Android, Play Store)",imgurl:"images/portfolio/coffee.jpg"},{name:"FB Data Analytics",description:"Modeled a scalable monitoring system using Time series DB. The analysis helped in boosting FB Post Reach from      10K to 0.5M users thereby helping in cost effective marketing      (OpenTSDB, FB Graph, AWS S3 SQS, Boto3, Python)",imgurl:"images/portfolio/console.jpg"},{name:"Guitar Tablature Generation",description:"Generated Guitar-Tab notes by processing a recorded guitar audio clip using Joint Time Frequency       Analysis - Implemented algorithms like FT, STFT, Wavelet and EMD for feature extraction       (MATLAB, C++)",imgurl:"images/portfolio/origami.jpg"},{name:"Portfolio",description:"Developed a Portfolio website(using a design by Styleshout)and deployed it on Github Pages.       (React, GitHub-Pages, HTML, JS, CSS)",imgurl:"images/portfolio/retrocam.jpg"}]),Object(S.a)(r,"testimonials",[{description:"Pankaj was one of our earliest employees.        He is the kind of guy you would love to have at your startup.       He is a hard working developer who gets things done!       Pankaj is not afraid to pick up new tools and technologies.       He has a great attitude and is very easy to work with in a team environment.       I am happy to recommend him for suitable roles.",name:"Vivek Phalak (Co-Founder and CTO @Shoptimize)"},{description:"Pankaj was one of the earliest members of our Technical Staff team.       He contributed immensely towards multiple projects, ensuring that all deadlines are met.       He is enthusiastic and always has a positive outlook.       Pankaj is good and knows his stuff when it comes to software development.       I would highly recommend him for the appropriate opportunity.",name:"Vardhan Phadnis (Director and Chief Sales Officer @Shoptimize)"},{description:"Pankaj is a great team player and an extremely capable developer and problem solver.       You would be very fortunate to have him on your team!",name:"O'Neill Dewey (Director Of Business Development @REVMAX Inc.)"},{description:"Pankaj is such an integral part of a team.       He is committed, hard-working and extremely talented.       No matter how challenging the situation is,       he keeps pushing forward until solutions have been found and the job has been completed.       Any team would be lucky to have him.",name:"Anna Polito (Designer @Authorized Revolutions Technologies Inc.)"},{description:"Pankaj and I have worked as project partners for our undergraduate       project and as team members of a Mobile App development team. He is professional       and easy to work with and always makes significant contributions to the the team.       I look forward to working with him in the future.",name:"Soham Shirgaonkar SDE @Amazon(Worked together at Shoptimize, UG project)"}]),r),N=t(7),O=t.n(N);var A=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(p.a)(a).call(this))).state={someData:null},O.a.initialize("UA-128636016-1"),O.a.pageview("/"),e}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,{resumeData:j}),l.a.createElement(f,{resumeData:j}),l.a.createElement(b,{resumeData:j}),l.a.createElement(E,{resumeData:j}),l.a.createElement(y,{resumeData:j}),l.a.createElement(v,{resumeData:j}),l.a.createElement(w,{resumeData:j}),l.a.createElement(k,{resumeData:j}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.a1996227.chunk.js.map