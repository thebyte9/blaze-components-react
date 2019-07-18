import Button from "@blaze-react/button";
import withUtils from "@blaze-react/utils";
import React, { useState } from "react";

// import AccordionContent from "./AccordionContent";
// import AccordionContentDetails from "./AccordionContent/AccordionContentDetails";
// import AccordionContentFooter from "./AccordionContent/AccordionContentFooter";
// import AccordionHeader from "./AccordionHeader";

interface IDrawerProps {
  children?: [JSX.Element, JSX.Element];
  utils: {
    classNames: (className: string | object, classNames?: object) => string;
  };
}

const Drawer = ({
  children,
  utils: { classNames }
}: IDrawerProps): JSX.Element => {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  const drawerClassNames: string = classNames(
    "drawer drawer--left drawer--responsive",
    {
      open: menuStatus
    }
  );

  // const [header, content]: [JSX.Element, JSX.Element] = children;

  // const isActive: boolean = accordionStatus === flex
  // const toggleAccordion = (): void => setAccordionStatus(isActive ? none : flex);

  return (
    <div className="drawer__wrapper">
      <div className={drawerClassNames}>
        <div className="drawer__content-wrapper">
          <div className="drawer__header drawer__header--responsive">
            <Button
              className="icon-button"
              onClick={(): void => {
                console.log(888);
                setMenuStatus(!menuStatus);
              }}
            >
              <i className="material-icons">keyboard_arrow_left</i>
            </Button>
          </div>
          <div className="drawer__content">
            <p>
              Elit occaecat qui Lorem eiusmod culpa sunt culpa exercitation
              Lorem culpa. Veniam irure occaecat incididunt amet ullamco Lorem
              et aliquip enim. Ullamco pariatur minim aliquip dolor labore
              cillum sit amet ullamco qui sit officia quis tempor deserunt eu
              anim. Non tempor veniam ullamco irure minim officia sunt
              reprehenderit excepteur. Id et voluptate ea proident ipsum in do
              eiusmod sunt laboris pariatur excepteur eu et ad sint sint.
              Excepteur sit fugiat sit Lorem sunt tempor reprehenderit quis id
              officia cupidatat veniam irure ad et fugiat anim. Voluptate do
              esse est laborum irure ipsum cillum deserunt.
            </p>
            <p>
              Aute deserunt non et incididunt labore eiusmod occaecat minim.
              Eiusmod Lorem Lorem fugiat proident officia commodo mollit enim
              aliqua pariatur aute ea. Reprehenderit anim in ipsum et minim
              dolore mollit dolore. Non nulla minim excepteur amet aute mollit
              consequat ad minim anim cupidatat consequat nostrud qui voluptate.
              Consequat tempor proident tempor reprehenderit sint veniam dolore
              eiusmod ut sunt qui.
            </p>
            <p>
              Minim occaecat nulla quis Lorem nulla sint quis dolor ad ad sunt.
              Consectetur amet consectetur ullamco cupidatat proident labore ea
              sit deserunt nisi laborum sunt. Officia culpa sunt irure voluptate
              ipsum consectetur Lorem cillum consectetur pariatur cupidatat amet
              ad. Sint laboris incididunt laboris occaecat fugiat quis do
              cupidatat. Tempor occaecat minim sint proident et sunt elit aliqua
              est duis elit. Reprehenderit nulla nostrud veniam ad nulla ea
              officia pariatur ullamco. Et velit minim labore laboris culpa
              excepteur ex ex pariatur irure sint.
            </p>
            <p>
              Qui excepteur ut qui voluptate culpa ullamco non do consectetur
              irure. Quis aliquip anim irure ipsum ad qui aute dolor cupidatat
              enim excepteur est Lorem. Excepteur Lorem anim tempor
              reprehenderit amet dolore commodo. Nulla nisi dolore commodo irure
              labore officia tempor ad reprehenderit magna et.
            </p>
          </div>
        </div>
      </div>
      <div className="page page--drawer">
        <div className="page__header page__header--drawer page__header--responsive">
          <Button className="icon-button">
            <i className="material-icons">menu</i>
          </Button>
          Drawer responsive
        </div>
        <div className="page__content page__content--drawer">
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
        </div>
      </div>
    </div>
  );
};

// Accordion.Content = AccordionContent;
// Accordion.ContentDetails = AccordionContentDetails;
// Accordion.ContentFooter = AccordionContentFooter;
// Accordion.Header = AccordionHeader;
export default withUtils(Drawer);
