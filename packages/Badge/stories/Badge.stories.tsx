import { storiesOf } from "@storybook/react";
import React from "react";
import BadgeReadme from "../README.md";
import Badge from "../src";

storiesOf("Badges", module)
  .addParameters({
    readme: {
      sidebar: BadgeReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Badges</h1>
      <p>
        Badges are small components typically used to communicate a numerical
        value or indicate the status of an item to the user.
      </p>

      <h4>Default</h4>
      <Badge>Badge</Badge>
      <br />
      <br />

      <h4>Primary color</h4>
      <Badge type="primary">Badge</Badge>
      <br />
      <br />

      <h4>Secondary color</h4>
      <Badge type="secondary">Badge</Badge>
      <br />
      <br />

      <h4>Success</h4>
      <Badge type="success">Badge</Badge>
      <br />
      <br />

      <h4>Alert</h4>
      <Badge type="alert">Badge</Badge>
      <br />
      <br />

      <h4>Info</h4>
      <Badge type="info">Badge</Badge>
      <br />
      <br />

      <h4>Light</h4>
      <Badge type="light">Badge</Badge>
      <br />
      <br />

      <h4>Dark</h4>
      <Badge type="dark">Badge</Badge>
      <br />
      <br />

      <h4>Link</h4>
      <p>
        Link now needs to be passed as children props of Badge and it should
        include a class depending on the type of badge that needs to be
        displayed. The a tag has been removed to prevent browsers from
        interpreting it as an external link
      </p>
      <Badge type="info" link>
        <a className="badge badge--info">Go to byte9</a>
      </Badge>
      <br />
      <br />

      <h4>Icon</h4>
      <p>Icon and icon name needs to be passed as children props of Badge</p>
      <Badge type="pagebuilder" color="deep-orange" icon>
        Social follow
        <i className="fas fa-share" />
      </Badge>
      <br />
      <br />

      <h4>Page Builder</h4>
      <Badge type="pagebuilder" color="grey-dark">
        Badge
      </Badge>
      <br />
      <br />
      <h4>Blue</h4>
      <Badge type="pagebuilder" color="blue">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Light-blue</h4>
      <Badge type="pagebuilder" color="light-blue">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Deep orange</h4>
      <Badge type="pagebuilder" color="deep-orange">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Orange</h4>
      <Badge type="pagebuilder" color="orange">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Purple</h4>
      <Badge type="pagebuilder" color="purple">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Deep-purple</h4>
      <Badge type="pagebuilder" color="deep-purple">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Pink</h4>
      <Badge type="pagebuilder" color="pink">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Red</h4>
      <Badge type="pagebuilder" color="red">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Cyan</h4>
      <Badge type="pagebuilder" color="cyan">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Teal</h4>
      <Badge type="pagebuilder" color="teal">
        Badge
      </Badge>
      <br />
      <br />

      <h4>Green</h4>
      <Badge type="pagebuilder" color="green">
        Badge
      </Badge>
      <br />
      <br />
    </div>
  ));
