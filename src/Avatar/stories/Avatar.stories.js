import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../index';
import propsExampleData from '../../utils/propsExampleData';
// import Table

const url = 'http://lorempixel.com/400/400/people/';

storiesOf('Avatar', module)
  .add('Introduction', () => (
    <div className="component-wrapper">
      <section className="introductionSection">
        <h1>Avatar</h1>
        <p>
          A component used to create images, icons, or initials which represent people or objects
        </p>

        <hr />

        <section className="examplesSection">
          <h3>Example 1 - with image url</h3>
          <div>
            <Avatar url={url} modifier="med"/>
            <Avatar url={url} username="Ismael Haytam" modifier="small"/>
            <div>
              <pre>
                <code>
                  {'const url = "http://lorempixel.com/400/400/people/"'}
                  <br />
                  <br />
                  {'<Avatar url={url} modifier="med"/>'}
                  <br />
                  <br />
                  {'<Avatar url={url} username="Ismael Haytam" modifier="small"/>'}
                  <br />
                  <br />
                </code>
              </pre>
            </div>
          </div>
          
          <br />
          <br />

          <h3>Example 2 - without image URL</h3>
          <div>
            <Avatar username="Blaze 2"/>
            <Avatar username="Kongan Page" modifier="x-small"/>
            <div>
              <pre>
                <code>
                  {'<Avatar username="Blaze 2"/>'}
                  <br />
                  <br />
                  {'<Avatar username="Kongan Page" modifier="x-small"/>'}
                  <br />
                  <br />
                </code>
              </pre>
            </div>
          </div>

        </section>


      </section>
    </div>
  ))
  .add('Props', () => (
    <div className="component-wrapper">
      <h1>Props</h1>
      <p>Avatars can receive a number of props: modifier, url, username</p>
      {/* <Table checkboxes={false} data={propsExampleData.avatar} onSelect={(selected) => console.log(selected)} /> */}
    </div>
  ));
