"use client";

import { useState } from "react";
import Image from "next/image";

/* ===== FULL DATA (ALL WORKING) ===== */
const TECHNOLOGIES = {
    "Програмни езици за Back-end": [
        { name: "Node.js", src: "/assets/img/adpng/Node.png" },
        { name: "PHP", src: "/assets/img/adpng/PHP.png" },
        { name: "Java", src: "/assets/img/adpng/Java.png" },
        { name: "Python", src: "/assets/img/adpng/Python.png" },
        { name: "Go", src: "/assets/img/adpng/Go.png" },
        { name: ".NET", src: "/assets/img/adpng/DotNet.png" },
        { name: "CPP", src: "/assets/img/adpng/Cpp.png" },
    ],

    "Програмни езици за Front-end": {
        "Езици": [

            { name: "Html", src: "/assets/img/adpng/Html.png" },
            { name: "CSS", src: "/assets/img/adpng/Css.png" },
            { name: "Js", src: "/assets/img/adpng/Js.png" },
        ],
        "JavaScript рамки": [
            { name: "Angular", src: "/assets/img/adpng/Angular.png" },
            { name: "Vue", src: "/assets/img/adpng/Vue.png" },
            { name: "React", src: "/assets/img/adpng/React.png" },
            { name: "Meteor", src: "/assets/img/adpng/Meteor.png" },
            { name: "Ember", src: "/assets/img/adpng/Ember.png" },
            { name: "Next", src: "/assets/img/adpng/Next.png" },
        ],
    },

    "Облачни услуги": [
        { name: "AWS", src: "/assets/img/adpng/Aws.png" },
        { name: "Microsoft", src: "/assets/img/adpng/Microsoft.png" },
        { name: "Google Cloud", src: "/assets/img/adpng/Google Cloud.png" },
        { name: "DigitalOcean", src: "/assets/img/adpng/Digital Ocean.png" },
        { name: "Rackspace", src: "/assets/img/adpng/Rackspace.png" },
    ],

    "Мобилни": [
        { name: "IOS", src: "/assets/img/adpng/IOS.png" },
        { name: "Android", src: "/assets/img/adpng/Android.png" },
        { name: "Xamarin", src: "/assets/img/adpng/Xamarin.png" },
        { name: "Cordova", src: "/assets/img/adpng/Cordova.png" },
        { name: "PWA", src: "/assets/img/adpng/PWA.png" },
        { name: "React Native", src: "/assets/img/adpng/React Native.png" },
        { name: "Flutter", src: "/assets/img/adpng/Flutter.png" },
        { name: "Ionic", src: "/assets/img/adpng/Ionic.png" },
    ],

    "Обработка на данни в реално време": [
        { name: "Rabbit", src: "/assets/img/ad/Rabbit.webp" },
        { name: "Flink", src: "/assets/img/ad/Flink.webp" },
        { name: "Spark", src: "/assets/img/ad/Spark.webp" },
        { name: "Kafka", src: "/assets/img/ad/Kafka.webp" },
        { name: "Amazone", src: "/assets/img/ad/Amazon.webp" },
        { name: "Azure", src: "/assets/img/ad/Azure.webp" },
        { name: "Azure Stream", src: "/assets/img/ad/Azure Stream.webp" },
        { name: "Storm", src: "/assets/img/ad/Storm.webp" },
    ],

    "Бази данни / съхранение на данни": {
        SQL: [
            { name: "MySQL", src: "/assets/img/adpng/MySQL.png" },
            { name: "PostgreSQL", src: "/assets/img/adpng/PostgreSQL.png" },
            { name: "Oracle", src: "/assets/img/adpng/Oracle.png" },
            { name: "AzureSql", src: "/assets/img/adpng/AzureSQL.png" },
            { name: "SQL Server", src: "/assets/img/adpng/SQL.png" },
        ],
        "No SQL": [
            { name: "MongoDB", src: "/assets/img/adpng/MongoDB.png" },
            { name: "Nifi", src: "/assets/img/adpng/Nifi.png" },
            { name: "Cassandra", src: "/assets/img/adpng/Cassandra.png" },
            { name: "Apache", src: "/assets/img/adpng/Apache.png" },
            { name: "Hive", src: "/assets/img/adpng/Hive.png" },
        ],
    },

    "Облачни бази данни и хранилища": {

        AWS: [
            { name: "Amazon RDS", src: "/assets/img/adpng/RDS.png" },
            { name: "DynamoDB", src: "/assets/img/adpng/DynamoDB.png" },
            { name: "Redshift", src: "/assets/img/adpng/Redshift.png" },
            { name: "Amazone Simple Storage Service", src: "/assets/img/adpng/Storage.png" },
            { name: "Amazone DocumentDB", src: "/assets/img/adpng/DocumentDB.png" },
            { name: "AWS Elasticache", src: "/assets/img/adpng/Elasticache.png" },
        ],

        "Azure": [
            { name: "Amazon Data Lake", src: "/assets/img/adpng/Data Lake.png" },
            { name: "Azure Blob Storage", src: "/assets/img/adpng/Blob.png" },
            { name: "Azure Cosmos DB", src: "/assets/img/adpng/Cosmos.png" },
            { name: "Azure SQL Database", src: "/assets/img/adpng/SQL Database.png" },
            { name: "Azure RTOS", src: "/assets/img/adpng/RTOS.png" },
            { name: "Azure Synapse Analytics", src: "/assets/img/adpng/Synapse.png" },
            { name: "Azure Kinect DK", src: "/assets/img/adpng/Kinect.png" },
        ],
        "Google Cloud Platform": [
            { name: "Google Cloud DataStore", src: "/assets/img/adpng/Cloud Datastore.png" },
            { name: "Google Cloud SQL", src: "/assets/img/adpng/Cloud SQL.png" },
        ],
    },

    DevOps: {

        "Контейнеризация": [

            { name: "Docker", src: "/assets/img/adpng/Docker.png" },
            { name: "Kubernetes", src: "/assets/img/adpng/Kubernetes.png" },
            { name: "OpenShift", src: "/assets/img/adpng/OpenShift.png" },
            { name: "Apache Mesos", src: "/assets/img/adpng/Mesos.png" },
        ],
        "Автоматизация": [

            { name: "Ansible", src: "/assets/img/ad/Ansible.webp" },
            { name: "Puppet", src: "/assets/img/ad/Puppet.webp" },
            { name: "Chef", src: "/assets/img/ad/Chef.webp" },
            { name: "SaltStack", src: "/assets/img/ad/Saltstack.webp" },
            { name: "Terraform", src: "/assets/img/ad/Terraform.webp" },
            { name: "Packer", src: "/assets/img/ad/Packer.webp" },
        ],
        "CI/CD инструменти": [

            { name: "AWS Developer Tools", src: "/assets/img/ad/Developer tools.webp" },
            { name: "Azure DevOps", src: "/assets/img/ad/Azure DevOps.webp" },
            { name: "Google Developer Tools", src: "/assets/img/ad/Google tools.webp" },
            { name: "CI/CD", src: "/assets/img/ad/CICD.webp" },
            { name: "Jenkins", src: "/assets/img/ad/Jenkins.webp" },
            { name: "TC", src: "/assets/img/ad/TC.webp" },
        ],
        "Мониторинг": [

            { name: "Zabbix", src: "/assets/img/ad/Zabbix.webp" },
            { name: "Nagios", src: "/assets/img/ad/Nagios.webp" },
            { name: "Elasticsearch", src: "/assets/img/ad/Elasticsearch.webp" },
            { name: "Prometheus", src: "/assets/img/ad/Prometheus.webp" },
            { name: "Grafana", src: "/assets/img/ad/Grafana.webp" },
            { name: "DataDog", src: "/assets/img/ad/DataDog.webp" },
        ],
    },

    "Платежни шлюзове": [
        { name: "Stripe", src: "/assets/img/ad/Stripe.webp" },
        { name: "PayPal", src: "/assets/img/ad/PayPal.webp" },
        { name: "Alipay", src: "/assets/img/ad/AliPay.webp" },
        { name: "Adyen", src: "/assets/img/ad/Adyen.webp" },
        { name: "pay", src: "/assets/img/ad/Pay.webp" },
    ],

    CRM: [
        { name: "Salesforce", src: "/assets/img/ad/Salesforce.webp" },
        { name: "HubSpot", src: "/assets/img/ad/HubSpot.webp" },
        { name: "Zendesk", src: "/assets/img/ad/Zendesk.webp" },
        { name: "Dynamics", src: "/assets/img/ad/Dynamics.webp" },
        { name: "ORO", src: "/assets/img/ad/ORO.webp" },
    ],
};

