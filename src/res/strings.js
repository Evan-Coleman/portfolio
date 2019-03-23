var first = "Evan";
var last = "Coleman";

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
    email: "mailto:evancoleman00@gmail.com",
    aboutme: {
      title: "Hey there!",
      subtitle: `My name is ${first} ${last}; I'm an experienced Software Engineer`,
      content:
        "I'm from Washington and really enjoy coding and learning all kinds of new stuff!",
      contactbutton: "Contact Me"
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
      "It was a tough project to take on solo, but probably the most rewarding " +
      "experience I've had",
    content2:
      "In my free time, I like to hike, watch movies, and code. " +
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
    subtitle: "Three repos with the latest commits"
  }
};

export default strings;
