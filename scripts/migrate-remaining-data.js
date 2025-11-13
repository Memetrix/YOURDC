const {createClient} = require('@sanity/client');

const client = createClient({
  projectId: '6uy69xt8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skDN7PU7AlXcGUveIPPSxiT0M9sJIlb4LoBe7vFjyVtLO4TRTz8APAedoB3qZ8hnPkW1hGDPZJaNuxOoSZ3oThs0Bv6Dca5sDa0pNKmXKKaN5ikV8Ww2w2I23w8fhbaZquCkY7RmUSp0Rh1Dv3vMdjfoCEEIXIRfkUlxhsy8MSnysU93sl5Q',
  useCdn: false,
});

// Import data from mockData
const { infrastructure, certificates, partners, clients } = require('../data/mockData.ts');

async function migrateData() {
  console.log('Starting data migration...\n');

  try {
    // 1. Migrate Infrastructure
    console.log('📦 Migrating Infrastructure data...');
    const infrastructureKeys = Object.keys(infrastructure);
    for (let i = 0; i < infrastructureKeys.length; i++) {
      const key = infrastructureKeys[i];
      const section = infrastructure[key];

      const doc = {
        _type: 'infrastructure',
        title: section.title,
        items: section.items,
        order: i + 1,
      };

      const result = await client.create(doc);
      console.log(`✓ Created infrastructure: ${section.title} (ID: ${result._id})`);
    }

    // 2. Migrate Certificates
    console.log('\n📜 Migrating Certificates...');
    for (let i = 0; i < certificates.length; i++) {
      const cert = certificates[i];

      const doc = {
        _type: 'certificate',
        name: cert.name,
        issuer: cert.issuer,
        description: cert.description,
        order: i + 1,
      };

      const result = await client.create(doc);
      console.log(`✓ Created certificate: ${cert.name} (ID: ${result._id})`);
    }

    // 3. Migrate Partners
    console.log('\n🤝 Migrating Partners...');
    for (let i = 0; i < partners.length; i++) {
      const partner = partners[i];

      const doc = {
        _type: 'partner',
        name: partner,
        order: i + 1,
      };

      const result = await client.create(doc);
      console.log(`✓ Created partner: ${partner} (ID: ${result._id})`);
    }

    // 4. Migrate Clients
    console.log('\n👥 Migrating Client Case Studies...');
    for (let i = 0; i < clients.length; i++) {
      const client_data = clients[i];

      const doc = {
        _type: 'client',
        name: client_data.name,
        industry: client_data.industry,
        solution: client_data.solution,
        description: client_data.description,
        order: i + 1,
      };

      const result = await client.create(doc);
      console.log(`✓ Created client: ${client_data.name} (ID: ${result._id})`);
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\nSummary:');
    console.log(`- Infrastructure sections: ${infrastructureKeys.length}`);
    console.log(`- Certificates: ${certificates.length}`);
    console.log(`- Partners: ${partners.length}`);
    console.log(`- Client case studies: ${clients.length}`);
    console.log(`\nTotal documents created: ${infrastructureKeys.length + certificates.length + partners.length + clients.length}`);

  } catch (error) {
    console.error('\n❌ Error during migration:', error);
    process.exit(1);
  }
}

migrateData();
