import Netflix_Logo from "../assets/Netflix_Logo_.png";

const Header = () => {
  return (
    <>
      <div className=" bg-linear-to-b from-black w-screen">
        <img src={Netflix_Logo} alt="Netflix logo" className=" w-40" />
      </div>
    </>
  );
};

export default Header;
