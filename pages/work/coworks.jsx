"use client";
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MermaidDiagram from "../../components/MermaidDiagram";
import coworks from "../../public/work/coworks-product/coworks.png";
import coworksproduct1 from "../../public/work/coworks-product/product-1.webp";
import coworksproduct2 from "../../public/work/coworks-product/product-2.webp";
import coworksproduct3 from "../../public/work/coworks-product/product-3.webp";

export default function CoworksProject() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  // Sync active tab with query param on mount and when query changes
  useEffect(() => {
    const tabFromQuery = router.query.tab;
    const validTabs = ["overview", "architecture", "features"];
    if (tabFromQuery && validTabs.includes(tabFromQuery)) {
      setActiveTab(tabFromQuery);
    }
  }, [router.query.tab]);

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/work/coworks?tab=${tab}`, undefined, { shallow: true });
  };

  const architectureDiagram = `graph TB
    subgraph Client[Client Applications]
        WebApp[React Web App<br/>Members & Admins]
        AdminPanel[Next.js Admin Panel<br/>Super Admin]
        MobileApp[React Native Apps<br/>iOS & Android]
        TabletApp[Expo Tablet App<br/>Front Desk]
    end

    subgraph Backend[Backend Services]
        RailsAPI[Rails 6 API<br/>Core Business Logic]
        NodeJS[Node.js Service<br/>Real-time WebSocket]
        Cube[Cube.js<br/>Analytics Engine]
    end

    subgraph Data[Data Layer]
        Postgres[PostgreSQL<br/>Primary Database]
        Redis[Redis<br/>Cache & Jobs]
    end

    subgraph External[Third-Party Services]
        Stripe[Stripe<br/>Payments]
        Twilio[Twilio<br/>SMS]
        SendGrid[SendGrid<br/>Email]
        Google[Google APIs<br/>Calendar & OAuth]
        AWS[AWS S3<br/>File Storage]
    end

    WebApp --> RailsAPI
    AdminPanel --> RailsAPI
    MobileApp --> RailsAPI
    TabletApp --> RailsAPI

    WebApp -.WebSocket.-> NodeJS
    TabletApp -.WebSocket.-> NodeJS

    RailsAPI --> Postgres
    NodeJS --> Postgres
    Cube --> Postgres

    RailsAPI --> Redis
    RailsAPI --> Stripe
    RailsAPI --> Twilio
    RailsAPI --> SendGrid
    RailsAPI --> Google
    RailsAPI --> AWS

    style Client fill:#3b82f6,stroke:#1e40af,stroke-width:3px
    style Backend fill:#10b981,stroke:#047857,stroke-width:3px
    style Data fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px
    style External fill:#f59e0b,stroke:#d97706,stroke-width:3px`;

  const techStackDiagram = `graph TD
    Root[Coworks Tech Stack]

    subgraph Frontend[Frontend Technologies]
        F1[React 18 & Redux]
        F2[Next.js & TailwindCSS]
        F3[React Native & Expo]
    end

    subgraph Backend[Backend Services]
        B1[Rails 6 API]
        B2[Node.js & WebSockets]
        B3[Sidekiq Jobs]
    end

    subgraph Data[Data & Infrastructure]
        D1[PostgreSQL & Redis]
        D2[Docker & Heroku]
        D3[AWS S3 & GitHub Actions]
    end

    subgraph Integrations[Third-Party Integrations]
        Int1[Stripe & Twilio]
        Int2[SendGrid & Google APIs]
        Int3[Zapier]
    end

    Root --> Frontend
    Root --> Backend
    Root --> Data
    Root --> Integrations

    style Root fill:#1e40af,stroke:#1e3a8a,stroke-width:3px
    style Frontend fill:#3b82f6,stroke:#1e40af,stroke-width:3px
    style Backend fill:#10b981,stroke:#047857,stroke-width:3px
    style Data fill:#8b5cf6,stroke:#6d28d9,stroke-width:3px
    style Integrations fill:#ef4444,stroke:#b91c1c,stroke-width:3px`;

  const keyFeatures = [
    {
      title: "Resource Management",
      description: "Calendar-based booking engine for rooms, desks, and amenities with real-time availability",
      icon: "📅",
    },
    {
      title: "Billing & Payments",
      description: "Stripe-powered subscription management, invoicing, and payment processing",
      icon: "💳",
    },
    {
      title: "Member Portal",
      description: "Directory, messaging, events, and community features for coworking members",
      icon: "👥",
    },
    {
      title: "Multi-Campus Support",
      description: "Location-based workflows supporting multiple coworking spaces",
      icon: "🏢",
    },
    {
      title: "Mobile Apps",
      description: "Native iOS and Android apps built with React Native",
      icon: "📱",
    },
    {
      title: "Access Control",
      description: "Integration with Brivo and Salto door access systems",
      icon: "🔐",
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence powered by Cube.js for data-driven decisions",
      icon: "📊",
    },
    {
      title: "Zapier Integration",
      description: "Connect with 1000+ third-party services through custom Zapier app",
      icon: "⚡",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 lg:mb-12 mx-auto w-full">
      <Head>
        <title>Coworks - Coworking SaaS Platform • Tanner Hallman</title>
        <link rel="icon" href="/Avatar-white.svg" />
      </Head>
      <main className="w-full">
        <div className="mx-auto pt-16 pb-10">
          {/* Hero Section */}
          <div className="mx-auto flex flex-col text-center justify-center">
            <Image
              loading="lazy"
              src={coworks}
              alt="Coworks"
              height={150}
              className="mt-10 justify-self-center self-center"
            />
            <h1 className="mt-6 mb-4 font-deca text-gray-900 dark:text-white items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Coworks Platform
            </h1>
            <p className="mb-4 font-medium text-gray-500 dark:text-gray-400 items-center mx-auto text-base md:text-lg">
              Full-Stack Coworking Space Management Platform
            </p>
            <p className="mb-8 text-gray-600 dark:text-gray-400 items-center mx-auto text-sm md:text-base max-w-2xl">
              7 years of full-stack development • 11 repositories • React, Rails, React Native, Node.js
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex justify-center space-x-3 md:space-x-4 items-center my-6">
            <Link
              href="https://coworks.com"
              target="_blank"
              className="flex items-center font-medium space-x-2 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors"
            >
              <FiFileText className="stroke-2" />
              <span>Visit Coworks.com</span>
            </Link>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-2 my-8 overflow-x-auto">
            {["overview", "architecture", "features"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="mx-auto flex flex-col max-w-4xl space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-blue-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🚀 Project Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                  Coworks is a comprehensive SaaS platform serving the flexible workspace industry. As a core developer,
                  I built and maintained a multi-platform ecosystem handling facility management, member services,
                  billing, access control, and analytics.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📅 Timeline</h3>
                  <p className="text-gray-700 dark:text-gray-300">October 2016 - September 2023</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">7 years of continuous development</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">💼 Role</h3>
                  <p className="text-gray-700 dark:text-gray-300">Co-founder & Lead Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Full-stack development & architecture</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">📈 Scale</h3>
                  <p className="text-gray-700 dark:text-gray-300">~$500k ARR • Hundreds of customers</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Techstars Proptech 2019</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">🏗️ Platform</h3>
                  <p className="text-gray-700 dark:text-gray-300">11 repositories • Multi-platform</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Web, mobile, API, integrations</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {[
                    "Built complete web application with 160+ production releases",
                    "Architected RESTful API serving web, mobile, and third-party integrations",
                    "Developed React Native apps for iOS and Android from scratch",
                    "Created reusable component library with 50+ components published via Bit.dev",
                    "Implemented real-time WebSocket layer for live booking notifications",
                    "Built analytics platform using Cube.js for business intelligence",
                    "Published public Zapier app connecting to 1000+ third-party services",
                    "Integrated Stripe for recurring billing processing thousands of transactions",
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Architecture Tab */}
          {activeTab === "architecture" && (
            <div className="mx-auto flex flex-col w-full space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  🏗️ System Architecture
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  Multi-tier architecture with microservices, real-time communication, and extensive third-party
                  integrations
                </p>
                <div className="w-full overflow-x-auto">
                  <MermaidDiagram chart={architectureDiagram} className="my-6" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  📊 Technology Stack
                </h2>
                <div className="w-full overflow-x-auto">
                  <MermaidDiagram chart={techStackDiagram} className="my-6" />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Architecture Principles
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Microservices",
                      desc: "Separate services for specific concerns (real-time, analytics)",
                    },
                    { title: "API-First", desc: "All clients consume the same REST API" },
                    { title: "Real-time", desc: "WebSocket layer for live updates" },
                    { title: "Event-Driven", desc: "Sidekiq jobs for async processing" },
                    { title: "Component Reuse", desc: "Shared library across applications" },
                    { title: "Monitoring", desc: "Comprehensive logging and error tracking" },
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">{principle.title}:</span>
                        <span className="text-gray-700 dark:text-gray-300 ml-1">{principle.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="mx-auto flex flex-col max-w-5xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                ⭐ Key Features Developed
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Screenshots Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              📸 Product Screenshots
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[coworksproduct1, coworksproduct2, coworksproduct3].map((shot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    loading="lazy"
                    src={shot}
                    alt={`Coworks screenshot ${index + 1}`}
                    className="transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🛠️ Technologies & Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 18",
                    "Next.js",
                    "React Native",
                    "Redux",
                    "TailwindCSS",
                    "Styled Components",
                    "Storybook",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Rails 6", "Node.js", "PostgreSQL", "Redis", "Sidekiq", "WebSockets", "RESTful APIs"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Heroku", "AWS S3", "GitHub Actions", "Git Flow", "Sentry", "New Relic"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
