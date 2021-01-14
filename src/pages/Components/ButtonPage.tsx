import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

import ComponentCard from '../../components/ComponentCard';
import React from 'react';
import sharingImg from '../../assets/images/sharing.png';

const ButtonPage = () => {
  return (
    <div className='grid flex-grow gap-y-6'>
      <ComponentCard
        title='Button'
        refLink='https://www.telerik.com/kendo-react-ui/components/buttons/button/'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6 auto-rows-max '>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button icon='k-icon k-i-share'>Kendo Icon</Button>
          <Button imageUrl={sharingImg}>Image Icon</Button>
          <Button iconClass='fas fa-share-alt' className='btn-fa'>
            Fontawesome
          </Button>
          <Button togglable>Togglable</Button>
          <Button look='flat'>Flat</Button>
          <Button look='outline'>Outline</Button>
          <Button look='clear'>Clear</Button>
        </div>
      </ComponentCard>

      <ComponentCard
        title='ButtonGroup'
        refLink='https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup/'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 auto-rows-max '>
          <ButtonGroup>
            <Button togglable>Bold</Button>
            <Button togglable>Italic</Button>
            <Button togglable>Underline</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button togglable icon='bold' />
            <Button togglable icon='italic' />
            <Button togglable icon='underline' />
          </ButtonGroup>
          <ButtonGroup>
            <Button togglable icon='bold'>
              Bold
            </Button>
            <Button togglable icon='italic'>
              Italic
            </Button>
            <Button togglable icon='underline'>
              Underline
            </Button>
          </ButtonGroup>
        </div>
      </ComponentCard>

      <ComponentCard title='Chip'>
        <ButtonGroup>
          <Button togglable>Button 1</Button>
          <Button togglable>Button 2</Button>
          <Button togglable>Button 3</Button>
        </ButtonGroup>
      </ComponentCard>
      <ComponentCard title='ChipList'>
        <ButtonGroup>
          <Button togglable>Button 1</Button>
          <Button togglable>Button 2</Button>
          <Button togglable>Button 3</Button>
        </ButtonGroup>
      </ComponentCard>
      <ComponentCard title='DropDownButton'>
        <ButtonGroup>
          <Button togglable>Button 1</Button>
          <Button togglable>Button 2</Button>
          <Button togglable>Button 3</Button>
        </ButtonGroup>
      </ComponentCard>
      <ComponentCard title='SplitButton'>
        <ButtonGroup>
          <Button togglable>Button 1</Button>
          <Button togglable>Button 2</Button>
          <Button togglable>Button 3</Button>
        </ButtonGroup>
      </ComponentCard>
      <ComponentCard title='Toolbar'>
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
