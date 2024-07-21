import React from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Content from "@/components/Content";
import Leaf from "@/assets/icons/leaf.svg";
import FeatureCard from "./FeatureCard";

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
    <div className="bg-black py-12 text-white">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-5 text-center">
          <Title>Everything you need</Title>
          <Content>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </Content>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {FeaturesList.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
