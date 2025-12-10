// data/inventory.js

// 1. The 3 Core Hardware Services (Rent, Buy, Build)
export const hardwareServices = [
    {
        title: "IT Rental Services",
        type: "[ RENT ]",
        description:
            "Flexible opex models. Monthly rentals for NVIDIA A100/H100 clusters.",
        details: "Zero capex. Immediate deployment.",
    },
    {
        title: "Server Procurement",
        type: "[ BUY ]",
        description: "Direct sourcing of high-performance compute hardware.",
        details: "Import logistics & customs clearance handled.",
    },
    {
        title: "Data Center Setup",
        type: "[ BUILD ]",
        description: "End-to-end design of on-premise server rooms.",
        details: "Cooling, power redundancy, and cabling.",
    },
];

// 2. The Specific Inventory List (for the calculator)
export const servers = [
    {
        id: "nvidia-a100",
        name: "NVIDIA A100 Cluster",
        specs: "8x A100 80GB | 2TB RAM | 100Gbps",
        priceHourly: 450,
        status: "Available Now",
        type: "training",
    },
    {
        id: "nvidia-h100",
        name: "NVIDIA H100 SuperPOD",
        specs: "8x H100 80GB | 4TB RAM | 400Gbps",
        priceHourly: 850,
        status: "Waitlist",
        type: "training",
    },
    {
        id: "rtx-4090",
        name: "RTX 4090 Farm",
        specs: "4x RTX 4090 24GB | 256GB RAM",
        priceHourly: 120,
        status: "Available Now",
        type: "rendering",
    },
];
