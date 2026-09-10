CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    description     TEXT NOT NULL,
    contact_email   VARCHAR(255) NOT NULL,
    logo_filename   VARCHAR(255) NOT NULL
);

INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

CREATE TABLE project (
    project_id      SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL REFERENCES organization(organization_id),
    title           VARCHAR(200) NOT NULL,
    description     TEXT NOT NULL,
    location        VARCHAR(255) NOT NULL,
    date            DATE NOT NULL
);


INSERT INTO project (organization_id, title, description, location, date) VALUES
(1, 'Solar-Powered Bus Stop Installation',
 'Installing shaded, solar-powered bus shelters to improve community transportation access.',
 'Davenport, FL', '2026-10-05'),

(1, 'Affordable Housing Repair Day',
 'Providing structural repairs, weatherproofing, and safety upgrades for low-income homes.',
 'Haines City, FL', '2026-10-12'),

(1, 'Sustainable Playground Rebuild',
 'Rebuilding a local playground using recycled materials and eco-friendly construction methods.',
 'Winter Haven, FL', '2026-10-19'),

(1, 'Community Center Renovation',
 'Upgrading flooring, lighting, and accessibility features at a neighborhood community center.',
 'Lakeland, FL', '2026-10-26'),

(1, 'Green Roof Demonstration Project',
 'Constructing a small-scale green roof to educate residents on sustainable building practices.',
 'Clermont, FL', '2026-11-02'),

(2, 'Urban Micro-Farm Setup',
 'Creating compact, high-yield garden plots for families to grow fresh produce at home.',
 'Orlando, FL', '2026-10-07'),

(2, 'Composting & Soil Health Workshop',
 'Teaching residents how to compost effectively and improve soil quality for gardening.',
 'Kissimmee, FL', '2026-10-14'),

(2, 'Community Orchard Planting',
 'Planting fruit trees in public spaces to support long-term food access.',
 'Poinciana, FL', '2026-10-21'),

(2, 'Farm-to-Food Pantry Harvest Day',
 'Harvesting and packaging fresh produce for local food pantries.',
 'Celebration, FL', '2026-10-28'),

(2, 'Sustainable Irrigation Demo Build',
 'Installing a low-cost drip irrigation system to demonstrate water-efficient farming.',
 'Orlando, FL', '2026-11-04'),
 
(3, 'Mobile Wellness Outreach',
 'Providing basic health screenings and wellness education to underserved neighborhoods.',
 'Auburndale, FL', '2026-10-09'),

(3, 'Youth Empowerment Workshop',
 'Hosting confidence-building activities and mentorship sessions for local teens.',
 'Davenport, FL', '2026-10-16'),

(3, 'Community Meal Service',
 'Preparing and serving hot meals to families experiencing food insecurity.',
 'Lake Wales, FL', '2026-10-23'),

(3, 'Emergency Hygiene Kit Assembly',
 'Building hygiene kits for individuals affected by sudden hardship or displacement.',
 'Bartow, FL', '2026-10-30'),

(3, 'Veteran Support Appreciation Day',
 'Organizing a community event offering resources, recognition, and support for veterans.',
 'Winter Haven, FL', '2026-11-06');