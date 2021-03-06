import path from 'path';

import React from 'react';
import { storiesOf } from '@storybook/react';

const Wrapper = ({ children, size }) => (
  <div
    style={{
      margin: '10px',
      width: size,
      height: size,
      display: 'inline-block',
      verticalAlign: 'middle',
    }}
  >
    {children}
  </div>
);

const stories = storiesOf('Icons', module);

const req = require.context('.', false, /^.\/Icon.*.tsx$/);
req.keys().forEach(fileName => {
  const Component = req(fileName).default;
  const componentName = path.basename(fileName, '.tsx');
  Component.displayName = componentName;

  stories.add(componentName, () => (
    <>
      <div style={{ fill: '#333', padding: '10px' }}>
        <Wrapper size="200px">
          <Component />
        </Wrapper>
        <Wrapper size="100px">
          <Component />
        </Wrapper>
        <Wrapper size="50px">
          <Component />
        </Wrapper>
        <Wrapper size="25px">
          <Component />
        </Wrapper>
      </div>
      <div style={{ background: '#333', fill: '#fff', padding: '10px' }}>
        <Wrapper size="200px">
          <Component />
        </Wrapper>
        <Wrapper size="100px">
          <Component />
        </Wrapper>
        <Wrapper size="50px">
          <Component />
        </Wrapper>
        <Wrapper size="25px">
          <Component />
        </Wrapper>
      </div>
    </>
  ));
});
