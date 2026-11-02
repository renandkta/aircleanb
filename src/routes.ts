import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('airbnb-cleaning', 'routes/airbnb-cleaning.tsx'),
  route('office-cleaning', 'routes/office-cleaning.tsx'),
  route('post-construction-cleaning', 'routes/post-construction-cleaning.tsx'),
  route('upholstery-mattress-cleaning', 'routes/upholstery-mattress-cleaning.tsx'),
  route('services', 'routes/services.tsx'),
  route('pricing', 'routes/pricing.tsx'),
  route('about', 'routes/about.tsx'),
  route('privacy', 'routes/privacy.tsx'),
  route('terms', 'routes/terms.tsx'),
  route('thank-you', 'routes/thank-you.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
