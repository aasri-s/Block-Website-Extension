const changeHead = () => {
return `<style>
body{
  background: rgb( 97, 152, 101 );
}
.text {
  color: rgb( 45, 41, 46);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 50px;
  text-align: center;
  position: center;
  display: inline-block;
  margin: 19px 0px 0px 0px;
  z-index: 3;
  width: 100%;
  line-height: 1.2em;
}

</style>`;
};

const changeBody = () => {
return `
  <div class = "text" >
    This website is currently unavailable.
  <br>
    Go back to work man.
  </div>
`;
};


if(window.location.hostname == "www.youtube.com"||window.location.hostname == "www.instagram.com" || window.location.hostname == "www.twitter.com"){
  document.head.innerHTML = changeHead();
  document.body.innerHTML = changeBody();
 }