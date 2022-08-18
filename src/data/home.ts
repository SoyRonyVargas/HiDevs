import IconMicrosoftAzure from '../assets/icons/microsoft-azure.png'
import HomeChoosing1 from '../assets/home-choosing-1.png'
import HomeChoosing2 from '../assets/home-choosing-2.png'
import IconReactjs from '../assets/icons/reactjs.png'
import IconAngular from '../assets/icons/angular.png'
import IconLaravel from '../assets/icons/laravel.png'
import IconDjango from '../assets/icons/django.png'
import IconSpring from '../assets/icons/spring.png'
import IconSwift from '../assets/icons/swift.png'
import IconRails from '../assets/icons/rails.png'
import IconDotNet from '../assets/icons/net.png'
import IconVuejs from '../assets/icons/vue.png'
import type { SectionData } from "../../types"

import BackgroundStatistic from '../assets/statistics/background.png'
import MainImageStatistic from '../assets/statistics/main.png'

import BackgroundGeneric from '../assets/generic/background.png'
import MainImageGeneric from '../assets/generic/main.png'


export const data: SectionData = {
  tecnologies: {
    background_image: null,
    description: "",
    main_image: null,
    articles: [
      {
        id: 'technologies-1',
        bg_color: null,
        description: null,
        image: IconReactjs,
        title: "ReactJS"
      },
      {
        id: 'technologies-4',
        bg_color: null,
        description: null,
        image: IconAngular,
        title: "Angular"
      },
      {
        id: 'technologies-2',
        bg_color: null,
        description: null,
        image: IconVuejs,
        title: "Vuejs"
      },
      {
        id: 'technologies-3',
        bg_color: null,
        description: null,
        image: IconLaravel,
        title: "Laravel"
      },
      {
        id: 'technologies-5',
        bg_color: null,
        description: null,
        image: IconDjango,
        title: "Django"
      },
      {
        id: 'technologies-6',
        bg_color: null,
        description: null,
        image: IconRails,
        title: "Ruby on rails"
      },
      {
        id: 'technologies-7',
        bg_color: null,
        description: null,
        image: IconSpring,
        title: "Spring boot"
      },
      {
        id: 'technologies-8',
        bg_color: null,
        description: null,
        image: IconSwift,
        title: "Swift"
      },
      {
        id: 'technologies-9',
        bg_color: null,
        description: null,
        image: IconMicrosoftAzure,
        title: "Swift"
      },
      {
        id: 'technologies-10',
        bg_color: null,
        description: null,
        image: IconDotNet,
        title: "Swift"
      },
      {
        id: 'technologies-11',
        bg_color: null,
        description: null,
        image: IconDotNet,
        title: "Swift"
      },
    ],
    title: "Find your favorite technology",
  },
  chooseSection: {
    background_image: null,
    description:
      "We are a platform to get any jobs for developers and project managers. Meet and greet some people and more text.",
    main_image: HomeChoosing1,
    title: "Why choose us?",
    articles: [
      {
        id: "HomeChoosing1",
        image: HomeChoosing1,
        bg_color: "#FBF5FE",
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años",
        title: "Developer Congruenci",
    },
    {
        id: "HomeChoosing2",
        image: HomeChoosing2,
        bg_color: "#FFFAF5",
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años",
        title: "Developer Congruenci",
    },
    {
        id: "HomeChoosing3",
        image: HomeChoosing1,
        bg_color: "#F5FFF7",
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años",
        title: "Developer Congruenci",
      },
    ],
  },
  statistics: {
    articles: [
      {
        bg_color: null,
        description: "New jobs",
        id: "",
        image: null,
        title: "+20k"
      },
      {
        bg_color: null,
        description: "Users today",
        id: "",
        image: null,
        title: "+30k"
      },
      {
        bg_color: null,
        description: "Of growth",
        id: "",
        image: null,
        title: "+100%"
      }
    ],
    background_image: BackgroundStatistic, 
    main_image: MainImageStatistic,
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    title: "More data, more info"
  },
  generic: {
    articles: [],
    background_image: BackgroundGeneric ,
    main_image: MainImageGeneric,
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    title: "Generic Title"
  },
  pricing: {
    articles: [
      {
        title: "Free",
        description: "Desconocido usó una galería de textos y los mezcló de tal que logró hacer un libro de textos especimen. ",
        bg_color: null,
        id: "pricing-1",
        image: null,
        price: 0,
        list: [
          {
            title: "Applies to 3 monthly offers" ,
            description: "",
            checked: true
          },
          {
            title: "Create unlimited posts" ,
            description: "",
            checked: false
          },
          {
            title: "No adds" ,
            description: "",
            checked: false
          },
          {
            title:  "Dedicated support" ,
            description: "",
            checked: false
          },
        ]
      },
      {
        title: "Premium",
        description: "Desconocido usó una galería de textos y los mezcló de tal que logró hacer un libro de textos especimen. ",
        bg_color: null,
        id: "pricing-1",
        image: null,
        price: 199,
        list: [
          {
            title: "Applies to unlimited monthly offers" ,
            description: "",
            checked: true
          },
          {
            title: "Create unlimited posts" ,
            description: "",
            checked: true
          },
          {
            title: "No adds" ,
            description: "",
            checked: true
          },
          {
            title: "Dedicated support" ,
            description: "",
            checked: true
          },
        ]
      }
    ],
    background_image: null,
    title: "Our Pricing",
    description: "Check out best prices",
    main_image: null
  }
};
