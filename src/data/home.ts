import type { SectionData } from "../../types"

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
        image: '/icons/reactjs.png',
        title: "ReactJS"
      },
      {
        id: 'technologies-4',
        bg_color: null,
        description: null,
        image: '/icons/angular.png',
        title: "Angular"
      },
      {
        id: 'technologies-2',
        bg_color: null,
        description: null,
        image: '/icons/vue.png',
        title: "Vuejs"
      },
      {
        id: 'technologies-3',
        bg_color: null,
        description: null,
        image: '/icons/laravel.png',
        title: "Laravel"
      },
      {
        id: 'technologies-5',
        bg_color: null,
        description: null,
        image: '/icons/django.png',
        title: "Django"
      },
      {
        id: 'technologies-6',
        bg_color: null,
        description: null,
        image: '/icons/rails.png',
        title: "Ruby on rails"
      },
      {
        id: 'technologies-7',
        bg_color: null,
        description: null,
        image: '/icons/spring.png',
        title: "Spring boot"
      },
      {
        id: 'technologies-8',
        bg_color: null,
        description: null,
        image: '/icons/swift.png',
        title: "Swift"
      },
      {
        id: 'technologies-9',
        bg_color: null,
        description: null,
        image: '/icons/microsoft-azure.png',
        title: "Swift"
      },
      {
        id: 'technologies-10',
        bg_color: null,
        description: null,
        image: '/icons/net.png',
        title: "Swift"
      },
      {
        id: 'technologies-11',
        bg_color: null,
        description: null,
        image: '/icons/net.png',
        title: "Swift"
      },
    ],
    title: "Find your favorite technology",
  },
  chooseSection: {
    background_image: null,
    description:
      "We are a platform to get any jobs for developers and project managers. Meet and greet some people and more text.",
    main_image: '/home-choosing-1.png',
    title: "Why choose us?",
    articles: [
      {
        id: "HomeChoosing1",
        image: '/home-choosing-1.png',
        bg_color: "#FBF5FE",
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años",
        title: "Developer Congruenci",
    },
    {
        id: "HomeChoosing2",
        image: '/home-choosing-2.png',
        bg_color: "#FFFAF5",
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años",
        title: "Developer Congruenci",
    },
    {
        id: "HomeChoosing3",
        image: '/home-choosing-2.png',
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
    background_image: '/statistics/background.png', 
    main_image: '/statistics/main.png',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    title: "More data, more info"
  },
  generic: {
    articles: [],
    background_image: '/generic/background.png' ,
    main_image: '/generic/main.png',
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
