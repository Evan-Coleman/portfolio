var first = "Evan";
var last = "Coleman";
var email = "evancoleman00@gmail.com";

const strings = {
  navbar: {
    aboutMe: "About me",
    home: "Home",
    resume: "Resume",
    github: "Github",
    linkedin: "Linkedin",
    blog: "Blog",
    name: {
      first: first,
      last: last
    }
  },
  myheader: {
    email: `mailto:${email}`,
    aboutme: {
      title: "Hey there!",
      subtitle: `My name is ${first} ${last}; I'm an experienced Software Engineer`,
      content:
        "I'm from Washington, but currently living in Idaho. I enjoy " +
        "coding, learning, " +
        "hiking, reading, and watching movies!",
      contactbutton: "Email Me"
    },
    profilepictureplaceholder: "Profile Picture"
  },
  myaboutme: {
    title: "about me",
    subtitle1: "Developer,",
    subtitle2: "Engineer,",
    subtitle3: "Creator,",
    subtitle4: "Thinker",
    content1:
      "Currently, my favorite project to-date is a 3rd party API integration. " +
      "It was a large project to take on solo, but probably the most rewarding " +
      "professional experience I've had to date.",
    content2:
      "The two personal projects I'm most proud of right now are both my " +
      "mobile app (Weigh) which you can find on my github, " +
      "and a website I made for a local non-profit " +
      "here in Pocatello called Solarize Pocatello " +
      "( https://SolarizePocatello.org/ ), they are both projects " +
      "that I took on for fun, and ended up learning a ton!"
  },
  myfooter: {
    designedby: "Site design by Eddie Colon",
    projectgithub: "Github for this website!"
  },
  notfound: {
    title: "Page Does Not Exist!"
  },
  mypdfviewer: {
    download: "DOWNLOAD",
    filename: "Evan_Coleman_Resume.pdf"
  },
  myprojects: {
    title: "GITHUB PROJECTS",
    subtitle: "Three repos pulled from Github's API with the latest commits",
    updatedat: "Last Commit: ",
    viewbutton: "VIEW",
    portfoliotext: "My personal portfolio website",
    rusttext:
      "A repo to help me track my learning of the new systems programming language Rust!",
    weightext: "My weight loss mobile app",
    defaultprojecttext: "A project I haven't written a description for yet!"
  },
  myskills: {
    title: "Skills",
    skill1: {
      title: "COMMUNICATION",
      content:
        "I believe communication is the most important skill " +
        "to have in tech and the professional world in general. " +
        "In my work at Farm Bureau, I have had to communicate with " +
        "team members, customers, business owners, and representatives " +
        "from other companies. Not only am I able to effectively " +
        "and succinctly " +
        "convey all information that is needed for a mutually beneficial " +
        "interaction, but I can do it in a way which forges great business " +
        "relationships"
    },
    skill2: {
      title: "LEARNING",
      content:
        "I have an eagerness and excitement for learning new " +
        "tech. I definitely have a thirst for knowledge which won't " +
        "likely ever be quenched. My ideal learning environment is " +
        "one where I'm able to make something. Hands on experience " +
        "allows me to really concrete an idea into my head due " +
        "to the fact that I'll likely have many small failures " +
        "along the way. I believe failure is THE crucial step to " +
        "really learning something."
    },
    skill3: {
      title: "TECHNICAL",
      content:
        "LANGUAGES\n" +
        "C#, Java, JavaScript, Gosu, SQL\n" +
        "\nVARIOUS TECH AND TOOLS\n" +
        "Git, Hibernate, Xamarin, .NET, RESTful APIs, React, " +
        "MongoDB, HTML, CSS, Node.js\n" +
        "\nINDUSTRIES\n" +
        "Insurance, Mobile Development, Full-Stack Web Development"
    }
  }
};

export default strings;
