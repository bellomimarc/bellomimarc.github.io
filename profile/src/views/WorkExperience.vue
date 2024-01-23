<template>
    <div>
        ciao
    </div>
</template>

<script setup lang="ts">

interface WorkExperience {
    company: string;
    roles: {
        role: string;
        startDate: Date;
        endDate?: Date;
        description: string;
    }[];
}

const workExperiences: WorkExperience[] = [
    {
        company: "CORVINA",
        roles: [
            {
                role: "Senior Full Stack Engineer",
                startDate: new Date("2022-07-01"),
                description: "Development of an application for remote management of cyber-physical systems. The software components I work on involve different languages (Javascript, Typescript, Java, Go), frameworks (Spring, VueJs, NestJs), storage (PostgreSQL, Redis, Elasticsearch, Cassandra), communication protocols (HTTP, WebSocket, MQTT), and a message broker RabbitMQ. The entire stack is deployed on Kubernetes using helm charts."
            }
        ]
    },
    {
        company: "MILKMAN",
        roles: [
            {
                role: "Software Architect",
                startDate: new Date("2020-08-01"),
                endDate: new Date("2022-07-01"),
                description: "Designing technical solutions to ensure scalability of Milkman software, deliberately inspired by Domain Driven Design and Event Sourcing. I have also worked on efficiency activities to reduce costs of the entire AWS cloud platform."
            }, 
            {
                role: "Data Team Leader",
                startDate: new Date("2019-02-01"),
                endDate: new Date("2020-08-01"),
                description: "Active management of a Business Intelligence and Machine Learning team. All developed metrics aim to maximize the number of packages transported per vehicle per day, optimize warehouse resources, and monitor the performance of our collaborators. The technology stack ranges from PowerBI, Redshift, AWS S3, PostgreSQL, AWS Step Functions, Docker, NodeJs, and Python."
            },
            {
                role: "Senior Web Application Developer",
                startDate: new Date("2017-06-01"),
                endDate: new Date("2019-02-01"),
                description: `Development of the following applications/services:
- Milkman Experience: web application for smart delivery tracking (JS, React, Redux)
- Api Integration Test: software layer for quality assurance and regression testing (NodeJs, Mocha, Chai)
- Communicator: microservice for managing SMS and email sending (NodeJs, Sequelize, MySql, Express)`
            }
        ]
    },
    {
        company: "E-TIME",
        roles: [
            {
                role: "Full Stack Developer",
                startDate: new Date("2015-07-01"),
                endDate: new Date("2017-06-01"),
                description: `I have been the lead developer in the following projects:
- YOUBUSINESS WEB: development of remote banking services using various technologies (.NET Framework, LINQ, WCF, Web Api, ASP.NET MVC, Bootstrap, LESS, jQuery, KnockoutJS, SammyJs)
- ETM: personnel management system developed in NodeJs`
            }
        ]
    },
    {
        company: "MARSH",
        roles: [
            {
                role: "Full Stack Developer",
                startDate: new Date("2013-08-01"),
                endDate: new Date("2015-07-01"),
                description: `Development of the following projects:
- Integrated System: claims management for life insurance and medical expense reimbursement
- myMarsh: interface for policyholders of life insurance and medical expense reimbursement policies Technologies used: Bootstrap, jQuery, .NET Framework, LINQ to SQL, TSQL.`
            }
        ]
    }
]

</script>