// data/services.js
export const services = [
    {
        id: "it-services",
        title: "Managed IT Services",
        subtitle: "// INFRASTRUCTURE_OPS",
        problem:
            "Fragmented vendor management leads to 14% higher operational costs.",
        solution:
            "End-to-end server lifecycle management. We procure, install, and maintain your on-premise hardware.",
        tech_specs: [
            "Network Architecture",
            "Server Maintenance",
            "24/7 NOC Support",
        ],
        color: "text-safety-orange",
    },
    {
        id: "ai-software",
        title: "AI-Based Software Development",
        subtitle: "// COGNITIVE_PIPELINES",
        problem:
            "Off-the-shelf AI models leak proprietary data to public clouds.",
        solution:
            "Custom LLMs trained on your isolated data. Deployed locally for maximum privacy and low latency.",
        tech_specs: ["Python/PyTorch", "Custom CUDA Kernels", "RAG Pipelines"],
        color: "text-terminal-green",
    },
    {
        id: "digitization",
        title: "Document Digitization",
        subtitle: "// ARCHIVE_SECURITY",
        problem:
            "Physical archives are unsearchable and vulnerable to environmental damage.",
        solution:
            "High-speed OCR scanning with metadata tagging. Fully compliant with Indian data privacy laws.",
        tech_specs: [
            "ISO 27001 Certified",
            "DPDP Act Compliant",
            "AES-256 Encryption",
        ],
        color: "text-gray-300",
    },
];

// We keep the team data the same
export const team = [
    {
        name: "Arjun Mehta",
        role: "Lead Systems Architect",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Priya Sharma",
        role: "AI Research Scientist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
        name: "Vikram Singh",
        role: "Data Center Ops",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
];
