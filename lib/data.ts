/* ─────────────────────────────────────────
   Design Tokens
   ───────────────────────────────────────── */
export const C = {
  noir: "#1E1E1E",
  ink: "#2D2A26",
  graphite: "#5C564E",
  stone: "#8A8279",
  warmGray: "#B5AFA6",
  sand: "#E8E2D8",
  cream: "#F4F0EA",
  parchment: "#FAF8F4",
  white: "#FFFFFF",
  bronze: "#9A7B4F",
  bronzeLight: "#BFA06A",
  bronzeMuted: "rgba(154,123,79,0.12)",
} as const;

export const R = { sm: 12, md: 18, lg: 24, xl: 32, pill: 999 } as const;

/* ─────────────────────────────────────────
   Types
   ───────────────────────────────────────── */
export interface Service {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  items: string[];
  approach: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  area: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  services: string[];
  challenge: string;
  outcome: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  relatedProjects: string[];
}

/* ─────────────────────────────────────────
   Services Data
   ───────────────────────────────────────── */
export const services: Service[] = [
  {
    slug: "property-advisory",
    num: "01",
    title: "Property Consulting & Advisory",
    tagline: "Before we design anything, we make sure it makes sense.",
    shortDesc:
      "We evaluate the fundamentals — location, feasibility, market dynamics, and strategic fit — before any design thinking begins. This protects capital and aligns every subsequent decision with a sound investment rationale.",
    longDesc: `Property decisions are the foundation of every built-environment outcome. A poorly evaluated site, an ill-timed acquisition, or a misread market can compromise years of design and construction effort.

Our advisory practice exists to prevent that. We work with investors, developers, and private clients to rigorously assess property opportunities before a single line is drawn. This means understanding zoning, infrastructure trajectories, demographic shifts, and competitive positioning — not just price per square metre.

We conduct highest-and-best-use analyses that reveal what a site can truly support. We model development scenarios that balance ambition with commercial reality. And we provide clear, evidence-based recommendations that give our clients the confidence to commit — or the clarity to walk away.

This is not real estate brokerage. This is strategic property intelligence, delivered by a team that understands both the numbers and the built outcomes they enable.`,
    items: [
      "Property feasibility studies",
      "Site selection & land advisory",
      "Highest-and-best-use analysis",
      "Investment & development consulting",
      "Residential & commercial strategy",
    ],
    approach: [
      "Market & site due diligence",
      "Financial scenario modelling",
      "Zoning & regulatory assessment",
      "Competitive landscape mapping",
      "Strategic recommendation & reporting",
    ],
  },
  {
    slug: "architecture",
    num: "02",
    title: "Architectural & Spatial Design",
    tagline: "Form follows purpose — and purpose follows strategy.",
    shortDesc:
      "Our architectural work is rooted in the strategic decisions that precede it. Every spatial choice is justified by function, climate, context, and long-term value — not aesthetic preference alone.",
    longDesc: `Architecture is not decoration at scale. It is the translation of strategic intent into physical form — the bridge between what a property should do and how it does it.

Our approach begins with deep understanding of the brief: not just room counts and square metres, but the human behaviours, environmental forces, and economic realities that the building must respond to. We design for performance — thermal comfort, natural light, ventilation, spatial efficiency — because buildings that perform well retain value.

We work across residential, commercial, mixed-use, and hospitality typologies, bringing the same rigour to a family compound as we do to a 12-storey development. Our design coordination process ensures that structural, mechanical, and architectural systems work in harmony, reducing cost overruns and construction delays.

Sustainability is not a feature we add — it is embedded in how we think about orientation, materiality, and envelope design. Climate-responsive architecture is not a trend; it is an obligation to the places and people we build for.`,
    items: [
      "Concept architecture",
      "Space planning",
      "Building design coordination",
      "Design documentation",
      "Climate-responsive design",
    ],
    approach: [
      "Contextual & climate analysis",
      "Concept development & iteration",
      "Spatial efficiency optimisation",
      "Systems coordination",
      "Construction documentation",
    ],
  },
  {
    slug: "exterior-design",
    num: "03",
    title: "Exterior Design & Identity",
    tagline: "The first impression should last decades.",
    shortDesc:
      "A building's exterior is its public identity. We design facades, landscapes, and outdoor spaces that communicate permanence, quality, and contextual intelligence.",
    longDesc: `The exterior of a building is a statement that cannot be retracted. It defines street presence, shapes perception, and directly influences property value. Yet exterior design is often treated as an afterthought — a skin applied to a resolved structure.

We approach it differently. Facade design, landscape strategy, material selection, and outdoor spatial planning are integrated into the architectural process from day one. The result is buildings where inside and outside speak the same language.

Our facade work considers durability, maintenance cycles, thermal performance, and visual rhythm. We select materials not for fashion but for how they will age — because the best exteriors improve with time. Our landscape concepts extend the architectural narrative into the ground plane, creating outdoor rooms, thresholds, and transitional spaces that add functional value.

For developments, we design communal spaces that foster community without sacrificing privacy. For private residences, we create outdoor environments that are extensions of the interior — considered, comfortable, and enduring.`,
    items: [
      "Facade design",
      "Landscape concepts",
      "Outdoor living & communal spaces",
      "Material & finish strategy",
    ],
    approach: [
      "Facade performance analysis",
      "Material longevity assessment",
      "Landscape spatial planning",
      "Lighting & environmental design",
      "Detailing & specification",
    ],
  },
  {
    slug: "interior-design",
    num: "04",
    title: "Interior Design & Experience",
    tagline: "Interiors should work as hard as they look good.",
    shortDesc:
      "We design interiors as performance environments — spaces that support how people actually live, work, and interact, while reflecting the strategic intent of the broader project.",
    longDesc: `Interior design is often reduced to surface treatment — finishes, furniture, and colour palettes applied to completed shells. We see it as something more fundamental: the design of human experience within space.

Our interior architecture practice shapes rooms, circulation, light, and proportion before any material is selected. We consider how spaces will be used across seasons, times of day, and stages of life. The result is interiors that feel inevitable — as though no other arrangement could have been better.

For residential projects, we balance personal expression with spatial logic, creating homes that are both distinctive and deeply functional. For commercial and hospitality clients, we design interiors that reinforce brand identity, support operational efficiency, and create memorable experiences.

Material selection is a discipline, not a shopping exercise. We specify materials for tactile quality, acoustic performance, durability, and visual coherence. Every surface, fixture, and detail is chosen to serve the whole — not to make an independent statement.`,
    items: [
      "Interior architecture",
      "Residential & commercial interiors",
      "Furniture, lighting & materials",
      "Brand-aligned interior concepts",
    ],
    approach: [
      "Spatial flow & zoning",
      "Material palette development",
      "Custom furniture & joinery",
      "Lighting design strategy",
      "Procurement & installation oversight",
    ],
  },
];

