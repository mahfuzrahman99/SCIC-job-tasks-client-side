import Lottie from "lottie-react";
import techSphere from "../../public/TechSphere.json";

const TechSphere = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-3 max-w-6xl mx-auto my-16 px-3 md:px-0">
        <div className="col-span-1">
          <Lottie
            animationData={techSphere}
            width={350}
            height={550}
            loop={true}
          />
        </div>
        <div className="col-span-1 space-y-2 md:mt-7">
          <p>
            <span className="font-bold">Developers:</span> Improve your abilities
            using our platforms coding advice and teamwork.
          </p>
          <p>
            <span className="font-bold">Corporate Professionals:</span> Explore
            management techniques, industry trends, and networking possibilities
            here.
          </p>
          <p>
            <span className="font-bold">Bankers and Financial Experts:</span>{" "}
            Keep up to date with market analysis, regulatory developments, and
            financial insights, bankers and financial experts.
          </p>
          <p>
            <span className="font-bold">Startups and entrepreneurs:</span> help
            and motivation for creating and expanding your company.
          </p>
          <p>
            <span className="font-bold">
              Aspiring professionals and students:
            </span>{" "}
            Use mentorship, educational resources, and insights to successfully
            navigate the early phases of your career.
          </p>
          <p>
            <span className="font-bold">Tech enthusiasts:</span> Take a look at
            cutting-edge technology and stay in touch with our active community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSphere;
