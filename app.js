import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet"; // Security
import compression from "compression"; // Performance
import rateLimit from "express-rate-limit"; // DDoS Protection
import { servers, hardwareServices } from "./data/inventory.js";
import { services, team } from "./data/services.js";

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security: We must configure Content Security Policy (CSP) to allow images from Unsplash and fonts from Google.
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"], // Allow your inline scripts
            styleSrc: [
                "'self'",
                "'unsafe-inline'",
                "https://fonts.googleapis.com",
            ],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
            connectSrc: ["'self'"],
        },
    })
);

// Performance: Compression
app.use(compression());

// Security: Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Configure Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Browser Caching for Static Files
app.use(
    express.static(path.join(__dirname, "public"), {
        maxAge: "1d",
        etag: false,
    })
);

// Routes
app.get("/", (req, res) => {
    res.render("index", {
        title: "AI India Innovation | High Performance Compute",
        description:
            "India's premier AI infrastructure provider. Rent NVIDIA H100 clusters and build custom AI solutions securely.",
        path: "/", // For canonical URL
        message: "Infrastructure First, Intelligence Second",
    });
});

app.get("/rentals", (req, res) => {
    res.render("rentals", {
        title: "GPU Rentals & Server Inventory | AI India",
        description:
            "Rent NVIDIA A100 & H100 GPUs in India. Zero Capex, immediate deployment, and full data sovereignty.",
        path: "/rentals",
        inventory: servers,
        services: hardwareServices,
    });
});

app.get("/services", (req, res) => {
    res.render("services", {
        title: "AI Development Services | AI India",
        description:
            "Custom LLM training, document digitization, and secure on-premise AI software development.",
        path: "/services",
        services: services,
        team: team,
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact Us | AI India",
        description:
            "Get a quote for GPU clusters or discuss your custom AI software requirements.",
        path: "/contact",
    });
});

// Middleware for Error Handling: Custom 404 Page
// This middleware runs if no route above matched the request.
app.use((req, res, next) => {
    res.status(404).render("404", {
        title: "404 - System Offline",
        description: "Page not found.",
        path: req.url,
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running! Open http://localhost:${PORT}`);
});

// For Vercel Deployment
export default app;
