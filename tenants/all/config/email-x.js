const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration(process.env.EMAILX_SERVE_URI || 'https://ascend.serve.email-x.parameter1.com');

config
  .setAdUnits('aad-enewsletter-1', [
    {
      name: 'ad-slot-1',
      id: '60be56789006f6300c5c70c6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '60c7b2979006f6c5ef5c7554',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '60c7b2a89006f689715c7570',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '60c7b2cc9006f627585c75b9',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '60c7b3249333294f17b248f6',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '60c7b3379006f646095c760b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '60c7b34a9006f644265c761e',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aua-daily', [
    {
      name: 'ad-slot-1',
      id: '60be59399333292cf6b24511',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '60be59549006f6424c5c722f',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '60be596b9006f67e2c5c7242',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '60be59819006f6679d5c7255',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '60be59c6933329c6e5b24551',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '60be59dd933329630fb2455b',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '60be59f293332980e9b24577',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aad-enewsletter-2', [
    {
      name: 'ad-slot-1',
      id: '6102f2186a853c44e5e6ba51',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '6102f2319006f651155c812e',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '6102f2446a853c8d22e6ba76',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '6102f2559006f68b305c814a',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '6102f2679006f623ce5c815d',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '6102f2786a853c2db1e6baa4',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '6102f28b6a853c6f95e6bac0',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('aha-vascular-registered', [
    {
      name: 'ad-slot-1',
      id: '610d37bd9006f629825c8a4c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-2',
      id: '610d37e16a853cfcc0e6c319',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-3',
      id: '610d38026a853c5da2e6c32c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-4',
      id: '610d38176a853c6526e6c33f',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-5',
      id: '610d38356a853c1397e6c352',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-6',
      id: '610d38516a853c547ae6c35c',
      width: 600,
      height: 100,
    },
    {
      name: 'ad-slot-7',
      id: '610d386f6a853c090ee6c366',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
