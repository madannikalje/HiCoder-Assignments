function say(massage) {
    console.log(typeof massage);
    massage? massage = massage:massage="hi";
    console.log(massage);
  }
  say();
  say("XYZ");