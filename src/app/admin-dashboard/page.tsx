"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import {
  FiAlertTriangle,
  FiEdit,
  FiLogOut,
  FiPlus,
  FiShield,
  FiTrash2,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const CARDS = [
  {
    title: "Total Departments",
    description: "Departments onboarded",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-building w-5 h-5"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M12 14h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M8 14h.01"></path>
      </svg>
    ),
    count: 13,
    change: "+2 this month",
    color: "blue",
  },
  {
    title: "Report Compliance",
    description: "Compliance rate across all departments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-trending-up w-5 h-5"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    count: "87%",
    change: "+5% this week",
    color: "emerald",
  },
  {
    title: "Active Escalations",
    description: "Issues requiring attention",
    icon: <FiAlertTriangle />,
    count: 7,
    change: "-3 resolved",
    color: "orange",
  },
  {
    title: "System Users",
    description: "Total active users",
    icon: <FiUserCheck />,
    count: 234,
    change: "+18 this month",
    color: "purple",
  },
];

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState<
    "departments" | "roles" | "config" | "logs" | "reports"
  >("departments");
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header className="bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/logo.png"
                  alt="NOSDRAConnect Logo"
                  width={40}
                  height={40}
                  className="h-4 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-800">NOSDRAConnect</h1>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FiShield className="text-blue-600 mr-2" /> Administrator
                    Portal
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors 
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                                disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground
                                bg-white text-gray-700
                                cursor-pointer
                                h-10 px-4 py-2 flex items-center space-x-2 hover:bg-red-50 hover:border-red-200"
                  onClick={() => router.push("/")}
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Administrator Console
            </h2>
            <p className="text-gray-600">
              Platform configuration, user management, and system monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {CARDS.map((card, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-blue-500"
              >
                <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium text-gray-700">
                    {card.title}
                  </h3>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${card.color}-100 text-${card.color}-600`}
                  >
                    {card.icon}
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex items-baseline space-x-2">
                    <div className="text-2xl font-bold text-gray-800">
                      {card.count}
                    </div>
                    <span
                      className={
                        card.change.startsWith("+")
                          ? `text-sm font-medium text-green-600`
                          : "text-sm font-medium text-red-600"
                      }
                    >
                      {card.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6" dir="ltr" aria-orientation="horizontal">
            <div
              className="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-5"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer ${
                  selectedTab !== "departments"
                    ? " bg-gray-200/50 text-gray-400"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedTab("departments")}
              >
                Departments
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer${
                  selectedTab !== "roles"
                    ? " bg-gray-200/50 text-gray-400"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedTab("roles")}
              >
                Users &amp; Roles
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer ${
                  selectedTab !== "config"
                    ? " bg-gray-200/50 text-gray-400"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedTab("config")}
              >
                Configuration
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer ${
                  selectedTab !== "logs"
                    ? " bg-gray-200/50 text-gray-400"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedTab("logs")}
              >
                System Logs
              </button>
              <button
                type="button"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold cursor-pointer ${
                  selectedTab !== "reports"
                    ? " bg-gray-200/50 text-gray-400"
                    : "bg-white text-black"
                }`}
                onClick={() => setSelectedTab("reports")}
              >
                Reports
              </button>
            </div>
            {selectedTab === "departments" && (
              <div className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <div className="rounded-lg border bg-white text-card-foreground shadow-sm">
                  <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight text-black flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-building w-5 h-5"
                      >
                        <rect
                          width="16"
                          height="20"
                          x="4"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                      </svg>
                      <span>Department Management</span>
                    </h3>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold px-4 bg-black text-white py-2">
                      <FiPlus className="mr-2" /> Add Department
                    </button>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b transition-colors hover:bg-muted/50">
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              Department
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              Head
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              KPIs
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              Users
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              Status
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-semibold  text-gray-600/50 text-muted-foreground">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-gray-600">
                          <tr className="border-b transition-colors hover:bg-muted/50 text-black">
                            <td className="p-4 align-middle font-bold">
                              Procument
                            </td>
                            <td className="p-4 align-middle font-light">
                              John Doe
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent bg-gray-200/50 hover:bg-gray-300/80 text-xs">
                                  Contract Processing Time
                                </div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent  bg-gray-200/50 hover:bg-gray-300/80  text-xs">
                                  Cost Savings
                                </div>
                                <div className="inline-flex items-center rounded-full border-gray-300 border-1 px-2.5 py-0.5 font-semibold transition-colors bg-white hover:bg-white/80  text-xs">
                                  + 1 more
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-1">
                                <FiUsers />
                                <span>15</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  data-state="checked"
                                  value="on"
                                  className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-black"
                                >
                                  <span
                                    data-state="checked"
                                    className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0"
                                  ></span>
                                </button>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-black text-white">
                                  Active
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex space-x-2">
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 hover:bg-gray-200/90">
                                  <FiEdit className="h-4 w-4" />
                                </button>
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 text-red-500 hover:bg-gray-200/90">
                                  <FiTrash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 text-black">
                            <td className="p-4 align-middle font-bold">
                              Legal
                            </td>
                            <td className="p-4 align-middle font-light">
                              Jane Smith
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent bg-gray-200/50 hover:bg-gray-300/80 text-xs">
                                  Case Resolution Time
                                </div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent  bg-gray-200/50 hover:bg-gray-300/80  text-xs">
                                  Complaince Rate
                                </div>
                                <div className="inline-flex items-center rounded-full border-gray-300 border-1 px-2.5 py-0.5 font-semibold transition-colors bg-white hover:bg-white/80  text-xs">
                                  + 1 more
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-1">
                                <FiUsers />
                                <span>8</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  data-state="checked"
                                  value="on"
                                  className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-black"
                                >
                                  <span
                                    data-state="checked"
                                    className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0"
                                  ></span>
                                </button>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-black text-white">
                                  Active
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex space-x-2">
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 hover:bg-gray-200/90">
                                  <FiEdit className="h-4 w-4" />
                                </button>
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 text-red-500 hover:bg-gray-200/90">
                                  <FiTrash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 text-black">
                            <td className="p-4 align-middle font-bold">ICT</td>
                            <td className="p-4 align-middle font-light">
                              Mike Johnson
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent bg-gray-200/50 hover:bg-gray-300/80 text-xs">
                                  System Uptime
                                </div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent  bg-gray-200/50 hover:bg-gray-300/80  text-xs">
                                  Security Incidents
                                </div>
                                <div className="inline-flex items-center rounded-full border-gray-300 border-1 px-2.5 py-0.5 font-semibold transition-colors bg-white hover:bg-white/80  text-xs">
                                  + 1 more
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-1">
                                <FiUsers />
                                <span>12</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  data-state="checked"
                                  value="on"
                                  className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200/80"
                                >
                                  <span
                                    data-state="checked"
                                    className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0"
                                  ></span>
                                </button>
                                <div className="inline-flex items-center rounded-full border-gray-200/80 px-2.5 py-0.5 text-xs font-semibold bg-gray-200/50 text-black">
                                  InActive
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex space-x-2">
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 hover:bg-gray-200/90">
                                  <FiEdit className="h-4 w-4" />
                                </button>
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 text-red-500 hover:bg-gray-200/90">
                                  <FiTrash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b transition-colors hover:bg-muted/50 text-black">
                            <td className="p-4 align-middle font-bold">
                              Finance & Accounts
                            </td>
                            <td className="p-4 align-middle font-light">
                              Sarah Wilso
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex flex-wrap gap-1">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent bg-gray-200/50 hover:bg-gray-300/80 text-xs">
                                  Budget Variance
                                </div>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-transparent  bg-gray-200/50 hover:bg-gray-300/80  text-xs">
                                  Payment Processing Time
                                </div>
                                <div className="inline-flex items-center rounded-full border-gray-300 border-1 px-2.5 py-0.5 font-semibold transition-colors bg-white hover:bg-white/80  text-xs">
                                  + 1 more
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-1">
                                <FiUsers />
                                <span>15</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="true"
                                  data-state="checked"
                                  value="on"
                                  className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-black"
                                >
                                  <span
                                    data-state="checked"
                                    className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0"
                                  ></span>
                                </button>
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-black text-white">
                                  Active
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle font-light">
                              <div className="flex space-x-2">
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 hover:bg-gray-200/90">
                                  <FiEdit className="h-4 w-4" />
                                </button>
                                <button className="inline-flex items-center rounded-md cursor-pointer h-9 px-3 text-red-500 hover:bg-gray-200/90">
                                  <FiTrash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === "roles" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  User &amp; Role Management
                </h3>
                <p className="text-gray-600">
                  Manage users, assign roles, and configure permissions.
                </p>
              </div>
            )}
            {selectedTab === "config" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  System Configuration
                </h3>
                <p className="text-gray-600">
                  Configure system settings and platform preferences.
                </p>
              </div>
            )}
            {selectedTab === "logs" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  System Logs
                </h3>
                <p className="text-gray-600">
                  View system logs for monitoring and troubleshooting.
                </p>
              </div>
            )}
            {selectedTab === "reports" && (
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Reports
                </h3>
                <p className="text-gray-600">
                  Generate and view reports on system performance and usage.
                </p>
              </div>
            )}
          </div>
          <div className="mt-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-server w-5 h-5"
                  >
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                  <span>System Status Overview</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-400">
                    <span className="text-sm font-medium text-gray-700">
                      Server Uptime
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-800">99.8%</span>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-400">
                    <span className="text-sm font-medium text-gray-700">
                      Active Sessions
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-800">142</span>
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-400">
                    <span className="text-sm font-medium text-gray-700">
                      Database Size
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-800">
                        2.4 GB
                      </span>
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border-l-4 border-l-blue-400">
                    <span className="text-sm font-medium text-gray-700">
                      Backup Status
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-800">
                        Current
                      </span>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
