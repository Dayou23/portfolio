import imgBachelors from "../images/imgBachelors.jpg";
import imgMaster from "../images/imgMaster.jpg";

export const skills = [
  {
    title: "Other abilities",
    skills: [
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },

      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },

      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },

      {
        name: "Git",
        image: "https://git-scm.com/images/logos/logomark-orange@2x.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },

      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      },

      {
        name: "JSON",
        image: "https://img.icons8.com/ios/50/json-download.png",
      },
      {
        name: "LATEX",
        image:
          "https://images.ctfassets.net/nrgyaltdicpt/6qSXAo1CYEeBn5RkKLOR64/19c74bfb9a32772e353ff25c6f0070f5/ologo_square_colour_light_bg.png",
      },
      {
        name: "Microsoft Office",
        image: "https://img.icons8.com/color/48/office-365.png",
      },
      {
        name: "strapi",
        image:
          "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram/w=1920,quality=80,fit=scale-down",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: imgBachelors,
    school: "University Mohamed Khider Biskra",
    date: "sep 2017 - aug 2020",
    desc: "I hold a Bachelor's degree in Computer Science and Information Systems, which I earned in 2020 from the esteemed University Mohamed Khider Biskra. This comprehensive program provided me with a strong foundation in computer science, equipping me with the knowledge and skills necessary to excel in the ever-evolving field of technology. During my three years of study, I delved into a wide range of subjects, including programming, data structures, algorithms, software development, and information systems. My academic journey not only honed my technical abilities but also fostered a problem-solving mindset and a passion for innovation. My degree serves as the bedrock of my career, enabling me to tackle complex challenges and contribute effectively to the world of software development and IT.",
    degree: "Bachelors Degree - Computer Science Information Systems",
  },
  {
    id: 1,
    img: imgMaster,
    school: "University Mohamed Khider Biskra",
    date: "sep 2020 - aug 2022",
    desc: "I hold a Master's degree in Computer Science with a specialization in Information Systems, Optimization, and Decision Making, which I proudly earned in 2022 from Mohamed Khedr University in Biskra. This advanced program deepened my expertise in the intersection of computer science and information systems, equipping me with specialized knowledge and skills in optimizing decision-making processes. Over the course of two intensive years, I engaged in advanced coursework, research, and practical applications that honed my ability to tackle complex challenges in the world of technology. My Master's degree not only expanded my technical proficiency but also nurtured my critical thinking and problem-solving abilities, enabling me to address intricate issues in information systems and make data-driven decisions. It serves as a testament to my commitment to continuous learning and my dedication to staying at the forefront of the field.",
    degree:
      "Master Degre - Computer Science Information Systems, Optimization, and Decision",
  },
];

export const projects = [
  {
    id: 1,
    title: "cronos shop",
    date: "Jan 2023 - may 2023",
    description:
      "I am thrilled to showcase my full-stack development expertise through the creation of the 'Cronos' store, a project I single-handedly conceived and developed. On the client side, I utilized JavaScript, HTML5, and CSS to craft the website's engaging user interface. React JS, Material UI, and Redux were integral in creating a seamless and visually appealing front-end experience. For the server-side functionality, I turned to Node.js and Express.js, ensuring robust and efficient handling of requests and responses. On the database front, I implemented MongoDB to manage data, ensuring data integrity and reliability. The 'Cronos' store project is a testament to my end-to-end web development skills, from front-end design to back-end implementation, showcasing my ability to deliver a fully functional and responsive web application.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/Screenshot%202023-09-21%20203823.png?alt=media&token=084255e9-da0b-45d3-a587-5fa65bbc6870",
    tags: ["React Js", "Redux", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/Dayou23/CRONOS",
    webapp: "https://cronos-market.web.app",
  },
  {
    id: 2,
    title: "cronos dashboard",
    date: "Jan 2023 - may 2023",
    description:
      "I take immense pride in my work on the Cronos Dashboard, a full-stack web application that I meticulously developed from start to finish. On the client side, I leveraged my expertise in JavaScript, HTML5, and CSS to create an elegant and user-friendly interface. The implementation of the React JS library, in conjunction with Material UI and Redux, ensured a seamless and responsive front-end experience. On the server side, I turned to Node.js and Express.js to build a robust and efficient server infrastructure capable of handling complex administrative tasks. For data management, I seamlessly integrated MongoDB on the back end, guaranteeing data integrity and accessibility. The Cronos Dashboard project exemplifies my prowess as a full-stack developer, showcasing my ability to craft sophisticated, end-to-end web applications that elevate user experiences and streamline administrative processes. note: cronos dashboard is considered an admin for cronos store",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/Screenshot%202023-09-21%20212022.png?alt=media&token=e2533609-c67a-4f15-a548-3748d9de136c",
    tags: ["React Js", "Redux", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/Dayou23/cronos-dashboard",
    webapp: "https://cronos-dashboard.web.app",
    // member: [
    //   {
    //     name: "Zehana diyaa",
    //     img: "",
    //     linkedin: "",
    //     github: "",
    //   },
    //   {
    //     name: "",
    //     img: "",
    //     linkedin: "",
    //     github: "",
    //   },
    // ],
  },
  {
    id: 3,
    title: "prayer timing",
    date: "oct 2023 - nov 2023",
    description:
      "The Islamic faith involves five fundamental prayers, and the scheduling of these prayers is associated with the sun's cycle from sunrise to sunset. The Aladhan API was utilized to ascertain the timings of each prayer session. A website was created using the React JS library, and the design incorporated the Material user interface.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/prayer-timing-2023-11-17%20183959.png?alt=media&token=687a6677-d840-4af1-98b8-2dcb733a5145",
    tags: ["React Js", "Material UI"],
    category: "web app",
    github: "https://github.com/Dayou23/prayer-time",
    webapp: "https://zippy-cucurucho-9945ac.netlify.app/",
  },
  {
    id: 4,
    title: "prayer timing",
    date: "Jan 2024 - feb 2024",
    description:
      "Deifel-Gypse, a full-stack website project that highlights my proficiency in both frontend and backend programming, is something I'm glad to present. Utilizing the client-side capabilities of HTML5, Tailwind CSS, and TypeScript, I created a dynamic and captivating user interface with the Next.js framework. To effectively manage and distribute information, I incorporated the Strapi information Management System on the server side in the meantime. This project showcases my expertise in cutting-edge web development technologies as well as my ability to combine frontend and backend elements in a smooth manner to produce a well-thought-out and useful online solution.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/zehana-diyaa.appspot.com/o/deifel-gypse.png?alt=media&token=eab4014e-5972-4e4b-b81f-395c25ef6497",
    tags: ["next Js", "strapi", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/Dayou23/gypsum_company",
    webapp: "https://deifel-gypse.vercel.app/",
  },
];
