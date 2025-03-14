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

- `Footer.tsx`: Provides consistent footer across all pages
  - Contains contact information and social media links
  - Implements responsive layout for various screen sizes
  - Includes copyright and legal information

#### Page Components
- `HomePage.tsx`: Landing page featuring:
  - Hero section with call-to-action
  - Featured properties section
  - Company overview
  - Testimonials carousel

- `PropertiesPage.tsx`: Comprehensive listing page that:
  - Implements filtering and sorting options
  - Renders PropertyCard components dynamically
  - Handles loading and error states
  - Implements pagination for large property sets

- `PropertyDetailPage.tsx`: Detailed view for individual properties:
  - Full image gallery with lightbox functionality
  - Detailed property specifications
  - Availability calendar
  - Contact form specific to the property
  - Location map integration

- `ContactPage.tsx`: Dedicated contact interface:
  - General inquiry form
  - Office location with map
  - Business hours information
  - Alternative contact methods

- `WaitlistPage.tsx`: Specialized page for waitlist management:
  - Integration of WaitlistForm component
  - Information about the waitlist process
  - FAQ section regarding waitlist policies

#### Utility Files
- `types.ts`: Contains TypeScript interfaces and types for:
  - Property data structures
  - User profiles
  - Form states
  - API responses

- `utils.ts`: Helper functions for:
  - Date formatting
  - Form validation
  - Data transformation
  - URL handling

- `constants.ts`: Application constants including:
  - API endpoints
  - Configuration values
  - Feature flags
  - Static content

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
- `api.ts`: Centralized API handling for:
  - Property data fetching
  - Waitlist submissions
  - User authentication
  - Error handling and retry logic

- `emailService.ts`: Service for email functionality:
  - Template selection logic
  - Resend API integration
  - Email queue management
  - Delivery status tracking

## Design Decisions and Challenges

### Real-time Updates vs. Polling
I debated between implementing polling for updates and using Supabase's real-time functionality. The decision to use real-time updates was based on:
1. Better user experience with immediate updates
2. Reduced server load compared to frequent polling
3. Simpler client-side implementation
4. Lower latency for critical information changes

However, this approach presented challenges with:
- Managing subscription cleanup to prevent memory leaks
- Handling offline scenarios gracefully
- Ensuring consistent state across multiple connected clients

### Automated Email System Architecture
The decision to implement automated welcome emails using SQL triggers rather than client-side logic provides several benefits:
1. Reliability - emails trigger directly from database events
2. Reduced complexity in frontend code
3. Better separation of concerns
4. Improved maintainability

During development, I considered a queue-based system for emails but opted for direct triggers due to the relatively low volume of expected waitlist signups and the simplicity of implementation.

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

### Database Schema
The database design implements relationships between:
- Properties (with metadata, images, availability)
- Waitlist entries (with user preferences and contact info)
- Users (for staff accounts with management permissions)

Indexes were created to optimize property searches and waitlist queries, balancing query performance with write efficiency.

### Authentication Flow
I implemented a simplified authentication flow for property managers that:
1. Uses email-based magic links for passwordless login
2. Sets appropriate session duration
3. Implements role-based permissions
4. Handles session expiration gracefully

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

## Location
We serve the greater Erie area, with a focus on Millcreek Township and properties near medical campuses.