import { storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";
import ToasterReadme from "../README.md";
import Toaster from "../src";
import { IMessage } from "../src/types";

const DemoComponent = () => {
  let [counter, setCount] = useState(4);
  const [message, setMessage] = useState<IMessage>({
    id: "3",
    message: "3",
    messageType: "warning"
  });
  const [a, setA] = useState(false);

  const registerInterval = () => {
    setInterval(() => {
      console.log("interval");
      setCount(counter++);
      setMessage({
        id: counter.toString(),
        message: counter.toString(),
        messageType: "warning"
      });
      console.log(counter, "count");
    }, 2000);
  };

  useEffect(() => {
    if (!a) {
      setA(true);
      registerInterval();
    }
  }, [message]);
  return (
    <div className="component-wrapper">
      <section className="introductionSection">
        <Toaster toastMessage={message} />
      </section>
    </div>
  );
};

storiesOf("Toaster", module)
  .addParameters({
    readme: {
      sidebar: ToasterReadme
    }
  })
  .add("Introduction", () => {
    return <DemoComponent />;
  });
