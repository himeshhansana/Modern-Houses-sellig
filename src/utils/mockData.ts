import Home1 from "../assets/home1.jpg";
import Home2 from "../assets//Home2.jpg";
import Home3 from "../assets/Home 3.jpg";
import Home4 from "../assets/Home 5.jpg";
import Home5 from "../assets/Home 6.jpg";
import Home6 from "../assets/Home 7.jpg";
import Home7 from "../assets/Home 8.jpg";
import Home8 from "../assets/Home 9.jpg";
import Home9 from "../assets/Home 10.jpg";
import Home10 from "../assets/Home 11.jpg";
import Home11 from "../assets/Home 12.jpg";


export interface Property {
  id: number; // Changed from string to number
  title: string;
  description: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  status: string;
  featured: boolean;
  images: string[];
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Villa in the Woods",
    description: "Experience the perfect harmony of nature and luxury in this stunning woodland villa. Floor-to-ceiling windows bring the outdoors in, while modern amenities ensure maximum comfort.",
    price: 2750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    location: "Aspen, Colorado",
    type: "Villa",
    status: "For Sale",
    featured: true,
    images: [Home1, Home2, Home3],
    amenities: ["Pool", "Sauna", "Home Theater", "Smart Home System", "Private Garden"]
  },
  {
    id: 2,
    title: "Luxury Lakefront Estate",
    description: "Breathtaking views meet unparalleled luxury in this lakefront property. Featuring a private dock, infinity pool, and expansive outdoor entertaining areas.",
    price: 4500000,
    bedrooms: 6,
    bathrooms: 5,
    area: 5600,
    location: "Lake Tahoe, Nevada",
    type: "Estate",
    status: "For Sale",
    featured: true,
    images: [Home4, Home5, Home6],
    amenities: ["Infinity Pool", "Private Dock", "Wine Cellar", "Gym", "Guest House"]
  },
  {
    id: 3,
    title: "Contemporary Mountain Retreat",
    description: "This architectural masterpiece offers panoramic mountain views with floor-to-ceiling windows, a gourmet kitchen, and seamless indoor-outdoor living.",
    price: 3200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4100,
    location: "Park City, Utah",
    type: "Villa",
    status: "For Sale",
    featured: true,
    images: [Home7, Home8, Home9],
    amenities: ["Hot Tub", "Fireplace", "Heated Floors", "Home Office", "Ski Room"]
  },
  {
    id: 4,
    title: "Minimalist Beachfront Villa",
    description: "Clean lines and open spaces define this minimalist beachfront property. Enjoy direct beach access and stunning sunset views from your private terrace.",
    price: 3800000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    location: "Malibu, California",
    type: "Villa",
    status: "For Sale",
    featured: false,
    images: [Home10, Home11, Home1],
    amenities: ["Beachfront", "Outdoor Kitchen", "Infinity Pool", "Smart Home System", "Private Terrace"]
  },
  {
    id: 5,
    title: "Urban Luxury Penthouse",
    description: "Experience city living at its finest in this penthouse with panoramic city views, private elevator access, and a rooftop terrace perfect for entertaining.",
    price: 5200000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3000,
    location: "New York, NY",
    type: "Penthouse",
    status: "For Sale",
    featured: false,
    images: [Home2, Home3, Home4],
    amenities: ["Rooftop Terrace", "Private Elevator", "Wine Cellar", "Gym Access", "Concierge Service"]
  },
  {
    id: 6,
    title: "Desert Modern Oasis",
    description: "This architectural gem blends seamlessly with the desert landscape, featuring a courtyard pool, outdoor living spaces, and stunning mountain views.",
    price: 2900000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3400,
    location: "Scottsdale, Arizona",
    type: "Villa",
    status: "For Sale",
    featured: false,
    images: [Home5, Home6, Home7],
    amenities: ["Courtyard Pool", "Outdoor Fireplace", "Casita", "Desert Landscaping", "Solar Power"]
  }
];