/* ─────────────────────────────────────────
   Projects Data
   ───────────────────────────────────────── */
export const projects: Project[] = [
  {
    slug: "meridian-heights",
    title: "Meridian Heights",
    type: "Mixed-Use Development Concept",
    location: "Kampala, Uganda",
    year: "2025",
    area: "8,400 sqm",
    shortDesc:
      "A 12-storey commercial and residential tower study examining highest-and-best-use for a prime urban site. Stepped terraces balance density with livability.",
    longDesc: `Meridian Heights began as a property advisory engagement — the client owned a 0.4-acre plot on a major arterial road and needed clarity on what the site could support. Our feasibility analysis revealed that a pure commercial scheme would underperform relative to a mixed-use model combining ground-floor retail, four floors of office space, and seven floors of residential apartments.

The architectural concept responds to Kampala's tropical climate through deep overhangs, cross-ventilated corridors, and a stepped massing strategy that ensures every residential unit receives direct sunlight and natural ventilation. The stepped terraces create outdoor living spaces at multiple levels, breaking the monolithic tower form into a series of interconnected volumes.

The facade employs a combination of precast concrete panels and perforated metal screens, creating a play of light and shadow that changes throughout the day. Material selection prioritised locally-sourced aggregates and finishes that age gracefully in the equatorial climate.

This project demonstrates how strategic property intelligence and architectural thinking can unlock substantially more value from a constrained urban site.`,
    tags: ["Property Advisory", "Architecture", "Exterior Design"],
    services: ["property-advisory", "architecture", "exterior-design"],
    challenge:
      "Maximise development yield on a constrained urban plot while maintaining livability and responding to tropical climate conditions.",
    outcome:
      "The mixed-use model delivered 40% higher projected returns than the client's original pure-commercial brief, while creating a more resilient, diversified asset.",
  },
  {
    slug: "serene-court-villas",
    title: "Serene Court Villas",
    type: "Residential Development Concept",
    location: "Entebbe, Uganda",
    year: "2025",
    area: "12,000 sqm (24 units)",
    shortDesc:
      "24 climate-responsive villas prioritizing material honesty, cross-ventilation, and long-term value through spatial efficiency and landscape integration.",
    longDesc: `Serene Court began with a site advisory mandate — the developer had acquired a 3-acre lakeside parcel and needed a masterplan that would maximise unit count without compromising the premium positioning demanded by the location.

Our property analysis established that 24 units at a higher price point would outperform 36 units at a mid-market level, given the demographic profile and competitive landscape in Entebbe's emerging residential corridor. This insight fundamentally shaped the architectural approach.

Each villa is designed around a central courtyard that drives natural ventilation and provides private outdoor space. The orientation strategy ensures that living spaces face the prevailing breeze while bedrooms are shielded from afternoon sun. Rooflines are designed to collect rainwater for landscape irrigation, and the elevated ground floors protect against seasonal flooding.

Material selection emphasises exposed concrete block, locally-fired brick, and hardwood timber — materials that require minimal maintenance and develop character over time. The landscape masterplan preserves existing mature trees and creates a network of pedestrian paths that foster community while maintaining the privacy of each individual compound.`,
    tags: ["Architecture", "Interior Design", "Exterior Design"],
    services: ["architecture", "interior-design", "exterior-design"],
    challenge:
      "Balance premium unit yield with environmental sensitivity on a lakeside site, creating a cohesive community that respects both climate and context.",
    outcome:
      "A masterplan delivering 24 premium villas with 30% greater per-unit value than comparable developments, anchored in climate-responsive design and landscape integration.",
  },
  {
    slug: "atelier-office-campus",
    title: "Atelier Office Campus",
    type: "Corporate Space Transformation",
    location: "Nairobi, Kenya",
    year: "2024",
    area: "3,200 sqm",
    shortDesc:
      "A 3,200 sqm office campus study centered on brand-aligned spatial narratives, modular workzones, and biophilic design for employee wellbeing.",
    longDesc: `Atelier was commissioned by a technology company seeking to consolidate three separate office locations into a single campus that could support 200 employees while reinforcing their brand values of collaboration, innovation, and transparency.

Our interior architecture approach began with behavioural research — understanding how the company's teams actually work, meet, and socialise. This revealed that 60% of productive interactions happened informally, outside of scheduled meetings. The spatial strategy was designed around this insight: creating a gradient of spaces from focused individual work through collaborative team zones to open social areas.

The material palette draws from the East African landscape — warm timbers, natural stone, woven textiles, and living plant walls that improve air quality and acoustic comfort. The colour strategy is intentionally restrained, allowing the materials themselves to provide visual warmth and texture.

Modular furniture systems allow teams to reconfigure their zones as projects evolve, while fixed architectural elements — the library, the central staircase, the rooftop terrace — provide permanence and identity. Lighting design follows circadian principles, with colour temperature shifting throughout the day to support natural energy rhythms.`,
    tags: ["Interior Design", "Architecture"],
    services: ["interior-design", "architecture"],
    challenge:
      "Consolidate three offices into one cohesive campus that supports both focused work and spontaneous collaboration for 200 employees.",
    outcome:
      "A workplace design that reduced the company's real estate footprint by 25% while increasing employee satisfaction scores and supporting their brand narrative.",
  },
];