const TABS = Object.keys(TECHNOLOGIES);

export default function ERPTechnologiesSection() {
    const [activeTab, setActiveTab] = useState("Облачни услуги");

    const activeData = TECHNOLOGIES[activeTab];

    return (
      <section className="container bg-white py-6 md:py-12">
        <div className="">
          <h2 className="text-2xl md:text-3xl font-medium! text-center mb-10 text-black!">
            Технологии, използвани в нашата ERP разработка
          </h2>

          <div className="flex md:flex-row flex-col rounded-2xl border border-[#E3ECFA] overflow-hidden">
            {/* LEFT TABS */}
            <div className="md:w-72 w-full bg-white text-(--new-theme-color) flex flex-col border-r border-black/20">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-3 py-2.5 text-sm border-b rounded-md! border-black/20 last:border-b-0
                  ${
                    activeTab === tab
                      ? "bg-(--new-theme-color) text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 bg-[#F9FBFF] p-8">
              {/* <h3 className="text-xl! font-semibold mb-6 text-black!">{activeTab}</h3> */}

              {/* ✅ CASE 1: NORMAL ARRAY */}
              {Array.isArray(activeData) && (
                <div className="flex flex-wrap gap-8">
                  {activeData.map((item) => (
                    <div
                      key={`${activeTab}-${item.name}-${item.src}`}
                      className="w-20 h-16 flex items-center justify-center"
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={80}
                        height={35}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}

              {!Array.isArray(activeData) && typeof activeData === "object" && (
                <div className="flex flex-col gap-8">
                  {Object.entries(activeData).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="text-lg! font-medium! mb-4 text-black!">
                        {group}
                      </h4>

                      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-6">
                        {items.map((item) => (
                          <div
                            key={`${group}-${item.name}-${item.src}`}
                            className="w-20 h-16 flex items-center justify-center"
                          >
                            <Image
                              src={item.src}
                              alt={item.name}
                              width={80}
                              height={35}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
}

