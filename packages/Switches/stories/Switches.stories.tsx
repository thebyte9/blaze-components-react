import { storiesOf } from "@storybook/react";
import React, { Suspense, lazy, useState } from "react";
import { action } from "@storybook/addon-actions";
import SwitchesReadme from "../README.md";

const Switches = lazy(() => import("../src/Switches"));

const multiple = [
  { id: 1, label: "Email alerts" },
  { id: 2, label: "Push notifications" },
  { disabled: true, id: 4, label: "SMS (disabled)" },
];

const single = { label: "Receive updates", required: true };

const pencilIcon = (
  <span className="material-icons" aria-hidden="true">
    edit
  </span>
);
const checkIcon = (
  <span className="material-icons" aria-hidden="true">
    check
  </span>
);

const Section = ({ title, children }: any) => (
  <section style={{ margin: "28px 0" }}>
    <h4 style={{ marginBottom: 12 }}>{title}</h4>
    {children}
  </section>
);

const Row = ({ children }: any) => (
  <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
    {children}
  </div>
);

const ControlledSingle = () => {
  const [anyChecked, setAnyChecked] = useState<boolean>(false);
  return (
    <div>
      <Row>
        <Switches
          returnBoolean
          options={single}
          onChange={({ value }) => {
            setAnyChecked(!!value);
            action("onChange(returnBoolean)")(value);
          }}
        />
        <div style={{ minWidth: 140 }}>
          <strong>Status:</strong> {anyChecked ? "ON" : "OFF"}
        </div>
      </Row>
    </div>
  );
};

storiesOf("Switches", module)
  .addParameters({ readme: { sidebar: SwitchesReadme } })
  .add("Overview", (): any => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <h1>Switches</h1>
          <p>
            Switches component is a digital on/off switch used for activating one
            of two predefined options.
          </p>

          <Section title="Single">
            <ControlledSingle />
          </Section>

          <Section title="Multiple uncontrolled with tooltip on click">
            <Switches
              tooltip={{
                tooltipContent: (
                  <>
                    Tooltip on <em>click</em>
                  </>
                ),
                trigger: "click",
              }}
              options={multiple}
              onChange={action("onChange")}
            />
          </Section>

          <Section title="Label positions">
            <Row>
              <Switches options={{ id: "lp-r", label: "Right (default)" }} onChange={action("onChange")} />
              <Switches
                labelPosition="left"
                options={{ id: "lp-l", label: "Left label" }}
                onChange={action("onChange")}
              />
              <Switches
                labelPosition="top"
                options={{ id: "lp-t", label: "Top label" }}
                onChange={action("onChange")}
              />
              <Switches
                labelPosition="base"
                options={{ id: "lp-b", label: "Base label" }}
                onChange={action("onChange")}
              />
            </Row>
          </Section>

          <Section title="Vertical alignment with icon">
            <Row>
              <Switches
                alignVertically
                icon={pencilIcon}
                options={{ id: "v1", label: "Admin link" }}
                onChange={action("onChange")}
              />
              <Switches
                alignVertically
                icon={checkIcon}
                modifier="primary"
                options={{ id: "v3", label: "" }}
                tooltip={{ tooltipContent: "Switch", trigger: "hover", position: "left" }}
                onChange={action("onChange")}
                onText='ON'
                offText='OFF'
              />
            </Row>
          </Section>

        </div>
      </Suspense>
    );
  });

