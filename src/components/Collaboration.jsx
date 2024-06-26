import { brainwaveSymbol, check } from "../assets";
import { techStack, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses id="skills">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-2 md:mb-4">
          Tech Arsenal
          </h2>
          <h4 className="h4 mb-4 md:mb-8">
            - What I Bring to the Table
          </h4>

          <ul className="max-w-[22rem] mb-6 md:mb-10">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button className="mb-4" href="https://github.com/rohan196">Check Out Now</Button>
        </div>

        <div className="mb-4 lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-16 text-n-4 md:mb-12 lg:mb-36 lg:w-[25rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="px-4 relative left-1/2 flex w-[18rem] lg:w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[5rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={44}
                    height={44}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {techStack.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
