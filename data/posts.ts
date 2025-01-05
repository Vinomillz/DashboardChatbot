import { Post } from '@/types/posts';

const posts: Post[] = [
  {
    id: '001',
    vendor: 'Jumia',
    status: 'In transit',
    destination: 'Accra, Ghana',
    body: 'The client want to send some clothes he bought from ekiti to abuja',
    author: 'mr uche',
    date: '2024-05-01',
    comments: [
      { id: '1', text: 'Great introduction!', username: 'Jane' },
      {
        id: '2',
        text: 'Looking forward to more posts on this topic.',
        username: 'Alex',
      },
    ],
  },
  {
    id: '002',
    vendor: 'Temu',
    status: 'Delivered',
    destination: 'Kampala, Uganda',
    body: 'Quantum computing holds the potential to solve problems...',
    author: 'Omena Anderson',
    date: '2024-04-28',
    comments: [
      { id: '1', text: 'Fascinating read!', username: 'Mark' },
      {
        id: '2',
        text: 'I have some questions about quantum algorithms.',
        username: 'Sarah',
      },
    ],
  },
  {
    id: '003',
    vendor: 'Jiji',
    status: 'Delayed',
    destination: 'casablanca',
    body: 'Blockchain technology is disrupting traditional industries...',
    author: 'Amadi unity',
    date: '2024-05-03',
    comments: [
      { id: '1', text: 'Blockchain has immense potential!', username: 'Lucy' },
      {
        id: '2',
        text: "I'm curious about its scalability.",
        username: 'Michael',
      },
    ],
  },
  {
    id: '004',
    vendor: 'Mouka',
    status: 'Delayed',
    destination: 'Lagos, Nigeria',
    body: 'Augmented Reality (AR) is changing the way we interact...',
    author: 'mbiamnozie uchenna',
    date: '2024-05-05',
    comments: [
      { id: '1', text: 'AR applications are amazing!', username: 'Grace' },
      {
        id: '2',
        text: "Can't wait to see AR integrated into everyday life.",
        username: 'Jack',
      },
    ],
  },
  {
    id: '005',
    vendor: 'Itel',
    status: 'Delayed',
    destination: 'Calgary, canada',
    body: 'The Internet of Things (IoT) is creating interconnected...',
    author: 'eze jude',
    date: '2024-05-08',
    comments: [
      {
        id: '1',
        text: 'IoT has huge potential for smart homes.',
        username: 'Olivia',
      },
      {
        id: '2',
        text: 'Security concerns need to be addressed.',
        username: 'William',
      },
    ],
  },
  {
    id: '006',
    vendor: 'Jumia',
    status: 'Delivered',
    destination: 'Germany, France',
    body: '5G technology promises faster speeds and lower latency...',
    author: 'Emma johnson',
    date: '2024-05-10',
    comments: [
      {
        id: '1',
        text: 'Excited for the possibilities with 5G.',
        username: 'Sophie',
      },
      {
        id: '2',
        text: 'Hope it improves rural connectivity too.',
        username: 'Ethan',
      },
    ],
  },
  {
    id: '007',
    vendor: 'Temu', 
    status: 'In transit',

    destination: 'Kenya, Ethopia',
    body: 'As technology advances, cybersecurity becomes...',
    author: 'Michael chukwudi',
    date: '2024-05-12',
    comments: [
      {
        id: '1',
        text: 'Cybersecurity is crucial for protecting data.',
        username: 'Ava',
      },
      { id: '2', text: 'Continuous monitoring is key.', username: 'Noah' },
    ],
  },
  {
    id: '008',
    vendor: 'Jiji',
    status: 'Delivered',
    destination: 'Enugu, Nigeria',
    body: 'Artificial Neural Networks (ANNs) are inspired by the...',
    author: 'Isabella lotachi',
    date: '2024-05-15',
    comments: [
      {
        id: '1',
        text: 'ANNs have applications in various fields.',
        username: 'Liam',
      },
      {
        id: '2',
        text: 'Training them requires a lot of data.',
        username: 'Mia',
      },
    ],
  },
  {
    id: '009',
    vendor: 'Temu',
    status: 'Delayed',
    destination: 'Portharcot, Nigeria ',
    body: 'Client sends some solar panel material needs them urgently',
    author: 'James mabel',
    date: '2024-05-18',
    comments: [
      {
        id: '1',
        text: 'Cloud computing has transformed IT.',
        username: 'Harper',
      },
      {
        id: '2',
        text: 'Concerned about data privacy in the cloud.',
        username: 'Logan',
      },
    ],
  },
  {
    id: '010',
    vendor: 'Samsung',
    status: 'In transit',
    destination: 'Lagos, Nigeria',
    body: 'The client wants to send his mercedes benz part he bought from temu',
    author: 'Umezinwa vincent',
    date: '2024-05-20',
    comments: [
      { id: '1', text: 'ML is reshaping industries.', username: 'Emma' },
      {
        id: '2',
        text: "I'm interested in reinforcement learning.",
        username: 'Daniel',
      },
    ],
  },
];

export default posts;