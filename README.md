
# Prime Erie Rentals
#### Video Demo: https://youtube.com

## Project Overview
This website serves as the digital presence for Prime Erie Rentals, a property management company specializing in rental properties near LECOM and Presque Isle in Erie, Pennsylvania. The platform features an automated waitlist system, real-time property listings, and integrated email notifications for prospective tenants.

## Technical Architecture
The project utilizes React with TypeScript for the frontend, Supabase for the backend database and real-time functionality, and Resend for automated email communications. This architecture was chosen to provide a responsive, real-time experience while maintaining scalability and ease of maintenance.

### File Structure and Functionality

#### Components
- `Navbar.tsx`: Navigation component providing consistent header across pages
- `PropertyCard.tsx`: Reusable component displaying individual property listings with image carousel
- `WaitlistForm.tsx`: Handles user signup process with form validation and submission

#### Database Integration
- `supabase.ts`: Configuration and client setup for Supabase connection
- `create_welcome_email_trigger.sql`: Database trigger for automated email notifications
- `notify_waitlist_signup.sql`: SQL function handling email payload construction

#### Core Features
The `App.tsx` serves as the main component, organizing the layout and managing state for:
- Property listings display
- Waitlist form integration
- Contact information
- Location details

## Design Decisions

### Real-time Updates
We implemented Supabase's real-time functionality to ensure immediate synchronization between the database and client. This decision was made to provide users with the most current property availability status without requiring page refreshes.

### Automated Email System
The decision to implement automated welcome emails using SQL triggers rather than client-side logic provides several benefits:
1. Reliability - emails trigger directly from database events
2. Reduced complexity in frontend code
3. Better separation of concerns
4. Improved maintainability

### Component Architecture
PropertyCard components were designed to be fully reusable, accepting standardized property data objects. This approach:
- Maintains consistency across listings
- Simplifies future property additions
- Reduces code duplication
- Facilitates testing

## About
Prime Erie Rentals provides quality housing options near LECOM and Presque Isle. Our properties are carefully maintained and selected for their prime locations.

## Available Properties
- Single Family Homes
- Properties near LECOM
- Convenient Millcreek locations

## Contact
Visit [primeerierentals.com](https://primeerierentals.com) to:
- View available properties
- Join our waitlist
- Request property information

## Location
We serve the greater Erie area, with a focus on Millcreek Township and properties near medical campuses.