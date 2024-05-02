interface IPricingCard {
  price: number;
  title: string;
  benefits: string[];
  id: number;
  oneliner: string;
}

const pricingCards: IPricingCard[] = [
  {
    price: 49,
    title: 'BotNest Pro',
    benefits: [
      'Cost-effective solution',
      'Core functionality access',
      'Scalability and growth',
      'Quick setup process',
    ],
    id: 1,
    oneliner: 'AI-powered chatbot for focused customer satisfaction.',
  },
  {
    price: 99,
    title: 'BotNest Enterprise',
    benefits: [
      'Everything In Pro Tier, and:',
      'Advanced feature suite',
      'Dedicated support team',
      'Extensive customization options',
    ],
    id: 2,
    oneliner: 'Comprehensive customer satisfaction optimization',
  },
];

export default pricingCards;
