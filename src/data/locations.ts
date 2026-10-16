export interface LocationDetail {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  zipCodes: string[];
  localContext: string;
  faqs: { question: string; answer: string }[];
}

export const locations: LocationDetail[] = [
  {
    slug: 'taylor-mi',
    name: 'Taylor, Michigan',
    shortName: 'Taylor',
    description:
      'Whipple Electric Inc is based in Taylor, Michigan, and has been serving local homeowners with residential electrical services for over 40 years. As a Taylor-based business, we understand the housing stock in the area — from mid-century ranches to newer builds — and the electrical issues that come with them.',
    zipCodes: ['48180', '48161'],
    localContext:
      'Taylor features a mix of post-war ranch homes and newer subdivisions, many of which have aging electrical systems that benefit from inspection and upgrades. Common needs in Taylor include panel upgrades for older homes, outlet modernization, and wiring repairs.',
    faqs: [
      { question: 'Are you based in Taylor?', answer: 'Yes. Whipple Electric Inc is located in Taylor, Michigan, making us a local choice for residents who want a nearby electrician.' },
      { question: 'Do you serve all of Taylor?', answer: 'Yes, we serve all neighborhoods within Taylor, including the areas around Telegraph Road, Eureka Road, and Goddard Road.' },
      { question: 'Can you help with older homes in Taylor?', answer: 'Many Taylor homes were built in the mid-20th century. We regularly inspect and upgrade electrical systems in older homes to meet modern safety standards.' },
    ],
  },
  {
    slug: 'southgate-mi',
    name: 'Southgate, Michigan',
    shortName: 'Southgate',
    description:
      'We provide residential electrical services to homeowners in Southgate, Michigan. Whether you need troubleshooting, a panel upgrade, or new lighting installed, our experienced team serves the Southgate community with the same quality and care we bring to our Taylor base.',
    zipCodes: ['48195'],
    localContext:
      'Southgate is a residential community with many homes built in the 1950s through 1970s. These homes often benefit from electrical panel upgrades, grounded outlet installation, and wiring inspections to ensure safe, reliable power.',
    faqs: [
      { question: 'Do you serve Southgate residents?', answer: 'Yes. Southgate is within our service area, and we regularly provide electrical services to homeowners there.' },
      { question: 'What services are most common in Southgate?', answer: 'Common requests from Southgate homeowners include panel upgrades, outlet replacement, lighting installation, and electrical troubleshooting.' },
    ],
  },
  {
    slug: 'allen-park-mi',
    name: 'Allen Park, Michigan',
    shortName: 'Allen Park',
    description:
      'Homeowners in Allen Park, Michigan rely on Whipple Electric Inc for professional residential electrical services. From circuit breaker repair to whole-home rewiring, we bring decades of experience to every project in the Allen Park community.',
    zipCodes: ['48101'],
    localContext:
      'Allen Park features a range of residential properties, from older bungalows to mid-century ranches. Many homes in the area can benefit from electrical safety inspections and updates to meet current code requirements.',
    faqs: [
      { question: 'Do you serve Allen Park?', answer: 'Yes. Allen Park is part of our service area, and we provide a full range of residential electrical services to homeowners there.' },
      { question: 'Can you inspect the wiring in an older Allen Park home?', answer: 'Yes. We perform electrical safety inspections that evaluate wiring, panels, outlets, and grounding in homes of any age.' },
    ],
  },
  {
    slug: 'dearborn-mi',
    name: 'Dearborn, Michigan',
    shortName: 'Dearborn',
    description:
      'We offer residential electrical services to homeowners in Dearborn, Michigan. Whether you live in one of Dearborn\u2019s historic neighborhoods or a newer development, we provide professional electrical repairs, installations, and upgrades tailored to your home.',
    zipCodes: ['48120', '48124', '48126', '48128'],
    localContext:
      'Dearborn has a diverse housing stock, including historic homes that may have original or outdated wiring. These older homes frequently need wiring evaluation, panel upgrades, and grounded outlet installation to meet modern safety standards.',
    faqs: [
      { question: 'Do you serve Dearborn?', answer: 'Yes. Dearborn is within our service area, and we provide residential electrical services throughout the city.' },
      { question: 'Can you help with electrical issues in a historic Dearborn home?', answer: 'Yes. We have experience working with older wiring systems and can evaluate, repair, or upgrade electrical systems in historic homes.' },
    ],
  },
  {
    slug: 'dearborn-heights-mi',
    name: 'Dearborn Heights, Michigan',
    shortName: 'Dearborn Heights',
    description:
      'Whipple Electric Inc provides residential electrical services to homeowners in Dearborn Heights, Michigan. From lighting installation to electrical panel upgrades, we deliver reliable workmanship backed by decades of experience.',
    zipCodes: ['48125', '48127'],
    localContext:
      'Dearborn Heights has a mix of residential neighborhoods with homes from the mid-20th century. Common electrical needs include panel modernization, outlet upgrades, and lighting installation for renovated kitchens and bathrooms.',
    faqs: [
      { question: 'Do you serve Dearborn Heights?', answer: 'Yes. Dearborn Heights is part of our service area, and we provide full residential electrical services to homeowners there.' },
      { question: 'Can you install lighting during a kitchen renovation?', answer: 'Yes. We coordinate with your renovation timeline to install recessed lighting, under-cabinet lighting, and any other fixtures you need.' },
    ],
  },
  {
    slug: 'romulus-mi',
    name: 'Romulus, Michigan',
    shortName: 'Romulus',
    description:
      'We provide residential electrical services to homeowners in Romulus, Michigan. Whether you need troubleshooting, wiring repair, or new outlets installed, our experienced team serves the Romulus community with dependable electrical work.',
    zipCodes: ['48174'],
    localContext:
      'Romulus features a range of residential properties, and its proximity to the airport means some homes experience vibration that can affect electrical connections over time. Regular inspections can identify loose connections before they become problems.',
    faqs: [
      { question: 'Do you serve Romulus?', answer: 'Yes. Romulus is within our service area, and we provide residential electrical services to homeowners throughout the community.' },
      { question: 'Can you add outlets to an older Romulus home?', answer: 'Yes. We install additional outlets, replace two-prong outlets with grounded ones, and add GFCI protection where required by code.' },
    ],
  },
  {
    slug: 'wyandotte-mi',
    name: 'Wyandotte, Michigan',
    shortName: 'Wyandotte',
    description:
      'Homeowners in Wyandotte, Michigan count on Whipple Electric Inc for professional residential electrical services. From circuit repair to lighting upgrades, we serve the Wyandotte community with quality work and straightforward communication.',
    zipCodes: ['48192'],
    localContext:
      'Wyandotte is a historic riverfront community with many older homes that may have original or updated wiring. Electrical safety inspections and panel upgrades are common needs for homeowners looking to preserve character while ensuring safety.',
    faqs: [
      { question: 'Do you serve Wyandotte?', answer: 'Yes. Wyandotte is part of our service area, and we provide a full range of residential electrical services.' },
      { question: 'Can you upgrade the electrical panel in an older Wyandotte home?', answer: 'Yes. We regularly upgrade panels in older homes, replacing outdated equipment with modern, code-compliant panels.' },
    ],
  },
  {
    slug: 'lincoln-park-mi',
    name: 'Lincoln Park, Michigan',
    shortName: 'Lincoln Park',
    description:
      'We provide residential electrical services to homeowners in Lincoln Park, Michigan. From outlet installation to electrical troubleshooting, our experienced team delivers reliable electrical work throughout the Lincoln Park community.',
    zipCodes: ['48146'],
    localContext:
      'Lincoln Park features many mid-century homes that may benefit from electrical modernization. Common projects include panel upgrades, grounded outlet installation, and lighting upgrades for updated interiors.',
    faqs: [
      { question: 'Do you serve Lincoln Park?', answer: 'Yes. Lincoln Park is within our service area, and we provide residential electrical services to homeowners there.' },
      { question: 'Can you troubleshoot an electrical problem in my Lincoln Park home?', answer: 'Yes. We use systematic diagnostic methods to identify and repair electrical problems, from tripping breakers to dead outlets.' },
    ],
  },
  {
    slug: 'trenton-mi',
    name: 'Trenton, Michigan',
    shortName: 'Trenton',
    description:
      'Whipple Electric Inc provides residential electrical services to homeowners in Trenton, Michigan. Whether you need a safety inspection, panel upgrade, or new lighting, we bring decades of experience to every project in the Trenton community.',
    zipCodes: ['48183'],
    localContext:
      'Trenton is a residential community along the Detroit River with a mix of older and newer homes. Homeowners often request electrical inspections, panel upgrades, and outdoor lighting installation to enhance safety and curb appeal.',
    faqs: [
      { question: 'Do you serve Trenton?', answer: 'Yes. Trenton is part of our service area, and we provide full residential electrical services to homeowners there.' },
      { question: 'Can you install outdoor lighting in Trenton?', answer: 'Yes. We install outdoor security lighting, pathway lights, and landscape lighting with proper outdoor-rated wiring.' },
    ],
  },
  {
    slug: 'detroit-mi',
    name: 'Detroit, Michigan',
    shortName: 'Detroit',
    description:
      'We provide residential electrical services to homeowners in Detroit, Michigan. From historic home wiring evaluations to modern lighting installation, we serve Detroit residents with the same quality and care we bring to every community in our service area.',
    zipCodes: ['48210', '48209', '48217', '48228'],
    localContext:
      'Detroit has a vast range of housing stock, from historic early-20th-century homes to newer builds. Many older Detroit homes have knob-and-tube or aluminum wiring that should be evaluated for safety. Panel upgrades and grounded outlet installation are common needs.',
    faqs: [
      { question: 'Which parts of Detroit do you serve?', answer: 'We serve residential properties in Southwest Detroit and surrounding neighborhoods. Contact us with your address and we will confirm whether you are within our service area.' },
      { question: 'Can you evaluate knob-and-tube wiring in a Detroit home?', answer: 'Yes. We inspect older wiring systems and provide an honest assessment of whether it needs replacement or can be safely maintained.' },
    ],
  },
];

export function getLocation(slug: string): LocationDetail | undefined {
  return locations.find((l) => l.slug === slug);
}
