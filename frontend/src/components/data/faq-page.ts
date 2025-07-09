interface IFaq {
  label: string;
  content: string[];
}

interface ITopic {
  title: string;
  author: string;
  summary: string;
  image: string;
}

export const needHelpContents: IFaq[] = [
  {
    label: 'How do I create an account?',
    content: [
      "To create an account, click the 'Sign Up' button on the top-right corner and fill in the required details. You’ll receive a confirmation email after registration.",
    ],
  },
  {
    label: 'What payment methods are accepted?',
    content: [
      'We accept major credit cards, PayPal, and digital wallets. You can update your payment method anytime under your account settings.',
    ],
  },
  {
    label: 'Can I reschedule my lessons?',
    content: [
      'Yes, you can reschedule lessons up to 24 hours in advance via your dashboard under the "My Bookings" section.',
    ],
  },
  {
    label: 'How do I reset my password?',
    content: [
      'Click on "Forgot Password?" on the login page. Follow the instructions sent to your registered email address to reset your password.',
    ],
  },
];

export const faqContents: IFaq[] = [
  {
    label: 'What is Brighture?',
    content: [
      'Brighture is a modern, open-source CMS that allows you to create and manage your website content with ease.',
      'It provides a user-friendly interface and powerful features to help you build and maintain your online presence.',
    ],
  },
  {
    label: 'How do I get started with Brighture?',
    content: [
      'To get started, you can visit our documentation page for installation instructions.',
      'Once installed, you can log in to the admin panel and start creating your content.',
    ],
  },
  {
    label: 'Is Brighture free to use?',
    content: [
      'Yes, Brighture is completely free and open-source.',
      'You can download it from our GitHub repository and contribute to its development.',
    ],
  },
  {
    label: 'Where can I find support for Brighture?',
    content: [
      'You can find support in our community forums, GitHub issues, or by joining our Discord server.',
      'We also have a comprehensive documentation section to help you with common questions and issues.',
    ],
  },
  {
    label: 'What is Brighture?',
    content: [
      'Brighture is a modern, open-source CMS that allows you to create and manage your website content with ease.',
      'It provides a user-friendly interface and powerful features to help you build and maintain your online presence.',
    ],
  },
  {
    label: 'How do I get started with Brighture?',
    content: [
      'To get started, you can visit our documentation page for installation instructions.',
      'Once installed, you can log in to the admin panel and start creating your content.',
    ],
  },
  {
    label: 'Is Brighture free to use?',
    content: [
      'Yes, Brighture is completely free and open-source.',
      'You can download it from our GitHub repository and contribute to its development.',
    ],
  },
  {
    label: 'Where can I find support for Brighture?',
    content: [
      'You can find support in our community forums, GitHub issues, or by joining our Discord server.',
      'We also have a comprehensive documentation section to help you with common questions and issues.',
    ],
  },
];

export const trendingTopics: ITopic[] = [
  {
    title: 'The Future of Renewable Energy',
    author: 'by Sarah Lee',
    summary:
      'Explore how solar, wind, and hydro power are transforming the global energy landscape.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'AI Innovations Shaping Our World',
    author: 'by Mark Johnson',
    summary:
      'Discover the latest breakthroughs in artificial intelligence and their impact on industries.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'The Rise of Remote Work',
    author: 'by Emily Chen',
    summary: 'See how remote work trends are changing workplaces and redefining productivity.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'Climate Change: What You Can Do',
    author: 'by Alex Martinez',
    summary:
      'Simple, actionable steps you can take to reduce your carbon footprint and help the planet.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'Top Travel Destinations for 2025',
    author: 'by Linda Park',
    summary: 'Check out the most popular and upcoming travel hotspots for adventurous travelers.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'Health & Wellness Trends You Should Know',
    author: 'by Kevin Ramirez',
    summary: 'From mindful eating to tech-enabled fitness, here’s what’s trending in wellness.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'The Evolution of Smart Homes',
    author: 'by Zoe Carter',
    summary: 'Explore the latest smart home technologies that are making life more convenient.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    title: 'Financial Planning in the Digital Age',
    author: 'by Daniel Kim',
    summary:
      'Learn modern strategies for managing your finances and growing your wealth digitally.',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
];
