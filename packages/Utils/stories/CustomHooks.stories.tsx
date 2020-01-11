// import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import faker from "faker";
import React from "react";
import { useInView } from "../src/customHooks";

storiesOf("Video Container", module).add("Lazy load image", (): any => {
  const Image = ({ src, alt }: any) => {
    const [isIntersecting, outerRef]: any = useInView({ once: true });
    console.log("isIntersecting", isIntersecting);
    return (
      <div ref={outerRef} style={{ height: "100px", width: "100px" }}>
        {isIntersecting && <img src={src} alt={alt} />}
      </div>
    );
  };
  return (
    <>
      {[...new Array(100)].map((e, index) => (
        <Image key={index} src={faker.image.avatar()} alt="test" />
      ))}
    </>
  );
});
