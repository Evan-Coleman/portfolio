var first = "Evan";
var last = "Coleman";

const strings = {
  header: {
    name: {
      first: first,
      last: last
    },
    navBar: {
      aboutMe: "About me",
      resume: "Resume",
      github: "Github",
      linkedin: "Linkedin",
      blog: "Blog"
    },
    aboutMe: {
      title: "Hey there!",
      subtitle: `My name is ${first} ${last}; I'm an experienced Software Engineer`,
      content:
        "I'm from Washington and really enjoy coding and learning all kinds of new stuff!",
      contactButton: "Contact Me"
    },
    profilePicturePlaceholder: "Profile Picture"
  },
  aboutMe: {
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
  }
};

export default strings;
