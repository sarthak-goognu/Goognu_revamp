// Shared content shape for /industry/<slug> pages.
//
// Why this shape: goognu.com's real Django admin stores each industry as one
// flat, denormalized record with numbered fields per repeating section, e.g.
// (from industries/models.py + the industries-data admin JSON exports):
//
//   about_content_title1, about_content_description1,
//   about_content_title2, about_content_description2, ... title5/description5
//
//   capablities_content_title1, capablities_content_description1,
//   capablities_content_title1_icon1, ... up to slot 6
//
//   platform1_title, platform1_description, platform1_image, ... slot 4
//   include_service1_title, include_service1_description, include_service1_image, ... slot 4
//   technology1_service_title, technology1_service_description, technology1_service_image, ... slot 4
//
// Each of those is just "an ordered list of {title, description, image?}
// entries, some slots possibly empty" wearing a flat-field disguise for the
// sake of a Django admin form. IndustrySection below is that same list,
// un-disguised: a title/description pair for the section plus an `items`
// array. A future CMS import needs only a small adapter per model that reads
// title1..N / description1..N / image1..N (or icon1..N) off the raw JSON,
// drops empty slots, and pushes them into `items` in order — the section
// names (about, capabilities, platforms, services, technologies) map 1:1
// onto the Django field prefixes, so the mapping is mechanical, not a
// redesign.
//
// Nothing here fetches or parses JSON at runtime. For now every industry's
// content lives in its own `src/app/industry/<slug>/content.ts`, populated
// by hand from the industries-data admin exports. When the CMS exists, that
// file per industry is replaced by a fetch keyed on `slug` returning this
// exact same IndustryPageContent shape — the page.tsx components don't
// change.

export type IndustryContentItem = {
  title: string;
  description?: string;
  /** Relative image path as stored by Django, e.g. "industry/ecommerce/platform1.png". Optional — most icon-only slots have none. */
  image?: string;
};

export type IndustrySection = {
  title: string;
  description?: string;
  items: IndustryContentItem[];
};

export type IndustryFaqItem = { question: string; answer: string };

export type IndustryPageContent = {
  slug: string;
  title: string;
  description: string;
  /** Relative image path from the banner_image field, if we have a real asset for it. */
  bannerImage?: string;

  /** Django: about_title / about_description / about_image / about_content_title1..N (naming varies per model — this is the conventional "what we do" section). */
  about?: IndustrySection & { image?: string };

  /** Django: capablities_title / capablities_description / capablities_content_title1..N */
  capabilities?: IndustrySection;

  /** Django: platform_title / platform_description / platform1..N */
  platforms?: IndustrySection;

  /** Django: include_services_title / include_services_description / include_service1..N */
  services?: IndustrySection;

  /** Django: technology_title / technology_description / technologyN_service */
  technologies?: IndustrySection;

  /**
   * Escape hatch: some industry models have additional repeating sections
   * beyond the five conventional ones above (naming genuinely differs per
   * Django model — each industry is its own model, see industries/models.py).
   * Use this for anything that doesn't cleanly map to about/capabilities/
   * platforms/services/technologies, keeping the same {title, description,
   * items} shape so the adapter story stays identical.
   */
  extraSections?: IndustrySection[];

  /** Django: FAQ model, filtered by service_slug */
  faqs?: IndustryFaqItem[];
};
