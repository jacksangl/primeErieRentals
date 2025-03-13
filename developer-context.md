- **Architectural Pattern**: Follow MERN stack best practices with clean separation of concerns
- **Component Structure**: Use functional components with React hooks over class components
- **State Management**: Prefer Redux for global state, React Context for mid-level state, and local state for component-specific data
- **API Design**: RESTful endpoints following resource-based naming conventions
- **Error Handling**: Implement try/catch patterns and return meaningful error messages
- **Security**: Sanitize all user inputs, implement proper authentication checks

### Code Generation Preferences
- Write TypeScript when possible
- Use async/await over Promise chains
- Include JSDoc comments for all functions
- Follow component naming pattern: `[Name]Component.tsx` for components
- Follow service naming pattern: `[name]Service.js` for service modules
- Implement proper form validation using Formik and Yup

### Project-Specific Terminology
- **Property**: A rental unit managed in the system
- **Tenant**: An individual renting a property
- **Owner**: A person who owns one or more properties
- **Lease**: A contract between tenant and owner
- **Maintenance Request**: A service request submitted by a tenant