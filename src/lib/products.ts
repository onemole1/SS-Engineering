import singleToggleAsset from "@/assets/products/single-toggle-jaw-crusher.webp";
import doubleToggleAsset from "@/assets/products/double-toggle-jaw-crusher.webp";
import coneHcAsset from "@/assets/products/cone-crusher-hc.webp";
import coneGcAsset from "@/assets/products/cone-crusher-gc.webp";
import vsiSandAsset from "@/assets/products/vsi-sand.webp";
import vsiAggregateAsset from "@/assets/products/vsi-aggregate.webp";
import hsiSandAsset from "@/assets/products/hsi-sand.webp";
import hsiAggregateAsset from "@/assets/products/hsi-aggregates.webp";
import powerwashAsset from "@/assets/products/powerwash.webp";
import singleBucketAsset from "@/assets/products/single-bucket-classifier.webp";
import doubleBucketAsset from "@/assets/products/double-bucket-classifier.webp";
import thickenerAsset from "@/assets/products/thickner.webp";
import filterPressAsset from "@/assets/products/filterpress.webp";
import vibratoryScreenAsset from "@/assets/products/vibratory-screen.webp";
import vibratoryFeederAsset from "@/assets/products/vibratory-feeder.webp";
import grizzlyFeederAsset from "@/assets/products/grizzly-feeder.webp";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  image: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export type ProductCategory =
  | "Crusher"
  | "Impactors"
  | "Washing System"
  | "Screens"
  | "Feeders";

export const categories: ProductCategory[] = [
  "Crusher",
  "Impactors",
  "Washing System",
  "Screens",
  "Feeders",
];

