const textEffects = {
  textShadow: "2px 2px 2px red",
  textAlign: "center",
  fontSize: "45px",
};

const cent = {
  textAlign: "center",
};
const line1 = {
  width: "50%",
};

const img1 =
  "https://www.mo.agency/hubfs/So%20you%20want%20to%20be%20a%20web%20developer.png";
function About() {
  return (
    <>
      <h1 style={textEffects}>About Me</h1>
      <hr />
      <div className="rows">
        <div className="cols">
          <img src={img1} className="imgDev" />
        </div>
        <div className="cols">
          <h1 style={cent}>Who am I?</h1>
          <hr style={line1} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn">Wanna Know Me</button>
        </div>
      </div>
    </>
  );
}

export default About;
