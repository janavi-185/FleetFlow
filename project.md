🚛 FleetFlow
Modular Fleet & Logistics Management System

📌 Overview

FleetFlow is a centralized, rule-based Fleet & Logistics Management System built to replace inefficient manual logbooks with a scalable digital solution.

It enables:

Fleet lifecycle management

Smart trip dispatching with rule validation

Driver compliance monitoring

Preventive maintenance tracking

Fuel & expense logging

Financial performance analytics

Role-based access control (RBAC)

Real-time fleet state updates

FleetFlow is designed as a modular, production-ready system suitable for logistics companies, transport operators, and delivery networks.

🎯 Project Objective

To design and implement a scalable fleet management platform that:

Prevents dispatch errors via automated validation rules

Tracks vehicle availability in real time

Blocks assignment of expired or suspended drivers

Calculates operational metrics automatically

Links expenses directly to vehicle performance

Provides analytics for data-driven decision making

👥 User Roles
1️⃣ Fleet Manager

Oversees fleet health

Monitors maintenance lifecycle

Tracks utilization rates

Reviews analytics

2️⃣ Dispatcher

Creates and assigns trips

Selects available vehicles & drivers

Validates cargo weight

3️⃣ Safety Officer

Tracks license expirations

Monitors safety scores

Controls driver duty status

4️⃣ Financial Analyst

Audits fuel spend

Calculates ROI

Exports reports

🏗 System Architecture

Frontend: React + Tailwind CSS
Backend: Node.js + Express
Database: PostgreSQL
Authentication: JWT + bcrypt
Real-Time Updates: Socket.io

📂 Project Structure
fleetflow/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
📊 Core Modules
🔐 1. Authentication & RBAC

Features:

Email & Password login

JWT token authentication

Role-based access control

Password hashing using bcrypt

Rules:

Unauthorized users cannot access protected routes

Role-based middleware restricts access to modules

Expired tokens invalidate sessions

📊 2. Command Center (Dashboard)

KPIs:

Active Fleet Count

Vehicles In Maintenance

Fleet Utilization %

Pending Cargo Assignments

Filters:

Vehicle Type

Region

Status

Purpose:
Provides high-level operational visibility.

🚘 3. Vehicle Registry (Asset Management)

CRUD Operations:

Add Vehicle

Update Vehicle

Retire Vehicle

Delete Vehicle

Fields:

Name / Model

License Plate (Unique)

Max Load Capacity

Odometer

Status

Status Types:

Available

On Trip

In Shop

Retired

🚦 4. Trip Dispatcher & Management

Workflow Lifecycle:

Draft → Dispatched → Completed → Cancelled
Validation Rules

Cargo weight must not exceed max capacity:

if (cargoWeight > vehicle.maxCapacity) reject

Vehicle must not be:

On Trip

In Shop

Retired

Driver must:

Have valid (non-expired) license

Be On Duty

Not be Suspended

Upon Dispatch:

Vehicle status → On Trip

Driver status → On Trip

Upon Completion:

Vehicle status → Available

Driver status → Available

🔧 5. Maintenance & Service Logs

Purpose:
Preventive and reactive vehicle health tracking.

Logic:

Adding maintenance log automatically sets vehicle status:

status = "In Shop"

Vehicle becomes unavailable for dispatch.

Completing maintenance restores:

status = "Available"
⛽ 6. Expense & Fuel Logging

Track:

Fuel liters

Fuel cost

Maintenance cost

Date

Calculations

Fuel Efficiency:

kmDriven / litersUsed

Total Operational Cost:

Fuel Cost + Maintenance Cost

Cost per KM:

Total Cost / KM Driven
👤 7. Driver Performance & Safety

Track:

License expiry date

Safety score

Trip completion rate

Status (On Duty / Off Duty / Suspended)

Assignment is blocked if:

License expired

Driver suspended

Driver off duty

📈 8. Operational Analytics

Metrics:

Fuel Efficiency:

Total KM / Total Liters

Vehicle ROI:

(Revenue - (Maintenance + Fuel)) / Acquisition Cost

Export Options:

CSV export

PDF report generation

🗄 Database Schema (Relational)
vehicles

id (Primary Key)

name

license_plate (Unique)

max_capacity

odometer

status

drivers

id (Primary Key)

name

license_expiry

safety_score

status

trips

id (Primary Key)

vehicle_id (Foreign Key)

driver_id (Foreign Key)

cargo_weight

start_location

end_location

status

expenses

id (Primary Key)

vehicle_id (Foreign Key)

fuel_cost

maintenance_cost

date

🚀 Step-by-Step Development Guide
✅ STEP 1 – Environment Setup

Create frontend using Vite

Install Tailwind

Create backend with Express

Setup PostgreSQL database

Configure environment variables

Connect backend to DB

✅ STEP 2 – Authentication System

Create users table

Build register API

Build login API

Hash passwords with bcrypt

Generate JWT tokens

Create auth middleware

Create role-based middleware

✅ STEP 3 – Vehicle Module

Create CRUD APIs

Implement unique validation

Build frontend data table

Add status badge component

✅ STEP 4 – Driver Module

Create CRUD APIs

Add license expiry validation

Implement duty status toggle

Block dispatch if expired

✅ STEP 5 – Trip Module

Trip creation form

Filter available vehicles

Filter eligible drivers

Implement capacity validation

Update statuses automatically

Implement lifecycle transitions

✅ STEP 6 – Maintenance Module

Create service log table

Auto update vehicle status

Create maintenance history view

✅ STEP 7 – Expense & Financial Module

Create expense APIs

Link expenses to vehicle

Implement cost calculations

Display analytics charts

✅ STEP 8 – Dashboard KPIs

Write aggregate SQL queries

Fetch utilization rate

Display KPI cards

Add filters

✅ STEP 9 – Real-Time Updates (Optional)

Integrate Socket.io

Emit events on:

Trip dispatch

Trip completion

Maintenance log

Update dashboard dynamically

✅ STEP 10 – Export Features

Generate CSV from backend

Generate PDF reports

Add export button in UI

🔐 Security Guidelines

Validate inputs on both frontend & backend

Never trust client-side validation

Use environment variables for secrets

Protect all sensitive routes

Hash all passwords

Use proper HTTP status codes

⚡ Hackathon Development Strategy
If 24 Hours

Build:

Auth

Vehicles

Drivers

Trips

Maintenance

Dashboard KPIs

Skip:

Advanced analytics

Real-time

Export

If 48–72 Hours

Add:

Financial analytics

CSV/PDF exports

Real-time updates

UI enhancements

Advanced reporting

🏆 Why FleetFlow Stands Out

Real-world business logic

Automated workflow transitions

Strict validation rules

Financial tracking per asset

Role-based security

Scalable modular architecture

This is not just a CRUD application —
It is a workflow-driven operational system.

🔮 Future Enhancements

GPS live tracking

Route optimization

Predictive maintenance

AI-based fuel forecasting

Multi-warehouse support

Mobile companion app

📌 Final Notes

FleetFlow is built to simulate a real enterprise logistics system with:

Stateful transitions

Compliance checks

Relational integrity

Financial accountability

Operational intelligence

During demonstration:

Showcase rule validations

Show automatic status updates

Highlight financial metrics

Demonstrate lifecycle transitions clearly