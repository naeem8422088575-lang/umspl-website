export interface MarineService {
  title: string;
  desc: string;
  points?: string[];
}

export const marineServices: MarineService[] = [
  {
    title: "Crew Management Services",
    desc: "Full lifecycle maritime crew solutions including rigorous testing, validation, and performance tracing systems.",
    points: [
      "Dynamic verification of STCW credentials", 
      "Global marine visa and medical alignment", 
      "High-efficiency route coordination and travel staging"
    ]
  },
  {
    title: "Ship Management Services",
    desc: "Comprehensive operational monitoring systems keeping oceanic vessels structural, functional, and fully optimized.",
    points: [
      "Strict implementation of ISM/ISPS codes", 
      "Continuous technical status documentation", 
      "Preventative maintenance pipelines"
    ]
  },
  {
    title: "Ship Chandling & Stores",
    desc: "Premium provision streams, deck supplies, and engine room spare provisioning across key global port grids.",
    points: [
      "Fresh, high-grade provision channels", 
      "Direct anchorage logistical deployment", 
      "Standardized supply contract terms"
    ]
  },
  {
    title: "Technical Management Services",
    desc: "End-to-end technical oversight of vessel machinery, hull integrity, and compliance systems to maximise operational uptime and asset longevity.",
    points: [
      "Planned maintenance system (PMS) implementation",
      "Dry-docking project management and specification",
      "Condition monitoring and performance analysis",
      "Regulatory compliance with class and flag state"
    ]
  }
];