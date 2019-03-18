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
    content2: "In my free time, I like to hike, watch movies, and code."
  },
  myfooter: {
    designedby: "Designed by Eddie Colon",
    projectgithub: "Github for this project!"
  },
  notfound: {
    title: "Page Does Not Exist!"
  }
};

export default strings;