export const products: Product[] = [
  // ============ CRUSHER ============
  {
    slug: "single-toggle-jaw-crusher",
    name: "Single Toggle Jaw Crusher",
    tagline: "Grease-lubricated JC series for primary & secondary crushing.",
    category: "Crusher",
    image: singleToggleAsset,
    description:
      "Robust, heavy-duty single toggle jaw crusher (grease lubricated) built for primary and secondary crushing of medium-hard to hard, brittle and tough materials. The swing jaw is mounted on a shaft with four heavy-duty self-aligning spherical roller bearings, with a provision to adjust the discharge gap as required. Counter-balanced flywheels deliver smooth crushing action, and a simple locking arrangement allows fast reversing or replacement of jaw plates.",
    highlights: [
      "Large feed acceptance capability",
      "Interchangeable and reversible jaw plates",
      "Easy and safe adjustment mechanism",
      "Optimised nip angle",
      "Enhanced capacity with high reduction ratio",
      "Hydraulic wedge / toggle mechanism (optional)",
    ],
    specs: [
      { label: "Models", value: "JC 2412 / 3015 / 3226 / 4232 / 4636 / 3608 / 4208" },
      { label: "Feed Opening", value: "300×600 – 1150×900 mm" },
      { label: "Capacity", value: "20 – 340 TPH" },
      { label: "Motor Power", value: "40 – 180 HP" },
      { label: "Machine RPM", value: "200 – 330" },
    ],
    applications: ["Aggregate", "Quarrying", "Mining", "Recycling"],
  },
  {
    slug: "double-toggle-jaw-crusher",
    name: "Double Toggle Jaw Crusher",
    tagline: "Oil-lubricated JC series for the hardest, most abrasive rock.",
    category: "Crusher",
    image: doubleToggleAsset,
    description:
      "Oil-lubricated double toggle jaw crusher engineered for maximum life and minimum maintenance. The totally enclosed operating mechanism, double-toggle geometry and long-stroke eccentric deliver maximum leverage with a pure crushing action — the swing jaw hinge pin sits on the crushing chamber centre line, so the jaws crush without rubbing. Wide entry throat, cast steel swing jaw and manganese steel jaw plates make this the workhorse for hard, abrasive feed.",
    highlights: [
      "Totally enclosed lubrication for long service life",
      "Manganese steel jaw plates for the hardest materials",
      "Alloy steel eccentric shaft on self-aligning roller bearings",
      "Automatic safety device for overload protection",
      "Continuous gear-pump lubrication of toggle and eccentric",
      "Cast steel swing jaw, balanced against power loss",
    ],
    specs: [
      { label: "Series", value: "JC Series (Oil Lubricated)" },
      { label: "Duty", value: "Primary crushing, hard & abrasive rock" },
      { label: "Jaw Plate", value: "High-percentage manganese steel" },
      { label: "Shaft", value: "Alloy steel on self-aligning roller bearings" },
      { label: "Protection", value: "Automatic overload safety device" },
    ],
    applications: ["Granite", "Basalt", "Iron Ore", "Slag"],
  },
  {
    slug: "cone-crusher-hc-series",
    name: "Cone Crusher (HC Series)",
    tagline: "Hydraulic cone crusher for secondary & tertiary duty.",
    category: "Crusher",
    image: coneHcAsset,
    description:
      "PICS HC series hydraulic cone crushers are engineered for secondary and tertiary crushing of medium-hard to hard rock. Hydrodynamic high-alloy bronze bearings, hydraulic setting and tramp-release, and optimised chamber profiles deliver excellent cubical product with high reduction ratios. Available with optional automatic closed side setting (CSS) control.",
    highlights: [
      "Hydrodynamic high-alloy bronze bearings",
      "Hydraulic setting adjustment and tramp-iron release",
      "Automatic closed side setting (optional)",
      "Optimised chamber profiles for cubical product",
      "Steel-structure or concrete-foundation installation",
    ],
    specs: [
      { label: "Models", value: "HC 2000 / HC 3000" },
      { label: "Max Feed Size", value: "180 mm (7.0\") – 200 mm (7.8\")" },
      { label: "Bearing", value: "Hydrodynamic high-alloy bronze" },
      { label: "CSS Control", value: "Hydraulic (optional automatic)" },
      { label: "Duty", value: "Secondary / Tertiary" },
    ],
    applications: ["Aggregate", "Sand & Gravel", "Mining"],
  },
  {
    slug: "cone-crusher-gc-series",
    name: "Cone Crusher (GC Series)",
    tagline: "Single-cylinder cone crusher with spiral bevel drive.",
    category: "Crusher",
    image: coneGcAsset,
    description:
      "GC series single-cylinder hydraulic cone crushers are built for continuous secondary and tertiary crushing of hard and medium-hard ores. Automatic oil lubrication of bearings and bevel gears (with an external air-cooling unit for oil), plus a special spiral bevel gear drive to the eccentric shaft, deliver smooth, quiet operation on long-run mining and quarry circuits.",
    highlights: [
      "Automatic oil lubrication with external air cooler",
      "Special spiral bevel gear drive — smooth and quiet",
      "Single-cylinder hydraulic setting adjustment",
      "Cast steel main frame and heavy-duty bushings",
      "Hydraulic overload and tramp release",
    ],
    specs: [
      { label: "Models", value: "GC 2015 / GC 2020 / GC 2050" },
      { label: "Feed Opening", value: "180 – 230 mm (7.0\" – 9.0\")" },
      { label: "Max Feed Size", value: "150 – 200 mm (5.9\" – 7.8\")" },
      { label: "Lubrication", value: "Automatic oil + air cooler" },
      { label: "Drive", value: "Spiral bevel gear" },
    ],
    applications: ["Mining", "Hard Rock Aggregate", "Iron Ore"],
  },

  // ============ IMPACTORS ============
  {
    slug: "vertical-shaft-impactor-for-sand",
    name: "Vertical Shaft Impactor for Sand",
    tagline: "VSI series for manufactured-sand production.",
    category: "Impactors",
    image: vsiSandAsset,
    description:
      "Vertical shaft impactor configured for manufactured sand (M-sand) production. The rock-on-rock chamber uses the feed itself as the wear medium, protecting internal wear parts while delivering a well-graded, cubical sand product suitable for concrete and plaster. Quick balance rotor with simple grease lubrication keeps service time low.",
    highlights: [
      "Rock-on-rock chamber — low wear cost per tonne",
      "Superior cubical product shape",
      "Quick-balance rotor, easy to service",
      "Simple, reliable grease lubrication",
      "Twin-drive options on larger models",
    ],
    specs: [
      { label: "Models", value: "VSI-60 to VSI-360 D" },
      { label: "Output", value: "Manufactured Sand (M-Sand)" },
      { label: "Chamber", value: "Rock-on-Rock (autogenous)" },
      { label: "Drive", value: "Single or Twin (D models)" },
      { label: "Lubrication", value: "Grease" },
    ],
    applications: ["M-Sand", "RMC Plants", "Concrete Blocks"],
  },
  {
    slug: "vertical-shaft-impactor-for-shaping-aggregate",
    name: "Vertical Shaft Impactor for Aggregate Shaping",
    tagline: "VSI configured for cubical aggregate shaping.",
    category: "Impactors",
    image: vsiAggregateAsset,
    description:
      "Rock-on-anvil VSI configuration for reshaping flaky and elongated aggregate into cubical, well-shaped product. Ideal for producing high-value chips for asphalt and concrete where shape index and flakiness are strictly controlled. Interchangeable rotor allows switching between RoR and RoA modes.",
    highlights: [
      "Rock-on-anvil chamber for maximum shape correction",
      "Interchangeable rotor (RoR / RoA)",
      "Wear-resistant anvil ring for long service life",
      "Improves flakiness index and product value",
      "Quick-balance rotor",
    ],
    specs: [
      { label: "Models", value: "VSI-60 to VSI-360 D" },
      { label: "Output", value: "Cubical shaped aggregate" },
      { label: "Chamber", value: "Rock-on-Anvil" },
      { label: "Drive", value: "Single or Twin (D models)" },
      { label: "Duty", value: "Tertiary shaping" },
    ],
    applications: ["Asphalt Mix", "Ready Mix Concrete", "Railway Ballast"],
  },
  {
    slug: "horizontal-shaft-impactor-for-sand",
    name: "Horizontal Shaft Impactor for Sand",
    tagline: "HSI-based crushing for high-fines sand production.",
    category: "Impactors",
    image: hsiSandAsset,
    description:
      "Horizontal shaft impactor configured for sand manufacturing. High rotor speed combined with adjustable breaker plates delivers a fine, well-graded sand product from soft to medium-hard rock at excellent cost per tonne.",
    highlights: [
      "High reduction ratio in a single pass",
      "Adjustable breaker plates for gradation control",
      "Reversible chrome-alloy blow bars",
      "Compact footprint for portable and static plants",
    ],
    specs: [
      { label: "Duty", value: "Sand manufacturing" },
      { label: "Rotor", value: "High-speed with reversible blow bars" },
      { label: "Adjustment", value: "Hydraulic breaker plate" },
      { label: "Output", value: "Fine sand / manufactured sand" },
    ],
    applications: ["M-Sand", "Limestone", "Recycled Concrete"],
  },
  {
    slug: "horizontal-shaft-impactor-for-shaping-aggregate",
    name: "Horizontal Shaft Impactor for Aggregate Shaping",
    tagline: "HSI shaping crusher for cubical aggregate.",
    category: "Impactors",
    image: hsiAggregateAsset,
    description:
      "Purpose-built horizontal shaft impactor for shaping aggregate. Optimised rotor and curtain geometry produces well-shaped, cubical chips suited for concrete and asphalt where product shape drives price.",
    highlights: [
      "Optimised rotor for cubical product",
      "Two- or three-curtain configurations",
      "Hydraulic curtain adjustment",
      "Chrome-molybdenum blow bars for long life",
    ],
    specs: [
      { label: "Duty", value: "Aggregate shaping" },
      { label: "Rotor", value: "Optimised for cubical output" },
      { label: "Curtains", value: "Two or three, hydraulic adjust" },
      { label: "Blow Bars", value: "Chrome-molybdenum" },
    ],
    applications: ["Asphalt", "Concrete", "Ballast"],
  },

  // ============ WASHING SYSTEM ============
  {
    slug: "hydrocyclone",
    name: "Hydrocyclone (Power Wash D Series)",
    tagline: "Hydro-cyclone washing solution for fine sand recovery.",
    category: "Washing System",
    image: powerwashAsset,
    description:
      "Power Wash D-series hydrocyclone with integrated dewatering screen — a complete washing solution for silica and manufactured sand. Rubber-lined wear areas, walkway and access ladder, low maintenance and quick assembly make it the backbone of any modern washing plant.",
    highlights: [
      "Low maintenance — no moving parts in cyclone",
      "All wear areas rubber lined",
      "Integrated dewatering screen",
      "Walkway and access ladder as standard",
      "Quick assembly time",
    ],
    specs: [
      { label: "Models", value: "D-50 / D-100 / D-150 / D-200 / D-300" },
      { label: "Capacity", value: "25 – 300 TPH" },
      { label: "Wear Protection", value: "Rubber lined" },
      { label: "Duty", value: "Fine sand recovery & dewatering" },
    ],
    applications: ["Silica Sand", "M-Sand", "Slurry Dewatering"],
  },
  {
    slug: "single-bucket-classifier",
    name: "Single Bucket Classifier",
    tagline: "Efficient wet classification for a single sand product.",
    category: "Washing System",
    image: singleBucketAsset,
    description:
      "Single bucket wheel classifier (SBC series) that washes, dewaters and delivers a single, well-drained sand product. Robust and unique design, very low water wastage, PU screens for higher wear resistance and a safe, reliable lubrication system.",
    highlights: [
      "Produces superior quality sand",
      "Very low water wastage",
      "Robust and unique design",
      "Easy maintenance & low production cost",
      "Safe and reliable lubrication system",
      "PU screens — more wear resistant",
    ],
    specs: [
      { label: "Model", value: "SBC 75" },
      { label: "Capacity", value: "45 – 60 TPH" },
      { label: "Products", value: "1 sand grade" },
      { label: "Screens", value: "Polyurethane" },
    ],
    applications: ["M-Sand Washing", "River Sand", "Silica"],
  },
  {
    slug: "double-bucket-classifier",
    name: "Double Bucket Classifier",
    tagline: "Twin-wheel classifier for two sand grades in one pass.",
    category: "Washing System",
    image: doubleBucketAsset,
    description:
      "DBC series twin-wheel classifier with an internal overflow arrangement that produces two separate, well-drained sand products in a single pass. Ideal for producing both coarse and fine plaster/concrete sand simultaneously with very low water wastage.",
    highlights: [
      "Two washed & dewatered sand products in one machine",
      "Very low water wastage",
      "Robust and unique design",
      "Polyurethane screens for long wear life",
      "Safe and reliable lubrication",
    ],
    specs: [
      { label: "Models", value: "DBC 100 / DBC 150 / DBC 200" },
      { label: "Capacity", value: "60 – 160 TPH" },
      { label: "Products", value: "2 sand grades" },
      { label: "Screens", value: "Polyurethane" },
    ],
    applications: ["Concrete Sand", "Plaster Sand", "M-Sand"],
  },
  {
    slug: "thickener",
    name: "Thickener (Power Recycler RC Series)",
    tagline: "Slurry thickening and process-water recovery.",
    category: "Washing System",
    image: thickenerAsset,
    description:
      "Power Recycler RC-series thickener for dewatering wash-plant slurry and recovering process water. Optimum separation of slurry with flocculent addition reduces sludge outlet volume, which in turn reduces settling pond size and land footprint.",
    highlights: [
      "Central-drive rake mechanism",
      "Recovers a high fraction of process water",
      "Flocculent dosing compatible",
      "Reduces settling pond size",
      "Steel tank options up to 12 m diameter",
    ],
    specs: [
      { label: "Models", value: "RC-60 / RC-80 / RC-10 / RC-12" },
      { label: "Tank Diameter", value: "6 – 12 m" },
      { label: "Side Wall Depth", value: "3 m" },
      { label: "Drive", value: "Central geared" },
    ],
    applications: ["Wash-plant water recovery", "Mineral Processing"],
  },
  {
    slug: "filter-press",
    name: "Filter Press",
    tagline: "Dry-stackable cake from washing-plant sludge.",
    category: "Washing System",
    image: filterPressAsset,
    description:
      "Chamber filter press for sludge management — dewaters thickener underflow into a dry, stackable cake that eliminates slurry ponds and frees valuable land. Available in 48\"×48\" and 60\"×60\" recess sizes.",
    highlights: [
      "Produces stackable filter cake — no slurry ponds",
      "Hydraulic closing with automatic plate shifter",
      "Polypropylene chambers and filter cloths",
      "48\"×48\" and 60\"×60\" recess options",
    ],
    specs: [
      { label: "Recess Sizes", value: "48\"×48\" and 60\"×60\"" },
      { label: "Skeleton", value: "1200×1200 mm / 1500×1500 mm" },
      { label: "Duty", value: "Sludge dewatering" },
      { label: "Cake", value: "Dry & stackable" },
    ],
    applications: ["Sand-Wash Sludge", "Quarry Fines", "Mineral Tailings"],
  },

  // ============ SCREENS ============
  {
    slug: "vibratory-screen",
    name: "Vibratory Screen",
    tagline: "Multi-deck sizing screens for aggregate and sand.",
    category: "Screens",
    image: vibratoryScreenAsset,
    description:
      "Circular-motion vibratory screens with 2, 3 or 4 decks for accurate sizing of aggregate and sand. Bolted side plates, heavy-duty cartridge-style vibrator units and interchangeable wire, polyurethane or rubber screen media give long life and easy maintenance.",
    highlights: [
      "2, 3 or 4 deck configurations",
      "Bolted side plates — no fatigue-prone welds",
      "Cartridge-style vibrator units",
      "Wire, polyurethane or rubber screen media",
    ],
    specs: [
      { label: "Decks", value: "2 / 3 / 4" },
      { label: "Motion", value: "Circular" },
      { label: "Frame", value: "Bolted side plates" },
      { label: "Media", value: "Wire / PU / Rubber" },
    ],
    applications: ["Aggregate Sizing", "Sand Screening", "Coal"],
  },

  // ============ FEEDERS ============
  {
    slug: "vibratory-feeder",
    name: "Vibratory Feeder",
    tagline: "Controlled feed into crushers and processing lines.",
    category: "Feeders",
    image: vibratoryFeederAsset,
    description:
      "Heavy-duty vibratory feeders for controlled, uniform feeding of primary crushers, screens and processing lines. Unbalanced-motor or electromagnetic drives with adjustable stroke for precise feed-rate control.",
    highlights: [
      "Unbalanced-motor or electromagnetic drive",
      "Adjustable stroke for precise feed rate",
      "Wear-lined trough for abrasive materials",
      "Compact footprint under hoppers and silos",
    ],
    specs: [
      { label: "Drive", value: "Unbalanced motor / EM" },
      { label: "Trough", value: "Wear-lined" },
      { label: "Duty", value: "Continuous crusher feed" },
    ],
    applications: ["Crusher Feed", "Silo Discharge", "Batching"],
  },
  {
    slug: "grizzly-feeder",
    name: "Grizzly Feeder",
    tagline: "Feed and scalp in one machine — protect the primary crusher.",
    category: "Feeders",
    image: grizzlyFeederAsset,
    description:
      "Vibrating grizzly feeder that meters run-of-quarry material into the primary crusher while scalping fines and reject ahead of it. Reduces load on the jaw and improves overall circuit throughput.",
    highlights: [
      "Integrated grizzly bars for pre-scalping",
      "Bolted, replaceable grizzly section",
      "Heavy fabricated frame with wear liners",
      "Twin unbalanced-motor drive",
    ],
    specs: [
      { label: "Grizzly Bars", value: "Bolted, replaceable" },
      { label: "Drive", value: "Twin unbalanced motors" },
      { label: "Duty", value: "Primary crusher feed + scalping" },
    ],
    applications: ["Primary Crusher Feed", "Quarry", "Mining"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
