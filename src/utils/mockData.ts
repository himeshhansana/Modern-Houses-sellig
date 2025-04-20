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
    images: [
      "/image.png",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600607687126-8a3bfb8d8094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b5063c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
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
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    amenities: ["Courtyard Pool", "Outdoor Fireplace", "Casita", "Desert Landscaping", "Solar Power"]
  }
];
