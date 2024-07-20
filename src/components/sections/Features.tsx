import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Content from "@/components/Content";
import Leaf from "@/assets/icons/leaf.svg";

const FeaturesList = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-12">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-5 text-center">
          <Title>Everything you need</Title>
          <Content>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </Content>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-12">
          {FeaturesList.map((feature, index) => (
            <div
              key={index}
              className="flex max-w-sm flex-col items-center justify-center gap-4 rounded-md border border-white/20 bg-dark-grey p-8 text-white"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-white">
                <Leaf />
              </div>
              <h3 className="text-md font-bold">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
