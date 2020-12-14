import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

import ComponentCard from '../components/ComponentCard';
import React from 'react';
import sharingImg from '../assets/images/sharing.png';

const ButtonPage = () => {
  return (
    <div className='grid gap-y-6'>
      <ComponentCard
        title='Button'
        refLink='https://www.telerik.com/kendo-react-ui/components/buttons/button/'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 auto-rows-max '>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button icon='k-icon k-i-share'>Kendo Icon</Button>
          <Button imageUrl={sharingImg}>Image Icon</Button>
          <Button iconClass='fas fa-share-alt' className='btn-fa'>
            Fontawesome
          </Button>
          <Button togglable>Togglable</Button>
          <Button togglable>Togglable</Button>
          <Button look='flat'>Flat</Button>
          <Button look='outline'>Outline</Button>
          <Button look='clear'>Clear</Button>
        </div>
      </ComponentCard>
      <ComponentCard title='ButtonGroup'>
        <ButtonGroup>
          <Button togglable>Button 1</Button>
          <Button togglable>Button 2</Button>
          <Button togglable>Button 3</Button>
        </ButtonGroup>
      </ComponentCard>
    </div>
  );
};

export default ButtonPage;
