import{d as u,r as i,o as a,c as l,a as e,t as s,b as h,w as c,F as f,e as g,f as w,_ as v}from"./index-SLc5Rliy.js";const _={class:"company"},y={class:"role-name"},k=u({__name:"WorkExperience",props:{workExperience:{}},setup(p){function n(t){return`${t.toLocaleString("default",{month:"long"})} ${t.getFullYear()}`}const d=p;return(t,m)=>{const o=i("el-timeline-item"),S=i("el-timeline");return a(),l("div",null,[e("div",null,[e("span",_,s(d.workExperience.company),1)]),h(S,null,{default:c(()=>[(a(!0),l(f,null,g(t.workExperience.roles,(r,D)=>(a(),w(o,{key:D,timestamp:n(r.startDate)},{default:c(()=>[e("div",null,[e("h4",y,s(r.role),1),e("p",null,s(r.description),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})])}}}),E=v(k,[["__scopeId","data-v-0b19ae12"]]),x=u({__name:"WorkExperiencesView",setup(p){const n=[{company:"Corvina",roles:[{role:"Senior Full Stack Engineer",startDate:new Date("2022-07-01"),description:`I’m developing a microservice industrial IoT platform that helps customers to create dashboards and deploy new software on their devices.
The microservices are using the following technologies: Typescript, Nodejs, Java, Go, Postgres, Redis, Elasticsearch, Rabbitmq, Cassandra and Vuejs.  All the services are dockerized and orchestrated by Kubernetes.
I developed a marketplace inside Corvina and two applications:
an OCI artifact registry based on Harbor
an application that handles multiple NodeRED instances
I also developed a documentation site using Docusaurus and an app template generator using Go.
`}]},{company:"Milkman",roles:[{role:"Software Architect",startDate:new Date("2020-08-01"),endDate:new Date("2022-07-01"),description:`I designed solutions that guarantee software scalability and transform the system into a multi-tenant platform.
I also took care of the cost of the platform for each delivery.
The whole infrastructure was on AWS and used the following services: S3, SQS, SNS, Lambda, Step Function, ECR, ECS Fargate, Redshift, DynamoDB, RDS, ElastiCache Redis, EC2, Cloudwatch. 
The software was written with different languages (Node.js, Go, Java, Clojure), framework and storage.
`},{role:"Data Team Leader",startDate:new Date("2019-02-01"),endDate:new Date("2020-08-01"),description:"Active management of a Business Intelligence and Machine Learning team. All developed metrics aim to maximize the number of packages transported per vehicle per day, optimize warehouse resources, and monitor the performance of our collaborators. The technology stack ranges from PowerBI, Redshift, AWS S3, PostgreSQL, AWS Step Functions, Docker, NodeJs, and Python."},{role:"Senior Web Application Developer",startDate:new Date("2017-06-01"),endDate:new Date("2019-02-01"),description:`Development of the following applications/services:
- Milkman Experience: web application for smart delivery tracking (JS, React, Redux)
- Api Integration Test: software layer for quality assurance and regression testing (NodeJs, Mocha, Chai)
- Communicator: microservice for managing SMS and email sending (NodeJs, Sequelize, MySql, Express)`}]},{company:"E-Time",roles:[{role:"Full Stack Developer",startDate:new Date("2015-07-01"),endDate:new Date("2017-06-01"),description:`I have been the lead developer in the following projects:
- YOUBUSINESS WEB: development of remote banking services using various technologies (.NET Framework, LINQ, WCF, Web Api, ASP.NET MVC, Bootstrap, LESS, jQuery, KnockoutJS, SammyJs)
- ETM: personnel management system developed in NodeJs`}]},{company:"Marsh",roles:[{role:"Full Stack Developer",startDate:new Date("2013-08-01"),endDate:new Date("2015-07-01"),description:`Development of the following projects:
- Integrated System: claims management for life insurance and medical expense reimbursement
- myMarsh: interface for policyholders of life insurance and medical expense reimbursement policies Technologies used: Bootstrap, jQuery, .NET Framework, LINQ to SQL, TSQL.`}]}];return(d,t)=>{const m=i("el-scrollbar");return a(),w(m,{height:"30rem"},{default:c(()=>[(a(),l(f,null,g(n,o=>e("div",{key:o.company},[h(E,{workExperience:o},null,8,["workExperience"])])),64))]),_:1})}}});export{x as default};