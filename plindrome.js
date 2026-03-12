function palidrome(str) {
  let name = str;
  let reverseName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    reverseName += name[i];
  }
  if (name === reverseName) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}
palidrome("mom")