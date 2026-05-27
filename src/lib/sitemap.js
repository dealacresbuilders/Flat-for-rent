import axios from "axios";
import { locations } from "@/data/locations";

// 🔥 SLUG FUNCTION
const createSlug = (location) => {
  return location
    .replace(", Faridabad", "")
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const currentDate =
    new Date().toISOString();

export async function generateSitemap() {
  const baseUrl =
    "https://www.flatforrentinfaridabad.com";

  const apiDomain =
    "www.flatforrentinfaridabad.com";

  // ================= STATIC URLS =================
  const staticUrls = `
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/about</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/contact</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/blog</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/how-it-works</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/listing/1-bhk-flat-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/listing/2-bhk-flat-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/listing/3-bhk-flat-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod>
    </url>

    <url>
      <loc>${baseUrl}/listing/4-bhk-flat-for-rent-faridabad</loc>
      <lastmod>${currentDate}</lastmod>
    </url>
  `;

  // ================= BLOG URLS =================
 // ================= BLOG URLS =================
let blogUrls = [];

try {
  const res = await axios.get(
    `https://deal-acres-backend.onrender.com/newBlog/getSlugsByDomain/${apiDomain}`
  );

  

  // 🔥 RESPONSE HANDLE
  const slugs =
    res.data?.data ||
    res.data?.blogs ||
    res.data ||
    [];

  blogUrls = slugs.map((item) => {
    // Agar object hai
    const slug =
      typeof item === "string"
        ? item
        : item.slug;

    return `
      <url>
        <loc>${baseUrl}/blog/${slug}</loc>
      <lastmod>${currentDate}</lastmod>
      </url>
    `;
  });

} catch (err) {
  console.error(
    "Blog Sitemap Fetch Error:",
    err.message
  );
}

  // ================= LOCATION URLS =================
  const locationUrls = locations.map(
    (loc) => {
      const slug = createSlug(loc);

      return `
        <url>
          <loc>
            ${baseUrl}/flat-for-rent-in-${slug}-faridabad
          </loc>
      <lastmod>${currentDate}</lastmod>
        </url>
      `;
    }
  );

  // ================= ALL URLS =================
  const allUrls = [
    staticUrls,
    ...locationUrls,
    ...blogUrls,
  ].join("\n");

  // ================= XML =================
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${allUrls}

</urlset>`;
}