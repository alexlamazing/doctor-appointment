# Doctor Appointment System

Live demo: https://doctor-appointment-virid-six.vercel.app/

Doctor Appointment System is a doctor booking web app, bootstrap with [create-next-app](https://www.npmjs.com/package/create-next-app)

### Prerequisite

- `node` (>= 20.17)
- `yarn` (>= 1.22.22)

### Getting Started

```bash
# to install dependencies
> yarn
# to start dev environment, ready at localhost:3000
> yarn dev
```

### Tech Stack and Libraries

- `react` & `Next.js`

- `zustand`

  - to manage the app's state in a single place
  - changes in the app will be more predictable by the mechanism

- `react-query`

  - to handle data fetching more efficiently
  - it makes fetching, caching, synchronizing and updating server state in your web applications a breeze

- `Tailwind CSS`

  - to style the components with CSS classes

- `ramda`

  - to handle data in an immutable way

- `date-fns`

  - to handle date/time related stuff more easily

## Potential improvement

- Form validation
  - to validate user's input eg name
- Create skeleton for UI components
  - for better UX
- Create an error page
  - in case the user request an invalid resource, redirect the user to the error page
- PWA
  - User can access to the app when offline
- Pagination
- Support dark theme

## Production consideration

- Caching
  - Cache the static assets to reduce server's load
- Logging and Monitoring
  - monitor application stability via third-party service eg Bugsnag
- Exposure of API key
  - User is able to see the API key via inspector, not a secure way to use API key for authentication
