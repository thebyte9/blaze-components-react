import "@blaze-react/blaze-components-theme";
import { storiesOf } from "@storybook/react";
import React, { lazy, Suspense } from "react";
import AlertReadme from "../README.md";

storiesOf("Pagination", module)
  .addParameters({
    readme: {
      sidebar: AlertReadme
    }
  })
  .add("Introduction", (): any => {
    const Pagination: any = lazy((): any => import("../src/Pagination"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="component-wrapper">
          <section className="introductionSection">
            <h1>Pagination</h1>
            <p>
              Component to paginate list of data or table.
            </p>
          </section>

          <h4>Example</h4>
          <Pagination
            simple
            totalItems={15}
            currentPage={1}
            visiblePages={10}
            itemsPerPage={10}
            onPageChange={(page: { pageNumber: number, itemsPerPage: number }) => {
              console.log(page)
            }}
          />

        </div>
      </Suspense>
    );
  });