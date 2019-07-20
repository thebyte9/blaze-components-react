import { storiesOf } from "@storybook/react";
import React from "react";
import DrawerReadme from "../README.md";
import Drawer from "../src";
import DrawerMainContent from "../src/DrawerMainContent/DrawerMainContent";
import DrawerPageContent from "../src/DrawerPageContent";
// import Button from "@blaze-react/button";

storiesOf("Drawer", module)
  .addParameters({
    readme: {
      sidebar: DrawerReadme
    }
  })
  .add("Introduction", () => (
    <div className="component-wrapper">
      <h1>Drawer</h1>
      <Drawer modifier="right" permanent>
        <DrawerMainContent>
          <p>
            Elit occaecat qui Lorem eiusmod culpa sunt culpa exercitation Lorem
            culpa. Veniam irure occaecat incididunt amet ullamco Lorem et
            aliquip enim. Ullamco pariatur minim aliquip dolor labore cillum sit
            amet ullamco qui sit officia quis tempor deserunt eu anim. Non
            tempor veniam ullamco irure minim officia sunt reprehenderit
            excepteur. Id et voluptate ea proident ipsum in do eiusmod sunt
            laboris pariatur excepteur eu et ad sint sint. Excepteur sit fugiat
            sit Lorem sunt tempor reprehenderit quis id officia cupidatat veniam
            irure ad et fugiat anim. Voluptate do esse est laborum irure ipsum
            cillum deserunt.
          </p>
          <p>
            Aute deserunt non et incididunt labore eiusmod occaecat minim.
            Eiusmod Lorem Lorem fugiat proident officia commodo mollit enim
            aliqua pariatur aute ea. Reprehenderit anim in ipsum et minim dolore
            mollit dolore. Non nulla minim excepteur amet aute mollit consequat
            ad minim anim cupidatat consequat nostrud qui voluptate. Consequat
            tempor proident tempor reprehenderit sint veniam dolore eiusmod ut
            sunt qui.
          </p>
        </DrawerMainContent>
        <DrawerPageContent>
          <p>
            Rough js to toggle open/close. Would be nice to add a class on the
            content header menu button so it can be hidden when the drawer is
            open & user clicks arrow button on drawer to close
          </p>
          <p>
            Aute magna laboris proident proident velit magna adipisicing do qui
            veniam esse ipsum exercitation id. Labore id anim nisi voluptate
            dolor sit eu reprehenderit est labore amet id irure do. Cupidatat
            excepteur id excepteur ex velit dolor proident laboris excepteur
            esse et nulla reprehenderit proident.
          </p>
        </DrawerPageContent>
      </Drawer>
    </div>
  ));
