import { Card } from '@twilio-paste/core';

import { MenuItemsConnected } from './MenuItemsConnected';
import { NewItemFormConnected } from './NewItemFormConnected';
import { SummaryConnected } from './SummaryConnected';
import { TipSelectConnected } from './TipSelectConnected';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormConnected />
      <MenuItemsConnected />
      <TipSelectConnected />
      <SummaryConnected />
    </Card>
  );
};

export default Calculator;
