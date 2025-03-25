# Prime Erie Rentals
#### Video Demo: https://youtube.com

## Project Overview
This website serves as the digital presence for Prime Erie Rentals, a property management company specializing in rental properties near LECOM and Presque Isle in Erie, Pennsylvania. The platform features an automated waitlist system, real-time property listings, and integrated email notifications for prospective tenants.

The project was developed to solve several real problems for both property management and potential tenants:
- Streamlining the property discovery process
- Automating the waitlist management system
- Providing immediate feedback to interested tenants
- Centralizing property information and availability status

## Technical Architecture
The project utilizes React with TypeScript for the frontend, Supabase for the backend database and real-time functionality, and Resend for automated email communications. This architecture was chosen to provide a responsive, real-time experience while maintaining scalability and ease of maintenance.

### Frontend Architecture
- **React**: Chosen for its component-based architecture allowing for reusable UI elements
- **TypeScript**: Implemented to provide type safety and improve code maintainability
- **React Router**: Used for client-side routing to create a seamless single-page application experience
- **CSS Modules**: Employed for component-specific styling to prevent style leakage

### Backend Services
- **Supabase**: Provides database, authentication, and real-time capabilities
- **Resend**: Handles email delivery with high deliverability rates
- **Vercel**: Used for deployment with seamless integration to GitHub

### File Structure and Functionality

#### Core Components
- `App.tsx`: The main application component that:
  - Sets up routing with React Router
  - Manages global state through Context API
  - Initializes Supabase client and authentication listener
  - Orchestrates the overall layout using component composition

- `Navbar.tsx`: Navigation component providing consistent header across pages
  - Implements responsive design with mobile hamburger menu
  - Handles authentication state display
  - Provides contextual navigation options based on user role
  - Uses CSS transitions for smooth interactive elements

- `PropertyCard.tsx`: Reusable component displaying individual property listings with image carousel
  - Implements image lazy loading for performance optimization
  - Uses CSS Grid for responsive layout
  - Contains property details formatting logic
  - Handles availability status with visual indicators
  - Implements carousel navigation with touch support

- `WaitlistForm.tsx`: Handles user signup process with form validation and submission
  - Implements real-time form validation with error messaging
  - Uses controlled components for form state management
  - Handles form submission with loading states
  - Provides success/error feedback to users
  - Integrates with Supabase for data persistence

#### Page Components

- `PropertyDetailPage.tsx`: Detailed view for individual properties:
  - Full image gallery with lightbox functionality
  - Detailed property specifications
  - Availability calendar
  - Contact form specific to the property
  - Location map integration

#### Database Integration
- `supabase.ts`: Configuration and client setup for Supabase connection
  - Sets up authentication listeners
  - Configures real-time subscriptions
  - Initializes database client with appropriate permissions
  - Handles error states and reconnection logic

- `create_welcome_email_trigger.sql`: Database trigger for automated email notifications
  - Executes upon new waitlist entry creation
  - Handles edge cases and error conditions
  - Implements retry logic for failed email attempts
  - Logs communication events for audit purposes

- `notify_waitlist_signup.sql`: SQL function handling email payload construction
  - Formats user data for email templates
  - Implements personalization logic
  - Constructs appropriate JSON payload for Resend API
  - Implements sanitization for security

#### API Integration

- `send-email.js`: Service for email functionality:
  - Resend API integration
  - Had to make it a JS file due to limitations

## Codebase Context
The codebase follows a structured architectural pattern with clear separation of concerns:

### Architectural Pattern
- **MERN Stack**: Following best practices with clean separation of concerns
- **Component Structure**: Using functional components with React hooks over class components
- **API Design**: RESTful endpoints following resource-based naming conventions
- **Error Handling**: Implementing try/catch patterns and returning meaningful error messages
- **Security**: Sanitizing all user inputs and implementing proper authentication checks

### Code Generation Preferences
- TypeScript is used throughout the project
- JSDoc comments are included for all functions
- Component naming follows the pattern: `[Name]Component.tsx`
- Service modules follow the naming pattern: `[name]Service.js`

### Project-Specific Terminology
- **Property**: A rental unit managed in the system
- **Tenant**: An individual renting a property
- **Owner**: A person who owns one or more properties
- **Lease**: A contract between tenant and owner
- **Maintenance Request**: A service request submitted by a tenant

## Design Decisions and Challenges

### Automated Email System Architecture
The system implements a hybrid approach for email notifications:

1. **Database Insertion + Direct API Call**: The WaitlistForm component:
   - Inserts new email records into Supabase
   - Directly calls the send-email API endpoint after successful database insertion
   - Provides immediate user feedback regardless of email status

2. **Redundant SQL Triggers**: As a fallback mechanism, SQL triggers can also initiate email notifications:
   - Executes upon new waitlist entry creation
   - Provides redundancy in case the direct API call fails
   - Ensures no signups are missed even if client-side operations fail

This dual approach ensures reliability while maintaining a responsive user experience. The direct API call provides immediate confirmation, while the database triggers serve as a safety net. The Databse triggers are still a little buggy.

### Component Architecture
PropertyCard components were designed to be fully reusable, accepting standardized property data objects. This approach:
- Maintains consistency across listings
- Simplifies future property additions
- Reduces code duplication
- Facilitates testing

A significant challenge was balancing component complexity with reusability. I decided to create more specialized components rather than highly configurable ones to improve maintainability and readability.

### Form Validation Strategy
For the WaitlistForm, I debated between:
1. Client-side validation only
2. Server-side validation only
3. Hybrid approach

I implemented a hybrid approach with immediate client-side feedback combined with server-side validation for security. This created challenges with synchronizing error states but ultimately provided the best user experience.

## Implementation Details

### Responsive Design Implementation
The site was built with a mobile-first approach, using:
- Fluid typography with relative units
- CSS Grid and Flexbox for layouts
- Media queries for breakpoint adjustments
- Touch-friendly interactive elements

## Future Enhancements
The following features are planned for future versions:
1. Online application submission
2. Tenant portal for current residents
3. Maintenance request system
4. Payment processing integration
5. Enhanced analytics for property performance

## Contributions
Used Github Copilot and ChatGPT to help develop the frontend.

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

Used Github Copilot and ChatGPT to help develop the frontend.

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