export type Service = {
  key: string;
  title: string;
  blurb: string;
  bullets?: string[];
  icon?: string;
};

export const services: Service[] = [
  { key: 'event-management', title: 'Event Management', blurb: 'All types of events & parties, end-to-end planning and execution.', icon: '🎉' },
  { key: 'cleaning', title: 'Cleaning (Home/Office/Shop)', blurb: 'Deep cleaning, carpet cleaning, sanitization by professionals.', icon: '🧹' },
  { key: 'manpower', title: 'Part-time Manpower', blurb: 'Cleaners, waiters, security guards, bouncers on demand.', icon: '👷' },
  { key: 'promoters', title: 'Promoters for Marketing', blurb: 'Leaflet & visiting card distribution with reporting.', icon: '📢' },
  { key: 'loading', title: 'Loading & Unloading', blurb: 'Skilled helpers for logistics and material handling.', icon: '📦' },
  { key: 'invigilators', title: 'Invigilators', blurb: 'Exam duty & interview management staff.', icon: '📝' },
  { key: 'car-wash', title: 'Car Washing (Door-to-Door)', blurb: 'On-site car wash with eco-friendly products.', icon: '🚗' },
  { key: 'packing-moving', title: 'Packing & Movers', blurb: 'Courier, packing & moving with safe handling.', icon: '🚚' },
  { key: 'gardening', title: 'Gardening Services', blurb: 'For homes, offices & parks with AMC options.', icon: '🌿' },
  { key: 'printing', title: 'Printing Work', blurb: 'Flex, banners, standees, leaflets, OMR, brochures, bottles, diaries, pens, T-shirts, branding & hoardings.', icon: '🖨️' },
  { key: 'ac-services', title: 'AC Services', blurb: 'Installation, servicing & repairs for homes & offices.', icon: '❄️' },
  { key: 'electrical-plumbing', title: 'Electrician & Plumber', blurb: 'On-call repairs, installation & maintenance.', icon: '🔧' }
];
