import { storiesOf } from "@storybook/react";
import React from "react";
import DrawerReadme from "../README.md";
import Drawer from "../src";

storiesOf("Drawer", module)
  .addParameters({
    readme: {
      sidebar: DrawerReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Drawer</h1>
      <Drawer modifier="right" title="Drawer Component">
        <Drawer.DrawerMainContent>
          <p>
            Elit occaecat qui Lorem eiusmod culpa sunt culpa exercitation Lorem
            culpa. Veniam irure occaecat incididunt amet ullamco Lorem et
            aliquip enim. Ullamco pariatur minim aliquip dolor labore cillum sit
            amet ullamco qui sit officia quis tempor deserunt eu anim.
          </p>
        </Drawer.DrawerMainContent>
        <Drawer.DrawerPageContent>
          <p>
            Rough js to toggle open/close. Would be nice to add a class on the
            content header menu button so it can be hidden when the drawer is
            open & user clicks arrow button on drawer to close
          </p>
        </Drawer.DrawerPageContent>
      </Drawer>
    </div>
  ));
