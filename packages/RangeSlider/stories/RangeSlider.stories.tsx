import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import RangeReadme from "../README.md";

storiesOf("Range Slider", module)
  .addParameters({
    readme: {
      sidebar: RangeReadme
    }
  })
  .add("Introduction", () => {
    const RangeSlider: any = lazy((): any => import("../src"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <form>
          <div className="component-wrapper">
            <section className="introductionSection">
              <h1>Range Slider</h1>
              <p>
                Range slider allows the input of numeric values within a specific range.
                It can accept a single value, or a range of values (min/max).
            </p>
            </section>

            <hr />


            <section className="exampleSectionRangeSlider">
              <h4>Range Slider with one moveable handler</h4>

              <RangeSlider
                name="oneValue"
                maxValue={20}
                minValue={0}
                onChange={() => { }}
                value={15} />

              <br />
              <br />
              <br />
              <br />
              <br />

              <h4>Range Slider with one moveable handler and custom step value</h4>

              <RangeSlider
                name="step"
                maxValue={20}
                minValue={0}
                onChange={() => { }}
                step={5}
                value={15} />

              <br />
              <br />
              <br />
              <br />
              <br />

              <h4>Range Slider with two moveable handlers</h4>

              <RangeSlider
                name="twoValue"
                maxValue={20}
                minValue={0}
                onChange={() => { }}
                value={{ min: 3, max: 7 }} />

              <br />
              <br />
              <br />
              <br />
              <br />

              <h4>Range Slider with two moveable handlers and draggable track</h4>

              <RangeSlider
                draggableTrack
                name="draggableTrack"
                maxValue={20}
                minValue={0}
                onChange={() => { }}
                value={{ min: 3, max: 7 }} />
            </section>

          </div>
        </form>
      </Suspense>
    );
  });
