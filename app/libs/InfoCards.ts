import {
  AlarmClockOff,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  LucideIcon,
  Handshake,
  Speech,
} from 'lucide-react';

interface IInfoCard {
  title: string;
  icon: LucideIcon;
  bodyText: string;
  id: number;
}

const infoCards: IInfoCard[] = [
  {
    title: 'Enhanced Customer Service',
    bodyText:
      'Chatbots offer round-the-clock assistance, ensuring prompt responses to customer queries and issues, thus improving satisfaction and loyalty.',
    icon: Handshake,
    id: 1,
  },
  {
    title: 'Increased Efficiency',
    bodyText:
      'By automating repetitive tasks and inquiries, chatbots free up valuable time for employees to focus on more complex and strategic responsibilities, leading to improved productivity and cost savings.',
    icon: ArrowUpNarrowWide,
    id: 2,
  },
  {
    title: 'Personalized Interactions',
    bodyText:
      'Leveraging advanced AI algorithms, chatbots can analyze customer data to deliver personalized recommendations and support, fostering stronger relationships and driving higher conversion rates.',
    icon: Speech,
    id: 3,
  },
];

export default infoCards;
