import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a React app</p>
      {/* <p>Version: 1.0.0</p> */}
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default AboutPage;
