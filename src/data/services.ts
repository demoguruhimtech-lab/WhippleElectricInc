export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  icon: string;
  imageQuery: string;
  benefits: string[];
  signs: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'electrical-troubleshooting',
    name: 'Electrical Troubleshooting and Repair',
    shortName: 'Electrical Troubleshooting',
    description: 'Expert diagnosis and repair of electrical problems — from flickering lights to mysterious outages and faulty circuits.',
    longDescription:
      'Electrical problems can be frustrating and potentially dangerous. Our troubleshooting service identifies the root cause of electrical issues — whether it is a tripping breaker, a dead outlet, flickering lights, or a burning smell near a panel. We use systematic diagnostic methods to pinpoint the problem and provide a clear explanation of what needs to be repaired, so you can make an informed decision before any work begins.',
    icon: 'Search',
    imageQuery: 'electrician troubleshooting electrical panel',
    benefits: [
      'Accurate diagnosis of complex electrical issues',
      'Safety-first approach to identifying hazards',
      'Clear explanation of the problem and repair options',
      'Repairs performed by an experienced Master Electrician',
    ],
    signs: [
      'Circuit breakers trip frequently without an obvious cause',
      'Lights flicker or dim when appliances turn on',
      'Outlets or switches feel warm to the touch',
      'Burning smell or unusual odors near outlets or the panel',
      'Outlets that have stopped working entirely',
      'Sparks or visible arc when plugging in devices',
    ],
    process: [
      { title: 'Discuss the Problem', description: 'We listen to your description of the issue and ask questions to understand when it occurs and what circumstances surround it.' },
      { title: 'Inspect and Diagnose', description: 'We systematically inspect the affected circuits, outlets, panel, and wiring to identify the root cause.' },
      { title: 'Explain Findings', description: 'We walk you through what we found, why it is happening, and what repair options are available.' },
      { title: 'Perform the Repair', description: 'Once you approve the work, we complete the repair safely and test everything to confirm the issue is resolved.' },
    ],
    faqs: [
      { question: 'How much does electrical troubleshooting cost?', answer: 'The cost depends on the complexity of the problem and the repair needed. We explain our findings and provide repair options before any work begins, so you know what to expect.' },
      { question: 'Can you troubleshoot an intermittent problem?', answer: 'Yes. Intermittent issues can be challenging, but our systematic diagnostic approach is designed to track down problems that come and go.' },
      { question: 'Is a flickering light always a serious problem?', answer: 'Not always, but it can indicate a loose connection, an overloaded circuit, or a problem with the fixture itself. It is worth having a professional inspect it to rule out a safety hazard.' },
    ],
  },
  {
    slug: 'electrical-panel-upgrades',
    name: 'Electrical Panel Upgrades',
    shortName: 'Panel Upgrades',
    description: 'Replace outdated or undersized electrical panels with a modern, safe panel that meets your home\u2019s power demands.',
    longDescription:
      'Your electrical panel is the heart of your home\u2019s electrical system. Older panels — especially Federal Pacific, Zinsco, or panels with fuses — may not meet modern safety standards and can pose fire risks. If you are adding new appliances, a workshop, or an EV charger, your existing panel may not have enough capacity. We upgrade panels to modern 200-amp service with trusted, code-compliant equipment.',
    icon: 'LayoutGrid',
    imageQuery: 'electrical panel breaker box upgrade',
    benefits: [
      'Increased electrical capacity for modern appliances',
      'Improved safety with modern, code-compliant equipment',
      'Reduced risk of breaker tripping and electrical fires',
      'Support for home additions, EV chargers, and workshops',
    ],
    signs: [
      'Your home still has a fuse box or a panel older than 25 years',
      'Breakers trip frequently when running multiple appliances',
      'You are planning to add a large appliance, EV charger, or addition',
      'The panel feels warm or has visible scorch marks',
      'Your panel is a brand associated with safety recalls (Federal Pacific, Zinsco)',
      'Lights dim when the AC or refrigerator kicks on',
    ],
    process: [
      { title: 'Assess Your Power Needs', description: 'We evaluate your current panel, your household usage, and any planned additions to determine the right capacity.' },
      { title: 'Provide Options', description: 'We explain what panel size and type is appropriate and what the upgrade involves.' },
      { title: 'Upgrade the Panel', description: 'We install the new panel, transfer circuits, label everything clearly, and ensure all connections meet code.' },
      { title: 'Test and Verify', description: 'We test every circuit to confirm safe, proper operation before considering the job complete.' },
    ],
    faqs: [
      { question: 'How long does a panel upgrade take?', answer: 'Most panel upgrades are completed in a single day, though the exact time depends on the condition of your existing wiring and the scope of the upgrade.' },
      { question: 'Do I need a permit for a panel upgrade?', answer: 'Yes, electrical panel upgrades require a permit and inspection. We handle the permitting process and ensure the work meets local code requirements.' },
      { question: 'How do I know if my panel needs replacing?', answer: 'If your panel is over 25 years old, trips frequently, shows signs of damage, or is a brand associated with safety issues, it is worth having it inspected.' },
    ],
  },
  {
    slug: 'circuit-breaker-repair',
    name: 'Circuit Breaker Repair and Replacement',
    shortName: 'Circuit Breaker Repair',
    description: 'Repair or replace faulty circuit breakers that trip repeatedly, fail to reset, or show signs of wear.',
    longDescription:
      'Circuit breakers protect your home by shutting off power when a circuit is overloaded or shorted. When a breaker fails — whether it trips constantly, will not reset, or feels loose — it can leave you without power or, worse, fail to trip when it should. We diagnose breaker issues, replace faulty breakers with correct-rated replacements, and identify underlying problems like overloaded circuits or damaged wiring that may be causing the failures.',
    icon: 'ToggleRight',
    imageQuery: 'circuit breaker replacement electrical',
    benefits: [
      'Restore reliable power to affected circuits',
      'Protect your home with properly functioning breakers',
      'Identify and address underlying overload issues',
      'Correct breaker sizing for your circuit requirements',
    ],
    signs: [
      'A breaker trips repeatedly and will not stay reset',
      'A breaker will not reset at all',
      'The breaker switch feels loose or wobbly',
      'You hear buzzing from the breaker panel',
      'A breaker feels hot to the touch',
      'Burning smell coming from the panel area',
    ],
    process: [
      { title: 'Identify the Affected Circuit', description: 'We determine which circuit is tripping and what loads are connected to it.' },
      { title: 'Diagnose the Cause', description: 'We check the breaker, the wiring, and connected devices to find whether the breaker itself is faulty or the circuit is overloaded.' },
      { title: 'Repair or Replace', description: 'We replace the faulty breaker or address the overload issue, then test the circuit under load.' },
    ],
    faqs: [
      { question: 'Why does my breaker keep tripping?', answer: 'Breakers trip due to overloads, short circuits, or ground faults. It could also be a weak breaker. We diagnose the specific cause so the right fix is applied.' },
      { question: 'Can I just replace a breaker myself?', answer: 'Working inside a panel is dangerous and should only be done by a qualified electrician. Incorrect installation can cause fires or serious injury.' },
      { question: 'What does it mean if a breaker will not reset?', answer: 'A breaker that will not reset often indicates a persistent fault on the circuit or a failed breaker. It should be inspected by a professional before attempting to reset again.' },
    ],
  },
  {
    slug: 'electrical-wiring',
    name: 'Electrical Wiring and Rewiring',
    shortName: 'Wiring and Rewiring',
    description: 'Complete wiring and rewiring services for older homes, renovations, and new construction projects.',
    longDescription:
      'Wiring is the backbone of your electrical system. Homes built before 1970 may have knob-and-tube or aluminum wiring, which can deteriorate over time and pose safety risks. Whether you need wiring replaced for safety, wiring extended for a renovation, or wiring installed for a new construction project, we provide clean, code-compliant work that ensures reliable power delivery throughout your home.',
    icon: 'Cable',
    imageQuery: 'electrical wiring installation home',
    benefits: [
      'Safe, code-compliant wiring for older homes',
      'Support for modern electrical loads and appliances',
      'Clean installation with proper junction boxes and routing',
      'Reduced fire risk from deteriorated or aluminum wiring',
    ],
    signs: [
      'Your home is over 40 years old and has not been rewired',
      'You have knob-and-tube or aluminum wiring',
      'Outlets are only two-prong (ungrounded)',
      'Wiring is visible and appears cracked or frayed',
      'You are renovating and need new circuits or relocated wiring',
      'Lights dim or flicker when multiple devices are in use',
    ],
    process: [
      { title: 'Inspect Existing Wiring', description: 'We assess the type and condition of your current wiring to determine what needs to be replaced.' },
      { title: 'Plan the Rewiring', description: 'We discuss which circuits need replacement, any new circuits you need, and how the work will be done with minimal disruption.' },
      { title: 'Install New Wiring', description: 'We run new wiring, install proper junction boxes, and connect circuits to the panel with correct sizing.' },
      { title: 'Test Every Circuit', description: 'We test each circuit for proper voltage, grounding, and polarity before considering the work complete.' },
    ],
    faqs: [
      { question: 'How long does a whole-home rewire take?', answer: 'A full rewire typically takes several days depending on the size of the home and accessibility of the wiring. We discuss the timeline before starting.' },
      { question: 'Is aluminum wiring dangerous?', answer: 'Aluminum wiring installed in the 1960s and 70s can develop loose connections that create fire hazards. We can evaluate your aluminum wiring and discuss repair or replacement options.' },
      { question: 'Do I need to rewire if I am not having problems?', answer: 'If your wiring is old but functioning, an inspection can determine whether it is safe or should be proactively replaced. We give you an honest assessment.' },
    ],
  },
  {
    slug: 'outlet-switch-installation',
    name: 'Outlet and Switch Installation',
    shortName: 'Outlet and Switch Installation',
    description: 'Install, repair, or replace electrical outlets and switches — including GFCI, AFCI, and smart switches.',
    longDescription:
      'Outlets and switches are the most-used parts of your electrical system. Whether you need additional outlets, replacement of old two-prong outlets with grounded ones, GFCI protection in kitchens and bathrooms, or smart switches for convenient control, we handle the installation safely and cleanly. We also repair outlets that are loose, discolored, or not working.',
    icon: 'Plug',
    imageQuery: 'electric outlet switch installation',
    benefits: [
      'Grounded, tamper-resistant outlets for safety',
      'GFCI protection in wet areas per code requirements',
      'Convenient smart switch and dimmer installation',
      'Clean, flush installation with proper box depth',
    ],
    signs: [
      'Outlets are loose, cracked, or discolored',
      'Two-prong outlets that need grounding',
      'You need additional outlets in a room',
      'Switches are stiff, crackling, or do not work reliably',
      'Kitchen or bathroom outlets lack GFCI protection',
      'You want smart switches, dimmers, or timer controls',
    ],
    process: [
      { title: 'Assess the Location', description: 'We check the wiring at the installation point to confirm it can support the outlet or switch safely.' },
      { title: 'Install the Device', description: 'We install the outlet or switch with proper connections, grounding, and box fit.' },
      { title: 'Test for Safety', description: 'We test polarity, grounding, and GFCI function to confirm everything works correctly.' },
    ],
    faqs: [
      { question: 'Where are GFCI outlets required?', answer: 'Current code requires GFCI protection in kitchens, bathrooms, garages, outdoor areas, and other wet or damp locations. We can evaluate your home and bring it up to code.' },
      { question: 'Can you install a smart switch if I do not have a neutral wire?', answer: 'Some smart switches require a neutral wire and some do not. We can assess your wiring and recommend a compatible switch for your setup.' },
      { question: 'Why is my outlet sparking when I plug something in?', answer: 'Sparking can indicate a loose connection or worn outlet contacts. It should be inspected and repaired promptly to prevent damage or fire.' },
    ],
  },
  {
    slug: 'lighting-installation',
    name: 'Indoor and Outdoor Lighting Installation',
    shortName: 'Lighting Installation',
    description: 'Install, replace, or upgrade indoor and outdoor lighting — from recessed lights and chandeliers to security and landscape lighting.',
    longDescription:
      'Lighting transforms the look, feel, and safety of your home. We install recessed lighting, ceiling fixtures, chandeliers, under-cabinet lighting, bathroom vanity lights, outdoor security lights, and landscape lighting. Whether you are upgrading a single room or planning whole-home lighting, we ensure proper wiring, secure mounting, and clean installation that looks great and works reliably.',
    icon: 'Lightbulb',
    imageQuery: 'lighting installation electrician recessed lights',
    benefits: [
      'Modern, energy-efficient lighting upgrades',
      'Improved curb appeal and security with outdoor lighting',
      'Safe, secure mounting for heavy fixtures and ceiling fans',
      'Dimmer and smart lighting control integration',
    ],
    signs: [
      'You are remodeling and want new lighting layout',
      'Older fixtures are dated or not working',
      'You want to add recessed lighting to a room',
      'Outdoor areas need security or pathway lighting',
      'You want dimmer switches or smart lighting controls',
      'A fixture is loose, flickering, or making noise',
    ],
    process: [
      { title: 'Discuss Your Lighting Goals', description: 'We talk through what you want to achieve — ambiance, task lighting, security, or energy savings.' },
      { title: 'Plan the Installation', description: 'We determine fixture placement, wiring needs, and switch locations.' },
      { title: 'Install and Adjust', description: 'We mount fixtures, run wiring, install switches, and adjust aiming for outdoor lights.' },
      { title: 'Test and Demonstrate', description: 'We test all fixtures and dimmers, and show you how to operate any smart controls.' },
    ],
    faqs: [
      { question: 'Can you install recessed lighting in an existing ceiling?', answer: 'Yes. We can install recessed lighting in most existing ceilings, using remodel-rated fixtures that minimize drywall disruption.' },
      { question: 'Can I use LED bulbs in my existing fixtures?', answer: 'Most fixtures accept LED bulbs. We can also install integrated LED fixtures that last longer and use less energy than bulb-based options.' },
      { question: 'Do you install landscape lighting?', answer: 'Yes. We install pathway, accent, and security landscape lighting with proper outdoor-rated wiring and transformers.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    shortName: 'Ceiling Fan Installation',
    description: 'Professional ceiling fan installation with secure mounting, proper wiring, and wall or remote control setup.',
    longDescription:
      'Ceiling fans improve comfort and reduce energy costs by circulating air in summer and redistributing warm air in winter. Installing a ceiling fan requires a properly rated ceiling box that can support the weight and vibration of a fan — a regular light fixture box is not sufficient. We install ceiling boxes, wire the fan, and set up wall controls or remotes so your fan operates safely and reliably.',
    icon: 'Fan',
    imageQuery: 'ceiling fan installation electrician',
    benefits: [
      'Secure, code-compliant ceiling box installation',
      'Proper wiring for fan and light kit combinations',
      'Wall switch, remote, or smart control setup',
      'Balanced installation to prevent wobble and noise',
    ],
    signs: [
      'You want to replace a light fixture with a ceiling fan',
      'Your current ceiling fan wobbles or makes noise',
      'The ceiling box is not rated for a fan',
      'You want a fan with a light kit installed',
      'The fan switch or remote is not working',
    ],
    process: [
      { title: 'Inspect the Ceiling Box', description: 'We check whether the existing box is fan-rated or needs to be replaced with a supported ceiling box.' },
      { title: 'Mount and Wire the Fan', description: 'We install the ceiling box, mount the fan, and wire the fan motor and light kit.' },
      { title: 'Set Up Controls', description: 'We configure wall switches, remotes, or smart controls and test all functions.' },
      { title: 'Balance and Test', description: 'We balance the fan to prevent wobble and confirm all speeds and lighting work correctly.' },
    ],
    faqs: [
      { question: 'Can any ceiling box support a ceiling fan?', answer: 'No. Ceiling fans require a fan-rated box secured to a structural member. A standard light fixture box is not safe for a fan. We can install the correct box.' },
      { question: 'Can you install a ceiling fan where there is no existing wiring?', answer: 'Yes. We can run wiring and install a new switch for a ceiling fan location that is not currently wired.' },
      { question: 'Why does my ceiling fan wobble?', answer: 'Wobbling is usually caused by unbalanced blades, a loose mount, or an inadequate ceiling box. We can diagnose and fix the issue.' },
    ],
  },
  {
    slug: 'electrical-safety-inspection',
    name: 'Electrical Safety Inspections',
    shortName: 'Safety Inspections',
    description: 'Comprehensive electrical safety inspections to identify hazards, code violations, and potential problems before they become dangerous.',
    longDescription:
      'An electrical safety inspection is a thorough evaluation of your home\u2019s entire electrical system — panel, wiring, outlets, grounding, and devices. We identify safety hazards, code violations, and components that are nearing the end of their service life. Whether you are buying a home, living in an older house, or just want peace of mind, a safety inspection gives you a clear picture of your electrical system\u2019s condition.',
    icon: 'ShieldCheck',
    imageQuery: 'electrical inspection safety electrician',
    benefits: [
      'Identify safety hazards before they cause damage',
      'Understand the condition of your electrical system',
      'Code compliance evaluation for older homes',
      'Written summary of findings and recommendations',
    ],
    signs: [
      'You are purchasing a home and want an electrical evaluation',
      'Your home is over 30 years old and has not been inspected',
      'You have noticed recurring electrical issues',
      'You are planning a major renovation or addition',
      'Insurance requires an electrical inspection',
      'You want peace of mind about your family\u2019s safety',
    ],
    process: [
      { title: 'Inspect the Panel', description: 'We check the panel for proper labeling, breaker condition, corrosion, and code compliance.' },
      { title: 'Check Wiring and Grounding', description: 'We examine visible wiring, grounding, and bonding throughout the home.' },
      { title: 'Test Outlets and Devices', description: 'We test outlets for proper polarity, grounding, and GFCI function in required areas.' },
      { title: 'Summarize Findings', description: 'We provide a clear summary of any hazards, code issues, and recommended actions prioritized by safety.' },
    ],
    faqs: [
      { question: 'How long does an electrical inspection take?', answer: 'A thorough inspection of a typical home takes one to two hours, depending on the size and age of the home.' },
      { question: 'Do you provide a written report?', answer: 'Yes. We provide a summary of findings with any recommended repairs, prioritized by safety.' },
      { question: 'Should I get an inspection before buying a home?', answer: 'Yes. An electrical inspection during the home purchase process can identify costly or dangerous issues before you commit.' },
    ],
  },
  {
    slug: 'commercial-electrical',
    name: 'Commercial Electrical Services',
    shortName: 'Commercial Electrical',
    description: 'Electrical services for commercial properties — including tenant build-outs, lighting upgrades, and panel maintenance.',
    longDescription:
      'Commercial electrical systems have different requirements than residential ones — higher voltages, three-phase power, specialized lighting, and stricter code requirements. We provide commercial electrical services including tenant build-outs, lighting upgrades, panel maintenance, outlet installation, and troubleshooting for small to mid-sized commercial properties. We work with business owners and property managers to minimize disruption to operations.',
    icon: 'Building2',
    imageQuery: 'commercial electrical wiring building',
    benefits: [
      'Code-compliant commercial electrical work',
      'Minimized disruption to business operations',
      'Lighting upgrades for energy efficiency',
      'Troubleshooting and repair for commercial systems',
    ],
    signs: [
      'You are building out a new commercial tenant space',
      'Commercial lighting needs upgrading or repair',
      'A circuit in your building keeps tripping',
      'You need additional outlets or circuits in a commercial space',
      'Your commercial panel needs maintenance or upgrade',
    ],
    process: [
      { title: 'Assess the Space', description: 'We evaluate your commercial property\u2019s electrical system and discuss your operational needs.' },
      { title: 'Plan the Work', description: 'We coordinate the scope and schedule to minimize disruption to your business.' },
      { title: 'Perform the Work', description: 'We complete the electrical work to code, with proper permitting and inspection.' },
      { title: 'Test and Verify', description: 'We test all circuits and devices to confirm safe, reliable operation.' },
    ],
    faqs: [
      { question: 'Do you work on large industrial facilities?', answer: 'We primarily serve small to mid-sized commercial properties. Contact us to discuss your specific project and we will let you know if it fits our capabilities.' },
      { question: 'Can you work after hours to avoid business disruption?', answer: 'We can often schedule work to minimize disruption to your operations. Contact us to discuss timing.' },
      { question: 'Do you handle permitting for commercial work?', answer: 'Yes. We handle the permitting process and ensure all work is inspected and code-compliant.' },
    ],
  },
  {
    slug: 'renovation-electrical',
    name: 'Electrical Installation for Renovations',
    shortName: 'Renovation Electrical',
    description: 'Complete electrical planning and installation for home renovations — kitchens, bathrooms, basements, and additions.',
    longDescription:
      'Renovations are the perfect time to upgrade your electrical system. Whether you are remodeling a kitchen, finishing a basement, adding a bathroom, or building an addition, we handle the electrical planning and installation from start to finish. We coordinate with your contractor, install new circuits, outlets, lighting, and specialty wiring, and ensure everything meets current code and your design goals.',
    icon: 'Hammer',
    imageQuery: 'home renovation electrical wiring kitchen',
    benefits: [
      'Coordinated electrical planning for renovations',
      'Code-compliant installation for kitchens, baths, and basements',
      'Proper circuit sizing for new appliances and fixtures',
      'Clean installation that fits your finished design',
    ],
    signs: [
      'You are remodeling a kitchen or bathroom',
      'You are finishing a basement and need electrical',
      'You are building a home addition',
      'Your renovation needs new lighting, outlets, or circuits',
      'You want electrical planning before starting a renovation',
    ],
    process: [
      { title: 'Review Your Plans', description: 'We review your renovation plans and discuss where you need outlets, lighting, switches, and special circuits.' },
      { title: 'Plan the Electrical Layout', description: 'We design the electrical layout to meet code and support your design, including appliance circuits and lighting zones.' },
      { title: 'Rough-In Installation', description: 'We run wiring and install boxes before walls are closed, coordinating with your contractor\u2019s timeline.' },
      { title: 'Finish and Trim-Out', description: 'After walls are finished, we install outlets, switches, fixtures, and plates for a clean, complete result.' },
    ],
    faqs: [
      { question: 'When should I involve an electrician in my renovation?', answer: 'Early. Involving an electrician during the planning phase ensures the electrical design supports your goals and avoids costly changes later.' },
      { question: 'Do you coordinate with general contractors?', answer: 'Yes. We coordinate with your contractor or remodeler to ensure the electrical work fits the project timeline.' },
      { question: 'What electrical code changes affect renovations?', answer: 'Kitchens and bathrooms have specific requirements for GFCI/AFCI protection, dedicated appliance circuits, and outlet spacing. We ensure your renovation meets current code.' },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