/* ─────────────────────────────────────────
   Journal / Blog Data
   ───────────────────────────────────────── */
export const articles: Article[] = [
  {
    slug: "highest-and-best-use-analysis",
    title: "Why Highest-and-Best-Use Analysis Should Precede Every Design Decision",
    date: "February 12, 2026",
    category: "Property Trends",
    readTime: "6 min read",
    excerpt:
      "Most property losses begin before the first brick is laid. A rigorous feasibility process can prevent millions in misallocated capital.",
    content: `Most property losses don't begin on the construction site. They begin in the boardroom — or the living room — when someone decides to build without first understanding what a site can truly support.

## The Cost of Skipping Feasibility

In our experience across East Africa, the most common and most expensive mistake in property development is committing to a building programme before conducting a proper highest-and-best-use (HBU) analysis. The result is predictable: buildings that are overbuilt for their market, underbuilt for their site's potential, or simply wrong for their context.

A residential tower in a location that demands commercial. A shopping arcade where the demographics support medical offices. A luxury villa development priced above what the local market can absorb. These are not design failures — they are intelligence failures.

## What HBU Analysis Actually Involves

Highest-and-best-use analysis is not a simple feasibility study. It is a rigorous, multi-variable assessment that considers four key criteria.

The analysis must demonstrate that the proposed use is legally permissible under current zoning and regulatory frameworks. It must be physically possible given the site's topography, access, services, and environmental constraints. It must be financially feasible — capable of generating returns that justify the investment. And it must be maximally productive — the use that produces the highest residual land value among all feasible alternatives.

## Why Architects Should Care

This is not just a developer's concern. Architects who understand HBU analysis design better buildings, because they understand the economic logic that their spatial decisions must serve. A building that is beautiful but commercially unviable is a failed building. A building that is profitable but spatially compromised is a missed opportunity.

The best outcomes happen when property intelligence and architectural thinking work together from day one. When the strategic brief is sound, design can be ambitious. When it is not, even the best architecture cannot compensate.

## Our Recommendation

Before commissioning architectural design, invest in a proper HBU study. It typically costs less than 2% of total project expenditure and can prevent losses many times that figure. More importantly, it gives your design team a clear, defensible brief — which is the foundation of every successful project.

The best time to discover that your building programme is wrong is before you have designed it. The worst time is after you have built it.`,
    relatedProjects: ["meridian-heights"],
  },
  {
    slug: "material-honesty-east-africa",
    title: "Material Honesty in East African Architecture",
    date: "January 28, 2026",
    category: "Design Thinking",
    readTime: "8 min read",
    excerpt:
      "The best buildings don't hide their construction. How exposed structure and local materials create authenticity and reduce long-term costs.",
    content: `There is a persistent tendency in contemporary East African architecture to conceal the building's true nature behind layers of applied finish — plaster over blockwork, ceramic tile over concrete, paint over everything. The result is buildings that look new for six months and tired for sixty years.

## The Case for Honesty

Material honesty is not an aesthetic preference. It is an economic and cultural argument. Buildings that express their construction honestly — that let concrete be concrete, brick be brick, timber be timber — age better, cost less to maintain, and connect more authentically to their context.

Consider the difference between a plastered wall that needs repainting every three years and an exposed brick wall that improves with age. Over a thirty-year building life, the maintenance cost differential is substantial. But the real value is experiential: honest materials create spaces with depth, texture, and character that applied finishes cannot replicate.

## Local Materials, Global Quality

East Africa has extraordinary material resources that are underutilised in contemporary construction. Locally-fired brick in Uganda produces warm, varied tones that no imported ceramic can match. Kenyan natural stone offers durability and beauty at a fraction of the cost of imported marble. Hardwood timber from managed plantations provides structural and decorative possibilities that synthetic alternatives merely approximate.

The challenge is not material availability but material literacy. Architects and clients need to understand how local materials perform, age, and combine. This requires testing, specification discipline, and a willingness to let the material express itself rather than forcing it to imitate something imported.

## A Design Philosophy

Material honesty is ultimately about respect — for the building, for its occupants, and for the resources consumed in its construction. Every applied finish is an additional material, an additional cost, and an additional maintenance liability. When we strip away what is unnecessary, what remains is more truthful, more durable, and more beautiful.

This is not minimalism for its own sake. It is the belief that buildings should be exactly what they need to be — nothing more, nothing less.`,
    relatedProjects: ["serene-court-villas"],
  },
  {
    slug: "integrated-model-fragmented-teams",
    title: "The Integrated Model: Why Fragmented Teams Fail Large Projects",
    date: "December 15, 2025",
    category: "Development Insights",
    readTime: "7 min read",
    excerpt:
      "When property advisory, architecture, and design operate in silos, the result is compromise. Here's the case for unified delivery.",
    content: `The conventional model for property development separates the process into distinct, sequentially-commissioned disciplines: a broker finds the site, a consultant assesses feasibility, an architect designs the building, an interior designer furnishes it, and a landscape architect addresses the outdoor spaces. Each professional operates within their scope, hands off to the next, and moves on.

## The Problem With Handoffs

Every handoff is a potential failure point. When the property advisor's brief reaches the architect, nuance is lost. When the architect's spatial concept reaches the interior designer, intentions are reinterpreted. When the landscape architect arrives last, the outdoor strategy is constrained by decisions already made.

The cumulative effect is drift — a gradual divergence between the original strategic intent and the built outcome. In our analysis of distressed development projects across East Africa, misalignment between disciplines accounts for an estimated 15-25% of cost overruns and the majority of client dissatisfaction.

## The Integrated Alternative

An integrated consultancy model places property intelligence, architecture, and design under a single strategic umbrella. This does not mean one person does everything — it means one team holds accountability for the entire trajectory from land decision to completed space.

The benefits are structural, not just philosophical. When the property advisor and the architect share a brief, the development programme reflects both market reality and spatial ambition. When the architect and interior designer work in parallel rather than sequence, the building's interior logic is embedded in its structural design. When landscape is considered from inception, the exterior environment becomes an asset rather than an afterthought.

## The Client Benefit

For clients, the integrated model simplifies decision-making, reduces coordination risk, and produces more coherent outcomes. Instead of managing five separate consultants with potentially conflicting interests, they work with one team that has a unified view of what success looks like.

This is not about consolidating fees — it is about consolidating accountability. When one team owns the entire process, there is nowhere for problems to hide.`,
    relatedProjects: ["meridian-heights", "atelier-office-campus"],
  },
  {
    slug: "climate-responsive-design-tropics",
    title: "Designing for the Tropics: Beyond Air Conditioning",
    date: "November 20, 2025",
    category: "Design Thinking",
    readTime: "5 min read",
    excerpt:
      "Mechanical cooling is not a design strategy. Passive approaches to tropical comfort reduce costs and create better spaces.",
    content: `The default response to tropical heat in contemporary African architecture is mechanical cooling. Buildings are sealed, glazed, and air-conditioned — an approach imported from temperate climates where the challenge is retaining heat, not managing it.

## The Energy Problem

In East Africa, electricity costs are among the highest on the continent, and supply reliability remains inconsistent. A building that depends entirely on air conditioning for comfort is a building that is vulnerable — to power outages, to rising energy costs, and to the environmental consequences of carbon-intensive cooling.

This is not an argument against air conditioning. It is an argument for designing buildings that need less of it.

## Passive Strategies That Work

Orientation is the single most impactful design decision in tropical architecture. A building that minimises east and west facade exposure reduces solar heat gain by up to 40% compared to one that ignores cardinal orientation. This costs nothing — it is simply intelligent planning.

Cross-ventilation, driven by prevailing wind patterns, can maintain comfortable conditions for the majority of the year in highland tropical climates like Kampala and Nairobi. This requires openable windows on opposite facades, floor plates narrow enough for air to traverse, and interior layouts that do not obstruct airflow.

Thermal mass — the use of heavyweight materials like concrete and masonry — stores coolness during the night and releases it during the hottest hours. Combined with adequate ceiling heights and roof ventilation, thermal mass can reduce peak indoor temperatures by several degrees without any mechanical input.

## The Design Opportunity

Climate-responsive design is not a constraint — it is a creative opportunity. The best tropical buildings in history achieved comfort and beauty through intelligent response to climate. Contemporary tools and materials allow us to refine these strategies with greater precision and performance.

The goal is not to eliminate air conditioning but to reduce dependence on it — creating buildings that are comfortable by design, with mechanical systems providing supplementary comfort rather than primary life support.`,
    relatedProjects: ["serene-court-villas", "meridian-heights"],
  },
];
