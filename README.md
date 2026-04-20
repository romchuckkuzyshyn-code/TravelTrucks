# TravelTrucks

TravelTrucks is a frontend web application for a camper rental company. The project was built as a study assignment using Next.js and TypeScript.

## Description

The application allows users to browse available campers, filter them in the catalog, open a detailed page for a selected camper, view reviews, and send a booking request.

## Main Features

- Home page with hero section
- Campers catalog page
- Filtering by:
  - location
  - camper form
  - engine type
  - transmission type
- Load More pagination
- Camper details page
- Image gallery
- Reviews section
- Booking form
- Notification after successful booking

## Technologies

- Next.js
- React
- TypeScript
- TanStack Query
- Swiper
- React Toastify
- CSS Modules

## Getting Started

### Install dependencies

npm install

### Create environment variables file

Create a `.env.local` file in the root of the project and add:

NEXT_PUBLIC_API_BASE_URL=https://campers-api.goit.study

### Run the project

npm run dev

### Open in browser

http://localhost:3000

## Scripts

npm run dev  
npm run build  
npm run start  
npm run lint

## Project Structure

app/  
 catalog/  
 [camperId]/  
 layout.tsx  
 page.tsx

components/  
 BookingForm/  
 CamperDetailsCard/  
 CamperGallery/  
 CampersList/  
 FiltersSidebar/  
 Header/  
 Hero/  
 Loader/  
 ReviewsList/  
 TanStackProvider/

lib/  
 api.ts

types/  
 campersType.ts

## Pages

/ — Home page  
/catalog — Campers catalog page  
/catalog/[camperId] — Camper details page

## Author

Roman Kuzyshyn
