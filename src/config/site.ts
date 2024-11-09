import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title:
    "Optimized Website Building Blog",
  description:
    "Our fast and reliable index support system enhances search engine rankings and drives more organic traffic to your site for sustained growth.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "URL Utilities",
    slug: "url-utilities",
    tools: [
      {
        title: "Shorten Your URL",
        desc: "Convert lengthy URLs into short, manageable links that are easier to share, track, and analyze.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Generator",
        desc: "Create custom QR codes for any URL to make sharing links faster and more convenient for users via smartphones.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Analytics Dashboard",
        desc: "Track and analyze the traffic and performance of your shortened URLs to understand user behavior and engagement.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "Image Editing Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Image Compression Tool",
        desc: "Compress images to reduce file size, ensuring faster page load times without sacrificing visual quality.",
        href: "https://review360.info",
      },
      {
        title: "Convert Image Types",
        desc: "Easily convert image files between different formats (JPEG, PNG, WebP, and more) to fit your website’s needs.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Effortlessly upload your images to a cloud service, providing reliable, global access and quicker image delivery.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Resize Images Online",
        desc: "Adjust your images’ dimensions quickly to ensure they are perfectly sized for your website, blog, or social media.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Online Image Cropper",
        desc: "Trim your images to the precise size or aspect ratio that best fits your design or content requirement.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Add Watermark to Images",
        desc: "Insert a text or image watermark on your photos to protect your copyright and brand identity from unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
    ],
  },
  {
    title: "Text Analysis Tools",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare two pieces of text side-by-side to highlight differences and identify changes in documents or revisions.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Easily count the number of words, characters, and sentences in your text to meet specific word limits or guidelines.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "SEO Optimization Tools",
    slug: "seo-tools",
    tools: [
      {
        title: "URL Redirect Checker",
        desc: "Examine the redirection path of any URL, ensuring there are no broken links or incorrect redirects that could harm SEO.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Index Verification",
        desc: "Check whether your website URLs are indexed by Google and monitor the status of your site’s visibility on search engines.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Generate Backlinks",
        desc: "Create high-quality backlinks to improve your site’s SEO ranking and overall search engine visibility.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Website Security Test",
        desc: "Analyze your website for security vulnerabilities, helping to identify potential threats such as malware or hacking attempts.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your site as it appears in Google’s index, helping you ensure your content is correctly indexed.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Meta Tag Analyzer",
        desc: "Examine and optimize the meta tags on your website for better search engine optimization and improved visibility.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
    ],
  },
  {
    title: "Miscellaneous Tools",
    slug: "utility-tools",
    tools: [
      {
        title: "Strong Password Generator",
        desc: "Create random, secure passwords that combine uppercase, lowercase, numbers, and symbols to ensure online security.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Invoice Generator Tool",
        desc: "Generate professional-looking invoices for your business, including details such as client information, service breakdowns, and payment terms.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Find Your Public IP",
        desc: "Discover your device’s public IP address in both IPv4 and IPv6 formats, useful for network setups or troubleshooting.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Browser Update Check",
        desc: "Check if your browser is up-to-date with the latest versions, ensuring better performance and security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Online Code Formatter",
        desc: "Format your HTML, CSS, JavaScript, or JSON code for easier reading, better organization, and smoother collaboration.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
];
